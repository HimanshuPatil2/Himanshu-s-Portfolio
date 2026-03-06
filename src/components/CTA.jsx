import React from 'react';
import LazyImage from './LazyImage';

export default function CTA() {
  return (
    <section className="cta container">
      <div className="cta-card">
        <div className="cta-content">
          <h2 className="cta-subtitle">Want to build something autonomous?</h2>
          <h1 className="cta-title">I'd love to hear from you!</h1>

          <div className="cta-buttons">
            <a href="mailto:patilhimanshu980@gmail.com" className="btn-dark mt-4">
              Work with me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
            <a href="/cv.pdf" download="Himanshu_Patil_CV.pdf" className="btn-outline mt-4">
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="cta-image">
          <LazyImage src="/workspace.png" alt="3D Workspace Illustration" style={{ borderRadius: '16px' }} />
        </div>
      </div>

      <style>{`
        .cta {
          padding: 4rem 0 0rem;
        }

        .cta-card {
          background: linear-gradient(135deg, #fdfbf7 0%, #faeee7 100%);
          border-radius: 24px;
          padding: 3rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          max-width: 500px;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .cta-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .cta-title {
          font-size: 2.25rem;
          color: var(--text-primary);
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }

        .mt-4 { margin-top: 1rem; }

        .btn-dark {
          background-color: var(--primary);
          color: white;
          padding: 0.75rem 1.75rem;
          border-radius: 99px;
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: opacity 0.2s, transform 0.2s;
        }

        .btn-dark:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .btn-outline {
          background-color: transparent;
          color: var(--text-primary);
          border: 1.5px solid var(--text-primary);
          padding: 0.75rem 1.75rem;
          border-radius: 99px;
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.2s, color 0.2s, transform 0.2s;
          text-decoration: none;
          cursor: pointer;
        }

        .btn-outline:hover {
          background-color: var(--primary);
          color: white;
          transform: translateY(-2px);
        }

        .cta-image {
          width: 320px;
          height: 220px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .cta-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .cta-card {
            flex-direction: column;
            padding: 2rem;
            text-align: center;
          }
          
          .cta-content {
            align-items: center;
          }
          
          .cta-image {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}
