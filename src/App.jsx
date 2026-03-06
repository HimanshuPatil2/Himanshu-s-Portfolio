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
          <div className="footer-item footer-left">
            © 2026 Himanshu Patil. All rights reserved.
          </div>
          <div className="footer-item footer-socials">
            <a href="https://github.com/HimanshuPatil2" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/himanshupatil849" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com/himanshupatil849" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div className="footer-item footer-right">
            <span className="footer-credit">Designed and built by Himanshu Patil</span>
          </div>
        </footer>

        <GlobalImageModal />

        <style>{`
          .site-footer {
            padding: 3rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
            color: var(--text-tertiary);
            border-top: 1px solid var(--border-color);
            margin-top: 4rem;
          }
          .footer-item {
            flex: 1;
          }
          .footer-left {
            text-align: left;
          }
          .footer-socials {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
          }
          .footer-right {
            text-align: right;
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
          }
          @media (max-width: 1024px) {
            .site-footer {
              flex-direction: column;
              gap: 1.5rem;
              text-align: center;
              padding: 2.5rem 0;
            }
            .footer-item {
              flex: none;
            }
            .footer-left, .footer-right {
              text-align: center;
            }
          }
          @media (max-width: 480px) {
            .footer-socials {
              gap: 1rem;
              flex-wrap: wrap;
            }
          }
        `}</style>
      </div >
    </ImageModalProvider>
  )
}

export default App
