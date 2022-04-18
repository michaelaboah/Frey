// import { app } from "electron";

var applescript = require('applescript');


  export const triggerSend = () =>{
    //macOss
    if(process.platform === "darwin") runAppleScript("src/electron/AppleScripts/TriggerFreyurSend.applescript")
    //Windows
    else{
        return
    }
  }

  export const triggerRecieve = () =>{
      //macOS
    if(process.platform === "darwin") runAppleScript("src/electron/AppleScripts/TriggerFreyurRecieve.applescript")
    //Windows
    else{
        return
    }
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