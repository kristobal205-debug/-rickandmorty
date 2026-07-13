import { useState, useEffect } from 'react'

/**
 * Hook reutilizable para sincronizar un estado de React con localStorage.
 * Funciona igual que useState, pero además:
 *  - Al montar, intenta leer el valor guardado en localStorage.
 *  - Cada vez que el valor cambia, lo vuelve a guardar automáticamente.
 *
 * @param {string} key - la llave con la que se guarda en localStorage
 * @param {*} initialValue - valor por defecto si no hay nada guardado
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch (error) {
      console.error(`Error leyendo localStorage para la llave "${key}":`, error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error guardando en localStorage para la llave "${key}":`, error)
    }
  }, [key, value])

  return [value, setValue]
}
