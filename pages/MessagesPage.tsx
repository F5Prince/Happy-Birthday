
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import MessageCard from '../components/MessageCard';
import { MESSAGES_DATA } from '../constants';
import { Message } from '../types';

const MessagesPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl md:text-5xl font-['Pacifico'] text-center text-pink-700 mb-12">
          Warm Wishes for Sonam
        </h2>
        {MESSAGES_DATA.length > 0 ? (
          <div className="space-y-8 max-w-3xl mx-auto">
            {MESSAGES_DATA.map((message: Message) => (
              <MessageCard key={message.id} message={message} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl mt-10">Wishes are pouring in soon!</p>
        )}
      </div>
    </AnimatedPage>
  );
};

export default MessagesPage;
