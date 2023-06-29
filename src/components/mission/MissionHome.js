import React from "react";
import "./MissionHome.css";
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const MissionHome = () => {
  return (
    <>
      <div className="mission-home">
        <div className="mission-home-content container">
          <h1>Ready to get started?</h1>
          <p>
          If you’re struggling to treat symptoms caused by complex mental health or behavioral health issues such as depression, anxiety, or PTSD, it may be time to try something different. TMS may be the next step in your journey towards healing for those who have not found adequate relief from therapy or prescription medications alone.
          </p>

          <h2>
            "It's time to feel better"
          </h2>

          <div className='mission-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
              </LinkRoll>
          </div>

        </div>


      </div>
    </>
  );
};

export default MissionHome;
