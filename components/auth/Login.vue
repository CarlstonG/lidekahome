<template>
  <form @submit.prevent="submit">
    <div class="space-y-6">
      <FormField :errors="$v.fields.email" :model-value.sync="fields.email" name="E-mailadres" input-type="email"/>
      <FormField :errors="$v.fields.password" :model-value.sync="fields.password" name="Wachtwoord"
                 input-type="password"/>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox"
                 class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-900">
            Onthouden
          </label>
        </div>

        <div class="text-sm">
          <NuxtLink to="/account/recover"
             class="font-medium text-blue-600 hover:text-blue-500">
            Wachtwoord vergeten?
          </NuxtLink>
        </div>
      </div>

      <div>
        <button type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Inloggen
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import {required, email, minLength} from 'vuelidate/lib/validators'
import FormField from "~/components/input/FormField.vue";
import {safeGet} from "~/services/Helpers";
import {mapActions, mapGetters} from "vuex";
import {connectCustomerToCheckout, getAccessToken} from "~/services/ApiService";

export default Vue.extend({
  components: {FormField},
  data() {
    return {
      fields: {
        email: '',
        password: '',
      }
    }
  },

  validations: {
    fields: {
      password: {
        required,
        minLength: minLength(6)
      },
      email: {
        required,
        email
      }
    }
  },

  computed: {
    ...mapGetters('shop/cart', ['checkoutId'])
  },

  methods: {
    ...mapActions('shop/customer', ['setAccessToken', 'fetchCustomer']),

    async submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$root.$emit('addNotification', 'Niet gelukt!', 'Vul alle velden correct in', 'error')
      } else {
        try {
          const { customerAccessTokenCreate } = await getAccessToken({input: {...this.fields}}) as {
            customerAccessTokenCreate: {}
          };

          const code = safeGet(customerAccessTokenCreate, 'customerUserErrors.0.code');

          if (code === 'UNIDENTIFIED_CUSTOMER') {
            this.$root.$emit('addNotification', 'Fout.', 'Inloggegevens niet gevonden.', 'error', 10000);
            return;
          }

          const accessToken = safeGet(customerAccessTokenCreate, 'customerAccessToken.accessToken');

          if (!accessToken) {
            this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
          }

          if (this.checkoutId) {
            await connectCustomerToCheckout({
              checkoutId: this.checkoutId,
              customerAccessToken: accessToken
            })
          }

          await this.setAccessToken(accessToken);
          await this.fetchCustomer();
          await this.$router.push('/');
        } catch(e) {
          this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
        }

      }
    },
  }
});
</script>
