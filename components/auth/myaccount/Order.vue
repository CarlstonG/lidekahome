<template>
  <div v-if="order">
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        <li>
          <a @click.prevent="isOpen = !isOpen" href="#" class="block hover:bg-gray-50">
            <div class="px-4 py-4 flex items-center sm:px-6">
              <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div class="truncate">
                  <div class="flex text-sm">
                    <p class="font-medium text-indigo-600 truncate">#{{ order.orderNumber }}</p>
                    <p class="ml-1 flex-shrink-0 font-normal text-gray-500">
                      {{ formatDate(order.processedAt) }}
                    </p>
                  </div>
                </div>
                <div class="ml-5 flex-shrink-0">
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </li>
        <transition name="fade">
          <li v-if="isOpen">
            <div class="px-4 py-4 sm:px-6">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div v-if="order.shippingAddress && Object.keys(order.shippingAddress).length > 0"
                     class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">
                    Verzendadres
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <span class="block">{{ order.shippingAddress.company }}</span>
                    <span class="block">{{ order.shippingAddress.firstName }} {{
                        order.shippingAddress.lastName
                      }}</span>
                    <span class="block">{{ order.shippingAddress.zip }} {{ order.shippingAddress.city }}</span>
                    <span class="block">{{ order.shippingAddress.country }}</span>
                    <span class="block">{{ order.shippingAddress.province }}</span>
                  </dd>
                </div>
                <div v-if="order.billingAddress && Object.keys(order.billingAddress).length > 0" class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">
                    Factuuradres
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <span class="block">{{ order.billingAddress.company }}</span>
                    <span class="block">{{ order.billingAddress.firstName }} {{ order.billingAddress.lastName }}</span>
                    <span class="block">{{ order.billingAddress.zip }} {{ order.billingAddress.city }}</span>
                    <span class="block">{{ order.billingAddress.country }}</span>
                    <span class="block">{{ order.billingAddress.province }}</span>
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">
                    Prijs
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <span class="block">Verzending: {{ formatMoney(order.totalShippingPrice.amount) }}</span>
                    <span class="block">BTW: {{ formatMoney(order.totalTax.amount) }}</span>
                    <span class="block font-bold">Totaal: {{ formatMoney(order.totalPrice.amount) }}</span>
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">
                    Status
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <span class="block">Betaling: {{ order.financialStatus }}</span>
                    <span class="block">Verzending: {{ order.fulfillmentStatus }}</span>
                  </dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">
                    Producten
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
                      <li v-for="lineItem in order.lineItems" class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div class="w-0 flex-1 flex items-center">
                          <span class="ml-2 flex-1 w-0 truncate">
                            {{ lineItem.quantity }}x {{ lineItem.title }} ({{ formatMoney(lineItem.originalTotalPrice.amount) }})
                          </span>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </li>
        </transition>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {formatDate, formatMoney} from "~/services/Helpers";
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      formatDate,
      formatMoney,
      isOpen: false,
    }
  },
  props: {
    order: {
      type: Object,
      required: true,
    }
  }
});
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  max-height: 750px;
  transition: all .25s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  max-height: 0;
}
</style>
