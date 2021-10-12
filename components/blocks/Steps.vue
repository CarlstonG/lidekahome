<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div v-for="step in steps">
        <div class="flex w-40 h-40 mx-auto items-center justify-center text-white p-4 font-extrabold text-5xl bg-gray-900 rounded-full">
          {{ step.step }}
        </div>

        <p class="text-white font-extralight text-lg py-4 px-6 text-center">
          {{ step.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    steps: {
      type: [],
      required: true
    }
  }
});
</script>
