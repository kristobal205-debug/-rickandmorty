/**
 * Estadísticas. En este commit solo mostramos el total, porque
 * favoritos y bloqueados todavía no existen (llegan en próximos commits).
 */
function Stats({ total }) {
  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Totales</span>
      </div>
    </div>
  )
}

export default Stats
