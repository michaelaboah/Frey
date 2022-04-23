import { writable } from 'svelte/store';
import type {Wrap,  } from '../../globals'


const createStore = () =>{
    const {subscribe, update, set} = writable(0)
    const increment = () => {  
        update((a) => {
            let x = a+1
            document.title = x.toString()
            return a+1;
        }) 
    }
    const decrement = () => {  
        update((a) => {
            let x = a-1
            document.title = x.toString()
            return a-1;
        }) 
    }
    return {subscribe, increment, set, decrement}
}

//Get Vectorworks Data from DX server to UI
export const getFromDX = async ():Promise<Wrap> =>{
    const reponse = await fetch("http://localhost:29212/FreyurGet")
    return await reponse.json();
}

//Send Changed Data from UI to DX server
export const sendToVW = async (changes:Wrap)=> {
    const request = await fetch("http://localhost:29212/FreyurPost", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(changes)
    })
    console.log(changes)
    console.log(request)
}


const updateLights = () =>{
    const {subscribe, set, update} = writable<Wrap>({VWInfo:[], LightingDevices:[]})
    //@ts-expect-error
    window.api.onServerUpdated(async (params) =>{
        let refinedData: Wrap = await getFromDX();
        set(refinedData);     
    })
    return {subscribe, update}
}




const lookAhead = () => {
    const {subscribe, set} = writable<Map<string, string>>()
    const changeTable = new Map<string, string>([])
    set(changeTable)
    return {subscribe, set}
}



export const newAlgTest = async (params:Map<string, string>) => {
    const request = await fetch("http://localhost:29212/Test", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(Object.fromEntries(params))
    })
    console.log(JSON.stringify(params))
    console.log(request)
}

export const tableTest = lookAhead()
export const inboundData = updateLights()
export const count = createStore();