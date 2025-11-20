
import React from 'react';
import { Key, Fingerprint, Coins, Network, Bot, Shield, LineChart, Blocks } from 'lucide-react';

export const AiAgents: React.FC = () => {
  return (
    <section id="ai-agents" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-6">
                    <Network size={14} className="text-quazar-primary" />
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Swarm Intelligence</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Autonomous <br/> <span className="text-gray-500">Agent Infrastructure</span></h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    Deploy autonomous agents bridging AI models and smart contracts. Enable direct on-chain collaboration and monetization.
                </p>

                <div className="space-y-4">
                    {[
                        { icon: Key, title: "Zero-Key Delegation", desc: "Abstract Account permissions without private key exposure." },
                        { icon: Coins, title: "Unified API Economy", desc: "Standardized monetization interface for all agent interactions." },
                        { icon: Fingerprint, title: "Digital Identity", desc: "On-chain reputation and identity passports for autonomous agents." }
                    ].map((item, idx) => (
                        <div key={idx} className="group flex items-start gap-4 p-4 border border-transparent hover:border-white/10 hover:bg-white/5 transition-all rounded-md">
                            <div className="mt-1">
                                <item.icon size={20} className="text-gray-500 group-hover:text-quazar-primary transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">{item.title}</h4>
                                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Visualization: Interactive Blockchain Diagram */}
            <div className="relative h-[500px] bg-[#050505] border border-white/10 rounded-md overflow-hidden flex flex-col items-center justify-center">
                 
                 {/* Background Grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                 {/* Diagram Container */}
                 <div className="relative w-full max-w-md h-full py-12 flex flex-col justify-between z-10">
                    
                    {/* Agents Layer (Top) */}
                    <div className="flex justify-between px-8">
                        {/* Agent 1 */}
                        <div className="flex flex-col items-center gap-2 relative group z-20">
                            <div className="w-12 h-12 bg-[#111] border border-white/10 rounded-lg flex items-center justify-center relative z-10 group-hover:border-quazar-primary/50 transition-colors shadow-lg">
                                <Bot size={24} className="text-white" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-[#111]"></div>
                            </div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase bg-black/50 px-2 py-0.5 rounded">Trader_Bot</div>
                        </div>

                        {/* Agent 2 */}
                        <div className="flex flex-col items-center gap-2 relative group mt-8 z-20">
                            <div className="w-12 h-12 bg-[#111] border border-white/10 rounded-lg flex items-center justify-center relative z-10 group-hover:border-purple-500/50 transition-colors shadow-lg">
                                <Shield size={24} className="text-white" />
                            </div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase bg-black/50 px-2 py-0.5 rounded">Security_AI</div>
                        </div>

                        {/* Agent 3 */}
                        <div className="flex flex-col items-center gap-2 relative group z-20">
                            <div className="w-12 h-12 bg-[#111] border border-white/10 rounded-lg flex items-center justify-center relative z-10 group-hover:border-yellow-500/50 transition-colors shadow-lg">
                                <LineChart size={24} className="text-white" />
                            </div>
                            <div className="text-[10px] font-mono text-gray-500 uppercase bg-black/50 px-2 py-0.5 rounded">Analyst_V2</div>
                        </div>
                    </div>

                    {/* Middle Connection Layer (SVG Lines) */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 448 500" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="400">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                                    <stop offset="100%" stopColor="rgba(0,240,255,0.5)" />
                                </linearGradient>
                            </defs>
                            
                            {/* Left Agent to Chain */}
                            <path d="M 80 100 C 80 220, 224 200, 224 330" fill="none" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="4 4" />
                            
                            {/* Middle Agent to Chain */}
                            <path d="M 224 130 L 224 330" fill="none" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="4 4" />

                            {/* Right Agent to Chain */}
                            <path d="M 368 100 C 368 220, 224 200, 224 330" fill="none" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="4 4" />

                             {/* Animated Packets */}
                             <circle r="3" fill="#00f0ff">
                                <animateMotion dur="3s" repeatCount="indefinite" path="M 80 100 C 80 220, 224 200, 224 330" />
                             </circle>
                             <circle r="3" fill="#a855f7">
                                <animateMotion dur="4s" repeatCount="indefinite" path="M 224 130 L 224 330" />
                             </circle>
                             <circle r="3" fill="#eab308">
                                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 368 100 C 368 220, 224 200, 224 330" />
                             </circle>
                        </svg>
                    </div>

                    {/* Blockchain Layer (Bottom) */}
                    <div className="relative flex flex-col items-center justify-center mt-auto pb-8">
                        
                        {/* The Chain Blocks */}
                        <div className="flex gap-4 items-center relative z-10">
                            {/* Block N-1 */}
                            <div className="w-14 h-14 bg-[#0a0a0a] border border-white/5 rounded flex flex-col items-center justify-center opacity-40">
                                <span className="text-[8px] text-gray-600 mb-1">BLOCK</span>
                                <span className="text-[8px] text-gray-600 font-mono">#89200</span>
                            </div>
                            
                            {/* Connection Line */}
                            <div className="w-6 h-px bg-white/10"></div>

                            {/* Current Block (Active) */}
                            <div className="w-24 h-24 bg-[#111] border border-quazar-primary/50 rounded-md flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.15)] relative">
                                <div className="absolute -top-3 bg-quazar-primary text-black text-[9px] font-bold px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]">#89201</div>
                                <Blocks size={32} className="text-white mb-2" />
                                <div className="text-[9px] font-mono text-quazar-primary animate-pulse">VALIDATING</div>
                                
                                {/* Ingesting Particles */}
                                <div className="absolute inset-0 rounded-md border border-quazar-primary/20 animate-ping opacity-20"></div>
                            </div>

                            {/* Connection Line */}
                            <div className="w-6 h-px bg-white/10"></div>

                            {/* Block N+1 */}
                            <div className="w-14 h-14 bg-[#0a0a0a] border border-white/5 border-dashed rounded flex flex-col items-center justify-center opacity-40">
                                <span className="text-[8px] text-gray-600 mb-1">NEXT</span>
                                <div className="w-4 h-4 border border-gray-700 rounded-full border-t-transparent animate-spin"></div>
                            </div>
                        </div>
                        
                        <div className="mt-6 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-quazar-primary animate-pulse"></div>
                            <div className="text-xs font-bold text-gray-400 tracking-[0.2em]">QUAZAR CONSENSUS LAYER</div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  )
}
