<script > 
	import Autocomplete from "./Autocomplete.svelte";
	import {inboundData} from '../stores/fixtureStore'
	export let tableContents
	export let columns
	// export let autoCompFields
	
</script>
<table>
	<!-- Create a Hide Columns function -->
	<tr>
		<Autocomplete></Autocomplete>
	</tr>
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	<tr>
		{#each tableContents as col}
			
			<!-- {#each Object.keys(row) as header} -->
				<!-- <td>{header}</td> -->
				<!-- <th><Autocomplete options={[...new Set(Object.keys(col))]}></Autocomplete></th> -->
				<!-- {console.log(header)} -->
				
			<!-- {/each} -->
		{/each}
	</tr>
	{#each tableContents as row}
		<tr>
			{#each Object.values(row) as cell}
				<td contenteditable="true" bind:textContent={cell}></td>
			{/each}
		</tr>
	{/each}
</table>


<style>
	tr td:focus {
		background: #eee;
	}
	th{
		text-align: center;
		font-size: 16px;
	}
	tr{
		font-size: 13px;
	}
    table{
        /* color: rgb(3, 3, 4); */
		text-align: left;
		width: 100%;
		margin-bottom: 5%;
		/* position: fixed; */
    }
</style>