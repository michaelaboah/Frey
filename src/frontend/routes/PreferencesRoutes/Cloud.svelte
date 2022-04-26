<script lang="ts">
    import VerticalNavBar from '../../components/VerticalNavBar.svelte'
    let current = 'linkSelected'
</script>

<h1>
    Cloud
</h1>
<div>
    <VerticalNavBar>
        <a href="#/Preferences/"> General </a>
        <a href="#/Preferences/Cloud"
            class:selected="{current === 'linkSelected'}"
            on:click="{() => current = 'linkSelected'}"
        > Cloud </a>
        <a href="#/Preferences/Licensing"> Licensing </a>
    </VerticalNavBar>
</div>

<style>


</style>