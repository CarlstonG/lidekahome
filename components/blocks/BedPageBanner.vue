<template>
  <div class="bg-black">
    <div class="relative">
      <img class="rounded-2xl" :src="imageSrc" :alt="title" />
    </div>
    <div class="mx-auto space-y-10 px-6 lg:px-0 mt-6 bottom-10 relative">
      <h1 v-if="title" class="text-white uppercase text-center text-xl lg:text-4xl font-bold tracking-wide">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";
import CenterParagraph from "~/components/blocks/CenterParagraph.vue";

export default Vue.extend({
  components: {
    CenterParagraph,
    ProductItem,
    ProductItemGradient
  },
  props: {
    smallText: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    }
  }
});
</script>
