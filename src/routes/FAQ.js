import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FAQ from '../components/faq/Faq'
import FaqSection from '../components/faq/FaqSection'
// import PHQ9 from '../components/tools/PHQ9'

const FAQPage = () => {
  return (
    <>
    <Navbar /> 
    <FAQ />
    {/* <PHQ9 /> */}
    <FaqSection />
    <Footer />
     </>
  )
}

export default FAQPage