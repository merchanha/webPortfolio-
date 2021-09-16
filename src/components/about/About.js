import React, {useState, useEffect} from "react";
import Header from '../Header';
import aboutFoto from '../../media/aboutFoto.jpeg';
import './About.css';
import aboutStudio from '../../media/aboutStudio.jpg'
import TrashPolka from '../../media/tattoo4.jpeg'
import Realismo from '../../media/tatto6.jpeg'
import TattoColor from '../../media/tattoo7.jpeg'
import BlancoNegro from '../../media/tattoo5.jpeg'

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
                    </div>
                </div>
                {/* <div className="cardsAbout">
                <h2>Mis estilos</h2>
                <br/>
                <div class="card-group">
                    <div class="card">
                        <img src={aboutStudio} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Realismo en Grises</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={aboutStudio} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Color</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={aboutStudio} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Trash Polka Oriental</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={aboutStudio} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Black Work</h5>
                        </div>
                    </div>
                    </div>
                </div> */}
                <div class="photo">
                    <div class="me">
                        <h2>Arte y Piel</h2>
                        <h3>Studio</h3>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum atque explicabo odio ipsam at voluptas possimus tempore nulla id mollitia, doloremque itaque aspernatur aut? Consequatur commodi explicabo mollitia dolorum!
                            Ipsum quas ad, consequuntur asperiores illo omnis assumenda ab facere tenetur velit sequi ipsa debitis blanditiis numquam adipisci ullam consectetur, beatae error ut, minus labore magnam deserunt. Incidunt, rem culpa!
                            Laudantium cum voluptatum commodi tempora ullam vel, nostrum inventore eum aliquam hic error accusantium ipsa sapiente voluptate nobis quisquam nihil, earum voluptatem laborum! Laudantium autem odio, et dignissimos numquam eius?
                            Culpa voluptatibus id ipsam dolorem ducimus ipsa eius adipisci accusamus corrupti sequi magnam sint tenetur voluptas quaerat iure vitae repellendus itaque doloremque architecto obcaecati, rerum quidem molestiae et. Quod, consequatur?
                       
                        </p>
                    </div>
                    <img src={aboutStudio} alt="henry" />
                </div>
            </div>
            <div className="cardsAbout">
                <h2>My Style</h2>
                <h3 className="subtitulo-estilos">Contact me to get new tatto ideas and inspiration.</h3>
                <br/>
                <div class="card-group">
                    <div class="card">
                        <img src={Realismo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Realismo en Grises</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={TattoColor} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Color</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={TrashPolka} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Trash Polka Oriental</h5>
                        </div>
                    </div>
                    <div class="card">
                        <img src={BlancoNegro} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Black Work</h5>
                        </div>
                    </div>
                    </div>
                </div>
        </div>

    )
}
