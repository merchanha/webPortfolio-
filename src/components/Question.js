
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

             <div  className="containerQquestion">
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>


               <h1 className="headerFaq">FREQUENTLY ASKED QUESTIONS</h1>
               <br/>

               <ul>
                 <li><h2>•	What should I bring to my consultation or appointment?</h2>
                 <p>Always bring your state issued identification card. Also bring any reference pictures you might have.</p>
                 </li>

                 <li><h2>•	How old do I have to be to get tattooed?</h2>
                 <p>
                   If you are 16 or 17 years old your parent or legal guardian must be present when you are being tattooed and 
                   you must give us a notarized copy of the Minor Consent Form. Click here to download the form. Even with parental consent, 
                   it is up to the artist's and business owner's discretion to approve or deny service on a minor.</p>
                 </li>

                 <li><h2>•	How old do I have to be to get pierced?</h2>
                 <p>We currently do not offer piercing services, but carry a variety of jewelry for sale. It is against the law 
                   in Florida to pierce any minor without a notarized form - click here to download. In addition to the form, minors 
                   under the age of 16 must be accompanied by aparent or legal guardian as specified in section 381.0075, 
                   Florida Statutes. </p>
                 </li>

                 <li><h2>•	How are prices determined?</h2>
                 <p>Most artists have a set hourly price, this varies from artist to artist. Depending on the piece, 
                   the artist might be able to set a fixed price. For larger pieces (ie. full sleeves, full back pieces, etc) 
                   the artist can split the charges per session if it is more convenient for both parties. </p>
                 </li>

                 <li><h2>•	Do you take walk-ins?</h2>
                 <p>Although appointments are recommended, we DO take walk-ins. </p>
                 </li>

                 <li><h2>•	If I take a design or reference, will you tattoo that exact design?</h2>
                 <p>It depends on the reference - if it is a portrait, of course! Given that we are an all custom studio, 
                   we create designs uniquely for every client. Depending on what you want to get done, we can work with you 
                   to make that image unique. If you have a picture of a tattoo that already exists on someone else, we will 
                   create something similar - but we will not tattoo the same design. (No respected tattoo artist will copy or 
                   replicate another artist's tattoo) </p>
                 </li>

                 <li><h2>•	Is there a cancellation policy?</h2>
                 <p>Yes, any cancellation or re-schedule must be done at least 48 hours prior to your original appointment. 
                   Deposits may be refunded or transferred to another appointment date upon the artist's discretion. 
                   Repeated re-scheduling may result in forfeiting the deposit. </p>
                 </li>







               </ul>
            
            </div>
               
        </div>

       
    )
}
