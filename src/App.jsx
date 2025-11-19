import NavBar from './components/NavBar'
import Hero from './components/Hero'
import BadgesMarquee from './components/BadgesMarquee'
import StackGrid from './components/StackGrid'
import ProjectsModal from './components/ProjectsModal'
import ResumeHighlights from './components/ResumeHighlights'
import Experience from './components/Experience'
import Skills from './components/Skills'
import EducationCerts from './components/EducationCerts'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Section from './components/Section'
import Starfield from './components/Starfield'

function App() {
  return (
    <div className="min-h-screen relative" style={{background:'#0a0a0a'}}>
      {/* Holo Navbar */}
      <NavBar />

      {/* Background layers */}
      <div className="site-bg">
        <div className="bg-aurora" />
        <div className="bg-grid" />
        <div className="bg-noise" />
      </div>
      {/* Starfield overlay */}
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none">
        <Starfield density={180} speed={0.015} />
      </div>

      <Section variant="reveal" delay={0.05}><Hero /></Section>
      <Section variant="wipe" delay={0.1}><BadgesMarquee /></Section>
      <Section variant="fade" delay={0.12}><StackGrid /></Section>
      <Section variant="fade" delay={0.14}><ProjectsModal /></Section>
      <Section variant="fade" delay={0.16}><ResumeHighlights /></Section>
      <Section variant="fade" delay={0.18}><Experience /></Section>
      <Section variant="fade" delay={0.2}><Skills /></Section>
      <Section variant="fade" delay={0.22}><EducationCerts /></Section>
      <Section variant="fade" delay={0.24}><Contact /></Section>
      <Footer />
    </div>
  )
}

export default App
