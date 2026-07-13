/**
 * Tarjeta individual de un personaje.
 * Se agrega el botón de bloqueo, junto al de favorito.
 */
function CharacterCard({ character, isFavorite, isBlocked, onToggleFavorite, onToggleBlocked }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-info">
        <h3>{character.name}</h3>
        <p>{character.species} · {character.status}</p>
        <div className="character-actions">
          <button
            className={isFavorite ? 'btn-favorite active' : 'btn-favorite'}
            onClick={() => onToggleFavorite(character)}
          >
            {isFavorite ? '★ Favorito' : '☆ Favorito'}
          </button>
          <button
            className={isBlocked ? 'btn-block active' : 'btn-block'}
            onClick={() => onToggleBlocked(character)}
          >
            {isBlocked ? 'Desbloquear' : 'Bloquear'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
