import { writable } from 'svelte/store';
import type { LightingDevice, Wrap,  } from '../../globals'


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


export const getThenUpdate = async ():Promise<Wrap> =>{
    const reponse = await fetch("http://localhost:29212/VectorworksGet")
    return await reponse.json();
}




const updateLights = () =>{
    const {subscribe, set} = writable<LightingDevice[]>([])
    //@ts-expect-error
    window.api.onServerUpdated(async (params) =>{
        let refinedData: Wrap = await getThenUpdate();
        console.log(refinedData)
        set(refinedData.LightingDevices);     
    })
    return {subscribe}
}

export const lights = updateLights()
export const count = createStore();