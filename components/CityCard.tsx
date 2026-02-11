import React from 'react';
import { CityInfo } from '../types';

export const CityCard: React.FC<{ city: CityInfo }> = ({ city }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-200 mb-4">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-serif text-lg font-bold text-stone-800">{city.name}</h3>
        {city.etymology && (
          <span className="text-xs text-stone-400 italic">{city.etymology}</span>
        )}
      </div>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {city.features.map((feat, i) => (
          <span key={i} className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded">
            {feat}
          </span>
        ))}
      </div>

      <ul className="text-sm text-stone-600 space-y-1.5 list-disc list-outside ml-4">
        {city.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};