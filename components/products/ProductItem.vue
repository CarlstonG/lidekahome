<template>
  <div class="flex flex-col items-center hover:opacity-50 transition-all shadow-none mt-4 mb-6 rounded-lg mx-2 md:mx-10">
    <NuxtLink :to="`/${product.handle}`">
      <ix-img class="rounded-lg"
              loading="lazy"
              :src="!gradient ? product.firstMediaSrc : product.images[product.images.length - 1].src"
              :imgixParams="{fit:'fill', fill:'solid', fillcolor:'f7fafc', trim:'auto'}"
              :alt="product.title"
              width="100%"
              height="100%"
      />
    </NuxtLink>
    <NuxtLink class="text-sm w-full text-gray-500 text-left font-bold block mt-2" :to="`/${product.handle}`">{{ product.title }}</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    },
    gradient: {
      type: Boolean,
      default: false,
    }
  }
});
</script>
