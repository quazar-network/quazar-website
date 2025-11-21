
import React from 'react';
import { Github, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we are on a different page, standard routing handles it via the Link component in Navbar
    // But for footer if we are on Terms page, we might want to go home. 
    // For simplicity in Footer, we will use React Router Links for internal pages.
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold tracking-wider text-white font-display">{t('app.title').toUpperCase()}</span>
            <p className="text-gray-500 text-sm mt-2">{t('footer.copyright')}</p>
          </div>

          <div className="flex space-x-8">
            <a 
              href="https://x.com/quazar_io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-quazar-primary transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href="https://github.com/quazar_network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-quazar-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://discord.gg/CGqDQ6fb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-quazar-primary transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.5151.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.9035 19.9035 0 005.9937 3.0314.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057 13.1141 13.1141 0 01-1.8718-.892.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7713 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 19.839 19.839 0 006.0028-3.0314.077.077 0 00.0322-.0543c.4928-5.1777-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
             <a 
              href="https://t.me/quazar_io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-quazar-primary transition-colors"
            >
              <Send size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-600">
            <Link to={`/${i18n.language}/privacy`} className="hover:text-gray-400">{t('footer.privacy')}</Link>
            <Link to={`/${i18n.language}/terms`} className="hover:text-gray-400">{t('footer.terms')}</Link>
            <Link to={`/${i18n.language}/cookies`} className="hover:text-gray-400">{t('footer.cookies')}</Link>
        </div>
      </div>
    </footer>
  );
};
