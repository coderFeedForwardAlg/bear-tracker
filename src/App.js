
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





export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAs5ih_P5k9uOQxl-QHxy82dxfS4Ke5oAo",
    authDomain: "techforstartups-72eb2.firebaseapp.com",
    projectId: "techforstartups-72eb2",
    storageBucket: "techforstartups-72eb2.appspot.com",
    messagingSenderId: "704406289150",
    appId: "1:704406289150:web:1505eb31fb406f821783af",
    measurementId: "G-4XHFHFNTKK"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

  return (


      <Routes>
        <Route path="/" element={<MainCon/>} />
        <Route path="/pics" element={<Pics/>} />
        <Route path="/cam" element={<MyCamera/>} />
      </Routes>

  );
}

