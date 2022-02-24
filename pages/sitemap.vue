<template>
  <div class="bg-gray-50">
    <h1 class="font-extrabold text-3xl lg:text-4xl text-center mb-10 bg-gray-900 text-white py-6 px-6 text-uppercase">Sitemap</h1>

    <div class="max-w-7xl mx-auto py-10 px-6 lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div v-for="block in blocks">
          <header class="font-bold text-black mb-2">{{ block.title }}</header>
          <ul v-for="link in block.links" class="space-y-4">
            <li class="text-sm hover:underline">
              <NuxtLink :to="link.href">
                - {{link.name}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import {mapGetters} from "vuex";
import {getBlog} from "../services/ApiService";
import CenterTitle from "../components/blocks/CenterTitle";

export default Vue.extend({
  components: {CenterTitle},
  data() {
    return {
      loading: false,
      page: {},
      blocks: []
    };
  },

  computed: {
    ...mapGetters('shop/products', [
      'getCollections',
      'getMainCollections',
    ]),
  },

  async fetch() {
    const collections = await this.$shopify.collection.fetchAll(100);

    this.blocks.push({
      title: 'Categorieën',
      links: collections.filter((collection) => {
        return collection.handle !== 'frontpage'
      }).map((collection) => {
        return {
          name: collection.title,
          href: `/categorie/${collection.handle}`
        }
      }),
    })

    const products = await this.$shopify.product.fetchAll(100);

    this.blocks.push({
      title: 'Producten',
      links: products.map((product) => {
        return {
          name: product.title,
          href: `/products/${product.handle}`
        }
      }),
    })

    const blog = await getBlog('blog');

    this.blocks.push({
      title: 'Blogs',
      links: blog.articles.map((blog) => {
        return {
          name: blog.title,
          href: `/blog/${blog.handle}`
        }
      }),
    })

    this.blocks.push({
      title: 'Pagina\'s',
      links: [
        {
          name: 'Home',
          href: '/'
        },
      ]
    })
  },
   async mounted() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "path_tracking", path: this.$route.path });
  },
})
</script>
