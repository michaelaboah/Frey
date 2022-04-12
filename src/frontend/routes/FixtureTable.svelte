<script lang="ts">
    import { count } from "../stores/fixtureStore";
    import DataTable from "../components/dataTable.svelte";

</script>

<main>
    <h1>Fixture Table</h1>
    <h2>{$count}</h2>
    <DataTable></DataTable>
</main>

<style>
    h1{
        color:rgb(2, 3, 3)
    }
    h2{
        color:aliceblue
    }
</style>
