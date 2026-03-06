import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ToggleShowcase from './components/ToggleShowcase'
import CompanyLogos from './components/CompanyLogos'
import SkillsGrid from './components/SkillsGrid'
import ImageMarquee from './components/ImageMarquee'
import Projects from './components/Projects'
import WhatIDo from './components/WhatIDo'
import CTA from './components/CTA'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        <Hero />
        <ToggleShowcase />
        <CompanyLogos />
        <SkillsGrid />
        <ImageMarquee />
        <Projects />
        <WhatIDo />
        <CTA />
      </main>

      <footer className="container" style={{
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        color: 'var(--text-tertiary)',
        borderTop: '1px solid var(--border-color)',
        marginTop: '2rem' /* Reduced from 6rem */
      }}>
        <div style={{ color: 'var(--text-tertiary)' }}>© 2026 Himanshu Patil. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)' }}>
          <span>Designed and built by Himanshu Patil</span>
          <a href="https://www.linkedin.com/in/himanshu-patil-b44539256/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>LinkedIn</a>
        </div>
      </footer>
    </div >
  )
}

export default App
