import React from 'react';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <p className="hero-greeting">Hi!, I'm Himanshu</p>

        <h1 className="hero-title">
          It's <span className="text-gradient">Robotics + Automation</span> here
        </h1>

        <p className="hero-subtitle">
          Robotics and Automation Engineer who designs in SolidWorks, prototypes in KiCAD, and builds complete autonomous systems. I focus on control systems, sensor fusion, PCB design, and measurable performance.
        </p>

        <div className="hero-actions">
          <a href="mailto:patilhimanshu980@gmail.com" className="btn-light">
            Work with me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <div className="social-links">
            <a href="mailto:patilhimanshu980@gmail.com" aria-label="Email" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://linkedin.com/in/himanshupatil849" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/HimanshuPatil2" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>

          <a href="tel:+919322153341" className="btn-light">
            +91 93221 53341
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 0 4rem;
        }

        .hero-content {
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .hero-greeting {
          color: var(--text-tertiary);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .hero-title {
          font-size: clamp(2rem, 8vw, 5.7rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .text-gradient {
          background: linear-gradient(90deg, #10b981, #3b82f6, #10b981);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 5rem 0 3rem;
          }
          .hero-title {
            font-size: clamp(1.4rem, 6vw, 2.2rem);
            white-space: nowrap; /* Attempting one line even on tablets */
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 4rem 0 2rem;
          }
          .hero-title {
            font-size: clamp(1.15rem, 5vw, 1.7rem);
            white-space: normal; /* Force wrap on small phones to avoid overflow */
            line-height: 1.25;
          }
          .hero-subtitle {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }
          .hero-actions {
            gap: 0.75rem;
          }
          .btn-light {
            padding: 0.4rem 1rem;
            font-size: 0.8rem;
          }
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0.5rem auto 1.5rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-light {
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem 1.25rem;
          border-radius: 99px;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .btn-light:hover {
          border-color: #cbd5e1;
          background-color: #f8fafc;
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          color: var(--text-secondary);
          transition: all 0.2s;
          background-color: var(--bg-color);
        }

        .social-icon:hover {
          border-color: #cbd5e1;
          background-color: #f8fafc;
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
}
