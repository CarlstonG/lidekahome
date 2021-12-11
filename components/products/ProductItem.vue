<template>
  <div class="flex flex-col items-center transition-all shadow-none rounded-lg">
    <NuxtLink :to="product.url" prefetch>
      <img class="rounded-lg"
              loading="lazy"
              :src="product.firstMediaSrc"
              :alt="product.title"
              width="100%"
              height="100%"
      />
    </NuxtLink>
    <NuxtLink class="text-md text-black w-full text-black text-left flex-grow flex-1 h-full block mt-2" :class="{ 'text-white text-2xl font-bold': gradient }" :to="product.url">
      {{ !gradient ? product.title : product.firstVariant.title }}
    </NuxtLink>

    <div v-if="!gradient" class="w-full">
      <div v-if="product.deliveryDate" class="text-left relative py-2 w-full">
        <dt class="block md:flex">
          <p class="block text-green-500 text-xs leading-6 font-medium">{{ product.deliveryDate }}</p>
        </dt>
      </div>
      <div v-else class="relative py-2 text-left w-full">
        <dt class="block md:flex">
          <p class="block text-green-500 text-xs leading-6 font-medium">{{ currentMaxDeliveryTime }}</p>
        </dt>
      </div>
    </div>

    <div v-if="!gradient" class="flex items-center justify-space-between w-full">
      <p class="text-md w-full text-black text-left block mt-2 font-extralight">
        {{ formatMoney(product.price) }}
      </p>
      <div class="w-full text-right">
        <button @click.prevent="addToCart(product.firstVariantId, 1)" type="submit" name="add"
                id="AddToCart"
                class="mt-3 inline-block shadow-md p-2 px-4 items-center justify-center border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-else class="w-full">
      <p class="text-md w-full text-white text-left block mt-2 extralight opacity-50">
        {{ formatMoney(product.price) }}
      </p>
      <div class="">
        <NuxtLink :to="product.url">
          <div
              class="mt-3 uppercase inline-flex items-center space-x-4 tracking-wide shadow-md p-3 px-6 items-center justify-center border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span>Bekijken</span>
            <svg class="h-5 w-5"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"/>
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {formatMoney} from "~/services/Helpers";
import {mapActions, mapGetters} from "vuex";

export default Vue.extend({
  data() {
    return {
      formatMoney
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    gradient: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    ...mapGetters('shop/shop', [
      'currentMaxDeliveryTime'
    ])
  },

  methods: {
    ...mapActions('shop/cart', [
      'addLine'
    ]),

    async addToCart(variantId: string|null|number, quantity = 1) {
      await this.addLine({
        variantId: variantId,
        quantity: quantity
      });
      //@ts-ignore
      this.$root.$emit('addNotification', 'Toegevoegd', 'Product toegevoegd aan winkelmandje');
    },
  }
});
</script>
