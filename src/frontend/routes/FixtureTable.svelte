<script lang="ts">
    import { count } from "../stores/fixtureStore";
    import {inboundData} from '../stores/fixtureStore'
    import DataTable from "../components/dataTable.svelte";
    import TableFooter from "../components/tableFooter.svelte"
    import type { Wrap, VWInfo } from "../../globals";
    
    let test = "hi"
    // $: info = $inboundData.VWInfo[0]
    // console.log($inboundData)
</script>

<main>
    <h1>Fixture Table</h1>
    <h2>{$inboundData}</h2>
    <DataTable></DataTable>
    <TableFooter bottomLeft='Fixture Count: {test}' bottomRight="File Name: "></TableFooter>
</main>

<style>
    h1{
        color:rgb(2, 3, 3)
    }
    h2{
        color:aliceblue
    }

</style>
