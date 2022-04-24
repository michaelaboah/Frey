import { ipcRenderer, contextBridge } from "electron"; 



export const API = {
    // Create a method that calls to electron for the version.
    // Also set type declaration inline.
    getVersion: (): Promise<string> => ipcRenderer.invoke("GET/version"),
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system'),
    onServerUpdated: (cb: (data: any) => void) => ipcRenderer.on('server-updated', (_, data) => cb(data)),
    openWindow: (message:string) => ipcRenderer.send('open-window', message),
}


// export default APP_BRIDGE;
contextBridge.exposeInMainWorld("api", API);
