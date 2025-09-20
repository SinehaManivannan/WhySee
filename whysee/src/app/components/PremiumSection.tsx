'use client';

interface PremiumSectionProps {
  onClose: () => void;
}

export default function PremiumSection({ onClose }: PremiumSectionProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl border-4 border-pink-300 shadow-2xl max-w-2xl w-full p-8 relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-600 hover:text-purple-800 text-2xl font-bold"
          style={{ fontFamily: 'Comic Sans MS, cursive' }}
        >
          ✕
        </button>
        
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="text-4xl mr-2">🌸</span>
            <span className="text-4xl mr-2">✨</span>
            <span className="text-4xl mr-2">💖</span>
            <span className="text-4xl mr-2">🌺</span>
            <span className="text-4xl">🦄</span>
          </div>
          
          <h2 className="text-3xl font-bold text-purple-800 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            More Cost + More Reward with WhySee Premium
          </h2>
          
          <p className="text-lg text-purple-700 mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Crave something a little more hardcore? Go with one of our premium options
          </p>
          
          <div className="flex justify-center items-center mb-6">
            <span className="text-3xl mr-2">🌻</span>
            <span className="text-3xl mr-2">🎀</span>
            <span className="text-3xl mr-2">💐</span>
            <span className="text-3xl mr-2">🌷</span>
            <span className="text-3xl mr-2">🌹</span>
            <span className="text-3xl">🌼</span>
          </div>
          
          <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            🌟 Upgrade to Premium 🌟
          </button>
          
          <div className="flex justify-center items-center">
            <span className="text-2xl mr-1">🌺</span>
            <span className="text-2xl mr-1">🌸</span>
            <span className="text-2xl mr-1">🌼</span>
            <span className="text-2xl mr-1">🌻</span>
            <span className="text-2xl">🌷</span>
          </div>
        </div>
      </div>
    </div>
  );
}
