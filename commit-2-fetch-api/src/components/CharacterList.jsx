import CharacterCard from './CharacterCard.jsx'

/**
 * Lista de personajes. Por ahora recibe el arreglo completo que
 * llega de la API (sin filtros todavía) y pinta una tarjeta por cada uno.
 */
function CharacterList({ characters }) {
  if (characters.length === 0) {
    return <p className="empty-message">No hay personajes para mostrar.</p>
  }

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

export default CharacterList
