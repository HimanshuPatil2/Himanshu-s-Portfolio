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
          <div className="footer-left">
            © 2026 Himanshu Patil. All rights reserved.
          </div>
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/HimanshuPatil2" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/himanshupatil849" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://instagram.com/himanshupatil849" target="_blank" rel="noreferrer">Instagram</a>
            </div>
            <div className="footer-credit">
              Designed and built by Himanshu Patil
            </div>
          </div>
        </footer>

        <GlobalImageModal />

        <style>{`
          .site-footer {
            padding: 4rem 0 3rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 0.9rem;
            color: var(--text-tertiary);
            border-top: 1px solid var(--border-color);
            margin-top: 4rem;
          }
          .footer-left {
            color: var(--text-tertiary);
            padding-bottom: 0.2rem;
          }
          .footer-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.75rem;
          }
          .footer-socials {
            display: flex;
            gap: 1.5rem;
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
            font-size: 0.85rem;
          }
          @media (max-width: 768px) {
            .site-footer {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 2rem;
              padding: 3rem 0;
            }
            .footer-right {
              align-items: center;
              order: -1;
            }
            .footer-left {
              font-size: 0.8rem;
            }
          }
        `}</style>
      </div >
    </ImageModalProvider>
  )
}

export default App
