import React, { useState, useEffect, useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import GalleryItem from '../components/GalleryItem';
import ImageModal from '../components/ImageModal'; // New component
import { GALLERY_IMAGES_DATA, IMAGE_CLICK_SOUND_URL } from '../constants';
import { GalleryImage } from '../types';
import { AnimatePresence } from 'framer-motion';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof Audio !== 'undefined') {
      audioRef.current = new Audio(IMAGE_CLICK_SOUND_URL);
      audioRef.current.preload = 'auto'; // Preload the sound
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error("Error playing sound:", e));
    }
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ''; // Restore background scroll
    // Delay clearing selectedImage to allow for modal out animation
    setTimeout(() => {
      setSelectedImage(null);
    }, 300); // Match this with modal animation duration
  };

  return (
    <AnimatedPage>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl md:text-5xl font-['Pacifico'] text-center text-purple-700 mb-12">
          A Walk Down Memory Lane
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES_DATA.map((image: GalleryImage) => (
            <GalleryItem key={image.id} image={image} onClick={handleImageClick} />
          ))}
        </div>
        {GALLERY_IMAGES_DATA.length === 0 && (
           <p className="text-center text-gray-600 text-xl mt-10">No memories yet, but ready to be filled!</p>
        )}
      </div>
      
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <ImageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            imageSrc={selectedImage.src}
            imageAlt={selectedImage.alt}
            imageCaption={selectedImage.caption}
          />
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default GalleryPage;