import React, { useState } from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <motion.div id="uppknapp" 
  whileTap={{ scale: 0.8 }}
  whileHover={{ scale: 1.1 }}
><BsFillArrowUpCircleFill  onClick={scrollToTop}  color='#facf0f' />
  
</motion.div>

  );
}

export default ScrollToTopButton;
