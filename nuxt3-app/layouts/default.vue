<template>
  <div>
    <NavBar></NavBar>
    <Header></Header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<script>
import {defineComponent} from '@vue/composition-api';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import NavBar from '~/components/NavBar';

export default defineComponent({
  components: {
    Header,
    Footer,
    NavBar,
  },
  setup() {},
});
</script>
