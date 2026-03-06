import React, { useState } from 'react';
import LazyImage from './LazyImage';

export default function ToggleShowcase() {
  const [activeTab, setActiveTab] = useState('designing');

  return (
    <section className="toggle-showcase container">
      <div className="toggle-wrapper">
        <div className="segmented-control">
          <button
            className={`segment-btn ${activeTab === 'designing' ? 'active' : ''}`}
            onClick={() => setActiveTab('designing')}
          >
            Hardware
          </button>
          <button
            className={`segment-btn ${activeTab === 'coding' ? 'active' : ''}`}
            onClick={() => setActiveTab('coding')}
          >
            Software
          </button>
        </div>
      </div>

      <div className="mockup-window">
        {activeTab === 'designing' ? (
          <LazyImage src="/Hardware.jpeg" alt="Hardware Design" className="mockup-image" style={{ width: '100%', borderRadius: '12px' }} />
        ) : (
          <LazyImage src="/software_dark.jpeg" alt="Coding Editor" className="mockup-image" style={{ width: '100%', borderRadius: '12px' }} />
        )}
      </div>

      <style>{`
        .toggle-showcase {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
          width: 100%;
        }

        .toggle-wrapper {
          background: #f1f5f9;
          padding: 4px;
          border-radius: 99px;
          margin-bottom: 2.5rem;
        }

        .segmented-control {
          display: flex;
          gap: 4px;
        }

        .segment-btn {
          padding: 0.5rem 2rem;
          border-radius: 99px;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .segment-btn.active {
          background: white;
          color: var(--text-primary);
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .mockup-window {
          width: 100%;
          max-width: 1100px; /* Made bigger as requested */
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          display: flex;
          justify-content: center;
          align-items: center;
          background: #1e1e1e;
        }

        .mockup-image {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 768px) {
          .mockup-window {
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </section>
  );
}
