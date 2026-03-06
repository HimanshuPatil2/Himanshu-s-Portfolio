import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar-wrapper">
      <nav className="titlebar">
        <div className="profile-section">
          <img src="/himanshu.png" alt="Himanshu Patil" className="profile-dp" />
          <span className="profile-name">Himanshu Patil</span>
        </div>

        <div className="navbar-links">
          <a href="#work" className="nav-link">My work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
        </div>

        <a href="mailto:patilhimanshu980@gmail.com" className="btn-work desktop-only">
          Work with me ↗
        </a>

        {/* Hamburger button — mobile only */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu" onClick={e => e.stopPropagation()}>
            <a href="#work" className="mobile-nav-link" onClick={closeMenu}>My Work</a>
            <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a>
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
            <a href="mailto:patilhimanshu980@gmail.com" className="mobile-cta" onClick={closeMenu}>
              Work with me ↗
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 1.5rem;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 100;
          pointer-events: none;
        }

        .titlebar {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.35rem 0.35rem 0.35rem 0.5rem;
          border-radius: 99px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          pointer-events: auto;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-left: 0.25rem;
        }

        .profile-dp {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .profile-name {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-primary);
          padding-right: 0.5rem;
        }
        
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0 0.5rem;
          border-left: 1px solid rgba(0,0,0,0.1);
          border-right: 1px solid rgba(0,0,0,0.1);
          height: 24px;
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.2s;
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .btn-work {
          background-color: var(--text-primary);
          color: white;
          padding: 0.6rem 1.25rem;
          border-radius: 99px;
          font-weight: 500;
          font-size: 0.95rem;
          transition: background-color 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .btn-work:hover {
          background-color: #334155;
        }

        /* Hamburger button — hidden on desktop */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          width: 36px;
          height: 36px;
          padding: 0;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .hamburger-btn:hover {
          background: rgba(0,0,0,0.05);
        }

        .hamburger-line {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }

        .hamburger-line.open:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger-line.open:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* Mobile overlay */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 99;
          pointer-events: auto;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 5rem;
          animation: fadeIn 0.2s ease;
        }

        .mobile-menu {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          width: calc(100% - 2rem);
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          animation: slideDown 0.25s ease;
        }

        .mobile-nav-link {
          padding: 1rem 1.25rem;
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-primary);
          text-decoration: none;
          border-radius: 12px;
          transition: background 0.2s;
        }

        .mobile-nav-link:hover {
          background: #f1f5f9;
        }

        .mobile-cta {
          margin-top: 0.5rem;
          padding: 1rem 1.25rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: white;
          background: var(--text-primary);
          text-decoration: none;
          border-radius: 12px;
          text-align: center;
          transition: opacity 0.2s;
        }

        .mobile-cta:hover {
          opacity: 0.9;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .desktop-only {
            display: none;
          }
          .hamburger-btn {
            display: flex;
          }
          .titlebar {
            gap: 0.5rem;
            padding: 0.35rem;
          }
        }
      `}</style>
    </div>
  );
}
