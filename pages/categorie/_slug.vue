<template>
  <div class="bg-white">
    <div v-if="collection">
      <div class="w-full bg-black">
        <div class="container mx-auto py-10 text-left px-4 md:px-2">
          <h1 class="text-white mt-1 text-2xl font-bold sm:text-2xl lg:text-2xl">
            {{ collection.title }}
          </h1>
        </div>
      </div>

      <div class="container w-full mx-auto py-10 px-2 relative" style="min-height: 500px;">
        <div class="grid grid-cols-12">
          <Loading v-show="loading" />
          <div class="col-span-12">
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-10 relative">
              <div
                v-for="product in collection.products"
                v-bind:key="product.id">
                <ProductItem :product="product"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import ProductItem from '~/components/products/ProductItem.vue';
import Vue from 'vue';
import Loading from "../../components/Loading";
import {Collections} from "../../services/shopify/Collections";

export default Vue.extend({
  components: {
    Loading,
    ProductItem
  },

  data() {
    return {
      loading: false,
      collection: {},
      slug: null,
    };
  },

  head() {
    return {
      title: this.collection.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.collection.description,
        }
      ]
    }
  },

  async asyncData({params}) {
    const slug = params.slug;
    return { slug }
  },

  async fetch() {
    this.loading = true;
    this.collection = await Collections.find(this.slug);
    this.loading = false;
  },
})
</script>
