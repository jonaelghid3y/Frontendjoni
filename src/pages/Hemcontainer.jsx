import React, { useContext, useEffect, useState, useRef } from 'react';
import { LanguageContext } from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';
import { Link, useLocation } from 'react-router-dom';
import '@splidejs/react-splide/css';
import "@fontsource/source-sans-pro";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, BootstrapOriginal, NodejsOriginal, LinkedinOriginal, LinkedinOriginalWordmark } from 'devicons-react';
import ScrollToTopButton from '../Components/ScrollToTopButton'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import styled, { css } from 'styled-components';





function Hemcontainer() {

  const [showIcons, setShowIcons] = useState(false);
  const { language } = useContext(LanguageContext);

  const location = useLocation();

  const scrollToAbout = () => {
    const element = document.getElementById("aboutdiven");
    const container = document.getElementById("sidescroll2");
    const offset = 50;
    const x = element.getBoundingClientRect().left + window.pageXOffset - offset;
    container.scrollTo({ left: x, behavior: "smooth" });
  };


  const scrollToUtbildning = () => {
    const element = document.getElementById("utbildningdiv");
    const container = document.getElementById("sidescroll2");
    const offset = 50;
    const x = element.getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft - offset;
    container.scrollTo({ left: x, behavior: "smooth" });
  };


  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  const ids = ["id1", "id2", "id3", "id4", "id5", "id6"];

  const icons = [
    { icon: <Html5Original color="red" size="30" />, color: "red" },
    { icon: <Css3Original color="blue" size="30" />, color: "blue" },
    { icon: <BootstrapOriginal color="blue" size="30" />, color: "blue" },
    { icon: <JavascriptOriginal color="yellow" size="30" />, color: "yellow" },
    { icon: <NodejsOriginal color="yellow" size="30" />, color: "yellow" },
    { icon: <ReactOriginal color="turquoise" size="30" />, color: "turquoise" },
  ];

  const iconComponents = ids.map((id, index) => (
    <motion.div key={id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      {icons[index].icon}
    </motion.div>
  ));



  return (
    <Styledonepagediv>



      <Styledhemcontainer id="Hemcontainer">

        <Språkknapp />
        <motion.h1
          style={{ marginTop: "200px", fontWeight: "bold" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          id="hemcontainertitel"
        >
          {language === 'en' ? "HEY, I'M JONAEL GHIDEY" : "Hej, jag är Jonael Ghidey"}
        </motion.h1>
        <motion.p
          id="hemcontainertext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="fadein"
        >
          {language === 'en' ? 'A Front-end Developer that love to learn' : ' En frontend-utvecklare som älskar att lära mig'}
        </motion.p>

        <motion.div

          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}

          style={{ cursor: "pointer" }}

        >
          <ScrollLink
            id="projectknapp"
            to="projectcontainer"
            smooth={true}
            duration={500}
            offset={-70}
          >
            {language === 'en' ? 'Projects' : 'Projekt'}
          </ScrollLink>
        </motion.div>
        <motion.div id="techstackdiv" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} onAnimationComplete={() => setShowIcons(true)}>
          {showIcons && (



            <AnimatePresence>
              <h4>Techstack:</h4>
              {iconComponents}

            </AnimatePresence>
          )}

        </motion.div>



      </Styledhemcontainer>

      <Styledaboutcontainer id="aboutdiv">

        <Styledsidescroll2 id="sidescroll2">

          <Styledaboutsection id="aboutdiven">


            <Styledabouttextdiv style={{ backgroundColor: "rgb(245, 245, 245)" }}>

              <h1 id="abouth1" style={{ margin: "0", marginTop: "80px" }}>{language === 'en' ? "About me" : "Om mig"}</h1>
              <span style={{ width: "30px", height: "8px", backgroundColor: "#facf0f", borderRadius: "5px", margin: "10px" }} ></span>
              <p id="aboutp" style={{ fontSize: "18px" }}>{language === 'en' ? "Here you can find out more about my skills in programming, as well as my education and work experience by scrolling to the right." : "Ta reda på mer om mig, mina färdigheter inom programmering, samt min utbildning och arbetslivserfarenhet genom att scrolla till höger."}</p>


              <Styledaboutmediv>
                <div id="abouttextcontainer">

                  <h2 id="aboutheader" >{language === 'en' ? "Get to know me!" : "Lär känna mig!"}</h2>

                  <p style={{ marginBottom: "10px" }} id="abouttext" >{language === 'en' ? "I am  a self-driven frontend developer with experience in HTML, CSS, JavaScript, and React. I also have experience as a lead assembler and supervisor as an electrician, which has given me the ability to manage time and to priorities effectively, as well as lead and support a team. I believe that my passion and expertise as a frontend developer, combined with my leadership experience in other fields, make me an asset to your team." : "Jag är en självgående frontend-utvecklare med erfarenhet av HTML, CSS, JavaScript och React. Jag har också erfarenhet av att vara en ledande montör och arbetsledare som elektriker, vilket har gett mig förmågan att hantera tid och prioriteringar effektivt, liksom att leda och stödja ett team. Jag tror att min passion och kompetens som frontend-utvecklare, tillsammans med mina erfarenheter som ledare inom andra områden, gör mig till en tillgång för ditt team."}

                  </p>





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
                    <div className='skills'>Api</div>
                    <div className='skills'>Github</div>
                    <div className='skills'>Responsive design</div>
                  </div>



                  <h2 style={{ margin: "0", marginTop: "50px", marginBottom: "0px" }}>{language === 'en' ? "Languages" : "Språk"}</h2>
                  <div className="skillcontainer">
                    <div className='skills'>{language === 'en' ? "English" : "Engelska"}</div>
                    <div className='skills'>{language === 'en' ? "Swedish" : "Svenska"}</div>
                  </div>
                  <a id="motionsidoknapp" onClick={scrollToUtbildning}>
                    <motion.div
                      whileTap={{ scale: 0.8 }}
                      whileHover={{ scale: 1.2 }}
                      animate={{
                        x: [-10, 10, -10],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "mirror",
                        },
                      }}
                    >
                      <BsFillArrowRightCircleFill color='#facf0f' />
                    </motion.div>
                  </a>



                </div>
              </Styledaboutmediv>
            </Styledabouttextdiv>


          </Styledaboutsection>


          <Styledaboutsection >




            <Styledutbildningsdiv id="utbildningdiv" >


              <h1 style={{ margin: "0", marginTop: "80px", fontSize: "40px" }}>{language === 'en' ? "Experiences" : "Erfarenheter"}</h1>
              <span style={{ width: "28px", height: "6px", backgroundColor: "#facf0f", borderRadius: "5px", margin: "10px" }} ></span>
              <p style={{ margin: "0", fontSize: "18px", color: "gray" }}>{language === 'en' ? "My Education and workexperiences" : "Mina utbildningar och arbetserfarenhet"}</p>
              <div id="erfarenheter">

                <Styledutbildningsdiv1>


                  <h4 style={{ margin: "0", marginBottom: "10px" }}>{language === 'en' ? "Education" : "Utbildningar"}</h4>
                  <div className='utbildningar'>

                    <h6 className='utbildning'>{language === 'en' ? "Frontend development" : "Frontend utveckling"}, Jensen yrkeshögskola, Stockholm</h6>
                    <p className="utbildningarp" >{language === 'en' ? " During my studies as a frontend developer, I have learned how to create user-friendly websites and applications using HTML, CSS, JavaScript, and React. I have also developed my ability to solve technical problems and understand user needs. " : "Jag har lärt mig att skapa användarvänliga webbsidor och appar under min utbildning som frontendutvecklare. Genom att använda verktyg som HTML, CSS, JavaScript och React har jag fått en ökad förståelse för att skapa lösningar som passar användarens behov. Min utbildning har också bidragit till att utveckla min förmåga att lösa tekniska problem och hantera utmaningar som kan uppstå vid utveckling av webbapplikationer."} </p>
                    <i className='utbildning'>{language === 'en' ? "August 2023 - June 2024" : "Augusti 2023 - Juni 2024"}</i>
                  </div>
                  <div className='utbildningar'>
                    <h6 className='utbildning'>{language === 'Electrical and Energy Program; Electrical Engineering' ? "About" : "El och energiprogrammet; Elteknik,"} St:eriksgymnasium, Stockholm </h6>
                    <p className="utbildningarp"></p>
                    <i className='utbildning'>{language === 'en' ? "August 2011 - June 2014" : "Augusti 2011 - Juni 2014"}</i>
                  </div>

                </Styledutbildningsdiv1>



                <div id="arbetserfarenhetdiv">
                  <h4 style={{ margin: "0", marginBottom: "10px" }}>{language === 'en' ? "Work experience" : "Arbetserfarenhet"}</h4>
                  <div className='arbeteserfanhet'>
                    <h6 className='arbete'>{language === 'en' ? "Electrician leading assembler" : "Elektriker ledandemontör"}, Tekniska Lösningar AB</h6>
                    <p className="utbildningarp">{language === 'en' ? "I worked as a work supervisor, where I was responsible for several employees' tasks and planning. I also project-managed my own jobs and planned my own schedule." : "Arbetade som arbetlederare, där jag ansvarade för flera medarbetares arbetsuppgifter och plannering. jag projekterade även mina egna jobb samt plannerade mitt egna schema"}</p>
                    <i className='arbete'> {language === 'en' ? "June 2021 - July 2023" : "Juni 2021 - Juli 2023"}</i>
                  </div>

                  <div className='arbeteserfanhet'>
                    <h6 className='arbete'>{language === 'en' ? "Electrician" : "Elektriker"}, Tekniska Lösningar AB</h6>
                    <p className="utbildningarp">{language === 'en' ? "Worked as an electrican as a part of a team" : "Jobbade som elektriker i ett större team, där jag fick sammarbeta och arbeta med team"}</p>
                    <i className='arbete'>{language === 'en' ? "November 2016 - June 2021" : "November 2016 - Juni 2021"}</i>
                  </div>


                </div>

              </div>
              <a onClick={scrollToAbout} id="motionsidovänsterknapp">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    x: [-10, 10, -10],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "mirror",
                    },
                  }}
                >
                  <BsFillArrowLeftCircleFill color='#facf0f' />
                </motion.div>
              </a>
            </Styledutbildningsdiv>

          </Styledaboutsection>
        </Styledsidescroll2>
      </Styledaboutcontainer>

      <Styledprojectcontainer id="projectcontainer">

        <Styledvälkommendiv>

          <h1 id='projekth1'>{language === 'en' ? "Projects" : "Projekt"}</h1>
          <span style={{ width: "30px", height: "5px", backgroundColor: "#facf0f", borderRadius: "5px", margin: "10px" }} > </span>
          <p id="projektinfo" >{language === 'en' ? " Welcome to my portfolio page, showcasing my skills in HTML, CSS, JavaScript, React, and Node.js. Along with my personal web portfolio, here are some of my favorite projects that I have created. I am constantly working on new projects and will update this section as I develop more exciting ones"
            : "Välkommen till min portföljsida, där jag visar upp mina färdigheter i HTML, CSS, JavaScript, React och Node.js. Utöver min personliga webbportfölj, här är några av mina favoritprojekt som jag har skapat. Jag arbetar kontinuerligt med nya projekt och kommer att uppdatera den här sektionen allt eftersom jag utvecklar fler spännande projekt."} </p>

          <Styledprojectkort>
            <Styledkortcontainer>
              <div id="kort1" className='projektArbeten'></div>
              <h6 style={{ margin: 0 }}>{language === 'en' ? "E-commerce webbapplication" : "E-commerce webbapplikation"}</h6>
              <motion.div
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
               >

                <Link className='projektknappar' to="/projectinfo1" >{language === 'en' ? "Read more" : "läs mer"}</Link>
              </motion.div>


            </Styledkortcontainer>
            <Styledkortcontainer>
              <div id="kort2" className='projektArbeten'></div>

              <h6 style={{ margin: 0 }}>{language === 'en' ? "API based moviesite" : "API baserad filmsida"}</h6>
              <motion.div whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}>
                <Link className='projektknappar' to="/projectinfo2">{language === 'en' ? "Read more" : "läs mer"}</Link>
              </motion.div>


            </Styledkortcontainer>
            <Styledkortcontainer>
              <div id="kort3" className='projektArbeten'></div>

              <h6 style={{ margin: 0 }}>Netflix clone<span style={{ color: "red" }}> (coming soon)</span></h6>
              <motion.div whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}>
                <Link className='projektknappar'>{language === 'en' ? "Read more" : "läs mer"}</Link>
              </motion.div>

            </Styledkortcontainer>
          </Styledprojectkort>
        </Styledvälkommendiv>
      </Styledprojectcontainer>

      <Styledcontactdiv id="contactdiv">

        <h1 style={{ margin: "0", marginTop: "50px", fontSize: "50px" }}>Contact</h1>
        <span style={{ width: "30px", height: "4px", backgroundColor: "#facf0f", borderRadius: "5px", margin: "10px" }} ></span>
        <p id="contactp">{language === 'en' ? "Thank you for visiting my portfolio! For work collaboration or other inquiries, please feel free to reach out to me via email at jonaelghidey@hotmail.com. You can also check out my projects and code on my Github profile or read more about my experience and background on my LinkedIn page. I look forward to hearing from you!" : "Tack för att du besöker min portfolio! För arbets- eller samarbetsfrågor, kontakta mig via jonaelghidey@hotmail.com. Du kan också se mina projekt på Github och min erfarenhet på LinkedIn. Ser fram emot att höra från dig!"}</p>



        <Styledkontaktinfo>

          <div id="location">
            <GrMapLocation size={40} style={{ margin: 0, marginTop: "3px" }} ></GrMapLocation>
            <h4 style={{ margin: "0" }}>Stockholm, Sweden</h4>

          </div>

          <div className='icons'>
            <motion.div whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}>

              <Link to="https://www.linkedin.com/in/jonael-ghidey-51a780239/">
                <AiFillLinkedin style={{ color: "black" }} size={40} />
              </Link>
            </motion.div>
          </div>




          <a href="mailto:jonaelghidey@hotmail.com" id='mail'>
            <motion.div whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}>
              <AiOutlineMail size={40} style={{ margin: 0, marginTop: "-1px" }} />

            </motion.div>
          </a>



          <div className='icons'>
            <motion.div whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}>


              <Link to="https://github.com/jonaelghid3y">
                <AiFillGithub style={{ margin: 0, marginTop: "1px" }} size={40} color='black' />

              </Link>
            </motion.div>
          </div>




        </Styledkontaktinfo>

        <ScrollToTopButton />
      </Styledcontactdiv>
    </Styledonepagediv>



  );
}

const Styledhemcontainer = styled.div`
font-weight: light;
margin-top: 50px;
scroll-snap-align: start;
overflow: hidden;
background: url(https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/345180972_937166210657806_49748210578292787_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=4Cxvgh7zESUAX_S0EBJ&_nc_ht=scontent-arn2-1.xx&oh=00_AfCqTdZ1_sL56TxK14jDjZmQETCcHxMBtGUFOWIoP673HQ&oe=64597DC0);
background-size: cover;
height: 92vh;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
font-size: 30px;

@media (max-width: 768px) {

  margin-top: 50px;
  max-height:700px; 
  width: 100%;
  font-size: 20px;
  padding-bottom: 30px;
 
  }
`;

const Styledaboutcontainer = styled.div`

max-height: 115vh;
width: 100%;
background-size: cover;
font-size: 30px;
display: flex;
flex-direction: column;
gap: 20px;
scroll-behavior: smooth;

@media (max-width: 768px) {

max-height: 210vh;
width: 100%;
background-size: cover;
font-size: 30px;
display: flex;
flex-direction: column;
gap: 20px;
scroll-behavior: smooth;
 
  }
`;
const Styledutbildningsdiv = styled.div`

width: 100%;
  height: 100%;
  display: flex;
  color: #000000;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;


@media (max-width: 768px) {
 
  }
`;
const Styledutbildningsdiv1 = styled.div`

text-align: center;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;

@media (max-width: 768px) {
 
  }
`;



const Styledsidescroll2 = styled.div`
scroll-snap-align: start;
width: 100%;
height: 100%;
overflow-x: auto;
display: flex;
flex-wrap: nowrap;
scroll-behavior: smooth;
scroll-snap-type: x mandatory;
scroll-snap-points-x: repeat(100%);
scroll-snap-destination: 0% 0%;

@media (max-width: 768px) {


 
  }
`;

const Styledonepagediv = styled.div`
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
min-height: 290vh
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;

@media (max-width: 768px) {
  width: 100%;
  margin: 0 auto;
  }
`;

const Styledaboutsection = styled.div`

scroll-snap-align: start;
  background-color: rgb(233, 233, 233);
  background-size: cover;
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  overflow: hidden;


@media (max-width: 768px) {

  }
`;
const Styledabouttextdiv = styled.div`

width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
margin: 0


@media (max-width: 768px) {

  }
`;
const Styledprojectcontainer = styled.div`
padding-bottom: 50px;
margin-top: -5px;
scroll-snap-align: start;
border: 1px solid rgb(232, 232, 232);
background-color: rgb(255, 255, 255);
min-height: 81vh;
width: 99.9%;
background-size: cover;
font-size: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
scroll-behavior: smooth;

@media (max-width: 768px) {

  padding-bottom: 100px;
  margin-top: -5px;
  scroll-snap-align: start;
  border: 1px solid rgb(232, 232, 232);
  background-color: rgb(255, 255, 255);
  min-height: 81vh;
  width: 99.9%;
  background-size: cover;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;

  }
`;
const Styledvälkommendiv = styled.div`

height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;


@media (max-width: 768px) {

  }
`;

const Styledkortcontainer = styled.div`

width: 45h;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


@media (max-width: 768px) {

  width: 46vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  }
`;
const Styledprojectkort = styled.div`

margin-top: 100px;
height: 100%;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: row;
gap: 70px;

@media (max-width: 768px) {
  margin-top: 100px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 70px;

  }
`;
const Styledaboutmediv = styled.div`


padding-bottom: 40px;
width: 100%;
height: 100%;
margin-top: 50px;
display: flex;
align-items: self-start;
flex-direction: row;
justify-content: space-around;

@media (max-width: 768px) {
  padding-top: 30px;
  padding-bottom: 0px;
  width: 100%;
  height: 100%;
  margin-top: 0px;
  font-size: 30px;
 
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  }
`;
const Styledcontactdiv = styled.div`

scroll-snap-align: start;
background-color: rgb(245, 245, 245);
overflow: hidden;
padding-bottom: 80px;
min-height: 65vh;
width: 99.9%;
background-size: cover;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;



@media (max-width: 768px) {
  scroll-snap-align: start;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
  min-height: 80vh;
  width: 99.9%;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  }
`;
const Styledkontaktinfo = styled.div`

margin-top: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 600px;
  height: 20vh;
  gap: 50px;
  flex-direction: row;



@media (max-width: 768px) {
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 300px;
  max-height: 500px;
  gap: 50px;
  flex-direction: row;
  }
`;






export default Hemcontainer;

