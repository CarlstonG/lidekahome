<template>
  <div>
    <div class="h-32 md:h-40 block">&nbsp;</div>
    <div class="fixed right-0 top-0 left-0 z-40 shadow-lg">
      <div class="bg-black hidden md:block">
        <div class="max-w-7xl mx-auto px-8 py-2">
          <dl class="md:grid md:grid-cols-3">
            <div class="relative">
              <dt class="flex">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                </svg>
                <p class="ml-2 text-xs leading-6 text-gray-400">voor 23:59 besteld = morgen in huis</p>
              </dt>
            </div>

            <div class="relative hidden md:block">
              <dt class="flex">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
                <p class="ml-2 text-xs leading-6 text-gray-400">Gratis verzending & Gratis retourneren</p>
              </dt>
            </div>

            <div class="relative hidden md:block">
              <dt class="flex">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <p class="ml-2 text-xs leading-6 text-gray-400">60 dagen gratis retourneren</p>
              </dt>
            </div>
          </dl>
        </div>
      </div>

      <nav class="bg-black shadow-lg">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-20">
            <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
              <!-- Mobile menu button-->
              <button type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!--
                  Icon when menu is closed.

                  Heroicon name: outline/menu

                  Menu open: "hidden", Menu closed: "block"
                -->
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <!--
                  Icon when menu is open.

                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden"
                -->
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <NuxtLink to="/">
                  <img class="block lg:hidden h-12 w-auto"
                       src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/lideka-home.svg" alt="Workflow">
                  <img class="hidden lg:block h-8 w-auto"
                       src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/lideka-home-alt.svg"
                       alt="Workflow">
                </NuxtLink>
              </div>

              <div class="hidden w-full md:block md:w-full lg:w-full md:ml-6 px-20">
                <Search/>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto sm:ml-6 sm:pr-0">
              <NuxtLink to="/winkelwagen"
                        class="relative bg-black p-1 ml-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">

                      <span v-show="count > 0" style="top: -5px; right: -5px;"
                            class="absolute w-5 h-5 rounded-full bg-white text-xs text-black flex items-center justify-center"
                            data-cart-count>{{ count }}</span>

                <span class="sr-only">View cart</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="hidden md:block bg-black border-t border-gray-800 border-b">
          <div class="max-w-7xl mx-auto  px-2 py-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between -ml-2">
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-grow">
                  <div class="flex space-x-1">
                    <NuxtLink prefetch v-for="collection in collections" :to="`/categorie/${collection.handle}`"
                              class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      {{ collection.title }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden absolute bg-black z-10 left-0 right-0" id="mobile-menu">
          <div class="px-2 pb-2">
            <Search/>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from "vuex";
import Search from "~/components/Search.vue";

export default Vue.extend({
  components: {Search},
  props: {
    collections: {
      type: [],
      required: true,
    }
  },

  computed: {
    ...mapGetters('shop/cart', [
      'count'
    ])
  }
});
</script>
