<template>
  <div class="bg-white">
    <div v-if="collection">
      <div class="w-full bg-black">
        <div class="container mx-auto pt-2 md:pt-10 mb-2 md:pb-4 text-left px-4 md:px-2">
          <div class="block md:flex justify-space-between w-full">
            <h1 class="text-white mt-1 text-lg font-bold sm:text-xl lg:text-2xl flex-1">
              {{ collection.title }}
            </h1>
            <div class="flex items-center justify-center md:justify-end space-x-4 pb-4 md:pb-0 pt-4 md:pt-0">
              <div class="block md:hidden flex-1">
                <button @click.prevent="sidebarIsOpen = true" type="submit" name="add"
                        class="flex shadow-md p-2 px-2 items-center justify-center border border-transparent rounded-md
                        font-medium text-white bg-black hover:opacity-50 focus:outline-none focus:ring-2
                        focus:ring-offset-2
                ">
                  <svg class="w-6 h-6 md:h-4 md:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                  </svg>
                  <span class="text-sm hidden md:block">Filteren</span>
                </button>
              </div>
              <div>
                <select v-model="sortBy"
                        class="block w-full pl-3 text-xs md:text-sm pr-10 py-2 bg-black text-white border-none focus:outline-none rounded-md">
                  <option v-for="(value, key) in sortKeys" :value="key">{{ value }}</option>
                </select>
              </div>
              <div>
                <button @click.prevent="reverse = !reverse" type="button"
                        class="bg-black relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-gray-600 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        role="switch" aria-checked="false"
                        :class="{ 'bg-indigo-600': reverse }"
                >
                  <span aria-hidden="true"
                        class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        :class="{ 'translate-x-5': reverse }"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container w-full mx-auto py-10 px-2 relative">
        <div class="grid grid-cols-12">
          <div class="hidden md:block col-span-3 lg:col-span-2">
            <Filters @selectedFilters="setSelectedFilters" :filters="collection.filters"/>
          </div>
          <div class="col-span-12 md:col-span-9 lg:col-span-10 relative" style="min-height: 500px;">
            <Loading v-show="loading"/>

            <div class="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
              <NuxtLink :to="product.url" v-for="product in collection.products" :key="product.id" class="group text-sm flex flex-col">
                <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                  <nuxt-img class="w-full h-full object-center object-cover"
                            provider="imgix"
                            loading="lazy"
                            :src="product.firstMediaSrc"
                            :alt="product.title"
                            width="100%"
                            height="100%"
                  />
                </div>
                <div class="flex-grow">
                  <h3 class="mt-4 font-bold text-gray-900">
                    {{ product.title }}
                  </h3>
                  <p class="text-gray-500 text-xs text-green-500">
                    <span v-if="product.deliveryDate">{{ product.deliveryDate }}</span>
                    <span v-else>Voor {{ currentMaxDeliveryTime }} besteld, morgen in huis</span>
                  </p>
                </div>

                <p class="mt-2 font-medium text-gray-900">
                  {{ formatMoney(product.firstVariant.price) }}
                </p>
              </NuxtLink>
            </div>

            <div v-if="collection.description" class="prose mt-10 mb-4 text-sm max-w-full" v-html="collection.description"></div>
          </div>
        </div>
      </div>

      <transition name="fade">
        <FilterSidebar v-show="sidebarIsOpen" @closeSidebar="closeSidebar()" :filters="collection.filters"
                       @selectedFilters="setSelectedFilters"/>
      </transition>
    </div>
  </div>
</template>

<script lang="js">
import ProductItem from '~/components/products/ProductItem.vue';
import Vue from 'vue';
import Loading from "../../components/Loading";
import Filters from "../../components/filters/Filters";
import _ from 'lodash';
import FilterSidebar from "../../components/filters/FilterSidebar";
import {getCollection} from "../../services/ApiService";
import {safeGet, formatMoney} from "../../services/Helpers";
import {mapGetters} from "vuex";

export default Vue.extend({
  components: {
    FilterSidebar,
    Filters,
    Loading,
    ProductItem
  },

  data() {
    return {
      formatMoney,
      sidebarIsOpen: false,
      selectedFilters: {},
      loading: false,
      collection: {},
      sortKeys: {
        BEST_SELLING: 'Best verkocht',
        PRICE: 'Prijs',
        RELEVANCE: 'Relevantie',
        TITLE: 'Titel',
      },
      slug: null,
      sortBy: 'PRICE',
      reverse: false,
    };
  },

  watch: {
    sortBy() {
      this.fetch();
    },

    reverse() {
      this.fetch();
    }
  },

  computed: {
    ...mapGetters('shop/shop', [
      'currentMaxDeliveryTime'
    ])
  },

  methods: {
    closeSidebar() {
      this.sidebarIsOpen = false;
    },

    setSelectedFilters(filters = {}) {
      this.selectedFilters = _.flattenDepth(_.map(filters, (item) => {
        return item;
      }), 1);

      this.selectedFilters = {
        product_filters: [...this.selectedFilters]
      }

      this.fetch();
    },

    async fetch() {
      this.loading = true;
      this.collection = await getCollection(this.slug, {
        limit: 50,
        sortKey: this.sortBy,
        reverse: this.reverse,
        filters: this.selectedFilters
      });
      this.loading = false;
    }
  },

  head() {
    return {
      title: safeGet(this.collection, 'title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: safeGet(this.collection, 'description'),
        }
      ]
    }
  },

  async asyncData({params}) {
    const slug = params.slug;
    const collection = await getCollection(slug, {
      limit: 50,
      sortKey: 'PRICE',
      reverse: false,
      filters: {
        product_filters: {},
      },
    });
    return {slug, collection }
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform .25s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
  transform: translateX(-500px);
}
</style>
