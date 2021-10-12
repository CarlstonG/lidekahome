<template>
  <h2 class="text-center text-white max-w-4xl mx-auto font-extralight text-base font-italic">
    {{ title }}
  </h2>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
  }
});
</script>
