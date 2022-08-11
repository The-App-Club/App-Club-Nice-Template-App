<template>
  <div class="app">
    <PageHello></PageHello>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHello from '@/components/PageHello.vue'
export default {
  name: 'Home',
  components: {
    PageHello,
  },
}
</script>

<style scoped></style>
