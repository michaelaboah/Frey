<script lang="ts"> 
	import {inboundData} from '../stores/fixtureStore'

	 
	
	$: fixtures = $inboundData.LightingDevices.map((x) => {
		const {channel, instrumentType, position, purpose, unitNumber, wattage, template1, color, patch, userField1, userField2} = x
		return {channel, instrumentType, position, purpose, unitNumber, wattage, template1, color, patch, userField1, userField2}
	})

	let columns = ["Channel", "Symbol", "Position", "Purpose", "Unit #", "Load", "Accessory", "Color", "Patch", "User 1", "User 2", "User 3"]

	// let newRow = [...columns];
</script>

<table on:change={() => inboundData.update}>
	<!-- <h1>{$lights}</h1> -->
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each fixtures as row}
		<tr>
			<!-- {#each row as cell}
			<td contenteditable="true" bind:innerHTML={cell} />
			{/each}
			<button on:click={() => deleteRow(row)}>X</button> -->
			<td contenteditable="true" selected> {row.channel.toString()} </td>
			<td contenteditable="true">{row.instrumentType.toString()}</td>
			<td contenteditable="true">{row.position.toString()}</td>
			<td contenteditable="true">{row.purpose.toString()}</td>
			<td contenteditable="true">{row.unitNumber.toString()}</td>
			<td contenteditable="true">{row.wattage.toString()}</td>
			<td contenteditable="true">{row.template1.toString()}</td>
			<td contenteditable="true">{row.color.toString()}</td>
			<td contenteditable="true">{row.patch.toString()}</td>
			<td contenteditable="true">{row.userField1.toString()}</td>
			<td contenteditable="true">{row.userField2.toString()}</td>
			<!-- <td>{row.position.toString().up}</td> -->
		</tr>

	{/each}
	<!-- <tr style="color: grey">
		{#each newRow as column}
			<td contenteditable="true" bind:innerHTML={column} />
		{/each}
	</tr> -->
	<!-- <pre style="background: #eee">{JSON.stringify(data, null, 2)}</pre> -->
</table>


<style>
	tr td:focus {
		background: #eee;
	}
	th{
		text-align: center;
		font-size: 16px;
		/* border: none;
		border-left: grey; */
		/* border-left: grey, st; */
	}
	tr{
		font-size: 13px;
	}
	td{
		
	}

    table{
        color: rgb(3, 3, 4);
		text-align: left;
		width: 100%;
		margin-bottom: 5%;
		/* position: fixed; */
    }
</style>