<template>
    <div class="bg-white">
        <Breadcrumbs />
        <div v-if="!vacancy">
            <div class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
                <Loading v-show="loading"/>
                <NotFound v-if="!loading" />
            </div>
            </div>
            <div v-else>
            <div class="relative py-16 bg-white overflow-hidden max-w-7xl mx-auto">
                <div class="relative px-4 sm:px-6 lg:px-8">
                <div class="text-lg max-w-prose mx-auto">
                    <h1 class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {{ vacancy.attributes.title }}
                    </h1>
                </div>
                <div class="mt-6 text-gray-500 page-content shadow-lg p-4 md:p-12 rounded-lg default-page-content" v-html="vacancy.attributes.Description"></div>

                <h2 class="block text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl mt-6">
                    Dagelijkse taken:
                </h2>
                <ul>
                    <li v-for="task in vacancy.attributes.Task" :key="task.Task">
                        - {{ task.Task }}
                    </li>
                </ul>

                <h2 class="block text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl mt-6">
                    Wat biedt Lideka?
                </h2>
                <ul>
                    <li v-for="offer in vacancy.attributes.what_we_offer" :key="offer.offer">
                        - {{ offer.offer }}
                    </li>
                </ul>

                <p class="text-gray-500 mt-6">
                    Ben je geïnteresseerd? Stuur een E-mail naar <a href="mailto:info@lidekahome.nl">info@lidekahome.nl</a>, en geef aan voor welke functie je wilt solliciteren, stuur ook jouw CV mee + een motivatiebrief. 
                </p>
                <p class="text-gray-500 mt-2">
                    We streven ernaar binnen 24 uur antwoord te geven, en een eventueel vervolggesprek in te plannen, als we potentie zien in jou.
                </p>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
import Vue from 'vue'
import Loading from "~/components/Loading.vue";
import NotFound from "~/components/NotFound.vue";
import Breadcrumbs from "~/components/Breadcrumbs.vue";

import { getVacancyBySlug } from '~/services/GqlService';
import { safeGet } from '~/services/Helpers';
export default Vue.extend({
    components: {
        Breadcrumbs,
        NotFound,
        Loading,
    },

    data() {
        return {
            loading: false,
            vacancy: {},
            slug: '',
        };
    },

    head() {
    return {
      title: safeGet(this.vacancy, 'attributes.SEO.title', safeGet(this.vacancy, 'attributes.title')),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: safeGet(this.vacancy, 'attributes.SEO.description', safeGet(this.vacancy, 'attributes.Description')),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: safeGet(this.vacancy, 'attributes.SEO.title', safeGet(this.vacancy, 'attributes.title'))
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: safeGet(this.vacancy, 'attributes.SEO.description', safeGet(this.vacancy, 'attributes.Description'))
        },
      ]
    }
  },


    async asyncData({params}) {
        const slug = params.slug;
        return {slug}
    },

    async fetch() {
        this.loading = true;

        this.vacancy = await getVacancyBySlug(this.slug);

        this.loading = false;
    },
})
</script>