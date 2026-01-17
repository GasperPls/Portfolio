import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import Footer from './components/footer.jsx'
import NavBar from './components/navbar.jsx'
import Hero from './components/hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NavBar />
    <Hero />
    <Footer />
  </StrictMode>,

)
