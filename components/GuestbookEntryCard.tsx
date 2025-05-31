
import React from 'react';
import { GuestbookEntry } from '../types';

interface GuestbookEntryCardProps {
  entry: GuestbookEntry;
}

const GuestbookEntryCard: React.FC<GuestbookEntryCardProps> = ({ entry }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-4 border-l-4 border-purple-400">
      <h4 className="text-xl font-['Dancing_Script'] text-purple-700 mb-1">{entry.name}</h4>
      <p className="text-gray-700 font-['Roboto'] leading-relaxed mb-2">{entry.note}</p>
      <p className="text-xs text-gray-500">{formatDate(entry.date)}</p>
    </div>
  );
};

export default GuestbookEntryCard;
