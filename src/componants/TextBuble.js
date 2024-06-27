
import { set } from 'firebase/database';
import React, { useEffect, useState } from 'react';


export default function TextBuble(props) {
    const text = "hello " //props.text;
    
    const [said, setSaid] = useState("");
    const [next , setNext] = useState(0);

    const delay = ms => new Promise(res => setTimeout(res, ms));
    

    const sayStuff = async () => {
        await delay(1500)
        setSaid(said + text[next]);
    };

    useEffect(() => {
        while(next < 3){
            sayStuff();
            setNext(next + 1);
        }
        
    }, []);
    

    return (
        <div style={{backgroundColor: "white", border: "5px solid black", borderRadius: "30px", minWidth: "200px", paddingLeft: "10px"}}>
            <h1> {said} </h1>
        </div>
    );

}