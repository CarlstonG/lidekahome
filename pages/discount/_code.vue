<template>
    <div class="bg-white relative flex justify-center py-10">
        <template v-if="loading">
            <Loading />
            <p class="mt-14">
                Bezig met het toepassen van de kortingscode...
            </p>
        </template>
        <p v-else class="text-red-500">
            {{ couponError }}
        </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions} from "vuex";
import Loading from "~/components/Loading.vue";

export default Vue.extend({
    components: {
        Loading,
    },

    data() {
        return {
            loading: true,
            couponError: '',
        };
    },

    mounted() {
        this.apply();
    },

    methods: {
        ...mapActions('shop/cart', [
            'applyDiscount',
            'fetchCheckout',
        ]),

        async apply() {
            this.loading = true;
            this.couponError = '';

            const { code } = this.$route.params;

            await this.fetchCheckout();

            const {data} = await this.applyDiscount({
                discountCode: code,
            });

            if (Array.isArray(data) && data.length > 0) {
                this.couponError = data[0].message;
                this.loading = false;
            } else {
                this.$root.$emit('addNotification', 'Gelukt!', 'De kortingscode is toegevoegd aan je winkelwagen', '', 10000);
                this.fetchCheckout();
                await this.$router.replace('/');
            }
        }
    },
});
</script>