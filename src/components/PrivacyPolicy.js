import React, { useEffect, useState } from 'react';
import './PrivacyPolicy.css'
import Ellipsebig from '../images/Ellipsebig.png';
import Ellipsesmall from '../images/Ellipsesmall.png';
import MenublobPP from '../components/MenublobPP';
import { isMobile, isTablet, isDesktop} from 'react-device-detect';
const PrivacyPolicyComponent = ({ onMenuPageChange }) => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false); // Состояние для отслеживания отображения политики конфиденциальности
 const [showTermsOfUse, setShowTermsOfUse] = useState(false); 
 
 const handleNavbarLinkClick = () => {
    setShowPrivacyPolicy(false); // Скрываем политику конфиденциальности
    setShowTermsOfUse(false); // Скрываем условия использования
  };

  const handleMenuPageChange = (id) => {
    onMenuPageChange(id);
  };

  return (
    <div style={{overflow:'hidden',width: '100vw',position: 'relative'}}>
     <div id='PP' style={{color:'white', fontFamily: 'Kharkiv Tone', width:'100vw', padding:  window.innerWidth <= 928 ? '30px':'60px'}}>
      <h1>Privacy Policy</h1>
      <br/>
      <br/>
            {showMenu && (window.innerWidth >= 928) ? <MenublobPP onMenuPageChange={handleMenuPageChange} /> : null}

      <p>
        This Privacy Policy shall apply to the applications published in the Apple App Store by Monarch Entertainment and that are accessible from mobile devices and personal computers (the "App"), and the use of the websites controlled by Monarch Entertainment in general (the "Website"; App, and Website together the "Services").
      </p>
      <img  src={Ellipsesmall} style={{zIndex:'-1', position: 'absolute', right:'-300px', top:'50px', width:'600px',height:'600px'}} />
      <br/>
      <h2>1. GENERAL</h2>
      <img  src={Ellipsebig} style={{zIndex:'-1', position: 'absolute', left:'-300px', width:'600px',height:'600px', opacity:'0.6'}} />
      <br/>
      <p>
        Regarding the Services: Monarch Entertainment ("Monarch Entertainment", "we", "us" or "our") is the Data Controller within the meaning of the General Data Protection Regulation ("GDPR"). This privacy policy shall inform you on how we collect, process and use ("Use") personal data in connection with the Services.
      </p>
      <br/>
      <h2>2. DATA WE COLLECT, PROCESS AND USE</h2>
      <br/>
      <p>
        In general, you can use the Services without providing any personal information such as e.g. your name, email address, postal address, telephone number, financial information (all such informatio concerning the personal or material circumstances of an identified or identifiable individual dat subject together "Personal Data"). Therefore, if you do not provide us directly with Personal Dat another way or actively consent to the Use by us of certain Personal Data, we, in general, do not your data with the exception of the following:
      </p>
      <br/>
      <ul className='lii'>
        <li>
          <strong>2.1.1 Regarding the Website:</strong> your browser transfers certain data so that it can access the Website, namely: the IP address, the date and time of the request, the browser type, the operating system, the language and version of the browser software.
        </li>
        <br/>
        <li>
          <strong>2.1.2 Regarding the App:</strong> certain data is transmitted by your mobile device: namely your IP address, the periods of time in which you use the App and the type of device you use (e.g. IPhone, IPad), as well as events within the application recorded with Apple analytics in order to give us the possibility to continuously improve the App.
        </li>
        <br/>
        <img  src={Ellipsesmall} style={{zIndex:'-1', position: 'absolute', right:'-200px', width:'600px',height:'600px'}} />
        <li>
          <strong>2.1.3 Regarding the App:</strong> in certain cases, such as downloading and installing a free trial of a paid App, we ask you to enter a valid email address to begin your free trial.
        </li>
        <br/>
        <li>
          <strong>2.1.4 Regarding the email:</strong> we save a record of communication including attachments and information you voluntary decide to share with us for troubleshooting purposes whenever you communicate with our support team.
        </li>
      </ul>
      <br/>
       <img  src={Ellipsebig} style={{zIndex:'-1', position: 'absolute', left:'-300px', width:'600px',height:'600px', opacity:'0.6'}} />
      <p>
        Only in cases in which you have given us prior consent we also use your Personal Data for other purposes but only to the extent needed in each specific case. The legal basis for the processing of the data described in this section 2.2 is Art. 6 (1) sentence 1 lit. a GDPR (consent).
      </p>
      <br/>
      <p>
        We may disclose Personal Data to third parties where such disclosure is required by law (for example, upon request of a court or of law enforcement authorities). The legal basis for the processing of the data described in this section 2.3 is Art. 6 (1) sentence 1 lit. c GDPR (legal obligation).
      </p>
      <br/>
      <p>
        We may also Use certain data as set forth in section 3 below.
      </p>
      <br/>
      <h2>3. Monarch Entertainment COOKIES POLICY</h2>
      <br/>
      <p>
        Monarch Entertainment websites use cookies to personalize your experience on our sites. Cookies tell us which parts of our websites people have visited, help us measure the performance of ads, and give us insights into user behavior so we can improve our communications and products. You can disable cookies anytime in your web browser. Here is how it works in Google Chrome and Safari browsers:
      </p>
      <br/>
      <p>
        <strong>Chrome:</strong> Go to the Settings in the Chrome menu (Chrome toolbar) -> Scroll down the page and click Advanced -> In the "Privacy" section, click the Content settings -> Click "Cookies" and change anything desired.
      </p>
      <br/>
      <p>
        <strong>Safari:</strong> Go to Preferences. -> Click the Privacy tab. ->Choose to Block all cookies.
      </p>
      <br/>
      <img  src={Ellipsesmall} style={{zIndex:'-1', position: 'absolute', right:'-300px', width:'600px',height:'600px'}} />
      <p>
        For other browsers, please check the documentation your provider provides. Monarch Entertainment's cookies don't collect information that personally identify you. Also, other sites or companies won't be able to track you through our cookies. When you disable cookies, our website can no longer provide you with the best user experience and you miss the opportunity to get more personalized information, such as displaying information in your language or displaying prices in your currency.
      </p>
      <br/>
      <h3>COOKIES: USE OF (FURTHER ANALYZING) TOOLS</h3>
      <br/>
      <p>
        Cookies are stored on your computer when using the Website. Cookies are small text files that are stored on your hard disk of the computer with which you visit a website and which are allocated to your browser and through which certain information is submitted to the cookies user that sets the cookie (in this case us). Cookies serve to make the website offering more user-friendly and effective overall.
      </p>
      <br/>
      <p>
        The Website uses cookies to the following extent: Transient / Session cookies, Persistent / Setting cookies, Analysis cookies
      </p>
      <br/>
      <p>
        Transient cookies are automatically deleted when you close your browser. This includes in particular the session cookies. These store a so-called session ID, which identify user session in the browser. Session cookies are deleted when you log out or close your browser. Persistent cookies help the Website remember your information and settings when you visit them in the future. They are automatically deleted after a specified period, which may differ depending on the cookie.
      </p>
      <br/>
      <p>
        We also use cookies on our website which enable an analysis of the user's surfing behavior.
      </p>
      <br/>
      <h3>3.2 Google Analytics</h3>
      <br/>
      <img  src={Ellipsebig} style={{zIndex:'-1', position: 'absolute', left:'-200px', width:'600px',height:'600px', opacity:'0.6'}} />
      <p>
        The Website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files placed on your computer, to help analyze how you use the Website. The information generated by the cookie about your use of the Website will normally be transmitted to and stored by Google on servers in the United States. Because IP-anonymization is activated on the Website, your IP address will be truncated within the area of member states of the European Union or within other contracting states to the Agreement on the European Economic Area. Only in exceptional cases the whole IP address will be first transferred to a Google server in the USA and truncated there. Google will use this information on behalf of Monarch Entertainment for the purpose of evaluating your use of the Website, compiling reports on Website activity and providing other services for Monarch Entertainment relating to website activity and internet usage.
      </p>
      <br/>
      <p>
        The IP address that your browser transfers within the scope of Google Analytics will not be associated with any other data held by Google.
      </p>
      <br/>
      <p>
        You may refuse the use of cookies by selecting the appropriate settings in your browser, however please note that if you do so you may not be able to use all functions of the Website. You can also opt-out from the storage by Google of the data that is created by the cookie and is related to the use of the Website (including your IP address) and the processing of such data by Google by downloading and installing the Google Analytics opt-out Browser add-on available under https://tools.google.com/dlpage/gaoptout?hl=en. As an alternative to the browser add-on or within browsers on mobile devices, you can click this link in order to opt-out from being tracked by Google Analytics within this Website in the future (this opt-out option applies only for the browser in which you set it and with regard to the Website). In this case an opt-out cookie is put on your device. In case you delete your cookies, you will have to use the aforementioned link again. For further information on Google Analytics please refer to: Google Analytic Terms of Service Language Index , Safeguarding your data , Privacy Policy
      </p>
      <br/>
      <h3>3.3 Facebook SDK</h3>
      <br/>
      <p>
        Our Apps use Facebook SDK of Facebook 1 Hacker Way, Menlo Park (, ) to analyze sources of app installations and how you use the app. Facebook SDK and Analytics is a service which helps us to improve ours Service by better understanding general app usage patterns.
      </p>
      <br/>
      <p>
        If you decide to deactivate (some of) the cookies and tools described above, please note that certain features and functionalities of the Service by better understanding general app usage patterns. If you decide to deactivate (some of) the cookies and tools d es might not work or might not be accessible to you.
      </p>
      <br/>
      <img  src={Ellipsesmall} style={{zIndex:'-1', position: 'absolute', right:'-400px', width:'600px',height:'600px'}} />
      <p>
        The legal basis for the processing of the data described in this section 3 (to the extent such data is to be considered Personal Data) is Art. 6 (1) sentence 1 lit. f GDPR (legitimate interests; the legitimate interests to Use such data is that we use and analyze the respective data to improve our Services, such as by gaining a better understanding of your interests and requirements regarding our Services and to help personalize your user experience).
      </p>
      <br/>
      <h2>4. TECHNICAL IMPLEMENTATION OF THE SERVICES BY SUBCONTRACTORS</h2>
      <br/>
      <p>
        We partly use service providers who process Personal Data on behalf of us to operate the technical platform for the Services (for example, the documents that you scan and send via the App are processed by a third party fax service provider (whereas the respective servers are exclusively situated in EU member states)). These service providers process the data exclusively according to our instructions (order processing). The legal basis for the data processing described in this section 4 is Art. 6 (1) sentence 1 lit. b GDPR (performance of contract and pre-contractual measures) and Art. 28 GDPR (order processing).
      </p>
      <br/>
      <h2>5. DURATION OF STORAGE OF PERSONAL DATA</h2>
      <br/>
      <p>
        Unless no shorter storage period is indicated in this privacy policy, we, in general, store Personal Data as long (i) as required for the provision of the Services to you, and/or (ii) as it is necessary with regard to the contractual relationship with you, thereafter only if and to the extent that we are obliged to do so by mandatory statutory retention obligations. If we no longer require the respective Personal Data for the purposes described above, such Personal Data will only be stored during the respective legal retention period and not processed for other purposes.
      </p>
      <br/>
      <h2>6. YOUR RIGHTS</h2>
      <br/>
      <p>
        You have the right to request information from us at any time about your Personal Data stored by us. If the legal requirements are met, you also have rights vis-à-vis us to request from us access to and rectification or erasure or restriction of processing concerning your Personal Data or to object the processing of your Personal Data as well as the right to receive your Personal Data provided to us in a structured, established and machine-readable format from us (you can transfer this data to other parties or have it transferred; data portability).
      </p>
      <br/>
      <img  src={Ellipsebig} style={{zIndex:'-1', position: 'absolute', left:'-400px', width:'800px',height:'800px', opacity:'0.6'}} />
      <p>
        If you have given your consent to the use of personal data, you can revoke such consent at any time (for the future).
      </p>
      <br/>
      <p>
        If you believe that the processing of your Personal Data by us is in breach of the applicable data protection laws, you can issue a complaint with the competent supervisory authority for data protection.
      </p>
      <br/>
      <h2>7. CONTACT</h2>
      <br/>
      <p>
        You can contact us (e.g. if you have any questions about data protection regarding Monarch Entertainment keycom.translate@gmail.com (including regarding the assertion of your rights further explained in section 6 above)), for example, via the address indicated above in section 1 or via the following emails: or (Monarch Entertainment Data Protection Officer), or at our GDPR Representative Office at the following address:
      </p>
      <br/>
      <p>
        Monarch Entertainment, St. Lyvarna, 9, Dnipro 49000.
      </p>
      <br/>
       <h2>8. KEEPING YOUR PERSONAL DATA SECURE</h2>
       <img  src={Ellipsesmall} style={{zIndex:'-1', position: 'absolute', right:'-300px', width:'600px',height:'600px'}} />
       <br/>
      <p>
        We have taken extensive technical and operational precautions to protect the Personal Data retained by us against unauthorized access and misuse. Our security procedures are revised regularly
      </p>
      <br/>
      <p>
        and adapted to reflect technological progress.
      </p>
    </div>
    </div>
  );
};

export default PrivacyPolicyComponent;

