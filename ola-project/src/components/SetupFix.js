import React from 'react';
import './SetupFix.css';

function SetupFix(props) {
  return (
    <div className="setup">
        <div className="setups">
            <img alt="issueIMG" src={props.img} ></img>

            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default SetupFix;