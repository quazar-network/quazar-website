import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { QuazarLogo } from './QuazarLogo';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'Technology', href: '#features' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'AI Agents', href: '#ai-agents' },
    { name: 'Protocol', href: '#protocol' },
    { name: 'Roadmap', href: '#roadmap' },
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
            <span className="text-2xl font-bold tracking-wider text-white font-display">QUAZAR</span>
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
            <a 
              href="#roadmap"
              onClick={(e) => handleNavClick(e, '#roadmap')}
              className="px-5 py-2 text-sm font-bold text-black bg-quazar-primary hover:bg-cyan-300 transition-all rounded-sm uppercase tracking-wider cursor-pointer"
            >
              Launch App
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
        <div className="md:hidden bg-black/95 border-t border-white/10 absolute w-full backdrop-blur-xl">
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
          </div>
        </div>
      )}
    </nav>
  );
};