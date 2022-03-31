<template>
  <div class="bg-white">
    <div v-if="!blog.id">
      <div class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
        <Loading v-show="loading" />
        <NotFound v-if="!loading" />
      </div>
    </div>
    <div class="bg-white pt-0 md:pt-6" v-else>
      <img :alt="blog.article.title" :src="blog.article.image" class="shadow-lg w-full max-w-2xl mx-auto md:rounded-lg rounded-none" />

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
          <div class="max-w-prose prose-lg mx-auto pt-6">
            <div class="flex justify-center space-x-4">
              <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank" rel="nofollow" class="text-social-fb hover:text-opacity-40">
                <svg class="h-4 w-4 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a :href="`https://twitter.com/intent/tweet?turl=${url}`" target="_blank" rel="nofollow" class="text-social-twitter hover:text-opacity-40">
                <svg class="h-4 w-4 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a :href="`https://api.whatsapp.com/send?text=${url}`" target="_blank" rel="nofollow" class="text-social-whatsapp hover:text-opacity-40">
                <svg class="h-4 w-4 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a :href="`http://pinterest.com/pin/create/button/?url=${url}`" target="_blank" rel="nofollow" class="text-social-pinterest hover:text-opacity-40">
                <svg class="h-4 w-4 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
              </a>
            </div>
          </div>
          <div class="mt-6 prose prose-lg text-gray-500 mx-auto">
            <div v-html="blog.article.contentHtml"></div>
          </div>
          <div class="max-w-prose prose-lg mx-auto">
            <h2 class="text-xl font-bold sm:text-xl sm:tracking-tight lg:text-2xl text-gray-900">Deel deze blog</h2>
            <div class="flex space-x-4">
              <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank" rel="nofollow" class="text-social-fb hover:text-opacity-40">
                <svg class="h-6 w-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a :href="`https://twitter.com/intent/tweet?turl=${url}`" target="_blank" rel="nofollow" class="text-social-twitter hover:text-opacity-40">
                <svg class="h-6 w-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a :href="`https://api.whatsapp.com/send?text=${url}`" target="_blank" rel="nofollow" class="text-social-whatsapp hover:text-opacity-40">
                <svg class="h-6 w-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a :href="`http://pinterest.com/pin/create/button/?url=${url}`" target="_blank" rel="nofollow" class="text-social-pinterest hover:text-opacity-40">
                <svg class="h-6 w-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import moment from 'moment';
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
      title: safeGet(this.blog, 'article.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: safeGet(this.blog, 'seo.description'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: safeGet(this.blog, 'article.title')
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
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
      ]
    }
  },

  computed: {
    url() {
      return `https://lidekahome.nl${this.$route.fullPath}`;
    },
  },

  jsonld() {
    return {
      '@context':'https://schema.org',
      '@type': 'BlogPosting',
      name: this.blog.article?.title,
      headline: this.blog.article?.excerpt,
      image: this.blog.article?.image,
      articleBody: this.blog.article?.content,
      datePublished: moment(this.blog.article?.publishedAtRaw).toISOString(),
      author: {
        '@type': 'Organization',
        name: 'Lideka',
        url: 'https://lidekahome.nl',
      },
    };
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
