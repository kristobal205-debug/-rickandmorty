import { useFetch } from './hooks/useFetch.js'
import CharacterList from './components/CharacterList.jsx'
import Stats from './components/Stats.jsx'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

/**
 * COMMIT 2 - feat: carga de datos desde la API y listado con imagenes.
 * Se agrega useFetch para traer los personajes y se muestran en pantalla.
 * Todavía no hay búsqueda, favoritos ni bloqueados.
 */
function App() {
  const { data, loading, error } = useFetch(API_URL)
  const allCharacters = data?.results ?? []

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Rick & Morty Explorer</h1>
        <p className="integrantes">Integrantes: Kristobal Ledezma, Bastián Madariaga</p>
      </header>

      <Stats total={allCharacters.length} />

      {loading && <p className="loading-message">Cargando personajes...</p>}
      {error && <p className="error-message">Ocurrió un error: {error}</p>}

      {!loading && !error && <CharacterList characters={allCharacters} />}
    </div>
  )
}

export default App
