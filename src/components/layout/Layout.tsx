import Navigation from './Navigation'
import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import Projects from '../sections/Projects/Projects'
import Skills from '../sections/Skills/Skills'
import Contact from '../sections/Contact/Contact'
import Footer from '../sections/Footer/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen bg-dark-100 text-white">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Layout