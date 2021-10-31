<template>
  <div class="max-w-5xl mx-auto">
    <p class="text-white font-extralight text-left md:text-center" v-html="description">
      {{ description }}
    </p>
    <slot />
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
