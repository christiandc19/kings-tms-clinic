import React from "react";
import Fade from 'react-reveal/Fade';
import ContactForm from "../contact/ContactForm";

import './About.css'
import AboutSection from "./AboutSection";




const About = () => {

    return (
            <>



            <div className='about main-menu'>

                        <div className="about-content">
                            <Fade top>
                                <h1>ABOUT US</h1>
                                <p>Empowering Lives Through Innovative Mental Health Care</p>
                            </Fade>
                        </div>
                    </div>



            <AboutSection />
            <ContactForm />
            </>
    )

    }
export default About
