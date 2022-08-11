<template>
  <div>
    <NavBar />

    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {{ $route.meta.title }}
        </h1>
      </div>
    </header>

    <div class="max-w-screen-xl py-6 mx-auto sm:px-6 lg:px-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>
