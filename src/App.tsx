import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/layout/Layout'
import Preloader from './components/layout/Preloader'
import { CustomCursor } from './components/ui/CustomCursor'
import { ThreeBackground } from './components/animations/ThreeBackground'
import { ParticleBackground } from './components/animations/ParticleBackground'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { BackToTop } from './components/ui/BackToTop'
import { useState, useEffect } from 'react'
import './styles/globals.css'
import './styles/animations.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="App relative min-h-screen bg-primary text-primary transition-colors duration-300">
          <ScrollProgress />
          <ThreeBackground />
          <ParticleBackground />
          <CustomCursor />
          <Layout />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App