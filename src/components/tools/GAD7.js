import React, { useEffect } from 'react';
import './GAD7.css'

import gad7 from '../../assets/gad7-img.webp'



const MDAppWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tools.mdapp.co/js/sdk.js';
    document.getElementById('mdapp-widget').appendChild(script);

    return () => {
      // document.getElementById('mdapp-widget').removeChild(script1);
    };
  }, []);

  return (
    <>
    <div className='gad7'>
      <div className='gad7-content'>


        <div className='gad7-header'>
          <h1>Generalized Anxiety Disorder (GAD 7)</h1>
          <h2>Assesses the severity of the most common seven anxious disorder symptoms.</h2>
          <p>The calculator below can help you discover more about the symptoms used and about how the GAD 7 score is interpreted.</p>
        </div>

      <div className='gad7-flex container'>

          <div className='gad7-left'>
              <div className='gad7-form'>
                <div id="mdapp-widget" app-id="149"></div>
              </div>
          </div>

          <div className='gad7-right'>
            <img src={gad7} alt="banner" border="0" />
          </div>

      </div>
    </div>
  </div>
    </>
  );
};

export default MDAppWidget;

