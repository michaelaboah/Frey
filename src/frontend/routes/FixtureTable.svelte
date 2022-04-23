<script lang="ts">
    import {inboundData, sendToVW, tableTest, newAlgTest} from '../stores/fixtureStore'
    import TableFooter from "../components/tableFooter.svelte"
    import Sidebar from '../components/fixtureSidebar.svelte';
    import DataTable from '../components/dataTable.svelte'
    // import DataTable from "../components/dataTable.svelte";
    // import Table from '../components/Table.svelte';

    
    let coutingsShow: boolean
    // let columns = [
    //     // "Channel",
    //     "Channel",
    //     "Symbol",
    //     // "Fixture Mode",
    //     "Wattage",
    //     "Weight",
    //     // "Frame Size",
    //     "Position",
    //     "Purpose",
    //     "Unit Number",
    //     "Patch",
    //     // "Circuit Number",
    //     // "Circuit Name",
    //     // "Dmx Line",
    //     "Dmx Footprint",
    //     "DeviceType",
    //     "Color",
    //     "Template1",
    //     "Template2",
    //     "UserField1",
    //     "UserField2",
    //     "UserField3",
    //     "UserField4",
    //     "UserField5",
    //     "UserField6",
    //     // "Rotation",
    //     // "__UID",
    //     "Class",
    //     "Layer",
    // ]

    $: info = $inboundData?.VWInfo[0]
    // $: fixtures = $inboundData.LightingDevices.map((i) => { 
    //     return {
    //         channel: i.channel, 
    //         instrumentType: i.instrumentType, 
    //         // frameSize: i.frameSize,
    //         wattage: i.wattage,
    //         weight: i.weight,
    //         position: i.position,
    //         unitNumber: i.unitNumber,
    //         patch: i.patch,
    //         dmxFootprint: i.dmxFootprint,
    //         deviceType: i.deviceType,
    //         color: i.color,
    //         template1: i.template1,
    //         template2: i.template2,
    //         userfield1: i.userField1,
    //         userfield2: i.userField2,
    //         userfield3: i.userField3,
    //         userfield4: i.userField4,
    //         userfield5: i.userField5,
    //         userfield6: i.userField6,
    //         class: i.class,
    //         layer: i.layer,
    //     }
    // })

    let foo = $tableTest.set("instrumentType", "ETC Source4 26deg 750W")

    console.log(foo.get('instrumentType'))
</script>
<main>
    <h1>Fixture Table</h1>
    <button on:click={() => sendToVW($inboundData)}>Send to Vectorworks</button>
    <button on:click={() => newAlgTest($tableTest)}> Test Table</button>
    <button on:click={() => coutingsShow = !coutingsShow}  id="countingsButton">Countings</button>
    <Sidebar bind:show={coutingsShow}></Sidebar>
    <!-- <Table columns={columns} tableContents={fixtures}></Table> -->
    <DataTable></DataTable>
    <TableFooter bottomLeft='Fixture Count: {info?.fixtureCount}' bottomRight="File Name: {info?.fileName.split('/').pop()?.split("\\").pop()}"></TableFooter>
</main>

<style>


    #countingsButton{
        position: relative;
        left: 30%;
    }
</style>
