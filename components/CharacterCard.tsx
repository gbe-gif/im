import React from 'react';
import { CharacterProfile } from '../types';
import { Accordion } from './Accordion';

interface Props {
  data: CharacterProfile;
  isMain?: boolean;
}

export const CharacterCard: React.FC<Props> = ({ data, isMain = false }) => {
  return (
    <div className={`mb-8 rounded-xl overflow-hidden shadow-lg bg-white border ${isMain ? 'border-amber-200' : 'border-stone-200'}`}>
      {/* Header Image Area */}
      {data.image && (
        <div className="relative w-full h-96 overflow-hidden bg-stone-200">
           <img 
            src={data.image} 
            alt={data.name} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-20">
            <h2 className="text-2xl font-serif font-bold text-white mb-1">
              {data.name.split(' ')[0]} 
              {data.subName && <span className="text-sm font-sans font-normal text-stone-300 ml-2">({data.subName})</span>}
            </h2>
            <p className="text-amber-400 text-sm font-medium">{data.role}</p>
          </div>
        </div>
      )}

      {!data.image && (
        <div className="p-4 border-b border-stone-100 bg-stone-50">
           <h2 className="text-xl font-serif font-bold text-stone-800">
              {data.name}
            </h2>
            <p className="text-stone-500 text-sm">{data.role}</p>
        </div>
      )}

      {/* Body Content */}
      <div className="p-5">
        <div className="mb-4">
          <p className="text-stone-600 italic mb-3 font-serif">"{data.description}"</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200">
              {data.age}
            </span>
            <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200">
              {data.mbti}
            </span>
            {data.tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-1 bg-jade-light text-jade-dark text-xs rounded-full border border-jade-main/20">
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Personality</h3>
            <ul className="list-disc list-outside ml-4 space-y-1">
              {data.keywords.map((kw, idx) => (
                <li key={idx} className="text-sm text-stone-700">
                  {kw}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Details Accordions */}
        {data.details.map((detail, idx) => (
          <Accordion key={idx} title={detail.title}>
            <ul className="list-disc list-outside ml-4 space-y-1">
              {detail.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </div>
  );
};