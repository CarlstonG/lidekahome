<template>
  <div class="bg-gray-50">
    <Breadcrumbs />
    <div v-if="!page.id">
      <div class="container mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
        <Loading v-show="loading"/>
        <NotFound v-if="!loading" />
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col justify-center py-10 md:py-20 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-lg">
          <div>
            <h2 class="text-center text-3xl font-extrabold text-gray-900">
              {{ page.title }}
            </h2>
            <p class="text-center text-gray-600 py-2">
              Neem contact op met onze klantenservice, wij staan voor je klaar!
            </p>
          </div>
        </div>

        <div class="mt-8 sm:mx-auto w-full md:max-w-4xl mx-auto">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="mb-10">
                <ul class="space-y-4 mt-4">
                  <li class="text-gray-600">
                    <a href="mailto:klantenservice@lidekahome.nl" class="flex">
                      <svg class="w-5 h-5 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      klantenservice@lidekahome.nl
                    </a>
                  </li>
                  <li class="text-gray-600">
                    <a href="tel:+31 (0)85 - 06 01 297" class="flex">
                      <svg class="w-5 h-5 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      +31 (0)85 - 06 01 297
                    </a>
                  </li>
                  <li class="text-gray-600">
                    <a href="tel:+31 (0)85 - 06 01 297" class="flex">
                      <svg class="w-5 h-5 mt-1 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                      +31 (0)85 - 06 01 297
                    </a>
                  </li>
                  <li class="text-gray-600 flex">
                    <svg class="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    Konings Dreef 9<br />3261 NJ, Oud-Beijerland
                  </li>
                  <li class="text-gray-600 flex">
                    <svg class="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div>
                      <strong>Lideka</strong><br />
                      BTW: NL003085645B77<br />
                      KVK: 76450309 (Eenmanszaak)<br />
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ContactForm />
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
import { Pages } from "~/services/shopify/Pages";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";

export default Vue.extend({
  components: {
    ContactForm,
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
    this.page = await Pages.find('contact');
    this.loading = false;
  },
})
</script>
