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
          <div className="footer-socials">
            <a href="https://github.com/HimanshuPatil2" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/himanshupatil849" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com/himanshupatil849" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div className="footer-credit">
            Designed and built by Himanshu Patil
          </div>
          <div className="footer-copyright">
            © 2026 Himanshu Patil. All rights reserved.
          </div>
        </footer>

        <GlobalImageModal />

        <style>{`
          .site-footer {
            padding: 4rem 0 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            font-size: 0.9rem;
            color: var(--text-tertiary);
            border-top: 1px solid var(--border-color);
            margin-top: 4rem;
            text-align: center;
          }
          .footer-socials {
            display: flex;
            gap: 2rem;
          }
          .footer-socials a {
            color: var(--text-primary);
            font-weight: 500;
            transition: color 0.2s;
          }
          .footer-socials a:hover {
            color: var(--accent-green);
          }
          .footer-credit {
            color: var(--text-secondary);
            font-weight: 500;
          }
          .footer-copyright {
            color: var(--text-tertiary);
            font-size: 0.85rem;
          }
          @media (max-width: 480px) {
            .site-footer {
              padding: 3rem 1rem;
              gap: 1.25rem;
            }
            .footer-socials {
              gap: 1.5rem;
            }
          }
        `}</style>
      </div >
    </ImageModalProvider>
  )
}

export default App
