import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LazyImage from './LazyImage';

export default function ImageMarquee() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/c1.png',
    '/c2.png',
    '/c3.png',
    '/c4.png'
  ];

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const modal = selectedImage && ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '2rem',
        boxSizing: 'border-box',
      }}
      onClick={closeModal}
    >
      {/* Close button fixed to viewport */}
      <button
        onClick={closeModal}
        style={{
          position: 'fixed',
          top: '1.5rem',
          right: '1.5rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(255,255,255,0.95)',
          color: '#111',
          fontSize: '20px',
          fontWeight: 700,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          zIndex: 10000,
          lineHeight: 1,
        }}
      >
        ✕
      </button>

      {/* Image container — stops propagation so clicking image doesn't close modal */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={selectedImage}
          alt="Certificate Full View"
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            display: 'block',
          }}
        />
      </div>
    </div>,
    document.body
  );

  return (
    <section className="image-marquee">
      <div className="images-row">
        <div className="images-track">
          {images.map((img, index) => (
            <div key={`set1-${index}`} className="image-item" onClick={() => openModal(img)}>
              <LazyImage src={img} alt={`Showcase ${index + 1}`} className="marquee-img" style={{ height: '375px', width: 'auto', borderRadius: '12px' }} />
            </div>
          ))}
          {images.map((img, index) => (
            <div key={`set2-${index}`} className="image-item" aria-hidden="true" onClick={() => openModal(img)}>
              <LazyImage src={img} alt={`Showcase ${index + 1}`} className="marquee-img" style={{ height: '375px', width: 'auto', borderRadius: '12px' }} />
            </div>
          ))}
        </div>
      </div>

      {modal}

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
          cursor: zoom-in;
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
