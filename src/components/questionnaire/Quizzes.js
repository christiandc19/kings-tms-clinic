import React from "react";
import Fade from 'react-reveal/Fade';
import quiz from '../../assets/quiz.webp'


import './Quizzes.css'



const Quizzes = () => {

    return (
      <>

<div className="quizzes">

<div className="quizzes-content container">  
        <Fade left>
        <div className="quizzes-content-left">
            <div className="quizzes-header">
        <h1>Take our Mental Health Quiz</h1>
        </div>

        <p>Understanding and prioritizing your mental well-being is important. Take our mental health quiz below to gain insights and resources tailored to you.</p>

    </div>
    </Fade>

    <Fade right>
    <div className="quizzes-content-right">
        <img src={quiz} alt="Therapist" border="0" />

    </div>
    </Fade>

</div>


</div>




      </>
    )
}

export default Quizzes