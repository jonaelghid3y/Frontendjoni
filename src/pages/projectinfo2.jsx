
import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

import { AiFillGithub } from 'react-icons/ai';
import '@splidejs/react-splide/css';
import "@fontsource/source-sans-pro";
import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, BootstrapOriginal, NodejsOriginal } from 'devicons-react';


function projectinfo2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { language } = useContext(LanguageContext);
 
  return (
   




    <div className='sliderdiv'>

      <div id="projektinfo1div">

      <div id="projectinfo1kort">
      <h1 id="projectinfo1h1" style={{ margin: 0 }}>{language === 'en' ? "API based movie-site" : "API baserad filmsida"}</h1>
      <div id="projectinfobild1">

        <img id="projectinfoimg1" src='https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/345269283_194771572957483_3973452224333018862_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=636mVky4F7oAX_xz3Bp&_nc_ht=scontent-arn2-1.xx&oh=00_AfBCHNzTWdqwi9rmnPbGhYc1Ja3LQ65K6YDHEYlfCYJ8UA&oe=645A0DEE' />

      </div>
      </div>



      <div className="slidertext">

        <h1 style={{margin: 0}}>{language === 'en' ? "Project overview" : "Projekt översikt"}</h1>
        <p className='projektinfotext' >{language === 'en' ? " I built a simple movie website based on an API that provides information about movies, TV shows, and games. Users can search and filter content based on the categories of movies, TV shows, or games. When users click on a single piece of content, such as a movie or a TV show, more detailed information about the selected content is displayed. The information includes the title, description, and trailer. To make the search and filtering functions more user-friendly and accessible, I implemented automatic updating of the page with each search or filter request so that users can quickly see the results. " : "  Jag byggde en enkel filmsida som är baserad på ett API som tillhandahåller information om filmer, serier och spel. Användare kan söka och filtrera innehåll baserat på kategorierna film, serier eller spel. När användare klickar på ett enskilt innehåll, som en film eller en serie, visas mer detaljerad information om det valda innehållet. Informationen inkluderar bland annat titel, beskrivning och trailer. För att göra sök- och filtreringsfunktionerna mer användarvänliga och tillgängliga, implementerade jag automatisk uppdatering av sidan vid varje sök- eller filtreringsförfrågan, så att användarna snabbt kan se resultatet"}
      


          </p>

        <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={25} /><Css3Original style={{ marginLeft: "10px" }} size={25} /> <JavascriptOriginal style={{ marginLeft: "10px" }} size={25} /> <NodejsOriginal style={{ marginLeft: "10px" }} size={25} /><span style={{ margin: "0", marginLeft: "10px", fontWeight: "bold", fontSize: "20px" }}> FM, SC</span></h4>
        <div className="demodiv">
        <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>
          <Link  to="https://movie-api-alpha-six.vercel.app/" target="_blank"className='livedemoknapp'> Live Demo

          </Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>
          <Link className="länkar2" style={{}} to="https://github.com/jonaelghid3y/Movie-API" target="_blank">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ margin: 0 }}> Repository</p>
              <AiFillGithub color='black' size={30} style={{ marginTop: "" }} />

            </div>
          </Link>
          </motion.div>


        </div>
        
        <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>

        <Link to={{ pathname: '/', hash: '#projectcontainer' }}className='gåtbksknapp' >{language === 'en' ? "Back" : "Tillbaka"}</Link>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default projectinfo2