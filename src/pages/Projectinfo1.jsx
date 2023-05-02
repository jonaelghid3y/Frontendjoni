
import React, { useContext } from 'react';
import { LanguageContext } from '../Components/LanguageContext';
import Språkknapp from '../Components/Språkknapp';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "@fontsource/source-sans-pro";
import { Html5Original, Css3Original, JavascriptOriginal, ReactOriginal, BootstrapOriginal, NodejsOriginal } from 'devicons-react';


function Projectinfo1() {
  return (
    
        


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



   
  )
}

export default Projectinfo1