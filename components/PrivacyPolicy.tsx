import React, { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-quazar-black pt-32 pb-24 text-gray-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('privacyPolicy.title')}</h1>
          <p className="text-gray-400 mb-6">{t('privacyPolicy.lastUpdated')}</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacyPolicy.sections.intro.title')}</h2>
            <p className="mb-4">
              {t('privacyPolicy.sections.intro.p1')}
            </p>
            <p>
              <Trans 
                i18nKey="privacyPolicy.sections.intro.p2" 
                components={{ 
                    1: <a href="mailto:info@quazar.io" className="text-quazar-primary" />,
                    2: <a href="https://quazar.io" className="text-quazar-primary" />
                }} 
              />
            </p>
          </section>

          {/* 2. Data We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacyPolicy.sections.dataCollect.title')}</h2>
            <p className="mb-4">{t('privacyPolicy.sections.dataCollect.intro')}</p>
            
            <div className="space-y-6">
                <div>
                    <h3 className="text-white font-bold mb-2">{t('privacyPolicy.sections.dataCollect.technical.title')}</h3>
                    <p>
                        {t('privacyPolicy.sections.dataCollect.technical.desc')}
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">{t('privacyPolicy.sections.dataCollect.cookies.title')}</h3>
                    <p>
                        {t('privacyPolicy.sections.dataCollect.cookies.desc')}
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">{t('privacyPolicy.sections.dataCollect.social.title')}</h3>
                    <p>
                        {t('privacyPolicy.sections.dataCollect.social.desc')}
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">{t('privacyPolicy.sections.dataCollect.software.title')}</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400">
                        {(t('privacyPolicy.sections.dataCollect.software.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>
                                <Trans i18nKey={`privacyPolicy.sections.dataCollect.software.items.${i}`} components={{ 1: <strong className="text-gray-300" /> }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="mt-6">
                <p className="mb-2 font-bold text-gray-300">{t('privacyPolicy.sections.dataCollect.sources.title')}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    {(t('privacyPolicy.sections.dataCollect.sources.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
          </section>

          {/* 3. Purpose */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacyPolicy.sections.purpose.title')}</h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="mb-4">{t('privacyPolicy.sections.purpose.desc')}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    {(t('privacyPolicy.sections.purpose.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
          </section>

          {/* 4. Sharing Data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacyPolicy.sections.sharing.title')}</h2>
            <p className="mb-4">
                {t('privacyPolicy.sections.sharing.p1')}
            </p>
            <p className="mb-4">
                {t('privacyPolicy.sections.sharing.p2')}
            </p>
            
            <h3 className="text-white font-bold mt-6 mb-2">{t('privacyPolicy.sections.sharing.affiliates.title')}</h3>
            <p className="mb-4">
                {t('privacyPolicy.sections.sharing.affiliates.desc')}
            </p>

            <h3 className="text-white font-bold mt-6 mb-2">{t('privacyPolicy.sections.sharing.advertising.title')}</h3>
            <p className="mb-4">
                {t('privacyPolicy.sections.sharing.advertising.desc')}
            </p>
          </section>

          {/* 5. Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacyPolicy.sections.security.title')}</h2>
            <p>
                {t('privacyPolicy.sections.security.desc')}
            </p>
          </section>

          {/* 6. Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacyPolicy.sections.retention.title')}</h2>
            <p className="mb-4">
                {t('privacyPolicy.sections.retention.p1')}
            </p>
            <p className="mb-4">
                {t('privacyPolicy.sections.retention.p2')}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                {(t('privacyPolicy.sections.retention.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacyPolicy.sections.rights.title')}</h2>
            <p className="mb-4">{t('privacyPolicy.sections.rights.intro')}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                {(t('privacyPolicy.sections.rights.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>
                        <Trans i18nKey={`privacyPolicy.sections.rights.items.${i}`} components={{ 1: <strong /> }} />
                    </li>
                ))}
            </ul>
          </section>

          {/* 8. Other Info */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('privacyPolicy.sections.other.title')}</h2>
            <p className="mb-4">
                <Trans i18nKey="privacyPolicy.sections.other.newsletter" components={{ 1: <strong /> }} />
            </p>
            <p className="mb-4">
                <Trans i18nKey="privacyPolicy.sections.other.dispute" components={{ 1: <strong />, 2: <a href="mailto:info@quazar.io" className="text-quazar-primary" /> }} />
            </p>
            <p className="mb-4">
                <Trans i18nKey="privacyPolicy.sections.other.age" components={{ 1: <strong /> }} />
            </p>
          </section>

          {/* Contact Us */}
          <section className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">{t('privacyPolicy.sections.contact.title')}</h2>
            <div className="bg-[#111] p-8 rounded-xl border border-white/10 font-mono text-sm text-gray-400 inline-block min-w-[300px]">
                <p className="text-white font-bold mb-4 text-lg">{t('privacyPolicy.sections.contact.company.name')}</p>
                <div className="space-y-1">
                    <p>{t('privacyPolicy.sections.contact.company.mailing')}</p>
                    {(t('privacyPolicy.sections.contact.company.details', { returnObjects: true }) as string[]).map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                    <p className="mt-4">
                        <Trans i18nKey="privacyPolicy.sections.contact.company.email" components={{ 1: <a href="mailto:info@quazar.io" className="text-quazar-primary hover:underline" /> }} />
                    </p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};