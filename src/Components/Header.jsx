import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

function Header() {
  const { language } = useContext(LanguageContext);

  const [activeLink, setActiveLink] = useState('#Hemcontainer');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const headerLinks = document.querySelectorAll('#nav a');

    const handleClick = (e) => {
      console.log("hej")
      e.preventDefault();
      setActiveLink(e.target.getAttribute('href'));

      setTimeout(() => {
        const element = document.querySelector(e.target.getAttribute('href'));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 50); // 50ms delay before scrolling to allow time for page to render
    };


    headerLinks.forEach((link) => {
      link.addEventListener('click', handleClick);
    });



    return () => {
      headerLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (

    <Styledheadercontainer >
      <StyledProfilbild >
        <Styledimg src='./src/img/1651492094462 (1).jpg' alt='Profile' />
        <StyledNamn id="Namn">Jonael Ghidey</StyledNamn>
      </StyledProfilbild>
      <div className={`hamburger ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
      <nav id="nav" className={`${showMenu ? 'open' : ''}`}>
      <motion.div whileTap={{ scale: 0.9 }}>

        <Link
          to="Hemcontainer"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          id="Home"
          className={`länkar ${activeLink === '#Hemcontainer' ? 'active' : ''}`}
        >
          {language === 'en' ? 'Home' : 'Hem'}
        </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
        <Link
          to="aboutdiv"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          id="About"
          className={`länkar ${activeLink === '#aboutdiv' ? 'active' : ''}`}
        >
          {language === 'en' ? 'About' : 'Om'}
        </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
        <Link
          to="projectcontainer"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          id="Projects"
          className={`länkar ${activeLink === '#Projectcontainer' ? 'active' : ''}`}
        >
          {language === 'en' ? 'Project' : 'Projekt'}
        </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
        <Link
          to="contactdiv"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          id="Contact"
          className={`länkar ${activeLink === '#contactdiv' ? 'active' : ''}`}
        >
          {language === 'en' ? 'Contact' : 'Kontakt'}
        </Link>
        </motion.div>
      </nav>
    </Styledheadercontainer>

  );
}



const Styledheadercontainer = styled.div`
margin-top: -10px;
font-weight: 600;
height: 80px;
background-color: white;
z-index: 1;
position: fixed;
width: 99%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 50px;
`;

const Styledimg = styled.img`

  border-radius: 50%;
  max-height: 60px;
  max-width: 60px;
  
  @media (max-width: 768px) {

    border-radius: 50%;
    max-height: 40px;
    max-width: 40px;
   
    }
  


`;
const StyledProfilbild = styled.div`
width: 400px;
height: 100px;
margin-left: 50px;
display: flex;
align-items: center;
gap: 20px;

@media (max-width: 768px) {

  margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 20p
  
 
  }


`;

const StyledNamn = styled.h1`
font-size: 20px;
height: 50px;
color: #000000;
display: flex;
align-items: center;

@media (max-width: 768px) {

  font-size: 15px;
  color: #000000;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: fixed;
  left: 80px;
  
  
 
  }


`;






export default Header;
