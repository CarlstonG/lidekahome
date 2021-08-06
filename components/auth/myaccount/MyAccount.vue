<template>
  <div class="bg-black py-16 pb-32">
    <div class="sm:mx-auto sm:w-full sm:max-w-md mb-8">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
        Hoi {{ customer.firstName }}!
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Welkom in jouw account omgeving.
        <a @click.prevent="onLogout()" href="#" class="font-medium text-indigo-400 hover:text-indigo-300">
          uitloggen
        </a>
      </p>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-4xl">
      <div class="mb-2">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select id="tabs" v-model="selectedTab" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
            <option selected value="orders">Bestellingen</option>
            <option value="credentials">Mijn gegevens</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
            <a @click.prevent="selectedTab = 'orders'" href="#" class="text-gray-500 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" aria-current="page"
               :class="{ 'text-gray-900': selectedTab === 'orders' }"
            >
              <span>Mijn bestellingen</span>
              <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5" :class="{ 'bg-indigo-500': selectedTab === 'orders' }"></span>
            </a>

            <a @click.prevent="selectedTab = 'credentials'" href="#" class="rounded-r-lg text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
              :class="{ 'text-gray-900': selectedTab === 'credentials' }"
            >
              <span>Mijn gegevens</span>
              <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5" :class="{ 'bg-indigo-500': selectedTab === 'credentials' }"></span>
            </a>
          </nav>
        </div>
      </div>
      <div v-if="selectedTab === 'orders'">
        <Orders v-if="customerData" :customerData="customerData" />
      </div>
      <div v-else-if="selectedTab === 'credentials'">
        <div class="bg-white py-16 px-4 shadow rounded-lg sm:px-10">
          Coming soon.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters} from "vuex";
import Orders from "~/components/auth/myaccount/Orders.vue";
import {getCustomer} from "~/services/ApiService";

export default Vue.extend({
  components: {Orders},
  data() {
    return {
      customerData: {},
      selectedTab: 'orders',
    }
  },

  computed: {
    ...mapGetters('shop/customer', [
      'customer',
      'accessToken'
    ])
  },

  created() {
    this.getCompleteCustomer()
  },

  methods: {
    ...mapActions('shop/customer', [
      'logout'
    ]),

    async getCompleteCustomer() {
      this.customerData = await getCustomer(this.accessToken);
    },

    async onLogout() {
      try {
        await this.logout();
        this.$root.$emit('addNotification', 'Uitgelogd.', 'Je bent successvol uitgelogd, tot de volgende keer!', '', 5000)
      } catch(e) {
        this.$root.$emit('addNotification', 'Fout', 'Er is iets fout gegaan bij het uitloggen.', 'error', 5000)
      }

      await this.$router.push('/');
    },
  }
})
</script>
