// App.js
import React, { useState } from "react";
import Page_wb from "./containers/Page_wb";
import Navbar from "./components/Navbar";
import LanguageSelector from "./components/Popup";
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsofUse';
import Admin from "../src/admin-panel/Admin.js";
import "./App.css";

function App() {
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
    <BrowserRouter>
      <Admin />
      <div className="App">
        {!languageSelected ? (
          <LanguageSelector onLanguageSelected={() => setLanguageSelected(true)} />
        ) : (
          <>
            <Navbar onNavbarLinkClick={handleNavbarLinkClick} />
            <Page_wb/>
                 
           
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
