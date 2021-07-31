<template>
  <div class="flex flex-col items-center transition-all shadow-none rounded-lg" :class="{ 'mt-4': gradient }">
    <NuxtLink :to="product.url" prefetch>
      <ix-img class="rounded-lg"
              loading="lazy"
              :src="product.firstMediaSrc"
              :imgixParams="{fit:'fill', fill:'solid', fillcolor:'f7fafc', trim:'auto'}"
              :alt="product.title"
              width="100%"
              height="100%"
      />
    </NuxtLink>
    <NuxtLink class="text-md text-black w-full text-black text-left flex-grow flex-1 block mt-2" :class="{ 'text-gray-500': gradient }" :to="product.url">{{ product.title }}</NuxtLink>

    <div v-if="product.deliveryDate" class="text-left relative py-2 w-full">
      <dt class="block md:flex items-center">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="block text-green-500 ml-2 text-xs leading-6 font-medium">{{ product.deliveryDate }}</p>
      </dt>
    </div>
    <div v-else class="relative py-2 text-left w-full">
      <dt class="block md:flex items-center">
        <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p class="block text-green-500 ml-2 text-xs leading-6 font-medium">Voor 23:59 besteld = morgen
          verzonden.</p>
      </dt>
    </div>

    <div v-if="!gradient" class="flex items-center justify-space-between w-full">
      <p class="text-md w-full text-black text-left block mt-2 font-bold">
        {{ formatMoney(product.firstVariant.price) }}
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {formatMoney} from "~/services/Helpers";
import {mapActions} from "vuex";

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

  methods: {
    ...mapActions('shop/cart', [
      'addLine'
    ]),

    async addToCart(variantId: string|null|number, quantity = 1) {
      await this.addLine({variantId, quantity});
      //@ts-ignore
      this.$root.$emit('addNotification', 'Toegevoegd', 'Product toegevoegd aan winkelmandje');
    },
  }
});
</script>
