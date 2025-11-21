import React, { useState, useEffect } from 'react';
import { Box, ShieldCheck, Cpu, User, FileJson, ArrowDown, Check } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const QuazarProtocol: React.FC = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;

    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 5000); // 5 seconds per step
    return () => clearInterval(interval);
  }, [isManual]);

  const handleStepClick = (index: number) => {
    setStep(index);
    setIsManual(true);
  };

  const steps = [
    {
      title: t('protocol.steps.routing.title'),
      desc: t('protocol.steps.routing.desc')
    },
    {
      title: t('protocol.steps.multiSig.title'),
      desc: t('protocol.steps.multiSig.desc')
    },
    {
      title: t('protocol.steps.consensus.title'),
      desc: t('protocol.steps.consensus.desc')
    },
    {
      title: t('protocol.steps.settlement.title'),
      desc: t('protocol.steps.settlement.desc')
    }
  ];

  return (
    <section id="protocol" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
             <Trans i18nKey="protocol.title" components={{ 1: <span className="text-quazar-primary" /> }} />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('protocol.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Steps List */}
          <div className="space-y-4">
            {steps.map((s, idx) => {
              const isActive = step === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className={`p-6 rounded-lg border transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'bg-white/5 border-quazar-primary/50 shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                      : 'bg-transparent border-transparent opacity-50 hover:opacity-80 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded flex items-center justify-center text-sm font-bold font-mono border transition-colors ${
                        isActive ? 'bg-quazar-primary text-black border-quazar-primary' : 'bg-[#111] text-gray-500 border-white/10'
                    }`}>
                        0{idx + 1}
                    </div>
                    <div>
                        <h3 className={`text-lg font-bold mb-1 ${isActive ? 'text-white' : 'text-gray-400'}`}>{s.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Animation Diagram */}
          <div className="relative h-[450px] bg-[#0a0a0a] border border-white/10 rounded-xl flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            {/* --- DIAGRAM LAYERS --- */}
            
            {/* TOP: User */}
            <div className="absolute top-8 flex flex-col items-center z-20">
                <div className={`w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center transition-all duration-300 ${step === 3 ? 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : ''}`}>
                    <User className="text-gray-400" size={20} />
                </div>
                <span className="text-[10px] text-gray-500 font-mono mt-2">{t('protocol.diagram.user')}</span>
                
                {/* Payment Deduction Animation (Step 3/4) */}
                <div className={`absolute top-0 right-[-40px] text-red-500 font-mono font-bold text-xs transition-all duration-700 ${step === 3 ? 'opacity-100 -translate-y-4' : 'opacity-0 translate-y-0'}`}>
                    -100 QZAR
                </div>
            </div>

            {/* ANIMATED PACKET (Step 0 Only) */}
            {/* Simulates the data traveling from User to Block */}
            <div className={`absolute top-14 z-30 w-3 h-3 bg-quazar-primary rounded-full shadow-[0_0_10px_cyan] transition-all duration-1000 ease-in-out ${
                step === 0 ? 'translate-y-[80px] opacity-100' : 'translate-y-0 opacity-0'
            }`}></div>

            {/* CENTER: The Block */}
                <div className={`relative w-64 h-40 bg-[#080808] border-2 rounded-lg flex flex-col items-center justify-center z-10 transition-all duration-500 ${
                step === 2 ? 'border-quazar-primary shadow-[0_0_30px_rgba(0,240,255,0.2)] scale-105' : 'border-white/10'
            }`}>
                <div className="absolute -top-3 bg-[#080808] px-2 text-[10px] text-gray-500 font-mono border border-white/10 rounded">
                    {t('protocol.diagram.block')} #89102
                </div>

                {/* The Transaction Card */}
                {/* Logic: 
                    Step 0: Invisible initially, fades in with delay (assembling).
                    Step 1-2: Fully visible.
                    Step 3: Fully visible, then we want it to fade out eventually for reset, 
                            but since we loop to 0, the step=0 logic handles the initial invisibility.
                */}
                <div className={`w-48 h-20 bg-[#111] border border-white/10 rounded flex items-center justify-between px-3 transition-all duration-500 ${
                    step === 0 ? 'opacity-100 delay-700 translate-y-0' : 'opacity-100 translate-y-0'
                } ${step === 0 && 'opacity-0' /* Initial state for step 0 before delay kicks in */ }`}>
                    
                    <div className="flex items-center gap-2">
                        <FileJson size={16} className="text-gray-400"/>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-300 font-mono">{t('protocol.diagram.txHash')}</span>
                            <span className="text-[8px] text-gray-600 font-mono">0x7F...9A</span>
                        </div>
                    </div>

                    {/* Signatures Container */}
                    <div className="flex gap-1">
                        {/* Miner Sig */}
                        <div className={`w-5 h-5 bg-green-500/20 border border-green-500/50 rounded flex items-center justify-center transition-all duration-300 ${step >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                             <Cpu size={10} className="text-green-500" />
                        </div>
                         {/* Val Sig 1 */}
                        <div className={`w-5 h-5 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center transition-all duration-300 delay-100 ${step >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                             <ShieldCheck size={10} className="text-blue-500" />
                        </div>
                         {/* Val Sig 2 */}
                        <div className={`w-5 h-5 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center transition-all duration-300 delay-200 ${step >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                             <ShieldCheck size={10} className="text-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Validated Badge */}
                {step >= 2 && (
                    <div className="absolute bottom-[-12px] bg-quazar-primary text-black text-[10px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1 animate-bounce">
                        <Check size={10} /> {t('protocol.diagram.consensus')}
                    </div>
                )}
            </div>

            {/* Connector Lines */}
            <div className="absolute inset-0 pointer-events-none z-0">
                 <svg width="100%" height="100%">
                    <line x1="50%" y1="100" x2="50%" y2="160" stroke="#333" strokeDasharray="4 4" />
                    <line x1="30%" y1="350" x2="50%" y2="290" stroke="#333" strokeDasharray="4 4" />
                    <line x1="70%" y1="350" x2="50%" y2="290" stroke="#333" strokeDasharray="4 4" />
                 </svg>
            </div>

            {/* BOTTOM: Nodes */}
            <div className="absolute bottom-8 w-full px-16 flex justify-between items-end z-20">
                
                {/* Miner */}
                <div className="flex flex-col items-center">
                    {/* Payment Received Animation */}
                    <div className={`text-green-500 font-mono font-bold text-xs mb-2 transition-all duration-700 ${step === 3 ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-2'}`}>
                        +95 QZAR
                    </div>
                    <div className={`w-12 h-12 rounded bg-[#111] border border-white/10 flex items-center justify-center transition-colors ${step === 1 ? 'border-green-500 text-green-500' : 'text-gray-500'}`}>
                        <Cpu size={20} />
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono mt-2">{t('protocol.diagram.miner')}</span>
                </div>

                {/* Validators */}
                <div className="flex flex-col items-center">
                    {/* Payment Received Animation */}
                    <div className={`text-green-500 font-mono font-bold text-xs mb-2 transition-all duration-700 ${step === 3 ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-2'}`}>
                        +5 QZAR
                    </div>
                    <div className={`w-12 h-12 rounded bg-[#111] border border-white/10 flex items-center justify-center transition-colors ${step === 1 ? 'border-blue-500 text-blue-500' : 'text-gray-500'}`}>
                        <ShieldCheck size={20} />
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono mt-2">{t('protocol.diagram.validators')}</span>
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};