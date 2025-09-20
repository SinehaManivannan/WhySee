'use client';

import { useState, useEffect } from 'react';

interface MembershipPortalProps {
  archetype: {
    title: string;
    description: string;
    status: string;
    image: string;
  };
}

export default function MembershipPortal({ archetype }: MembershipPortalProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const fullText = 'LABAUBAU_MEMBERSHIP_PORTAL_ACTIVATED...';

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

  const getExtremeActions = () => {
    switch (archetype.title) {
      case 'DOSELORD':
        return [
          { id: 1, action: 'Enroll at Stanford University (pay full tuition)', completed: false },
          { id: 2, action: 'Drop out after exactly 1 semester with viral Medium post', completed: false },
          { id: 3, action: 'Burn 90% of your wardrobe in a public ceremony', completed: false },
          { id: 4, action: 'Get arrested for microdosing at a tech conference', completed: false },
          { id: 5, action: 'Live on only Soylent for 30 days straight', completed: false },
          { id: 6, action: 'Code for 72 hours straight without sleep', completed: false },
          { id: 7, action: 'Move to a van in the Stanford parking lot', completed: false },
          { id: 8, action: 'Start a cult following on Twitter about "digital minimalism"', completed: false },
          { id: 9, action: 'Get featured in TechCrunch for "dropping out to change the world"', completed: false },
          { id: 10, action: 'Raise $1M seed round without a business plan', completed: false }
        ];
      case 'FOUNDIGRANT':
        return [
          { id: 1, action: 'Renounce your citizenship in a public ceremony', completed: false },
          { id: 2, action: 'Move to a war-torn country with only $200', completed: false },
          { id: 3, action: 'Get a work visa that expires in 11 months', completed: false },
          { id: 4, action: 'Fake your own death in your home country', completed: false },
          { id: 5, action: 'Start 3 companies that all fail spectacularly', completed: false },
          { id: 6, action: 'Get deported and return illegally 3 times', completed: false },
          { id: 7, action: 'Marry someone for a green card (then divorce)', completed: false },
          { id: 8, action: 'Build a startup while living in a homeless shelter', completed: false },
          { id: 9, action: 'Get arrested for "disrupting" immigration law', completed: false },
          { id: 10, action: 'Become a citizen through "extreme entrepreneurship"', completed: false }
        ];
      case 'PITCHGREMLIN':
        return [
          { id: 1, action: 'Sell your house and live in a Tesla', completed: false },
          { id: 2, action: 'Pitch to 100 investors in 24 hours', completed: false },
          { id: 3, action: 'Get kicked out of 10 conferences for aggressive pitching', completed: false },
          { id: 4, action: 'Pitch your startup to your Uber driver', completed: false },
          { id: 5, action: 'Crash a wedding to pitch to the guests', completed: false },
          { id: 6, action: 'Pitch while skydiving (record it for LinkedIn)', completed: false },
          { id: 7, action: 'Get a restraining order from a VC', completed: false },
          { id: 8, action: 'Pitch at your own funeral (fake death for publicity)', completed: false },
          { id: 9, action: 'Start a "pitch therapy" group for other founders', completed: false },
          { id: 10, action: 'Raise $10M by pitching in your sleep', completed: false }
        ];
      default:
        return [{ id: 1, action: 'Custom actions will be determined', completed: false }];
    }
  };

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const extremeActions = getExtremeActions();
  const progressPercentage = (completedSteps.size / extremeActions.length) * 100;

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
      
      <div className="max-w-6xl mx-auto px-6 z-10 relative w-full">
        {/* Terminal header */}
        <div className="mb-6 border border-green-400 p-4 bg-black/50 backdrop-blur-sm">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-400 text-sm ml-4">LABAUBAU_PORTAL_v1.0</span>
          </div>
          <div className="text-green-400 text-sm">
            {displayText}<span className={showCursor ? 'opacity-100' : 'opacity-0'}>█</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-400 mb-4 tracking-wider">
              &gt; {archetype.title} MEMBERSHIP PORTAL
            </h1>
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="flex justify-center">
                <img 
                  src={archetype.image} 
                  alt={archetype.title}
                  className="w-32 h-32 object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-32 h-32 bg-gradient-to-br from-green-300 to-cyan-300 rounded-lg flex items-center justify-center text-4xl font-bold text-black" style={{ display: 'none' }}>
                  {archetype.title.charAt(0)}
                </div>
              </div>
              
              {/* Progress Stats */}
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  {completedSteps.size}/{extremeActions.length}
                </div>
                <div className="text-green-300 text-sm mb-2">Steps Completed</div>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="text-green-300 text-xs mt-1">
                  {Math.round(progressPercentage)}% Complete
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-black/50 border border-green-400 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-400 mb-8 text-center">
              &gt; EXTREME FOUNDER TIMELINE
            </h2>
            
            <div className="relative">
              
              <div className="grid grid-cols-5 gap-4 pb-8">
                {extremeActions.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex justify-center mb-4">
                      <button
                        onClick={() => toggleStep(step.id)}
                        className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                          completedSteps.has(step.id)
                            ? 'bg-green-400 border-green-400 text-black shadow-lg shadow-green-400/50'
                            : 'bg-black border-gray-400 hover:border-green-400 hover:bg-gray-800'
                        }`}
                      >
                        {completedSteps.has(step.id) ? (
                          <span className="text-lg font-bold">✓</span>
                        ) : (
                          <span className="text-xs font-bold text-gray-400">
                            {step.id.toString().padStart(2, '0')}
                          </span>
                        )}
                      </button>
                    </div>
                    
                    {/* Timeline content */}
                    <div className="text-center">
                      <div className={`p-3 rounded-lg border transition-all duration-300 ${
                        completedSteps.has(step.id)
                          ? 'bg-green-900/20 border-green-400'
                          : 'bg-gray-900/20 border-gray-600'
                      }`}>
                        <div className="mb-2">
                          <span className={`text-xs font-mono font-bold ${
                            completedSteps.has(step.id) ? 'text-green-300' : 'text-gray-400'
                          }`}>
                            PHASE {step.id.toString().padStart(2, '0')}
                          </span>
                        </div>
                        <div className="mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-mono ${
                            completedSteps.has(step.id)
                              ? 'bg-green-400 text-black'
                              : 'bg-gray-600 text-gray-300'
                          }`}>
                            {completedSteps.has(step.id) ? 'DONE' : 'TODO'}
                          </span>
                        </div>
                        <p className={`text-xs font-mono leading-tight ${
                          completedSteps.has(step.id) 
                            ? 'text-green-300 line-through opacity-70' 
                            : 'text-gray-300'
                        }`}>
                          {step.action}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
