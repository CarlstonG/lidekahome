<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <div v-for="highlight in highlights" :key="highlight.description" :class="`${gradient ? 'bg-gradient' : ''} p-16 rounded-3xl`"
      :style="`${!gradient ? 'background-color: #151515' : ''}`"
    >
      <div class="text-center">
        <img :src="highlight.imageSrc" class="w-32 mx-auto mb-6" />

        <p class="text-white font-extralight text-center" v-html="highlight.description"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    highlights: {
      type: [],
      required: true
    },
    gradient: {
      type: Boolean,
      default: false,
    }
  }
});
</script>
