import React from 'react'
import logonegro from "../media/logonegro.jpeg"



export default function Header() {
    return (
        <div>
            <header>
       <a href="#" class="logo"><img className="logo" src={logonegro}></img></a>
       <div class="toggle" onclick="toggleMenu();"></div>
   
        <ul class="menu"> 
            <li><a href="#home" onclick="toggleMenu();">Home</a></li>
            <li><a href="#about"onclick="toggleMenu();">About Me</a></li>
            <li><a href="#portfolio"onclick="toggleMenu();">Projects</a></li>
            <li><a href="#services"onclick="toggleMenu();">Services</a></li>
            <li><a href="#contactme"onclick="toggleMenu();">Contact Me</a></li> 
            

        </ul>
    

   </header>

            
        </div>
    )
}
