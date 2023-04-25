import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  return (
    <div id="Headercontainer">
      <div id="profilbild">
        <img id="bild" src='./src/img/1651492094462 (1).jpg'/>
        <h1 id="Namn">Jonael Ghidey </h1>
      </div>
      <nav id="nav">
        <Link to="/" id="Home" className={`länkar ${location.pathname === '/' ? 'active' : ''}`}>
          {language === 'en' ? 'Home' : 'Hem'}
        </Link>
        <Link to="/Projects" id="Projects" className={`länkar ${location.pathname === '/Projects' ? 'active' : ''}`}>
          {language === 'en' ? 'Project' : 'Projekt'}
        </Link>
        <Link to="/About" id="About" className={`länkar ${location.pathname === '/About' ? 'active' : ''}`}>
          {language === 'en' ? 'About' : 'Om'}
        </Link>
        <Link to="/Contact" id="Contact" className={`länkar ${location.pathname === '/Contact' ? 'active' : ''}`}>
          {language === 'en' ? 'Contact' : 'Kontakt'}
        </Link>




      </nav>
    </div>
  );
}

export default Header;
