<template>
  <div class="bg-black">
    <div class="text-center py-10">
      <h2 class="text-3xl font-bold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">Kwaliteit Led-en Solar
        artikelen</h2>
      <p class="mt-1 text-3xl text-white tracking-wide">van Lideka&reg;</p>
    </div>

    <div class="container mx-auto p-2">
      <NuxtLink to="/categorie/led-strips">
        <nuxt-img alt="Lideka Home" src="images/visuals/LEDxSolar_homepage.webp" loading="lazy"
             class="rounded-lg"/>
      </NuxtLink>
    </div>

    <div class="container mx-auto py-10 px-6 md:px-0">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="flex items-center flex-col">
          <nuxt-img src="images/icons/WEBicons-01.webp" alt="Hoge kwaliteit" class="w-20" loading="lazy "/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Hoge Kwaliteit</h2>

          <p class="text-gray-500 text-center text-xs">
            Al onze producten zijn van hoge kwaliteit, en voldoen dan ook aan alle europese eisen. Voordat de artikelen
            verpakt worden ze handmatig dubbel gecheckt.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <nuxt-img loading="lazy" src="images/icons/WEBicons-02.webp" alt="'Echte' service" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">'Echte' service</h2>
          <p class="text-gray-500 text-center text-xs">
            Lideka® stelt hoge eisen aan service, en daarom zijn we telefonisch 24/7 bereikbaar. Heb je s avonds laat
            een vraag en kom je er niet uit? Wij zijn er voor je…
          </p>
        </div>
        <div class="flex items-center flex-col">
          <nuxt-img loading="lazy" src="images/icons/WEBicons-03.webp" alt="Snelle levering" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Snelle levering</h2>
          <p class="text-gray-500 text-center text-xs">
            Wij zijn trotse partner van PostNl, en die zal dan dus ook jouw bestelling bij je thuis bezorgen. Is het
            artikel op voorraad? Vandaag besteld = morgen thuis
          </p>
        </div>
        <div class="flex items-center flex-col">
          <nuxt-img loading="lazy" src="images/icons/lideka-bulb.svg" alt="100% oplossings garantie" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">100% oplossings garantie</h2>
          <p class="text-gray-500 text-center text-xs">
            Bij Lideka&reg;️ hechten wij enorm hoge waarde aan service, en daarom lossen wij iedere probleem voor 100%
            op. Schroom niet en neem altijd contact op.
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-2">
      <div class="relative grid grid-cols-1 md:grid-cols-2">
        <div class="pr-2 pl-2">
          <NuxtLink class="relative block" to="categorie/led-strips">
            <nuxt-img src="images/visuals/ambience_bedroom_nl.webp"
                 class="rounded-lg" loading="lazy" />

            <div class="absolute right-0 left-0 bottom-0 pb-4">
              <button type="button"
                      class="mx-auto hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 rounded-full py-2 px-10 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Producten bekijken
              </button>
            </div>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-2 py-6 md:py-0">
          <div v-if="collection" v-for="product in collection.products" :key="product.id">
            <ProductItem :gradient="true" :product="product" class="mx-2 md:mx-10" />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-8 py-12 px-6 md:px-0">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="flex items-center flex-col">
          <nuxt-img loading="lazy" src="images/icons/WEBicons-04.webp" alt="Gratis Verzending" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Gratis Verzending</h2>
          <p class="text-gray-500 text-center text-xs">
            Omdat Lideka® voor service staat bieden wij al onze artikelen aan met gratis verzending (vanaf 20,-). Dat
            noemen we service!
          </p>
        </div>
        <div class="flex items-center flex-col">
          <nuxt-img loading="lazy" src="images/icons/WEBicons-05.webp" alt="Makkelijk retourneren" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Makkelijk retourneren</h2>
          <p class="text-gray-500 text-center text-xs">
            Lideka® maakt retourneren makkelijk. Via ‘Returnless’ kun je op een PostNl locatie jouw pakketje gratis
            afleveren en scannen met je mobiel.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <nuxt-img loading="lazy" src="images/icons/WEBicons-06.webp" alt="100% tevredenheidsgarantie" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">100% tevredenheidsgarantie</h2>
          <p class="text-gray-500 text-center text-xs">
            Wij staan volledig achter de kwaliteit van onze producten en bieden jou daarom een onvoorwaardelijke
            garantie van 12-24 maanden.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <nuxt-img loading="lazy" src="images/icons/WEBicons-07.webp" alt="Duurzaamheid" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Duurzaamheid</h2>
          <p class="text-gray-500 text-center text-xs">
            Lideka® denkt mee aan het milieu, met een duurzame achtergrond werken de producten energiebesparend, en
            energieopwekkend.
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-2">
      <div class="relative grid grid-cols-1 md:grid-cols-2">
        <div class="pr-2 pl-2 mb-6 md:mb-0">
          <NuxtLink class="relative block"
                    to="/products/lideka-solar-powerbank-30-000-mah-usb-c-waterdicht-4-usb-poorten-zonneenergie">
            <nuxt-img src="images/visuals/Solar_Powerbank_product.webp" alt="Product Solar Powerbank" class="rounded-lg"
                 loading="lazy"
                 width="100%" height="100%"/>

            <div class="absolute top-0 right-0 left-0 pt-4">
              <h2 class="text-5xl text-white filter drop-shadow-lg text-center"><strong class="font-bold">Solar</strong>
                Powerbank</h2>
            </div>
            <div class="absolute right-0 left-0 bottom-0 pb-4">
              <button type="button"
                      class="mx-auto hover:opacity-50 bg-gradient-to-br from-orange-400 to-red-600 rounded-full py-2 px-10 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Product bekijken
              </button>
            </div>
          </NuxtLink>
        </div>
        <div class="pr-2 pl-2">
          <NuxtLink to="/categorie/solar-powerbank">
            <nuxt-img src="images/visuals/Solar_Powerbank_square.webp" alt="Product Solar Powerbank" class="rounded-lg"
                 loading="lazy"
                 width="100%" height="100%"/>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-2">
      <div class="relative grid grid-cols-1 md:grid-cols-2">
        <div class="pr-2 pl-2">
          <NuxtLink v-if="secondaryCollection && secondaryCollection.url" class="relative block" :to="secondaryCollection.url">
            <nuxt-img alt="Solar tuinverlichting" src="images/visuals/SOLAR_garden_square.webp" class="rounded-lg" loading="lazy"
                 width="100%" height="100%"/>

            <div class="absolute top-0 right-0 left-0 pt-4">
              <h2 class="text-5xl text-white filter drop-shadow-lg text-center"><strong class="font-bold">Solar</strong>
                Tuinverlichting</h2>
            </div>
            <div class="absolute right-0 left-0 bottom-0 pb-4">
              <button type="button"
                      class="mx-auto hover:opacity-50 bg-gradient-to-br from-orange-400 to-red-600 rounded-full py-2 px-10 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Bekijk alle Solar Lamps
              </button>
            </div>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-2 py-6 md:py-0">
          <div v-if="secondaryCollection" v-for="product in secondaryCollection.products" :key="product.id">
            <ProductItem :gradient="true" :product="product" class="mx-2 md:mx-10" />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-16 py-32 pb-20 px-6 md:px-0">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://www.facebook.com/lidekahome" target="_blank"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">Facebook</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"/>
          </svg>
        </a>

        <a href="https://www.instagram.com/lidekahome" target="_blank"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">Instagram</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"/>
          </svg>
        </a>

        <a href="https://www.linkedin.com/company/lideka" target="_blank"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">LinkedIn</span>
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        </a>

        <a href="https://www.youtube.com/channel/UCM6KUMoinLVJZUIOx3Mm2Tw" target="_blank"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">YouTube</span>
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductItem from "~/components/products/ProductItem.vue";
import {getCollection} from "~/services/ApiService";

export default Vue.extend({
  components: {ProductItem},
  data() {
    return {
      collection: {},
      secondaryCollection: {},
    };
  },

  methods: {
    async getCollections() {
      this.collection = await getCollection('led-strips', {
        limit: 4,
        reverseImages: true,
      })

      this.secondaryCollection = await getCollection('solar-tuinverlichting', {
        limit: 4,
        reverseImages: true,
      })
    },
  },

  async fetch() {
    await this.getCollections();
  },
})
</script>
