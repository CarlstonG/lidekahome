<template>
  <div class="bg-gray-900">
    <Navigation :collections="getMainCollections" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";
import {mapActions, mapGetters} from "vuex";

export default Vue.extend({
  components: {Footer, Navigation},
  transition: 'slide-fade',

  data () {
    return {
      //
    };
  },

  computed: {
    ...mapGetters('shop/cart', [
      'count'
    ]),

    ...mapGetters('shop/products', [
      'getCollections',
      'getMainCollections',
    ])
  },

  methods: {
    ...mapActions('shop/products', [
      'fetchCollections'
    ])
  },

  created() {
    this.fetchCollections();
  }
})
</script>

<style>
.page-enter-active {
  transition: all .1s ease-in-out;
}

.page-leave-active,
.page-enter,
.page-leave-to
{
  opacity: 0;
  transition: opacity .1s ease-in-out;
}
</style>
