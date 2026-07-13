/**
 * Tarjeta individual de un personaje.
 * En este commit todavía es solo de lectura: sin botones de
 * favorito ni bloqueo (eso llega en commits posteriores).
 */
function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-info">
        <h3>{character.name}</h3>
        <p>{character.species} · {character.status}</p>
      </div>
    </div>
  )
}

export default CharacterCard
