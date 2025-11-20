import React, { useEffect } from 'react';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-quazar-black pt-32 pb-24 text-gray-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-6">Last Updated: November 2025</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          
          {/* 1. Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              ADA WEALTHTECH LLC provides software as a service, which allows you to utilize several functionalities for managing their cryptocurrency holding across different accounts, including SmartTrade Terminal and automated Trading Bots.
            </p>
            <p>
              This Privacy Policy explains the principles of how ADA WEALTHTECH LLC, registered at Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent & Grenadines, e-mail <a href="mailto:info@quazar.io" className="text-quazar-primary">info@quazar.io</a> (thereafter "QUAZAR", "our", "we" or "us") as the personal data controller collects and processes your ("you") personal data when you visit the website <a href="https://quazar.io" className="text-quazar-primary">https://quazar.io</a> ("Website") and in relation to the provision of the Software.
            </p>
          </section>

          {/* 2. Data We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p className="mb-4">We collect, process, review, distribute, store, and use personal information set out in the paragraph below:</p>
            
            <div className="space-y-6">
                <div>
                    <h3 className="text-white font-bold mb-2">Technical</h3>
                    <p>
                        Upon visiting our Website, we process technical data related to your usage of the Website, including but not limited to IP address, location data (down to city level), access-provider, referring URL, date, time, access tokens, session key, browser type and version, browser language, operating system, amount and state of transferred data. This information can be related to you, therefore, Personal Identification Information can be processed as well. This data may also be processed as anonymized statistical data.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">Cookies</h3>
                    <p>
                        We apply cookies on the Website, for optimizing the Website and its functionalities. The cookies may collect your personal data. To learn more about the cookies we use, please read our Cookie Policy.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">Social Media</h3>
                    <p>
                        In case you interact with us via our Website live chat, e-mails, and sign-up forms, Facebook page, Youtube channel, Twitter page or Telegram or any other official social media account, we process, in addition to Personal Identification Information (limited in case of contacting via social media), also the contents of your message.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-2">When you use the Software</h3>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-400">
                        <li>
                            <strong className="text-gray-300">Personal Identification Information:</strong> Name, e-mail address, 2FA key, IP address, KYC token, language, Google Analytics client ID, Avatar image.
                        </li>
                        <li>
                            <strong className="text-gray-300">Financials and Transactions:</strong> Exchange Account username, API key, API secret, passphrase, transaction data (date/time/amount of transaction), transaction request/response, Referral status, billing information (country, phone number, address, city, postal code; in case of an entity: business name, registry code).
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-6">
                <p className="mb-2 font-bold text-gray-300">The personal data we process is collected from one of the following sources:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    <li>The data is disclosed by you directly to us;</li>
                    <li>We receive the data from your Exchange Account provider by you connecting your Exchange Accounts to the Client Account;</li>
                    <li>We receive the data from the social media service provider when you are registering or contacting us via your social media account;</li>
                    <li>We receive the data from the payment service provider when you execute the User Agreement and pay for the Subscription;</li>
                    <li>We receive Technical Data automatically from your browser, our servers, and systems.</li>
                </ul>
            </div>
          </section>

          {/* 3. Purpose */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. What do we use your personal data for</h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="mb-4">We have set out below the reasons why we process your personal data:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Client authentication, use of the software and its functionalities</li>
                    <li>Communicating via devices, social media, and apps (for example, mobile app, e-mail, Website, Telegram Bot)</li>
                    <li>Direct marketing campaigns - Client marketing campaigns in relation to the Software, its functionalities and products</li>
                    <li>Processing data for predictive analytics and insights, improvement and development of the Software</li>
                    <li>Diagnostics and resolution of the technical issues related to the Software and the Website</li>
                    <li>Storing information containing personal data in backup systems</li>
                    <li>Data disclosures to potential acquirers of ADA WEALTHTECH LLC business, including legal advisors, auditing service providers in case of a merger, acquisition or selling the whole or part of our business</li>
                    <li>Data disclosure to our service providers</li>
                    <li>Mandatory disclosures to law enforcement and data protection authorities</li>
                    <li>Client identity verification (KYC) for recovery</li>
                    <li>Client's transaction history</li>
                    <li>Responding to your enquiries and requests submitted via the website, sign-up forms, live chat or e-mail or any social media platforms</li>
                    <li>Client invoicing for the User Agreement</li>
                    <li>Transfer of funds from a payment service provider to your Client Account and making out payments upon your withdrawal request via payment service provider</li>
                </ul>
            </div>
          </section>

          {/* 4. Sharing Data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Personal Data</h2>
            <p className="mb-4">
                Any data you provide will not be publicly displayed or shared with other Website visitors or clients. Certain employees of ADA WEALTHTECH LLC have access to personal data to the extent necessary for the performance of their work duties.
            </p>
            <p className="mb-4">
                We use third-party processors and separate data controllers to help provide our service. They will have access to your personal data as reasonably necessary to perform these tasks on our behalf and are obligated not to disclose or use it for other purposes.
            </p>
            
            <h3 className="text-white font-bold mt-6 mb-2">With Affiliates and Subsidiaries</h3>
            <p className="mb-4">
                For purposes limited to and consistent with this Privacy Notice, we share personal information with Affiliates and Subsidiaries. We also share non-personally identifiable information, such as anonymized or aggregated information, with suppliers for purposes such as analysis, identifying trends in the areas of our products, and helping research and develop new QUAZAR Services.
            </p>

            <h3 className="text-white font-bold mt-6 mb-2">For Advertising and Marketing</h3>
            <p className="mb-4">
                We share your information with our third-party company partners to prepare and deliver advertising and marketing content, provide content services, and enable them to provide you with more personalized ads and study the effectiveness of our campaigns. QUAZAR does not share your personal information with non-affiliated third parties for their own advertising or marketing use without your permission.
            </p>
          </section>

          {/* 5. Security */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Ensuring the Security of Personal Data</h2>
            <p>
                We have taken necessary technical and organizational security measures to protect your personal data against accidental or unlawful destruction, loss, or alteration and against unauthorized disclosure, abuse, or other processing in violation of applicable law. We also encourage you to take measures to ensure the safety of your personal data. In particular, we advise you not to share your personal data with us or any of our partners via any public forums or other public channels, unless you acknowledge and accept that relevant data will be publicly accessible.
            </p>
          </section>

          {/* 6. Retention */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Retention and Deletion of Personal Data</h2>
            <p className="mb-4">
                Your personal data shall be stored insofar as reasonably necessary to attain the objectives stated in Section 3 above, or until the legal obligation stipulates that we do so.
            </p>
            <p className="mb-4">
                In case you are a Client, as a general rule, we will retain all your data for 7 days after the termination of the Client Agreement in a manner that would allow you to re-activate the Client Account. Otherwise, please see the following non-exhaustive summary on storing your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>For accounting purposes, we retain Financial Data, Transaction Data, and Personal Identification Information connected to it for a period of 7 years from the end of the financial year when the respective business transaction took place;</li>
                <li>Data connected to the Client Agreement or the Purchase Agreement is retained for the whole period when the respective agreement is in force and at least 3 years from the moment of termination of the respective agreement.</li>
                <li>Technical Data will be retained for 30 days as of the collection of such data;</li>
                <li>Communication Data will be retained for a period of 3 years from the moment the respective communication flow has been closed.</li>
            </ul>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Preferences</h2>
            <p className="mb-4">Under data protection law, you have rights including:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li><strong>Right to be informed and to access:</strong> You may get information regarding your personal data processed by us.</li>
                <li><strong>Right to data portability:</strong> You have the right to receive your personal data from us in a structured, commonly used, and machine-readable format.</li>
                <li><strong>Right to erasure:</strong> You have the right to have the personal data we process about you erased from our systems if the personal data are no longer necessary for the related purposes.</li>
                <li><strong>Right to object and restrict:</strong> You have the right to object to the processing of your personal data and restrict it in certain cases.</li>
                <li><strong>Right to rectification:</strong> You have the right to make corrections to your personal data.</li>
                <li><strong>Right to withdraw consent:</strong> When you have given us consent to process your personal data, you may withdraw your consent at any time.</li>
            </ul>
          </section>

          {/* 8. Other Info */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Other Important Information</h2>
            <p className="mb-4">
                <strong>Newsletter and notifications:</strong> With your explicit consent, you may be subject to direct marketing campaigns, we may send you our newsletter or provide you with notifications. You may opt-out of the direct marketing campaigns, newsletters, and notifications on your account settings.
            </p>
            <p className="mb-4">
                <strong>Dispute resolution:</strong> If you have questions, please feel free to contact <a href="mailto:info@quazar.io" className="text-quazar-primary">info@quazar.io</a>. Disputes relating to the processing of personal data are settled through our customer support.
            </p>
            <p className="mb-4">
                <strong>Age Limitations:</strong> We do not knowingly collect any information from individuals under 18 years of age. If we discover a user of being younger than 18 years old we will require the user to close their account and we will take steps to delete any collected information as soon as possible.
            </p>
          </section>

          {/* Contact Us */}
          <section className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">How to Contact Us</h2>
            <div className="bg-[#111] p-8 rounded-xl border border-white/10 font-mono text-sm text-gray-400 inline-block min-w-[300px]">
                <p className="text-white font-bold mb-4 text-lg">ADA WEALTHTECH LLC</p>
                <div className="space-y-1">
                    <p>Mailing address:</p>
                    <p>Suite 305, Griffith Corporate Centre</p>
                    <p>Beachmont, Kingstown</p>
                    <p>St. Vincent & Grenadines</p>
                    <p className="mt-4">Email: <a href="mailto:info@quazar.io" className="text-quazar-primary hover:underline">info@quazar.io</a></p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};