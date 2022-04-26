<script lang="ts">
    import VerticalNavBar from "../components/VerticalNavBar.svelte";

    let current = 'linkSelected'
</script>

<div>
    
    <VerticalNavBar>
            <a href="#/Preferences/" 
                class:selected="{current === 'linkSelected'}"
                on:click="{() => current = 'linkSelected'}"
            > General</a> 
            <a href="#/Preferences/Cloud"> Cloud</a> 
            <a href="#/Preferences/Licensing" > Licensing</a> 

    </VerticalNavBar>
</div>
<main>
    <h1>General Preferences</h1>
    <h3 class="Subjects">Appearance</h3>
    <br class="separator">
    <button id="darkModeButton" on:click={() => window.api.toggle()}> Toggle Theme</button>
</main>

<style>
    main{
        padding-left: 7%;
        margin-right: 7%;
    }
    #darkModeButton{
        position: fixed;
        top: 12%;
        left: 17%;
    }
    .Subjects{
        text-align: left;
    }
</style>



