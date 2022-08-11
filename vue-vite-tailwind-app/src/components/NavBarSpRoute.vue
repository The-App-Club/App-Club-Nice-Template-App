<template>
  <div class="px-2 pt-2 pb-3 sm:px-3">
    <router-link
      v-for="(link, i) in links"
      :key="i"
      :to="link.to"
      custom
      v-slot="{navigate, href, isExactActive}"
    >
      <a
        :href="href"
        @click="navigate().then(() => (showMenu = false))"
        class="block px-3 py-2 text-base font-medium rounded-md"
        :class="[
          isExactActive
            ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
            : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
          i > 0 && 'mt-1',
        ]"
        >{{ link.text }}</a
      >
    </router-link>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'NavBarSpRoute',
  data: () => ({
    showMenu: false,
    links: [
      {text: 'Home', to: '/'},
      {text: 'About', to: '/about'},
    ],
  }),
});
</script>
