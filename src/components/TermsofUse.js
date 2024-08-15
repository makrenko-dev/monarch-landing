import React, { useEffect, useState } from 'react';
import Ellipsebig from '../images/Ellipsebig.png';
import Ellipsesmall from '../images/Ellipsesmall.png';
import MenuBlob from '../components/MenuBlob';
import MenublobPP from '../components/MenublobPP';
import { isMobile, isTablet, isDesktop} from 'react-device-detect';

const TermsOfUse = ({ onMenuPageChange }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const componentPosition = document.getElementById('PP').offsetTop+200;
    if (scrollPosition >= componentPosition) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  const handleMenuPageChange = (id) => {
    onMenuPageChange(id);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
     <div style={{overflow:'hidden',width: '100vw',position: 'relative'}}>
    <div id='PP' style={{color:'white', fontFamily: 'Kharkiv Tone', fontSize:'30px', width:'100vw',  padding:  window.innerWidth <= 928 ? '30px':'60px'}}>
      <h1>Terms of use</h1>
       <br/>
       {showMenu && (window.innerWidth >= 928) ? <MenublobPP onMenuPageChange={handleMenuPageChange} /> : null}

      <p>
        This Privacy Policy governs our data practices in connection with your use of the Monarch Entertainment The Monarch Entertainment Apps (hereinafter: ‘App’ or ‘Apps’) are created by Monarch Entertainment. Monarch Entertainment is a app development company and app publisher. We deliver top ranked Apps to world wide app stores. Our Apps are created for numerous different devices (phone, tablet, watch, etc.). We create Apps that can be downloaded freely, functioning on the basis of an advertising model. For many of our Apps, we also create a paid version that does not contain advertising. In general, if you do not want us to use your data to tailor the ads that are displayed within the App, you can choose to use a version that does not contain advertising.
      </p>
      <img  src={Ellipsesmall} style={{zIndex:'-1', position: 'absolute', right:'-300px', top:'50px', width:'600px',height:'600px'}} />
       <br/>
      <p>
        We makes Apps available to you subject to the following Terms of Use. Do not use the App if you do not accept these Terms of Use. If you use the App, you affirmatively accept these Terms of Use.
      </p>
       <br/>
      <h2>1. USE OF APPS</h2>
       <br/>
      <p>
        1.1 You agree to use the App only for purposes that are permitted by (a) these Terms of Use and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions. You agree to comply with all local laws and regulations regarding the download, installation and/or use of the App.
      </p>
      <img  src={Ellipsebig} style={{zIndex:'-1', position: 'absolute', left:'-300px', width:'600px',height:'600px', opacity:'0.6'}} />
       <br/>
      <p>
        1.2 By using the App, you are consenting to our processing of data as set forth in our Privacy Policy (<a href="http://anydayapps.com/privacy">http://anydayapps.com/privacy</a>).
      </p>
       <br/>
      <p>
        1.3 You agree that Monarch Entertainment is not responsible or liable for any content accessed from the App or third-party websites. You agree that you are solely responsible for (and that Monarch Entertainment has no responsibility to you or to any third party for) your use of the App.
      </p>
       <br/>
      <p>
        1.4 You acknowledge that the App may communicate with our servers from time to time to check for updates to the App, such as bug fixes, patches, enhanced functions, missing plug-ins and new versions. By installing the App, you agree to such automatically requested and received updates.
      </p>
       <br/>
      <p>
        1.5 You agree that we may stop (permanently or temporarily) providing the App (or any features within the App) to you or to users generally at our sole discretion, without prior notice to you. You agree that if we disable access to the App, you may be prevented from accessing the App or certain features within the App.
      </p>
       <br/>
      <p>
        1.6 You may not distribute, publish, or send through an App: (1) any spam, including any unsolicited advertisements, solicitations, commercial messages, informational announcements, or promotional messages of any kind; (2) chain mail; (3) numerous copies of the same or substantially similar messages; (4) empty messages; (5) messages that contain no substantive content; (6) very large messages or files that disrupt a server, account, newsgroup, or chat service; or (7) any message that is categorized as ‘phishing’.
      </p>
      <img  src={Ellipsesmall} style={{zIndex:'-1', position: 'absolute', right:'-400px', width:'600px',height:'600px'}} />
       <br/>
      <h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>
       <br/>
      <p>
        2.1 The App, and all content included on or within the App, such as the user interface, the compilation of the content and arrangement of the website, and all text, graphics, pictures, sound, video, data, applications and other content, is the property of us, our licensors or content suppliers and is protected by copyright and other intellectual property laws. Reproduction or redistribution of such content except as expressly permitted by these Terms of Use is prohibited.
      </p>
       <br/>
      <p>
        2.2 We grant you a personal revocable, non-exclusive, non-transferable license to access and make personal use of our App. You may not download, reverse engineer, decompile, disassemble, or modify, or any portion of it, except with our express written consent. The App may not be copied, sold, resold or otherwise exploited for any commercial purpose without our express written consent. You may not link, frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of the App without our prior written consent. Your unauthorized use of the App will immediately terminate the limited license granted by Monarch Entertainment.
      </p>
       <br/>
       <img  src={Ellipsebig} style={{zIndex:'-1', position: 'absolute', left:'-400px', width:'800px',height:'800px', opacity:'0.6'}} />
      <h2>3. NO WARRANTIES AND LIMITATIONS OF LIABILITY</h2>
       <br/>
      <p>
        3.1 Monarch Entertainment does not warrant that the App, its functions, or content will be uninterrupted or error free, or that defects will be corrected. Monarch Entertainment makes no representation or warranty as to the accuracy or fitness for use of any offers, advertisement or third party content presented in connection with the App. The App is provided on an ‘as is’ basis. You agree that your use of the App is at your sole risk.
      </p>
       <br/>
      <p>
        3.2 Monarch Entertainment will not be liable to you for any damages of any kind arising from your use or inability to use the App. Our liability for monetary damages for any claims that you may have against us is limited to the amount you actually paid for the App.
      </p>
       <br/>
      <h2>4. APPLICABLE LAW AND DISPUTE RESOLUTION</h2>
       <br/>
       <img  src={Ellipsesmall} style={{zIndex:'-1', position: 'absolute', right:'-200px', width:'600px',height:'600px'}} />
      <p>
        4.1 By using the App, you agree that the laws of the Netherlands will exclusively govern the construction of our agreement and any dispute of any sort that might arise between you and Monarch Entertainment. This agreement will not be governed by the conflict of law rules of any jurisdiction or the United Nations Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. If you are a consumer, the choice of law only applies to the extent that there is no restriction with regard to mandatory rules of the country where you are domiciled or habitually resident.
      </p>
       <br/>
      <p>
        4.2 In the event a dispute arises between you and Monarch Entertainment, we will use reasonable endeavours to resolve such dispute amicably. If we cannot agree on a resolution, you agree that the dispute will be resolved through the Court of Amsterdam, the Netherlands, unless applicable mandatory law provides that you are entitled to address a court in another jurisdiction.
      </p>
       <br/>
      <p>
        4.3 Any claim arising out of or in connection with your use of or inability to use the App must be brought within one (1) week after the event or such claim is barred.
      </p>
      <img  src={Ellipsebig} style={{zIndex:'-1', position: 'absolute', left:'-300px', width:'500px',height:'500px', opacity:'0.6'}} />
       <br/>
      <h2>5. CHANGES</h2>
       <br/>
      <p>
        5.1 These Terms of Use may be updated from time to time. We will notify you of any changes to our Terms of Use by posting the new Terms of Use here: <a href="https://www.monarch-entertainment.net/privacy-policy">https://www.monarch-entertainment.net/privacy-policy</a>. You are advised to consult these Terms of Use regularly for any changes.
      </p>
       <br/>
      <p>
        These Terms of Use were updated on 12 february 2023. If you have any questions, please contact us at <a href="mailto:keycom.translate@gmail.com">keycom.translate@gmail.com</a>. This Term of Use was updated on 12 february 2023.
      </p>

    </div>
    </div>
  );
};

export default TermsOfUse;
