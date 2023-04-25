import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';


function Språkknapp() {
    

  const { language, setLanguage } = useContext(LanguageContext);
  const [buttonClass, setButtonClass] = useState(language === 'en' ? 'englandbild' : 'sverigebild');
 
  const switchLanguage = () => {
    const newLanguage = language === 'en' ? 'sv' : 'en';
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
    setButtonClass(buttonClass === 'sverigebild' ? 'englandbild' : 'sverigebild');
  };

  return (
    <button id='språkknapp' className={buttonClass} onClick={switchLanguage}>
      
    </button>
  );
}

export default Språkknapp;