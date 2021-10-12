<template>
  <h2 class="uppercase text-center text-white max-w-4xl mx-auto font-bold text-3xl">
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
