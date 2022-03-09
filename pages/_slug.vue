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
      <div class="relative py-16 bg-white overflow-hidden">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="text-lg max-w-prose mx-auto">
            <h1>
              <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ page.title }}</span>
            </h1>
          </div>
          <div class="mt-6 max-w-6xl text-gray-500 mx-auto page-content shadow-lg p-4 md:p-12 rounded-lg default-page-content" v-html="page.body"></div>
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
import {getPageBySlug} from "../services/GqlService";
import Breadcrumbs from "~/components/Breadcrumbs";

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
      slug: null,
    };
  },

  head() {
    return {
      title: safeGet(this.page, 'seo.title', safeGet(this.page, 'title')),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: safeGet(this.page, 'seo.description', safeGet(this.page, 'body')),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: safeGet(this.page, 'seo.title', safeGet(this.page, 'title'))
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: safeGet(this.page, 'seo.description', safeGet(this.page, 'body'))
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
    this.page = await getPageBySlug(this.slug);
    
    if (! this.page) {
      this.page = await getPage(this.slug);
    }

    this.loading = false;
  },
})
</script>
