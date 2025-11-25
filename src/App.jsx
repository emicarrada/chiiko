import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Bienvenido a Chiiko</h1>
        <p>Tu sitio web desarrollado con React + Vite</p>
      </header>
      
      <main className="app-main">
        <section className="hero">
          <h2>🚀 Comienza a construir algo increíble</h2>
          <p>Edita <code>src/App.jsx</code> para empezar</p>
        </section>
        
        <section className="features">
          <div className="feature-card">
            <h3>⚡ Rápido</h3>
            <p>Powered by Vite y Rolldown</p>
          </div>
          <div className="feature-card">
            <h3>⚛️ Moderno</h3>
            <p>React 19 con las últimas características</p>
          </div>
          <div className="feature-card">
            <h3>📦 Organizado</h3>
            <p>Estructura de proyecto escalable</p>
          </div>
        </section>
      </main>
      
      <footer className="app-footer">
        <p>Hecho con ❤️ usando React</p>
      </footer>
    </div>
  )
}

export default App
