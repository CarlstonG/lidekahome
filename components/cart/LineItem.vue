<template>
    <tr class="w-full">
        <td class="px-6 py-4 w-full">
            <div class="flex w-full items-center">
            <div class="flex-shrink-0 h-20 w-20 relative">
                <a class="bg-red-700 absolute left-0 top-0 z-10 text-white rounded-full p-1 inline-block"
                    @click.stop.prevent="$emit('removeFromCart', lineItem.id)"
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

                <p 
                    v-if="deliveryDates[lineItem.variant.productHandle]"
                    class="text-sm text-gray-500"
                >
                    {{ deliveryDates[lineItem.variant.productHandle] }}
                </p>
                <DeliveryTime
                    v-else
                    class="text-sm text-gray-500"
                />

                <div class="flex items-center space-x-2 mt-2 mb-2">
                    <div class="flex items-center space-x-2 flex-1">
                    <span
                        class="relative z-0 inline-flex shadow-sm rounded-md">
                        <button type="button"
                                @click.stop="$emit('subQuantity', lineItem.quantity, lineItem.id, lineItem.variant.id)"
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
                                @click.stop=""
                                @blur="$emit('updateQuantity', $event, lineItem.id, lineItem.variant.id)"
                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block text-center w-16 sm:text-sm border-gray-300"/>
                        <button type="button"
                                @click.stop="$emit('addQuantity', lineItem.quantity, lineItem.id, lineItem.variant.id)"
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
</template>

<script lang="ts">
import Vue from 'vue';
import {formatMoney} from "~/services/Helpers";
import DeliveryTime from '~/components/DeliveryTime.vue';

export default Vue.extend({
    props: {
        lineItem: {
            type: Object,
            required: true,
        },

        deliveryDates: {
            type: Object,
            required: true,
        },
    },

    components: {
        DeliveryTime,
    },

    data() {
        return {
            formatMoney,
        };
    },
})
</script>