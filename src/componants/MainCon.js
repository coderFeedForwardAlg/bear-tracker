

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BunPic from './BunPic.js';

import Pics from './Pics';
import ButLink from './ButLink';


export default function MainCon() {    

  return (

    <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100vh' 
      }}>
        <BunPic/> 
                        
        <div style={{
          flex: "1", 
          justifyContent: 'center', 
          alignItems: 'center', 
          display: 'flex'
        }}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <ButLink rout = "/cam" text="Record a Bear!"/> 
            <ButLink rout="/Pics" text="See Bears" />
          </div>
                          
        </div>

      </div>
  );
}