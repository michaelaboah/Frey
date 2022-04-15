<script lang="ts">
    import {inboundData} from '../stores/fixtureStore'
    import DataTable from "../components/dataTable.svelte";
    import TableFooter from "../components/tableFooter.svelte"
    import Sidebar from '../components/fixtureSidebar.svelte';
    
    let coutingsShow: boolean

    $: info = $inboundData?.VWInfo[0]
</script>

<main>
    <h1>Fixture Table</h1>
    <button on:click={() => coutingsShow = !coutingsShow} id="countingsButton">Countings</button>
    <Sidebar bind:show={coutingsShow}></Sidebar>
    <DataTable></DataTable>
    <TableFooter bottomLeft='Fixture Count: {info?.fixtureCount}' bottomRight="File Name: {info?.fileName.split('/').pop()?.split("\\").pop()}"></TableFooter>
</main>

<style>
    h1{
        color:rgb(2, 3, 3)
    }

    #countingsButton{
        position: relative;
        left: 30%;
    }
</style>
