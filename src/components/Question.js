
import React, {useState, useEffect} from "react";
import Header from './Header';

export default function Question() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = ()=>{
      const position = window.pageYOffset;
      setScrollHeight(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    },[scrollHeight])
   
    return (
        <div>
             <Header isScrolling = {scrollHeight}/>

             <div containerQquestion>
            
            </div>
               
        </div>

       
    )
}
