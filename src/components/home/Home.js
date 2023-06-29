import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import Contact2 from '../contact/Contact2';
import MissionHome from '../mission/MissionHome';
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';
import BrainSlider from '../brainSlider/BrainSlider';
import Section2B from '../section2/Section2B';



const home = () => {
  return (
    <>
    <Section1 />
    <Section2 />
    <Section2B />
    <InsuranceSection />
    <MissionHome />
    <BrainSlider />
    {/* <ContactForm />  */}
    <Contact2 />
    </>
  )
}

export default home
