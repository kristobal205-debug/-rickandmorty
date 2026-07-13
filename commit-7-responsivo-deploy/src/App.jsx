import { useState, useMemo } from 'react'
import { useFetch } from './hooks/useFetch.js'
import { useLocalStorage } from './hooks/useLocalStorage.js'
import SearchBar from './components/SearchBar.jsx'
import CharacterList from './components/CharacterList.jsx'
import FavoritesPanel from './components/FavoritesPanel.jsx'
import BlockedPanel from './components/BlockedPanel.jsx'
import Stats from './components/Stats.jsx'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

/**
 * COMMIT 6 - feat: persistencia en localStorage.
 * Único cambio real respecto al commit anterior: favorites y blocked
 * ahora usan useLocalStorage en lugar de useState. La lógica de negocio
 * (handleToggleFavorite, handleToggleBlocked, el filtrado) no cambia,
 * porque useLocalStorage tiene la MISMA firma que useState ([valor, setValor]).
 */
function App() {
  const { data, loading, error } = useFetch(API_URL)
  const [searchTerm, setSearchTerm] = useState('')
  const [favorites, setFavorites] = useLocalStorage('favorites', [])
  const [blocked, setBlocked] = useLocalStorage('blocked', [])

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
        <p className="integrantes">Integrantes: Kristobal Ledezma, Bastián Madariaga</p>
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
