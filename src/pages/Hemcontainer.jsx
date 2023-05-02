import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';
import { Link, useLocation } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "@fontsource/source-sans-pro";
import { AiFillCompass, AiFillLinkedin } from 'react-icons/ai';
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, BootstrapOriginal, NodejsOriginal, LinkedinOriginal, LinkedinOriginalWordmark } from 'devicons-react';
import ScrollToTopButton from '../Components/ScrollToTopButton'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';





function Hemcontainer() {
  const { language } = useContext(LanguageContext);
  const location = useLocation();





  return (
    <div id="onepagecontainer">



      <div id="Hemcontainer">

        <Språkknapp />
        <h1 style={{ marginTop: "200px" , fontWeight: "bold"}} id="hemcontainertitel" className="fadein">{language === 'en' ? "Hey, I'M JONAEL GHIDEY" : "Hej! jag är Jonael Ghidey!"}</h1>
        <p id="hemcontainertext" className="fadein">{language === 'en' ? 'A frontend developer student that love to learn' : ' En Front-endutvecklare som älskar att lära mig!'}</p>
        <ScrollLink id="projectknapp"
          to="projectcontainer"
          smooth={true}
          duration={500}
          offset={-70}
        >
          {language === 'en' ? 'Projects' : 'Projekt'}
        </ScrollLink>
        <div id="techstackdiv">

          <h4>Techstack:</h4>
          <Html5Original color="red" size="30" />
          <Css3Original color="blue" size="30" />
          <BootstrapOriginal color="blue" size="30" />
          <JavascriptOriginal color="yellow" size="30" />
          <NodejsOriginal color="yellow" size="30" />
          <ReactOriginal color="torquise" size="30" />
        </div>



      </div>

      <div id="aboutdiv">

        <div id="sidescroll2">

          <section className='aboutsection'>


            <div id="abouttextdiv" style={{backgroundColor: "rgb(245, 245, 245)"}}>

              <h1  id="abouth1"style={{ margin: "0", marginTop: "80px" }}>{language === 'en' ? "About me" : "Om mig!"}</h1>
              <span style={{ width: "30px", height: "8px", backgroundColor: "blueviolet", borderRadius: "5px", margin: "10px" }} ></span>
              <p id="aboutp">{language === 'en' ? "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology, If you scroll to the right you can read about my education and work experience" : "Här hittar du mer information om mig, vad jag gör, och mina nuvarande färdigheter främst inom programmering och teknik. Om du skrollar åt höger kan du läsa om min utbildning och arbetslivserfarenhet."}</p>


              <div style={{ margin: 0 }} id="aboutmediv">
                <div id="abouttextcontainer">

                  <h2 id="aboutheader" >{language === 'en' ? "get to know me!" : "Lär känna mig!"}</h2>

                  <p style={{marginBottom: "10px"}} id="abouttext" >{language === 'en' ? "Hello, my name is Jonael - a self-driven frontend developer with experience in HTML, CSS, JavaScript, and React. I also have experience as a lead assembler and supervisor as an electrician, which has given me the ability to manage time and priorities effectively, as well as lead and support a team. I believe that my passion and expertise as a frontend developer, combined with my leadership experience in other fields, make me an asset to your team." : " Hej, jag heter Jonael - en självgående frontend-utvecklare med erfarenhet av HTML, CSS, JavaScript och React. Jag har också erfarenhet av att vara en ledande montör och arbetsledare som elektriker, vilket har gett mig förmågan att hantera tid och prioriteringar effektivt, liksom att leda och stödja ett team. Jag tror att min passion och kompetens som frontend-utvecklare, tillsammans med mina erfarenheter som ledare inom andra områden, gör mig till en tillgång för ditt team."}

                  </p>
                  <motion.div id="motionuppknapp"
      animate={{ x: [0, 20, 0] }}
      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
    >
      <BsFillArrowRightCircleFill color='blueviolet' />
    </motion.div>
                </div>



                <div id="språk" >

                  <h2 style={{ margin: 0, marginBottom: "10px" }}>{language === 'en' ? "Skills" : "Färdigheter"}</h2>
                  <div className="skillcontainer">
                    <div className='skills'>Html</div>
                    <div className='skills'>Javascript</div>
                    <div className='skills'>Css</div>
                    <div className='skills'>React</div>
                    <div className='skills'>Nodejs</div>

                    <div className='skills'>Figma</div>
                    <div className='skills'>Bootstrap</div>
                    <div className='skills'>Api:S</div>
                    <div className='skills'>Github</div>
                    <div className='skills'>Responsive design</div>
                  </div>



                  <h2 style={{ margin: "0", marginTop: "50px", marginBottom: "0px" }}>{language === 'en' ? "Languages" : "Språk"}</h2>
                  <div className="skillcontainer">
                    <div className='skills'>{language === 'en' ? "English" : "Engelska"}</div>
                    <div className='skills'>{language === 'en' ? "Swedish" : "Svenska"}</div>
                  </div>



                </div>
              </div>
            </div>


          </section>


          <section className='aboutsection'>




            <div id="utbildningsdiv">

              <h1 style={{ margin: "0", marginTop: "80px",fontSize: "40px" }}>{language === 'en' ? "Experiences" : "Erfarenheter"}</h1>
              <span style={{ width: "28px", height: "6px", backgroundColor: "blueviolet", borderRadius: "5px", margin: "10px" }} ></span>
              <p style={{ margin: "0", fontSize: "18px", color: "gray" }}>{language === 'en' ? "My Education and workexperiences" : "Mina utbildningar och arbetserfarenhet"}</p>
              <div id="erfarenheter">
                <div id="utbildningsdiv1">


                  <h4 style={{ margin: "0", marginBottom: "10px" }}>{language === 'en' ? "Education" : "Utbildningar"}</h4>
                  <div className='utbildningar'>

                    <h6 className='utbildning'>{language === 'en' ? "Frontend development" : "Frontend utveckling"}, Jensen yrkeshögskola, Stockholm</h6>
                    <p  className="utbildningarp" >Min nuvarande utbilding där jag får lära mig grunderna inom frontendutveckling<br />samt ux och ui och agil projekt metodik</p>
                    <i className='utbildning'>{language === 'en' ? "August 2023 - June 2024" : "Augusti 2023 - Juni 2024"}</i>
                  </div>
                  <div className='utbildningar'>
                    <h6 className='utbildning'>{language === 'Electrical and Energy Program; Electrical Engineering' ? "About" : "El och energiprogrammet; Elteknik,"} St:eriksgymnasium, Stockholm </h6>
                    <p className="utbildningarp">Min första utbildning, där jag utbildade mig till elektriker</p>
                    <i className='utbildning'>{language === 'en' ? "August 2011 - June 2014" : "Augusti 2011 - Juni 2014"}</i>
                  </div>

                </div>



                <div id="arbetserfarenhetdiv">
                  <h4 style={{ margin: "0", marginBottom: "10px" }}>{language === 'en' ? "Work experience" : "Arbetserfarenhet"}</h4>
                  <div className='arbeteserfanhet'>
                    <h6 className='arbete'>{language === 'en' ? "Electrician leading assembler" : "Elektriker ledandemontör"}, Tekniska Lösningar AB</h6>
                    <p className="utbildningarp">Arbetade som arbetlederare, där jag ansvarade för flera medarbetares arbetsuppgifter och plannering. jag projekterade även mina egna jobb samt plannerade mitt egna schema</p>
                    <i className='arbete'> {language === 'en' ? "June 2021 - July 2023" : "Juni 2021 - Juli 2023"}</i>
                  </div>

                  <div className='arbeteserfanhet'>
                    <h6 className='arbete'>{language === 'en' ? "Electrician" : "Elektriker"}, Tekniska Lösningar AB</h6>
                    <p className="utbildningarp">Jobbade som en del av ett team, där vi hade projekt med många olika moment</p>
                    <i className='arbete'>{language === 'en' ? "November 2016 - June 2021" : "November 2016 - Juni 2021"}</i>
                  </div>


                </div>
              </div>
            </div>

          </section>
        </div>
      </div>

      <div id="projectcontainer">










        <div id="välkommendiv">

          <h1 id='projekth1'>{language === 'en' ? "Projects" : "Projekt"}</h1>
          <span style={{ width: "30px", height: "5px", backgroundColor: "blueviolet", borderRadius: "5px", margin: "10px" }} > </span>
          <p id="projektinfo" >{language === 'en' ? " Welcome to my portfolio page, showcasing my skills in HTML, CSS, JavaScript, React, and Node.js. Along with my personal web portfolio, here are some of my favorite projects that I have created. I am constantly working on new projects and will update this section as I develop more exciting ones" : "Välkommen till min portföljsida, där jag visar upp mina färdigheter i HTML, CSS, JavaScript, React och Node.js. Förutom min personliga webbportfölj, här är några av mina favoritprojekt som jag har skapat. Jag arbetar kontinuerligt med nya projekt och kommer att uppdatera den här sektionen allt eftersom jag utvecklar fler spännande projekt."} </p>

          <div id="projektkort">
            <div className='kortcontainer'>
              <div id="kort1" className='projektArbeten'></div>
              <h6 style={{ margin: 0 }}>E-commerce webbapplikation</h6>

              <Link className='projektknappar' to="/projectinfo1" >Läs mer</Link>

            </div>
            <div className='kortcontainer'>
              <div id="kort2" className='projektArbeten'></div>

              <h6 style={{ margin: 0 }}> API baserad filmsida</h6>

              <Link className='projektknappar'>Läs mer</Link>

            </div>
            <div className='kortcontainer'>
              <div id="kort3" className='projektArbeten'></div>

              <h6 style={{ margin: 0 }}>Netflix clone<span style={{ color: "red" }}> (coming soon)</span></h6>

              <Link className='projektknappar'>Läs mer</Link>
            </div>



          </div>



        </div>












      </div>

      <div id="contactdiv">

        <h1 style={{ margin: "0", marginTop: "50px", fontSize: "50px" }}>Contact</h1>
        <span style={{ width: "30px", height: "4px", backgroundColor: "blueviolet", borderRadius: "5px", margin: "10px" }} ></span>
        <p id="contactp"> Hej och tack för att du besöker min portfolio! Om du vill nå mig angående arbete, samarbete eller andra frågor, så kan du enkelt nå mig via mejl på [din e-postadress här]. Du kan också ta en titt på mina projekt och kod på min Github-profil eller läsa mer om min erfarenhet och bakgrund på min LinkedIn-sida. Jag ser fram emot att höra från dig!"</p>



        <div id="kontaktinfo">

          <div id="location">
            <GrMapLocation size={40} style={{ margin: 0, marginTop: "3px" }} ></GrMapLocation>
            <h4 style={{ margin: "0" }}>Stockholm, Sweden</h4>

          </div>

          <div className='icons'>
            <Link to="https://www.linkedin.com/in/jonael-ghidey-51a780239/">
              <AiFillLinkedin style={{ color: "black" }} size={40} />
            </Link>
          </div>




          <div id="mail">

            <AiOutlineMail size={40} style={{ margin: 0, marginTop: "-1px" }} />

            <h4 style={{ margin: "0" }}>jonaelghidey@hotmail.com</h4>
          </div>



          <div className='icons'>
            <Link to="https://github.com/jonaelghid3y">
              <AiFillGithub style={{ margin: 0, marginTop: "1px" }} size={40} color='black' />

            </Link>
          </div>




        </div>
      
  <ScrollToTopButton />



        




      </div>







    </div>



  );
}

export default Hemcontainer;

