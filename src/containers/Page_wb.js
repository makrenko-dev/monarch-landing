import React, { useEffect, useState } from 'react';
import TechnologyStack from '../components/TechnologyStack';
import AboutUsBlock from '../components/AboutUsBlock';
import AboutUsSec from '../components/AboutUsSec';
import BlobAnimation from '../components/BlobAnimation';
import WhyUs from '../components/WhyUs';
import Napryamy from '../components/Napryamy';
import Roles from '../components/Roles';
import StageSlider from "../components/HorizontalScroll";
import OurTeam from '../components/OurTeam';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import MenuBlob from '../components/MenuBlob';
import Main_block from "../components/Main_block";
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfUse from '../components/TermsofUse';

import { isMobile, isTablet, isDesktop} from 'react-device-detect';
import './Page_wb.css';

function Page_wb() {
 const [languageSelected, setLanguageSelected] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
    setShowTermsOfUse(false);
  };

  const handleTermsOfUseClick = () => {
    setShowTermsOfUse(true);
    setShowPrivacyPolicy(false);
  };
  
  const handleNavbarLinkClick = () => {
    setShowPrivacyPolicy(false);
    setShowTermsOfUse(false);
  };

  const handleMenuPageChange = () => {
    setShowPrivacyPolicy(false);
    setShowTermsOfUse(false);
  };

  return (
    <div className="App_wb">
      {showPrivacyPolicy ? (
                <PrivacyPolicy onMenuPageChange={handleMenuPageChange} />
              ) : showTermsOfUse ? (
                <TermsOfUse onMenuPageChange={handleMenuPageChange} />
              ) : (
              <>
                <Main_block />
                {isMobile || isTablet || window.innerWidth <= 928 ? null :(<MenuBlob />)}
                <AboutUsBlock/>
                <AboutUsSec/>    
                <Napryamy/>
                <TechnologyStack />
                <WhyUs/> 
                <Roles/>
                <StageSlider />
                 <OurTeam/>
                <Portfolio/>
                <ContactForm/>
                <FAQ/>
              </>
              )}
     
      <Footer 
        onPrivacyPolicyClick={handlePrivacyPolicyClick} 
        onTermsOfUseClick={handleTermsOfUseClick} 
      />

    </div>
  );
}

export default Page_wb;
