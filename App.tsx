
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import GalleryPage from './pages/GalleryPage';
import MessagesPage from './pages/MessagesPage';
import AboutSonamPage from './pages/AboutSonamPage';
import SurprisePage from './pages/SurprisePage';
import GuestbookPage from './pages/GuestbookPage';
import MusicToggleButton from './components/MusicToggleButton';
import { HAPPY_BIRTHDAY_MUSIC_URL } from './constants';
import FloatingElements from './components/FloatingElements';

const App: React.FC = () => {
  const location = useLocation(); // For AnimatePresence with React Router v6

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 text-gray-800 relative">
      <Navbar />
      <MusicToggleButton musicSrc={HAPPY_BIRTHDAY_MUSIC_URL} />
      <FloatingElements />
      <main className="pt-20 pb-10"> {/* Adjust pt to navbar height */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/about-sonam" element={<AboutSonamPage />} />
            <Route path="/surprise" element={<SurprisePage />} />
            <Route path="/guestbook" element={<GuestbookPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="text-center py-6 bg-black bg-opacity-10 text-pink-700 font-['Roboto']">
        <p>&copy; {new Date().getFullYear()} With Love for Sonam ❤️</p>
      </footer>
    </div>
  );
};

const RootApp: React.FC = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default RootApp;
