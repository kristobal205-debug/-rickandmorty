/**
 * Barra de búsqueda. Es un componente "controlado": no guarda su propio
 * estado, sino que recibe el valor actual (searchTerm) y una función
 * para avisarle al padre (App) cuando el usuario escribe algo.
 */
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar personaje por nombre..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
