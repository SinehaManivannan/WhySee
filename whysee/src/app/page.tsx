'use client';

import { useState, useEffect } from 'react';
import FounderArchetypeSelector from './components/FounderArchetypeSelector';

export default function WhySee() {
  const [showArchetype, setShowArchetype] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'WHYSEE.exe INITIALIZING...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const handleGetStarted = () => {
    setShowArchetype(true);
  };

  const handleBack = () => {
    setShowArchetype(false);
  };

  if (showArchetype) {
    return <FounderArchetypeSelector onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="bg-green-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
      
      <div className="text-center z-10 relative">
        {/* Terminal-style header */}
        <div className="mb-8 border border-green-400 p-4 bg-black/50 backdrop-blur-sm">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-400 text-sm ml-4">WHYSEE_TERMINAL_v2.0</span>
          </div>
          <div className="text-green-400 text-sm">
            {displayText}<span className={showCursor ? 'opacity-100' : 'opacity-0'}>█</span>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-green-400 mb-4 tracking-wider">
            &gt; WHYSEE
          </h1>
          
          <div className="text-green-300 text-2xl mb-8">
            <p className="font-light">Make something people want.</p>
          </div>
          
          <div className="text-green-300 text-lg space-y-2">
            <p className="animate-pulse">[SYSTEM] Disrupting industries... ✓</p>
            <p className="animate-pulse" style={{ animationDelay: '0.5s' }}>[SYSTEM] Scaling to unicorn status... ✓</p>
            <p className="animate-pulse" style={{ animationDelay: '1s' }}>[SYSTEM] Silicon Valley mindset activated... ✓</p>
            <p className="animate-pulse" style={{ animationDelay: '1.5s' }}>[SYSTEM] Ready to change the world... ✓</p>
          </div>

          <div className="mt-12">
            <button 
              onClick={handleGetStarted}
              className="group relative px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono text-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/50"
            >
              <span className="relative z-10">&gt; Apply to WhySee</span>
              <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
