import React from 'react';
import ReactDOM from 'react-dom';
import { useImageModal } from '../context/ImageModalContext';

export default function GlobalImageModal() {
    const { selectedImage, closeImage } = useImageModal();

    if (!selectedImage) return null;

    return ReactDOM.createPortal(
        <div className="global-modal-overlay" onClick={closeImage}>
            <button className="modal-close-btn" onClick={closeImage}>✕</button>

            <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="Full view" className="modal-full-img" />
            </div>

            <style>{`
        .global-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 2rem;
          animation: modalFadeIn 0.3s ease;
        }

        .modal-close-btn {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: white;
          color: #111;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          border: none;
          cursor: pointer;
          z-index: 10001;
          transition: transform 0.2s ease;
        }

        .modal-close-btn:hover {
          transform: scale(1.1);
        }

        .modal-content-wrapper {
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: modalImageScale 0.3s ease;
        }

        .modal-full-img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalImageScale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 768px) {
          .global-modal-overlay {
            padding: 1rem;
          }
          .modal-close-btn {
            top: 1rem;
            right: 1rem;
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
        }
      `}</style>
        </div>,
        document.body
    );
}
