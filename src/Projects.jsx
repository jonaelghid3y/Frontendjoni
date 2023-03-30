
import React, { useContext} from 'react';
import {LanguageContext} from './LanguageContext';
import Språkknapp from './Språkknapp';
import './App.css'


function Projects() {
    const { language } = useContext(LanguageContext);
  return (
  
      <div id="Projectcontainer">
        <Språkknapp />
        
        <h1 >{language === 'en' ? "Hello u are gey": "Hej du är fan gay mannen"}</h1>
        <div id="slider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni quisquam dignissimos dolores officia rerum laborum repudiandae odit, explicabo veniam, nesciunt molestiae? Odio expedita corporis veritatis molestiae iusto, ullam accusantium.
        </div>

       
      
      </div>
   
  )
}

export default Projects