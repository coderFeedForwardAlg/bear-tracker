
import { useState } from 'react';
import Button from './Button';
import MyCamera from './MyCamera';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BunPic from './BunPic.js';

import Pics from './Pics';
import { Link } from 'react-router-dom';
import ButLink from './ButLink';


export default function MainCon() {
  

    
  const [isCamera, setIsCamera] = useState(false);
  const [isPics, setIsPics] = useState(false);

  

  return (
    <div>
      
      {/*  underneath is a usless div i think */}
          <div > 
            
          

  <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100vh' 
                }}>
                      { !isCamera  && <BunPic/> }
                      { isCamera  && <MyCamera/> }
                      { isPics && <Pics setIsPics={setIsPics}/> }
                      

                      <div style={{
                        flex: "1", 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        display: 'flex'
                      }}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            { !isCamera  && <ButLink 
                              rout = "/cam"
                              text="Record a Bear!"/> }

                            { !isCamera  && <ButLink rout="/Pics" text="See Bears" /> }
                          </div>
                        
                      </div>

                </div>
        </div>
     </div> 


  );
}