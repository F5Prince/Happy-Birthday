
import React, { useEffect, useState } from 'react';

interface FloatingElement {
  id: string;
  type: 'balloon' | 'star';
  style: React.CSSProperties;
  color: string;
}

const balloonColors = ['#ef4444', '#f97316', '#84cc16', '#22c55e', '#0ea5e9', '#6366f1', '#d946ef']; // Red, Orange, Lime, Green, Sky, Indigo, Fuchsia
const starColor = '#facc15'; // Yellow-500

// Simple SVG Balloon
const BalloonSVG: React.FC<{ color: string }> = ({ color }) => (
  <svg viewBox="0 0 100 125" className="w-12 h-16 md:w-16 md:h-20 drop-shadow-lg">
    <ellipse cx="50" cy="50" rx="45" ry="50" fill={color} />
    <polygon points="45,100 55,100 50,115" fill={color} />
    <path d="M 50 100 Q 40 105 30 120" stroke="#777" strokeWidth="2" fill="none" />
  </svg>
);

// Simple SVG Star
const StarSVG: React.FC<{ color: string }> = ({ color }) => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg">
    <path fill={color} d="M12,17.27L18.18,21L17,14.64L22,9.73L15.45,8.5L12,2.5L8.55,8.5L2,9.73L7,14.64L5.82,21L12,17.27Z" />
  </svg>
);


const FloatingElements: React.FC = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      const numElements = 15; // Total floating elements

      for (let i = 0; i < numElements; i++) {
        const type = Math.random() > 0.6 ? 'star' : 'balloon';
        const id = `float-${type}-${Date.now()}-${i}`;
        const x = Math.random() * 90 + 5; // 5vw to 95vw
        const y = Math.random() * 30 + 100; // Start below screen (100vh to 130vh)
        const duration = Math.random() * 10 + 15; // 15s to 25s to float up
        const delay = Math.random() * 10; // Staggered start
        const swayDuration = Math.random() * 4 + 3; // 3s to 7s for sway
        const swayAmount = Math.random() * 30 - 15; // -15px to 15px horizontal sway

        newElements.push({
          id,
          type,
          color: type === 'balloon' ? balloonColors[Math.floor(Math.random() * balloonColors.length)] : starColor,
          style: {
            position: 'fixed',
            left: `${x}vw`,
            bottom: '-20vh', // Start off screen
            opacity: type === 'balloon' ? 0.8 : 0.9,
            animation: `floatUp ${duration}s linear ${delay}s infinite, sideSway ${swayDuration}s ease-in-out infinite alternate`,
            '--sway-amount': `${swayAmount}px`, // Custom property for animation
            zIndex: 10,
          } as React.CSSProperties,
        });
      }
      setElements(newElements);
    };

    createElements();
    // No cleanup needed for this type of continuous animation unless component unmounts, which is handled by React.
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes floatUp {
            0% { bottom: -20vh; opacity: 0.1; }
            20% { opacity: 0.9; }
            80% { opacity: 0.9; }
            100% { bottom: 120vh; opacity: 0.1; }
          }
          @keyframes sideSway {
            from { transform: translateX(calc(var(--sway-amount) * -1)); }
            to { transform: translateX(var(--sway-amount)); }
          }
        `}
      </style>
      {elements.map(el => (
        <div key={el.id} style={el.style}>
          {el.type === 'balloon' ? <BalloonSVG color={el.color} /> : <StarSVG color={el.color} />}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
