
<Modal bind:show={modal_show} />

<script lang="ts">
  import { fly } from 'svelte/transition';
  import Modal from './Modal.svelte';
  import {inboundData} from '../stores/fixtureStore'

  export let show = false;
  let modal_show = false;


  $:lxLabels = $inboundData?.LightingDevices.map(label => label.instrumentType)
  .filter((item, index, array) => array.indexOf(item) == index);

// let counts = $inboundData?.LightingDevices.map(label => label.instrumentType).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })
  const columns = ["Instrument", "Current Total", "Limit"]

</script>

{#if show}
  <div transition:fly={{x: 800, opacity: 1}}>
    <!-- <button on:click={() => {modal_show = true; show = false;}}>About</button> -->
    <table>
        <tr>
            {#each columns as column}
              <th>{column}</th>
            {/each}
        </tr>
        {#each lxLabels as row}
          <tr>
            <td contenteditable="false">{row}</td>
            <td contenteditable="false">current count</td>
            <td contenteditable="true">limit</td>
          </tr>
        {/each}
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
	width: 15rem;
}
th{
  font-size: 12px;
  font-weight: bold;
}
td{
  font-size: 11px;
  text-align: left;
}
</style>