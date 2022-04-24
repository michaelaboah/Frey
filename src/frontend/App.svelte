

<script lang="ts">
  export let name: string;
  import Router from "svelte-spa-router"

  import Budget from "./routes/Budget.svelte";
  import Cuelist from "./routes/Cuelist.svelte";
  import FixtureTable from "./routes/FixtureTable.svelte";
  import Focus from "./routes/Focus.svelte";
import Preferences from "./routes/Preferences.svelte";

  let routes = {
    "/": FixtureTable,
    "/Cuelist": Cuelist,
    "/Budget": Budget,
    "/Focus": Focus,
    "/Preferences": Preferences
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
  <!-- <h1>Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte yo</a> to learn how to build Svelte apps.</p> -->

  <button id="toggle-dark-mode">Toggle Dark Mode</button>
  <button id="reset-to-system">Reset to System Theme</button>
</main>

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
</style>