import React from 'react';
import LazyImage from './LazyImage';

export default function WhatIDo() {
  return (
    <section id="about" className="what-i-do container">
      <div className="what-left">
        <div className="about-images-container">
          <div className="about-image-wrapper">
            <LazyImage src="/himanshu.png" alt="Himanshu Patil" className="about-image" style={{ borderRadius: '16px' }} />
          </div>
          <div className="about-gallery">
            <LazyImage src="/e1.jpeg" alt="Experience snapshot 1" className="gallery-img" style={{ aspectRatio: '1/1', borderRadius: '12px' }} />
            <LazyImage src="/e2.jpeg" alt="Experience snapshot 2" className="gallery-img" style={{ aspectRatio: '1/1', borderRadius: '12px' }} />
            <LazyImage src="/e3.jpeg" alt="Experience snapshot 3" className="gallery-img" style={{ aspectRatio: '1/1', borderRadius: '12px' }} />
          </div>
        </div>
      </div>

      <div className="what-right">
        <div className="what-header">
          <h2 className="what-subtitle" style={{ marginBottom: '1rem' }}>What I do.</h2>
          <h1 className="what-title" style={{ marginBottom: '2rem' }}>
            I help teams turn complex engineering problems into measurable robotic solutions, design efficient PCBs, and ship production-ready automation systems.
          </h1>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <h3 className="card-title">Robotics & Automation</h3>
            <p className="card-desc">Design forward/inverse kinematics, implement ROS2/Gazebo simulations, and develop path planning algorithms for autonomous systems.</p>
          </div>

          <div className="service-card">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </div>
            <h3 className="card-title">Embedded Systems</h3>
            <p className="card-desc">Engineer multi-layer PCBs in KiCAD/Altium, program microcontrollers (STM32, RP2040), and integrate industrial protocols.</p>
          </div>

          <div className="service-card full-width">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3 className="card-title">Mechanical CAD</h3>
            <p className="card-desc">Create high-precision 3D models in SolidWorks, conduct FEA validation, and accelerate prototyping via additive manufacturing.</p>
          </div>
        </div>
      </div>

      <style>{`
        .what-i-do {
          display: flex;
          padding: 4rem 0;
          gap: 3rem;
          align-items: center;
        }

        .what-left {
          flex: 0 0 340px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .what-subtitle {
          font-size: 1.2rem;
          color: var(--text-tertiary);
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .what-title {
          font-size: 1.75rem;
          font-weight: 600;
          line-height: 1.25;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .about-images-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .about-image-wrapper {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .about-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .about-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .gallery-img {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .what-right {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .service-card {
          background: #f8fafc;
          border-radius: 14px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .service-card.full-width {
          grid-column: span 2;
        }

        .icon {
          color: var(--text-secondary);
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        @media (max-width: 1024px) {
          .what-left {
            flex: 0 0 280px;
          }
          .what-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .what-i-do {
            flex-direction: column;
            gap: 2rem;
            padding: 3rem 0;
          }
          .what-left {
            flex: none;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
          }
          .what-right {
            width: 100%;
          }
          .what-title {
            font-size: 1.35rem;
          }
          .what-subtitle {
            font-size: 1rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .service-card.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
