<template>
  <div
      :class="`${bgColor ? 'rounded-3xl p-4 py-6 md:p-10' : ''}`"
      :style="`${bgColor ? 'background-color: #151515' : ''}`"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="flex justify-center space-y-4 flex-col">
        <h2 v-if="title" class="text-white uppercase font-bold tracking-wide text-3xl">{{ title }}</h2>
        <slot />
        <div v-if="url">
          <NuxtLink :to="url"
                    class="mt-3 inline-block shadow-md p-2 px-4 items-center justify-center border border-transparent rounded-full shadow-sm text-md font-medium text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Meer informatie
          </NuxtLink>
        </div>
      </div>
      <div :class="`flex items-center justify-center ${reverse ? 'order-first' : ''}`">
        <img :class="`${smallImage ? 'w-52' : ''} rounded-2xl ${mediumImage ? 'w-96' : ''}`" :src="imageSrc" :alt="imageAlt" />
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
    bgColor: {
      type: Boolean,
      default: true
    },
    smallImage: {
      type: Boolean,
      default: false
    },
    mediumImage: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: null
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true,
    },
  }
});
</script>
