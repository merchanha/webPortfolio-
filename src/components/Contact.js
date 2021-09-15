import React, { useState, useEffect } from "react";
import Header from './Header'
import "./Contact.css"



export default function Contact() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight])

    return (
        <div className="containerContact">

            <Header />


            <div class="contact" id="contactme">
                <div class="headings2">
                    <h1>Leave me a Message</h1>

                    <br></br>
                </div>

                <div class="content">
                    <div class="contactinfo">
                        <h3 id="contact">Contact Info</h3>
                        <div class="contactbox1">


                            <div class="box1">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="text">
                                    <h3>Adress</h3>
                                    <p>Buenos Aires Argentina Palermo Migueletes 323</p>
                                </div>
                            </div>


                            <div class="box1">
                                <div class="icon">
                                    <i class="fas fa-phone-square-alt"></i>
                                </div>
                                <div class="text">
                                    <h3>Phone</h3>
                                    <p>+58 426-5830676</p>
                                </div>
                            </div>

                            <div class="box1">
                                <div class="icon">
                                    <i class="far fa-envelope"></i>

                                </div>
                                <div class="text">
                                    <h3>Email</h3>
                                    <p>Juliofloreztattoo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="formbox">
                        <form action="https://submit-form.com/S5iQxzWH">
                            <h3>Message Me</h3>
                            <input type="text" name="name" placeholder="Full Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <textarea name="mensaje" placeholder="Your Message"></textarea>
                            <input type="submit" value="Send" />

                        </form>
                    </div>




                </div>

                <div class="socialmedia">

                    <p class="media">Follow Me On</p>


                    <ul>
                        <li><a href="https://instagram.com/julioflorez2?utm_medium=copy_link"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/henry-merchan-776b479b/"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/Henry53006685"><i class="fa fa-twitter"></i></a></li>


                    </ul>



                </div>


            </div>



        </div>

    )
}
