<template>
  <div class="bg-black">
    <Navigation :collections="getMainCollections" />
    <Nuxt />
    <Footer />
    <Notifications ref="notifications" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";
import {mapActions, mapGetters} from "vuex";
import Notifications from "~/components/notifications/Notifications.vue";

export default Vue.extend({
  components: {Notifications, Footer, Navigation},

  data () {
    return {
      //
    };
  },

  computed: {
    ...mapGetters('shop/cart', [
      'count',
      'checkout'
    ]),

    ...mapGetters('shop/products', [
      'getCollections',
      'getMainCollections',
    ]),

    ...mapGetters('shop/shop', [
      'shop'
    ])
  },

  methods: {
    ...mapActions('shop/products', [
      'fetchCollections'
    ]),

    ...mapActions('shop/cart', [
      'fetchCheckout'
    ]),

    ...mapActions('shop/customer', [
      'fetchCustomer'
    ]),

    ...mapActions('shop/shop', [
      'fetchShop'
    ])
  },

  created() {
    this.fetchCustomer();
    this.fetchCheckout();
    this.fetchShop();
    this.fetchCollections();
  },

  head() {
    return {
      title: this.shop.name,
      description: this.shop.description,
    }
  },
})
</script>

<style lang="scss">
.page-content {
  line-height: 1.5;
  font-size: 1.05rem;

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    font-size: 2rem;
    color: #000;
    letter-spacing: 1.1px;
    margin-top: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  b, strong {
    color: #000 !important;
  }

  p {
    padding: 10px 0;
  }
}

.pagination {
  text-align: center;
  margin: 30px 0;

  .page {
    a {
      padding: 5px 10px;
      border: 1px solid #000;
      border-radius: 5px;
    }

    &.current {
      padding: 5px 10px;
      border: 1px solid #000;
      border-radius: 5px;
      background: #000;
      color: #fff;
    }
  }

  .deco, .next, .prev {
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }
}

.product-des, .default-page-content {
  line-height: 1.6;
  font-size: 1.05rem;

  a {
    text-decoration: underline;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    font-size: 2rem;
    color: #000;
    letter-spacing: 1.1px;
    margin-top: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  b, strong {
    color: #000 !important;
  }

  p {
    padding: 10px 0;
  }

  ul {
    list-style: disc;

    li {
      padding: 5px 0;
      list-style: disc;
      display: list-item;
      list-style-position: inside;
    }
  }

  ol {
    list-style: decimal;

    li {
      padding: 5px 0;
      display: list-item;
      list-style-position: inside;
    }
  }
}

.product-specs {
  table {
    border-radius: 5px;
  }

  table tr:first-child td:first-child {
    border-top-left-radius: 10px;
  }

  table tr:first-child td:last-child {
    border-top-right-radius: 10px;
  }

  table tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  table tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }

  td {
    padding: 5px 10px;
  }

  tr:nth-child(even){
    background-color: #f2f2f2;
  }
}

.default-page-content {
  table {
    width: 100%;
    border-radius: 5px;
  }

  table tr:first-child td:first-child {
    border-top-left-radius: 10px;
  }

  table tr:first-child td:last-child {
    border-top-right-radius: 10px;
  }

  table tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  table tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }

  td {
    padding: 5px 10px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
}
</style>
