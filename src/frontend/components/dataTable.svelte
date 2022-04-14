<script lang="ts">
	import {lights} from '../stores/fixtureStore'
	// import {VWInfo} from '../../globals'
	// import {getThenUpdate} from '../stores/fixtureStore'
	 
	
	$: fixtues = $lights.map((x, i) => {
		const {channel, instrumentType, } = x
		return {id:i, channel, instrumentType}
	})
	
	


	function addRow() {
        // lots of syntatic sugar
		data = [...data, [...newRow]]
		newRow = columns
	}
	function deleteRow(rowToBeDeleted: string[]) {
		data = data.filter(row => row != rowToBeDeleted)
	}
	let columns = ["Channel", "Email", "Phone Number"]
	let data = [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Sarah", "sarah@gmail.com", "(01) 22 888 4444"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
  ]

  
	let newRow = [...columns];
</script>

<table>
	<!-- <h1>{$lights}</h1> -->
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each fixtues as row}
		<tr contenteditable="true">
			<!-- {#each row as cell}
			<td contenteditable="true" bind:innerHTML={cell} />
			{/each}
			<button on:click={() => deleteRow(row)}>X</button> -->
			<td>{row.channel.toString()}</td>
			<td>{row.instrumentType.toString()}</td>
			<td>{row.id.toString()}</td>
		</tr>
	{/each}
	<tr style="color: grey">
		{#each newRow as column}
			<td contenteditable="true" bind:innerHTML={column} />
		{/each}
	</tr>
	<pre style="background: #eee">{JSON.stringify(data, null, 2)}</pre>
</table>

<style>
	tr td:focus {
		background: #eee;
	}
    table{
        color: rgb(3, 3, 4)
    }
</style>