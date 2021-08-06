<template>
  <div>
    <div v-for="order in customerData.orders" class="mb-5">
      <Order :order="order" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Order from "~/components/auth/myaccount/Order.vue";

export default Vue.extend({
  components: {Order},
  props: {
    customerData: {
      type: Object,
      required: true,
    },
  }
});
</script>
