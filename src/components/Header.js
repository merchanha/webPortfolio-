/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import logonegro from "../media/logonegro.jpeg"
import { NavLink } from "react-router-dom";
import './cover/Cover.css';
import '../components/Header.css'





export default function Header({isScrolling}) {
    return (
       
    <header className={`header ${isScrolling > 0 ? "scrolling": null}`}>
       {/* <div class="toggle" onclick="toggleMenu();"></div> */}

       <NavLink to = "/" class="NombreNavBar"><p>Julio Florez</p></NavLink>
        <ul> 
        
            <li><NavLink to = "/" onclick="toggleMenu();">Home</NavLink></li>
            <li><NavLink to = "/About" onclick="toggleMenu();">About</NavLink></li>
            <li><NavLink to = "/Contact" onclick="toggleMenu();">Contact</NavLink></li>
            <li><NavLink to = "/Portfolio" onclick="toggleMenu();">Portfolio</NavLink></li>
            

        </ul>

    </header>

            
        
    )
}
