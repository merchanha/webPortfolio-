import React from 'react'
import logonegro from "../media/logonegro.jpeg"
import { NavLink } from "react-router-dom";
import Cover from './cover/Cover.css';




export default function Header() {
    return (
        <div>
    <header>
       <NavLink to = "/" class="logo"><img className="logo" src={logonegro}></img></NavLink>
       <div class="toggle" onclick="toggleMenu();"></div>
   
        <ul> 
        
            <li><NavLink to = "/" onclick="toggleMenu();">Home</NavLink></li>
            <li><NavLink to = "/About" onclick="toggleMenu();">About</NavLink></li>
            <li><NavLink to = "/Contact" onclick="toggleMenu();">Contact</NavLink></li>
            <li><NavLink to = "/Portfolio" onclick="toggleMenu();">Portfolio</NavLink></li>
            

        </ul>
    

   </header>

            
        </div>
    )
}
