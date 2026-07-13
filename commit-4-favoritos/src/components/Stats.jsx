/**
 * Estadísticas. Se agrega el contador de favoritos.
 */
function Stats({ total, favoritesCount }) {
  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Totales</span>
      </div>
      <div className="stat">
        <span className="stat-number">{favoritesCount}</span>
        <span className="stat-label">Favoritos</span>
      </div>
    </div>
  )
}

export default Stats
