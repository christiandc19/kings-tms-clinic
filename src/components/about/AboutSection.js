import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about-1.jpg";

const AboutSection = () => {
  return (
    <>
      <div className="about-container">

        <div className="about-content container">
          <div className="about-content-left">
            <img src={AboutUs} alt="nurse" loading="lazy" />
          </div>

          <div className="about-content-right">
            <h1>ABOUT US</h1> <br />
            <h2>
              <i>Get the right care from the people who care</i>
            </h2>

            <br />
            <p>
            Kings TMS Therapy Clinic provides Transcranial Magnetic Stimulation (TMS) therapy,
            an FDA-cleared, non-invasive therapy for the treatment of Major Depressive Disorder and other mental health disorders in the United States.
            TMS therapy provides local electromagnetic stimulation to specific brain regions known to be directly associated with mood regulation.
            </p>
            <br />
            <p>
              Kings TMS Therapy Clinic helps you taper in a safe,
              structured environment. We are there for you, through every stage
              of recovery. No matter where you’re located, you can reach out and
              get in touch with someone from our staff today.
            </p>
            <br />
            <br />
            <div className="about-btn">
              <button class="about-cta">
                <span>CONTACT US</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
