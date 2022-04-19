<script lang="ts">
    import type {Cue} from '../../globals'
    import Table from '../components/Table.svelte';
    import TableFooter from '../components/tableFooter.svelte';
    
    let cueColumns: string[] = ['Cue Number', 'Intensity Fade Up', 'Intensity Fade Down', 'Focus', 'Color', 'Beam', 'Duration', 'Label']
    let cueList: Cue[] = [
        // {
        //     cueNumber: 2,
        //     intensityFadeUp: 3.0,
        //     intensityFadeDown: 2.5,
        //     focusFade: 3,
        //     colorFade: 0,
        //     beamFade: 0,
        //     duration: 0,
        //     cueLabel: "First Cue"
        // }
    ]
</script>

<main>
    <h1>Cuelist</h1>
    <button id="addCue">Add Cue</button> 
    <button id="deleteCue">Delete Cue</button>
    <Table columns={cueColumns} tableContents={cueList}></Table>
    <TableFooter bottomLeft="Cue Count: {cueList.length}" bottomRight=""></TableFooter>
</main>

<style>
#addCue{
    left: 40rem;
}
</style>