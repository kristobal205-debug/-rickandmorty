import CharacterCard from './CharacterCard.jsx'

/**
 * Lista de personajes. Ahora recibe también el arreglo de favoritos
 * para poder decirle a cada CharacterCard si debe pintarse como activa.
 */
function CharacterList({ characters, favorites, onToggleFavorite }) {
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
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default CharacterList
