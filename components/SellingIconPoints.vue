<template>
  <div class="grid grid-cols-4 gap-2 my-4 md:w-10/12">
    <div class="flex flex-col justify-start items-center">
      <img src="~/assets/icons/WEBicons-04.png" class="w-12 h-12 mb-2" />
      <h2 class="text-xs text-gray-600 font-bold uppercase text-center">Gratis verzending</h2>
    </div>
    <div class="flex flex-col justify-start items-center">
      <img src="~/assets/icons/WEBicons-05.png" class="w-12 h-12 mb-2"/>
      <h2 class="text-xs text-gray-600 font-bold uppercase text-center">gratis retourneren binnen 60 dagen</h2>
    </div>
    <div class="flex flex-col justify-start items-center">
      <img src="~/assets/icons/WEBicons-09.png" class="w-12 h-12 mb-2" />
      <h2 class="text-xs text-gray-600 font-bold uppercase text-center">2 Jaar garantie</h2>
    </div>
    <div class="flex flex-col justify-start items-center">
      <img src="~/assets/icons/WEBicons-08.png" class="w-12 h-12 mb-2" />
      <h2 class="text-xs text-gray-600 font-bold uppercase text-center">{{ lastSellingPoint }}</h2>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    slug: {
      type: String,
      default: "",
    },
  },

  computed: {
    lastSellingPoint() {
      const slugs = [
        "solar-charger-2400-mah-5v-346-5-g",
        "solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge",
      ];

      return slugs.includes(this.slug)
        ? "Duurzaam en ijzersterk"
        : "Krachtige SMD 5050 Led\’s";
    },
  },
});
</script>
