
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GiftBoxProps {
  message: React.ReactNode;
}

const GiftBox: React.FC<GiftBoxProps> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
            transition={{ duration: 0.5 }}
            onClick={handleOpenGift}
            className="relative cursor-pointer group"
            title="Click to open!"
          >
            {/* Gift Box Base */}
            <div className="w-48 h-32 md:w-64 md:h-40 bg-pink-500 rounded-md shadow-lg group-hover:shadow-xl transition-shadow"></div>
            {/* Gift Box Lid */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-56 h-16 md:w-72 md:h-20 bg-pink-400 rounded-t-md shadow-md"
              style={{ originY: 1 }} // For lid flipping effect
              animate={{ rotateX: isOpen ? -120 : 0, y: isOpen ? -20 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            ></motion.div>
            {/* Ribbon Vertical */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[calc(100%+2rem)] bg-purple-500 group-hover:bg-purple-600 transition-colors"></div>
            {/* Ribbon Horizontal (on lid) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 md:w-72 h-8 bg-purple-500 transform -translate-y-1/2 group-hover:bg-purple-600 transition-colors"></div>
             {/* Bow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 bg-purple-600 rounded-tl-full rounded-bl-full transform -rotate-45 origin-bottom-right"></div>
                <div className="w-6 h-10 bg-purple-600 rounded-tr-full rounded-br-full transform rotate-45 origin-bottom-left absolute top-0 left-1/2 -translate-x-px"></div>
            </div>
            <p className="mt-4 text-center text-xl font-['Dancing_Script'] text-pink-700 group-hover:text-pink-800 transition-colors">
              Click to open your surprise!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
            className="bg-white bg-opacity-90 backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-2xl max-w-xl text-center"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftBox;
