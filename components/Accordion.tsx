import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-stone-200 rounded-lg mb-2 overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 text-left bg-stone-50 hover:bg-stone-100 transition-colors"
      >
        <span className="font-serif font-semibold text-stone-700">{title}</span>
        <span className={`transform transition-transform duration-200 text-stone-400 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="p-3 border-t border-stone-100 bg-white text-sm text-stone-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};