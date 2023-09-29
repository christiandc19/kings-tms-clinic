import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Quiz from '../components/questionnaire/Quizzes'
import Footer from '../components/footer/Footer'
import GAD7 from '../components/tools/GAD7';


const Questionnaire = () => {
    return (
        <>
            <Navbar/>
            <Quiz />
            <GAD7 />
            <Footer />   
        </>
    )
}

export default Questionnaire
