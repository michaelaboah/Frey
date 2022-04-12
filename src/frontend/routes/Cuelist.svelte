<script>
import { count } from "../stores/fixtureStore";
    // const increment = () => {  
    //     count.update((a) => a+1) 
    //     window.document.title = $count
    // }

   
    // const decrement = () => count.update((a) => a-1)
    // const reset = () => count.set(0)

</script>

<main>
    <h1>Cuelist</h1>
    <button on:click={count.increment}>increment</button>
    <button on:click={count.decrement}>decrement</button>
    <button on:click={count.reset}>reset</button>
</main>

<style>
    h1{
        color: blue
    }
</style>