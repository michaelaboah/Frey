import Store from 'electron-store'

type WindowStore = {
    winSize:number[],
    winPos:number[],
    bounds:Electron.Rectangle
}
const windowStorage = new Store<WindowStore>();
const dataStorage = new Store();


export const getWinRect = () =>{
    const defaultBounds = {
        x: 500,
        y: 500,
        width: 800,
        height: 600,
    }
    const size = windowStorage.get('bounds')

    if(size) return size
    else windowStorage.set('bounds', defaultBounds)
    return defaultBounds
}

                            
export const saveBounds = (bounds:Electron.Rectangle) =>{
    windowStorage.set('bounds', bounds)
}
