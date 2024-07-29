
// import Button from './componants/Button';
import { useState } from 'react';
// import grass from './grass2.png'
import Button from './componants/Button';
import MyCamera from './componants/MyCamera';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BunPic from './componants/BunPic';
import Pics from './componants/Pics';

import MainCon from './componants/MainCon';
import { Routes, Route } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';



export default function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyDLcXMgEYDX1ulzCf1uLisew0iqeDSprgE",
    authDomain: "bear-tracker-60851.firebaseapp.com",
    projectId: "bear-tracker-60851",
    storageBucket: "bear-tracker-60851.appspot.com",
    messagingSenderId: "740777657902",
    appId: "1:740777657902:web:8bab2e699a7bf39a0201bf",
    measurementId: "G-8K87EVV8P3"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

  return (

      <div style={{height: '100vh', backgroundColor: '#223300'}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainCon/>} />
            <Route path="/pics" element={<Pics/>} />
            <Route path="/cam" element={<MyCamera/>} />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

