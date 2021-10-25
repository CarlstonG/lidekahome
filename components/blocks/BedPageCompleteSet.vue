<template>
  <div class="grid gap-6">
    <div class="grid gap-6">
      <h2 class="text-2xl text-white uppercase tracking-wide lg:text-4xl font-bold">{{ title }}</h2>
      <span class="text-white font-extralight">{{ description }}</span>
    </div>
    <div class="text-center mt-6">
      <h2 class="text-2xl tracking-wide text-uppercase text-white font-bold uppercase mx-auto">{{ midTitle }}</h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="lg:col-span-3">
        <div class="w-full">
          <div v-for="item in leftData" class="pb-8 mb-8 border-b-2 border-gray-500">
            <h3 class="font-bold text-white text-xl">{{ item.title }}</h3>
            <span class="font-extralight text-white text-lg">{{ item.description }}</span>
          </div>
        </div>
      </div>
      <div class="lg:col-span-6 max-w-96 w-full m-auto rounded-full flex">
        <img :src="imageSrc" class="rounded-lg mx-auto block"/>
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
