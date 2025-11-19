import Hero from './components/Hero'
import StackGrid from './components/StackGrid'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{background:'#0a0a0a'}}>
      <Hero />
      <StackGrid />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
