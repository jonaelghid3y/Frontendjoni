import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AiFillGithub } from 'react-icons/ai';
import '@splidejs/react-splide/css';
import "@fontsource/source-sans-pro";
import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, BootstrapOriginal, NodejsOriginal, ThreejsOriginal } from 'devicons-react';


function Projectinfo5() {
  
  
const { language } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (




    <div className='sliderdiv'>

      <div id="projektinfo1div">

        <div id="projectinfo1kort">
          <h1 id="projectinfo1h1" style={{ margin: 0 }}>{language === 'en' ? "3D FASHION WEBBAPP" : "3D MODE SIDA"}</h1>
          <div id="projectinfobild1">

            <img id="projectinfoimg1" src='https://i.imgur.com/nt6iIJi.png' />

          </div>
        </div>



        <div className="slidertext">
       

         
        <h1 style={{margin: 0}} id="projectoverviewid">{language === 'en' ? "Project overview" : "Projekt översikt"}</h1>
          <p className='projektinfotext' >{language === 'en' ? " In my latest project, I decided to delve deep into the fascinating world of 3D web development. With the aid of Three.js, a popular JavaScript library for 3D visualizations, combined with React-three-fiber, which integrates Three.js with React, I was able to create a dynamic and interactive website where users can experience 3D modeling in a unique way. The main attraction of the site is two impressive 3D models, crafted in Blender, one of the most prominent software for 3D modeling and animation. Users can change outfits on these models, providing them with a sense of interactivity and engagement. To complement this, I created a section where visitors can read more about the collection, giving them a deeper understanding of the showcased garments." : " I mitt senaste projekt beslutade jag mig för att dyka djupt in i den fascinerande världen av 3D-webbutveckling. Med hjälp av Three.js, ett populärt JavaScript-bibliotek för 3D-visualiseringar, kombinerat med React-three-fiber, som integrerar Three.js med React, kunde jag skapa en dynamisk och interaktiv webbplats där användare kan uppleva 3D-modellering på ett unikt sätt. Huvudattraktionen på sidan är två imponerande 3D-modeller, skapade i Blender, en av de mest framstående mjukvarorna för 3D-modellering och animering. Användarna kan byta kläder på dessa modeller, vilket ger dem en känsla av interaktivitet och engagemang. För att komplettera detta skapade jag en avdelning där besökare kan läsa mer om kollektionen, vilket ger dem en djupare förståelse för de presenterade kläderna"}
            
          </p>

          <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={25} /><Css3Original style={{ marginLeft: "10px" }} size={25} /> <JavascriptOriginal style={{ marginLeft: "10px" }} size={25} /> <ThreejsOriginal style={{ marginLeft: "10px" }} size={25} /><span style={{ margin: "0", marginLeft: "10px", fontWeight: "bold", fontSize: "20px" }}> Framer-motion</span></h4>
          <div className="demodiv">

          <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>
           

            <Link to ="https://venturo.vercel.app/" target="_blank" className='livedemoknapp'> live demo

            </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.8 }}   whileHover={{ scale: 1.2 }}>
            <Link className="länkar2" style={{}} to="https://github.com/jonaelghid3y/3DFashion" target="_blank">
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

export default Projectinfo5