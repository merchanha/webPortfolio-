import React, {useState, useEffect} from "react";
import './Cover.css'
import coverVideo from "../../media/coverVideo3.mp4"
import Header from '../Header'


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
            
            <h1>Julio Florez</h1>
            <br/>
            <h2>Tattoo Artist</h2>

            </div>
            </div>

          
            
            
            
        

    )
}
