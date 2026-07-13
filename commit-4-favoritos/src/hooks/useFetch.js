import { useState, useEffect } from 'react'

/**
 * Hook reutilizable para consumir una API.
 * Se encarga de manejar los 3 estados típicos de una petición:
 *  - loading: mientras la petición está en curso
 *  - error: si algo falla (red caída, status distinto de 200, etc.)
 *  - data: el resultado ya parseado como JSON
 *
 * @param {string} url - endpoint a consultar
 */
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // "cancelado" evita que actualicemos el estado si el componente
    // se desmontó antes de que la petición terminara.
    let cancelado = false

    async function fetchData() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`)
        }
        const json = await response.json()
        if (!cancelado) {
          setData(json)
        }
      } catch (err) {
        if (!cancelado) {
          setError(err.message)
        }
      } finally {
        if (!cancelado) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      cancelado = true
    }
  }, [url])

  return { data, loading, error }
}
