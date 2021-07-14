<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 mx-6 lg:mx-0">
        <div class="px-0 md:px-6 mb-8 md:mb-0">
          <div style="--swiper-navigation-color: #000; --swiper-pagination-color: #000; --swiper-navigation-size: 20px"
               class="swiper-container mySwiper2 mb-2">
            <div class="swiper-wrapper items-center">
              <div
                v-for="media in product.media"
                class="swiper-slide flex cursor-pointer justify-center items-center h-full w-full rounded-lg">
                <a data-fslightbox :href="media.src">
                  <img class="rounded-lg"
                       :src="media.src"
                       :alt="media.alt"
                  />
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
                class="swiper-slide flex cursor-pointer justify-center items-center h-20 w-20 rounded-lg border-2 border-2 border-gray-500 bg-center bg-cover"
                :style="`background-image: url('${media.preview}')`"></div>
            </div>
          </div>
        </div>
        <div class="lg:px-4">
          <h1 class="font-extrabold text-4xl mb-2">{{ product.title }}</h1>
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

export default Vue.extend({
  components: {ProductItem},

  data() {
    return {
      loading: false,
      product: {},
      slug: null,
    };
  },

  methods: {
    initializeSwiper() {
      const thumbSwiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: false,
        touchRatio: 0.1,
        threshold: 5,
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
    const product = await ApiService.getProductByHandle(slug);
    return { slug, product }
  },

  async fetch() {
    //this.product = await ApiService.getProductByHandle(this.slug);

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
