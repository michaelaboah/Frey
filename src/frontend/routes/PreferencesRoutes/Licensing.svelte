<script lang="ts">
import VerticalNavBar from "../../components/VerticalNavBar.svelte";


let current = 'linkSelected'
</script>

<h1>
    Licensing
</h1>
<div>
    <VerticalNavBar>
        <a href="#/Preferences/"> General </a>
        <a href="#/Preferences/Cloud"> Cloud </a>
        <a href="#/Preferences/Licensing"
            class:selected="{current === 'linkSelected'}"
            on:click="{() => current = 'linkSelected'}"
        > Licensing </a>
    </VerticalNavBar>
</div>

<style>
</style>