import React from 'react'

function projectinfo2() {
  return (
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

        <p style={{}}>
          I denna filmsida fick jag bygga en dynamisk webbapplikation med hjälp av react och styledcompontens. Jag jobbade med ett api och fick hämta och sortera olika sorters data
        </p>

        <h4 style={{ margin: "0", fontSize: "20px" }}>skills: < ReactOriginal style={{ marginLeft: "10px" }} size={20} /><Css3Original size={20} /> <JavascriptOriginal size={20} /></h4>

        <a href='https://github.com/jonaelghid3y?tab=repositories' id="github" className="fa fa-github" style={{ fontSize: "25px", margin: "0", marginLeft: "-10px", marginTop: "15px" }}></a>
      </div>



    </div>
  </section>

  )
}

export default projectinfo2