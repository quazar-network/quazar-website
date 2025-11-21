import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { QuazarLogo } from './QuazarLogo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' }
  ];

  const currentLang = languages.find(lang => lang.code === (i18n.resolvedLanguage || i18n.language)) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If we are not on home page, go to home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We are on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: t('navbar.technology'), href: '#features' },
    { name: t('navbar.ecosystem'), href: '#ecosystem' },
    { name: t('navbar.aiAgents'), href: '#ai-agents' },
    { name: t('navbar.protocol'), href: '#protocol' },
    { name: t('navbar.roadmap'), href: '#roadmap' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="relative w-10 h-10">
               <QuazarLogo className="w-full h-full object-contain" />
               <div className="absolute inset-0 bg-quazar-primary/30 blur-xl rounded-full -z-10"></div>
            </div>
            <span className="text-2xl font-bold tracking-wider text-white font-display">{t('app.title').toUpperCase()}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold text-gray-300 hover:text-quazar-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}

            {/* Language Switcher Desktop */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-quazar-primary transition-colors uppercase tracking-widest"
              >
                <Globe size={16} />
                <span>{currentLang.code.toUpperCase()}</span>
                <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-4 w-40 bg-[#0a0a0a] border border-white/10 rounded-lg shadow-xl overflow-hidden py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm font-bold transition-colors ${
                        i18n.language === lang.code
                          ? 'text-quazar-primary bg-white/5'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#roadmap"
              onClick={(e) => handleNavClick(e, '#roadmap')}
              className="px-5 py-2 text-sm font-bold text-black bg-quazar-primary hover:bg-cyan-300 transition-all rounded-sm uppercase tracking-wider cursor-pointer"
            >
              {t('navbar.launchApp')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 absolute w-full backdrop-blur-xl h-screen">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/5 rounded-md"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="border-t border-white/10 my-4 pt-4">
              <button
                onClick={() => setIsMobileLangMenuOpen(!isMobileLangMenuOpen)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/5 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>{currentLang.name}</span>
                </div>
                <ChevronDown size={16} className={`transition-transform ${isMobileLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileLangMenuOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                        setIsMobileLangMenuOpen(false);
                      }}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-bold uppercase tracking-wide rounded-md ${
                        i18n.language === lang.code ? 'text-quazar-primary bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};