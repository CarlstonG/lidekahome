<template>
  <dl class="mt-4 mb-2 space-y-2">
    <div class="relative">
      <dt class="flex">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="ml-3 text-md leading-6 text-gray-500">Gratis verzending</p>
      </dt>
    </div>

    <div class="relative">
      <dt class="flex">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="ml-3 text-md leading-6 text-gray-500">60 dagen bedenktijd en gratis retourneren</p>
      </dt>
    </div>

    <div class="relative">
      <dt class="flex">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="ml-3 text-md leading-6 text-gray-500">2 Jaar garantie</p>
      </dt>
    </div>

    <div class="relative">
      <dt class="flex">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="ml-3 text-md leading-6 text-gray-500">{{ lastSellingPoint }}</p>
      </dt>
    </div>
  </dl>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    slug: {
      type: String,
      default: '',
    },
  },

  computed: {
    lastSellingPoint() {
      const slugs = [
        'solar-charger-2400-mah-5v-346-5-g',
        'solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge',
      ];

      return slugs.includes(this.slug) ? 'Duurzaam en ijzersterk' : 'Krachtige, duurzame SMD 5050 Led\’s';
    }
  },
});
</script>
