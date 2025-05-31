
import React from 'react';
import { Message } from '../types';

interface MessageCardProps {
  message: Message;
}

const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-6 m-4 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center text-center md:flex-row md:text-left md:items-start space-y-4 md:space-y-0 md:space-x-6">
      {message.avatar && (
        <img src={message.avatar} alt={message.name} className="w-20 h-20 rounded-full shadow-md border-2 border-pink-300" />
      )}
      <div className="flex-1">
        <h3 className="text-2xl font-['Pacifico'] text-pink-600 mb-2">{message.name}</h3>
        <p className="text-gray-700 font-['Roboto'] leading-relaxed">{message.text}</p>
      </div>
    </div>
  );
};

export default MessageCard;
