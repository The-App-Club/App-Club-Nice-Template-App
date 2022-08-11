<template>
  <nav class="bg-gray-800">
    <NavBarPc @changedToggleSpMenu="handleChangedToggleSpMenu($event)" />
    <NavBarSp :showMenu="showMenu" />
  </nav>
</template>

<script>
import {defineComponent} from 'vue';

import NavBarSp from './NavBarSp.vue';
import NavBarPc from './NavBarPc.vue';

export default defineComponent({
  name: 'NavBar',
  data: () => ({
    showMenu: false,
  }),
  methods: {
    handleChangedToggleSpMenu(showMenu) {
      // 初回の正規化のためダブル
      this.showMenu = !!showMenu;
    },
  },
  components: {
    NavBarSp,
    NavBarPc,
  },
});
</script>
