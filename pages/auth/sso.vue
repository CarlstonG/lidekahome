<template>
  <div class="bg-black py-16 pb-32">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="relative bg-white py-10 px-4 shadow rounded-lg sm:px-10">
        <Loading />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions} from "vuex";
import { getAccessTokenByWebToken } from "~/services/ApiService";
import {safeGet} from "~/services/Helpers";
import Loading from "~/components/Loading.vue";

export default Vue.extend({
  components: {Loading},
  fetchOnServer: false,
  fetchDelay: 0,

  methods: {
    ...mapActions('shop/customer', ['setAccessToken', 'fetchCustomer']),
  },

  async fetch() {
    const { token } = this.$route.query;

    try {
      const {customerAccessTokenCreate} = await getAccessTokenByWebToken({token: token}) as {
        customerAccessTokenCreate: {}
      };

      const accessToken = safeGet(customerAccessTokenCreate, 'customerAccessToken.accessToken');

      await this.setAccessToken(accessToken);
    } catch (err) {
      console.log(err);
    }

    window.location.href = '/account/myaccount';
  }
})
</script>
