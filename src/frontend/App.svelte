<script lang="ts">
  import Router from "svelte-spa-router"

  import Budget from "./routes/Budget.svelte";
  import Cuelist from "./routes/Cuelist.svelte";
  import FixtureTable from "./routes/FixtureTable.svelte";
  import Focus from "./routes/Focus.svelte";
  import Preferences from "./routes/Preferences.svelte";
  import Cloud from "./routes/PreferencesRoutes/Cloud.svelte"
  import Licensing from "./routes/PreferencesRoutes/Licensing.svelte";

  const routes = {
    "/": FixtureTable,
    "/Cuelist": Cuelist,
    "/Budget": Budget,
    "/Focus": Focus,
    "/Preferences/Cloud": Cloud,
    "/Preferences": Preferences,
    "/Preferences/Licensing": Licensing
  }
</script>

<main>
  <nav>
    <a href="#/"> Fixture Table</a>
    <a href="#/Cuelist"> Cuelist</a>
    <a href="#/Budget"> Budget</a>
    <a href="#/Focus"> Focus</a>
    <a href="#/Preferences"> Preferences</a>
  
  </nav>
  <Router {routes}/>
</main>



  <!-- <button id="toggle-dark-mode">Toggle Dark Mode</button>
  <button id="reset-to-system">Reset to System Theme</button> -->


<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  /* header{
    margin: auto;
    background-color: red;

  } */
</style>