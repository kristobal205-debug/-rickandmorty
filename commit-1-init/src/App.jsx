import './App.css'

/**
 * COMMIT 1 - init: estructura inicial del proyecto.
 * Todavía no hay conexión a la API ni lógica. Solo el layout base
 * para confirmar que Vite + React están corriendo correctamente.
 */
function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Rick & Morty Explorer</h1>
        <p className="integrantes">Integrantes: Kristobal Ledezma</p>
      </header>

      <p>Proyecto base funcionando. Próximo commit: conexión a la API.</p>
    </div>
  )
}

export default App
