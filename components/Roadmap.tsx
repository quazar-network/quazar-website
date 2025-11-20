import React, { useEffect, useRef, useState } from 'react';
import { Flag, Code, Zap, Globe, Rocket } from 'lucide-react';

const phases = [
  {
    phase: "Phase 1: Genesis",
    date: "Q3 2025 - Q1 2026",
    title: "Concept & Architecture",
    description: "Laying the mathematical foundations for Proof-of-Compute and TEE integrations.",
    status: "active",
    icon: Flag,
    items: [
      "Whitepaper Release",
      "Mathematical Proof of Consensus",
      "Core Architecture Design",
      "Seed Funding Round"
    ]
  },
  {
    phase: "Phase 2: Development",
    date: "Q2 2026 - Q4 2026",
    title: "Core Engine Construction",
    description: "Building the initial node infrastructure and AI integration layers.",
    status: "upcoming",
    icon: Code,
    items: [
      "Quazar Engine v1.0",
      "Internal Alpha Testing",
      "Wallet Integration (FaceID)",
      "Smart Contract Audits (Preliminary)"
    ]
  },
  {
    phase: "Phase 3: Nebula",
    date: "Q1 2027 - Q2 2027",
    title: "Incentivized Testnet",
    description: "Public onboarding of GPU miners and stress testing the network with real AI workloads.",
    status: "upcoming",
    icon: Zap,
    items: [
      "Public Testnet Launch",
      "Miner Onboarding Program",
      "Bug Bounty Campaign",
      "AI Model Registry Beta"
    ]
  },
  {
    phase: "Phase 4: Supernova",
    date: "Q3 2027 - Q4 2027",
    title: "Mainnet Launch",
    description: "Full network genesis. The decentralized AI era is live.",
    status: "upcoming",
    icon: Rocket,
    items: [
      "Genesis Block Mined",
      "Token Generation Event (TGE)",
      "Governance DAO Launch",
      "Exchange Listings"
    ]
  },
  {
    phase: "Phase 5: Expansion",
    date: "2028 & Beyond",
    title: "Ecosystem Scaling",
    description: "Cross-chain interoperability and massive scaling of compute power.",
    status: "upcoming",
    icon: Globe,
    items: [
      "Cross-chain Bridges (IBC)",
      "Advanced LLM Training Clusters",
      "Developer Grant Program v2",
      "Decentralized Vector Storage"
    ]
  }
];

export const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // Handle Line Drawing Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger point: Line tip follows this position on screen (70% down)
      const triggerPoint = windowHeight * 0.7; 

      // Calculate how far the top of the container is passed the trigger point
      const offset = triggerPoint - rect.top;
      
      // Subtract a buffer (100px) from total height to ensure 100% is reached 
      // slightly before the physical end of the container padding.
      // This fixes the "stops short" bug.
      const totalHeight = rect.height - 100; 
      
      let percentage = offset / totalHeight;

      // Safety check: If user hits bottom of page, force full completion
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
         percentage = 1;
      }

      percentage = Math.max(0, Math.min(1, percentage));

      setLineHeight(percentage * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Card Reveal Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = document.querySelectorAll('.roadmap-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Journey to <span className="text-quazar-primary">Mainnet</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-quazar-primary to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            We are currently in the <span className="text-white font-bold">Genesis</span> phase. Building the foundation of decentralized AI.
          </p>
        </div>

        <div ref={containerRef} className="relative pb-20">
          {/* --- Background Track Line (Static) --- */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:-translate-x-1/2"></div>

          {/* --- Active Progress Line (Dynamic) --- */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-quazar-primary via-purple-500 to-blue-600 md:-translate-x-1/2 transition-all duration-100 ease-linear shadow-[0_0_15px_rgba(0,240,255,0.8)]"
            style={{ height: `${lineHeight}%` }}
          >
             {/* Glowing Head of the line */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
          </div>

          <div className="space-y-12 md:space-y-24 pt-10">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              const isActive = phase.status === "active";
              const isCompleted = phase.status === "completed";
              const isVisible = visibleItems.includes(index);
              
              return (
                <div 
                  key={index}
                  data-index={index}
                  className={`roadmap-card relative flex items-center md:justify-between transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  } ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  
                  {/* Node Indicator Dot */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 z-20 transition-all duration-500 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  } ${
                    isActive 
                      ? 'bg-quazar-primary border-quazar-primary/30 shadow-[0_0_30px_rgba(0,240,255,0.6)]' 
                      : isCompleted
                        ? 'bg-quazar-dark border-quazar-primary text-quazar-primary' 
                        : 'bg-black border-gray-800 text-gray-600'
                  }`}>
                    <phase.icon size={20} className={isActive ? 'text-black animate-pulse' : ''} />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 w-full md:w-[42%] ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className={`group relative p-6 md:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                      isActive 
                        ? 'bg-quazar-primary/10 border-quazar-primary/50 shadow-[0_0_50px_rgba(0,240,255,0.1)]' 
                        : isCompleted
                          ? 'bg-white/5 border-quazar-primary/20 hover:border-quazar-primary/40'
                          : 'bg-white/5 border-white/5 opacity-70'
                    }`}>
                      
                      {/* Date Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
                        isActive ? 'bg-quazar-primary text-black' : 'bg-white/10 text-gray-400'
                      } ${isEven ? 'md:ml-auto' : ''}`}>
                        {phase.date}
                      </div>

                      <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-200'}`}>{phase.title}</h3>
                      <p className="text-quazar-primary text-sm font-bold uppercase tracking-wide mb-4">{phase.phase}</p>
                      <p className="text-gray-400 mb-6 leading-relaxed">{phase.description}</p>

                      <ul className={`space-y-2 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            {isEven ? (
                                <>
                                    <span className={isCompleted || isActive ? 'text-gray-200' : 'text-gray-500'}>{item}</span>
                                    <div className={`w-1.5 h-1.5 rounded-full ${isCompleted || isActive ? 'bg-quazar-primary' : 'bg-gray-700'}`}></div>
                                </>
                            ) : (
                                <>
                                    <div className={`w-1.5 h-1.5 rounded-full ${isCompleted || isActive ? 'bg-quazar-primary' : 'bg-gray-700'}`}></div>
                                    <span className={isCompleted || isActive ? 'text-gray-200' : 'text-gray-500'}>{item}</span>
                                </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty Spacer for Desktop layout to balance the flexbox */}
                  <div className="hidden md:block w-[42%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};