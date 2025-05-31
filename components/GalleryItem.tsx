import React from 'react';
import { GalleryImage } from '../types';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  return (
    <button
      onClick={() => onClick(image)}
      className="group relative overflow-hidden rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full text-left focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
      aria-label={`View image: ${image.caption}`}
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <p className="text-white text-lg font-semibold font-['Dancing_Script'] transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          {image.caption}
        </p>
      </div>
    </button>
  );
};

export default GalleryItem;