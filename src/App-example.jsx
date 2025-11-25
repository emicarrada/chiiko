import './App.css'
import { HeroScrollDemo } from '@/components/HeroScrollDemo'

function App() {
  return (
    <div className="app">
      {/* Componente de Aceternity UI Container Scroll Animation */}
      <HeroScrollDemo />
      
      <main className="app-main">
        <section className="hero">
          <h2>🚀 Aceternity UI instalado correctamente</h2>
          <p>El componente Container Scroll Animation está listo para usar</p>
          <p>Scroll hacia arriba para ver la animación</p>
        </section>
        
        <section className="features">
          <div className="feature-card">
            <h3>⚡ Framer Motion</h3>
            <p>Animaciones fluidas y performantes</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Tailwind CSS</h3>
            <p>Styling moderno y responsive</p>
          </div>
          <div className="feature-card">
            <h3>📦 shadcn/ui Ready</h3>
            <p>Configuración completa para componentes UI</p>
          </div>
        </section>
      </main>
      
      <footer className="app-footer">
        <p>Hecho con ❤️ usando React + Aceternity UI</p>
      </footer>
    </div>
  )
}

export default App
