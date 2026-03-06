import React from 'react';
import LazyImage from './LazyImage';

export default function ImageMarquee() {
  const images = [
    '/c1.png',
    '/c2.png',
    '/c3.png',
    '/c4.png'
  ];

  return (
    <section className="image-marquee">
      <div className="images-row">
        <div className="images-track">
          {images.map((img, index) => (
            <div key={`set1-${index}`} className="image-item">
              <LazyImage
                src={img}
                alt={`Showcase ${index + 1}`}
                className="marquee-img"
                style={{ height: '375px', width: 'auto', borderRadius: '12px' }}
              />
            </div>
          ))}
          {images.map((img, index) => (
            <div key={`set2-${index}`} className="image-item" aria-hidden="true">
              <LazyImage
                src={img}
                alt={`Showcase ${index + 1}`}
                className="marquee-img"
                style={{ height: '375px', width: 'auto', borderRadius: '12px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .image-marquee {
          padding: 4rem 0 0 0;
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .images-row {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .images-track {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding-left: 3rem;
          animation: marquee-reverse 35s linear infinite;
        }

        .images-track:hover {
          animation-play-state: paused;
        }

        .image-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
          background: #f1f5f9;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .image-item:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .marquee-img {
          height: 375px;
          width: auto;
          object-fit: cover;
          display: block;
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(calc(-50% - 1.5rem));
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .marquee-img {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}
