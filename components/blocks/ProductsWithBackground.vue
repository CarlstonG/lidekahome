<template>
  <div class="bg-gray-900 rounded-3xl p-6 lg:p-16">
    <h2 class="text-center text-white max-w-4xl mx-auto font-bold text-3xl">{{ title }}</h2>
    <div class="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 lg:gap-y-20 py-10">
      <div v-for="product in collection.products" class="lg:col-span-2">
        <ProductItem :gradient="true" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";

export default Vue.extend({
  components: {
    ProductItem,
    ProductItemGradient
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    collection: {
      type: Object,
      required: true
    },
  }
});
</script>
