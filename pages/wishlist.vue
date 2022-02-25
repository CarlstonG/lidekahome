<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-20">
            <h1
                class="mt-1 text-2xl font-bold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl flex items-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                Verlanglijstje
            </h1>

            <div class="flex flex-col space-y-4 divide-y divide-gray-200 mt-4">
                <div v-if="favoriteProducts.length === 0">
                    Je verlanglijstje is nog leeg!
                </div>
                <div v-for="favoriteProduct in favoriteProducts" :key="favoriteProduct.title" class="flex w-full pt-4">
                    <img :src="favoriteProduct.image" alt="Product afbeelding" class="w-28">
                    <NuxtLink :to="`/products/${favoriteProduct.slug}`" class="flex-grow">
                        <h2 class="text-xl font-bold textt-gray-900 ml-2">{{ favoriteProduct.title }}</h2>
                    </NuxtLink>
                    <svg @click="deleteItem(favoriteProduct.id)" class="w-8 h-8 transform rotate-45 text-red-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
    computed: {
        ...mapGetters('shop/wishlist', [
            'favoriteProducts',
        ]),
    },

    methods: {
        ...mapActions('shop/wishlist', [
            'deleteItem',
        ]),
    },
     async mounted() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "path_tracking", path: this.$route.path });
  },
})
</script>