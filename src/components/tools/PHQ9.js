import React, { useEffect } from 'react';
import './PHQ9.css'

const PHQ9 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tools.mdapp.co/js/sdk.js';
    document.getElementById('mdapp-widget').appendChild(script);

    return () => {
      // document.getElementById('mdapp-widget').removeChild(script);
    };
  }, []);

  return (
    <>
    <div className='phq9'>
      <div className='phq9-content container'>
        <div id="mdapp-widget" app-id="150"></div>
      </div>
    </div>
    </>
  );
};
export default PHQ9;