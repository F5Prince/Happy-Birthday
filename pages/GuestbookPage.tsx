
import React, { useState, useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import GuestbookForm from '../components/GuestbookForm';
import GuestbookEntryCard from '../components/GuestbookEntryCard';
import { GuestbookEntry } from '../types';

const GUESTBOOK_STORAGE_KEY = 'sonamBirthdayGuestbook';

const GuestbookPage: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    const storedEntries = localStorage.getItem(GUESTBOOK_STORAGE_KEY);
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const addEntry = (name: string, note: string) => {
    const newEntry: GuestbookEntry = {
      id: crypto.randomUUID(),
      name,
      note,
      date: new Date().toISOString(),
    };
    const updatedEntries = [newEntry, ...entries]; // Add new entry to the top
    setEntries(updatedEntries);
    localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(updatedEntries));
  };

  return (
    <AnimatedPage>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl md:text-5xl font-['Pacifico'] text-center text-teal-600 mb-10">
          Share Your Love in the Guestbook!
        </h2>
        
        <GuestbookForm onAddEntry={addEntry} />

        <div className="mt-16">
          <h3 className="text-3xl font-['Dancing_Script'] text-center text-teal-700 mb-8">
            Messages from Friends
          </h3>
          {entries.length > 0 ? (
            <div className="space-y-6 max-w-2xl mx-auto">
              {entries.map((entry) => (
                <GuestbookEntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg font-['Roboto']">
              Be the first to leave a lovely note for Sonam! 💖
            </p>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default GuestbookPage;
