'use client';

import { useState, useEffect } from 'react';
import PremiumSection from './PremiumSection';

interface FounderArchetypeSelectorProps {
  onBack: () => void;
}

export default function FounderArchetypeSelector({ onBack }: FounderArchetypeSelectorProps) {
  const [selectedArchetype, setSelectedArchetype] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showPremium, setShowPremium] = useState(false);
  const fullText = 'ANALYZING ENTREPRENEURIAL DNA...';

  const archetypes = [
    {
      title: "THE_VISIONARY.exe",
      description: "Sees opportunities others miss, always dreaming of the next big thing",
      code: "0x1A2B3C",
      status: "ACTIVE",
      image: "/thevisionary.png"
    },
    {
      title: "THE_ENGINEER.exe", 
      description: "Problem-solving genius who builds solutions with meticulous precision",
      code: "0x4D5E6F",
      status: "ACTIVE",
      image: "/theengineer.png"
    },
    {
      title: "THE_HUSTLER.exe",
      description: "Always closing deals, grinding 24/7, and making things happen",
      code: "0x7G8H9I",
      status: "ACTIVE",
      image: "/thehustler.png"
    }
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center relative overflow-hidden">
      {/* Glitch effect background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="bg-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-none mx-auto px-6 z-10 relative">
        {/* Terminal header */}
        <div className="mb-8 border border-cyan-400 p-4 bg-black/50 backdrop-blur-sm">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-cyan-400 text-sm ml-4">FOUNDER_ANALYZER_v3.14</span>
          </div>
          <div className="text-cyan-400 text-sm">
            {displayText}<span className={showCursor ? 'opacity-100' : 'opacity-0'}>█</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Main content */}
          <div className="flex-1 w-full">
            <h1 className="text-5xl font-bold text-cyan-400 mb-6 tracking-wider text-center lg:text-left">
              &gt; FOUNDER_MATRIX
            </h1>
            
            <p className="text-cyan-300 text-xl mb-4 font-light text-center lg:text-left">
              Choose your founder archetype
            </p>
            
            <p className="text-cyan-300 text-lg mb-8 animate-pulse text-center lg:text-left">
              [SYSTEM] Choose your path to becoming a billionaire
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2 w-full">
              {archetypes.map((archetype, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedArchetype(index)}
                  className={`group relative p-2 bg-transparent border-2 transition-all duration-300 transform hover:scale-105 w-full ${
                    selectedArchetype === index 
                      ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/50' 
                      : 'border-green-400 hover:border-cyan-400 hover:bg-cyan-400/5'
                  }`}
                >
                  {/* Description at the top with cartoon font */}
                  <div className="text-center mb-0">
                    <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 mb-0" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      {archetype.title}
                    </h3>
                    <p className="text-green-300 text-lg mb-0 leading-tight" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      {archetype.description}
                    </p>
                    <span className="text-green-400 text-sm font-mono">
                      {archetype.code}
                    </span>
                  </div>

                  {/* Massive Archetype Image - Main Focus */}
                  <div className="flex justify-center mb-0">
                    <img 
                      src={archetype.image} 
                      alt={archetype.title}
                      className="w-96 h-96 object-contain rounded-2xl"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                    />
                    <div className="w-96 h-96 bg-gradient-to-br from-cyan-300 to-green-300 rounded-2xl flex items-center justify-center text-8xl font-bold text-black" style={{ display: 'none' }}>
                      {archetype.title.charAt(4)}
                    </div>
                  </div>
                  
                  <div className="text-center mt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-green-500 text-sm font-mono">
                        STATUS: {archetype.status}
                      </span>
                      <span className="text-cyan-400 text-sm">
                        {selectedArchetype === index ? '✓ SELECTED' : '> CLICK TO SELECT'}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

          </div>

          {/* Right side - Premium Button */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="p-6 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl border-2 border-pink-300 shadow-lg">
                <div className="flex justify-center items-center mb-3">
                  <span className="text-2xl mr-1">🌸</span>
                  <span className="text-2xl mr-1">✨</span>
                  <span className="text-2xl mr-1">💖</span>
                  <span className="text-2xl">🦄</span>
                </div>
                
                <button 
                  onClick={() => setShowPremium(true)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-3"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  🌟 More Cost + More Reward 🌟
                </button>
                
                <p className="text-purple-700 text-sm text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Crave something a little more hardcore? 💕
                </p>
                
                <div className="flex justify-center items-center mt-2">
                  <span className="text-lg mr-1">🌺</span>
                  <span className="text-lg mr-1">🌼</span>
                  <span className="text-lg">🌻</span>
                </div>
              </div>
              
              {/* Terminate Session Button moved here */}
              <div className="mt-6 text-center">
                <button 
                  onClick={onBack}
                  className="px-6 py-3 bg-transparent border border-red-400 text-red-400 font-mono hover:bg-red-400 hover:text-black transition-all duration-300"
                >
                  &lt; TERMINATE_SESSION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Modal */}
        {showPremium && (
          <PremiumSection onClose={() => setShowPremium(false)} />
        )}

      </div>
    </div>
  );
}
