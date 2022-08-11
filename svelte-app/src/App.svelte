<script>
  import Router from 'svelte-spa-router';
  import Home from './pages/home/Home.svelte';
  import Profile from './pages/profile/Profile.svelte';
  import NotFound from './pages/not-found/NotFound.svelte';
  import About from './pages/about/About.svelte';
  // https://github.com/EmilTholin/svelte-routing/issues/122
  export let name = '';
  export let url = ''; //This property is necessary declare to avoid ignore the Router

  // https://github.com/ItalyPaleAle/svelte-spa-router#define-your-routes
  export const routes = {
    '/': Home,

    '/profile': Profile,

    '/about': About,

    '*': NotFound,
  };
</script>

<main>
  <h1>Welcome Home</h1>
  <Router {routes} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
