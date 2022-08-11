<script setup>
// https://v3.nuxtjs.org/docs/usage/data-fetching
const {data} = await useAsyncData('count', () => $fetch('/api/count'));
</script>

<template>
  <div>
    <h2>About</h2>
    <p>Page visits: {{ data }}</p>
    <img src="@/assets/image/SlackImage.png" alt="SlackImage" />
  </div>
</template>
