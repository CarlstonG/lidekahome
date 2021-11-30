<template>
    <div
        v-if="items.length > 0"
        class="pt-5 pb-8"
        :class="{'bg-white': !useDarkBackground}">
        <div class="max-w-7xl mx-auto">
            <h2
                class="text-xl font-bold sm:text-xl sm:tracking-tight lg:text-2xl"
                :class="{'text-gray-400': useDarkBackground, 'text-gray-900': !useDarkBackground}">
                Recent bezochte artikelen
            </h2>
            <div class="md:grid grid-cols-5 gap-6 mt-4">
                <NuxtLink :to="`/products/${product.slug}`" v-for="product in items.slice().reverse()" :key="product.slug" class="text-sm">
                    <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                    <img class="w-full h-full object-center object-cover"
                                loading="lazy"
                                :src="product.image"
                                :alt="product.title"
                                width="100%"
                                height="100%"
                    />
                    </div>
                    <h3
                        class="mt-4 font-bold text-base text-center md:text-left"
                        :class="{'text-gray-300': useDarkBackground, 'text-gray-900': !useDarkBackground}">
                        {{ product.title }}
                    </h3>
                    <p class="text-gray-500 text-md text-green-500 mt-2">
                        <span v-if="product.deliveryDate">{{ product.deliveryDate }}</span>
                        <span v-else>{{ currentMaxDeliveryTime }}</span>
                    </p>

                    <p class="mt-2 font-medium text-gray-900">
                        {{ formatMoney(product.price) }}
                    </p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex';
import { formatMoney } from '../../services/Helpers';

export default Vue.extend({
    data() {
        return {
            formatMoney,
        };
    },
    computed: {
        ...mapState({
            items: (state: any) => state.shop.products.recentlyVisitedProducts,
        }),
        ...mapGetters('shop/shop', [
            'currentMaxDeliveryTime'
        ]),
        useDarkBackground() {
            return this.$route.name === 'index';
        },
    }
})
</script>
