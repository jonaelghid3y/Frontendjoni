import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { Link } from 'react-router-dom';

function Header() {
  const { language } = useContext(LanguageContext);

  return (
    <div id="Headercontainer">
      <div id="profilbild">
        <img id="bild" src='./src/img/1651492094462 (1).jpg'/>
        <h1 id="Namn">Jonael Ghidey </h1>
      </div>
      <nav id="nav">
        <Link to="/" id="Home" className="länkar" style={{color: "blueviolet"}}>{language === 'en' ? 'Home' : 'Hem'}</Link>
        <Link to="/Projects" id="Projects" className="länkar">{language === 'en' ? 'Projekt' : 'Project'} </Link>
      
      </nav>
    </div>
  );
}

export default Header;
