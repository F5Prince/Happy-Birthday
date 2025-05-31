import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

const FirecrackerEffect: React.FC = () => {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);
  const colors = ['#f472b6', '#ec4899', '#d946ef', '#a855f7', '#facc15', '#fbbf24', '#ef4444'];

  useEffect(() => {
    const newParticles: React.CSSProperties[] = [];
    const numParticles = 30; // Number of particles

    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * 360;
      const distance = Math.random() * 100 + 50; // Distance from center
      const size = Math.random() * 8 + 4; // Particle size
      const delay = Math.random() * 0.3; // Stagger animation start

      newParticles.push({
        '--tx': `${Math.cos(angle * Math.PI / 180) * distance}px`,
        '--ty': `${Math.sin(angle * Math.PI / 180) * distance}px`,
        width: `${size}px`,
        height: `${size}px`,
        background: colors[Math.floor(Math.random() * colors.length)],
        top: '50%',
        left: '50%',
        animationDelay: `${delay}s`,
      } as React.CSSProperties);
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((style, index) => (
        <div key={index} className="firecracker-particle" style={style} />
      ))}
    </div>
  );
};


const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt, imageCaption }) => {
  if (!isOpen) return null;

  // Handle Escape key press for closing modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose} // Close on backdrop click
      role="dialog"
      aria-modal="true"
      aria-labelledby="imageModalCaption"
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.3 }}
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <FirecrackerEffect />
        <div className="relative z-10 p-4 sm:p-6 flex-grow overflow-y-auto">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-auto max-h-[70vh] object-contain rounded-md shadow-lg"
          />
          {imageCaption && (
            <p id="imageModalCaption" className="mt-4 text-center text-lg font-['Dancing_Script'] text-pink-700">
              {imageCaption}
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition-colors z-20"
          aria-label="Close image viewer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;