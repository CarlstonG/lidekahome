<template>
  <dl class="mt-4 mb-2 space-y-2">
    <div v-if="showDelivery" class="relative">
      <dt class="flex">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="ml-3 text-md leading-6 text-gray-500">voor {{ currentMaxDeliveryTime }} besteld, morgen in huis</p>
      </dt>
    </div>

    <div class="relative">
      <dt class="flex">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="ml-3 text-md leading-6 text-gray-500">24/7 bereikbaar</p>
      </dt>
    </div>

    <div class="relative">
      <dt class="flex">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="ml-3 text-md leading-6 text-gray-500">Gratis verzending in NL en BE</p>
      </dt>
    </div>

    <div class="relative">
      <dt class="flex">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="ml-3 text-md leading-6 text-gray-500">60 dagen gratis retourneren in NL en BE</p>
      </dt>
    </div>
  </dl>
</template>

<script>
import Vue from "vue";
import {mapGetters} from "vuex";

export default Vue.extend({
  props: {
    showDelivery: {
      type: Boolean,
      default: true,
    }
  },

  computed: {
    ...mapGetters('shop/shop', [
      'currentMaxDeliveryTime'
    ])
  }
});
</script>
