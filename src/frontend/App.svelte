

<script lang="ts">
  export let name: string;
  import Router from "svelte-spa-router"
  import Budget from "./routes/Budget.svelte";
  import Cuelist from "./routes/Cuelist.svelte";
  import FixtureTable from "./routes/FixtureTable.svelte";
  import Focus from "./routes/Focus.svelte";

  let routes = {
    "/": FixtureTable,
    "/Cuelist": Cuelist,
    "/Budget": Budget,
    "/Focus": Focus,
  }
</script>

<main>
  <nav>
    <a href="#/"> Fixture Table</a>
    <a href="#/Cuelist"> Cuelist</a>
    <a href="#/Budget"> Budget</a>
    <a href="#/Focus"> Focus</a>
  </nav>
  <Router {routes}/>
  <!-- <h1>Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte yo</a> to learn how to build Svelte apps.</p> -->
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>