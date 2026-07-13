/**
 * Panel lateral de bloqueados. Muestra los personajes bloqueados
 * y permite desbloquearlos (lo que hace que vuelvan a aparecer
 * en el listado principal de búsqueda).
 */
function BlockedPanel({ blocked, onToggleBlocked }) {
  return (
    <aside className="side-panel blocked-panel">
      <h2>🚫 Bloqueados ({blocked.length})</h2>
      {blocked.length === 0 ? (
        <p className="empty-message">No has bloqueado a nadie.</p>
      ) : (
        <ul className="side-panel-list">
          {blocked.map((character) => (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <span>{character.name}</span>
              <button onClick={() => onToggleBlocked(character)}>Desbloquear</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default BlockedPanel
