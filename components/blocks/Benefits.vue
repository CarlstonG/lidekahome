<template>
  <div class="max-w-4xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div :class="`lg:col-span-4 ` + (reverse ? ' order-last' : '')">
        <div class="relative _plant flex flex-col justify-center items-center py-4 ">
          <div class="_plant-bg absolute left-0 top-0 right-0 bottom-0"></div>
          <div class="flex items-center justify-center -mt-10">
            <img :src="firstBlock.imageSrc" class="w-24" alt="Afbeelding eerste blok" />
          </div>
          <h3 class="text-white left-4 right-4 bottom-4 absolute text-sm uppercase text-center font-bold tracking-wide">{{ firstBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-8">
        <div class="relative _audio flex flex-col justify-center items-center py-4 ">
          <div class="_audio-bg absolute left-0 top-0 right-0 bottom-0"></div>
          <div class="flex items-center justify-center -mt-10">
            <img :src="secondBlock.imageSrc" class="w-24" alt="Afbeelding tweede blok" />
          </div>
          <h3 class="text-white left-4 right-4 bottom-4 uppercase absolute text-sm text-center font-bold tracking-wide">{{ secondBlock.description }}</h3>
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
