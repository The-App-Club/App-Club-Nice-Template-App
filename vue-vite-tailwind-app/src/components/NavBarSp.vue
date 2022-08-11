<template>
  <div class="md:hidden" :class="showMenu ? 'block' : 'hidden'">
    <NavBarSpRoute />
    <NavBarSpProfile />
  </div>
</template>

<script>
import {defineComponent} from 'vue';

import NavBarSpRoute from './NavBarSpRoute.vue';
import NavBarSpProfile from './NavBarSpProfile.vue';

// https://v3.vuejs.org/guide/typescript-support.html#annotating-props
export default defineComponent({
  name: 'NavBarSp',
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    NavBarSpRoute,
    NavBarSpProfile,
  },
});
</script>
