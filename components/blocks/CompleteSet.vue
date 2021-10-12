<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto gap-10 lg:gap-0">
    <div class="lg:col-span-3">
      <div class="w-full lg:w-40 mx-auto">
        <div v-for="item in leftData" class="pb-8 mb-8 border-b-2 border-gray-500">
          <h3 class="font-bold text-white text-xl">{{ item.title }}</h3>
          <span class="font-extralight text-white text-lg">{{ item.description }}</span>
        </div>
      </div>
    </div>
    <div class="lg:col-span-6 text-center">
      <img :src="imageSrc" class="rounded-lg mx-auto block w-96" />
    </div>
    <div class="lg:col-span-3">
      <div class="w-full lg:w-40 mx-auto">
        <div v-for="item in rightData" class="pb-8 mb-8 border-b-2 border-gray-500">
          <h3 class="font-bold text-white text-xl">{{ item.title }}</h3>
          <span class="font-extralight text-white text-lg">{{ item.description }}</span>
        </div>
      </div>
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
    leftData: {
      type: [],
      required: true
    },
    rightData: {
      type: [],
      required: true
    }
  }
});
</script>
