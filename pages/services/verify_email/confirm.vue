<template>
    <div class="bg-white relative flex justify-center py-10">
        <Loading />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Loading from "~/components/Loading.vue";

export default Vue.extend({
    components: {
        Loading,
    },
    
    mounted() {
        window.location.replace(`https://checkout.lidekahome.nl/services/verify_email/confirm${window.location.search}`);
    }
})
</script>