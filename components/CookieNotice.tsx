
import React, { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export const CookieNotice: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-quazar-black pt-32 pb-24 text-gray-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('cookieNotice.title')}</h1>
          <p className="text-gray-400 mb-6">{t('cookieNotice.lastUpdated')}</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          
          {/* Intro */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.intro.title')}</h2>
            <p className="mb-4">
              <Trans 
                i18nKey="cookieNotice.sections.intro.p1" 
                components={{ 
                    1: <a href="https://quazar.io" className="text-quazar-primary" />
                }} 
              />
            </p>
            <p className="mb-4">
              {t('cookieNotice.sections.intro.p2')}
            </p>
            <p>
              {t('cookieNotice.sections.intro.p3')}
            </p>
          </section>

          {/* Use of Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.use.title')}</h2>
            <p className="mb-4">
                {t('cookieNotice.sections.use.p1')}
            </p>
            <p>
                {t('cookieNotice.sections.use.p2')}
            </p>
          </section>

          {/* What are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.whatAre.title')}</h2>
            <p className="mb-4">
                {t('cookieNotice.sections.whatAre.p1')}
            </p>
            <p className="mb-4 text-white font-bold">{t('cookieNotice.sections.whatAre.intro')}</p>
            
            <div className="space-y-6">
                <div>
                    <h3 className="text-white font-bold">{t('cookieNotice.sections.whatAre.types.essential.title')}</h3>
                    <p className="text-gray-400">
                        {t('cookieNotice.sections.whatAre.types.essential.desc')}
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold">{t('cookieNotice.sections.whatAre.types.analytics.title')}</h3>
                    <p className="text-gray-400">
                        {t('cookieNotice.sections.whatAre.types.analytics.desc')}
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold">{t('cookieNotice.sections.whatAre.types.functionality.title')}</h3>
                    <p className="text-gray-400">
                        {t('cookieNotice.sections.whatAre.types.functionality.desc')}
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold">{t('cookieNotice.sections.whatAre.types.advertising.title')}</h3>
                    <p className="text-gray-400">
                        {t('cookieNotice.sections.whatAre.types.advertising.desc')}
                    </p>
                </div>
            </div>
          </section>

          {/* How We Use Info */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.collectUse.title')}</h2>
            <p className="mb-4">{t('cookieNotice.sections.collectUse.intro')}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                {(t('cookieNotice.sections.collectUse.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <p className="mt-4">
                {t('cookieNotice.sections.collectUse.p2')}
            </p>
          </section>

          {/* Duration */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.duration.title')}</h2>
            <p>
                {t('cookieNotice.sections.duration.desc')}
            </p>
          </section>

          {/* Third Party */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.whoPuts.title')}</h2>
            <p className="mb-4">
                {t('cookieNotice.sections.whoPuts.p1')}
            </p>
            <p>
                {t('cookieNotice.sections.whoPuts.p2')}
            </p>
          </section>

          {/* Advertising */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.mobileAds.title')}</h2>
            <p className="mb-4">
                {t('cookieNotice.sections.mobileAds.p1')}
            </p>
            <p>
                {t('cookieNotice.sections.mobileAds.p2')}
            </p>
          </section>

          {/* Management */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.manage.title')}</h2>
            <p>
                {t('cookieNotice.sections.manage.desc')}
            </p>
          </section>

          {/* Flash & Others */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('cookieNotice.sections.flash.title')}</h2>
            <p className="mb-4">
                <Trans i18nKey="cookieNotice.sections.flash.flash" components={{ 1: <strong /> }} />
            </p>
            <p className="mb-4">
                <Trans i18nKey="cookieNotice.sections.flash.tracking" components={{ 1: <strong /> }} />
            </p>
            <p>
                <Trans i18nKey="cookieNotice.sections.flash.dnt" components={{ 1: <strong /> }} />
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">{t('cookieNotice.sections.contact.title')}</h2>
            <p className="mb-6">
                {t('cookieNotice.sections.contact.desc')}
            </p>
            <div className="bg-[#111] p-8 rounded-xl border border-white/10 font-mono text-sm text-gray-400 inline-block min-w-[300px]">
                <p className="text-white font-bold mb-4 text-lg">{t('cookieNotice.sections.contact.company.name')}</p>
                <div className="space-y-1">
                    <p>{t('cookieNotice.sections.contact.company.mailing')}</p>
                    {(t('cookieNotice.sections.contact.company.details', { returnObjects: true }) as string[]).map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                    <p className="mt-4">
                        <Trans i18nKey="cookieNotice.sections.contact.company.email" components={{ 1: <a href="mailto:info@quazar.io" className="text-quazar-primary hover:underline" /> }} />
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
