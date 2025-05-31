
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import GiftBox from '../components/GiftBox';

const SurprisePage: React.FC = () => {
  const heartfeltMessage = (
    <>
      <h3 className="text-3xl md:text-4xl font-['Pacifico'] text-pink-600 mb-4">
        Our Dearest Sonam,
      </h3>
      <p className="text-lg text-gray-700 font-['Roboto'] leading-relaxed mb-3">
        On your special day, we wanted to send you a universe of love, laughter, and happiness. 
        You are a true gem, and your presence makes the world a brighter place.
      </p>
      <p className="text-lg text-gray-700 font-['Roboto'] leading-relaxed mb-6">
        May this year bring you endless adventures, fulfilled dreams, and moments that take your breath away. 
        Always remember how cherished and loved you are!
      </p>
      <p className="text-2xl font-['Dancing_Script'] text-purple-700">
        With all our love, <br /> Your Friends & Family ❤️
      </p>
    </>
  );

  return (
    <AnimatedPage>
      <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-['Pacifico'] text-center text-yellow-500 mb-4 drop-shadow-md">
          A Special Surprise Just For You!
        </h2>
        <p className="text-xl text-gray-600 font-['Dancing_Script'] mb-10">
          Something magical awaits...
        </p>
        <GiftBox message={heartfeltMessage} />
      </div>
    </AnimatedPage>
  );
};

export default SurprisePage;
