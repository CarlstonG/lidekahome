<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="lg:col-span-4">
        <div class="relative _colors flex flex-col justify-center items-center py-20">
          <span class="text-white left-10 top-10 text-lg text-white absolute font-medium">{{ firstBlock.title }}</span>
          <div class="py-10 flex items-center justify-center">
            <img :src="firstBlock.imageSrc" class="w-32" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-2xl text-center font-medium">{{ firstBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-4">
        <div class="relative _montage flex flex-col justify-center items-center py-20">
          <span class="text-white left-10 top-10 text-lg text-white absolute font-medium">{{ secondBlock.title }}</span>
          <div class="py-10 flex items-center justify-center">
            <img :src="secondBlock.imageSrc" class="w-32" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-2xl text-center font-medium">{{ secondBlock.description }}</h3>
        </div>
      </div>
      <div class="lg:col-span-4">
        <div class="relative _brightness flex flex-col justify-center items-center py-20">
          <span class="text-white left-10 top-10 text-lg text-white absolute font-medium">{{ thirdBlock.title }}</span>
          <div class="py-10 flex items-center justify-center">
            <img :src="thirdBlock.imageSrc" class="w-32" />
          </div>
          <h3 class="text-white left-0 right-0 bottom-10 absolute text-2xl text-center font-medium">{{ thirdBlock.description }}</h3>
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
      type: {},
      required: true,
    },
    secondBlock: {
      type: {},
      required: true
    },
    thirdBlock: {
      type: {},
      required: true
    }
  }
});
</script>
