/**
 * Estadísticas: total, favoritos y ahora también bloqueados.
 */
function Stats({ total, favoritesCount, blockedCount }) {
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
      <div className="stat">
        <span className="stat-number">{blockedCount}</span>
        <span className="stat-label">Bloqueados</span>
      </div>
    </div>
  )
}

export default Stats
