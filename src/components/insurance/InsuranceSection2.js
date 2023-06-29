import React from 'react'
// import Fade from 'react-reveal/Fade';
import './InsuranceSection2.css'
import InsuranceLogos from './InsuranceLogos'


import Tricare from '../../assets/tricare.png'
import Bluecross from '../../assets/bluecross.png'
import Optum from '../../assets/optum.png'
import Anthem from '../../assets/anthem.png'
import Magellan from '../../assets/magellan.png'




const InsuranceSection2 = () => {
    return (
        <>
        <div className='InsuranceSection2'>
            <div className="InsuranceSection2-container container">
                <div>
                    <h2>INSURANCE</h2> <br />
                    <h1>WE WORK WITH MAJOR INSURANCE GROUPS</h1>
                    <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                </div>

                <div className="InsuranceSection2-content ">

                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Bluecross}/>
                                </div>

                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Optum}/>
                                </div>

                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Anthem}/>
                                </div>

                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Tricare}/>
                                </div>

                                <div className='insurance-thumbnail'>
                                <InsuranceLogos Image={Magellan}/>
                                </div>
                </div>
            </div>

        


        </div>
        </>
    )
}

export default InsuranceSection2
