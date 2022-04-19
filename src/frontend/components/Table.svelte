<script > 
	import Autocomplete from "./Autocomplete.svelte";
	import {inboundData} from '../stores/fixtureStore'
	export let tableContents
	export let columns

	// let counts = $inboundData?.LightingDevices.map(label => label.instrumentType).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })

</script>
<table>
	<!-- Create a Hide Columns function -->
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	<tr>
		{#each columns as autoCol}
		<th><Autocomplete></Autocomplete></th>
		{/each}
	</tr>
	{#each tableContents as row}
		<tr>
			{#each Object.values(row) as cell}
				<td contenteditable bind:textContent={cell}></td>
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