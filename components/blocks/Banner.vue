<template>
  <div class="bg-black">
    <h1 v-if="title" class="text-left text-white uppercase md:text-center text-3xl font-bold mb-4">
      {{ title }}
    </h1>
    <CenterParagraph v-if="smallText && description">
      <div class="text-white font-extralight text-left md:text-center" v-html="description"></div>
    </CenterParagraph>

    <div class="relative mt-2">
      <img :src="imageSrc" :alt="alt ? alt : title.length > 0 ? title : 'Banner afbeelding'" class="rounded-2xl max-h-96 object-cover w-full" />
      <h2 v-if="description && !smallText" class="mt-2 md:mt-0 text-white text-left md:text-center text-2xl font-bold tracking-wide lg:absolute bottom-10 left-0 right-0 uppercase">
        {{ description }}
      </h2>
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
    alt: {
      type: String,
      default: null,
    },
    description: {
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
