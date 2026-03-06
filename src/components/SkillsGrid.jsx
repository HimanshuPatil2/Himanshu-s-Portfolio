import React from 'react';

export default function SkillsGrid() {
  const skillCategories = [
    {
      label: 'Languages',
      color: '#6366f1',
      skills: ['C++', 'Python', 'Embedded C', 'MATLAB', 'Simulink']
    },
    {
      label: 'Robotics',
      color: '#0ea5e9',
      skills: ['ROS2', 'Gazebo', 'Forward/Inverse Kinematics', 'Path Planning', 'PID Control', 'Sensor Fusion', 'SLAM', 'Motion Control']
    },
    {
      label: 'CAD & Design',
      color: '#f59e0b',
      skills: ['SolidWorks', 'Fusion 360', 'Solid Edge', 'AutoCAD', 'FEA', 'DFM/DFA', '3D Printing (FDM)', 'Rapid Prototyping']
    },
    {
      label: 'Electronics',
      color: '#22c55e',
      skills: ['KiCAD', 'Altium Designer', 'PCB Design (4-layer)', 'STM32', 'RP2040', 'Arduino', 'Raspberry Pi', 'ATmega328P']
    },
    {
      label: 'Automation',
      color: '#ec4899',
      skills: ['PLC Programming', 'Ladder Logic', 'HMI Design', 'Industrial Protocols', 'Process Control', 'Safety Systems']
    },
    {
      label: 'Tools',
      color: '#14b8a6',
      skills: ['Linux (Ubuntu)', 'Git / GitHub', 'OpenCV', 'TensorFlow', 'Proteus', 'UART / I2C / SPI / CAN']
    },
    {
      label: 'Soft Skills',
      color: '#a855f7',
      skills: ['Communication', 'Problem-Solving', 'Presentation', 'Time Management', 'Teamwork', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="skills-section container">
      <h2 className="skills-heading">What I Have</h2>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="skill-col">
            <div className="skill-col-label" style={{ color: cat.color }}>
              <span className="skill-col-dot" style={{ background: cat.color }}></span>
              {cat.label}
            </div>
            <div className="skill-pills">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-section {
          padding: 5rem 0 2rem;
        }

        .skills-heading {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 3rem;
          text-align: center;
          letter-spacing: -0.02em;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
        }

        .skill-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .skill-col-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .skill-col-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-pill {
          padding: 0.5rem 1.1rem;
          border-radius: 99px;
          border: 1px solid var(--border-color);
          background: white;
          font-size: 0.97rem;
          font-weight: 500;
          color: var(--text-secondary);
          white-space: nowrap;
          transition: transform 0.15s, box-shadow 0.15s, color 0.15s;
          cursor: default;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }

        .skill-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
