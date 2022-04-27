<script lang="ts">
    import VerticalNavBar from "../components/VerticalNavBar.svelte";

    let current = 'linkSelected'
</script>

<div>
    <VerticalNavBar>
            <a href="#/Preferences/" 
                class:selected="{current === 'linkSelected'}"
                on:click="{() => current = 'linkSelected'}"
            >General</a> 
            <a href="#/Preferences/Cloud">Cloud</a> 
            <a href="#/Preferences/Licensing">Licensing</a> 
    </VerticalNavBar>
</div>
<main>
    <h1>General Preferences</h1>
    
    <div class="pref-section">
        <h2 class="subjects">Appearance</h2>
        <div class="separator"></div>
        <h4 class="pref-item">Change Theme</h4>
        <button id="dark-mode-button" on:click={() => window.api.toggle()}>Toggle Theme</button>
        <h4 class="pref-item">Sync With System</h4>
        <button id="theme-mode-button" on:click={() => window.api.system()}>Use System Theme</button>
        
    </div>

    <div class="pref-section">
        <h2 class="subjects">Appearance</h2>
        <div class="separator"></div>
        <h4 class="pref-item">Change Theme</h4>
        <button id="dark-mode-button" on:click={() => window.api.toggle()}>Toggle Theme</button>
        <h4 class="pref-item">Sync With System</h4>
        <button id="theme-mode-button" on:click={() => window.api.system()}>Use System Theme</button>
        
    </div>

    <div class="pref-section">
        <h2 class="subjects">Appearance</h2>
        <div class="separator"></div>
        <h4 class="pref-item">Change Theme</h4>
        <button id="dark-mode-button" on:click={() => window.api.toggle()}>Toggle Theme</button>
        <h4 class="pref-item">Sync With System</h4>
        <button id="theme-mode-button" on:click={() => window.api.system()}>Use System Theme</button>
    </div>
</main>

<style>
    main{
        padding-left: 7%;
        margin-right: 7%;
    }
    #dark-mode-button{
        position: relative;
        bottom: 4.2vh;
        right: 25vw;
    }
    #theme-mode-button{
        position: relative;
        bottom: 4.2vh;
        right: 25vw;
    }
    .subjects{
        text-align: left;
        margin-left: -2%;
    }

    .separator{
        background-color: #1e1f20;
        height: 5px;
        width: 80%;
        margin-left: -2%;
    }

    @media (prefers-color-scheme: dark) {
	    .separator {background-color: #1e1f20;}
    }

    @media (prefers-color-scheme: light) {
	    .separator {background-color: #a1a7ad;}
    }
    .pref-item{
        text-align: left;        
        margin-bottom: 2vh;
    }

    .pref-section{
        padding-left: 4%;
        margin-bottom: 5vh;
    }
</style>



