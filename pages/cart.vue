<template>
  <div class="bg-white">

    <div class="max-w-7xl mx-auto py-20">
      <script src="//widget.thuiswinkel.org/script.js?id=NTM3NC0y"></script>
      <div class="grid gap-5 grid-cols-1 lg:grid-cols-3">
        <div class="col-span-2">
          <div class="text-left px-4 md:px-0 mb-6">
            <h1
              class="mt-1 text-2xl font-bold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl flex items-center">
              <svg class="w-10 h-10 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Winkelwagen
            </h1>
          </div>

          <div class="flex flex-col relative">

            <Loading v-show="loading || !checkout"/>
            <div v-show="checkout" novalidate>
              <div v-if="checkout.lineItems && checkout.lineItems.length > 0"
                   class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden border-b border-gray-200">
                    <table class="min-w-full divide-y divide-gray-200">
                      <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="lineItem in checkout.lineItems" class="w-full">
                        <td class="px-6 py-4 w-full">
                          <div class="flex w-full items-center">
                            <div class="flex-shrink-0 h-20 w-20 relative">
                              <a class="bg-red-700 absolute left-0 top-0 z-10 text-white rounded-full p-1 inline-block"
                                 @click.prevent="removeFromCart(lineItem.id)"
                                 href="#">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                              </a>
                              <NuxtLink v-if="lineItem.variant" :to="`/products/${lineItem.variant.productHandle}`">
                                <img
                                  v-if="lineItem.variant.image"
                                  class="h-20 w-20"
                                  :src="lineItem.variant.image"
                                  :alt="lineItem.title">
                              </NuxtLink>
                            </div>
                            <div class="ml-4 flex-1">
                              <div class="text-sm font-medium text-gray-900">
                                <NuxtLink v-if="lineItem.variant" class="font-bold text-lg"
                                          :to="`/products/${lineItem.variant.productHandle}`">
                                  {{ lineItem.title }}
                                </NuxtLink>

                                <div class="flex items-center space-x-2 mt-4 mb-2">
                                  <div class="flex items-center space-x-2 flex-1">
                                    <span
                                      class="relative z-0 inline-flex shadow-sm rounded-md">
                                      <button type="button"
                                              @click="subQuantity(lineItem.quantity, lineItem.id, lineItem.variant.id)"
                                              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        <span class="sr-only">Previous</span>
                                        <!-- Heroicon name: solid/chevron-left -->
                                        <svg class="h-5 w-5"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clip-rule="evenodd"/>
                                        </svg>
                                      </button>
                                        <input type="number" :value="lineItem.quantity"
                                               min="0"
                                               name="updates[]"
                                               @blur="updateQuantity($event, lineItem.id, lineItem.variant.id)"
                                               class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block text-center w-16 sm:text-sm border-gray-300"/>
                                      <button type="button"
                                              @click="addQuantity(lineItem.quantity, lineItem.id, lineItem.variant.id)"
                                              class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        <span class="sr-only">Next</span>
                                        <!-- Heroicon name: solid/chevron-right -->
                                        <svg class="h-5 w-5"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true">
                                          <path fill-rule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"/>
                                        </svg>
                                      </button>
                                    </span>
                                  </div>
                                  <div v-if="lineItem.variant">
                                    {{ formatMoney(lineItem.variant.price * lineItem.quantity) }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div v-else class="px-4 md:px-0">
                Je winkelwagen is nog leeg!
              </div>

              <div v-if="checkout.lineItems && checkout.lineItems.length > 0">
                <div class="mt-4 px-6">
                  <div class="flex items-center space-x-4 mb-4 max-w-md">
                    <div class="flex-1 flex-grow">
                      <FormField :model-value.sync="fields.coupon" name="Coupon code" hide-label />
                    </div>

                    <button
                        @click.prevent="applyCoupon"
                        type="button"
                        class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Activeer
                    </button>
                  </div>
                </div>

                <div v-show="checkout" class="flex items-center justify-start">
                  <div class="pb-10 px-6">
                    <table class="min-w-full divide-y divide-gray-200">
                      <tbody>
                      <tr class="bg-gray-50">
                        <td class="px-3 py-2 whitespace-nowrap text-md font-medium text-gray-900">
                          Verzendkosten
                        </td>
                        <td class="px-3 py-2 whitespace-nowrap text-sm font-medium text-green-600">
                          GRATIS
                        </td>
                      </tr>
                      <tr>
                        <td class="px-3 py-2 whitespace-nowrap text-md font-medium text-gray-900">
                          Totaal
                        </td>
                        <td v-if="checkout.subTotalPrice"
                            class="px-3 py-2 whitespace-nowrap text-md font-medium text-gray-900">
                          <del class="text-xs text-gray-500" v-if="checkout.paymentDue.amount < checkout.subTotalPrice.amount">{{ formatMoney(checkout.subTotalPrice.amount) }}</del>

                          {{ formatMoney(checkout.paymentDue.amount) }} incl. btw
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <div class="flex items-start mb-4 px-6">
                    <div class="h-5 flex items-center">
                      <input id="terms" v-model="terms" name="terms" type="checkbox"
                             class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="terms" class="font-medium text-gray-700">
                        Ik ga akkoord met de
                        <NuxtLink class="underline" target="_blank" to="/algemene-voorwaarden">algemene
                          voorwaarden
                        </NuxtLink>
                        .
                      </label>
                    </div>
                  </div>
                  <div class="flex items-center justify-start px-6">
                    <a
                      v-if="checkout"
                      @click.prevent="onCheckoutButton"
                      class="w-60 disabled:opacity-50 flex justify-center py-3 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Naar betalen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="overflow-hidden bg-gray-50 sm:rounded-lg p-8 w-full">
            <h2 class="text-2xl font-bold mb-2">
              Onze service
            </h2>

            <SellingPoints/>

            <h2 class="text-md font-medium mb-4 mt-6 text-gray-400">
              Makkelijk betalen
            </h2>
            <div class="flex">
              <PaymentMethodes/>
            </div>
            <h2 class="text-md font-medium mt-6 text-gray-400">
              Veilig winkelen
            </h2>
            <div class="mt-4 mb-4">
              <a href="https://www.thuiswinkel.org/leden/lidekahome-nl/certificaat/" target="_blank">
                <img loading="lazy" class="w-40" alt="Thuiswinkel" src="~/assets/thuiswinkel-black.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions, mapGetters} from "vuex";
import {formatMoney} from "~/services/Helpers";
import Loading from "~/components/Loading.vue";
import SellingPoints from "~/components/SellingPoints.vue";
import PaymentMethodes from "~/components/PaymentMethodes.vue";
import FormField from "~/components/input/FormField.vue";

export default Vue.extend({
  name: 'winkelwagen',
  components: {FormField, PaymentMethodes, SellingPoints, Loading},

  data() {
    return {
      formatMoney,
      products: [],
      loading: false,
      terms: false,
      checkoutUrl: '#',
      fields: {
        coupon: ''
      }
    };
  },

  computed: {
    ...mapGetters('shop/cart', [
      'checkout'
    ]),

    ...mapGetters('shop/customer', [
      'customer'
    ]),
  },

  head() {
    return {
      title: 'Lideka Home - Winkelwagen'
    }
  },

  methods: {
    ...mapActions('shop/cart', [
      'updateLineItemQuantity',
      'removeLineItem',
      'applyDiscount',
      'fetchCheckout'
    ]),

    async applyCoupon() {
      await this.applyDiscount({
        discountCode: this.fields.coupon
      });
      await this.fetchCheckout();
    },

    onCheckoutButton(e: Event) {
      if (!this.terms) {
        if (!confirm('Door verder te gaan gaat u akkoord met onze algemene voowaarden.')) {
          e.preventDefault();
          return;
        }
      }

      window.location.href = this.checkout.checkoutUrl.replace(process.env.shopifyDomain, process.env.shopifyCheckoutDomain);
    },

    async addQuantity(quantity: number, id: string|number, variantId: string) {
      this.loading = true;
      await this.updateLineItemQuantity({
        quantity: ++quantity,
        lineItemId: id,
        variantId: variantId,
      });
      this.loading = false;
    },

    async subQuantity(quantity: number, id: string|number, variantId: string) {
      this.loading = true;
      await this.updateLineItemQuantity({
        quantity: --quantity,
        lineItemId: id,
        variantId: variantId,
      });
      this.loading = false;
    },

    async updateQuantity(e: any, id: string|number, variantId: string) {
      this.loading = true;
      await this.updateLineItemQuantity({
        quantity: parseInt(e.target.value) ?? 0,
        lineItemId: id,
        variantId: variantId,
      });
      this.loading = false;
    },

    async removeFromCart(id: string|number) {
      this.loading = true;
      await this.removeLineItem(id);
      this.loading = false;
    }
  },
})
</script>
