import React, { useContext} from 'react';
import {LanguageContext} from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';
import { Link } from 'react-router-dom';
import { Html5Original, Css3Original,JavascriptOriginal,ReactOriginal,BootstrapOriginal,NodejsOriginal} from 'devicons-react';





function Hemcontainer() {
  const { language } = useContext(LanguageContext);

  return (
    <div id="Hemcontainer">
      <Språkknapp/>
      <h1 id="hemcontainertitel"className="fadein">{language === 'en' ? "Hey, I'M JONAEL GHIDEY" : "Hej! jag är Jonael Ghidey!"}</h1>
      <p id="hemcontainertext"className="fadein">{language === 'en' ? 'A frontend developer student that love to learn' : ' En Front-endutvecklare som älskar att lära mig!'}</p>
      <Link to="/Projects" id="projectknapp" className={`länkar ${location.pathname === '/Projects' ? 'active' : ''}`}>
          {language === 'en' ? 'Project' : 'Projekt'}
        </Link>
      <div id="techstackdiv">
       
      <h4>Techstack:</h4>
      <Html5Original color="red" size="30"/>
      <Css3Original color="blue" size="30"/>
      <BootstrapOriginal color="blue" size="30"/>
      <JavascriptOriginal color="yellow" size="30"/>
      <NodejsOriginal color="yellow" size="30"/>  
      <ReactOriginal color="torquise" size="30"/>
        </div>
     
    </div>
  );
}

export default Hemcontainer;

