<template>
  <div class="max-w-5xl mx-auto">
    <p class="text-white font-extralight text-center">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    description: {
      type: String,
      default: ''
    },
  }
});
</script>
