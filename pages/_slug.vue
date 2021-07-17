<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 mx-6 lg:mx-0 relative">
        <Loading v-show="loading" />
        <div class="px-0 md:px-6 mb-8 md:mb-0">
          <div style="--swiper-navigation-color: #000; --swiper-pagination-color: #000; --swiper-navigation-size: 20px"
               class="swiper-container mySwiper2 mb-2">
            <div class="swiper-wrapper items-center">
              <div
                v-for="media in product.media"
                class="swiper-slide flex cursor-pointer justify-center items-center h-full w-full rounded-lg">
                <a data-fslightbox :href="media.src">
                  <ix-img v-if="media.type === 'IMAGE'" class="rounded-lg swiper-lazy"
                          loading="lazy"
                          width="800px"
                          height="800px"
                          :src="media.src"
                          :alt="media.alt"
                          :imgixParams="{fit:'fill', fill:'solid', fillcolor:'f7fafc', trim:'auto'}"
                  />
                  <video v-else="media.type === 'VIDEO'" width="100%" height="480px" controls
                         playsinline
                         autoplay
                         muted
                         :poster="media.preview"
                         class="rounded-lg border-5 border-color-black shadow-lg">
                    <source v-for="source in media.sources" :src="source.url" :type="source.mimeType">
                    Your browser does not support the video tag.
                  </video>
                  <div v-if="media.type === 'IMAGE'" class="swiper-lazy-preloader"></div>
                </a>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div thumbsSlider class="swiper-container mySwiper">
            <div class="swiper-wrapper items-center relative">
              <div
                v-for="media in product.media"
                class="swiper-slide flex cursor-pointer justify-center items-center h-20 w-20 rounded-lg bg-center bg-cover">
                <ix-img class="rounded-lg swiper-lazy"
                        loading="lazy"
                        width="100px"
                        height="100px"
                        :src="media.preview"
                        :alt="media.alt"
                        :imgixParams="{fit:'fill', fill:'solid', fillcolor:'f7fafc', trim:'auto'}"
                />
                <div class="swiper-lazy-preloader"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:px-4">
          <h1 class="font-extrabold text-4xl mb-2">{{ product.title }}</h1>

          <h2 v-if="product.price" class="text-2xl pb-6">&euro;{{ product.price }}</h2>

          <div class="flex items-center">
            <!-- if available -->
            <div class="mr-2">
              <select id="Quantity" name="quantity"
                      v-model="quantity"
                      class="focus:ring-blue-500 px-5 py-3 border focus:border-blue-500 relative block w-full rounded-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                <option selected>1</option>
                <option v-for="index in 20" :value="index+1">{{ index+1 }}</option>
              </select>
            </div>

            <button @click.prevent="addToCart(product.firstVariantId, quantity)" type="submit" name="add" id="AddToCart"
                    class="w-52 relative flex items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <svg class="w-5 h-5 -mt-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Bestellen
            </button>
          </div>

          <dl class="mt-4 mb-2 space-y-2">
            <div v-if="!product.delivery_date" class="relative">
              <dt class="flex">
                <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                </svg>
                <p class="ml-3 text-md leading-6 text-gray-500">voor 23:59 besteld = morgen in huis</p>
              </dt>
            </div>

            <div class="relative">
              <dt class="flex">
                <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <p class="ml-3 text-md leading-6 text-gray-500">24/7 bereikbaar</p>
              </dt>
            </div>

            <div class="relative">
              <dt class="flex">
                <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
                <p class="ml-3 text-md leading-6 text-gray-500">Gratis verzending & Gratis
                  retourneren</p>
              </dt>
            </div>

            <div class="relative">
              <dt class="flex">
                <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <p class="ml-3 text-md leading-6 text-gray-500">60 dagen gratis retourneren</p>
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-0 pb-10 pt-6">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="px-0 md:px-6 mb-6">
          <h2 class="font-extrabold text-3xl mb-4">Productbeschrijving</h2>
          <div class="product-des" v-html="product.description"></div>
        </div>
        <div class="px-0 md:px-6 mb-6">
          <h2 class="font-extrabold text-3xl mb-4">Specificaties</h2>
          <div class="product-specs" v-html="product.specifications"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "~/components/products/ProductItem.vue";
import Vue from "vue";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import ApiService from "../services/ApiService";
import Loading from "../components/Loading";
import {mapActions} from "vuex";

export default Vue.extend({
  components: {Loading, ProductItem},

  data() {
    return {
      loading: false,
      product: {},
      slug: null,
      quantity: 1,
    };
  },

  methods: {
    ...mapActions('shop/cart', [
      'addLine'
    ]),

    addToCart(variantId, quantity = 1) {
      this.addLine({ variantId, quantity });
    },

    initializeSwiper() {
      const thumbSwiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: false,
        touchRatio: 0.1,
        threshold: 5,
        lazy: true,
        allowTouchMove: true,
        speed: 100,
        centeredSlides: false,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          1200: {
            slidesPerView: 5,
          },
          800: {
            slidesPerView: 4,
            threshold: 5,
          },
          600: {
            slidesPerView: 4,
            threshold: 1,
          },
        }
      });

      new Swiper(".mySwiper2", {
        spaceBetween: 10,
        threshold: 10,
        centeredSlides: true,
        loop: false,
        lazy: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: thumbSwiper,
        },
      });
    },
  },

  async mounted() {
    this.$nextTick(() => {
      this.initializeSwiper();
    });
  },

  async asyncData({params}) {
    const slug = params.slug;
    return {slug}
  },

  async fetch() {
    this.loading = true;
    this.product = await ApiService.getProductByHandle(this.slug);
    this.loading = false;

    this.$nextTick(() => {
      this.initializeSwiper();
    });
  },
})
</script>

<style lang="scss">
.mySwiper {
  .swiper-slide {
    opacity: 0.4;
    height: 100px;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
