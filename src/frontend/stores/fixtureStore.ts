import { writable } from 'svelte/store';
import type {Wrap,  } from '../../globals'


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


const updateLights = () => {
    const {subscribe, set, update} = writable<Wrap>({VWInfo:[], LightingDevices:[]})
    //@ts-expect-error
    window.api.onServerUpdated(async (params) =>{
        let refinedData: Wrap = await getFromDX();
        set(refinedData);     
    })
    return {subscribe, update}
}




const lookAhead = () => {
    const {subscribe, set} = writable<Array<Map<string, string>>>()
    const listOfChanges = Array<Map<string, string>>()
    const addChange = (key:string, value:string) => {
        const changedValue = new Map<string, string>().set(key, value);
        listOfChanges.push(changedValue)
    }
    set(listOfChanges)
    return {subscribe, set, addChange}
}



export const newAlgTest = async (params:Array<Map<string, string>>) => {
    const request = await fetch("http://localhost:29212/Test", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(params.map(i => Object.fromEntries(i.entries())))
    })
    // params.forEach(i => ))
    console.log(request)
}

export const editArray = lookAhead()
export const inboundData = updateLights()
