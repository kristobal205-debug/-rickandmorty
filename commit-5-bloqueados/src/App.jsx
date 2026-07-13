import { useState, useMemo } from 'react'
import { useFetch } from './hooks/useFetch.js'
import SearchBar from './components/SearchBar.jsx'
import CharacterList from './components/CharacterList.jsx'
import FavoritesPanel from './components/FavoritesPanel.jsx'
import BlockedPanel from './components/BlockedPanel.jsx'
import Stats from './components/Stats.jsx'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

/**
 * COMMIT 5 - feat: bloquear y desbloquear elementos.
 * Se agrega el estado "blocked" y dos reglas del enunciado:
 *  1. Un personaje bloqueado no aparece en los resultados de búsqueda.
 *  2. Si un personaje en favoritos se bloquea, se quita de favoritos.
 */
function App() {
  const { data, loading, error } = useFetch(API_URL)
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])
  const [blocked, setBlocked] = useState([])

  const allCharacters = data?.results ?? []

  function handleToggleFavorite(character) {
    const yaEsFavorito = favorites.some((fav) => fav.id === character.id)
    if (yaEsFavorito) {
      setFavorites(favorites.filter((fav) => fav.id !== character.id))
    } else {
      setFavorites([...favorites, character])
    }
  }

  function handleToggleBlocked(character) {
    const yaEstaBloqueado = blocked.some((b) => b.id === character.id)
    if (yaEstaBloqueado) {
      setBlocked(blocked.filter((b) => b.id !== character.id))
    } else {
      setBlocked([...blocked, character])
      // Regla: si estaba en favoritos, se quita automáticamente.
      setFavorites(favorites.filter((fav) => fav.id !== character.id))
    }
  }

  const visibleCharacters = useMemo(() => {
    return allCharacters
      .filter((character) => !blocked.some((b) => b.id === character.id))
      .filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  }, [allCharacters, blocked, searchTerm])

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Rick & Morty Explorer</h1>
        <p className="integrantes">Integrantes: Kristobal Ledezma</p>
      </header>

      <Stats
        total={allCharacters.length}
        favoritesCount={favorites.length}
        blockedCount={blocked.length}
      />

      <div className="main-content">
        <BlockedPanel blocked={blocked} onToggleBlocked={handleToggleBlocked} />

        <section className="center-column">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {loading && <p className="loading-message">Cargando personajes...</p>}
          {error && <p className="error-message">Ocurrió un error: {error}</p>}

          {!loading && !error && (
            <CharacterList
              characters={visibleCharacters}
              favorites={favorites}
              blocked={blocked}
              onToggleFavorite={handleToggleFavorite}
              onToggleBlocked={handleToggleBlocked}
            />
          )}
        </section>

        <FavoritesPanel favorites={favorites} onToggleFavorite={handleToggleFavorite} />
      </div>
    </div>
  )
}

export default App
