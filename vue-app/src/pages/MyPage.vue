<template>
  <div class="mypage-content">
    <h2>mypage</h2>
    <p class="mypage-sentence">mypage start</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage</p>
    <p class="mypage-sentence">mypage end</p>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  methods: {
    cool(event) {
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

.mypage-sentence {
  color: cornflowerblue;
}
</style>
