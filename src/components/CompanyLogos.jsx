import React from 'react';

export default function CompanyLogos() {
  const logos = [
    { name: 'C++', text: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus' },
    { name: 'Python', text: 'Python', icon: 'https://cdn.simpleicons.org/python' },
    { name: 'ROS2', text: 'ROS2', icon: 'https://cdn.simpleicons.org/ros' },
    { name: 'MATLAB', text: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg' },
    { name: 'SolidWorks', text: 'SolidWorks', icon: 'https://cdn.simpleicons.org/dassaultsystemes' },
    { name: 'KiCAD', text: 'KiCAD', icon: 'https://cdn.simpleicons.org/kicad' },
    { name: 'Arduino', text: 'Arduino', icon: 'https://cdn.simpleicons.org/arduino' },
  ];

  return (
    <section className="company-logos">
      <div className="logos-row">
        <div className="logos-track">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`set1-${index}`} className="logo-item">
              {logo.icon && <img src={logo.icon} alt={logo.name} className="logo-icon" />}
              {logo.text && <span className="logo-placeholder">{logo.text}</span>}
            </div>
          ))}
          {/* Duplicate set for endless scroll effect */}
          {logos.map((logo, index) => (
            <div key={`set2-${index}`} className="logo-item" aria-hidden="true">
              {logo.icon && <img src={logo.icon} alt={logo.name} className="logo-icon" />}
              {logo.text && <span className="logo-placeholder">{logo.text}</span>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .company-logos {
          padding: 4rem 0;
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .logos-row {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .logos-track {
          display: flex;
          align-items: center;
          gap: 4rem;
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        .logos-track:hover {
          animation-play-state: paused;
        }

        .logo-item {
          opacity: 1;
          filter: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        
        .logo-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .logo-placeholder {
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-secondary);
          white-space: pre-line;
          text-align: center;
          line-height: 1.1;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
