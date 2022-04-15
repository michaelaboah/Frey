import { app, BrowserWindow, dialog, } from "electron";
import fs  from "fs";
import { mainWindow } from ".";

const isMac = process.platform === 'darwin'

export const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
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
      {label: 'Open Recent'},
      {type: 'separator'},
      {label: 'Save', accelerator: "CommandOrControl+S"},
      {label: 'Save As', accelarator: "CommandOrControl+Shift+S", click() {saveAsFile()}},
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
    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow as BrowserWindow,{
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
        else data
    })
}

const saveAsFile = async() =>{
    const { canceled, filePath } = await dialog.showSaveDialog(mainWindow as BrowserWindow,{
        properties: ['createDirectory'],
        filters: [
            {name: 'Json', extensions: ['json']},
            {name: 'Freyur', extensions: ['fyr']}
        ]});
    if (canceled) {
        return;
    }
    else{
        fs.writeFile(filePath as string, "InsertData Here Later", function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    }
}
