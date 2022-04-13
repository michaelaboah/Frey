import { writable } from 'svelte/store';
// import api from '../../global'


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


export const getThenUpdate = async ():Promise<JSON> =>{
    const reponse = await fetch("http://localhost:29212/VectorworksGet")
    return await reponse.json();
}




const updateLights = () =>{
    // const {subscribe, set} = writable<JSON>()
    // window.api.onServerUpdated(async (params) =>{
    //     let lxData = await getThenUpdate();
    //     set(lxData);     
    // })
    // return {subscribe}
}

export const lights = updateLights()
export const count = createStore();