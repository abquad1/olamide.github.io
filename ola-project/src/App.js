import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Laptop from './Route/Laptop';
import Printer from './Route/Printer';
import Home from './Route/Home';
import BlueScreen from './Route/BlueScreen';
import PrinterSetup from './Route/PrinterSetup';
import PowerIssue from './Route/PowerIssue';


function App() {
  return (
    <>
    <Routes>
      
      <Route path="/laptop" element={<Laptop/>} />
      <Route path="/printer" element={<Printer/>} />
      <Route path="/" element={<Home/>}/>
      <Route path="/BlueScreen" element={< BlueScreen />}/>
      <Route path="/PrinterSetup" element={< PrinterSetup />}/>
      <Route path="/Powerissue" element={< PowerIssue />}/>

    </Routes>
   </>
  );
}

export default App;
