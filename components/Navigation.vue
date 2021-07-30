<template>
  <div>
    <div class="h-32 md:h-44 block">&nbsp;</div>
    <div class="fixed right-0 top-0 left-0 z-40 shadow-lg">
      <div class="bg-black border-b border-gray-900 hidden md:block">
        <div class="container mx-auto px-2 md:px-2 py-2">
          <dl class="md:grid md:grid-cols-4">
            <div class="relative">
              <dt class="flex items-center h-full">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p class="ml-2 text-xs leading-6 text-gray-400">voor 23:59 besteld = morgen in huis</p>
              </dt>
            </div>

            <div class="relative hidden md:block">
              <dt class="flex items-center h-full">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p class="ml-2 text-xs leading-6 text-gray-400">Gratis verzending & Gratis retourneren</p>
              </dt>
            </div>

            <div class="relative hidden md:block ">
              <dt class="flex items-center h-full">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p class="ml-2 text-xs leading-6 text-gray-400">60 dagen gratis retourneren</p>
              </dt>
            </div>

            <div class="relative hidden md:block">
              <dt class="flex items-center justify-end h-full">
                <img alt="Thuiswinkel waarborg" class="w-20" src="~/assets/thuiswinkel.svg" />
              </dt>
            </div>
          </dl>
        </div>
      </div>

      <nav class="bg-black shadow-lg">
        <div class="container mx-auto px-2 px-2 md:px-2">
          <div class="relative flex items-center justify-between h-20">
            <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
              <!-- Mobile menu button-->
              <button @click.prevent="openSidebar()"
                      type="button"
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
                       src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/lideka-home.svg" alt="Lideka Home">
                  <img class="hidden lg:block h-8 w-auto"
                       src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/lideka-home-alt.svg"
                       alt="Lideka Home">
                </NuxtLink>
              </div>

              <div class="hidden w-full md:block md:w-full lg:w-full md:ml-6 px-20">
                <Search/>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto sm:ml-6 sm:pr-0">
              <NuxtLink v-if="loggedIn" to="/account/myaccount"
                 class="bg-black p-1 flex justify-center items-center rounded-full text-gray-400 hover:text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span class="text-sm ml-2 hidden md:block">{{ customer.firstName }}</span>
              </NuxtLink>
              <NuxtLink v-else to="/account/login"
                        class="bg-black p-1 flex justify-center items-center rounded-full text-gray-400 hover:text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span class="hidden md:block text-sm ml-2">Inloggen</span>
              </NuxtLink>

              <NuxtLink to="/winkelwagen"
                        class="relative flex justify-center items-center bg-black p-1 ml-3 rounded-full text-gray-400 hover:text-white focus:outline-none">

                      <span v-show="count > 0" style="top: -5px; left: 20px;"
                            class="absolute w-5 h-5 rounded-full bg-white text-xs text-black flex items-center justify-center"
                            data-cart-count>{{ count }}</span>

                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span class="hidden md:block text-sm ml-2">Winkelwagen</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="hidden md:block bg-black border-t border-gray-800 border-b">
          <div class="container mx-auto  px-2 py-2 px-8 md:px-2">
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
    <transition name="fade">
      <Sidebar v-if="sidebarIsOpen" @closeSidebar="closeSidebar()" :collections="collections" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from "vuex";
import Search from "~/components/Search.vue";
import Sidebar from "~/components/navigation/Sidebar.vue";

export default Vue.extend({
  components: {Sidebar, Search},
  props: {
    collections: {
      type: [],
      required: true,
    }
  },

  data() {
    return {
      sidebarIsOpen: false,
    };
  },

  methods: {
    closeSidebar() {
      this.sidebarIsOpen = false;
    },

    openSidebar() {
      this.sidebarIsOpen = true;
    }
  },

  computed: {
    ...mapGetters('shop/cart', [
      'count'
    ]),

    ...mapGetters('shop/customer', [
      'customer',
      'loggedIn'
    ])
  }
});
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
