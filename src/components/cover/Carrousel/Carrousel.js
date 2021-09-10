
import  Carousel  from '../../../OtherFunction/Carousel';
import tattoo1 from "../../../media/tattoo1.jpeg";
import tatto6 from "../../../media/tatto6.jpeg";
import tattoo7 from  "../../../media/tattoo7.jpeg";
import tattoo2 from "../../../media/tattoo2.jpeg";
import tattoo3 from "../../../media/tattoo3.jpeg";
import tattoo4 from "../../../media/tattoo4.jpeg";
import tattoo5 from "../../../media/tattoo5.jpeg"
import "./Carrousel.css"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import { Link } from "react-router-dom";

import React, {useState, useEffect} from "react";


export default function Carrousel() {
    const data = [
      {
        image: `${tattoo1}`,
        caption: `<div>
          Oriental<br/><span>Next line</span>
        </div>`
      },
      {
        image: `${tatto6}`,
        caption: "<div>Realismo</div>"
      },
      {
        image: `${tattoo7}`,
        caption: "<div>Trash Polka</div>"
      },
      {
        image: `${tattoo2}`,
        caption: "<div>Retratos</div>"
      },
      {
        image: `${tattoo3}`,
        caption: "<div>San Francisco</div>"
      },
      {
        image: `${tattoo4}`,
        caption: "Darjeeling"
      },
      {
        image: `${tattoo5}`,
        caption: "<div>San Francisco</div>"
      },
      {
        image: `${tattoo5}`,
        caption: "<div>San Francisco</div>"
      },
      {
        image:  `${tattoo3}`,
        caption: "<div>San Francisco</div>"
      }
    ];
  
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
    return (
      <div className="App">
        
      
          

          
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={2000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                margin: "40px auto",
              }}
              
            />
              
          </div>
          <div className="texto">
            <h2>Portfolio</h2>
            <br/>
            <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
            <br/>

            <Link className="btnP" to = "/Portfolio" onclick="toggleMenu();"><IoIcons.IoPlayForwardOutline size={35}/></Link>

           


            </div>
        </div>
      
    );
  }
  