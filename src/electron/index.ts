import {app, BrowserWindow, ipcMain, Menu, nativeTheme, Notification,} from "electron";
import path, { join } from "path";
import { parse } from "url";
import { autoUpdater } from "electron-updater";
import { events, startDXServer} from '../middle/serverDX'
import logger from "./utils/logger";
import settings from "./utils/settings";
import { template, } from "./menu";
import fs from 'fs'
var applescript = require('applescript');

const isProd = process.env.NODE_ENV === "production" || app.isPackaged;

logger.info("App starting...");
settings.set("check", true);
logger.info("Checking if settings store works correctly.");
logger.info(settings.get("check") ? "Settings store works correctly." : "Settings store has a problem.");

export let mainWindow: BrowserWindow | null;
let notification: Notification | null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      devTools: isProd ? false : true,
      contextIsolation: true,
      preload: join(__dirname, 'preload.js'),
    },
  });

  const url =
    // process.env.NODE_ENV === "production"
    isProd
      ? // in production, use the statically build version of our application
        `file://${join(__dirname, "public", "index.html")}`
      : // in dev, target the host and port of the local rollup web server
        "http://localhost:5000";

  mainWindow.loadURL(url).catch((err) => {
    logger.error(JSON.stringify(err));
    app.quit();
  });

  if (!isProd) mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })

  startDXServer()
};

const fileName = 'recently-used.md'
fs.writeFile(fileName, 'Lorem Ipsum', () => {
  app.addRecentDocument(path.join(__dirname, fileName))
})

app.on("ready", () =>{
  createWindow()

  //Adds more menus to the ones that already exist on Macos
  //@ts-expect-error
  Menu.setApplicationMenu(Menu.buildFromTemplate(template)) // Try and find the correct type
});

// those two events are completely optional to subscrbe to, but that's a common way to get the
// user experience people expect to have on macOS: do not quit the application directly
// after the user close the last window, instead wait for Command + Q (or equivalent).
app.on("window-all-closed", () => {
  app.clearRecentDocuments()
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

app.on("web-contents-created", (e, contents) => {
  logger.info(e);
  // Security of webviews
  contents.on("will-attach-webview", (event, webPreferences, params) => {
    logger.info(event, params);
    // Strip away preload scripts if unused or verify their location is legitimate
    delete webPreferences.preload;

    // Disable Node.js integration
    webPreferences.nodeIntegration = false;

    // Verify URL being loaded
    // if (!params.src.startsWith(`file://${join(__dirname)}`)) {
    //   event.preventDefault(); // We do not open anything now
    // }
  });

  contents.on("will-navigate", (event, navigationUrl) => {
    const parsedURL = parse(navigationUrl);
    // In dev mode allow Hot Module Replacement
    if (parsedURL.host !== "localhost:5000" && !isProd) {
      logger.warn("Stopped attempt to open: " + navigationUrl);
      event.preventDefault();
    } else if (isProd) {
      logger.warn("Stopped attempt to open: " + navigationUrl);
      event.preventDefault();
    }
  });
});

if (isProd)
  autoUpdater.checkForUpdates().catch((err) => {
    logger.error(JSON.stringify(err));
  });

autoUpdater.logger = logger;

autoUpdater.on("update-available", () => {
  notification = new Notification({
    title: "Fluide",
    body: "Updates are available. Click to download.",
    silent: true,
    // icon: nativeImage.createFromPath(join(__dirname, "..", "assets", "icon.png"),
  });
  notification.show();
  notification.on("click", () => {
    autoUpdater.downloadUpdate().catch((err) => {
      logger.error(JSON.stringify(err));
    });
  });
});

autoUpdater.on("update-not-available", () => {
  notification = new Notification({
    title: "Fluide",
    body: "Your software is up to date.",
    silent: true,
    // icon: nativeImage.createFromPath(join(__dirname, "..", "assets", "icon.png"),
  });
  notification.show();
});

autoUpdater.on("update-downloaded", () => {
  notification = new Notification({
    title: "Fluide",
    body: "The updates are ready. Click to quit and install.",
    silent: true,
    // icon: nativeImage.createFromPath(join(__dirname, "..", "assets", "icon.png"),
  });
  notification.show();
  notification.on("click", () => {
    autoUpdater.quitAndInstall();
  });
});

autoUpdater.on("error", (err) => {
  notification = new Notification({
    title: "Fluide",
    body: JSON.stringify(err),
    // icon: nativeImage.createFromPath(join(__dirname, "..", "assets", "icon.png"),
  });
  notification.show();
});




events.on('VectorworksPost', (data) =>{
  console.log('it pinged')
  mainWindow!.webContents.send('server-updated', data)
})


let script = 'tell application "Music" to get name'

// fs.readFile("src/electron/AppleScripts/Test.applescript", (err, data) => {
//   if(err){
//     console.log(err)
//     return null
//   }
//   else {
//     console.log(data.toString())
//     return data.toString()
//   }
// })

applescript.execFile("src/electron/AppleScripts/TriggerFreyurRecieve.applescript", function(err: any, rtn: any[]) {
  if (err) {
    // Something went wrong!
    console.log(err)
  }
  if (rtn.length > 0) {
    console.log(rtn)
  }
});