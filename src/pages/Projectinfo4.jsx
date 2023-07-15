import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AiFillGithub } from 'react-icons/ai';
import '@splidejs/react-splide/css';
import "@fontsource/source-sans-pro";
import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, BootstrapOriginal, NodejsOriginal } from 'devicons-react';


function Projectinfo4() {
  
  
const { language } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (




    <div className='sliderdiv'>

      <div id="projektinfo1div">

        <div id="projectinfo1kort">
          <h1 id="projectinfo1h1" style={{ margin: 0 }}>{language === 'en' ? "Database-driven e-commerce web application" : "Databas driven e-commerce webbapplikation"}</h1>
          <div id="projectinfobild1">

            <img id="projectinfoimg1" src='https://i.imgur.com/plJJ92l.jpg' />

          </div>
        </div>



        <div className="slidertext">
       

         
        <h1 style={{margin: 0}} id="projectoverviewid">{language === 'en' ? "Project overview" : "Projekt översikt"}</h1>
          <p className='projektinfotext' >{language === 'en' ? " Our goal for this project was to improve brokenrecords by addressing the areas we couldn't focus on in the first version. We worked on creating a more visually appealing design, improving the UX and UI. We also made sure the web application is responsive and mobile-friendly, and we added some cool features to make it even better. This project was an amazing opportunity for us to showcase our skills in both front-end and back-end development while pushing ourselves to overcome challenges." : "  Jag har utvecklat en webbshop med hjälp av Node.js och React, där användare kan bläddra bland produkter, se detaljerad produktinformation och lägga till produkter i sin kundvagn. Webbshopen har också en admin-sida där administratören kan redigera befintliga produkter och lägga till nya. För att förbättra användarupplevelsen har jag implementerat animationer med hjälp av biblioteket Framer Motion. Jag har använt mina kunskaper i både Frontend- och Backend-utveckling för att skapa en funktionell och visuellt tilltalande webbshop."}
            
          </p>

          <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={25} /><Css3Original style={{ marginLeft: "10px" }} size={25} /> <JavascriptOriginal style={{ marginLeft: "10px" }} size={25} /> <NodejsOriginal style={{ marginLeft: "10px" }} size={25} /><span style={{ margin: "0", marginLeft: "10px", fontWeight: "bold", fontSize: "20px" }}> FM, SC</span></h4>
          <div className="demodiv">

          <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>
           

            <Link to ="https://brokenrecords.vercel.app/" target="_blank" className='livedemoknapp'> live demo

            </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>
            <Link className="länkar2" style={{}} to="https://github.com/jonaelghid3y/Brokenrecords2" target="_blank">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ margin: 0 }}> Repository</p>
                <AiFillGithub color='black' size={30} style={{ marginTop: "" }} />

              </div>

            </Link>
            </motion.div>


          </div>

          <motion.div whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}>

            <Link to={{ pathname: '/', hash: '#projectcontainer' }} className='gåtbksknapp' > {language === 'en' ? "Back" : "Tillbaka"} </Link>
          </motion.div>
        </div>
      </div>
    </div>




  )
}

export default Projectinfo4