<template>
  <div>
    <div class="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
      <div>
        <form @submit.prevent="submit">
          <div class="space-y-6">
            <FormField :errors="$v.fields.email" :model-value.sync="fields.email" name="E-mailadres" input-type="email" />
            <FormField :errors="$v.fields.password" :model-value.sync="fields.password" name="Password" input-type="password" />
            <div>
              <button type="submit"
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Inloggen
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Customers} from "~/services/shopify/Customers";
import {required, email, minLength} from 'vuelidate/lib/validators'
import FormField from "~/components/input/FormField.vue";
import {safeGet} from "~/services/Helpers";
import {mapActions} from "vuex";

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

  methods: {
    ...mapActions('shop/customer', ['setAccessToken', 'fetchCustomer']),

    async submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$root.$emit('addNotification', 'Niet gelukt!', 'Vul alle velden correct in', 'error')
      } else {
        try {
          const { customerAccessTokenCreate } = await Customers.getAccessToken({input: {...this.fields}}) as {
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
