import React from 'react'
import img1 from '../assets/image1.png'
import SetupFix from '../components/SetupFix'

function BlueScreen() {
  return (
    <div className="setup">
        <SetupFix  img={img1}  text="Step 1: Check Your Cables
If your system is receiving power, indicated by the LEDs on your PC’s internal components lighting up, you might want to skip to Step 3.
If not, let’s start with the cables coming from your wall.
Test that the wall outlet is active by plugging in a device (such as a lamp) that you know works and seeing if it functions properly.
Make sure any surge protector or power strip is correctly plugged into the outlet, and that the power switch is on. Plug in other devices to the power strip and confirm they are operating properly.
Double-check that your PC’s power supply on/off switch is on.
Confirm that the PC power cable is properly plugged into the power supply and outlet, as it can become loose over time.
Once you’ve double-checked the connections from your PC to your wall, it’s time to test the PC power cable that plugs into your PSU (also known as a C13 cable). 
Many monitors use the same cable as a desktop PSU. If that’s true for you, swap out the monitor cable with the PC cable, and see if your monitor turns on. If it doesn’t, test your PC with the one that was powering the monitor.
Acquire a replacement C13 cable if you don’t have any spares. Keep in mind that some particularly power-hungry PC setups use a higher gauge cable, so be sure to replace the cable you were using with a similar gauge.
Once you’ve ruled out the power cord and wall outlet, it’s time to turn your attention to the cabling inside your case.

"/>
    </div>
  )
}

export default BlueScreen