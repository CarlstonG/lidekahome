<template>
  <div class="flex items-center justify-center">
    <NuxtLink :to="to" class="flex items-center transition-all space-x-4 shadow-md p-3 px-6 items-center justify-center border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-bold tracking-wide"
    >
      <span><slot /></span>
      <svg class="h-5 w-5"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 20 20" fill="currentColor"
           aria-hidden="true">
        <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"/>
      </svg>
    </NuxtLink>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true
    },
  }
});
</script>
