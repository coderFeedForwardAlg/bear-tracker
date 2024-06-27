

import React, { useEffect } from 'react';
import { useState } from 'react';
import TextBuble from './TextBuble';
import Music from './Music';
import { set } from 'firebase/database';
export default function BunPic() {
  const [pic, setPic] = useState(<img src={require('./eyeOpen.png')} style={{width: '350px'}}/>);
  

  useEffect(() => {
    // Function to be called every 5 seconds
    const close = () => {
      setPic(<img src={require('./eyeClosed.png')} style={{width: '350px'}}/>);
      setTimeout(() => {
        setPic(<img src={require('./eyeOpen.png')} style={{width: '350px'}}/>);
      }, 500);
    };

    


    // Set the interval
    const interval = setInterval(close, 5000);
    

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
      
    };
  }, []); 

  // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line


  const delay = ms => new Promise(res => setTimeout(res, ms));

  const headShake = async () => {

    setPic(<img src={require('./turn_left.png')} style={{width: '210px', transform: 'translate(10px, 20px)'}}/>);


    for(let i = 0; i < 3; i++){
      await delay(200);
      setPic(<img src={require('./turn_left.png')} style={{width: '210px', transform: 'translate(10px, 20px)'}}/>);

      await delay(200);
      setPic(<img src={require('./turn_right.png')} style={{width: '350px'}}/>);
    }

    
    await delay(200);
    setPic(<img src={require('./eyeOpen.png')} style={{width: '350px'}}/>);
  };


  



    return (
      // <div onClick={() => {headShake()}}>
        <div style={{
            flex: "1", 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex'
          }}>
            
            {pic}
            
            {/* <TextBuble text="hello their"/> */}
          </div>
        // </div>

    )
};