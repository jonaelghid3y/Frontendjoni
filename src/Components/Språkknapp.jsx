import React, { useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { motion } from "framer-motion";
import { TfiHandPointUp} from 'react-icons/tfi'


function Språkknapp() {

  const variants = {
    visible: {
      opacity: 1,
      y: [0, -20, 0],
      transition: { duration: 1, ease: "easeInOut", times: [0, 0.5, 1], repeat: 3 },
    },
    hidden: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const { language, setLanguage } = useContext(LanguageContext);
  const [buttonClass, setButtonClass] = useState(language === 'en' ? 'sverigebild' : 'englandbild');

  const switchLanguage = () => {
    const newLanguage = language === 'en' ? 'sv' : 'en';
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
    setButtonClass(buttonClass === 'sverigebild' ? 'englandbild' : 'sverigebild');
  };

  return (
    <div id='språkknappdiv'>
      <button id='språkknapp' className={buttonClass} onClick={switchLanguage}>

      </button>

      <motion.div
        variants={variants}
        initial="visible"
        animate="visible"
        exit="hidden"
        id="språkknapptext"
        transition={{ delay: 7, duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => setTimeout(() => document.getElementById("språkknapptext").style.display = "none", 0)}
      >
        <TfiHandPointUp size={30}/>
      </motion.div>

    </div>

  );
}

export default Språkknapp;