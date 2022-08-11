<script>
  let pageName = 'Profile Page';

  function handleClick(event) {
    console.log(event);
  }
</script>

<main>
  <h1>{pageName}!</h1>
  <p>Welcome this is my <b>{pageName}</b></p>
  <div class="nick" on:click={(e) => handleClick(e)}>Nice Svelte</div>
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1px;
    max-width: 240px;
    margin: 0 auto;
  }

  .nick {
    background-color: cadetblue;

    &::before {
      content: 'Nice Rich';
    }
  }
</style>
