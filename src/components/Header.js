/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import logonegro from "../media/logonegro.jpeg"
import { SidebarData } from '../SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Link } from "react-router-dom";
import './cover/Cover.css';
import '../components/Header.css'
import './Navbar.css' 






export default function Header({isScrolling}) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


    return (
       
    <header className={`header ${isScrolling > 0 ? "scrolling": null}`}>
        
        
     

     <IconContext.Provider value={{ color: '#fff' }}>
         
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <Link to = "/" className="logo"><p>Julio Florez</p></Link>
    </header>

            
        
    )
}
