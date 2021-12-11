<template>
  <div class="max-w-4xl mx-auto" style="margin-top: 20px !important;">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div class="lg:col-span-4">
        <div class="relative _colors flex flex-col justify-center items-center py-4">
          <div class="py-10 flex items-center justify-center -mt-10">
            <img :src="firstBlock.imageSrc" class="w-24" />
          </div>
          <h3 class="text-white left-4 right-4 bottom-4 absolute text-sm text-center font-bold uppercase tracking-wide">{{ firstBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-4">
        <div class="relative _montage flex flex-col justify-center items-center py-4">
          <div class="py-10 flex items-center justify-center -mt-10">
            <img :src="secondBlock.imageSrc" class="w-24" />
          </div>
          <h3 class="text-white left-4 right-4 bottom-4 absolute text-sm text-center font-bold uppercase tracking-wide">{{ secondBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-4">
        <div class="relative _brightness flex flex-col justify-center items-center py-4">
          <div class="py-10 flex items-center justify-center -mt-10">
            <img :src="thirdBlock.imageSrc" class="w-24" />
          </div>
          <h3 class="text-white left-4 right-4 bottom-4 absolute text-sm text-center font-bold uppercase tracking-wide">{{ thirdBlock.description }}</h3>
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
