<script lang="ts"> 
	import {inboundData, sendToVW} from '../stores/fixtureStore'

	 
	
	$: fixtures = $inboundData.LightingDevices.map((x) => {
		const {channel, instrumentType, position, purpose, unitNumber, wattage, template1, color, patch, userField1, userField2} = x
		return x
	})
	let columns = ["Channel", "Symbol", "Position", "Purpose", "Unit #", "Load", "Accessory", "Color", "Patch", "User 15", "User 2", "User 3"]
</script>
<table>
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	{#each fixtures as row}
		<tr>
			<td contenteditable bind:textContent={row.channel}> </td>
			<td contenteditable bind:textContent={row.instrumentType}></td>
			<td contenteditable bind:textContent={row.position}></td>
			<td contenteditable bind:textContent={row.purpose}></td>
			<!-- <td><input bind:value={row.purpose}/></td> -->
			<td contenteditable bind:textContent={row.unitNumber}></td>
			<td contenteditable bind:textContent={row.wattage}></td>
			<td contenteditable bind:textContent={row.template1}></td>
			<td contenteditable bind:textContent={row.color}></td>
			<td contenteditable bind:textContent={row.patch}></td>
			<td contenteditable bind:textContent={row.userField1}></td>
			<td contenteditable bind:textContent={row.userField2}></td>
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
    table{
        /* color: rgb(3, 3, 4); */
		text-align: left;
		width: 100%;
		margin-bottom: 5%;
		/* position: fixed; */
    }
</style>