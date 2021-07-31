<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 z-50">
    <div @click="closeSidebar()" class="fixed top-0 left-0 right-0 z-20 bottom-0 opacity-80 bg-black"></div>
    <div class="fixed top-0 left-0 bottom-0 z-40 flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
      <div class="absolute top-0 right-0 -mr-12 pt-2">
        <button type="button"
                @click.prevent="closeSidebar()"
                class="ml-1 border border-white flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="sr-only">Close sidebar</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div class="mt-5 flex-1 h-0 overflow-y-auto">
        <nav class="px-6 space-y-1">
          <Filters component-key="sideBar" :filters="filters" />
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Filters from "~/components/filters/Filters.vue";

export default Vue.extend({
  components: {Filters},
  props: {
    filters: {
      type: [],
      default: () => []
    },
  },

  methods: {
    closeSidebar() {
      this.$emit('closeSidebar');
    },
  }
});
</script>
