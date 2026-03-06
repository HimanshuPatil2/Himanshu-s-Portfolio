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
import { ImageModalProvider } from './context/ImageModalContext'
import GlobalImageModal from './components/GlobalImageModal'

function App() {
  return (
    <ImageModalProvider>
      <div className="app-wrapper">
        <Navbar />

        <main>
          <Hero />
          <ToggleShowcase />
          <CompanyLogos />
          <ImageMarquee />
          <Projects />
          <WhatIDo />
          <SkillsGrid />
          <CTA />
        </main>

        <footer className="site-footer container">
          <div className="footer-left">© 2026 Himanshu Patil. All rights reserved.</div>
          <div className="footer-right">
            <a href="https://github.com/HimanshuPatil2" target="_blank" rel="noreferrer"> GitHub</a>
            <a href="https://linkedin.com/in/himanshupatil849" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com/himanshupatil849" target="_blank" rel="noreferrer">Instagram</a>
            <span className="footer-credit"> Designed and built by Himanshu Patil</span>
          </div>
        </footer>

        <GlobalImageModal />

        <style>{`
          .site-footer {
            padding: 2rem 0;
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: var(--text-tertiary);
            border-top: 1px solid var(--border-color);
            margin-top: 2rem;
          }
          .footer-left {
            color: var(--text-tertiary);
          }
          .footer-right {
            display: flex;
            gap: 1.5rem;
            color: var(--text-secondary);
          }
          .footer-right a {
            color: var(--text-primary);
            font-weight: 500;
          }
          @media (max-width: 768px) {
            .site-footer {
              flex-direction: column;
              align-items: center;
              gap: 0.75rem;
              text-align: center;
              font-size: 0.8rem;
            }
            .footer-right {
              flex-direction: column;
              align-items: center;
              gap: 0.5rem;
            }
          }
        `}</style>
      </div >
    </ImageModalProvider>
  )
}

export default App
