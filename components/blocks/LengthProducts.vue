<template>
  <div class="bg-gray-900 rounded-3xl p-6 lg:p-16">
    <h2 class="text-center text-white max-w-4xl mx-auto font-bold text-3xl">{{ title }}</h2>
    <p class="text-white font-extralight py-2 text-center">
      {{ description }}
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10 lg:gap-y-20 py-10">
      <div v-for="product in collection.products" class="">
        <ProductItem :gradient="true" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";

export default Vue.extend({
  components: {
    ProductItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    collection: {
      type: {},
      required: true
    }
  }
});
</script>
