var applescript = require('applescript');

export const startExchangeCycle = (isMac:boolean) => {

    
}


applescript.execFile("src/electron/AppleScripts/TriggerFreyurRecieve.applescript", function(err: any, rtn: any[]) {
    if (err) {
      // Something went wrong!
      console.log(err)
    }
    if (rtn.length > 0) {
      console.log(rtn)
    }
  });