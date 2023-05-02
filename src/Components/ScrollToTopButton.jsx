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
    <motion.button 
  style={{marginTop: "10px" ,width: "50px", height:"50px"}}
  whileTap={{ scale: 0.9 }}
>
  <ScrollToTopButton />
</motion.button>

  );
}

export default ScrollToTopButton;
