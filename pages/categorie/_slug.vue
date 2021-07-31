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
              <div class="flex-1">
                <button @click.prevent="sidebarIsOpen = true" type="submit" name="add"
                        class="flex shadow-md p-2 px-2 items-center justify-center border border-transparent rounded-md font-medium text-white bg-black hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
                  <svg class="w-6 h-6 md:h-4 md:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
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
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 relative">
              <div
                v-for="product in collection.products"
                v-bind:key="product.id">
                <ProductItem :product="product"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <transition name="fade">
        <FilterSidebar v-show="sidebarIsOpen" @closeSidebar="closeSidebar()" :filters="collection.filters" @selectedFilters="setSelectedFilters" />
      </transition>
    </div>
  </div>
</template>

<script lang="js">
import ProductItem from '~/components/products/ProductItem.vue';
import Vue from 'vue';
import Loading from "../../components/Loading";
import {Collections} from "../../services/shopify/Collections";
import Filters from "../../components/filters/Filters";
import _ from 'lodash';
import FilterSidebar from "../../components/filters/FilterSidebar";

export default Vue.extend({
  components: {
    FilterSidebar,
    Filters,
    Loading,
    ProductItem
  },

  setup() {
    return {Collections}
  },

  data() {
    return {
      sidebarIsOpen: false,
      selectedFilters: {},
      loading: false,
      collection: {},
      sortKeys: {},
      slug: null,

      sortBy: 'BEST_SELLING',
      reverse: false,
    };
  },

  watch: {
    sortBy() {
      this.$fetch();
    },

    reverse() {
      this.$fetch();
    }
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

      this.$fetch();
    }
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
    const sortKeys = Collections.productSortKeys;
    return {slug, sortKeys}
  },

  async fetch() {
    this.loading = true;
    this.collection = await Collections.find(this.slug, 50, {
      sortKey: this.sortBy,
      reverse: this.reverse,
    }, this.selectedFilters);
    this.loading = false;
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform .25s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-500px);
}
</style>
