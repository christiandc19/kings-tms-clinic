import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/kings-vbg2.mp4'


const Hero = () => {
    return (
<>        

        <div className='hero'>
            <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />



            <div className="hero-container">

                <div className="content">
                    <Fade right>
                        <h1> It's time <br/>to feel <span>better.</span></h1>
                    </Fade>
                    <Fade left>
                        <h2>Find Out How TMS Can Help You Overcome Depression</h2>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                            <button>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero