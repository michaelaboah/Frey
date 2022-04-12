import { ipcRenderer, contextBridge } from "electron"; 



const APP_BRIDGE = {
    // Create a method that calls to electron for the version.
    // Also set type declaration inline.
    getVersion: (): Promise<string> => ipcRenderer.invoke("GET/version"),
    // getCpus: (): Promise<Systeminformation.CurrentLoadCpuData[]> => ipcRenderer.invoke("GET/CPUUsage"),
    onServerUpdated: (cb: (data: any) => void) => ipcRenderer.on('server-updated', (_, data) => cb(data))
}


export default APP_BRIDGE;
contextBridge.exposeInMainWorld("api", APP_BRIDGE);