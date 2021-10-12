<template>
  <div class="relative">
    <img :src="imageSrc" />

    <div class="text-white font-extralight top-10 lg:absolute left-10 mt-10 lg:mt-0 right-10 p-10 border border-white rounded-xl"
      style="left: 50%;"
    >
      <slot />
    </div>
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
  }
});
</script>
