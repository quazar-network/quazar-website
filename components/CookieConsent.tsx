
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('quazar_cookie_consent');
    
    // Only show if no consent is found in storage
    if (!consent) {
      // Small delay to allow animation entrance
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('quazar_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // "Declining" usually means only essential cookies are kept
    localStorage.setItem('quazar_cookie_consent', 'necessary_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-quazar-primary/20 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-quazar-primary/10 rounded-full border border-quazar-primary/20 flex-shrink-0">
            <Cookie className="text-quazar-primary" size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">{t('cookieConsent.title')}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              <Trans 
                i18nKey="cookieConsent.desc" 
                components={{ 
                  1: <Link to="/cookies" className="text-quazar-primary hover:underline" />, 
                  2: <Link to="/privacy" className="text-quazar-primary hover:underline" /> 
                }} 
              />
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[280px]">
          <button 
            onClick={handleDecline}
            className="px-6 py-3 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors w-full sm:w-auto whitespace-nowrap"
          >
            {t('cookieConsent.necessary')}
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-3 rounded-lg bg-quazar-primary text-black font-bold text-sm hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.2)] w-full sm:w-auto whitespace-nowrap"
          >
            {t('cookieConsent.accept')}
          </button>
        </div>

      </div>
    </div>
  );
};
