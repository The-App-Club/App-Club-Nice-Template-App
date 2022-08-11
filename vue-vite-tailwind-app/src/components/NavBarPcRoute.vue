<template>
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <img
        class="w-8 h-8"
        src="/svg/workflow-mark-on-white.svg"
        alt="Workflow logo"
      />
    </div>
    <div class="hidden md:block">
      <div class="flex items-baseline ml-10">
        <router-link
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          custom
          v-slot="{navigate, href, isExactActive}"
        >
          <a
            :href="href"
            @click="navigate"
            class="px-3 py-2 text-sm font-medium rounded-md"
            :class="[
              isExactActive
                ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
              i > 0 && 'ml-4',
            ]"
            >{{ link.text }}</a
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'NavBarPcRoute',
  data: () => ({
    links: [
      {text: 'Home', to: '/'},
      {text: 'About', to: '/about'},
    ],
  }),
});
</script>
