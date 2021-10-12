<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div :class="`lg:col-span-4 ` + (reverse ? ' order-last' : '')">
        <div class="relative _plant flex flex-col justify-center items-center py-20">
          <div class="_plant-bg absolute left-0 top-0 right-0 bottom-0"></div>
          <span class="text-white left-10 top-10 text-lg text-white absolute font-medium">{{ firstBlock.title }}</span>
          <div class="py-10 flex items-center justify-center">
            <img :src="firstBlock.imageSrc" class="w-32" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-2xl text-center font-medium">{{ firstBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-8">
        <div class="relative _audio flex flex-col justify-center items-center py-20">
          <div class="_audio-bg absolute left-0 top-0 right-0 bottom-0"></div>
          <span class="text-white left-10 top-10 text-lg text-white absolute font-medium">{{ secondBlock.title }}</span>
          <div class="py-10 flex items-center justify-center">
            <img :src="secondBlock.imageSrc" class="w-40" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-2xl text-center font-medium">{{ secondBlock.description }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    firstBlock: {
      type: {},
      required: true,
    },
    secondBlock: {
      type: {},
      required: true
    }
  }
});
</script>
