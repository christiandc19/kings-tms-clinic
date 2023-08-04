import React from 'react'
import Contact2 from '../contact/Contact2'
import faq1 from '../../assets/faq1.jpg'

import './FaqSection.css'

const FaqSection = () => {
  return (
<>

    <div className='faqSection'>

      <div className='faqSection-content container'>

          <div className='faqSection-flex'>

              <div className='faqSection-flex-left'>
                <h1>What does TMS actually do?</h1>
                <p>TMS treatment involves placing a coil near your head during brief outpatient procedures. The coil is a magnetic field generator, and it uses magnetic pulses similar to those employed by magnetic resonance imaging (MRI) machines. These pulses are highly focused and create small electric currents in specific areas of your brain where low activity causes depression. Although you will not feel the electric currents, they activate neurons and enhance brain functioning.</p>
              </div>

              <div className='faqSection-flex-right'>
                <img src={faq1} alt="TMS Machine" border="0" />
              </div>

          </div>

      </div>
    </div>


<div className='faq'>


        <div className="centerplease">
          <h1>Frequently Asked Questions</h1>  
        </div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question1" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question1" class="question">
  Is TMS like electroconvulsive therapy (ECT)?
  </label>
  <div class="answers">
  TMS is not electroconvulsive therapy (ECT). Unlike with ECT, TMS does not require the use of anaesthesia and is not intended to cause seizures. TMS does not cause confusion or memory loss, both of which are common with ECT. For these reasons, patients often prefer TMS to ECT.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question2" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question2" class="question">
  Am I a good candidate for TMS?
  </label>
  <div class="answers">
  TMS is not electroconvulsive therapy (ECT). Unlike with ECT, TMS does not require the use of anaesthesia and is not intended to cause seizures. TMS does not cause confusion or memory loss, both of which are common with ECT. For these reasons, patients often prefer TMS to ECT. <br /><br />
  You may not be eligible for TMS if you are susceptible to seizures or have metal in or around your head. Our experts would be happy to consult with you to determine whether TMS is appropriate treatment for you.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question3" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question3" class="question">
  What are TMS treatments like?
  </label>
  <div class="answers">
  TMS treatment involves brief outpatient procedures performed while the patient sits in a chair. On average, patients attend five 20 to 40-minute sessions per week for five to six weeks. You will be able to travel on your own to and from appointments and resume your usual activities immediately after each session as there is no negative effect on cognition or alertness. You will remain awake during these short, non-convulsive, non-invasive procedures.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question4" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question4" class="question">
  What are TMS treatments like?
  </label>
  <div class="answers">
  TMS treatment involves brief outpatient procedures performed while the patient sits in a chair. On average, patients attend five 20 to 40-minute sessions per week for five to six weeks. You will be able to travel on your own to and from appointments and resume your usual activities immediately after each session as there is no negative effect on cognition or alertness. You will remain awake during these short, non-convulsive, non-invasive procedures.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question5" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question5" class="question">
  Does TMS hurt?
  </label>
  <div class="answers">
  TMS treatments should not hurt, although some patients may have minor headaches or mild scalp discomfort, which typically subsides after the first few treatments.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question6" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question6" class="question">
  What are the risks and side effects of TMS?
  </label>
  <div class="answers">
  TMS is safe, nonconvulsive, and noninvasive brain stimulation. TMS does not require the use of anesthesia and is not intended to cause seizures. It is not systemic, meaning it does not circulate throughout the body like prescription drug therapy. <br/> <br/>
  TMS treatments should not hurt, although some patients may have minor headaches or initial scalp discomfort which typically subsides after the first few sessions. TMS does not cause memory loss. Your magnetic field exposure, which throughout the full course of the treatment is less than you would receive from an MRI, is minimal.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question7" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question7" class="question">
  Will TMS treatment be effective?
  </label>
  <div class="answers">
  TMS is one of the most effective procedures available for depression. TMS has been in use since 1985 and has been approved by the Food and Drug Administration (FDA) since 2008. Dr. Bruno has successfully treated hundreds of patients with TMS and achieved the following outcomes: <br/> <br/>
  <ul>
    <li>
    Over ¾ of patients have had a significant response (at least 50% improvement in severity of their symptoms of depression).
    </li>
    <li>
    Over 1/3 of patients have had a full remission (almost all symptoms of depression resolved).
    </li>
  </ul>
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question8" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question8" class="question">
  Why should I try TMS again if I’ve had a depressive relapse?
  </label>
  <div class="answers">
  Although most patients stay better long-term after a successful course of TMS, depression can be a recurrent condition. Some patients receive booster sessions  for recurrence of depression or may benefit from maintenance sessions to prevent depression from returning.
  </div>
  </div>
</div>


<div className="faqContent">
  <div>
  <input type="checkbox" id="question9" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question9" class="question">
  How long do the benefits of TMS treatment last?
  </label>
  <div class="answers">
  The majority of patients are remitted of their symptoms of depression for over 12 months.
</div>
  </div>
</div>



<div className="faqContent">
  <div>
  <input type="checkbox" id="question10" name="q"  class="questions"></input>
  <div class="plus">+</div>
  <label for="question10" class="question">
  Can I take antidepressant medication while receiving TMS?
  </label>
  <div class="answers">
  Yes. TMS therapy can be safely and effectively used with or without antidepressant medications.
  </div>
  </div>
</div>


</div>

<Contact2 />

    </>
  )
}

export default FaqSection
