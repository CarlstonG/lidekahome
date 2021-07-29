<template>
  <div class="bg-white">
    <div v-if="!product.id">
      <div class="container mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
        <Loading v-show="loading"/>
        <NotFound v-if="!loading" />
      </div>
    </div>
    <div v-else>
      <Breadcrumbs class="hidden md:block" :path="[ { title: product.collection.title, path: product.collection.url } ]" :title="product.title" />
      <div class="container mx-auto pb-20 pt-6 md:pt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 mx-6 lg:mx-0 relative">
          <div class="px-0 md:px-6 mb-8 md:mb-0">
            <div
              style="--swiper-navigation-color: #000; --swiper-pagination-color: #000; --swiper-navigation-size: 20px"
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
                    <video v-else-if="media.type === 'VIDEO'" width="100%" height="480px" controls
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


            <div v-if="product.related">
              <span class="text-sm text-gray-500">Aantal meters:</span>
              <div class="pb-4 mt-1">

                <NuxtLink
                  v-for="related in product.related"
                  :key="related.id"
                  :to="`/product/${related.handle}`"
                  :class="!related.selected ? 'py-1 text-sm px-4 inline-block bg-white border border-gray-500 transition-opacity hover:opacity-50 rounded-md mr-1 mb-1' : 'py-1 px-4 text-sm inline-block bg-black text-white border border-black\n'+
'            rounded-md mr-1 mb-1'"
                >
                  {{ related.name }}
                </NuxtLink>

              </div>
            </div>

            <div v-if="product.deliveryDate" class="relative pb-4">
              <dt class="block md:flex items-center">
                <div
                  class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500">
                  op voorraad
                </div>
                <p class="block text-green-500 ml-2 text-sm leading-6 font-medium">{{ product.deliveryDate }}</p>
              </dt>
            </div>
            <div v-else class="relative pb-4">
              <dt class="block md:flex items-center">
                <div
                  class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500">
                  op voorraad
                </div>
                <p class="block text-green-500 ml-2 text-sm leading-6 font-medium">Voor 23:59 besteld = morgen
                  verzonden.</p>
              </dt>
            </div>

            <div class="flex items-center">
              <!-- if available -->
              <div class="mr-2">
                <select id="Quantity" name="quantity"
                        v-model="quantity"
                        class="focus:ring-blue-500 px-5 py-3 border focus:border-blue-500 relative block w-full rounded-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                  <option selected>1</option>
                  <option v-for="index in 20" :value="index+1">{{ index + 1 }}</option>
                </select>
              </div>

              <button @click.prevent="addToCart(product.firstVariantId, quantity)" type="submit" name="add"
                      id="AddToCart"
                      class="w-52 relative flex items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <svg class="w-5 h-5 -mt-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Bestellen
              </button>
            </div>

            <SellingPoints :show-delivery="!product.deliveryDate"/>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-6 lg:px-0 pb-10 pt-6">
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
  </div>
</template>

<script>
import ProductItem from "~/components/products/ProductItem.vue";
import Vue from "vue";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Loading from "~/components/Loading";
import {mapActions} from "vuex";
import SellingPoints from "~/components/SellingPoints";
import {Products} from '~/services/shopify/Products';
import {safeGet} from "~/services/Helpers";
import NotFound from "~/components/NotFound";
import Breadcrumbs from "../../components/Breadcrumbs";

export default Vue.extend({
  components: {Breadcrumbs, NotFound, SellingPoints, Loading, ProductItem},

  head() {
    return {
      title: safeGet(this.product, 'seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: safeGet(this.product, 'seo.description'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: safeGet(this.product, 'seo.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: safeGet(this.product, 'seo.description')
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: safeGet(this.product, 'product.firstMediaSrc')
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: safeGet(this.product, 'product.title')
        }
      ]
    }
  },

  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.product.title,
      brand: this.product.brand,
      description: this.product.description,
      image: this.product.firstMediaSrc
    };
  },

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

    async addToCart(variantId, quantity = 1) {
      await this.addLine({variantId, quantity});
      //@ts-ignore
      this.$root.$emit('addNotification', 'Toegevoegd', 'Product toegevoegd aan winkelmandje');

      this.product = await Products.find(this.slug);
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
          1500: {
            slidesPerView: 6,
          },
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
    this.product = await Products.find(this.slug);
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
