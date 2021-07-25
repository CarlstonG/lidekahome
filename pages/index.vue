<template>
  <div class="bg-black">
    <div class="text-center py-10">
      <h2 class="text-3xl font-bold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">Kwaliteit Led-en Solar artikelen</h2>
      <p class="mt-1 text-3xl text-white tracking-wide">van Lideka&reg;</p>
    </div>
    
    <div class="max-w-7xl mx-auto p-2">
      <div class="w-full bg-center bg-no-repeat bg-cover bg-scroll mb-2 rounded-lg"
           style="background-image: url('https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/LEDxSolar_homepage.jpg')">
        <div class="max-w-7xl mx-auto py-20 h-96 text-center flex items-end">
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto py-10 px-6 md:px-0">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="flex items-center flex-col">
          <img src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/WEBicons-01.png" class="w-20" />
          <h2 class="text-white text-center text-sm font-bold mb-2">Hoge Kwaliteit</h2>
          <p class="text-gray-500 text-center text-xs">
            Al onze producten zijn van hoge kwaliteit, en voldoen dan ook aan alle europese eisen. Voordat de artikelen verpakt worden ze handmatig dubbel gecheckt.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/WEBicons-02.png" class="w-20" />
          <h2 class="text-white text-center text-sm font-bold mb-2">'Echte' service</h2>
          <p class="text-gray-500 text-center text-xs">
            Lideka® stelt hoge eisen aan service, en daarom zijn we telefonisch 24/7 bereikbaar. Heb je s avonds laat een vraag en kom je er niet uit? Wij zijn er voor je…
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/WEBicons-03.png" class="w-20" />
          <h2 class="text-white text-center text-sm font-bold mb-2">Snelle levering</h2>
          <p class="text-gray-500 text-center text-xs">
            Wij zijn trotse partner van PostNl, en die zal dan dus ook jouw bestelling bij je thuis bezorgen. Is het artikel op voorraad? Vandaag besteld = morgen thuis
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/lideka-bulb.svg" class="w-20" />
          <h2 class="text-white text-center text-sm font-bold mb-2">100% oplossings garantie</h2>
          <p class="text-gray-500 text-center text-xs">
            Bij Lideka&reg;️ hechten wij enorm hoge waarde aan service, en daarom lossen wij iedere probleem voor 100% op. Schroom niet en neem altijd contact op.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-2">
      <div class="relative grid grid-cols-1 md:grid-cols-2">
        <div class="pr-2 pl-2">
          <a class="relative block" href="#">
            <img src="https://cdn.shopify.com/s/files/1/0570/2352/9109/t/3/assets/ambience_bedroom_nl.jpg" class="rounded-lg" loading="lazy"
                 width="100%" height="100%"/>

            <div class="absolute right-0 left-0 bottom-0 pb-4">
              <button type="button" class="mx-auto hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 rounded-full py-2 px-10 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Producten bekijken
              </button>
            </div>
          </a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 py-6 md:py-0">
          <ProductItem v-for="product in products" :product="product" :key="product.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductItem from "~/components/products/ProductItem.vue";

export default Vue.extend({
  components: {ProductItem},
  data() {
    return {
      products: [],
    };
  },
})
</script>
