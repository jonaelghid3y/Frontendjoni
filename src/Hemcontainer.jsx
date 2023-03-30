import React, { useContext} from 'react';
import {LanguageContext} from './LanguageContext';
import Språkknapp from './Språkknapp';
import { Link } from 'react-router-dom';





function Hemcontainer() {
  const { language } = useContext(LanguageContext);

  return (
    <div id="Hemcontainer">
      <Språkknapp/>
      <h1 className="fadein">{language === 'en' ? "Hey, I'M JONAEL GHIDEY" : "Hej! jag är Jonael Ghidey!"}</h1>
      <p className="fadein">{language === 'en' ? 'A frontend developer student that love to learn' : ' En Front-endutvecklare som älskar att lära mig!'}</p>
      <Link to="/Projects" id="projectknapp">{language === 'en' ? 'Projekt' : 'Project'} </Link>
    </div>
  );
}

export default Hemcontainer;

