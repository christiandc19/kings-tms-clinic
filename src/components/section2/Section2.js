import React from "react";
import "./Section2.css";
import Fade from 'react-reveal/Fade';

import section2 from '../../assets/section2-5.png'

const Section2 = () => {
  return (
    <>
      <div className="section2 ">

        <div className="section2-content container">  
                <Fade left>
                <div className="section2-content-left">
                    <div className="section2-header">
                <h2>Is TMS therapy right for you?</h2>
                </div>

                <p>
                If you suffer from depression and have not seen significant improvement from traditional antidepressant medications like SSRIs, SNRIs, TCAs, and MAOIS, our TMS Therapy may be a good solution for you. TMS Therapy doesn't use a drug, so there are no foreign compounds introduced to the body and it does not have the side effects typically associated with drug therapy.
                </p>
                <br />
                <p>
                Symptoms typically associated with depression include a disinterest or lack of pleasure in daily activities, feeling down or hopeless, atypical sleep patterns or appetite, lethargy and low energy, low self-esteem, and difficulty concentrating. If you are experiencing some or all of these symptoms and have not seen satisfactory improvement from traditional drug therapy, take our self assessment to find out if you might be a cadidate for TMS therapy.
                </p>

            </div>
            </Fade>

            <Fade right>
            <div className="section2-content-right">
                <img src={section2} alt="banner" border="0" />

            </div>
            </Fade>

        </div>


</div>

</>


  );
};

export default Section2;
