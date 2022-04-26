<script>

	import {inboundData, editArray} from '../stores/fixtureStore'
	
	$: fixtures = $inboundData.LightingDevices.map((x) => {
		//@ts-expect-error
		const {channel, instrumentType, position, purpose, unitNumber, wattage, template1, color, patch, userField1, userField2, __UID} = x
		return x
	})
	let columns = ["Channel", "Symbol", "Position", "Purpose", "Unit #", "Load", "Accessory", "Color", "Patch", "User 15", "User 2", "UID"]
	let isFocused = false;
	let value = 'test'
	const onInput = (e) => value = e.target.value;
	const onFocus = () => isFocused = true;
	const onBlur = () => isFocused = false;
</script>
<table>
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	{#each fixtures as row}
		<tr>
			<td contenteditable bind:textContent={row.channel} on:input={() => {editArray.addChange('channel', row.channel.toString())}}> </td>
			<td contenteditable bind:textContent={row.instrumentType} on:focus={onFocus} on:blur={onBlur} {value}></td>
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
			<td contenteditable bind:textContent={row.__UID}></td>
		</tr>
		<h1>{row.channel}</h1>
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