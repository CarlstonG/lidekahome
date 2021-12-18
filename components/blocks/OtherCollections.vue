<template>
  <div>
    <client-only>
      <carousel v-bind="options" :perPageCustom="[[480, 1], [768, 2], [1022, 3]]" :navigation-enabled="true"
                :navigation-prev-label="prevLabel" :navigation-next-label="nextLabel">
        <slide v-if="collections.indexOf('rgb-led-strips') !== -1">
          <div class="space-y-4 flex flex-col justify-center items-center border-2 border-indigo-500 rounded-3xl px-10 py-10 mx-2">
            <img src="~assets/products/1.png" alt="RGB LED-strips" class="rounded-lg" />
            <h2 class="text-white text-xl font-bold uppercase tracking-wide">RGB LED-strips</h2>
            <NuxtLink to="/categorie/rgb-led-strips"
                      class="mt-3 uppercase tracking-wide flex inline-block shadow-md p-2 px-6 font-bold items-center justify-center border border-transparent rounded-full shadow-sm text-md  text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Meer informatie
            </NuxtLink>
          </div>
        </slide>
        <slide v-if="collections.indexOf('rgb-ic-led-strips') !== -1">
          <div class="space-y-4 flex flex-col justify-center items-center border-2 border-indigo-500 rounded-3xl px-10 py-10 mx-2">
            <img src="~assets/products/16.png" alt="RGB-IC LED-strips" class="rounded-lg" />
            <h2 class="text-white text-xl font-bold uppercase tracking-wide">RGB-IC LED-strips</h2>
            <NuxtLink to="/categorie/rgb-ic-led-strips"
                      class="mt-3 flex uppercase tracking-wide inline-block shadow-md p-2 px-6 font-bold items-center justify-center border border-transparent rounded-full shadow-sm text-md  text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Meer informatie
            </NuxtLink>
          </div>
        </slide>
        <slide v-if="collections.indexOf('tv-led-strips') !== -1">
          <div  class="space-y-4 flex flex-col justify-center items-center border-2 border-indigo-500 rounded-3xl px-10 py-10 mx-2">
            <img src="~assets/products/5.png" alt="TV LED-strips" class="rounded-lg" />
            <h2 class="text-white text-xl font-bold uppercase tracking-wide">TV LED-strips</h2>
            <NuxtLink to="/categorie/tv-led-strips"
                      class="mt-3 flex uppercase tracking-wide inline-block shadow-md p-2 px-6 font-bold items-center justify-center border border-transparent rounded-full shadow-sm text-md  text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Meer informatie
            </NuxtLink>
          </div>
        </slide>
        <slide v-if="collections.indexOf('led-pakketten') !== -1" >
          <div class="space-y-4 flex flex-col justify-center items-center border-2 border-indigo-500 rounded-3xl px-10 py-10 mx-2">
            <img src="~assets/products/18.png" alt="LED-strip pakket" class="rounded-lg" />
            <h2 class="text-white text-xl font-bold uppercase tracking-wide">LED-strip pakketten</h2>
            <NuxtLink to="/categorie/led-pakketten"
                      class="mt-3 flex uppercase tracking-wide inline-block shadow-md p-2 px-6 font-bold items-center justify-center border border-transparent rounded-full shadow-sm text-md  text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Meer informatie
            </NuxtLink>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    collections: {
      type: [],
      required: false,
    }
  },
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        space: 10,
        slideCount: 1,
        paginationEnabled: false,
      },
      nextLabel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" style=\"color: white;\" class=\"bi bi-caret-right\" viewBox=\"0 0 16 16\">\n" +
          "<path d=\"M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z\"/>\n" +
          "</svg>",
      prevLabel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" style=\"color: white;\" class=\"bi bi-caret-left\" viewBox=\"0 0 16 16\">\n" +
          "<path d=\"M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z\"/>\n" +
          "</svg>"
    }
  }
});
</script>


<style>
@media (max-width: 1400px) {
  .VueCarousel-navigation-button {
    /*display: none;*/
  }
}

.VueCarousel-navigation-button.VueCarousel-navigation-next {
  right: 20px !important;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.75);
}

.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  left: 20px !important;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.75);
}

@media (max-width: 800px) {
  .VueCarousel-navigation-button.VueCarousel-navigation-prev {
    left: 30px !important;
  }

  .VueCarousel-navigation-button.VueCarousel-navigation-next {
    right: 30px !important;
  }
}
</style>
