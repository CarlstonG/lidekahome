<template>
  <div class="bg-white">
    <Breadcrumbs />
    <div v-if="!page.id">
      <div class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
        <Loading v-show="loading"/>
        <NotFound v-if="!loading" />
      </div>
    </div>
    <div v-else>
      <div class="w-full bg-cover bg-no-repeat bg-center bg-scroll bg-gradient-to-br from-blue-500 to-purple-800">
        <div class="max-w-7xl mx-auto py-20 text-center">
          <h1 class="text-white mt-1 text-2xl font-extrabold sm:text-2xl sm:tracking-tight lg:text-4xl">{{ page.title }}</h1>
        </div>
      </div>

      <div class="pb-10">
        <div class="bg-white">
          <div class="max-w-7xl mx-auto pt-16 pb-4 px-4 sm:px-6 lg:px-8">
            <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
              <div class="bg-gray-50 rounded-lg p-10">
                <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Klanten service
                </h2>
                <div class="mt-3">
                  <p class="text-lg text-gray-500">
                    Neem contact op met onze klanten service.
                  </p>
                </div>
                <div class="mt-9">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/phone -->
                      <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div class="ml-3 text-base text-gray-500">
                      <p>
                        +31 (0)85 - 06 01 297
                      </p>
                      <p class="mt-1 text-green-500 text-xs">
                        24/7 bereikbaar
                      </p>
                    </div>
                  </div>
                  <div class="mt-6 flex">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/mail -->
                      <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div class="ml-3 text-base text-gray-500">
                      <p>
                        info@lidekahome.nl
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8 md:mt-0 bg-gray-50 rounded-lg p-10">
                <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Bedrijfsinformatie
                </h2>
                <div class="mt-3">
                  <p class="text-lg text-gray-500">
                    Informatie over ons bedrijf.
                  </p>
                </div>
                <div class="mt-9">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-3 text-base text-gray-500">
                      <p>
                        Lideka
                      </p>
                      <p>
                        Konings Dreef 9
                      </p>
                      <p>
                        3261 Nj Oud-Beijerland
                      </p>
                    </div>
                  </div>
                  <div class="mt-6 flex">
                    <div class="flex-shrink-0">
                      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div class="ml-3 text-base text-gray-500">
                      <p>
                        KvK : 76450309
                      </p>
                      <p>
                        BTW nummer: NL003085645B77
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8">
              <div class="bg-gray-50 rounded-lg p-10">
                <h2 class="text-xl font-bold">Algemeen</h2>
                <ul>
                  <li>
                    <NuxtLink to="/algemene-voorwaarden"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Algemene voorwaarden</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/privacy-statement"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Privacy statement</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/veelgestelde-vragen"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Veelgestelde vragen</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/veilig-winkelen"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Veilig winkelen</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/bestellen-en-betalen"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Bestellen en Betalen</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/klachten"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Klachtenregeling</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/contact"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Contact</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="bg-gray-50 rounded-lg p-10 mt-8 md:mt-0">
                <h2 class="text-xl font-bold">Verzenden & Voorraad</h2>
                <ul>
                  <li>
                    <NuxtLink to="/verzending"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Verzending</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/voorraad"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Voorraad</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="bg-gray-50 rounded-lg p-10 mt-8 md:mt-0">
                <h2 class="text-xl font-bold">Retourneren</h2>
                <ul>
                  <li>
                    <NuxtLink to="/retourneren"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Retourneren</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/retour-voorwaarden"
                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Retour voorwaarden</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/garantie"

                       class="flex text-gray-500 justify-between items-center border-b py-2 border-gray-200 hover:opacity-50">
                      <span>Garantie</span>
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"></path>
                      </svg>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Loading from "~/components/Loading";
import {safeGet} from "~/services/Helpers";
import NotFound from "~/components/NotFound";
import {getPage} from "../services/ApiService";
import Breadcrumbs from "../components/Breadcrumbs";

export default Vue.extend({
  components: {
    Breadcrumbs,
    NotFound,
    Loading,
  },

  data() {
    return {
      loading: false,
      page: {},
    };
  },

  head() {
    return {
      title: safeGet(this.page, 'seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: safeGet(this.page, 'seo.description'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: safeGet(this.page, 'seo.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: safeGet(this.page, 'seo.description')
        },
      ]
    }
  },

  async fetch() {
    this.loading = true;
    this.page = await getPage('klantenservice');
    this.loading = false;
  },
})
</script>
