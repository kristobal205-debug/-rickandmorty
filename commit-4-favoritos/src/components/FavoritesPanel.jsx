/**
 * Panel lateral de favoritos. Muestra los personajes marcados
 * como favoritos y permite quitarlos directamente desde aquí.
 */
function FavoritesPanel({ favorites, onToggleFavorite }) {
  return (
    <aside className="side-panel favorites-panel">
      <h2>⭐ Favoritos ({favorites.length})</h2>
      {favorites.length === 0 ? (
        <p className="empty-message">Aún no tienes favoritos.</p>
      ) : (
        <ul className="side-panel-list">
          {favorites.map((character) => (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <span>{character.name}</span>
              <button onClick={() => onToggleFavorite(character)}>✕</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default FavoritesPanel
