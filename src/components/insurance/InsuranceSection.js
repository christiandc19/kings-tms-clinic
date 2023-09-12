import React from 'react'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'
import InsuranceLogos from './InsuranceLogos'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

import Tricare from '../../assets/tricare.png'
import Bluecross from '../../assets/bluecross.png'
import Optum from '../../assets/optum.png'
import Anthem from '../../assets/anthem.png'
import Magellan from '../../assets/magellan.png'
import Cigna from '../../assets/cigna.png'



const InsuranceSection = () => {
    return (
        <>
        <div className='InsuranceSection'>
            <div className="InsuranceSection-container container">
                <div>
                    <h2>INSURANCE</h2> <br />
                    <h1>WE WORK WITH MAJOR INSURANCE GROUPS</h1>
                    <p>In today's rapidly changing healthcare landscape, access to quality medical care is a critical concern for individuals and families alike. At Kings TMS Therapy Clinic, we understand the importance of making healthcare services accessible and affordable. That's why we're proud to announce that we accept most insurance plans, ensuring that you receive the care you need without breaking the bank.</p>
                </div>

                <div className="insurance-content ">

                                <Fade left>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Bluecross}/>
                                </div>
                                </Fade>

                                <Fade left>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Optum}/>
                                </div>
                                </Fade>

                                <Fade left>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Anthem}/>
                                </div>
                                </Fade>

                                <Fade right>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Tricare}/>
                                </div>
                                </Fade>

                                <Fade right>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Magellan}/>
                                </div>
                                </Fade>

                                <Fade right>
                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Cigna}/>
                                </div>
                                </Fade>
                </div>

                <div className='insurance-btn'>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/insurance">
                <button>Learn More</button>
            </Link>
            </LinkRoll>

            </div>



            </div>

            




        </div>
        </>
    )
}

export default InsuranceSection
