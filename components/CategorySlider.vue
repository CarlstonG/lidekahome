<template>
  <div>
    <h2 v-if="title" class="text-center text-white max-w-4xl mx-auto font-bold text-3xl uppercase tracking-wide">{{ title }}</h2>
    <client-only>
      <carousel v-bind="options" :perPageCustom="[[480, 1], [768, 1], [1022, 2]]" :navigation-enabled="true"
                :navigation-prev-label="prevLabel" :navigation-next-label="nextLabel">
        <slide class="relative">
          <div class="default-gradient mx-2 relative h-full" style="border-radius: 20px;">
            <div class="p-6">
              <div class="flex items-center flex-col">
                <NuxtLink to="/categorie/rgb-led-strips">
                  <img src="~assets/products/14.png" class="rounded-lg w-full max-w-xs"/>
                </NuxtLink>

                <div class="flex space-x-8  items-center justify-center">
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-verified-account-50.svg"/>
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Kwaliteit 100%</span>
                  </div>
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-forest.svg"/>
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Duurzaam</span>
                  </div>
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-shade-selected-faces-50.svg"/>
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Helder</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-10 lg:px-6">
                <NuxtLink to="/categorie/rgb-led-strips">
                  <div class="space-y-4">
                    <h2 class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex items-center">
                      <span>RGB LED-strips</span>
                      <svg class="h-6 w-6"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20" fill="currentColor"
                           aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"/>
                      </svg>
                    </h2>
                    <p class="text-white font-extralight ">
                      Lideka biedt een geweldig assortiment RGB aan, je kunt ze voor enorm veel verschillende doeleinden gebruiken.
                    </p>
                    <p class="text-white font-extralight ">
                      De voordelen zijn:
                    </p>
                    <ul class="text-white grid grid-cols-2 gap-4 font-extralight no-list-type">
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6"
                                                                   src="~assets/icon/icons8-checkmark.svg"/><span
                          class="tracking-wide text-sm text-gray-300 uppercase font-bold">Bijzonder veel kleuren</span>
                      </li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6"
                                                                   src="~assets/icon/icons8-checkmark.svg"/><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold">Makkelijk te installeren</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6"
                                                                   src="~assets/icon/icons8-checkmark.svg"/><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold">Zelfklevende strip</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6"
                                                                   src="~assets/icon/icons8-checkmark.svg"/><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold">Duurzaam</span></li>
                    </ul>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </slide>
        <slide class="relative">
          <div class="default-gradient mx-2 relative h-full" style="border-radius: 20px;">
            <div class="p-6">
              <div class="flex items-center flex-col">
                <NuxtLink to="/categorie/rgb-ic-led-strips">
                  <img src="~assets/products/16.png" class="rounded-lg w-full max-w-xs" />
                </NuxtLink>

                <div class="flex space-x-8  items-center justify-center">
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-verified-account-50.svg" />
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Kwaliteit 100%</span>
                  </div>
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-forest.svg" />
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Duurzaam</span>
                  </div>
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-shade-selected-faces-50.svg" />
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Helder</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-10 lg:px-6">
                <NuxtLink to="/categorie/rgb-ic-led-strips">
                  <div class="space-y-4">
                    <h2 class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex items-center">
                      <span>RGB-IC LED-strips</span>
                      <svg class="h-6 w-6"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20" fill="currentColor"
                           aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"/>
                      </svg>
                    </h2>
                    <p class="text-white font-extralight ">
                      Bekijk hier één van de nieuwste soorten, ook wel de ‘’dreamcolor’’ strip genoemd. Net als alle andere modellen is de bedienbaar via app en afstandsbediening.
                    </p>
                    <p class="text-white font-extralight ">
                      De voordelen zijn:
                    </p>
                    <ul class="text-white grid grid-cols-2 gap-4 font-extralight no-list-type">
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 text-sm uppercase font-bold">De nieuwste kleureffecten</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 text-sm uppercase font-bold">Zelfklevend</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 text-sm uppercase font-bold">Scherpe prijs</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 text-sm uppercase font-bold">Duurzaam</span></li>
                    </ul>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </slide>
        <slide class="relative">
          <div class="default-gradient mx-2 relative h-full" style="border-radius: 20px;">
            <div class="p-6">
              <div class="flex items-center flex-col">
                <NuxtLink to="/categorie/tv-led-strips">
                  <img src="~assets/products/5.png" class="rounded-lg w-full max-w-xs"/>
                </NuxtLink>

                <div class="flex space-x-8  items-center justify-center">
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-verified-account-50.svg"/>
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Kwaliteit 100%</span>
                  </div>
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-forest.svg"/>
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Duurzaam</span>
                  </div>
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-shade-selected-faces-50.svg"/>
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Helder</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-10 lg:px-6">
                <NuxtLink to="/categorie/tv-led-strips">
                  <div class="space-y-4">
                    <h2 class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex items-center">
                      <span>TV LED-strips</span>
                      <svg class="h-6 w-6"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20" fill="currentColor"
                           aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"/>
                      </svg>
                    </h2>
                    <p class="text-white font-extralight ">
                      Hou je gave special effects bij jouw TV of Computer? Deze USB uitvoering is meer dan geschikt. Ook voor een mooie game kamer.
                    </p>
                    <p class="text-white font-extralight ">
                      De voordelen zijn:
                    </p>
                    <ul class="text-white grid grid-cols-2 gap-4 font-extralight no-list-type">
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6"
                                                                   src="~assets/icon/icons8-checkmark.svg"/><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold">Extra effecten bij de TV</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6"
                                                                   src="~assets/icon/icons8-checkmark.svg"/><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold">Achter de computer</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6"
                                                                   src="~assets/icon/icons8-checkmark.svg"/><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold">In een game kamer</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6"
                                                                   src="~assets/icon/icons8-checkmark.svg"/><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold">Achter een bureau</span></li>
                    </ul>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </slide>
        <slide class="relative">
          <div class="default-gradient mx-2 relative h-full" style="border-radius: 20px;">
            <div class="p-6">
              <div class="flex items-center flex-col">
                <NuxtLink to="/categorie/led-pakketten">
                  <img src="~assets/products/18.png" class="rounded-lg w-full max-w-xs" />
                </NuxtLink>

                <div class="flex space-x-8 items-center justify-center">
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-verified-account-50.svg" />
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Kwaliteit 100%</span>
                  </div>
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-forest.svg" />
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Duurzaamheid</span>
                  </div>
                  <div class="text-center flex flex-col">
                    <div class="flex-grow flex items-center justify-center">
                      <img class="w-10" src="~assets/icon/icons8-shade-selected-faces-50.svg" />
                    </div>
                    <span class="text-white font-bold text-xs tracking-wide uppercase mt-2">Helderheid</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-10 lg:px-6">
                <NuxtLink to="/categorie/led-pakketten">
                  <div class="space-y-4">
                    <h2 class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex items-center">
                      <span>LED pakketten</span>
                      <svg class="h-6 w-6"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20" fill="currentColor"
                           aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"/>
                      </svg>
                    </h2>

                    <p class="text-white font-extralight">
                      Voor de echte liefhebbers hebben we complete LED pakketten. Deze LED paketten bestaan uit TV en RGB strips. Beiden soorten bestaan uit complete sets.
                    </p>
                    <p class="text-white font-extralight">
                      De voordelen zijn:
                    </p>
                    <ul class="text-white grid grid-cols-2 gap-4 font-extralight no-list-type">
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 text-sm uppercase font-bold">Compleet</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 text-sm uppercase font-bold">Zelfklevend</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 text-sm uppercase font-bold">Scherpe prijs</span></li>
                      <li class="flex items-center space-x-2"><img alt="Checkmark" class="w-6 h-6" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 text-sm uppercase font-bold">Duurzaam</span></li>
                    </ul>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";

export default Vue.extend({
  components: {
    ProductItem,
    ProductItemGradient
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
  },
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
