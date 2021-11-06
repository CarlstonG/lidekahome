<template>
  <div class="max-w-7xl mx-auto">
    <client-only>
      <carousel v-bind="options" :perPageCustom="[[480, 1], [768, 2], [1022, 3]]" :navigation-enabled="true"
                :navigation-prev-label="prevLabel" :navigation-next-label="nextLabel">
        <slide class="relative">
          <div class="_living-room hover:opacity-50 transition-all mx-2">
            <NuxtLink to="/categorie/led-strip-woonkamer">
              <div class="flex items-end justify-center text-center" style="height: 400px;">
                <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Woonkamer</h2>
              </div>
            </NuxtLink>
          </div>
        </slide>
        <slide class="relative">
          <div class="col-span-1 lg:col-span-7 _bedroom hover:opacity-50 transition-all mx-2">
            <NuxtLink to="/categorie/led-strip-slaapkamer">
              <div class="flex items-end justify-center text-center" style="height: 400px;">
                <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Slaapkamer</h2>
              </div>
            </NuxtLink>
          </div>
        </slide>
        <slide class="relative">
            <div class="col-span-1 lg:col-span-8 _kitchen hover:opacity-50 transition-all mx-2">
              <NuxtLink to="/categorie/led-strip-keuken">
                <div class="flex items-end justify-center text-center" style="height: 400px;">
                  <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Keuken</h2>
                </div>
              </NuxtLink>
            </div>
        </slide>
        <slide class="relative">
          <div class="col-span-1 lg:col-span-4 _gameroom hover:opacity-50 transition-all mx-2">
            <NuxtLink to="/categorie/led-strip-gamekamer">
              <div class="flex items-end justify-center text-center" style="height: 400px;">
                <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Game kamer</h2>
              </div>
            </NuxtLink>
          </div>
        </slide>
        <slide class="relative">
          <div class="col-span-1 lg:col-span-4 _bathroom hover:opacity-50 transition-all mx-2">
            <NuxtLink to="/categorie/led-strip-badkamer">
              <div class="flex items-end justify-center text-center" style="height: 400px;">
                <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Badkamer</h2>
              </div>
            </NuxtLink>
          </div>
        </slide>
        <slide class="relative">
          <div class="col-span-1 lg:col-span-4 _ceiling hover:opacity-50 transition-all mx-2">
            <NuxtLink to="/categorie/led-strip-plafond">
              <div class="flex items-end justify-center text-center" style="height: 400px;">
                <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Plafond</h2>
              </div>
            </NuxtLink>
          </div>
        </slide>
        <slide class="relative">
          <div class="col-span-1 lg:col-span-4 _bed hover:opacity-50 transition-all mx-2">
            <NuxtLink to="/categorie/led-strip-bed">
              <div class="flex items-end justify-center text-center" style="height: 400px;">
                <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Bed</h2>
              </div>
            </NuxtLink>
          </div>
        </slide>
        <slide class="relative">
          <div class="col-span-1 lg:col-span-4 _other hover:opacity-50 transition-all mx-2">
            <NuxtLink to="/categorie/led-strips">
              <div class="flex items-end justify-center text-center" style="height: 400px;">
                <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Overige</h2>
              </div>
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
