import { writable } from 'svelte/store';



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

export const getThenUpdate = () =>{
    fetch("http://localhost:29212/VectorworksGet")
    .then(data => {
        return data.json();
    }).then(post => {
        console.log(post)
    })
}

export const count = createStore();