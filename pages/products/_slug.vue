<template>
  <div class="bg-white">
    <div v-if="!product || !product.title">
      <div class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
        <Loading v-show="loading"/>
        <NotFound v-if="!loading"/>
      </div>
    </div>
    <div v-else>
      <div v-show="showFixedOrderBar" class="fixed-order-bar fixed z-10 w-full bg-white border-b border-gray-200 ">
        <div class="max-w-7xl mx-auto py-3 flex items-center justify-end">
          <dl v-if="product.deliveryDate" class="relative mr-6">
            <dt class="block md:flex items-center">
              <div
                class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500">
                op voorraad
              </div>
              <p class="block text-green-500 ml-2 text-sm leading-6 font-medium">{{ product.deliveryDate }}</p>
            </dt>
          </dl>
          <dl v-else class="relative mr-6">
            <dt class="block md:flex items-center">
              <div
                class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500">
                op voorraad
              </div>
              <p class="block text-green-500 ml-2 text-sm leading-6 font-medium">{{ deliveryTime }}</p>
            </dt>
          </dl>

          <button @click.prevent="addToCart(product.firstVariantId, quantity)" type="submit" name="add"
                  class="w-52 relative flex items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <svg class="w-5 h-5 -mt-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            {{ product.deliveryDate ? 'Pre-order' : 'Bestellen' }}
          </button>
        </div>
      </div>
      <Breadcrumbs class="hidden md:block" :path="[ { title: product.collection.title, path: product.collection.url } ]"
                   :title="product.title" />
      <div class="max-w-7xl mx-auto pb-2 pt-6 md:pt-10">
        <div class="grid grid-cols-1 md:grid-cols-12 mx-6 lg:mx-0 relative">
          <div class="px-0 md:px-6 mb-8 md:mb-0 col-span-1 md:col-span-6">
            <div
              style="--swiper-navigation-color: #2563eb; --swiper-pagination-color: #2563eb; --swiper-navigation-size: 40px"
              class="swiper-container mySwiper2 mb-2">
              <div class="swiper-wrapper items-center">
                <div
                  v-for="media in product.media"
                  class="swiper-slide flex cursor-pointer justify-center items-center h-full w-full rounded-lg">

                  <a v-if="media.type === 'IMAGE'" data-fancybox="gallery" :data-src="`${media.src}`">
                    <img class="rounded-lg swiper-lazy"
                          loading="lazy"
                          width="800px"
                          height="800px"
                          :src="media.src"
                          :alt="media.alt"
                    />
                    <div class="swiper-lazy-preloader"></div>
                  </a>
                  <a v-if="media.type === 'VIDEO'" data-fancybox="gallery" data-type="video" :data-src="`${media.sources[Object.keys(media.sources)[1]].url}`">
                    <video width="100%" height="480px" controls
                           playsinline
                           autoplay
                           muted
                           :poster="media.preview"
                           class="rounded-lg border-5 border-color-black shadow-lg">
                      <source v-for="source in media.sources" :src="source.url" :type="source.mimeType">
                      Your browser does not support the video tag.
                    </video>
                  </a>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
            <div thumbsSlider
                 class="swiper-container mySwiper"
                 style="--swiper-navigation-color: #2563eb; --swiper-pagination-color: #2563eb; --swiper-navigation-size: 24px"
            >
              <div class="swiper-wrapper items-center relative">
                <div
                  v-for="media in product.media"
                  class="swiper-slide flex cursor-pointer justify-center items-center h-20 w-20 rounded-lg bg-center bg-cover">
                  <img class="rounded-lg swiper-lazy"
                          loading="lazy"
                          width="100px"
                          height="100px"
                          :src="media.preview"
                          :alt="media.alt"
                  />
                  <div class="swiper-lazy-preloader"></div>
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
          <div class="lg:px-4 col-span-1 md:col-span-6">
            <h1 class="font-extrabold text-4xl">{{ product.title }}</h1>

            <a href="#reviews" v-if="product.stars > 0" class="flex items-center">
              <svg v-for="star in product.stars" :key="star"  class="flex-shrink-0 h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              ({{ product.totalReviews }})
            </a>

            <h2 v-if="product.price" class="text-2xl mb-6 mt-2 inline-block font-bold text-red-500 rounded-md">
              {{ formatMoney(product.price) }} <del v-if="product.priceCompare" class="text-xl text-black">{{ formatMoney(product.priceCompare) }}</del>
            </h2>

            <div v-if="product.related">
              <span class="text-sm text-gray-500">Aantal meters:</span>
              <div class="pb-4 mt-1">
                <NuxtLink
                  v-for="related in product.related"
                  :key="related.id"
                  :to="`/products/${related.handle}`"
                  :class="!related.selected ? 'py-1 text-sm px-4 inline-block bg-white border border-gray-500 transition-opacity hover:opacity-50 rounded-md mr-1 mb-1' : 'py-1 px-4 text-sm inline-block bg-black text-white border border-black\n'+
'            rounded-md mr-1 mb-1'"
                >
                  {{ related.name }}
                </NuxtLink>
              </div>
            </div>

            <dl v-if="product.deliveryDate" class="relative pb-4">
              <dt class="block md:flex items-center">
                <div
                  class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500">
                  op voorraad
                </div>
                <p class="block text-green-500 ml-2 text-sm leading-6 font-medium">{{ product.deliveryDate }}</p>
              </dt>
            </dl>
            <dl v-else class="relative pb-4">
              <dt class="block md:flex items-center">
                <div
                  class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500">
                  op voorraad
                </div>
                <p class="block text-green-500 ml-2 text-sm leading-6 font-medium">{{ deliveryTime }}</p>
              </dt>
            </dl>

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

              <button @click.prevent="addToCart(product.firstVariantId, quantity)" ref="addToCartButton" type="submit" name="add"
                      id="AddToCart"
                      class="w-52 relative flex items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <svg class="w-5 h-5 -mt-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>

                {{ product.deliveryDate ? 'Pre-order' : 'Bestellen' }}
              </button>
            </div>

            <p class="text-sm text-gray-500 mt-1">
              Betaal in 4 termijnen met Klarna
            </p>

            <SellingPoints :slug="slug" />

            <NuxtLink to="/contact" class="text-sm text-gray-500 inline-flex mt-2 hover:text-gray-700">
              Zakelijke aankoop nodig? Contacteer sales
              <svg class="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </NuxtLink>

            <div v-if="product.title.includes('led') || product.title.includes('Led') || product.title.includes('LED')">
              <VideoReviewsSmall />
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-0 pb-10 pt-6">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="px-0 md:px-6 mb-6 ">
            <div v-if="productDescription">
              <h2 class="font-extrabold text-3xl mb-4">Productbeschrijving</h2>
              <div class="relative">
                <div class="product-des" v-bind:class="{ 'fadeHidden': !expandProductDescription }" v-html="productDescription"></div>
                <div v-show="!expandProductDescription" class="w-full flex justify-center absolute bottom-6 z-10 left-0 right-0">
                  <button @click.prevent="expandProductDescription = true" type="button" class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Toon meer
                  </button>
                </div>
              </div>
            </div>

            <div v-if="product.specifications">
              <h2 class="font-extrabold text-3xl mb-4">Specificaties</h2>
              <div class="relative">
                <div class="product-specs" v-bind:class="{ 'fadeHidden': !expandSpecifications }" v-html="cleanSpecifications"></div>
                <div v-show="!expandSpecifications" class="w-full flex justify-center absolute bottom-6 z-10 left-0 right-0">
                  <button @click.prevent="expandSpecifications = true" type="button" class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Toon meer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="product" class="px-0 md:px-6 mb-6" id="reviews">
            <Reviews v-if="reviews.reviews" :product="product" :reviews="reviews.reviews" />
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
import {safeGet} from "~/services/Helpers";
import NotFound from "~/components/NotFound";
import Breadcrumbs from "../../components/Breadcrumbs";
import "@fancyapps/ui/dist/fancybox.css";
import _ from 'lodash';
import {getProduct, getReviews} from "../../services/ApiService";
import {deliveryTime, formatMoney} from "../../services/Helpers";
import Reviews from "../../components/reviews/Reviews";
import Stars from "../../components/reviews/Stars";
import VideoReviewsSmall from "../../components/VideoReviewsSmall";

export default Vue.extend({
  components: {Stars, Reviews, Breadcrumbs, NotFound, SellingPoints, Loading, ProductItem, VideoReviewsSmall},

  head() {
    return {
      title: safeGet(this.product, 'seo.title') ?? safeGet(this.product, 'title'),
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
          content: safeGet(this.product, 'product.altMediaSrc')
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: safeGet(this.product, 'product.title')
        }
      ]
    }
  },

  computed: {
    productDescription() {
      return this.product.description;
    },

    cleanSpecifications() {
      if (! this.product.specifications) {
        return null;
      }

      return this.product.specifications.replace(/style="[^"]*"/gm, "")
    },
  },

  jsonld() {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        sku: safeGet(this.product, 'sku'),
        name: safeGet(this.product, 'title'),
        brand: safeGet(this.product, 'brand'),
        description: safeGet(this.product, 'description'),
        image: safeGet(this.product, 'altMediaSrc'),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: safeGet(this.product, 'stars', 0),
          bestRating: "5",
          ratingCount: safeGet(this.product, 'totalReviews', 0)
        },
      },
      ...safeGet(this.reviews, 'ldata', {})
    ]
  },

  data() {
    return {
      formatMoney,
      showLightbox: false,
      loading: false,
      product: {},
      slug: null,
      deliveryTime: deliveryTime(),
      quantity: 1,
      productImages: [],
      expandProductDescription: false,
      expandSpecifications: false,
      showFixedOrderBar: false,
    };
  },

  methods: {
    ...mapActions('shop/cart', [
      'addLine'
    ]),

    ...mapActions('shop/products', [
      'addProductToRecentlyVisited',
    ]),

    async addToCart(variantId, quantity = 1) {
      await this.addLine({
        variantId: variantId,
        quantity: quantity
      });

      //@ts-ignore
      this.$root.$emit('productAddedToCart', this.product, quantity);

      this.product = await getProduct(this.slug);
    },

    initializeSwiper() {
      const thumbSwiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: false,
        freeMode: true,
        touchRatio: 0.1,
        threshold: 5,
        lazy: true,
        allowTouchMove: true,
        speed: 100,
        centeredSlides: false,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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

    isScrolledPastAddToCartButton() {
      const button = this.$refs.addToCartButton;
      
      this.showFixedOrderBar = window.scrollY > (button.offsetTop + button.offsetHeight);
    },
  },

  async mounted() {
    this.$nextTick(() => {
      this.initializeSwiper();

      if (this.productDescription.length < 500) {
        this.expandProductDescription = true;
      }
    });

    this.addProductToRecentlyVisited({
      slug: this.slug,
      title: this.product.title,
      image: this.productImages[0],
      deliveryDate: this.product.deliveryDate,
      price: this.product.price,
    });

    this.isScrolledPastAddToCartButton();
    window.addEventListener('scroll', this.isScrolledPastAddToCartButton);
  },

  unmounted() {
      window.removeEventListener('scroll', this.isScrolledPastAddToCartButton);
  },

  async asyncData(ctx) {
    const slug = ctx.params.slug;
    const product = await getProduct(slug);

    const reviews = await getReviews(safeGet(product, 'id'));

    const x = _.map(product.media, (item) => {
      return item.fullSrc !== null ? item.fullSrc : false
    });

    const productImages = _.reject(x, (item) => {
      return !item;
    });

    return {product, reviews, slug, productImages }
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

.swiper-button-prev, .swiper-button-next {
  font-size: 30px;
}

.fadeHidden {
  position: relative;
  max-height: 500px;
  overflow: hidden;

  &:after {
    background: transparent;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    display: block;
    opacity: 1;
    content: ' ';
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.fixed-order-bar {
  top: 11rem;

  @media screen and (max-width: 423px) {
    top: unset;
    padding: 0 1rem;
  }
}
</style>


