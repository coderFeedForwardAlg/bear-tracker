

import React, { useEffect } from 'react';
import { useState } from 'react';
import TextBuble from './TextBuble';

import { set } from 'firebase/database';
export default function BunPic() {
  const [pic, setPic] = useState(<img src={require('./bear.jpg')} style={{width: '350px'}}/>);
  


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