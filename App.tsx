
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TargetAudience } from './components/TargetAudience';
import { Ecosystem } from './components/Ecosystem';
import { AiAgents } from './components/AiAgents';
import { MiningDemo } from './components/MiningDemo';
import { QuazarProtocol } from './components/QuazarProtocol';
import { Developers } from './components/Developers';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { TermsOfUse } from './components/TermsOfUse';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { CookieNotice } from './components/CookieNotice';
import { CookieConsent } from './components/CookieConsent';

const LandingPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <TargetAudience />
      <Ecosystem />
      <AiAgents />
      <MiningDemo />
      <QuazarProtocol />
      <Developers />
      <Roadmap />
    </main>
  );
};

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('app.metaTitle');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('app.metaDescription'));
    }
  }, [t]);

  return (
    <HashRouter>
      <div className="min-h-screen bg-quazar-black font-sans selection:bg-quazar-primary selection:text-black flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookieNotice />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </HashRouter>
  );
}

export default App;
