<template>
    <div>
        <button 
            @click.prevent="addToCart" 
            ref="addToCartButton"
            class="relative flex items-center justify-center py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            :class="fullWidth ? 'w-full' : 'w-52'"    
        >
            Nu kopen
        </button>

        <div v-if="isOpen" @click="isOpen = false" class="h-screen w-screen bg-black bg-opacity-50 fixed top-0 left-0 z-50 flex justify-center items-center">
            <div @click.stop="" class="bg-white shadow-md px-6 py-4 max-w-xl rounded-lg">
                <h2 class="text-xl font-bold text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl flex items-center">
                    Winkelwagen
                </h2>
                <div class="flex flex-col mt-6">
                    <table class="min-w-full divide-y divide-gray-200">
                      <tbody class="bg-white divide-y divide-gray-200">
                          <LineItem
                            v-for="lineItem in checkout.lineItems"
                            :key="lineItem.id"
                            :line-item="lineItem"
                            :delivery-dates="deliveryDates"
                            @addQuantity="addQuantity"
                            @subQuantity="subQuantity"
                            @updateQuantity="updateQuantity"
                            @removeFromCart="removeFromCart"
                          />
                      </tbody>
                    </table>

                    <table class="w-1/3 divide-y divide-gray-200">
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
                <div class="mt-4 grid md:grid-cols-2 gap-6">
                    <button @click.stop="onCheckoutButton" class="disabled:opacity-50 flex justify-center p-3 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Naar betalen
                    </button>
                    <a href="#" @click.prevent="isOpen = false" class="bg-white border border-gray-300 rounded-md p-3 text-md font-medium text-gray-900 hover:bg-gray-50 text-center">
                        Verder winkelen
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { post } from '~/services/ApiService';
import {formatMoney} from "~/services/Helpers";
import LineItem from './LineItem.vue';

export default Vue.extend({
    props: {
        variantId: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            default: 1,
        },
        directToCheckout: {
            type: Boolean,
            default: false,
        },
        fullWidth: {
            type: Boolean,
            default: false,
        },
    },

    components: {
        LineItem,
    },

    data() {
        return {
            formatMoney,
            isOpen: false,
            deliveryDates: {} as {[key: string]: null | string},
        };
    },

    computed: {
        ...mapGetters('shop/cart', [
            'checkout'
        ]),
    },

    methods: {
        ...mapActions('shop/cart', [
            'updateLineItemQuantity',
            'removeLineItem',
            'fetchCheckout',
            'addLine',
        ]),

        onCheckoutButton() {
            window.location.href = this.checkout.checkoutUrl.replace(process.env.shopifyDomain, process.env.shopifyCheckoutDomain);
        },

        async getDeliveryDates() {
            const handles = this.checkout.lineItems.map((item: any) => item.variant.productHandle);

            const { data } = await post('/checkout/delivery-dates', { handles });

            for (const product of data) {
                let value = product.product.delivery?.value ?? null;

                try {
                    value = JSON.parse(value)[0];
                } catch(e) {
                //
                }

                this.deliveryDates[product.product.handle] = value;
            }

            this.$forceUpdate();
        },

        async addQuantity(quantity: number, id: string|number, variantId: string) {
            await this.updateLineItemQuantity({
                quantity: ++quantity,
                lineItemId: id,
                variantId: variantId,
            });
        },

        async subQuantity(quantity: number, id: string|number, variantId: string) {
            await this.updateLineItemQuantity({
                quantity: --quantity,
                lineItemId: id,
                variantId: variantId,
            });
        },

        async updateQuantity(e: any, id: string|number, variantId: string) {
            await this.updateLineItemQuantity({
                quantity: parseInt(e.target.value) ?? 0,
                lineItemId: id,
                variantId: variantId,
            });
        },

        async removeFromCart(id: string|number) {
            await this.removeLineItem(id);

            if (this.checkout.lineItems.length === 0) {
                this.isOpen = false;
            }
        },

        async addToCart() {
            await this.addLine({
                variantId: this.variantId,
                quantity: this.quantity
            });

            // @ts-ignore
            window.dataLayer = window.dataLayer || [];
            // @ts-ignore
            window.dataLayer.push({ event: 'AddToCart' });

            if (this.directToCheckout) {
                this.onCheckoutButton();
            } else {
                this.getDeliveryDates();
                this.isOpen = true;
            }
        },
    },
});
</script>