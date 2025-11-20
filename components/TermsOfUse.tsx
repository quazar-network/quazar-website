import React, { useEffect } from 'react';

export const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-quazar-black pt-32 pb-24 text-gray-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-gray-400 mb-6">Last Updated: November 2025</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          
          {/* Introduction */}
          <section>
            <p className="mb-4">
              By accessing and using the <a href="https://quazar.io" className="text-quazar-primary hover:underline">https://quazar.io</a> hereafter referred to as “QUAZAR” Website and Materials, you acknowledge and agree to abide by the following Terms of Use. If you do not agree to these Terms, do not use the website or download any Materials.
            </p>
          </section>

          {/* Scope */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Scope of Terms</h2>
            <p>
              These Terms of Use apply to all QUAZAR’s Websites, whether a sponsored site, managed through a third party vendor, or hosted by a third party (referred to hereafter as the "Websites"). These Terms also apply to any resources and tools provided through https://quazar.io Web Sites, including but not limited to developer tools, download areas, research areas, community forums, chat rooms, blogs, sharing sites, and product information. These Terms apply to all the https://quazar.io Web Sites, both now and in the future. Hereafter, all the materials covered by these Terms of Use will be referred to as the "Materials."
            </p>
            <p className="mt-4">
              https://quazar.io may provide activity or program-specific Terms of Service, for example when providing interactive Materials and/or enabling User Generated Content. If so, to the extent that these Terms do not conflict with the program-specific Terms of Service, the Terms herein remain in full force and effect.
            </p>
          </section>

          {/* Security & Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Security and Privacy</h2>
            <ul className="space-y-4">
                <li>
                    <strong className="text-white block mb-1">Personal Information:</strong> 
                    Information submitted to https://quazar.io through forms on the Website or Materials is governed according to QUAZAR's Privacy Policy.
                </li>
                <li>
                    <strong className="text-white block mb-1">Member Account, Password, and Security:</strong> 
                    QUAZAR may, from time to time, host a program or activity-specific site that may require you to establish a member account and/or site password. In such cases, you are entirely responsible for maintaining the confidentiality of your password and account. Furthermore, you are entirely responsible for any activities that occur under your account. You agree to notify QUAZAR immediately of any unauthorized use of your account or any other breach of security here. https://quazar.io will not be liable for any loss that you may incur as a result of someone else using your password or account, either with or without your knowledge. However, you could be held liable for losses incurred by https://quazar.io or another party due to someone else using your account or password. You may not use anyone else's account at any time, without the permission of the account holder.
                </li>
            </ul>
          </section>

          {/* Specific Decentralized Context */}
          <section className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Decentralized Compute & AI Services</h2>
            <p className="mb-4">
              QUAZAR provides a decentralized marketplace for GPU computing power and AI inference. Users acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>QUAZAR is a non-custodial protocol. We do not have custody or control over the GPUs, the AI models run on them, or the data processed by independent nodes.</li>
              <li>Availability of compute resources is subject to network supply and demand.</li>
              <li>You are solely responsible for the content, code, and data you transmit to the network.</li>
            </ul>
          </section>

          {/* Use Terms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Use Terms</h2>
            <p className="mb-4">
                <strong>No License:</strong> Unless otherwise specified in the Materials themselves, you may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Web Sites. You may not use or facilitate the use of this site or any Materials in connection with any infringement analysis concerning QUAZAR products. By your use of this site or any Materials, you agree to grant https://quazar.io a non-exclusive, royalty-free license to any patent claim thereafter drafted which includes subject matter disclosed on this site.
            </p>
            <p className="mb-4 font-bold text-white">No Unlawful or Prohibited Use:</p>
            <p className="mb-4">You agree that you will not use the Web Sites or Material for any purpose that is unlawful or prohibited by these Terms of Use. You may not:</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-400">
                <li>Upload, post, email, transmit, or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable;</li>
                <li>Use the Web Sites, Materials, Services, or activities to "stalk" or otherwise harass or harm another;</li>
                <li>Impersonate any person or entity, including, but not limited to, an QUAZAR official, forum leader, guide or host, or falsely state or otherwise misrepresent your affiliation with a person or entity or collect or store personal data about other users in connection with the prohibited conduct and activities;</li>
                <li>Forge headers or otherwise manipulate identifiers to disguise the origin of any content transmitted through the Web Site or Materials;</li>
                <li>Upload, post, email, transmit, or otherwise make available any content that you do not have a right to make available under any law or contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements);</li>
                <li>Upload, post, email, transmit, or otherwise make available any content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights ("Rights") of any party;</li>
                <li>Upload, post, email, transmit, or otherwise make available any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation;</li>
                <li>Upload, post, email, transmit, or otherwise make available any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware, or telecommunications equipment;</li>
                <li>Use the Web Site or Materials in any manner that could damage, disable, overburden, or impair any QUAZAR server, or network(s) connections, disobey any requirements, procedures, policies, or regulations of networks connected to the Web Site or Materials, or interfere with any other party's use and enjoyment of the Web Sites or Materials;</li>
                <li>Attempt to gain unauthorized access to any Web Site or Material, other accounts, computer systems, or networks connected to any QUAZAR server or Materials, through hacking, password mining, or any other means or obtain or attempt to obtain any materials or information through any means not intentionally made available through the Web Sites or Materials;</li>
                <li>Intentionally or unintentionally violate any applicable local, state, national, or international law, including, but not limited to, regulations promulgated by the U.S. Securities and Exchange Commission, any rules of any national or other securities exchange, and any regulations having the force of law; and/or</li>
                <li>Provide material support or resources (or conceal or disguise the nature, location, source, or ownership of material support or resources) to any organization(s) designated by the United States government as a foreign terrorist organization pursuant to section 219 of the Immigration and Nationality Act.</li>
            </ul>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Copyright Permission</h2>
            <p>
              The copyright in all content posted on https://quazar.io., and all connected sites are owned by QUAZAR. Use is authorized for editorial (news media) purposes only and is subject to the QUAZAR Web Terms of Use. To request permission to use content outside of editorial purposes please submit your request via e-mail to our contact address.
            </p>
          </section>

          {/* Notices and Disclosures (CAPS) */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Notices and Disclosures</h2>
            
            <div className="mb-8">
                <h3 className="text-white font-bold mb-2 uppercase">Exclusions of Warranty</h3>
                <p className="text-xs md:text-sm text-gray-400 uppercase leading-relaxed">
                YOU EXPRESSLY UNDERSTAND AND AGREE THAT: YOUR USE OF THE WEB SITES AND MATERIALS IS AT YOUR SOLE RISK AND THAT THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY EXPRESS OR IMPLIED WARRANTY OF ANY KIND INCLUDING WARRANTIES OF MERCHANTABILITY, NON INFRINGEMENT OF QUAZAR INTELLECTUAL PROPERTY, OR FITNESS FOR ANY PARTICULAR PURPOSE. ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICES IS DONE AT YOUR OWN DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR OTHER DEVICE OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL. IN NO EVENT SHALL QUAZAR OR ITS SUPPLIERS BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, BUSINESS INTERRUPTION, OR LOSS OF INFORMATION) ARISING OUT OF THE USE OF OR INABILITY TO USE THE WEBSITES OR MATERIALS, EVEN IF QUAZAR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. BECAUSE SOME JURISDICTIONS PROHIBIT THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 uppercase">Limitation of Liability</h3>
                <p className="text-xs md:text-sm text-gray-400 uppercase leading-relaxed">
                YOU EXPRESSLY UNDERSTAND AND AGREE THAT IN NO EVENT SHALL QUAZAR AND/OR ITS RESPECTIVE SUPPLIERS BE LIABLE FOR ANY SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA, OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF ANY SOFTWARE, DOCUMENTS, PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR INFORMATION AVAILABLE FROM THE WEB SITE. ANY LOSS OR DAMAGE WHICH MAY BE INCURRED BY YOU, INCLUDING BUT NOT LIMITED TO LOSS OR DAMAGE AS A RESULT OF ANY RELIANCE PLACED BY YOU ON THE COMPLETENESS, ACCURACY, OR EXISTENCE OF ANY CONTENT, OR ANY CHANGES QUAZAR MAY MAKE TO THE SERVICES, DOCUMENTS, WEB SITE, CONTENT OR FOR ANY PERMANENT OR TEMPORARY CESSATION IN THE PROVISION OF THE WEB SITE (OR ANY FEATURES WITHIN THE WEB SITES); OR IF APPLICABLE, YOUR FAILURE TO KEEP YOUR PASSWORD OR ACCOUNT DETAILS SECURE AND CONFIDENTIAL; THESE LIMITATIONS ON QUAZAR'S LIABILITY SHALL APPLY WHETHER OR NOT QUAZAR HAS BEEN ADVISED OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES. A RISK DISCLOSURE STATEMENT IS AVAILABLE ON THE WEBSITE AND IS AN INTEGRAL PART OF THESE TERMS OF USE.
                </p>
            </div>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold QUAZAR and its officers, agents, employees, partners, and licensors harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of the content you submit, post, transmit or otherwise make available through the Web Sites or Materials, your use of the Web Sites or Materials, your connection to the Web Sites or Materials, your violation of these Terms of Use or site-specific Terms of Use, or your violation of any rights of another.
            </p>
          </section>

          {/* Accuracy & Forward Looking */}
          <section>
             <h2 className="text-2xl font-bold text-white mb-4">Accuracy and Completeness</h2>
             <p className="mb-4">
                QUAZAR does not warrant the accuracy or completeness of the information, text, graphics, links, or other items contained within the Web Sites or Materials.
             </p>
             <p className="mb-4">
                <strong>Changes and Updates:</strong> QUAZAR reserves the right to modify or discontinue, temporarily or permanently, Websites or Materials (or any part thereof) with or without notice. QUAZAR may make changes to Web Sites or Materials, or to the products described therein, at any time without notice. QUAZAR makes no commitment to update the Web Sites or Materials.
             </p>
             <p>
                <strong>Forward-Looking Statements:</strong> Some of the information on this Website may contain projections or other forward-looking statements regarding future events or the future financial performance of QUAZAR. Words such as "expects," "goals," "plans," "believes," "continues," and "may," and variations of such words and similar expressions identify forward-looking statements. In addition, any statements that refer to or may imply future financial performance, anticipated growth, trends in our businesses, and other characterizations of future events or circumstances are forward-looking statements. All such statements that are not historical facts are based on our current expectations and are subject to a number of risks and uncertainties, and the actual events or results may differ materially.
             </p>
          </section>

          {/* Content Related Notices */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Content Related Notices</h2>
            <p className="mb-4">
                <strong>Ownership:</strong> You acknowledge and agree that QUAZAR owns all legal rights, title, and interest in and to the Materials and Web Sites, including any QUAZAR trade names, trademarks, service marks, logos, domain names, and other distinctive brand features therein (whether those rights happen to be registered or not, and wherever in the world those rights may exist), and that they are protected by worldwide copyright laws and treaty provisions. They may not be copied, reproduced, modified, published, uploaded, posted, transmitted, or distributed in any way without QUAZAR prior written permission. Except as expressly provided herein, QUAZAR does not grant any express or implied right to you under any patents, copyrights, trademarks, or trade secret information.
            </p>
            <p className="mb-4">
                <strong>Translations:</strong> Where QUAZAR has provided you with a translation of the English language version of these Terms of Use, you agree that the translation is provided for your convenience only and that the English language versions of the Terms of Use will govern your relationship with QUAZAR. If there is any contradiction between the English language version of the Terms of Use and the translation, the English language version shall take precedence.
            </p>
            <p>
                <strong>Third-Party Content:</strong> Web Sites and Materials may contain user or third-party-submitted content; such content is not reviewed, approved, or endorsed by QUAZAR and is provided solely as a convenience to our customers and users. Under no circumstances will QUAZAR be liable in any way for any third party submitted or provided content. ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE MATERIALS IS DONE AT YOUR OWN DISCRETION AND RISK.
            </p>
          </section>

          {/* User Content Submissions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Content Submissions</h2>
            <div className="space-y-4">
                <p>
                    <strong>Definition:</strong> User content submissions may include, but are not limited to, user registration, participation, public sharing, posting, uploading, linking, downloading, and transferring, viewing, blogging, commenting, chat room, bulletin board and forum participation, or submitting or transmitting content (the "User Content") on any web site.
                </p>
                <p>
                    <strong>Non-Endorsement:</strong> QUAZAR does not endorse any User Content or any opinion, recommendation, or advice expressed therein, and QUAZAR expressly disclaims any and all liability in connection with User Content submissions. QUAZAR does not permit copyright infringing activities and infringement of intellectual property rights on its Web Sites. QUAZAR reserves the right to remove User Content at its sole discretion and without prior notice.
                </p>
                <p>
                    <strong>Ownership:</strong> QUAZAR does not claim ownership of any User Content submitted. Unless otherwise agreed to in writing, there is no compensation for User Content.
                </p>
                <p>
                    <strong>License:</strong> By posting, displaying, uploading, inputting, providing, or submitting such user content you grant QUAZAR, necessary sub-licensees, and Web Site users, a perpetual, irrevocable, and fully sub-licensable license to use worldwide, royalty-free and non-exclusive license, to use, distribute, reproduce, modify, adapt, publish, translate, publicly perform and publicly display the User Content.
                </p>
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Links to Other Materials or Sites</h2>
            <p>
                The linked sites are not under the control of QUAZAR and QUAZAR is not responsible for the content of any linked site or any link contained in a linked site. QUAZAR reserves the right to terminate any link or linking program at any time. QUAZAR does not endorse companies or products to which it links and reserves the right to note them as such on its web pages. If you decide to access any of the third-party sites linked to this Site, you do this entirely at your own risk.
            </p>
          </section>

           {/* Unsolicited Ideas */}
           <section>
            <h2 className="text-2xl font-bold text-white mb-4">Unsolicited Idea Submission Policy</h2>
            <p className="uppercase text-sm">
                QUAZAR OR ITS EMPLOYEES DO NOT ACCEPT OR CONSIDER UNSOLICITED IDEAS, INCLUDING IDEAS FOR NEW ADVERTISING CAMPAIGNS, NEW PROMOTIONS, NEW PRODUCTS OR TECHNOLOGIES, PROCESSES, MATERIALS, MARKETING PLANS OR NEW PRODUCT NAMES. PLEASE DO NOT SEND ANY ORIGINAL CREATIVE ARTWORK, SAMPLES, DEMOS, OR OTHER WORKS. THE SOLE PURPOSE OF THIS POLICY IS TO AVOID POTENTIAL MISUNDERSTANDINGS OR DISPUTES WHEN QUAZAR'S PRODUCTS OR MARKETING STRATEGIES MIGHT SEEM SIMILAR TO IDEAS SUBMITTED TO QUAZAR.
            </p>
          </section>

          {/* General / Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">General</h2>
            <p className="mb-4">
                User access to this Web Site is governed by all applicable federal, state, and local laws. All information available on the Website is subject to Saint Vincent and the Grenadines export control laws and may also be subject to the laws of the country where you reside.
            </p>
            <p className="mb-4">
                QUAZAR makes no representation that Materials on the site are appropriate or available for use in other locations, and access to them from territories where their content is illegal is prohibited. Those who choose to access this site from other locations do so on their own initiative and are responsible for compliance with applicable local laws. These Terms constitute the entire agreement between you and QUAZAR and govern your use of the Site.
            </p>
            <p>
                Each user may be subject to additional terms and conditions that may apply when that user uses affiliate services, third-party content, or third-party software. The Terms and the relationship between you and QUAZAR shall be governed by the laws of Saint Vincent and the Grenadines without regard to its conflict of law provisions and each party shall submit to the personal and exclusive jurisdiction of the courts located within Saint Vincent and the Grenadines.
            </p>
          </section>

          {/* Contact Us */}
          <section className="border-t border-white/10 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="mb-8">
              If you have any questions about these Terms, please contact us via email at <a href="mailto:info@quazar.io" className="text-quazar-primary hover:underline font-bold">info@quazar.io</a>.
            </p>
            
            <div className="bg-[#111] p-8 rounded-xl border border-white/10 font-mono text-sm text-gray-400 inline-block min-w-[300px]">
                <p className="text-white font-bold mb-4 text-lg">ADA WEALTHTECH LLC</p>
                <div className="space-y-1">
                    <p>Company Number: 2151 LLC 2022</p>
                    <p>Suite 305, Griffith Corporate Centre</p>
                    <p>Beachmont, Kingstown</p>
                    <p>St. Vincent and the Grenadines</p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};