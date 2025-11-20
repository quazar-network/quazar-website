
import React from 'react';
import { Rocket, Building2, Cpu } from 'lucide-react';

// Abstract Cosmic Visuals
const CosmicVisual: React.FC<{ type: 'startup' | 'enterprise' | 'provider' }> = ({ type }) => {
  
  if (type === 'startup') {
    // CONCEPT: NEURAL CONSTELLATION / IGNITION
    // A central core (idea) rapidly connecting to nodes (scaling/network)
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 160" className="overflow-visible">
        <defs>
          <radialGradient id="coreIgnition" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="40%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        
        {/* Central Core (The Idea) */}
        <circle cx="100" cy="80" r="8" fill="url(#coreIgnition)" className="animate-pulse">
            <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.8;1" dur="3s" repeatCount="indefinite" />
        </circle>
        
        {/* Radiating Network Connections */}
        <g stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1">
            {/* Top Left */}
            <line x1="100" y1="80" x2="60" y2="40">
                <animate attributeName="x2" values="100;60" dur="1s" fill="freeze" />
                <animate attributeName="y2" values="80;40" dur="1s" fill="freeze" />
            </line>
            {/* Top Right */}
            <line x1="100" y1="80" x2="150" y2="50">
                 <animate attributeName="x2" values="100;150" dur="1.2s" fill="freeze" />
                 <animate attributeName="y2" values="80;50" dur="1.2s" fill="freeze" />
            </line>
            {/* Bottom */}
            <line x1="100" y1="80" x2="100" y2="130">
                 <animate attributeName="y2" values="80;130" dur="0.8s" fill="freeze" />
            </line>
             {/* Left */}
            <line x1="100" y1="80" x2="40" y2="90">
                 <animate attributeName="x2" values="100;40" dur="1.5s" fill="freeze" />
            </line>
             {/* Right */}
            <line x1="100" y1="80" x2="160" y2="100">
                 <animate attributeName="x2" values="100;160" dur="1.1s" fill="freeze" />
            </line>
        </g>

        {/* Satellite Nodes (The Growth) */}
        <g fill="white">
            <circle cx="60" cy="40" r="2.5" className="animate-[ping_2s_infinite]" />
            <circle cx="150" cy="50" r="2" className="animate-[ping_3s_infinite]" />
            <circle cx="100" cy="130" r="2" className="animate-[ping_2.5s_infinite]" />
            <circle cx="40" cy="90" r="1.5" className="animate-[ping_2s_infinite]" />
            <circle cx="160" cy="100" r="2.5" className="animate-[ping_2.2s_infinite]" />
        </g>

        {/* Moving Data Packets */}
        <circle r="2" fill="cyan">
             <animateMotion dur="2s" repeatCount="indefinite" path="M100 80 L60 40" />
        </circle>
        <circle r="2" fill="cyan">
             <animateMotion dur="2.5s" repeatCount="indefinite" path="M100 80 L150 50" />
        </circle>
         <circle r="2" fill="cyan">
             <animateMotion dur="1.5s" repeatCount="indefinite" path="M100 80 L100 130" />
        </circle>

      </svg>
    );
  } 
  
  if (type === 'enterprise') {
    // CONCEPT: ORBITAL DEFENSE
    // Concentric rings protecting a core
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 160" className="overflow-visible">
        <defs>
           <radialGradient id="planetGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
           </radialGradient>
        </defs>

        {/* The Core */}
        <circle cx="100" cy="80" r="20" fill="url(#planetGrad)" opacity="0.6" className="animate-pulse" />
        <circle cx="100" cy="80" r="8" fill="white" />

        {/* Inner Shield Ring */}
        <g className="origin-[100px_80px] animate-[spin_10s_linear_infinite]">
            <circle cx="100" cy="80" r="35" stroke="cyan" strokeWidth="1.5" strokeDasharray="40 20" fill="none" opacity="0.8" />
        </g>

        {/* Outer Fortress Ring */}
        <g className="origin-[100px_80px] animate-[spin_20s_linear_infinite_reverse]">
            <path d="M100 20 A 60 60 0 0 1 160 80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
            <path d="M100 140 A 60 60 0 0 1 40 80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
            
            {/* Satellites */}
            <circle cx="100" cy="20" r="2" fill="white" />
            <circle cx="100" cy="140" r="2" fill="white" />
        </g>

        {/* Hex Grid Overlay Hint */}
        <path d="M70 80 L85 55 L115 55 L130 80 L115 105 L85 105 Z" stroke="cyan" strokeWidth="0.5" fill="none" opacity="0.3" className="animate-pulse" />
      </svg>
    );
  }

  // PROVIDER: ACCRETION DISK / HARVEST
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 160" className="overflow-visible">
        <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>
        
        {/* Center Singularity (Chip) */}
        <rect x="90" y="70" width="20" height="20" rx="4" stroke="#a855f7" strokeWidth="2" fill="#111" className="animate-pulse" />
        <rect x="95" y="75" width="10" height="10" fill="white" opacity="0.8" />

        {/* Swirling Energy Streams */}
        <g className="origin-[100px_80px] animate-[spin_8s_linear_infinite]">
            <path d="M100 80 L100 10" stroke="url(#warpGrad)" strokeWidth="2" opacity="0.5" strokeDasharray="5 5" />
            <path d="M100 80 L100 150" stroke="url(#warpGrad)" strokeWidth="2" opacity="0.5" strokeDasharray="5 5" />
            <path d="M100 80 L170 80" stroke="url(#warpGrad)" strokeWidth="2" opacity="0.5" strokeDasharray="5 5" />
            <path d="M100 80 L30 80" stroke="url(#warpGrad)" strokeWidth="2" opacity="0.5" strokeDasharray="5 5" />
            
            {/* Diagonals */}
            <path d="M100 80 L150 30" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
            <path d="M100 80 L50 130" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
        </g>

        {/* Incoming Particles */}
        <circle cx="100" cy="20" r="3" fill="#00f0ff">
            <animate attributeName="cy" from="20" to="70" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="80" r="3" fill="#a855f7">
            <animate attributeName="cx" from="170" to="110" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
    </svg>
  );
};

export const TargetAudience: React.FC = () => {
  const items = [
    {
      type: 'startup' as const,
      icon: Rocket,
      title: "AI Startups & Innovators",
      headline: "Launch your AI product in days, not months.",
      description: "Access enterprise-grade H100 clusters without the massive capital expenditure. Scale your inference infrastructure seamlessly as your user base grows, paying only for what you use."
    },
    {
      type: 'enterprise' as const,
      icon: Building2,
      title: "Enterprise Scale",
      headline: "Slash compute costs by 50-60%.",
      description: "Run secure inference and training workloads on TEE-protected nodes via a simple API. Scale compute capacity instantly without the overhead of managing hardware or clusters."
    },
    {
      type: 'provider' as const,
      icon: Cpu,
      title: "Compute Providers",
      headline: "Turn your GPUs into a revenue stream.",
      description: "Connect your consumer-grade GPUs or mining rigs to the Quazar grid. Monetize your idle hardware by powering decentralized AI workloads and earn QZAR with automated payouts."
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built for the <span className="text-quazar-primary">Entire Economy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Connecting supply and demand in a permissionless, high-performance market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-quazar-primary/30 transition-all duration-500 flex flex-col hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              
              {/* Visual Header */}
              <div className="h-48 bg-gradient-to-b from-[#111] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.2),transparent)]"></div>
                 <div className="w-full h-full p-4 relative z-10 transform group-hover:scale-110 transition-transform duration-700">
                    <CosmicVisual type={item.type} />
                 </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col border-t border-white/5">
                <div className="flex items-center gap-2 mb-4">
                    <item.icon size={18} className="text-quazar-primary" />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">{item.title}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 min-h-[3.5rem]">
                  {item.headline}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Highlight Line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-quazar-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
