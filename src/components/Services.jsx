import React from 'react';

export default function Services() {
  const services = [
    { name: 'Robotics & Control', color: '#0ea5e9' },
    { name: 'Embedded Systems', color: '#ec4899' },
    { name: 'PCB Design', color: '#22c55e' },
    { name: 'CAD Modeling', color: '#f59e0b' },
    { name: 'Industrial Automation', color: '#3b82f6' }
  ];

  return (
    <section className="services container">
      <h2 className="services-title">I design + build</h2>

      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-pill">
            <span className="dot" style={{ backgroundColor: service.color }}></span>
            {service.name}
          </div>
        ))}
      </div>

      <style>{`
        .services {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6rem 0;
          text-align: center;
        }

        .services-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        .service-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border-radius: 99px;
          border: 1px solid var(--border-color);
          font-weight: 500;
          color: var(--text-primary);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .service-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
}
