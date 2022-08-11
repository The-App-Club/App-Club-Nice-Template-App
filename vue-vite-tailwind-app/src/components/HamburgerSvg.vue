<template>
  <!-- https://tailwindcss.com/docs/visibility -->
  <svg
    class="block w-6 h-6"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
  <svg
    class="hidden w-6 h-6"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HamburgerSvg',
  data: () => ({}),
});
</script>
