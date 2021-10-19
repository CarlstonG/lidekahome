<template>
  <div class="grid gap-10">
    <div class="grid gap-6">
      <h1 class="text-5xl font-black">{{ title }}</h1>
      <span class="text-2xl">{{ description }}</span>
    </div>
    <div class="text-center">
      <h1 class="text-4xl font-black mx-auto">{{ midTitle }}</h1>
    </div>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
    <div class="lg:col-span-3">
      <div class="w-full">
        <div v-for="item in leftData" class="pb-8 mb-8 border-b-2 border-gray-500">
          <h3 class="font-bold text-white text-xl">{{ item.title }}</h3>
          <span class="font-extralight text-white text-lg">{{ item.description }}</span>
        </div>
      </div>
    </div>
    <div class="lg:col-span-6 w-96 h-96 p-10 m-auto rounded-full flex" style="background: #1C1C1C;">
      <img :src="imageSrc" class="rounded-lg mx-auto block w-96" />
    </div>
    <div class="lg:col-span-3">
      <div class="w-full">
        <div v-for="item in rightData" class="pb-8 mb-8 border-b-2 border-gray-500">
          <h3 class="font-bold text-white text-xl">{{ item.title }}</h3>
          <span class="font-extralight text-white text-lg">{{ item.description }}</span>
        </div>
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
    title: {
      type: String,
      required: true
    },
    midTitle: {
      type: String,
      required: true
    },
    description: {
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
