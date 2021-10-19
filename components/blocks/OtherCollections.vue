<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

    <div v-if="collections.indexOf('rgb-led-strips') !== -1" class="space-y-4 flex flex-col justify-center items-center border-2 border-indigo-500 rounded-3xl px-10 py-10">
      <img src="~assets/rgb-led-strip.jpg" alt="RGB Led Strips" class="rounded-lg" />
      <h2 class="text-white text-xl font-bold">RGB Led strips</h2>
      <NuxtLink to="/categorie/rgb-led-strips"
                class="mt-3 flex inline-block shadow-md p-2 px-4 items-center justify-center border border-transparent rounded-full shadow-sm text-md font-medium text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Meer informatie
      </NuxtLink>
    </div>
    <div v-if="collections.indexOf('rgb-ic-led-strips') !== -1" class="space-y-4 flex flex-col justify-center items-center border-2 border-indigo-500 rounded-3xl px-10 py-10">
      <img src="~assets/rgb-led-strip.jpg" alt="RGB-IC Led Strips" class="rounded-lg" />
      <h2 class="text-white text-xl font-bold">RGB-IC Led strips</h2>
      <NuxtLink to="/categorie/rgb-ic-led-strips"
                class="mt-3 flex inline-block shadow-md p-2 px-4 items-center justify-center border border-transparent rounded-full shadow-sm text-md font-medium text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Meer informatie
      </NuxtLink>
    </div>
    <div v-if="collections.indexOf('tv-led-strips') !== -1" class="space-y-4 flex flex-col justify-center items-center border-2 border-indigo-500 rounded-3xl px-10 py-10">
      <img src="~assets/tv-led-strip.jpg" alt="TV Led strips" class="rounded-lg" />
      <h2 class="text-white text-xl font-bold">TV Led strips</h2>
      <NuxtLink to="/categorie/tv-led-strips"
                class="mt-3 flex inline-block shadow-md p-2 px-4 items-center justify-center border border-transparent rounded-full shadow-sm text-md font-medium text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Meer informatie
      </NuxtLink>
    </div>
    <div v-if="collections.indexOf('led-pakketten') !== -1" class="space-y-4 flex flex-col justify-center items-center border-2 border-indigo-500 rounded-3xl px-10 py-10">
      <img src="~assets/design/landings/led-strip-pakket.png" alt="LED strip pakket" class="rounded-lg" />
      <h2 class="text-white text-xl font-bold">LED-strip pakketten</h2>
      <NuxtLink to="/categorie/led-pakketten"
                class="mt-3 flex inline-block shadow-md p-2 px-4 items-center justify-center border border-transparent rounded-full shadow-sm text-md font-medium text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Meer informatie
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    collections: {
      type: [],
      required: false,
    }
  }
});
</script>
