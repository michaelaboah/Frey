import { app, dialog, } from "electron";
import fs  from "fs";
import path from "path";
import { mainWindow } from ".";
import { setInbox } from "../middle/serverDX";
import { triggerRecieve, triggerSend } from "./AppleScripts/controlVW";

const isMac = process.platform === 'darwin'

export const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      {label: "Check for Updates", click() {console.log('Check for updates: Not implemented')}},
      {label: "Preferences", accelerator: "Cmd+,", 
      click() {
          window.api.openWindow('hello from menu')
          console.log('Test preferences click')
        }
      },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' },
      {label: 'New'},
      {label: 'New Window'},
      {type: 'separator'},
      {label: 'Open', accelarator: "CmdOrCtrl+O", click() {openFile()}},
      {label:"Open Recent", role:"recentdocuments",
          submenu:[
            {label:"Clear Recent", role:"clearrecentdocuments", click() {app.clearRecentDocuments()}}
          ]
      },
      {type: 'separator'},
      {label: 'Save', accelerator: "CommandOrControl+S"},
      {label: 'Save As', accelarator: "CommandOrControl+Shift+S", click() {saveAsFile()}},
      isMac ? {label: "Preferences", accelerator: 'Ctrl+,',} : {label: "Preferences", accelerator: 'Ctrl+,',} // This is fine
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startSpeaking' },
            { role: 'stopSpeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // Exchange Sync
  {
    label: 'Control Vectorworks',
    submenu: [
      {label: 'Send to Vectorworks', click() {triggerRecieve()}},
      {label: 'Pull from Vectorworks', click() {triggerSend()}},
      {label: 'Toggle Auto Sync', click() {console.log(`Not implemented yet`)}},
      {type: 'separator'},
    ]
  },

  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
]



// *************************** Menu Functions **************************

const openFile = async():Promise<any> =>{
    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow ,{
        properties: ['openFile'],
        filters: [
            {name: 'JSON', extensions: ['json']},
            {name: '*', extensions: ['fyr']}
        ]});
    if (canceled) {
        return;
    }
    fs.readFile(filePaths[0],(err, data) =>{
        if(err){
            return console.log(err)
        }
        else {
          setInbox(JSON.parse(data.toString())) 
          app.addRecentDocument(path.join(filePaths[0]))
        }
    })
}


const saveAsFile = async() =>{
    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow ,{
        properties: ['createDirectory'],
        filters: [
            {name: 'Json', extensions: ['json']},
            {name: 'Freyur', extensions: ['fyr']}
        ]});
    if (canceled) {
        return;
    }
    else{
        fs.writeFile(filePath as string, "Insert Data Here Later", function(err) {
            if(err) {
                return console.log(err);
            }
            app.addRecentDocument(path.join(filePath as string))
            console.log("The file was saved!");
        }); 
    }
}

