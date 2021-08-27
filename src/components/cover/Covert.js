import React from 'react'
import Cover from './Cover.css'
import coverVideo from "../../media/coverVideo.mp4"
import Header from '../Header'


export default function Covert() {
    return (
        
        <div className="cover-container">
            
            
            <video className="video" src= {coverVideo} autoPlay loop muted></video>
            <div><Header/></div>
            <div className="centro">
            
            <h1>Julio Florez</h1>
            <br/>
            <h2>Tattoo Artist</h2>

            </div>
            </div>

          
            
            
            
        

    )
}
