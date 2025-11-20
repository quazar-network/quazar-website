
import React, { useEffect } from 'react';

export const CookieNotice: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-quazar-black pt-32 pb-24 text-gray-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Notice</h1>
          <p className="text-gray-400 mb-6">Last Updated: November 2025</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          
          {/* Intro */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">QUAZAR COOKIE NOTICE</h2>
            <p className="mb-4">
              ADA WEALTHTECH LLC controls and operates <a href="https://quazar.io" className="text-quazar-primary">https://quazar.io</a> website.
            </p>
            <p className="mb-4">
              This Notice updates and supersedes previous versions. We may change this Notice at any time. The "LAST UPDATED" section at the top of this page lists when this Notice was last revised. Any changes to this Notice will become effective when we make the revised Notice available on or through the Sites.
            </p>
            <p>
              Our Sites (as defined below) use Cookies and Similar Technologies to ensure that we give our visitors the best possible experience by providing you personalized information, remembering your marketing and product preferences, and helping you obtain the right information. You can find out more about Cookies and Similar Technologies, how we use them, and how to control them below.
            </p>
          </section>

          {/* Use of Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Use of Cookies and Similar Technologies</h2>
            <p className="mb-4">
                This Notice describes how ADA WEALTHTECH LLC, our partners, and our other third parties use Cookies and Similar Technologies (such as pixel tags, web beacons, clear GIFs, JavaScript, and local storage). We will refer to these Cookies and Similar Technologies simply as "Cookies" for the rest of this Notice. We will also describe what options you may have regarding those Cookies.
            </p>
            <p>
                This Notice covers ADA WEALTHTECH LLC use of Cookies that may be used in connection with the websites (including mobile websites and apps) owned and controlled by ADA WEALTHTECH LLC (the "Sites"). In some cases, we may use Cookies to collect information that is personally identifiable, or that can become personally identifiable if we combine it with other information. In such cases, such Privacy Notice will apply in addition to this ADA WEALTHTECH LLC Cookie Notice.
            </p>
          </section>

          {/* What are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What are Cookies?</h2>
            <p className="mb-4">
                Cookies are small files—usually consisting of letters and numbers—placed on your computer, tablet, phone, or similar device, when you use that device to visit a website. Cookies are widely used by website owners to make their websites operate, work more efficiently, and provide analytic information.
            </p>
            <p className="mb-4 text-white font-bold">These are the different types of Cookies we and our service providers may use on our Sites:</p>
            
            <div className="space-y-6">
                <div>
                    <h3 className="text-white font-bold">Essential Cookies</h3>
                    <p className="text-gray-400">
                        These Cookies are required for the operation of our Sites (for example, to enable you to log into secure areas of our website or use a shopping cart). These cookies enable you to move around the Sites and use their features. Disabling these Cookies will encumber the Site's performance and may make the features and services unavailable.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold">Analytics and Customization Cookies</h3>
                    <p className="text-gray-400">
                        These cookies allow us to analyze activities on our Sites and on other sites where we post content in order to improve and optimize the way our Sites work. For example, we may use these types of Cookies to ensure that visitors can easily find the information they are looking for on our websites. One way we do this is to recognize and count the number of visitors and see how they move around our website when they are using it. Analytics cookies also help us measure the performance of our advertising campaigns in order to help us improve our advertising campaigns and to optimize our Sites' content for those who engage with our advertising.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold">Functionality Cookies</h3>
                    <p className="text-gray-400">
                        These Cookies are used to recognize you when you return to our Sites. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-bold">Advertising Cookies</h3>
                    <p className="text-gray-400">
                        These Cookies record your online activities, including your visits to our Sites, the pages you have visited, and the links and advertisements you have clicked. One purpose of this is to help make the content displayed on our Sites more relevant to you. Another purpose is to allow us and our service providers to deliver advertisements or other communications to you that are designed to be more relevant to your apparent interests. When we and our service providers do so, this also involves partners such as publishers, data management platforms, and demand-side platforms that help to manage the data. For example, if you look at one page on one of our Sites, we may cause an advertisement to be delivered to you, on our Sites or on other sites, for products referenced on that page or for similar products and services. We and our service providers and partners may also append other data to information collected by these Cookies, including information obtained from third parties, and share this information with third parties for the purpose of delivering ads to you.
                    </p>
                </div>
            </div>
          </section>

          {/* How We Use Info */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How does ADA WEALTHTECH LLC Collect and Use Other Information?</h2>
            <p className="mb-4">We and our service providers may use Cookies for a variety of purposes, including to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Help us and third parties obtain information about your visits to the Sites;</li>
                <li>Process your orders;</li>
                <li>Analyze your visiting patterns to improve our Sites;</li>
                <li>Deliver advertising, communications, and content from us and third parties, on our Sites and those of third parties, specific to your interests;</li>
                <li>Remember your language and other preferences;</li>
                <li>Help you obtain the information you are looking for;</li>
                <li>Provide a safe and secure service for online transactions;</li>
                <li>Measure how many people use our Sites, and how they use them, to keep our Sites running efficiently and to better understand our Sites' audiences.</li>
            </ul>
            <p className="mt-4">
                If you register on one of our Sites or otherwise provide us with your personal information, we may associate that information with other information we collect from or about you or that you provide, information regarding your use of our Sites, or information we receive from or about you from third parties. We will use this combined data for marketing and analytics purposes.
            </p>
          </section>

          {/* Duration */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How Long do Cookies Stay on My Device?</h2>
            <p>
                Some Cookies operate from the time you visit QUAZAR service to the end of that particular web browsing session. These Cookies expire and are automatically deleted when you close your Internet browser. These Cookies are called "session" Cookies. Some Cookies will stay on your device between browsing sessions—they do not expire when you close your browser. These Cookies are called "persistent" Cookies. The length of time a persistent Cookie stays on your device varies from Cookie to Cookie. We and others use persistent Cookies for a variety of purposes, such as to store your preferences so that they are available for the next visit, and to keep a more accurate account of how often you visit our Sites, how often you return, how your use of the Sites may vary over time and the effectiveness of advertising efforts.
            </p>
          </section>

          {/* Third Party */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Who Puts the Cookies on My Device?</h2>
            <p className="mb-4">
                Cookies may be placed on your device by ADA WEALTHTECH LLC as the Site operator. These Cookies are called "first party" Cookies. Some Cookies may be placed on your device by a party other than ADA WEALTHTECH LLC. These Cookies are called "third party" Cookies. For example, an ADA WEALTHTECH LLC partner may place a third-party Cookie to enable online chat services.
            </p>
            <p>
                Cookies may also be used to allow us and third parties to know when you visit our Sites, and to understand how you interact with e-mails, advertisements, or other content. Through Cookies, aggregate and other information not identifying individual users (such as your operating system, browser version, and the URL you came from, including e-mails and advertisements) may be obtained and used to enhance your experience and understand traffic patterns. This technology counts the number of users who visit a particular service from specific banner advertisements outside the QUAZAR Site or who clicked on links or graphics included in e-mail newsletters received from ADA WEALTHTECH LLC. It is also used as a tool to compile aggregated statistics about how QUAZAR Sites are used, to perform analytics and help us to optimize our Sites, and to help serve you advertising based on your interests, as described in further detail below.
            </p>
          </section>

          {/* Advertising */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How does ADA WEALTHTECH LLC Use Online and Mobile Advertising?</h2>
            <p className="mb-4">
                We and third parties, including technology partners, and service providers engage in interest-based advertising to deliver advertisements and personalized content that we and other advertisers believe will be of interest to you. To the extent third-party vendors are using Cookies to perform these services for ADA WEALTHTECH LLC or others, ADA WEALTHTECH LLC does not control the use of this technology or the resulting information and is not responsible for any actions or policies of such third parties.
            </p>
            <p>
                Ads may be delivered to you based on your online or mobile behavior (on ADA WEALTHTECH LLC Sites and non-ADA WEALTHTECH LLC sites), your search activity, your responses to one of our advertisements or e-mails, the pages you visit, your general geographic location, or other information. These ads may appear on our Sites or on third-party websites. The technology partners with whom we work to help us conduct interest-based advertising may be members of self-regulatory associations such as the Network Advertising Initiative (NAI) and the Digital Advertising Alliance (DAA). For Sites directed at persons located in the European Union, we may work with technology partners who are members of the European Digital Advertising Alliance (eDAA). You may also see advertisements for third parties on ADA WEALTHTECH LLC Sites or other websites or properties, based on your visits to, and activities on, ADA WEALTHTECH LLC Sites and other sites.
            </p>
          </section>

          {/* Management */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How do I Manage Cookies?</h2>
            <p>
                You can decide whether or not to accept Cookies. One way you can do this is through your Internet browser's settings. Most Internet browsers allow some control of most Cookies through the browser settings (Please note that if you use your browser settings to block all Cookies you may not be able to access parts of our website.). You can also use a browser plug-in such as Ghostery* from Cliqz International GmbH. (A browser plug-in is a piece of software that adds extra capabilities to your browser—for example, to play video or scan for viruses.). To find out more about interest-based advertising and your choices, visit these sites: Digital Advertising Alliance, the Network Advertising Initiative, and the Interactive Advertising Bureau (IAB) Europe.
            </p>
          </section>

          {/* Flash & Others */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Flash Cookies and Other Technologies</h2>
            <p className="mb-4">
                <strong>Flash Cookies:</strong> Our Web sites may also use so-called "Flash Cookies" (also known as Local Shared Objects) to remember settings, and preferences, to provide special content, such as video and animation playback, and for other site operations. If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel.
            </p>
            <p className="mb-4">
                <strong>Other tracking technologies:</strong> Cookies are not the only way to recognize or track visitors to a website. ADA WEALTHTECH LLC may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our websites or opened an e-mail that we have sent them. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.
            </p>
            <p>
                <strong>Do Not Track:</strong> There is currently no industry agreed-upon response to a Do Not Track signal. At this time, ADA WEALTHTECH LLC Services and websites do not function differently based on a user's Do Not Track signal.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">How to Contact Us</h2>
            <p className="mb-6">
                If you have any questions about how ADA WEALTHTECH LLC uses Cookies, you can contact ADA WEALTHTECH LLC by using the Contact Us form or send a letter to the mailing address below. Please include your contact information, the name of the ADA WEALTHTECH LLC website or service, and a detailed description of your request or Cookie concern.
            </p>
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
