
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet, useLocation } from 'react-router-dom';
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

const Layout: React.FC = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['en', 'ru', 'es', 'de', 'fr', 'pt', 'zh', 'ja', 'ko'].includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }
  }, [lang, i18n]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CookieConsent />
    </>
  );
};

const RootRedirect: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  // If we are here, it means the path is "/" or doesn't match :lang
  // Check if we have a saved language or detect one
  let lang = i18n.language;
  
  // Basic validation to ensure we don't redirect to garbage
  if (!['en', 'ru', 'es', 'de', 'fr', 'pt', 'zh', 'ja', 'ko'].includes(lang)) {
    lang = 'en';
  }

  return <Navigate to={`/${lang}${location.search}${location.hash}`} replace />;
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
    <BrowserRouter>
      <div className="min-h-screen bg-quazar-black font-sans selection:bg-quazar-primary selection:text-black flex flex-col">
        <Routes>
          <Route path="/:lang" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="terms" element={<TermsOfUse />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="cookies" element={<CookieNotice />} />
          </Route>
          <Route path="/" element={<RootRedirect />} />
          {/* Catch all for unknown routes, redirect to root (which redirects to default lang) */}
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
