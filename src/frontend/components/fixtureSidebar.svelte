<script lang="ts">

  import { fly } from 'svelte/transition';
  import {inboundData} from '../stores/fixtureStore'

  export let show = false;


  $:lxLabels = $inboundData?.LightingDevices.map(label => label.instrumentType).filter((item, index, array) => array.indexOf(item) == index);
  $:count = $inboundData?.LightingDevices.reduce<Record<string, number>>((accumulator, label) => {
    return {...accumulator, [label.instrumentType]: (accumulator[label.instrumentType] || 0) + 1};
  }, {}) as Record<string, number>;

  
  const columns = ["Instrument", "Current Total", "Limit"]

</script>

{#if show}
  <div transition:fly={{x: 800, opacity: 1}}>
    <button 
        on:click={() => show = false}
        id="sideBarClose"
    >Close
    </button>
    <table>
        <tr>
            {#each columns as column}
              <th>{column}</th>
            {/each}
        </tr>
        {#each lxLabels as row}
          <tr>
            <td contenteditable="false">{row}</td>
            <td contenteditable="false">{count[row]}</td>
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
  background: rgb(30, 31, 32);
  overflow-y: auto;
	width: 15rem;
}
th{
  font-size: 14px;
  font-weight: bold;
}
td{
  font-size: 13px;
  text-align: left;
}

#sideBarClose{
  margin-left: 7rem;
}
</style>