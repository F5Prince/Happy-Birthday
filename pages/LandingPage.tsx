
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import ConfettiCannon from '../components/ConfettiCannon';
import CountdownTimer from '../components/CountdownTimer';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center relative overflow-hidden py-10">
        <ConfettiCannon isActive={true} />
        
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Pacifico'] text-pink-600 mb-6 animate-fadeInGrow drop-shadow-lg"
          style={{ animationDelay: '0.2s' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          Happy Birthday
        </motion.h1>
        <motion.p 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-['Dancing_Script'] font-bold text-purple-700 mb-12 animate-fadeInGrow drop-shadow-md"
          style={{ animationDelay: '0.5s' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          Sonam!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <CountdownTimer />
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 font-['Roboto'] mt-8 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Wishing you a day filled with love, joy, and unforgettable moments. Let's celebrate you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link 
            to="/gallery" 
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 animate-float"
            style={{ animationDelay: '1s' }}
          >
            Explore Memories ✨
          </Link>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};
// Need to import motion for the motion components
import { motion } from 'framer-motion';
export default LandingPage;
