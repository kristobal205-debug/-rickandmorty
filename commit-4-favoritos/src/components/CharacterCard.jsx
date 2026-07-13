/**
 * Tarjeta individual de un personaje.
 * Se agrega el botón de favorito. Recibe isFavorite (para pintar
 * el estado activo) y onToggleFavorite (callback hacia el padre).
 * Esto es "comunicación de hijo a padre" mediante props.
 */
function CharacterCard({ character, isFavorite, onToggleFavorite }) {
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
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
