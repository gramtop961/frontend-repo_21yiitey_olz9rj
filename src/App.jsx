import Hero from './components/Hero'
import BadgesMarquee from './components/BadgesMarquee'
import StackGrid from './components/StackGrid'
import Projects from './components/Projects'
import ResumeHighlights from './components/ResumeHighlights'
import Experience from './components/Experience'
import Skills from './components/Skills'
import EducationCerts from './components/EducationCerts'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{background:'#0a0a0a'}}>
      <Hero />
      <BadgesMarquee />
      <StackGrid />
      <Projects />
      <ResumeHighlights />
      <Experience />
      <Skills />
      <EducationCerts />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
