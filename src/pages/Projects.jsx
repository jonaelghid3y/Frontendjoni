
import React, { useContext } from 'react';
import { LanguageContext } from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, BootstrapOriginal, NodejsOriginal } from 'devicons-react';






function Projects() {
  const { language } = useContext(LanguageContext);

  return (

    <div id="Projectcontainer">


      <div id="sidescroll">

        <section className="projectsection2">

          <Språkknapp />
          <div id="projektcontainer1">



            <div id="välkommendiv">
              <h1 id='projekth1'>{language === 'en' ? "WELCOME!" : "Välkommen!"}</h1>


              <p id="projektinfo">{language === 'en' ? " Welcome to my junior frontend developer project page! Here, you'll find a collection of my latest projects showcasing my skills in HTML, CSS, JavaScript, React and other technologies. From simple static web pages to dynamic web applications, I have worked on a variety of projects to hone my skills and gain practical experience. " : "Välkommen till min projektsida som junior frontend-utvecklare! Här hittar du en samling av mina senaste projekt som visar upp mina färdigheter i HTML, CSS, JavaScript, React och andra teknologier. Från enkla statiska webbsidor till dynamiska webbapplikationer har jag arbetat med en mängd olika projekt för att finslipa mina färdigheter och få praktisk erfarenhet."} </p>

            </div>


          </div>


        </section>
        <section style={{ marginRight: "50px" }} className="projectsection2">


          <div className='sliderdiv'>

            <div className="slider">

              <Splide aria-label="My Favorite Images">
                <SplideSlide>
                  <img className="center" src="../src/img/reactuppgiftslide1.jpg" style={{ paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                  <img src="../src/img/reactuppgiftslide2.jpg" style={{ paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                  <img src="../src/img/reactuppgiftslide4.jpg" style={{ paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
                  <img src="../src/img/reactuppgiftslide5.jpg" style={{ paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
                  <img src="../src/img/reactuppgiftslide6.jpg" style={{ paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 3" />
                </SplideSlide>
              </Splide>


            </div>




            <div className="slidertext">
              <h1>Databas driven e-commerce webbapplikation</h1>

              <p>
                Med hjälp ut av nodeJs och react har jag skapat en webbshopp, där användaren kan läsa om produkter, specifika produkter och lägg till i sin kundvagn. Det finns även en adminsida där man kan redigera produkter eller lägga till nya. Webbsidan innehåller även lite animationer som är skapade med biblioteket framemotion
              </p>

              <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={20} /><Css3Original style={{ marginLeft: "10px" }} size={20} /> <JavascriptOriginal style={{ marginLeft: "10px" }} size={20} /> <NodejsOriginal style={{ marginLeft: "10px" }} /><span style={{ margin: "0", marginLeft: "10px", fontWeight: "500", fontSize: "15px" }}>FM,SC</span></h4>
              <a href='https://github.com/jonaelghid3y/Kunskapskontroll--gruppuppgift-React' id="github" className="fa fa-github" style={{ fontSize: "25px", margin: "0", marginLeft: "-10px", marginTop: "15px" }}></a>
            </div>
          </div>

        </section>

        <section style={{ marginRight: "50px" }} className="projectsection2">

          <div className='sliderdiv'>
            <div className="slider">
              <Splide aria-label="My Favorite Images">
                <SplideSlide>
                  <img src="../src/img/dynamiskappbild1.jpg" style={{ paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                  <img src="../src/img/dynamiskappbild2.jpg" style={{ paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                  <img src="../src/img/dynamiskappbild3.jpg" style={{ paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 2" />
                </SplideSlide>
              </Splide>

            </div>





            <div className="slidertext">
              <h1>Dynamisk Webbapplikation, API baserad filmsida</h1>

              <p style={{ }}>
                I denna filmsida fick jag bygga en dynamisk webbapplikation med hjälp av react och styledcompontens. Jag jobbade med ett api och fick hämta och sortera olika sorters data
              </p>

              <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={20} /><Css3Original size={20} /> <JavascriptOriginal size={20} /></h4>

              <a href='https://github.com/jonaelghid3y?tab=repositories' id="github" className="fa fa-github" style={{ fontSize: "25px", margin: "0", marginLeft: "-10px", marginTop: "15px" }}></a>
            </div>



          </div>
        </section>

        <section style={{ marginRight: "50px" }} className="projectsection2">

          <div className='sliderdiv'>
            <div className="slider">
              <Splide aria-labelledby="My Favorite Images">
                <SplideSlide>
                  <img src="../src/img/comingsoon.jpg" style={{filter: "blur(10px)", paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 1" />
                </SplideSlide>
                
              </Splide>

            </div>




            <div className="slidertext">
              <h1>Dynamisk webbapplikation Netflix clone</h1><h1 style={{color: "red"}}>(coming soon)</h1>

              <p>
                En av projekten jag håller på att jobba på just nu!, en netflix klon byggt på ett API
              </p>
              <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={20} /><Css3Original size={20} /> <JavascriptOriginal size={20} /> <NodejsOriginal /></h4>
              <a href='https://github.com/jonaelghid3y?tab=repositories' id="github" className="fa fa-github" style={{ fontSize: "25px", margin: "0", marginLeft: "-10px", marginTop: "15px" }}></a>

            </div>

          </div>

        </section>



      </div>






    </div>

  )
}

export default Projects