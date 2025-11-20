
import React, { useEffect, useState } from 'react';
import { ArrowRight, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Quazar is a decentralized GPU network combining the power of autonomous finance, secure AI with privacy, and robust blockchain infrastructure.";

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize coordinates to -1 to 1
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 30); // Typing speed in ms

    return () => clearInterval(intervalId);
  }, []);

  const scrollToRoadmap = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('roadmap');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhitepaperClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      {/* Global Background */}
      <div className="absolute inset-0 bg-quazar-black pointer-events-none z-0"></div>
      
      {/* Interactive Quazar Animation Background */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * 2}deg) translateZ(0)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
         {/* The Quazar System Container - Increased Visibility */}
         <div className="relative w-[600px] h-[600px] md:w-[900px] md:h-[900px]">
            
            {/* Core Glow - Deeper and Brighter */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-900/30 rounded-full blur-[80px] mix-blend-screen"
                 style={{ transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` }}
            ></div>
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-quazar-primary/40 rounded-full blur-[50px] animate-pulse"
                 style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}
            ></div>

            {/* Inner Ring - High Energy */}
            <div className="absolute inset-[28%] border border-quazar-primary/30 rounded-full animate-[spin_20s_linear_infinite] shadow-[0_0_15px_rgba(0,240,255,0.1)]"></div>
            <div className="absolute inset-[28%] border-t-2 border-l border-transparent border-r-quazar-primary rounded-full animate-[spin_20s_linear_infinite] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>

            {/* Middle Ring (Tilted) - Purple/Blue Accents */}
            <div className="absolute inset-[12%] border border-purple-500/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
            <div className="absolute inset-[12%] border-b-2 border-purple-500/60 border-transparent rounded-full animate-[spin_30s_linear_infinite_reverse] shadow-[0_0_20px_rgba(168,85,247,0.3)]"></div>

            {/* Outer Ring - Large Orbit */}
            <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_60s_linear_infinite]">
                {/* Bright Satellite */}
                <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_20px_white]"></div>
            </div>
            
            {/* Floating Particles (Parallax Layer) - More distinct */}
             <div 
                className="absolute inset-0"
                style={{ transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)` }}
             >
                <div className="absolute top-[22%] left-[22%] w-2 h-2 bg-white rounded-full opacity-70 shadow-[0_0_10px_white]"></div>
                <div className="absolute bottom-[28%] right-[28%] w-2.5 h-2.5 bg-quazar-primary rounded-full opacity-60 blur-[1px] shadow-[0_0_10px_cyan]"></div>
                <div className="absolute top-[18%] right-[38%] w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
             </div>
         </div>
      </div>

      {/* Stardust Texture Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-quazar-primary/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-quazar-primary animate-pulse"></span>
            <span className="text-xs font-medium text-quazar-primary tracking-widest uppercase">The Future of DePIN</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl">
          BLOCKCHAIN FOR <br />
          <span className="text-gradient drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">DEFI & AI COMPUTING</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed drop-shadow-md min-h-[84px] md:min-h-[60px]">
          {typedText}
          <span className="inline-block w-0.5 h-5 ml-1 bg-quazar-primary animate-pulse align-middle"></span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Whitepaper Button Container */}
          <div className="relative w-full sm:w-auto">
             {showTooltip && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-black/90 text-quazar-primary border border-quazar-primary text-sm font-bold px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.3)] whitespace-nowrap z-50 transition-all duration-300 animate-bounce">
                   Coming Soon...
                   <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-b border-r border-quazar-primary rotate-45"></div>
                </div>
             )}
             <button 
                onClick={handleWhitepaperClick}
                className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded hover:bg-gray-200 transition-all min-w-[200px]"
             >
                Whitepaper
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

          <a 
            href="#roadmap"
            onClick={scrollToRoadmap}
            className="flex items-center justify-center gap-2 px-8 py-4 glass-panel border-quazar-primary/50 text-white font-bold text-lg rounded hover:bg-quazar-primary/10 transition-all min-w-[200px] cursor-pointer backdrop-blur-sm shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          >
            Start Mining
            <Cpu className="w-5 h-5" />
          </a>
        </div>

        {/* Stats Strip - Updated with Protocol Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-24 border-t border-white/10 pt-8 w-full bg-black/40 backdrop-blur-md rounded-xl p-4 shadow-lg">
             <div className="text-center">
                <p className="text-3xl font-bold text-white font-mono">95%</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Useful Compute</p>
             </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white font-mono">3B</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">QZAR For Mining</p>
             </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white font-mono">TEE</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Privacy Standard</p>
             </div>
             <div className="text-center">
                <p className="text-3xl font-bold text-white font-mono">&lt; 1s</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Block Time</p>
             </div>
        </div>
      </div>
    </div>
  );
};
