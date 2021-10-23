<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 z-50">
    <div @click="closeSidebar()" class="fixed top-0 left-0 right-0 z-20 bottom-0 opacity-80 bg-black"></div>
    <div class="fixed top-0 left-0 bottom-0 z-40 flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-black">
      <div class="absolute top-0 right-0 -mr-12 pt-2">
        <button type="button"
                @click.prevent="closeSidebar()"
                class="ml-1 border border-white flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="sr-only">Close sidebar</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="flex-shrink-0 flex items-center px-4">
        <img class="h-8 w-auto"
             src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/lideka-home-alt.svg"
             alt="Lideka Home">
      </div>
      <div class="mt-5 flex-1 h-0 overflow-y-auto">
        <nav class="px-2 space-y-1">
          <!-- Hier komt categorieen -->
          <div class="text-gray-200 bg-black text-xs group flex items-center px-2 py-2 font-medium rounded-md">
            Producten
          </div>
          <NuxtLink @click.native="closeSidebar()" prefetch v-for="collection in collections" :to="`/categorie/${collection.handle}`" :key="collection.handle"
                class="text-gray-400 bg-black hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            {{ collection.title }}
          </NuxtLink>

          <NuxtLink prefetch
                    to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge"
                    class="text-gray-400 bg-black hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
          >
            Solar powerbank
          </NuxtLink>

          <NuxtLink prefetch
                    to="/categorie/accessoires"
                    class="text-gray-400 bg-black hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
          >
            Accessoires
          </NuxtLink>

          <div class="text-gray-200 bg-black text-xs group flex items-center px-2 py-2 font-medium rounded-md">
            Pagina's
          </div>
          <NuxtLink @click.native="closeSidebar()" to="/klantenservice"
                    class="text-gray-400 bg-black hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            Klantenservice
          </NuxtLink>
          <NuxtLink @click.native="closeSidebar()" to="/winkelwagen"
                    class="text-gray-400 bg-black hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            Winkelwagen
          </NuxtLink>
          <NuxtLink @click.native="closeSidebar()" to="/blog"
                    class="text-gray-400 bg-black hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
            Blog
          </NuxtLink>
        </nav>
        <img class="w-32 mt-5 px-2 absolute bottom-2 left-2 py-2" src="~/assets/thuiswinkel.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    collections: {
      type: [],
      required: true,
    }
  },

  methods: {
    closeSidebar() {
      this.$emit('closeSidebar');
    },
  }
});
</script>
