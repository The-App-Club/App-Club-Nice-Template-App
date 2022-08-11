<template>
  <div class="watch-content">
    <h2>watch page</h2>
    <div class="video"></div>
    <p class="watch-sentence">watch start</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch</p>
    <p class="watch-sentence">watch end</p>
  </div>
</template>

<script>
export default {
  name: 'Watch',
  mounted() {
    console.log(this.$route.query);
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

.watch-sentence {
  color: red;
}
</style>
