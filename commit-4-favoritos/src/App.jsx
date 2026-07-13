import { useState, useMemo } from 'react'
import { useFetch } from './hooks/useFetch.js'
import SearchBar from './components/SearchBar.jsx'
import CharacterList from './components/CharacterList.jsx'
import FavoritesPanel from './components/FavoritesPanel.jsx'
import Stats from './components/Stats.jsx'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

/**
 * COMMIT 4 - feat: marcar y quitar favoritos con panel lateral.
 * Se agrega el estado "favorites" (por ahora con useState normal,
 * todavía sin localStorage — eso llega en el commit 6) y el panel
 * lateral que lo muestra.
 */
function App() {
  const { data, loading, error } = useFetch(API_URL)
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useState([])

  const allCharacters = data?.results ?? []

  function handleToggleFavorite(character) {
    const yaEsFavorito = favorites.some((fav) => fav.id === character.id)
    if (yaEsFavorito) {
      setFavorites(favorites.filter((fav) => fav.id !== character.id))
    } else {
      setFavorites([...favorites, character])
    }
  }

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

      <Stats total={allCharacters.length} favoritesCount={favorites.length} />

      <div className="main-content">
        <section className="center-column">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {loading && <p className="loading-message">Cargando personajes...</p>}
          {error && <p className="error-message">Ocurrió un error: {error}</p>}

          {!loading && !error && (
            <CharacterList
              characters={visibleCharacters}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        </section>

        <FavoritesPanel favorites={favorites} onToggleFavorite={handleToggleFavorite} />
      </div>
    </div>
  )
}

export default App
