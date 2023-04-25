import React, { useContext } from 'react';
import { LanguageContext } from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';


function About() {
  const { language } = useContext(LanguageContext);
  return (
    <div id="aboutdiv">
      <Språkknapp />
      <div id="sidescroll2">

        <section className='aboutsection'>


          <div id="abouttextdiv">

            <div>

              <h1 id="aboutheader" style={{fontSize: "60px",marginLeft: "200px" , marginBottom: "25px"}}>{language === 'en' ? "About" : "Om"}</h1>

              <p id="abouttext" style={{ marginLeft: "200px", width: "700px" }}>{language === 'en' ? "Hello, my name is Jonael - a self-driven frontend developer with experience in HTML, CSS, JavaScript, and React. I also have experience as a lead assembler and supervisor as an electrician, which has given me the ability to manage time and priorities effectively, as well as lead and support a team. I believe that my passion and expertise as a frontend developer, combined with my leadership experience in other fields, make me an asset to your team." : " Hej, jag heter Jonael - en självgående frontend-utvecklare med erfarenhet av HTML, CSS, JavaScript och React. Jag har också erfarenhet av att vara en ledande montör och arbetsledare som elektriker, vilket har gett mig förmågan att hantera tid och prioriteringar effektivt, liksom att leda och stödja ett team. Jag tror att min passion och kompetens som frontend-utvecklare, tillsammans med mina erfarenheter som ledare inom andra områden, gör mig till en tillgång för ditt team."}

              </p>

            </div>



            <div id="språk" >
              <h2>{language === 'en' ? "Language" : "Språk"}</h2>
              <h5 className='utbildning'>{language === 'en' ? "English" : "Engelska"}</h5>
              <i className='utbildning'> {language === 'en' ? "Fluent" : "Flytande"}</i>
              <h5 className='utbildning'>{language === 'en' ? "Swedish" : "Svenska"}</h5>
              <i className='utbildning'>{language === 'en' ? "Native speaker" : "Modersmål"}</i>

              <h2>{language === 'en' ? "Skills" : "Färdigheter"}</h2>
              <h5 className='utbildning'>{language === 'en' ? "English" : "Engelska"}</h5>
              <i className='utbildning'> {language === 'en' ? "Fluent" : "Flytande"}</i>
              <h5 className='utbildning'>{language === 'en' ? "Swedish" : "Svenska"}</h5>
              <i className='utbildning'>{language === 'en' ? "Native speaker" : "Modersmål"}</i>

            </div>

          </div>


        </section>


        <section className='aboutsection'>
          <div id="aboutsection2">

            

          <div id="utbildningsdiv">
                <h2>{language === 'en' ? "Education" : "Utbildningar"}</h2>
                <div className='utbildningar'>
                  <h5 className='utbildning'>{language === 'Electrical and Energy Program; Electrical Engineering' ? "About" : "El och energiprogrammet; Elteknik,"} St:eriksgymnasium, Stockholm </h5>
                  <i className='utbildning'>{language === 'en' ? "August 2011 - June 2014" : "Augusti 2011 - Juni 2014"}</i>
                </div>
                <div className='utbildningar'>
                  <h5 className='utbildning'>{language === 'en' ? "Frontend development" : "Frontend utveckling"}, Jensen yrkeshögskola, Stockholm</h5>
                  <i className='utbildning'>{language === 'en' ? "August 2023 - June 2024" : "Augusti 2023 - Juni 2024"}</i>
                </div>

              </div>

           




            


          </div>




        </section>



        <section className='aboutsection'>


        <div id="arbetserfarenhetdiv">
              <h2>{language === 'en' ? "Work experience" : "Arbetserfarenhet"}</h2>
              <div className='arbeteserfanhet'>
                <h5 className='arbete'>{language === 'en' ? "Barista" : "Caffebiträde"}, Kleinskitchen</h5>
                <i className='arbete'>{language === 'en' ? "August 2014 - August 2016" : "Januari 2014 - Augusti 2016"}</i>
              </div>
              <div className='arbeteserfanhet'>
                <h5 className='arbete'>{language === 'en' ? "Electricians Aprentince" : "Elektriker lärling"}, Höglunds elektriska AB</h5>
                <i className='arbete'>{language === 'en' ? "August 2016 - November 2017" : "Augusti 2016 - November 2017"}</i>
              </div>
              <div className='arbeteserfanhet'>
                <h5 className='arbete'>{language === 'en' ? "Electrician" : "Elektriker"}, Tekniska Lösningar AB</h5>
                <i className='arbete'>{language === 'en' ? "November 2017 - June 2021" : "November 2017 - Juni 2021"}</i>
              </div>
              <div className='arbeteserfanhet'>
                <h5 className='arbete'>{language === 'en' ? "Electrician leading assembler" : "Elektriker ledandemontör"}, Tekniska Lösningar AB</h5>
                <i className='arbete'> {language === 'en' ? "June 2021 - July 2023" : "Juni 2021 - Juli 2023"}</i>
              </div>
              
              </div>




        </section>




      </div>




    </div>
  )
}

export default About