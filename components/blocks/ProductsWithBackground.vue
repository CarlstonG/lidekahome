<template>
  <div v-if="productsLength >= 3">
    <h2 class="text-center text-white max-w-4xl mx-auto font-bold text-3xl">{{ title }}</h2>
    <client-only class="bg-gray-900 rounded-3xl p-6 lg:p-16">
      <carousel v-bind="options" :perPageCustom="[[480, 2], [768, 3], [1022, 4]]" :navigation-enabled="true" :navigation-prev-label="prevLabel"  :navigation-next-label="nextLabel" class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
      <slide  v-for="product in collection.products"  class="pl-1 pr-1 ">
          <div class="lg:col-span-2 bg-dark rounded-3xl p-4" style="background-color:#151515;">
          <ProductItem :gradient="true" :key="product.id" :product="product" />
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
  <div v-else class="max-w-5xl mx-auto">
    <h2 class="text-center text-white max-w-4xl mx-auto font-bold text-3xl">{{ title }}</h2>
    <client-only class="bg-gray-900 max-w-5xl mx-auto rounded-3xl p-6 lg:p-16">
      <carousel v-bind="options" :perPageCustom="[[480, 2], [768, 3], [1022, 4]]" :centerMode="true" :navigation-enabled="true" :navigation-prev-label="prevLabel"  :navigation-next-label="nextLabel" class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        <slide  v-for="product in collection.products"  class="pl-1 pr-1 ">
          <div class="lg:col-span-2 bg-dark rounded-3xl p-4" style="background-color:#151515;">
            <ProductItem :gradient="true" :key="product.id" :product="product" />
          </div>
        </slide>
      </carousel>
    </client-only>
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
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        paginationEnabled: false,
        },
      nextLabel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" style=\"color: white;\" class=\"bi bi-caret-right\" viewBox=\"0 0 16 16\">\n" +
        "<path d=\"M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z\"/>\n" +
        "</svg>",
      prevLabel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" style=\"color: white;\" class=\"bi bi-caret-left\" viewBox=\"0 0 16 16\">\n" +
        "<path d=\"M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z\"/>\n" +
        "</svg>"
    }
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
  },
  methods: {
    productsLength () {
      return this.collection.products.length
    }
  }
});
</script>
<style>
@media (max-width: 1400px) {
  .VueCarousel-navigation-button {
    display: none;
  }
}
</style>
