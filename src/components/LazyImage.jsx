import React, { useState, useRef, useEffect } from 'react';
import { useImageModal } from '../context/ImageModalContext';

export default function LazyImage({ src, alt, className, style, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);
  const { showImage } = useImageModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (e) => {
    if (loaded) {
      showImage(src);
    }
  };

  return (
    <div
      ref={imgRef}
      className={`lazy-image-wrapper ${loaded ? 'loaded' : ''}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'zoom-in',
        ...style
      }}
      onClick={handleClick}
    >
      {/* Skeleton pulse placeholder */}
      {!loaded && (
        <div className="lazy-skeleton" />
      )}

      {inView && (
        <img
          src={src}
          alt={alt || ''}
          className={className}
          onLoad={() => setLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
          {...props}
        />
      )}

      <style>{`
        .lazy-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            #e8ebf0 8%,
            #f1f3f7 18%,
            #e8ebf0 33%
          );
          background-size: 200% 100%;
          animation: lazy-shimmer 1.5s ease-in-out infinite;
          border-radius: inherit;
        }

        .lazy-image-wrapper.loaded .lazy-skeleton {
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        @keyframes lazy-shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
}
