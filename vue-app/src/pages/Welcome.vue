<template>
  <div class="welcome-content">
    <h2>welcome page</h2>
    <button @click="login($event)">login</button>
    <p class="welcome-sentence">welcome start</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome</p>
    <p class="welcome-sentence">welcome end</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    login(event) {
      this.$router.push({path: 'video'});
      console.log(event, this.$router);
    },
  },
};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.welcome-sentence {
  color: pink;
}
</style>
