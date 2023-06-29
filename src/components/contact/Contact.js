import React from "react";
import Fade from 'react-reveal/Fade';

import Contact2 from "./Contact2";
import './Contact.css'



const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>

            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>Our Support team is available 24 hours a day 7 Days a week. </p>
            </Fade>
            <Fade right>
                  <h2>+1 (323) 319-6219</h2>
            </Fade>

            </div>
     </div>

      <Contact2 />

      </>
    )
}

export default Contact