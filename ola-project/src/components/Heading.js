import React from 'react';
// import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Heading.css';
import {FaSearch,FaDesktop, FaLaptop, FaPrint} from 'react-icons/fa' 

function Heading() {
   
    const path = window.location.pathname
  return (
    <div className="heading">
        <div className="header">
        <div className="logo">
            <h2><span>i</span>Help </h2>
        </div>
            
        <div className="search-box">
            <input type="search" name="search" placeholder="Search issues, tips and hardware" />
            <FaSearch className="icon" />
        </div>

        <div className="navigation" >
            
            <div className="button" 
                style={{ backgroundColor: path === '/' ? '#581AA6': ''}}
            >
                <NavLink to='/' className="btn"
                style={{ color: path === '/' ? '#fff': ''}}
                >
                     <FaDesktop className="icons"/> Desktop
                </NavLink>
            </div>

            <div className="button"
                style={{ backgroundColor: path === '/Laptop' ? '#581AA6': ''
            }}
            >
                <NavLink to='/Laptop' className="btn"
                style={{ color: path === '/Laptop' ? '#fff': ''}}
                
                >
                   <FaLaptop className="icons"/> Laptop
                </NavLink>
            </div>

            <div className="button"
                style={{ backgroundColor: path === '/Printer' ? '#581AA6': ''}}
            >
                <NavLink to='/Printer' className="btn"
                style={{ color: path === '/Printer' ? '#fff': ''}}
                >
                    <FaPrint className="icons"/> Printer
                </NavLink>
            </div>
           </div> 
        </div>
        
        
    </div>
  )
}

export default Heading