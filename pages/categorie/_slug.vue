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

      <div class="max-w-screen-xl w-full mx-auto py-10 px-2 md:px-6">
        <div class="grid grid-cols-12">
          <div class="col-span-12">
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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

export default Vue.extend({
  components: {ProductItem},

  data() {
    return {
      loading: false,
      collection: {},
      slug: null,
    };
  },

  async asyncData({params, $shopify}) {
    const slug = params.slug;

    const collection = await $shopify.collection.fetchByHandle(slug, {
      productsFirst: 50,
    });

    return { slug, collection }
  },

  /*
  async fetch() {
    this.collection = await this.$shopify.collection.fetchByHandle(this.slug, {
      productsFirst: 20,
    });
  },
   */
})
</script>
