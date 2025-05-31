
import React from 'react';
import { PersonalFact } from '../types';

interface FactCardProps {
  fact: PersonalFact;
  index: number;
}

const FactCard: React.FC<FactCardProps> = ({ fact, index }) => {
  const colors = [
    'bg-pink-400', 'bg-purple-400', 'bg-indigo-400', 'bg-blue-400', 
    'bg-teal-400', 'bg-green-400', 'bg-yellow-400', 'bg-orange-400'
  ];
  const bgColor = colors[index % colors.length];

  return (
    <div className={`${bgColor} bg-opacity-70 backdrop-blur-sm text-white rounded-lg shadow-lg p-6 flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
      <div className="flex-shrink-0 text-3xl">
        {fact.icon}
      </div>
      <p className="text-lg font-medium font-['Roboto']">{fact.text}</p>
    </div>
  );
};

export default FactCard;
