import React from 'react';
import LazyImage from './LazyImage';

export default function Projects() {
  const projects = [
    {
      title: 'WIFI+BLE Presence Monitor',
      description: 'A smart presence monitor utilizing both WiFi and BLE for accurate indoor tracking.',
      imgSrc: '/wifi_ble_monitor.jpeg',
      imgBg: '#f8fafc'
    },
    {
      title: 'AFSK System',
      description: 'An Audio Frequency-Shift Keying module developed for reliable radio data transmission.',
      imgSrc: '/afsk.jpeg',
      imgBg: '#f8fafc'
    },
    {
      title: 'Aerial Payload Mechanism',
      description: 'A custom-designed payload deployment mechanism engineered for delivery drones.',
      imgSrc: '/payload.jpeg',
      imgBg: '#f8fafc'
    },
    {
      title: 'Precision Robotic Arm',
      description: 'A highly articulated robotic arm engineered for agile pick-and-place automation tasks.',
      imgSrc: '/robotic_arm.jpeg',
      imgBg: '#f8fafc'
    },
    {
      title: 'Visage',
      description: 'An advanced Expressive robotic head capable of real-time facial expressions.',
      imgSrc: '/visage.jpeg',
      imgBg: '#f8fafc'
    },
    {
      title: 'Autonomous VTOL Aircraft',
      description: 'A Vertical Take-Off and Landing drone designed for long-range surveying missions.',
      imgSrc: '/vtol.jpeg',
      imgBg: '#f8fafc'
    },
    {
      title: 'DriveCore v1 Motor Driver',
      description: 'A compact integrated 4-layer stepper motor driver board supporting 2.5A motors.',
      imgSrc: '/drivecore_motor_driver.png',
      imgBg: '#f8fafc'
    },
    {
      title: 'Professor Pico MK1 Dev Board',
      description: 'A custom RP2040-based development platform with full hardware design cycle implementation.',
      imgSrc: '/professor_pico_pcb.png',
      imgBg: '#f8fafc'
    },
    {
      title: 'Mechatronic Heart',
      description: 'A bio-inspired artificial organ system replicating human cardiovascular dynamics.',
      imgSrc: '/heart.png',
      imgBg: '#f8fafc'
    }
  ];

  return (
    <section id="work" className="projects container">
      <div className="projects-header">
        <h2 className="projects-title">My Work </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper" style={{ background: project.imgBg }}>
              {project.imgSrc && (
                <LazyImage src={project.imgSrc} alt={project.title} style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
              )}
            </div>

            <div className="project-info">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-company">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects {
          padding: 6rem 0;
        }

        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .projects-title {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .see-all {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
        }
        
        .see-all:hover {
          color: var(--text-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          cursor: pointer;
        }
        
        .project-card:hover .project-name {
          text-decoration: underline;
        }

        .project-image-wrapper {
          aspect-ratio: 4/3;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .view-video-badge {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          backdrop-filter: blur(4px);
          font-weight: 500;
        }

        .project-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .project-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .project-company {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
