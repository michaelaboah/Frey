import { app } from "electron";

var applescript = require('applescript');

let check:boolean = true

export const startExchangeCycle = (isMac:boolean) => {
    if (isMac){
           while (check) {
                if (checkVWRunning()) {
                    triggerSend()
                    setTimeout(triggerRecieve, 5000) // trigger recieve in 3 minutes or 180000 milliseconds
                }

        } 
    }
    else return
    //Implement PowerShell scripts

}



  export const triggerSend = () =>{
    runAppleScript("src/electron/AppleScripts/TriggerFreyurSend.applescript")
  }

  export const triggerRecieve = () =>{
    runAppleScript("src/electron/AppleScripts/TriggerFreyurRecieve.applescript")
  }

  export const checkVWRunning = ():boolean =>{
      let isRunning:boolean
    return applescript.execFile("src/electron/AppleScripts/IsVWRunning.applescript", function (err: any, rtn: any[]) {
        if (err) {
            console.log(err);
            isRunning = false;
        }
        if (rtn.length > 0) {
            console.log(rtn);
            if (rtn.toString() === "true") isRunning = true
            else isRunning = false
          }
      });
  }

  const runAppleScript = (scriptPath:string) =>{
    applescript.execFile(scriptPath, function(err: any, rtn: any[]) {
        if (err) {
          // Something went wrong!
          console.log(err)
        }
        if (rtn.length > 0) {
          console.log(rtn)
        }
      });
  }