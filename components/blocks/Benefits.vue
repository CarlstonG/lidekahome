<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div :class="`lg:col-span-4 ` + (reverse ? ' order-last' : '')">
        <div class="relative _plant flex flex-col justify-center items-center py-20">
          <div class="_plant-bg absolute left-0 top-0 right-0 bottom-0"></div>
          <div class="py-10 flex items-center justify-center">
            <img :src="firstBlock.imageSrc" class="w-32" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-xl uppercase text-center font-bold tracking-wide">{{ firstBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-8">
        <div class="relative _audio flex flex-col justify-center items-center py-20">
          <div class="_audio-bg absolute left-0 top-0 right-0 bottom-0"></div>
          <div class="py-10 flex items-center justify-center">
            <img :src="secondBlock.imageSrc" class="w-40" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 uppercase absolute text-xl text-center font-bold tracking-wide">{{ secondBlock.description }}</h3>
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
      type: Object,
      required: true,
    },
    secondBlock: {
      type: Object,
      required: true,
    }
  }
});
</script>
