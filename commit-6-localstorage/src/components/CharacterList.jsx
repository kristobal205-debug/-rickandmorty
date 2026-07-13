import CharacterCard from './CharacterCard.jsx'

/**
 * Lista de personajes. Recibe el arreglo ya filtrado (sin bloqueados,
 * ya aplicado el término de búsqueda) y solo se encarga de recorrerlo
 * y pintar una CharacterCard por cada uno.
 */
function CharacterList({ characters, favorites, blocked, onToggleFavorite, onToggleBlocked }) {
  if (characters.length === 0) {
    return <p className="empty-message">No se encontraron personajes con ese criterio.</p>
  }

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isFavorite={favorites.some((fav) => fav.id === character.id)}
          isBlocked={blocked.some((b) => b.id === character.id)}
          onToggleFavorite={onToggleFavorite}
          onToggleBlocked={onToggleBlocked}
        />
      ))}
    </div>
  )
}

export default CharacterList
