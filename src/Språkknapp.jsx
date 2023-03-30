import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';


function Språkknapp() {
    

  const { language, setLanguage } = useContext(LanguageContext);
  const [buttonClass, setButtonClass] = useState('sverigebild');

  const switchLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
    setButtonClass(buttonClass === 'sverigebild' ? 'englandbild' : 'sverigebild');
  }

  return (
    <button id='språkknapp' className={buttonClass} onClick={switchLanguage}>
      
    </button>
  );
}

export default Språkknapp;