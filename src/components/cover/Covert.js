import React, {useState, useEffect} from "react";
import './Cover.css'
import coverVideo from "../../media/coverVideo3.mp4"
import Header from '../Header'
import Logoblanco from '../../media/logoblanco2.png'
import { NavLink } from "react-router-dom";


export default function Covert() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = ()=>{
      const position = window.pageYOffset;
      setScrollHeight(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    },[scrollHeight])
  
    return (
        
        <div className="cover-container">
            
            
            <video className="video" src= {coverVideo} autoPlay loop muted></video>
            <Header isScrolling = {scrollHeight}/>
            <div className="centro">
            
            
            <NavLink to = "/About" className="logoB"><img className="logoB"  src={Logoblanco}></img></NavLink>
            

            </div>
            </div>

          
            
            
            
        

    )
}
