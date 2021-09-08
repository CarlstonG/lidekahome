<template>
  <div class="bg-white">
    <div v-if="Object.keys(blog).length < 1 && loading">
      <div class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
        <Loading v-show="loading"/>
      </div>
    </div>
    <div v-else class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
      <div class="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {{ blog.title }}
          </h2>
        </div>
        <div class="mt-12 mx-auto grid gap-5 lg:grid-cols-4">
          <div v-for="article in blog.articles" :key="article.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <NuxtLink :to="article.url">
                <img class="h-96 w-full object-cover" :src="article.image" :alt="article.imageAlt">
              </NuxtLink>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <NuxtLink :to="article.url" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    {{ article.title }}
                  </p>
                </NuxtLink>
                <NuxtLink :to="article.url" class="block mt-2 text-gray-500">
                  <p class="mt-3 text-base text-gray-500">
                    {{ article.excerpt }}
                  </p>
                </NuxtLink>
              </div>
              <div class="mt-6 flex items-center">
                <div>
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      {{ article.author }}
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">
                      {{ article.publishedAt }}
                    </time>
                  </div>
                </div>
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
import {getBlog} from "../../services/ApiService";
import {safeGet} from "../../services/Helpers";

export default Vue.extend({
  components: {
    Loading,
  },

  data() {
    return {
      loading: false,
      slug: null,
      blog: {},
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
    this.blog = await getBlog('blog');
    this.loading = false;
  },
})
</script>
