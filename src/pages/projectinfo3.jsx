import React from 'react'

function projectinfo3() {
  return (
     <section style={{ marginRight: "50px" }} className="projectsection2">

            <div className='sliderdiv'>
              <div className="slider">
                <Splide aria-labelledby="My Favorite Images">
                  <SplideSlide>
                    <img src="../src/img/comingsoon.jpg" style={{ filter: "blur(10px)", paddingLeft: "8px", height: '350px', widht: '380px' }} alt="Image 1" />
                  </SplideSlide>

                </Splide>

              </div>




              <div className="slidertext">
                <h1>Dynamisk webbapplikation Netflix clone</h1><h1 style={{ color: "red" }}>(coming soon)</h1>

                <p>
                  En av projekten jag håller på att jobba på just nu!, en netflix klon byggt på ett API
                </p>
                <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={20} /><Css3Original size={20} /> <JavascriptOriginal size={20} /> <NodejsOriginal /></h4>
                <a href='https://github.com/jonaelghid3y?tab=repositories' id="github" className="fa fa-github" style={{ fontSize: "25px", margin: "0", marginLeft: "-10px", marginTop: "15px" }}></a>

              </div>

            </div>

          </section>

  )
}

export default projectinfo3