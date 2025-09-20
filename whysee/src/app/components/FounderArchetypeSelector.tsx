'use client';

import { useState, useEffect } from 'react';
import PremiumSection from './PremiumSection';
import FounderPage from './FounderPage';

interface FounderArchetypeSelectorProps {
  onBack: () => void;
}

export default function FounderArchetypeSelector({ onBack }: FounderArchetypeSelectorProps) {
  const [selectedArchetype, setSelectedArchetype] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showPremium, setShowPremium] = useState(false);
  const [showUnicornexus, setShowUnicornexus] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState<any>(null);
  const fullText = 'ANALYZING ENTREPRENEURIAL DNA...';

  const archetypes = [
    {
      title: "DOSELORD",
      description: "College dropout minimalist monk who microdoses and wears one of their two identical hoodies",
      status: "ACTIVE",
      image: "/doselord.png"
    },
    {
      title: "FOUNDIGRANT", 
      description: "Immigrant hustler who denounces citizenship and builds trauma for resilience",
      status: "ACTIVE",
      image: "/foundigrant.png"
    },
    {
      title: "PITCHGREMLIN",
      description: "Couch-surfing conference clout chaser who thinks every convo is a pitch opportunity.",
      status: "ACTIVE",
      image: "/pitchgremlin.png"
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

  const handleArchetypeSelect = (index: number) => {
    setSelectedArchetype(index);
    // Navigate to founder page after a short delay
    setTimeout(() => {
      setSelectedFounder(archetypes[index]);
    }, 1000);
  };

  const handleBackFromFounder = () => {
    setSelectedFounder(null);
    setSelectedArchetype(null);
  };

  // Show founder page if one is selected
  if (selectedFounder) {
    return <FounderPage archetype={selectedFounder} onBack={handleBackFromFounder} />;
  }

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

        <div className="w-full">
          <div className="flex items-center justify-center gap-8 mb-6">
            <h1 className="text-5xl font-bold text-cyan-400 tracking-wider">
              &gt; Choose your founder
            </h1>
            <button 
              onClick={() => setShowPricing(true)}
              className="px-4 py-2 bg-transparent border border-cyan-400 text-cyan-400 font-mono text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              PRICING
            </button>
          </div>
          
          <p className="text-cyan-300 text-lg mb-8 animate-pulse text-center">
            [SYSTEM] Choose your path to becoming a billionaire
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-2 w-full">
              {archetypes.map((archetype, index) => (
                <button 
                  key={index}
                  onClick={() => handleArchetypeSelect(index)}
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
              
              {/* Premium Card - 4th Position */}
              <button 
                onClick={() => setShowUnicornexus(true)}
                className="group relative p-2 bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-pink-300 transition-all duration-300 transform hover:scale-105 w-full"
              >
                {/* Premium Description */}
                <div className="text-center mb-0">
                  <h3 className="text-2xl font-bold text-purple-800 mb-0" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    PREMIUM
                  </h3>
                  <p className="text-purple-700 text-lg mb-0 leading-tight" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    More Cost + More Reward with WhySee Premium
                  </p>
                </div>

                {/* Premium Image/Content */}
                <div className="flex justify-center mb-0">
                  <div className="w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center mb-4">
                      <span className="text-6xl mr-2">🌸</span>
                      <span className="text-6xl mr-2">✨</span>
                      <span className="text-6xl mr-2">💖</span>
                      <span className="text-6xl">🦄</span>
                    </div>
                          <div className="text-center">
                            <span className="text-2xl font-bold text-purple-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                              Click to see what premium gives you
                            </span>
                          </div>
                  </div>
                </div>
                
                <div className="text-center mt-0">
                  <div className="flex items-center justify-center">
                    <span className="text-purple-600 text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      STATUS: EXCLUSIVE
                    </span>
                  </div>
                </div>
              </button>
          </div>

          {/* Terminate Session Button */}
          <div className="text-center mt-8">
            <button 
              onClick={onBack}
              className="px-6 py-3 bg-transparent border border-red-400 text-red-400 font-mono hover:bg-red-400 hover:text-black transition-all duration-300"
            >
              &lt; TERMINATE_SESSION
            </button>
          </div>
        </div>

                {/* Pricing Modal */}
                {showPricing && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-black border-2 border-cyan-400 rounded-lg shadow-2xl max-w-2xl w-full p-8 relative">
                      {/* Close button */}
                      <button 
                        onClick={() => setShowPricing(false)}
                        className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 text-2xl font-bold font-mono"
                      >
                        ✕
                      </button>
                      
                      <div className="text-center">
                        <div className="mb-6">
                          <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-mono">
                            &gt; PRICING STRUCTURE
                          </h2>
                        </div>
                        
                        <div className="bg-black/50 border border-cyan-400 rounded-lg p-6 mb-6">
                          <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
                            $4000 per month until you become a founder
                          </h3>
                          <p className="text-green-400 text-lg mb-4 font-mono">
                            If you're not willing to take the risk you're not cut out for it
                          </p>
                        </div>
                        
                        <div className="bg-red-900/20 border border-red-400 rounded-lg p-6 mb-6">
                          <h3 className="text-xl font-bold text-red-400 mb-3 font-mono">
                            ⚠️ WARNING: NO CANCELLATION
                          </h3>
                          <p className="text-red-300 font-mono">
                            Do not expect to cancel anytime
                          </p>
                        </div>
                        
                        <div className="bg-yellow-900/20 border border-yellow-400 rounded-lg p-6 mb-6">
                          <h3 className="text-xl font-bold text-yellow-400 mb-3 font-mono">
                            FOUNDER CRITERIA
                          </h3>
                          <p className="text-yellow-300 mb-2 font-mono">
                            To be considered a founder:
                          </p>
                          <ul className="text-yellow-300 text-left font-mono space-y-2">
                            <li>• 5 out of 10 people questioned at a random SF hackathon have to know what your startup is</li>
                            <li>• You need to show proof of min 10,000 X followers</li>
                            <li>• You need to show proof of min 20,000 LinkedIn followers</li>
                          </ul>
                        </div>
                        
                        <button 
                          onClick={() => setShowPricing(false)}
                          className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                        >
                          &gt; ACKNOWLEDGED
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Unicornexus Modal */}
                {showUnicornexus && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl border-4 border-purple-300 shadow-2xl max-w-2xl w-full p-8 relative">
                      {/* Close button */}
                      <button 
                        onClick={() => setShowUnicornexus(false)}
                        className="absolute top-4 right-4 text-purple-600 hover:text-purple-800 text-2xl font-bold"
                        style={{ fontFamily: 'Comic Sans MS, cursive' }}
                      >
                        ✕
                      </button>
                      
                      <div className="text-center">
                        <div className="flex justify-center items-center mb-4">
                          <span className="text-4xl mr-2">🦄</span>
                          <span className="text-4xl mr-2">🌌</span>
                          <span className="text-4xl mr-2">✨</span>
                          <span className="text-4xl">👑</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-purple-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          UNICORNEXUS
                        </h2>
                        
                        <div className="mb-6">
                          <img 
                            src="/unicornexus.png" 
                            alt="Unicornexus"
                            className="w-64 h-64 object-contain rounded-2xl mx-auto mb-4"
                          />
                        </div>
                        
                        <p className="text-lg text-purple-700 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          Legendary founder who sleeps 3 hours/night, microdoses LSD on flights, and raises $200M from SoftBank without showing a deck
                        </p>
                        
                        <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-purple-300">
                          <h3 className="text-xl font-bold text-purple-800 mb-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                            Check if you qualify
                          </h3>
                          <p className="text-purple-700 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                            $500/month until your application gets reviewed
                          </p>
                          <p className="text-sm text-purple-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                            Usually around 2 months but could be up to 36 months
                          </p>
                        </div>
                        
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                          🌟 Apply for Unicornexus 🌟
                        </button>
                        
                        <div className="flex justify-center items-center">
                          <span className="text-2xl mr-1">🦄</span>
                          <span className="text-2xl mr-1">🌌</span>
                          <span className="text-2xl mr-1">✨</span>
                          <span className="text-2xl">👑</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

      </div>
    </div>
  );
}
