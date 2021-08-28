import React from 'react'
import logonegro from "../media/logonegro.jpeg"
import { NavLink } from "react-router-dom";
import Cover from './cover/Cover.css';




export default function Header() {
    return (
        <div>
    <header>
       <a href="#" class="logo"><img className="logo" src={logonegro}></img></a>
       <div class="toggle" onclick="toggleMenu();"></div>
   
        <ul className="menu"> 
        
            <li><NavLink to = "/" onclick="toggleMenu();">Home</NavLink></li>
            <li><NavLink to = "/About" onclick="toggleMenu();">About</NavLink></li>
            <li><NavLink to = "/Contact" onclick="toggleMenu();">Contact</NavLink></li>
            <li><NavLink to = "/Portfolio" onclick="toggleMenu();">Portfolio</NavLink></li>
            

        </ul>
    

   </header>

            
        </div>
    )
}
