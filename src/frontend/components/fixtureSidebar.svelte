
<Modal bind:show={modal_show} />

<script lang="ts">
  import { fly } from 'svelte/transition';
  import Modal from './Modal.svelte';
  // import {inboundData} from '../stores/fixtureStore'
  // import type {LightingDevice,  } from '../../globals'

  export let show = false;
  let modal_show = false;

  // $:lxLabels = $inboundData.LightingDevices.map((x) =>{
  //   return lxLabels.forEach(i =>{
  //     if ($inboundData.LightingDevices.includes(i)) {
  //     $inboundData.LightingDevices.push(i)
  //   }
  //   })
  // })
  
  // forEach(i => {

  // });

  const columns = ["Instrument", "Current Total"]

</script>

{#if show}
  <div transition:fly={{x: 250, opacity: 1}}>
    <button on:click={() => {modal_show = true; show = false;}}>About</button>
    <table>
        <tr>
            {#each columns as column}
              <th>{column}</th>
            {/each}
        </tr>
        <!-- {#each lxLabels as row}
          <tr>
            <td contenteditable="true">{row.instrumentType}</td>
            <td contenteditable="true"></td>
          </tr>
        {/each} -->
    </table>


  </div>

{/if}


<style>
div {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  border-left: 1px solid #aaa;
  background: #fff;
  overflow-y: auto;
	width: 10rem;
}
th{
  font-size: 12px;
  font-weight: normal;
}
</style>