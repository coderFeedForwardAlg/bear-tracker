
import React, { useRef, useState,lazy, Suspense } from 'react';
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";

import Webcam from 'react-webcam';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Buffer } from 'buffer';
import  Button  from './Button';
import { useNavigate } from "react-router-dom";
import ButLink from './ButLink';


export default function MyCamera({isCamera, setIsCamera} ) {
  
  const firebaseConfig = {
    apiKey: "AIzaSyDLcXMgEYDX1ulzCf1uLisew0iqeDSprgE",
    authDomain: "bear-tracker-60851.firebaseapp.com",
    projectId: "bear-tracker-60851",
    storageBucket: "bear-tracker-60851.appspot.com",
    messagingSenderId: "740777657902",
    appId: "1:740777657902:web:8bab2e699a7bf39a0201bf",
    measurementId: "G-8K87EVV8P3"
};
const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const locatCollection = collection(db, "locations");
    const storage = getStorage();
    const navigate = useNavigate();
    const [premMess, setPremMess] = useState("");
    const [showCam, setShowCam] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [zoomFacotor, setZoomFactor] = useState(100);
    
    let videoConstraints = {
      facingMode: { exact: "environment" },
      advanced: [{zoom: zoomFacotor/100}]
    };

    const [notes, setNotes] = useState("");

      const uploadImageToStorage = async (imageData) => {
        const fileName = 'image-bear/' + Date.now() + '.jpeg'; // Generate a unique filename
        const metadata = {
            contentType: 'image/jpeg',
          };
        try {
          // Create a new Cloud Storage file
          const storage = getStorage();
            const storageRef = ref(storage, fileName);
            const buffer = Buffer.from(imageData.split(',')[1], 'base64');

            const task = uploadBytesResumable(storageRef, buffer, metadata).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    console.log('File available at', url);
                })
              });
          
      
          console.log(`Image uploaded to images`);
        } catch (error) {
          console.error('Error uploading image:', error);
        }

        await navigator.geolocation.getCurrentPosition((position) => {
          addDoc(locatCollection, {
              "latatude": position.coords.latitude,
              "longitude": position.coords.longitude,
              "image_name": fileName,
              "notes" : notes
          });
        });
      };
      
      

    const webcamRef = useRef(null);

  const capturePhoto = () => {
    setShowCam(true);
    try {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
        
      } catch (error) {
        console.error('Error capturing photo:', error);
        setPremMess("you need to give permission for camera access for this to work! ");
      }
    
  };

  
  const save = async () => {
    try{
      
      await uploadImageToStorage(capturedImage);
      
      navigate("/");
      
    }catch(error){
        console.error('Error uploading image:', error);
    }

    
  }


 
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          {/* line below not working and i dont know why , will look into later  */}
          <Suspense fallback={<div>Loading...</div>}> 
          <div style={{color: 'red', fontSize: 20}}>{premMess} </div>
           {!showCam && <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        // width={1280}
        style={{ flex: 1, margin: 10 }}
      /> }
      {showCam && <img src={capturedImage} alt="Captured"  />}
      {!showCam && <Button handelClick={capturePhoto} text="Capture photo"/> } 
      {!showCam && <ButLink rout="/" text="Cancel"/> } 
      {/* TODO: make slider range match how many times zoom the camera has */}
      <input className='slider' type="range" min="100" max="600" value={zoomFacotor} class="slider" id="myRange" onChange={(e) => {setZoomFactor(e.target.value); console.log("value is " + zoomFacotor)}}></input>
      <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
        {showCam && <Button handelClick={save} text="Save Photo"/> }
        {showCam && <Button handelClick={() => setShowCam(false)} text="Retake Photo"/> }
        {showCam && <ButLink rout="/" text="Cancel"/> } 
      </div>
      {showCam &&<form>
                    <label><h2>Any notes?</h2></label>
                    <input placeholder="Notes here" onChange={(e)=>{
                        setNotes(e.target.value);
                    }}/>
                 </form>}
                 
      </Suspense>
      
        </div>
    );

};