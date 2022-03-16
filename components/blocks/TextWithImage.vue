<template>
  <div
      :class="`${bgColor ? 'rounded-3xl p-4 py-6 md:p-10' : ''}`"
      :style="`${bgColor ? 'background-color: #151515' : ''}`"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="flex justify-center space-y-4 flex-col">
        <component v-if="title" :is="titleTag" class="text-white font-bold tracking-wide text-3xl">{{ title }}</component>
        <slot />
        <div v-if="url">
          <NuxtLink :to="url"
                    class="mt-3 inline-block shadow-md p-2 px-4 items-center justify-center border border-transparent rounded-full shadow-sm text-md font-medium text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {{urlText}}
          </NuxtLink>
        </div>
      </div>
      <div v-motion-fade-up :class="`flex items-center justify-center ${reverse ? 'order-first' : ''}`">
        <component :is="linkBehindImage ? 'NuxtLink' : 'div'" :to="linkBehindImage">
          <img :class="`${smallImage ? 'w-52' : ''} rounded-2xl ${mediumImage ? 'w-96' : ''}`" :src="imageSrc" :alt="imageAlt" />
        </component>
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
    titleTag: {
      type: String,
      default: 'h2',
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
    urlText: {
      type: String,
      default: () => 'Meer informatie'
    },
    linkBehindImage: {
      type: String,
      default: null,
    }
  }
});
</script>
