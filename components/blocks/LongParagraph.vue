<template>
  <div :class="`text-white font-extralight rounded-lg ${bgColor ? 'p-3 md:p-10 py-6' : ''}`"
    :style="`${bgColor ? 'background: rgba(255, 255, 255, 0.1)' : ''}`"
  >
    <h2 v-if="title" class="uppercase text-white font-bold text-3xl mx-auto mb-6 max-w-5xl">{{ title }}</h2>
    <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    bgColor: {
      type: Boolean,
      default: false,
    }
  }
});
</script>
