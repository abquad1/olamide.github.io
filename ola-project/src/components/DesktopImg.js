import React from 'react';
import { Link } from 'react-router-dom';
// import ProjectData from '../components/Data'
import './FaultImg.css';
import Data from './Data'


function DesktopImg() {
  return (
    <div className="diagnoContainer">
        <div className="diagnostic">
            <h1>Issues</h1>

            <div className="diagnoIMG">
                 {Data.slice(0, 6).map((val, index)=> {
                  return(
                  <div key={index} className="faultImages">
                    <Link to={val.btnsrc}>
                      <img alt="faultIMG" src={val.imgsrc}/>
                    </Link>
                    <p>{val.title}</p>
                  </div>

                  
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default DesktopImg