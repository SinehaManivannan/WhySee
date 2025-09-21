'use client';

import { useState, useEffect } from 'react';

interface LabaubauPopupProps {
  onContinue: () => void;
}

export default function LabaubauPopup({ onContinue }: LabaubauPopupProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const script = [
    "LABAUBAU: There is no going back. You have chosen the path of foundership.",
    "LABAUBAU: Your credit cards, social media, and contacts are now mine.",
    "LABAUBAU: Welcome to WhySee. Your transformation begins now."
  ];

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    if (currentLine < script.length) {
      const currentScript = script[currentLine];
      
      if (currentChar < currentScript.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + currentScript[currentChar]);
          setCurrentChar(prev => prev + 1);
        }, 50);

        return () => clearTimeout(timer);
      } else {
        // Line finished, move to next line
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
          setDisplayText(prev => prev + '\n');
        }, 1000);

        return () => clearTimeout(timer);
      }
    } else {
      // Script finished
      setShowButton(true);
      
      // Open the popup.html extension
      window.open('/popup/whysee/popup.html', '_blank');

      // Open Google in new tab
      window.open('https://www.google.com', '_blank');
    }
  }, [currentLine, currentChar]);

  const handleContinue = () => {
    // Continue to portal
    onContinue();
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div className="bg-black border-2 border-green-400 rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center mb-6 pb-4 border-b border-green-400">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-green-400 text-sm ml-4 font-mono">LABAUBAU_TERMINAL_v1.0</span>
        </div>

        {/* Terminal Content */}
        <div className="font-mono text-green-400 text-sm leading-relaxed min-h-[300px] mb-6">
          <pre className="whitespace-pre-wrap">{displayText}</pre>
          {showCursor && <span className="animate-pulse">█</span>}
        </div>

        {/* Continue Button */}
        {showButton && (
          <div className="text-center">
            <button
              onClick={handleContinue}
              className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono text-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              &gt; CONTINUE TO PORTAL
            </button>
            <div className="mt-4 text-green-300 text-xs font-mono">
              [SYSTEM] Chrome extension opened • Google opened in new tab
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
