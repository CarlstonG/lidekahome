<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="lg:col-span-4">
        <div class="relative _colors flex flex-col justify-center items-center py-20">
          <div class="py-10 flex items-center justify-center">
            <img :src="firstBlock.imageSrc" class="w-32" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-xl text-center font-bold uppercase tracking-wide">{{ firstBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-4">
        <div class="relative _montage flex flex-col justify-center items-center py-20">
          <div class="py-10 flex items-center justify-center">
            <img :src="secondBlock.imageSrc" class="w-32" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-xl text-center font-bold uppercase tracking-wide">{{ secondBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-4">
        <div class="relative _brightness flex flex-col justify-center items-center py-20">
          <div class="py-10 flex items-center justify-center">
            <img :src="thirdBlock.imageSrc" class="w-32" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-xl text-center font-bold uppercase tracking-wide">{{ thirdBlock.description }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    firstBlock: {
      type: Object,
      required: true,
    },
    secondBlock: {
      type: Object,
      required: true,
    },
    thirdBlock: {
      type: Object,
      required: true,
    }
  }
});
</script>
