<template>
    <div v-if="isOpen" @click="isOpen = false" class="h-screen w-screen bg-black bg-opacity-50 fixed top-0 z-50 flex justify-center items-center">
        <div class="bg-white shadow-md px-6 py-4 max-w-xl rounded-lg">
            <h2 class="text-xl font-bold text-gray-900 sm:text-xl sm:tracking-tight lg:text-2xl flex items-center">
                Het artikel is toegevoegd aan je winkelmandje
            </h2>
            <div class="flex mt-6">
                <img :src="image" class="h-20 w-20" alt="cartimage">
                <div class="flex-grow flex flex-col ml-3">
                    <h3 class="text-lg font-medium text-gray-900">
                        {{ product.title }}
                    </h3>
                    <p class="text-sm text-gray-400">
                        Aantal: {{ amount }}
                    </p>
                </div>
            </div>
            <div class="mt-4 grid md:grid-cols-2 gap-6">
                <NuxtLink to="/cart" class="disabled:opacity-50 flex justify-center p-3 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Bestellen
                </NuxtLink>
                <a href="#" @click.prevent="isOpen = false" class="bg-white border border-gray-300 rounded-md p-3 text-md font-medium text-gray-900 hover:bg-gray-50 text-center">
                    Verder winkelen
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   data() {
       return {
           isOpen: false,
           product: {},
           amount: 0,
       };
   },
   mounted() {
       this.$root.$on('productAddedToCart', (product: object, amount: number) => {
           this.product = product;
           this.amount = amount;
           this.isOpen = true;
       });
   },
   computed: {
       image() {
           //@ts-ignore
           if (this.product.images.length > 0) {
               //@ts-ignore
               return this.product.images[0].src;
           }

           //@ts-ignore
           const media = this.product.media.find((media: any) => media.type === 'IMAGE');

           return media?.preview || '#';
       }
   }
});
</script>