import React from 'react'
import img2 from '../assets/image2.png'
import SetupFix from '../components/SetupFix'

function PrinterSetup() {
  return (
    <div className="setup">
        <SetupFix  img={img2}  text="Step 1: Check Your Cables
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

Step 2: Internal Wiring
The next step is to start checking inside your build to ensure that there are no loose or malfunctioning cables. If you are working with a prebuilt system, keep in mind that opening your PC can violate your warranty, and it might be a good idea to contact your system manufacturer for advice before proceeding.
Start by unplugging the cable that runs from your PC’s power supply to the outlet before doing anything else inside your computer. Also, be sure to disconnect any external peripherals, like keyboards, mice or external hard drives, and monitor cables that are plugged into your computer. USB devices or display connections cables can occasionally cause power issues, and if your PC boots without any plugged in, plug each one separately and test until you’ve found the problematic peripheral, and either try and boot without it or test with a replacement.
If that doesn’t work, unplug your computer from the wall, and open your case to get access to your internal components. This process will vary depending on your case, so follow any appropriate documentation and instructions to get access to the inside of your PC.
After getting your case open, you’ll want to check all the connections from your power supply to the components in your PC, see if any are loose, and then reseat them if they are. If you have a modular PSU (a power supply where you choose the cables you want to use), also be sure to double-check that the cables are properly seated on the PSU side as well. After ensuring nothing is loose on either side, see if your PC powers on.
If that didn’t work, it’s time to unplug every power cable that is connected to your components. This includes the 24 pin and the CPU power cables connected to your motherboard, additional power cables running to any PCIe devices like your GPU, and SATA and Molex power connectors connected to storage devices and other accessories.
For a deeper dive on power supply connections, take a look at everything you need to know about power supplies.
Once everything has been unplugged from the PSU, reseat the motherboard and CPU power cables, plug in your PC, and see if your system turns on, as indicated by fans spinning and the lights on your hardware illuminating.
If it does, great! You’ll then want to power down the system and begin reconnecting the power cables to each piece of hardware, then testing until you find the hardware that is causing the problem. Again, if you’d like guidance on what hardware requires a power supply connection or have any questions about what goes where, check out this introduction to PC building.
While looking inside your case, keep an eye out for anything that could be causing an electrical short. Common examples of this issue are motherboards that are screwed directly to the case without using the required standoffs, or Molex* connectors with errant pins making contact with the chassis. This is unlikely to be an issue if your PC is prebuilt, but it’s always worth looking out for and isn’t always obvious.
If you have tried all of the above and are still not seeing component status LEDs, you could be looking at a faulty PSU.
If you have a spare power supply that you know works, plug in the CPU cable and 24 Pin motherboard cable from your new PSU to see if it successfully provides power to your motherboard. If it does, your previous PSU was likely the problem, and you can contact the manufacturer of the faulty unit for next steps.
Step 3: POST Codes, Motherboards, and Hardware Tests
It’s possible that your system is getting power — as indicated by lights on the internal hardware — but still isn’t powering on properly. If your system still isn't reacting when the power button on your case is pressed, or if it’s turning on for a second then shutting down again, follow the steps below.
POST and Beep Codes
Though it can be hard to pinpoint why your PC is failing to boot, there are built-in tests that can help. Power On Self Test (POST) codes and beep codes are visual and audio cues that your motherboard manufacturer uses to communicate the results of internal hardware tests. These signals can be very useful in determining any hardware issues that might be keeping your PC from turning on.
POST codes usually consist of two numbers that indicate at what point the system encountered a hardware issue in the process of booting, and this can often help identify the source of the problem. For example, if the POST code indicates a memory initialization error, you would know to start with troubleshooting your RAM. Many motherboards have a hexadecimal display that will display the code and provide insight into where to begin the diagnostic process. If your motherboard doesn’t have a built-in display, you can get a POST test card that installs into a PCIe slot and displays that code for you.
Beep codes are the auditory equivalent of POST codes. When your PC powers up, assuming it does, you might hear a series of beeps. These audio signals have the same diagnostic functionality of POST codes — for example, three beeps might mean there was no video card detected, and you would want to start with reseating your GPU.
Though these indicators can be useful, every motherboard manufacturer uses a different system of codes. Check your motherboard documentation or search online for the codes your motherboard manufacturer uses to see if you can identify the issue you are experiencing.
Motherboard BIOS Updates
If you’re not getting a POST code, and you’ve already followed the steps above, then it’s worth making sure that your motherboard’s BIOS is current.
You can usually update your motherboard’s BIOS to the most recent version even if your PC doesn’t POST. The process can vary depending on the motherboard manufacturer, so consult your motherboard documentation or check online to make sure you have the most recent BIOS version for your system.
This probably doesn’t apply if your computer was operating properly and stopped, or if you’re using a prebuilt system, but if you’re building a PC and it won’t start, and especially if you’re using an older motherboard, double-check that you’re using the most recent BIOS.
Step 4: Power Button
If your PC won’t turn on but motherboard light is on, a potential culprit is the power button on the case itself or the wires connecting that button to the motherboard.
Check to see if your motherboard has an onboard power button. Not all of them do; consult your motherboard manual if you’re unsure or having trouble locating it. Using this power button will turn on the system just as a properly wired power button would. If this works, you’ll know the issue is your case.
If your motherboard doesn’t have an onboard power button, you can use a screwdriver to jump-start your system.
Here’s how to do it:
Locate the two power switch headers on your motherboard. These small headers are often labeled something like PWR_SW, with + and - symbols. If the power button from your case is already wired to these headers, you’ll need to remove those cables. Consult the motherboard manual if you’re having trouble locating the power switch headers, as the labelling can sometimes be difficult to spot with the naked eye.
Make sure the 4/8 CPU and 24-pin motherboard power cables are connected and that the PSU is switched on and supplying power.
Lightly touch a metal screwdriver to the two power switch header pins, and the system will turn on if everything is connected correctly. This process accomplishes the same thing as hitting the power button on your case when properly connected, or using an onboard power button on your motherboard.
If your system turns on when using the onboard power button, or when jumping the headers with a screwdriver, it could be that your case is the problem. If your case has a reset button, you’ll find it’s wired to the reset switch headers near the power button headers. Try replacing the cables to your power button headers with those from the reset button. They operate in the same way, and if the problem is the power button in your case, wiring the reset button to the power switch headers might circumvent this issue.
Of course, you’ll have to press the reset button instead of power button to turn your computer on, but it’s a useful temporary solution. Contact your case manufacturer for a more long-term solution.
Step 5: Test Your Components
If your computer still isn’t turning on, it might be time to start testing each piece of hardware individually. This is a little different than testing all of the power cables, as we did earlier. That process allowed us to rule out faulty wires from the power supply. Now, we'll check the connections to the motherboard and ensure that all hardware is properly communicating with the rest of the system.
Start by removing your GPU, disconnecting any storage, unplugging everything from your I/O, and removing all but one stick of RAM in the first RAM slot of your motherboard.
You’ll want to make sure your PSU is powering your motherboard and CPU, but otherwise, your system should be stripped of any non-essential hardware.
If your PC turns on with this minimalist setup, add one piece of hardware, test, and then power down. Remember to swap out the RAM module at least once as well, as the stick you’re using could potentially be the culprit.
Continue this process until your system fails to boot, and that will indicate where the problem lies. If your computer continues to POST with everything except the faulty hardware, you've confirmed the problem, and you can either begin troubleshooting the hardware or start thinking about an upgrade.




"/>
    </div>
  )
}

export default PrinterSetup