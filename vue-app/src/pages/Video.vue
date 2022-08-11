<template>
  <div class="video-content">
    <h2>video page</h2>
    <ul>
      <li @click="watchVideo($event, 1)">VIDEO 1</li>
      <li @click="watchVideo($event, 2)">VIDEO 2</li>
      <li @click="watchVideo($event, 3)">VIDEO 3</li>
    </ul>
    <p class="video-sentence">video start</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video</p>
    <p class="video-sentence">video end</p>
  </div>
</template>

<script>
export default {
  name: 'Video',
  methods: {
    watchVideo(event, videoId) {
      this.$router.push({path: 'watch', query: {videoId: videoId}});
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

.video-sentence {
  color: green;
}
</style>
