<template>
  <div>
    <MyAccount v-if="loggedIn" />
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import MyAccount from "../../components/auth/myaccount/MyAccount";
import {mapGetters} from "vuex";

export default Vue.extend({
  components: {
    MyAccount
  },

  computed: {
    ...mapGetters('shop/customer', ['loggedIn'])
  },
})
</script>
