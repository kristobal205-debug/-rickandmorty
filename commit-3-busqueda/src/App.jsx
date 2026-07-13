import { useState, useMemo } from 'react'
import { useFetch } from './hooks/useFetch.js'
import SearchBar from './components/SearchBar.jsx'
import CharacterList from './components/CharacterList.jsx'
import Stats from './components/Stats.jsx'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

/**
 * COMMIT 3 - feat: barra de busqueda y filtrado.
 * Se agrega el estado searchTerm y se filtra el listado con useMemo,
 * que evita recalcular el filtro si ni los personajes ni el término
 * de búsqueda cambiaron entre renders.
 */
function App() {
  const { data, loading, error } = useFetch(API_URL)
  const [searchTerm, setSearchTerm] = useState('')

  const allCharacters = data?.results ?? []

  const visibleCharacters = useMemo(() => {
    return allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [allCharacters, searchTerm])

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Rick & Morty Explorer</h1>
        <p className="integrantes">Integrantes: Kristobal Ledezma</p>
      </header>

      <Stats total={allCharacters.length} />

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {loading && <p className="loading-message">Cargando personajes...</p>}
      {error && <p className="error-message">Ocurrió un error: {error}</p>}

      {!loading && !error && <CharacterList characters={visibleCharacters} />}
    </div>
  )
}

export default App
