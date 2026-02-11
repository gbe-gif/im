import React, { useState } from 'react';
import { TabType } from './types';
import { MAIN_CHARACTERS, SUB_CHARACTERS, WORLD_DATA, GEMMA_CLUB } from './constants';
import { CharacterCard } from './components/CharacterCard';
import { CityCard } from './components/CityCard';
import { Accordion } from './components/Accordion';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('main');

  const TabButton = ({ id, label }: { id: TabType; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex-1 py-3 text-sm font-medium transition-all duration-200 relative
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
        <div className="px-4 py-3 flex items-center justify-center">
          <h1 className="font-serif text-lg font-bold text-stone-800 tracking-wide">황태녀에게 간택당했다</h1>
        </div>
        <nav className="flex px-2">
          <TabButton id="main" label="주연" />
          <TabButton id="sub" label="조연" />
          <TabButton id="world" label="세계관" />
          <TabButton id="group" label="사교계" />
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto p-4 animate-fade-in">
        
        {/* Main Characters Tab */}
        {activeTab === 'main' && (
          <div className="space-y-6">
            <div className="text-center py-4">
              <p className="font-serif text-stone-500 italic text-sm">
                "그대는 나의 구원이자, 유일한 평화입니다."
              </p>
            </div>
            {MAIN_CHARACTERS.map((char) => (
              <CharacterCard key={char.id} data={char} isMain={true} />
            ))}
          </div>
        )}

        {/* Sub Characters Tab */}
        {activeTab === 'sub' && (
          <div className="space-y-4">
             <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 mb-6">
              <h2 className="font-serif text-lg font-bold mb-2">황실 가계도</h2>
              <div className="text-sm text-stone-600 space-y-1">
                <p><span className="font-bold text-stone-800">황제:</span> 세베리안 (은퇴)</p>
                <p><span className="font-bold text-stone-800">황후:</span> 카일리아 (작고) → 발레리아, 엘리오르</p>
                <p><span className="font-bold text-stone-800">황비:</span> 리비아 (섭정) → 카시안, 플로리아</p>
              </div>
            </div>
            {SUB_CHARACTERS.map((char) => (
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
                alt="제국 지도" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-serif font-bold text-stone-800 mb-1">{WORLD_DATA.name}</h2>
                <p className="text-sm text-stone-600 leading-relaxed">{WORLD_DATA.description}</p>
              </div>
            </div>

            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 px-1">Regions & Cities</h3>
            <div className="space-y-4">
              {WORLD_DATA.cities.map((city, idx) => (
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
                  <h2 className="font-serif text-xl font-bold text-stone-800">{GEMMA_CLUB.name}</h2>
                  <p className="text-xs text-stone-500">The Social Club</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {GEMMA_CLUB.description.map((desc, i) => (
                  <p key={i} className="text-sm text-stone-700 leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>

              <h3 className="font-bold text-sm text-stone-800 mb-3">주요 인물</h3>
              <div className="space-y-3">
                {GEMMA_CLUB.members.map((member, idx) => (
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
                  더 많은 정보는 RP 내에서 확인하세요.
                </p>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;