<template>
  <div class="pt-4 pb-3 border-t border-gray-700">
    <div class="flex items-center px-5">
      <div class="flex-shrink-0">
        <img class="w-10 rounded-full" src="/image/santa.png" alt="" />
      </div>
      <div class="ml-3">
        <div class="text-base font-medium leading-none text-white">
          Tom Cook
        </div>
        <div class="mt-1 text-sm font-medium leading-none text-gray-400">
          tom@example.com
        </div>
      </div>
    </div>
    <div class="px-2 mt-3">
      <a
        href="#"
        class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >Your Profile</a
      >
      <a
        href="#"
        class="block px-3 py-2 mt-1 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >Settings</a
      >
      <a
        href="#"
        class="block px-3 py-2 mt-1 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >Sign out</a
      >
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'NavBarSpProfile',
  data: () => ({}),
});
</script>
