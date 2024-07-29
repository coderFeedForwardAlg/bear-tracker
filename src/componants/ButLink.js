import React from 'react';
import { Link } from 'react-router-dom';


export default function ButLink(props) {
    const {rout, text} = props;

    return (
        <div style={{display: 'flex' , direction: 'column',justifyContent: 'center', alignItems: 'center'}}>
            <Link to={`${rout}`} style={styles.button} > <div style={styles.buttonText}>{text}</div></Link>
        </div>
    );

}

const styles = {
    button: {
        display: 'flex',
        textDecoration: 'none',
        justifyContent: 'center',
        backgroundColor: 'brown',
        border: "3px solid black",

      borderRadius: 10,
      padding: 10,
      minWidth: 200,
    },
    buttonText: {
      color: 'white',
      fontSize: 20
    },
}