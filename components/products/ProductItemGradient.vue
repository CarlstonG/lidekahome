<template>
  <div class="flex flex-col items-center transition-all shadow-none rounded-lg relative">
    <NuxtLink :to="product.url" prefetch class="relative">
      <nuxt-img class="rounded-lg"
              provider="imgix"
              loading="lazy"
              :src="product.firstMediaSrc"
              :alt="product.title"
              width="100%"
              height="100%"
      />


      <span aria-hidden="true" class="absolute rounded-lg inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-90"></span>
      <div class="text-white text-xs block mt-2 absolute bottom-5 left-5 right-5">{{ product.title }}</div>
    </NuxtLink>
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
