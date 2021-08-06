<template>
  <div class="bg-white">
    <div v-if="!blog.id">
      <div class="container mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
        <Loading v-show="loading"/>
        <NotFound v-if="!loading" />
      </div>
    </div>
    <div v-else>
      <div class="w-full bg-cover bg-no-repeat bg-center bg-scroll"
           :style="`background-image: url('${blog.article.image}')`">
        <div class="container mx-auto py-32 text-center"></div>
      </div>

      <div class="relative py-16 bg-white overflow-hidden">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="text-lg max-w-prose mx-auto">
            <h1>
              <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                {{ blog.article.publishedAt }}
              </span>
                <span
                  class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {{ blog.article.title }}
              </span>
            </h1>
          </div>
          <div class="mt-6 prose prose-lg text-gray-500 mx-auto">
            <div v-html="blog.article.contentHtml"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Loading from "../../components/Loading";
import {safeGet} from "../../services/Helpers";
import NotFound from "../../components/NotFound";
import {getArticle} from "../../services/ApiService";

export default Vue.extend({
  components: {
    NotFound,
    Loading,
  },

  data() {
    return {
      loading: false,
      blog: {},
      slug: null,
    };
  },

  head() {
    return {
      title: safeGet(this.blog, 'seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: safeGet(this.blog, 'seo.description'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: safeGet(this.blog, 'seo.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: safeGet(this.blog, 'seo.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: safeGet(this.blog, 'article.image')
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: safeGet(this.blog, 'article.imageAlt')
        }
      ]
    }
  },

  async asyncData({params}) {
    const slug = params.slug;
    return {slug}
  },

  async fetch() {
    this.loading = true;
    this.blog = await getArticle('blog', this.slug);
    this.loading = false;
  },
})
</script>
