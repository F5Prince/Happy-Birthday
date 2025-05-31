
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import FactCard from '../components/FactCard';
import { PERSONAL_FACTS_DATA } from '../constants';
import { PersonalFact } from '../types';

const AboutSonamPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl md:text-5xl font-['Pacifico'] text-center text-indigo-700 mb-6">
          10 Things We Adore About Sonam
        </h2>
        <p className="text-center text-lg text-gray-600 font-['Dancing_Script'] mb-12 max-w-xl mx-auto">
          Sonam, you bring so much joy and light into our lives. Here are just a few reasons why you're so special!
        </p>
        {PERSONAL_FACTS_DATA.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {PERSONAL_FACTS_DATA.map((fact: PersonalFact, index: number) => (
              <FactCard key={fact.id} fact={fact} index={index} />
            ))}
          </div>
        ) : (
           <p className="text-center text-gray-600 text-xl mt-10">Amazing facts about Sonam loading soon!</p>
        )}
      </div>
    </AnimatedPage>
  );
};

export default AboutSonamPage;
