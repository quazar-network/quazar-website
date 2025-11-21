import React, { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export const TermsOfUse: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-quazar-black pt-32 pb-24 text-gray-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('termsOfUse.title')}</h1>
          <p className="text-gray-400 mb-6">{t('termsOfUse.lastUpdated')}</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          
          {/* Introduction */}
          <section>
            <p className="mb-4">
              <Trans i18nKey="termsOfUse.intro" components={{ 1: <a href="https://quazar.io" className="text-quazar-primary hover:underline" /> }} />
            </p>
          </section>

          {/* Scope */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.scope.title')}</h2>
            <p>
              {t('termsOfUse.sections.scope.p1')}
            </p>
            <p className="mt-4">
              {t('termsOfUse.sections.scope.p2')}
            </p>
          </section>

          {/* Security & Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.security.title')}</h2>
            <ul className="space-y-4">
                {(t('termsOfUse.sections.security.items', { returnObjects: true }) as string[]).map((item, i) => (
                   <li key={i}>
                      <Trans i18nKey={`termsOfUse.sections.security.items.${i}`} components={{ 1: <strong className="text-white block mb-1" /> }} />
                   </li>
                ))}
            </ul>
          </section>

          {/* Specific Decentralized Context */}
          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.decentralized.title')}</h2>
            <p className="mb-4">
              {t('termsOfUse.sections.decentralized.intro')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {(t('termsOfUse.sections.decentralized.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
          </section>

          {/* Use Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.useTerms.title')}</h2>
            <p className="mb-4">
                <Trans i18nKey="termsOfUse.sections.useTerms.noLicense" components={{ 1: <strong /> }} />
            </p>
            <p className="mb-4 font-bold text-white">{t('termsOfUse.sections.useTerms.noUnlawful')}</p>
            <p className="mb-4">{t('termsOfUse.sections.useTerms.noUnlawfulDesc')}</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-400">
                {(t('termsOfUse.sections.useTerms.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.copyright.title')}</h2>
            <p>
              {t('termsOfUse.sections.copyright.desc')}
            </p>
          </section>

          {/* Notices and Disclosures (CAPS) */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.notices.title')}</h2>
            
            <div className="mb-8">
                <h3 className="text-white font-bold mb-2 uppercase">{t('termsOfUse.sections.notices.warranty.title')}</h3>
                <p className="text-xs md:text-sm text-gray-400 uppercase leading-relaxed">
                {t('termsOfUse.sections.notices.warranty.desc')}
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 uppercase">{t('termsOfUse.sections.notices.liability.title')}</h3>
                <p className="text-xs md:text-sm text-gray-400 uppercase leading-relaxed">
                {t('termsOfUse.sections.notices.liability.desc')}
                </p>
            </div>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.indemnification.title')}</h2>
            <p>
              {t('termsOfUse.sections.indemnification.desc')}
            </p>
          </section>

          {/* Accuracy & Forward Looking */}
          <section>
             <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.accuracy.title')}</h2>
             <p className="mb-4">
                {t('termsOfUse.sections.accuracy.p1')}
             </p>
             <p className="mb-4">
                <Trans i18nKey="termsOfUse.sections.accuracy.changes" components={{ 1: <strong /> }} />
             </p>
             <p>
                <Trans i18nKey="termsOfUse.sections.accuracy.forward" components={{ 1: <strong /> }} />
             </p>
          </section>

          {/* Content Related Notices */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.contentNotices.title')}</h2>
            <p className="mb-4">
                <Trans i18nKey="termsOfUse.sections.contentNotices.ownership" components={{ 1: <strong /> }} />
            </p>
            <p className="mb-4">
                <Trans i18nKey="termsOfUse.sections.contentNotices.translations" components={{ 1: <strong /> }} />
            </p>
            <p>
                <Trans i18nKey="termsOfUse.sections.contentNotices.thirdParty" components={{ 1: <strong /> }} />
            </p>
          </section>

          {/* User Content Submissions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.userContent.title')}</h2>
            <div className="space-y-4">
                <p>
                    <Trans i18nKey="termsOfUse.sections.userContent.definition" components={{ 1: <strong /> }} />
                </p>
                <p>
                    <Trans i18nKey="termsOfUse.sections.userContent.nonEndorsement" components={{ 1: <strong /> }} />
                </p>
                <p>
                    <Trans i18nKey="termsOfUse.sections.userContent.ownership" components={{ 1: <strong /> }} />
                </p>
                <p>
                    <Trans i18nKey="termsOfUse.sections.userContent.license" components={{ 1: <strong /> }} />
                </p>
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.links.title')}</h2>
            <p>
                {t('termsOfUse.sections.links.desc')}
            </p>
          </section>

           {/* Unsolicited Ideas */}
           <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.unsolicited.title')}</h2>
            <p className="uppercase text-sm">
                {t('termsOfUse.sections.unsolicited.desc')}
            </p>
          </section>

          {/* General / Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('termsOfUse.sections.general.title')}</h2>
            <p className="mb-4">
                {t('termsOfUse.sections.general.p1')}
            </p>
            <p className="mb-4">
                {t('termsOfUse.sections.general.p2')}
            </p>
            <p>
                {t('termsOfUse.sections.general.p3')}
            </p>
          </section>

          {/* Contact Us */}
          <section className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">{t('termsOfUse.sections.contact.title')}</h2>
            <p className="mb-8">
              <Trans i18nKey="termsOfUse.sections.contact.desc" components={{ 1: <a href="mailto:info@quazar.io" className="text-quazar-primary hover:underline font-bold" /> }} />
            </p>
            
            <div className="bg-[#111] p-8 rounded-xl border border-white/10 font-mono text-sm text-gray-400 inline-block min-w-[300px]">
                <p className="text-white font-bold mb-4 text-lg">{t('termsOfUse.sections.contact.company.name')}</p>
                <div className="space-y-1">
                    {(t('termsOfUse.sections.contact.company.details', { returnObjects: true }) as string[]).map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};