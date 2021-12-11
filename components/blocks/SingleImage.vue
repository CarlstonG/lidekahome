<template>
  <div v-motion-fade-up class="relative">
    <img :src="imageSrc" class="rounded-2xl max-h-96 object-cover w-full" />
    <p v-if="description" class="text-white font-extralight lg:absolute bottom-10 left-10 right-10" v-html="description"></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    }
  }
});
</script>
