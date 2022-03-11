<template>
  <component :is="tag" class="text-left md:text-center text-white max-w-4xl mx-auto font-bold text-3xl">
    {{ title }}
  </component>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'h2'
    }
  }
});
</script>
