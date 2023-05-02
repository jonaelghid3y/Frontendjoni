import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';


function Footer() {
    
    return (


        <footer id="footer">

            <a  style={{color: "black"}}href='https://github.com/jonaelghid3y?tab=repositories' ><AiFillGithub/></a>
            <a  style={{color: "black"}}href='https://github.com/jonaelghid3y?tab=repositories' ><AiOutlineInstagram/></a>
            
            <a style={{color: "black"}} href="https://www.linkedin.com/in/jonael-ghidey-51a780239/" ><AiFillLinkedin/></a>



        </footer>


    )
}

export default Footer