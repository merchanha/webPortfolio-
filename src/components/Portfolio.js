import React, { useState, useEffect, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import Header from './Header'
import RingLoader from "react-spinners/RingLoader";
import Lightbox from "react-awesome-lightbox";
import "./Portfolio.css"








export default function Portfolio() {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 1000)

       
  }, [])
    

    


    return (
        <div className="containerPortfolio">
            <Header />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="textoPortafolio">
                <h2>PORTFOLIO</h2>
                <p>For most current pictures, please visit my <a href="https://instagram.com/julioflorez2?utm_medium=copy_link">Instagram.</a> </p>
                <br />
                <br />
                <br />



            </div>
          



            <div className="loader">

                {
                    loading ? 

                    <RingLoader color={"#FFFFFF"} loading={loading} size={70} />
                    
                    : 
                    <div>

                    <Gallery  photos={photos} onClick={openLightbox} />
                    <ModalGateway >
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel 
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>

                    </div>




                }



               
            </div>





             





        </div>
    )
}



