
import React, { useState } from 'react';
import { UserType } from '../types';
import { Smartphone, Cpu, Code2, CheckCircle2, TrendingUp, Wallet, MessageSquare, ArrowUpRight, MoreHorizontal, Battery, Wifi, Signal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WalletMockup = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-full w-full p-8">
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-[3rem] h-[600px] w-[320px] shadow-2xl flex flex-col overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
        {/* Side Buttons */}
        <div className="h-[32px] w-[3px] bg-gray-700 absolute -left-[11px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-700 absolute -left-[11px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-700 absolute -left-[11px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-700 absolute -right-[11px] top-[142px] rounded-r-lg"></div>

        <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-black relative flex flex-col">
          
          {/* Status Bar */}
          <div className="px-6 pt-4 pb-2 flex justify-between items-center text-white text-xs z-20">
             <span>9:41</span>
             <div className="flex items-center gap-1.5">
                <Signal size={12} />
                <Wifi size={12} />
                <Battery size={14} />
             </div>
          </div>

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-between px-4">
             <div className="w-1 h-1 rounded-full bg-quazar-primary animate-[pulse_3s_ease-in-out_infinite]"></div>
             <div className="w-1 h-1 rounded-full bg-[#1a1a1a]"></div>
          </div>

          {/* App Content */}
          <div className="flex-1 flex flex-col p-6 relative z-10">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6 mt-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-quazar-primary to-blue-600 p-0.5">
                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-[10px] font-bold text-white">QZ</div>
                    </div>
                    <span className="text-white font-bold">Quazar</span>
                </div>
                <MoreHorizontal className="text-gray-400" size={20} />
            </div>

            {/* Balance Card */}
            <div className="relative bg-gradient-to-br from-[#1A1D27] to-[#0F111A] p-5 rounded-2xl border border-white/5 mb-6 overflow-hidden">
                {/* Subtle Breathing Background Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-quazar-primary/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
                
                <span className="relative text-gray-400 text-xs uppercase tracking-wider z-10">{t('ecosystem.wallet.totalBalance')}</span>
                <h2 className="relative text-3xl font-bold text-white mt-1 z-10">$173,100.45</h2>
                <div className="relative flex items-center gap-1 text-green-400 text-sm mt-2 z-10">
                    <TrendingUp size={14} />
                    <span>+$1,240.50 (2.4%)</span>
                </div>
                
                <div className="relative grid grid-cols-2 gap-3 mt-5 z-10">
                    <button className="bg-quazar-primary text-black py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-1 hover:bg-cyan-300 transition-colors">
                        <ArrowUpRight size={16} /> {t('ecosystem.wallet.send')}
                    </button>
                    <button className="bg-white/10 text-white py-2 rounded-lg font-bold text-sm hover:bg-white/20 transition-colors">
                        {t('ecosystem.wallet.receive')}
                    </button>
                </div>
            </div>

            {/* Assets List */}
            <div className="space-y-3 mb-auto">
                <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-400 font-medium">{t('ecosystem.wallet.assets')}</span>
                    <span className="text-quazar-primary cursor-pointer hover:text-cyan-300">{t('ecosystem.wallet.viewAll')}</span>
                </div>
                
                {[
                    { name: 'Bitcoin', symbol: 'BTC', amount: '1.25', value: '$135,000', icon: 'bg-orange-500' },
                    { name: 'Ethereum', symbol: 'ETH', amount: '10.0', value: '$33,100', icon: 'bg-blue-500' },
                    { name: 'Quazar', symbol: 'QZAR', amount: '5000', value: '$5,000', icon: 'bg-quazar-primary text-black' }
                ].map((asset, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${asset.icon} flex items-center justify-center text-[10px] font-bold text-white group-hover:scale-110 transition-transform`}>
                                {asset.symbol[0]}
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">{asset.name}</p>
                                <p className="text-gray-500 text-xs">{asset.amount} {asset.symbol}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white font-bold text-sm">{asset.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* AI Chat Overlay - Static Professional Look with Subtle Animation */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black to-transparent pt-12">
                <div className="bg-quazar-dark/95 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-start gap-3 shadow-lg transform translate-y-0 transition-transform hover:-translate-y-1 duration-300">
                    <div className="relative w-8 h-8 rounded-full bg-quazar-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare size={16} className="text-quazar-primary relative z-10" />
                        <div className="absolute inset-0 rounded-full bg-quazar-primary/20 animate-ping opacity-20"></div>
                    </div>
                    <div>
                        <p className="text-white text-xs font-bold mb-1">{t('ecosystem.wallet.assistant')}</p>
                        <p className="text-gray-300 text-xs leading-relaxed">
                           {t('ecosystem.wallet.assistantMsg')}
                        </p>
                         <div className="flex gap-2 mt-2">
                            <button className="px-2 py-1 bg-quazar-primary/10 text-quazar-primary text-[10px] rounded font-bold border border-quazar-primary/20 hover:bg-quazar-primary/20 transition-colors">{t('ecosystem.wallet.execute')}</button>
                            <button className="px-2 py-1 bg-white/5 text-gray-400 text-[10px] rounded border border-white/5 hover:bg-white/10 transition-colors">{t('ecosystem.wallet.dismiss')}</button>
                         </div>
                    </div>
                </div>
            </div>

          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const DevMockup = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-8">
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Window Header */}
        <div className="h-9 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
           </div>
           <div className="ml-auto px-2 py-0.5 bg-white/5 rounded text-[9px] font-mono text-gray-500">
             {t('ecosystem.devMockup.title')}
           </div>
        </div>

        {/* Main Interface */}
        <div className="p-6">
            
            {/* Icon Animation */}
            <div className="flex justify-center mb-8 relative">
                 {/* Spinning Ring */}
                 <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_8s_linear_infinite]"></div>
                 
                 <div className="w-20 h-20 bg-gradient-to-br from-quazar-primary/10 to-transparent rounded-full flex items-center justify-center border border-quazar-primary/20 z-10 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                    <Code2 className="text-quazar-primary" size={32} />
                 </div>
                 
                 <div className="absolute -bottom-3 bg-[#111] px-3 py-1 rounded border border-quazar-primary/30 text-[9px] font-bold text-quazar-primary tracking-wider z-20">
                    {t('ecosystem.devMockup.initializing')}
                 </div>
            </div>

            {/* Deployment Steps */}
            <div className="space-y-4 font-mono text-xs">
                
                <div>
                    <div className="flex justify-between mb-1.5">
                        <span className="text-gray-400">{t('ecosystem.devMockup.compiling')}</span>
                        <CheckCircle2 size={12} className="text-green-500" />
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full w-full"><div className="h-full bg-green-500 w-full rounded-full"></div></div>
                </div>

                <div>
                    <div className="flex justify-between mb-1.5">
                        <span className="text-gray-400">{t('ecosystem.devMockup.minting')}</span>
                        <CheckCircle2 size={12} className="text-green-500" />
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full w-full"><div className="h-full bg-green-500 w-full rounded-full"></div></div>
                </div>

                <div>
                    <div className="flex justify-between mb-1.5">
                        <span className="text-white animate-pulse">{t('ecosystem.devMockup.provisioning')}</span>
                        <span className="text-quazar-primary">78%</span>
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full w-full relative overflow-hidden">
                         <div className="absolute top-0 left-0 h-full bg-quazar-primary w-[78%]">
                            <div className="absolute inset-0 bg-white/20 animate-[shimmer_1s_infinite]"></div>
                         </div>
                    </div>
                </div>

            </div>

            {/* Json Config View */}
            <div className="mt-6 p-3 bg-black/50 border border-white/5 rounded text-[10px] font-mono leading-relaxed text-gray-500">
                <span className="text-purple-400">const</span> config = {'{'} <br/>
                &nbsp;&nbsp;target: <span className="text-green-400">"quazar-mainnet"</span>,<br/>
                &nbsp;&nbsp;agent_id: <span className="text-blue-400">"ag_892_x1"</span>,<br/>
                &nbsp;&nbsp;permissions: [<span className="text-yellow-400">"TRADE"</span>, <span className="text-yellow-400">"SIGN"</span>]<br/>
                {'}'}
            </div>
        </div>
      </div>
    </div>
  );
};

export const Ecosystem: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<UserType>(UserType.USER);

  const content = {
    [UserType.USER]: {
      icon: Smartphone,
      title: t('ecosystem.content.user.title'),
      description: t('ecosystem.content.user.desc'),
      features: t('ecosystem.content.user.features', { returnObjects: true }) as string[],
      component: <WalletMockup />
    },
    [UserType.MINER]: {
      icon: Cpu,
      title: t('ecosystem.content.miner.title'),
      description: t('ecosystem.content.miner.desc'),
      features: t('ecosystem.content.miner.features', { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2670&auto=format&fit=crop"
    },
    [UserType.DEV]: {
      icon: Code2,
      title: t('ecosystem.content.dev.title'),
      description: t('ecosystem.content.dev.desc'),
      features: t('ecosystem.content.dev.features', { returnObjects: true }) as string[],
      component: <DevMockup />
    }
  };

  const activeContent = content[activeTab];

  return (
    <section id="ecosystem" className="py-24 bg-quazar-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">{t('ecosystem.title')}</h2>
          <p className="text-gray-400 mt-4">{t('ecosystem.subtitle')}</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.values(UserType).map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === type
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'bg-transparent text-gray-500 border-gray-700 hover:border-gray-500 hover:text-gray-300'
              }`}
            >
              {type === UserType.USER && t('ecosystem.tabs.user')}
              {type === UserType.MINER && t('ecosystem.tabs.miner')}
              {type === UserType.DEV && t('ecosystem.tabs.dev')}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 min-h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            
            {/* Text Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-quazar-primary/10 flex items-center justify-center mb-8 text-quazar-primary border border-quazar-primary/20">
                {React.createElement(activeContent.icon, { size: 32 })}
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">{activeContent.title}</h3>
              <p className="text-gray-400 text-lg mb-8">{activeContent.description}</p>
              
              <ul className="space-y-4">
                {Array.isArray(activeContent.features) && activeContent.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                    <CheckCircle2 className="w-5 h-5 text-quazar-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Side */}
            <div className="relative h-full min-h-[400px] bg-black/20 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-quazar-dark via-transparent to-transparent z-10 pointer-events-none"></div>
                
                {'component' in activeContent ? (
                    activeContent.component
                ) : (
                    <img 
                        src={activeContent.image} 
                        alt={activeContent.title} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
