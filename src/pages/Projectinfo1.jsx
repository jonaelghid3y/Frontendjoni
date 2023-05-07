
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


function Projectinfo1() {
  
  
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

            <img id="projectinfoimg1" src='https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/345254347_891303118836834_2437115972998287238_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=u0WPn9lI0bIAX9lyPAL&_nc_ht=scontent-arn2-1.xx&oh=00_AfB2Q0eoAQOLmh1kZy1N6024up3PDKWTydoMolvBqjl71Q&oe=6459FC11' />

          </div>
        </div>



        <div className="slidertext">
       

         
        <h1 style={{margin: 0}} id="projectoverviewid">{language === 'en' ? "Project overview" : "Projekt översikt"}</h1>
          <p className='projektinfotext' >{language === 'en' ? "I have developed an e-commerce web shop using Node.js and React, where users can browse products, view detailed product information, and add products to their shopping cart. The web shop also has an admin page where the administrator can edit existing products and add new ones. To enhance the user experience, I have implemented animations using the Framer Motion library. I am proud of my work and have utilized my knowledge in both frontend and backend development to create a functional and visually appealing web shop." : "  Jag har utvecklat en webbshop med hjälp av Node.js och React, där användare kan bläddra bland produkter, se detaljerad produktinformation och lägga till produkter i sin kundvagn. Webbshopen har också en admin-sida där administratören kan redigera befintliga produkter och lägga till nya. För att förbättra användarupplevelsen har jag implementerat animationer med hjälp av biblioteket Framer Motion. Jag är stolt över mitt arbete och har använt mina kunskaper i både Frontend- och Backend-utveckling för att skapa en funktionell och visuellt tilltalande webbshop. kan du översätta detta"}
            
          </p>

          <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={25} /><Css3Original style={{ marginLeft: "10px" }} size={25} /> <JavascriptOriginal style={{ marginLeft: "10px" }} size={25} /> <NodejsOriginal style={{ marginLeft: "10px" }} size={25} /><span style={{ margin: "0", marginLeft: "10px", fontWeight: "bold", fontSize: "20px" }}> FM, SC</span></h4>
          <div className="demodiv">

          <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>
           

            <Link to ="https://brokenrecords.vercel.app/" target="_blank" className='livedemoknapp'> Live Demo

            </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>
            <Link className="länkar2" style={{}} to="https://github.com/jonaelghid3y/Brokenrecords" target="_blank">
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

export default Projectinfo1