<template>
  <div class="bg-black">
    <Navigation :collections="getMainCollections" />
    <Nuxt />
    <Footer />
    <Notifications ref="notifications" />
    <AddedToCartModal />
    <DefaultModal />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";
import {mapActions, mapGetters} from "vuex";
import Notifications from "~/components/notifications/Notifications.vue";
import Smile from  "~/components/Smile.vue";
import AddedToCartModal from "~/components/AddedToCartModal.vue";
import RecentlyVisited from '~/components/products/RecentlyVisited.vue';
import DefaultModal from "~/components/DefaultModal.vue";

export default Vue.extend({
  components: {DefaultModal, Notifications, Footer, Navigation, Smile, AddedToCartModal, RecentlyVisited},

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
      'fetchCollections',
      'initRecentlyVisitedProducts'
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

  mounted() {
    this.initRecentlyVisitedProducts();
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
.default-gradient {
  background: linear-gradient(180deg, rgba(44, 175, 228, 0.35) 1.42%, rgba(192, 41, 255, 0.25) 95%);
}

.green-gradient {
  background: linear-gradient(180deg, rgba(51, 177, 119, 0.45) 1.42%, rgba(102, 242, 175, 0.10) 95%);
}

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
    color: #000;
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
    width: 100%;
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
    width: 50%;
  }

  tr:nth-child(even){
    background-color: #f2f2f2;
  }

  h3, h3 * {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 800 !important;
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }
}

.action-table {
  border-radius: 5px;
  width: 100%;

  tr:first-child td:first-child {
    border-top-left-radius: 10px;
  }

  tr:first-child td:last-child {
    border-top-right-radius: 10px;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }

  tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.05);
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

.black-gradient {
  background: linear-gradient(137.27deg, #222222 3.07%, rgba(0, 0, 0, 0) 100%);
}

._plant {
  height: 200px;
  background: linear-gradient(180deg, rgba(51, 177, 119, 0.45) 1.42%, rgba(102, 242, 175, 0.10) 95%);
  background-size: cover;
  border-radius: 20px;
}

._plant-bg {
  opacity: 0.1;
  background-size: cover;
  border-radius: 20px;
}

._audio {
  height: 200px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(44, 175, 228, 0.35) 1.42%, rgba(192, 41, 255, 0.25) 95%);
}

._audio-bg {
  opacity: 0.1;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._colors {
  height: 200px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(44, 175, 228, 0.35) 1.42%, rgba(192, 41, 255, 0.25) 95%);
}

._montage {
  height: 200px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(44, 175, 228, 0.35) 1.42%, rgba(192, 41, 255, 0.25) 95%);
}

._brightness {
  background: linear-gradient(180deg, rgba(44, 175, 228, 0.35) 1.42%, rgba(192, 41, 255, 0.25) 95%);
  height: 200px;
  border-radius: 20px;
}

.link {
  text-decoration: underline;
}

.prose.prose-teal-500 {
  strong, a {
    color: inherit;
  }

  .no-list-type {
    li {
      padding: 10px !important;
      background: rgba(0, 0, 0, 0.1);
      margin: 0 0 10px 0 !important;
      border-radius: 10px;

      img, span {
        margin: 0;
        padding: 0;
      }

      img {
        margin-right: 15px;
      }

      &:before {
        display: none !important;
      }
    }
  }
}

.force-white {
  color: white !important;
}
</style>
