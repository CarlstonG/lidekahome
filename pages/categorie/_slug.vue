<template>
  <div class="bg-white">
    <div v-if="collection">
      <div class="w-full bg-cover bg-no-repeat bg-center bg-scroll"
           style="background-image: url('https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/ambience_living_room.jpg')">
        <div class="max-w-7xl mx-auto py-20 text-center">
          <h1 class="text-white mt-1 text-2xl font-extrabold sm:text-2xl sm:tracking-tight lg:text-4xl">
            {{ collection.title }}
          </h1>
        </div>
      </div>

      <div class="max-w-screen-xl w-full mx-auto py-10 px-2 relative" style="min-height: 500px;">
        <div class="grid grid-cols-12">
          <Loading v-show="loading" />
          <div class="col-span-12">
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 relative">
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
import ApiService from "../../services/ApiService";
import Loading from "../../components/Loading";

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

  async asyncData({params}) {
    const slug = params.slug;
    return { slug }
  },

  async fetch() {
    this.loading = true;
    this.collection = await ApiService.getProductsByCollectionHandle(this.slug);
    this.loading = false;
  },
})
</script>
