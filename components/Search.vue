<template>
  <div>
    <div v-if="isOpen && (products.length > 0 || collections.length > 0)" @click.prevent="isOpen = false"
         class="z-10 fixed top-0 bottom-0 left-0 right-0" style="background: rgba(0, 0, 0, 0.5)">&nbsp;
    </div>
    <label for="search" class="sr-only">Zoek naar een product</label>
    <div class="relative w-full pl-10">
      <div class="h-10 w-full border-none rounded-md leading-5 bg-gray-900 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm">
        <div class="absolute z-30 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
        <input id="search"
               v-model="fields.query"
               name="query"
               ref="searchRef"
               @input="isOpen = true"
               @click="isOpen = true"
               :class="{ 'bg-white border-white ring-white': isOpen }"
               class="block shadow-lg right-0 left-0 top-0 bottom-0 absolute z-20 w-full pl-10 pr-3 py-2 border-none rounded-md leading-5 bg-gray-900 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
               placeholder="Zoek op product of categorie (/)"
               type="search"
               aria-label="Zoek naar een product"
        >
      </div>
      <div v-show="isOpen && (fields.query.length >= 2 || loading)"
           class="bg-white rounded-lg absolute left-0 right-0 p-2 top-12 shadow-lg z-20 max-h-96 overflow-y-scroll" style="min-height: 50px">
        <Loading v-show="loading" />
        <ul class="divide-y divide-gray-200">
          <li v-if="!loading && (products.length < 1 && collections.length < 1)">
            <div class="ml-3 py-2">
              <p class="text-sm font-medium text-gray-900">
                Geen resultaten gevonden.
              </p>
            </div>
          </li>
          <li @click="isOpen = false" v-for="collection in collections">
            <NuxtLink :to="collection.url" class="flex items-center py-2">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ collection.title }}</p>
              </div>
            </NuxtLink>
          </li>
          <li @click="isOpen = false" v-for="product in products">
            <NuxtLink :to="product.url" class="flex items-center py-2">
              <img v-if="product.firstMediaSrc" class="h-6 w-6 rounded-full"
                    :src="product.firstMediaSrc"
                    loading="lazy"
                    alt="" />
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ product.title }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Loading from "~/components/Loading";
import {searchProducts, searchCollections} from "~/services/ApiService";

export default Vue.extend({
  components: {Loading},
  props: {
    showDelivery: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      fields: {
        query: ''
      },
      isOpen: false,
      products: [],
      collections: [],
      loading: false,
    };
  },

  watch: {
    'fields.query'() {
      this.search();
    },
  },

  mounted() {
    document.addEventListener('keyup', (event) => {
      if (event.key === '/') {
        if (this.$refs.searchRef) {
          this.$refs.searchRef.focus();
        }
        event.stopPropagation();
      }
    })
  },

  methods: {
    async search() {
      if (this.fields.query.length < 3) {
        this.products = [];
        this.collections = [];
        return;
      }

      this.loading = true;
      this.products = await searchProducts(this.fields.query)
      this.collections = await searchCollections(this.fields.query);
      this.loading = false;
    }
  }
});
</script>
