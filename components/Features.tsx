
import React from 'react';
import { Wallet, BrainCircuit, ShieldCheck, Clock } from 'lucide-react';
import { Feature } from '../types';
import { useTranslation } from 'react-i18next';

export const Features: React.FC = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      title: t('features.items.abstractAccounts.title'),
      description: t('features.items.abstractAccounts.desc'),
      icon: Wallet,
    },
    {
      title: t('features.items.autonomousContracts.title'),
      description: t('features.items.autonomousContracts.desc'),
      icon: Clock,
    },
    {
      title: t('features.items.dataPrivacy.title'),
      description: t('features.items.dataPrivacy.desc'),
      icon: ShieldCheck,
    },
    {
      title: t('features.items.aiTraining.title'),
      description: t('features.items.aiTraining.desc'),
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-quazar-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('features.title')}</h2>
          <div className="h-1 w-20 bg-quazar-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl glass-panel hover:border-quazar-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-quazar-primary/10 rounded-full blur-3xl group-hover:bg-quazar-primary/20 transition-all"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0 p-4 bg-white/5 rounded-lg text-quazar-primary group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  <feature.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-quazar-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
