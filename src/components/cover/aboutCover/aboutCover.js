import React from 'react'
import aboutCover2 from '../../../media/aboutCover2.jpeg'
import "./aboutCover.css"
import { NavLink } from "react-router-dom";


export default function AboutCover() {
    return (
        <div className="aboutCover-container">
            <div className="aboutCover-part">
                <h3>ABOUT JULIO FLOREZ</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum atque explicabo odio ipsam at voluptas possimus 
                tempore nulla id mollitia, doloremque itaque aspernatur aut? Consequatur commodi explicabo mollitia dolorum!
                Ipsum quas ad, consequuntur asperiores illo omnis doloremque itaque aspernatur aut?Consequatur commodi explicabo 
                mollitia dolorum!Ipsum quas ad, consequuntur asperiores illo omnis doloremque</p>
                <br/>
                <NavLink className="btn" to = "/About" onclick="toggleMenu();">READ MORE</NavLink>


            </div>

            {/* <div className="aboutCover-img">
                <img src={aboutCover2} alt=""></img>

            </div> */}
          

        </div>
        
    )
}