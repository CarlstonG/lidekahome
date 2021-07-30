<template>
  <div>
    <div v-for="order in customerData.orders" class="mb-5">
      <Order :order="order" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Customer } from "~/services/shopify/classes/Customer";
import Order from "~/components/auth/myaccount/Order.vue";

export default Vue.extend({
  components: {Order},
  props: {
    customerData: {
      type: Customer,
      required: true,
    },
  }
});
</script>
