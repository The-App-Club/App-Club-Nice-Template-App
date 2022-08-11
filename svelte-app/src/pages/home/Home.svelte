<script>
  import {link} from 'svelte-spa-router';
  let pageName = 'Home Page';
</script>

<main>
  <h1>{pageName}!</h1>
  <a href="/about" use:link>About</a>
  <a href="/profile" use:link>Profile</a>
  <a href="/not-found" use:link>Not Found</a>
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1px;
    max-width: 240px;
    margin: 0 auto;
  }

  a {
    display: block;
  }
</style>
