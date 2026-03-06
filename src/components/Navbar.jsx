import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="titlebar">
        <div className="profile-section">
          <img src="/himanshu.png" alt="Himanshu Patil" className="profile-dp" />
          <span className="profile-name">himanshupatil</span>
        </div>

        <div className="navbar-links">
          <a href="#work" className="nav-link">My work</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#about" className="nav-link">About</a>
        </div>

        <a href="mailto:patilhimanshu980@gmail.com" className="btn-work">
          Work with me ↗
        </a>
      </nav>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 1.5rem;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 100;
          pointer-events: none; /* Allows clicking through wrapper */
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
          pointer-events: auto; /* Restores clicking on the navbar */
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
        
        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .titlebar {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
