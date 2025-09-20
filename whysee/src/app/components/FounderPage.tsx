'use client';

import { useState, useEffect } from 'react';
import MembershipPortal from './MembershipPortal';

interface FounderPageProps {
  archetype: {
    title: string;
    description: string;
    status: string;
    image: string;
  };
  onBack: () => void;
}

export default function FounderPage({ archetype, onBack }: FounderPageProps) {
  const [showPortal, setShowPortal] = useState(false);


  const handleAcceptLabaubau = () => {
    setShowPortal(true);
  };

  const handleBackFromPortal = () => {
    setShowPortal(false);
  };

  // Show membership portal if accepted
  if (showPortal) {
    return <MembershipPortal archetype={archetype} />;
  }

  const getArchetypeActions = () => {
    switch (archetype.title) {
      case 'DOSELORD':
        return [
          'Enroll at Stanford University',
          'Drop out after one semester with a Medium post about "following your calling"',
          'Throw out 90% of your wardrobe; keep two identical hoodies',
          'Text your LSD dealer on your walk home',
          'Code until your eyes bleed, subsist on Soylent and Yerba Mate'
        ];
      case 'FOUNDIGRANT':
        return [
          'Denounce your citizenship',
          'Move to a new country with $200',
          'Get a work visa that expires in 11 months',
          'Go to therapy to "build your trauma"',
          'Start 3 companies in a row, call them "learning experiences"',
          'Brag about resilience while your burn rate is $20k/month'
        ];
      case 'PITCHGREMLIN':
        return [
          'Sell your house or break your lease',
          'Post "anyone got a couch in SoMa? I\'ll pay in equity"',
          'Buy an ETHDenver ticket and a badge lanyard collection',
          'Practice saying "DAU" every 30 seconds until it sounds natural',
          'Take 3 a.m. grindset selfies with "just hustling" captions on X',
          'Show up at every conference, pitch in line for the bathroom'
        ];
      default:
        return ['Custom actions will be determined based on your profile'];
    }
  };

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
      
      <div className="max-w-none mx-auto px-6 z-10 relative">
        <div className="space-y-8">
          {/* Selected Archetype */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-400 mb-4 tracking-wider">
              &gt; {archetype.title} TRACK TERMS OF SERVICE
            </h1>
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="flex justify-center">
                <img 
                  src={archetype.image} 
                  alt={archetype.title}
                  className="w-48 h-48 object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-48 h-48 bg-gradient-to-br from-green-300 to-cyan-300 rounded-lg flex items-center justify-center text-6xl font-bold text-black" style={{ display: 'none' }}>
                  {archetype.title.charAt(0)}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <button 
                  onClick={onBack}
                  className="px-6 py-3 bg-transparent border border-red-400 text-red-400 font-mono hover:bg-red-400 hover:text-black transition-all duration-300"
                >
                  &lt; BACK_TO_SELECTION
                </button>
                <button 
                  onClick={handleAcceptLabaubau}
                  className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono text-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  &gt; ACCEPT_LABAUBAU
                </button>
              </div>
            </div>
            <p className="text-green-300 text-lg mb-6">
              {archetype.description}
            </p>
          </div>

          {/* 4 in a Row Grid of Explanation Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
            {/* Labaubau Explanation */}
            <div className="bg-black/50 border border-green-400 p-4 rounded-lg">
              <h2 className="text-lg font-bold text-green-400 mb-2">
                &gt; MEET YOUR LABAUBAU
              </h2>
              <div className="space-y-2 text-green-300 text-sm">
                <p>
                  Your Labaubau is a 0-tolerance personal trainer integrated into your digital world. 
                  It has access to things that might leave you feeling vulnerable, but in the end are worth it.
                </p>
                <p>
                  Based on your needs, your Labaubau will frequently request action items from you 
                  which will keep you on the path to foundership. There is no option but to accept 
                  the challenges and tribulations that your Labaubau instills upon you.
                </p>
              </div>
            </div>

            {/* Access Permissions */}
            <div className="bg-red-900/20 border border-red-400 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-red-400 mb-2">
                ⚠️ ACCESS PERMISSIONS
              </h3>
              <ul className="text-red-300 space-y-1 text-sm">
                <li>• All credit cards and financial accounts</li>
                <li>• Complete contact list and communication access</li>
                <li>• Full social media account control</li>
                <li>• Browser and app blocking capabilities</li>
                <li>• Real-time location and activity monitoring</li>
              </ul>
              <p className="text-red-300 mt-2 text-sm">
                The Labaubau will not let you get back to your task at hand unless you complete the action requested.
              </p>
            </div>

            {/* Archetype-Specific Actions */}
            <div className="bg-yellow-900/20 border border-yellow-400 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">
                {archetype.title} TRAINING
              </h3>
              <p className="text-yellow-300 mb-2 text-sm">
                These actions may seem extreme, but they are based on scientific evidence:
              </p>
              <ul className="text-yellow-300 space-y-1 text-sm">
                {getArchetypeActions().map((action, index) => (
                  <li key={index}>• {action}</li>
                ))}
              </ul>
            </div>

            {/* Example Scenarios */}
            <div className="bg-cyan-900/20 border border-cyan-400 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">
                EXAMPLE SCENARIOS
              </h3>
              <div className="space-y-2 text-cyan-300 text-sm">
                <p>
                  <strong>Diet Control:</strong> The Labaubau may spend your money on Soylent or ramen 
                  that must be your diet for an undetermined time.
                </p>
                <p>
                  <strong>Task Blocking:</strong> Until you complete required actions, the Labaubau 
                  will stay on the webpage or app you&apos;re using, blocking you from continuing 
                  with your daily tasks.
                </p>
                <p>
                  <strong>Social Engineering:</strong> Your Labaubau will post on your social media, 
                  message your contacts, and make decisions that align with your founder archetype.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
