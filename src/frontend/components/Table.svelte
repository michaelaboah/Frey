<script > 
	export let tableContents
	export let columns
</script>
<table>
	<!-- Create a Hide Columns function -->
	<tr>
		{#each columns as column}
			<th>{column}</th>
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