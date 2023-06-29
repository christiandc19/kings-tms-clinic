import React from "react";
import "./Section1.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import Fade from 'react-reveal/Fade';

import section1 from '../../assets/section1B.png'

// import { BsGear } from "react-icons/bs";
// import { BiMagnet } from "react-icons/bi";

const Section1 = () => {
  return (
    <>
      <div className="section1">

        <div className="section1-content container">

        <Fade left>
          <div className="section1-left">
            <img src={section1} alt="banner" border="0" />
          </div>
        </Fade>

          <div className="section1-right">
              <Fade right>
              <h1>What is TMS</h1>
              <p>Transcranial magnetic stimulation (TMS) is one of the most effective procedures available for depression. It uses focused magnetic pulses to activate specific areas of your brain where low activity causes depression. TMS is an effective, safe, nonconvulsive, and noninvasive brain stimulation procedure that has been in use since 1985 and has been approved by the Food and Drug Administration (FDA) since 2008.</p> <br/>
              <p>Transcranial magnetic stimulation (TMS) is an alternative to traditional prescription medications that are used to treat major depression and anxiety. Many patients find that TMS is more effective and has fewer side effects than other treatment options. </p>
              </Fade>  

              <div className="section1-btn">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/tms-therapy">
                      <button>Learn More</button>
                      </Link>
                      </LinkRoll>

                    </div>


              <div className="section1-right-flexBox">


              {/* <div className="section1-right-flex">

                  <div className="section1-right-icon">
                    <h3><BiMagnet/></h3>
                  </div>
                  <div className="section1-right-description">
                    <p>Learn how TMS therapy treats depression.</p>
                    <div className="section1-btn">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/tms-therapy">
                      <button>How it works</button>
                      </Link>
                      </LinkRoll>

                    </div>
                  </div>
              </div> */}
              

              {/* <div className="section1-right-flex">
                  <div className="section1-right-icon">
                    <h3><BsGear/></h3>
                  </div>
                  <div className="section1-right-description">
                    <p>We'll walk you through treatment process.</p>
                    <div className="section1-btn">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/what-to-expect">
                      <button>What to expect</button>
                    </Link>
                    </LinkRoll>
                    </div>
                  </div>
              </div> */}


              </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Section1;
