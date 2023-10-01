import React, { useEffect } from 'react';

const MDAppWidget2 = () => {
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
    <div id="mdapp-widget" app-id="150"></div>
  );
};

export default MDAppWidget2;