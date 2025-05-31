
import React, { useState } from 'react';

interface GuestbookFormProps {
  onAddEntry: (name: string, note: string) => void;
}

const GuestbookForm: React.FC<GuestbookFormProps> = ({ onAddEntry }) => {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !note.trim()) {
      setError('Both name and note are required!');
      return;
    }
    onAddEntry(name, note);
    setName('');
    setNote('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-70 backdrop-blur-md shadow-xl rounded-lg p-8 space-y-6 mb-12 max-w-lg mx-auto">
      <h3 className="text-3xl font-['Pacifico'] text-pink-600 text-center mb-6">Leave a Note for Sonam!</h3>
      {error && <p className="text-red-500 bg-red-100 p-3 rounded-md text-sm">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition-colors"
          placeholder="E.g., Your Bestie"
        />
      </div>
      <div>
        <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">Your Birthday Wish:</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-pink-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition-colors"
          placeholder="Share your warm wishes..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
      >
        Add My Wish!
      </button>
    </form>
  );
};

export default GuestbookForm;
