import React, { useState } from 'react';
import { TabType, Language } from './types';
import { DATA_BY_LANGUAGE, UI_TRANSLATIONS } from './constants';
import { CharacterCard } from './components/CharacterCard';
import { CityCard } from './components/CityCard';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ko');
  const [activeTab, setActiveTab] = useState<TabType>('main');

  const t = UI_TRANSLATIONS[language];
  const { mainCharacters, subCharacters, worldData, gemmaClub } = DATA_BY_LANGUAGE[language];

  const TabButton = ({ id, label }: { id: TabType; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex-1 py-3 text-sm font-medium transition-all duration-200 relative whitespace-nowrap
        ${activeTab === id ? 'text-jade-dark font-bold' : 'text-stone-400 hover:text-stone-600'}
      `}
    >
      {label}
      {activeTab === id && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-jade-main mx-4 rounded-t-full" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <h1 className="font-serif text-lg font-bold text-stone-800 tracking-wide truncate">
            {t.appTitle}
          </h1>
          {/* Language Toggle */}
          <div className="flex items-center bg-stone-100 p-0.5 rounded-full border border-stone-200 shrink-0 text-xs">
            {(['ko', 'en', 'ja'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-all duration-150 ${
                  language === lang
                    ? 'bg-jade-main text-white font-bold shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
                aria-label={`Switch to ${lang.toUpperCase()}`}
              >
                {lang === 'ko' ? 'KO' : lang === 'en' ? 'EN' : 'JP'}
              </button>
            ))}
          </div>
        </div>
        <nav className="flex px-2 max-w-md mx-auto">
          <TabButton id="main" label={t.tabs.main} />
          <TabButton id="sub" label={t.tabs.sub} />
          <TabButton id="world" label={t.tabs.world} />
          <TabButton id="group" label={t.tabs.group} />
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto p-4 animate-fade-in">
        
        {/* Main Characters Tab */}
        {activeTab === 'main' && (
          <div className="space-y-6">
            <div className="text-center py-4">
              <p className="font-serif text-stone-500 italic text-sm">
                {t.quote}
              </p>
            </div>
            {mainCharacters.map((char) => (
              <CharacterCard key={char.id} data={char} isMain={true} />
            ))}
          </div>
        )}

        {/* Sub Characters Tab */}
        {activeTab === 'sub' && (
          <div className="space-y-4">
             <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 mb-6">
              <h2 className="font-serif text-lg font-bold mb-2">{t.familyTreeTitle}</h2>
              <div className="text-sm text-stone-600 space-y-1">
                <p><span className="font-bold text-stone-800">{t.emperorLabel}:</span> {t.severianTree}</p>
                <p><span className="font-bold text-stone-800">{t.empressLabel}:</span> {t.kailiaTree}</p>
                <p><span className="font-bold text-stone-800">{t.consortLabel}:</span> {t.liviaTree}</p>
              </div>
            </div>
            {subCharacters.map((char) => (
              <CharacterCard key={char.id} data={char} />
            ))}
          </div>
        )}

        {/* Worldview Tab */}
        {activeTab === 'world' && (
          <div>
            <div className="mb-6 rounded-lg overflow-hidden shadow-md border border-stone-200">
              <img 
                src="https://i.postimg.cc/K8v3yj7D/099.jpg" 
                alt={t.mapAlt} 
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-serif font-bold text-stone-800 mb-1">{worldData.name}</h2>
                <p className="text-sm text-stone-600 leading-relaxed">{worldData.description}</p>
              </div>
            </div>

            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 px-1">Regions & Cities</h3>
            <div className="space-y-4">
              {worldData.cities.map((city, idx) => (
                <CityCard key={idx} city={city} />
              ))}
            </div>
          </div>
        )}

        {/* Groups/Society Tab */}
        {activeTab === 'group' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-md border border-amber-100">
              <div className="flex items-center gap-3 mb-4 border-b border-stone-100 pb-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl">
                  💎
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-stone-800">{gemmaClub.name}</h2>
                  <p className="text-xs text-stone-500">The Social Club</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {gemmaClub.description.map((desc, i) => (
                  <p key={i} className="text-sm text-stone-700 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>

              <h3 className="font-bold text-sm text-stone-800 mb-3">{t.keyFigures}</h3>
              <div className="space-y-3">
                {gemmaClub.members.map((member, idx) => (
                  <div key={idx} className="bg-stone-50 p-3 rounded-lg border border-stone-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-stone-800">{member.name}</span>
                      <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
             <div className="p-4 rounded-lg bg-stone-100 text-center">
                <p className="text-xs text-stone-400">
                  {t.footerNote}
                </p>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
