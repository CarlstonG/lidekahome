<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <div v-for="highlight in highlights" :key="highlight.description" :class="`${gradient ? 'bg-gradient' : ''} flex items-center justify-center flex-col space-y-6 p-16 rounded-3xl`"
      :style="`${!gradient ? 'background-color: #151515' : ''}`"
    >
      <div class="flex-grow flex items-center">
        <img :src="highlight.imageSrc" class="w-32" />
      </div>
      <p class="text-white font-extralight text-center">
        {{ highlight.description }}
      </p>
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
