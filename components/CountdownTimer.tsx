
import React, { useState, useEffect } from 'react';
import { SONAM_BIRTH_DATE } from '../constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDateString: string): TimeLeft | null => {
  // Parse the "YYYY-MM-DD" string and create a Date object for midnight LOCAL time
  const parts = targetDateString.split('-').map(Number); // [YYYY, MM, DD]
  // Month is 0-indexed for Date constructor (parts[1] is 1-indexed month)
  const targetDateTime = new Date(parts[0], parts[1] - 1, parts[2], 0, 0, 0, 0); 

  const now = new Date(); // Current local time
  const difference = +targetDateTime - +now;

  if (difference <= 0) { // Target time is in the past or now
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Midnight today, local time

    // Check if the target date (ignoring time part) is today's date
    const isTargetDateToday = targetDateTime.getFullYear() === today.getFullYear() &&
                             targetDateTime.getMonth() === today.getMonth() &&
                             targetDateTime.getDate() === today.getDate();

    if (isTargetDateToday) {
      // If it's the birthday (target date is today and time has passed or is now), show 0s
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    // If the target date has passed (it's not today and difference <= 0), calculate for next year's birthday
    const nextYearTarget = new Date(targetDateTime.getFullYear() + 1, targetDateTime.getMonth(), targetDateTime.getDate());
    const nextYearTargetDateString = `${nextYearTarget.getFullYear()}-${String(nextYearTarget.getMonth() + 1).padStart(2, '0')}-${String(nextYearTarget.getDate()).padStart(2, '0')}`;
    return calculateTimeLeft(nextYearTargetDateString); // Recursive call
  }

  // If difference is positive, calculate remaining time
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(SONAM_BIRTH_DATE));
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);

  useEffect(() => {
    // Initial check for birthday state
    const initialTimeLeft = calculateTimeLeft(SONAM_BIRTH_DATE);
    if (initialTimeLeft && initialTimeLeft.days === 0 && initialTimeLeft.hours === 0 && initialTimeLeft.minutes === 0 && initialTimeLeft.seconds === 0) {
      setIsBirthdayToday(true);
    } else {
      setIsBirthdayToday(false); // Ensure it's reset if not birthday
    }
    setTimeLeft(initialTimeLeft); // Set initial time left

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(SONAM_BIRTH_DATE);
      setTimeLeft(newTimeLeft);
      if (newTimeLeft && newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsBirthdayToday(true);
      } else {
        setIsBirthdayToday(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  if (isBirthdayToday) {
    return (
      <div className="text-center p-6 bg-yellow-400 bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg my-8">
        <h2 className="text-4xl md:text-5xl font-['Pacifico'] text-pink-700 animate-pulse">
          Happy Birthday, Sonam!
        </h2>
        <p className="text-xl text-pink-600 mt-2 font-['Dancing_Script']">It's your special day!</p>
      </div>
    );
  }

  if (!timeLeft) {
    return <div className="text-center p-4 text-xl font-['Roboto'] text-gray-700">Loading countdown...</div>;
  }

  return (
    <div className="text-center p-6 bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg my-8 max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-['Dancing_Script'] text-purple-700 mb-4">
        Countdown to Sonam's Next Birthday!
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-pink-600">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-pink-100 bg-opacity-50 p-4 rounded-lg shadow">
            <div className="text-3xl md:text-4xl font-bold font-['Roboto']">{String(value).padStart(2, '0')}</div>
            <div className="text-sm uppercase font-['Roboto']">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
