<template>
  <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <NavBarPcRoute />
      <NavBarPcProfile />
      <div class="flex -mr-2 md:hidden">
        <button
          class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          @click="toggleSpMenu($event)"
        >
          <HamburgerSvg />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import HamburgerSvg from './HamburgerSvg.vue';
import NavBarPcProfile from './NavBarPcProfile.vue';
import NavBarPcRoute from './NavBarPcRoute.vue';

export default defineComponent({
  name: 'NavBarPc',
  data: () => ({
    showMenu: false,
  }),
  methods: {
    toggleSpMenu(e) {
      this.showMenu = !this.showMenu;
      this.$emit('changedToggleSpMenu', this.showMenu);
    },
  },
  components: {
    NavBarPcProfile,
    NavBarPcRoute,
    HamburgerSvg,
  },
});
</script>
