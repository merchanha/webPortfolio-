import React, {useState, useEffect} from "react";
import Header from '../Header';
import aboutFoto from '../../media/aboutFoto.jpeg';
import './About.css';

export default function About() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = ()=>{
      const position = window.pageYOffset;
      setScrollHeight(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    },[scrollHeight])
   
  
    return (

        <div className="containerAbout">
            <Header isScrolling = {scrollHeight}/>

            <div className="about" id="about">
                <h1 class="headings">ABOUT ME</h1>
                <hr></hr>
                
                <div class="photo">
                    <img src={aboutFoto} alt="henry" />

                    <div class="me">
                        <h2>Julio Florez</h2>
                        <h3>Tattoo Artist</h3>
                        <br/>


                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum atque explicabo odio ipsam at voluptas possimus tempore nulla id mollitia, doloremque itaque aspernatur aut? Consequatur commodi explicabo mollitia dolorum!
                            Ipsum quas ad, consequuntur asperiores illo omnis assumenda ab facere tenetur velit sequi ipsa debitis blanditiis numquam adipisci ullam consectetur, beatae error ut, minus labore magnam deserunt. Incidunt, rem culpa!
                            Laudantium cum voluptatum commodi tempora ullam vel, nostrum inventore eum aliquam hic error accusantium ipsa sapiente voluptate nobis quisquam nihil, earum voluptatem laborum! Laudantium autem odio, et dignissimos numquam eius?
                            Culpa voluptatibus id ipsam dolorem ducimus ipsa eius adipisci accusamus corrupti sequi magnam sint tenetur voluptas quaerat iure vitae repellendus itaque doloremque architecto obcaecati, rerum quidem molestiae et. Quod, consequatur?


                        </p>
                        <br />


                        <div class="gallery0">



                            <img src={aboutFoto} alt="" />
                            <img src={aboutFoto} alt="" />
                            <img src={aboutFoto} alt="" />
                            <img src={aboutFoto} alt="" />

                        </div>



                    </div>


                </div>
                <div className="parrafo2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum atque explicabo odio ipsam at voluptas possimus tempore nulla id mollitia, doloremque itaque aspernatur aut? Consequatur commodi explicabo mollitia dolorum!
                        Ipsum quas ad, consequuntur asperiores illo omnis assumenda ab facere tenetur velit sequi ipsa debitis blanditiis numquam adipisci ullam consectetur, beatae error ut, minus labore magnam deserunt. Incidunt, rem culpa!

                    </p>
                </div>

            </div>
        </div>

    )
}
