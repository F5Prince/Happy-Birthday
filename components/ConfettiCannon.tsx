
import React, { useState, useEffect } from 'react';

interface ConfettiPiece {
  id: number;
  style: React.CSSProperties;
  color: string;
}

const colors = ['#f472b6', '#ec4899', '#d946ef', '#a855f7', '#facc15', '#fbbf24']; // Pinks, purples, yellows

const ConfettiCannon: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!isActive) {
      setPieces([]);
      return;
    }

    const generatePieces = () => {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 100; i++) { // Number of confetti pieces
        const x = Math.random() * 100; // vw
        const y = Math.random() * -50 - 10; // Start above screen
        const rotation = Math.random() * 360; // degrees
        const scale = Math.random() * 0.5 + 0.5; // 0.5 to 1
        const fallDuration = Math.random() * 3 + 4; // 4s to 7s
        const swayDuration = Math.random() * 2 + 1; // 1s to 3s
        const swayAmount = Math.random() * 20 - 10; // -10vw to 10vw

        newPieces.push({
          id: Date.now() + i,
          color: colors[Math.floor(Math.random() * colors.length)],
          style: {
            left: `${x}vw`,
            top: `${y}vh`,
            transform: `rotate(${rotation}deg) scale(${scale})`,
            animation: `fall ${fallDuration}s linear forwards, sway ${swayDuration}s ease-in-out infinite alternate`,
            '--sway-amount': `${swayAmount}px`
          } as React.CSSProperties, // Added type assertion for --sway-amount
        });
      }
      setPieces(newPieces);
    };
    
    generatePieces();
    const interval = setInterval(generatePieces, 7000); // Re-trigger confetti periodically

    return () => {
      clearInterval(interval);
      setPieces([]);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]">
      <style>
        {`
          @keyframes fall {
            to {
              transform: translateY(110vh) rotate(720deg);
            }
          }
          @keyframes sway {
            from {
              transform: translateX(0) rotate(0deg);
            }
            to {
              transform: translateX(var(--sway-amount)) rotate(calc(var(--sway-amount) * 2deg));
            }
          }
        `}
      </style>
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute w-2 h-4 md:w-3 md:h-5 opacity-90"
          style={{ ...piece.style, backgroundColor: piece.color }}
        />
      ))}
    </div>
  );
};

export default ConfettiCannon;
