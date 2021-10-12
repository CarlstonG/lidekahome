<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <h1 v-if="title" class="text-white uppercase text-center text-4xl font-bold">
        {{ title }}
      </h1>
      <CenterParagraph v-if="smallText && description" :description="description" />

      <div class="relative">
        <img :src="imageSrc" :alt="title" />
        <h2 v-if="description && !smallText" class="text-white text-center text-4xl font-bold tracking-wide lg:absolute bottom-10 left-0 right-0">
          {{ description }}
        </h2>
      </div>
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
