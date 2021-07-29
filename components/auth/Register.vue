<template>
  <div>
    <div class="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
      <div>
        <form @submit.prevent="submit">
          <div class="space-y-6">
            <FormField :errors="$v.fields.firstName" :model-value.sync="fields.firstName" name="Voornaam" input-type="text" />
            <FormField :errors="$v.fields.lastName" :model-value.sync="fields.lastName" name="Achternaam" input-type="text" />
            <FormField :errors="$v.fields.email" :model-value.sync="fields.email" name="E-mailadres" input-type="email" />
            <FormField :errors="$v.fields.password" :model-value.sync="fields.password" name="Password" input-type="password" />
            <div>
              <button type="submit"
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Registreren
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

export default Vue.extend({
  components: {FormField},
  data() {
    return {
      fields: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        acceptsMarketing: true,
      }
    }
  },

  validations: {
    fields: {
      firstName: {
        required
      },
      lastName: {
        required
      },
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
    async submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$root.$emit('addNotification', 'Niet gelukt!', 'Vul alle velden correct in', 'error')
      } else {
        try {
          const { customerCreate } = await Customers.create({input: {...this.fields}}) as { customerCreate: {} };
          const code = safeGet(customerCreate, 'customerUserErrors.0.code');
          const message = safeGet(customerCreate, 'customerUserErrors.0.message');

          if (code === 'TAKEN') {
            this.$root.$emit('addNotification', 'E-mailadres is in gebruik!', 'Het e-mailadres is al in gebruik, je kunt gewoon inloggen of wachtwoord vergeten drukken.', 'error', 5000)
            return;
          }

          if (message) {
            this.$root.$emit('addNotification', 'Account aangemaakt', message, '', 10000);
          }

          await this.$router.push('/account/login');
        } catch(e) {
          this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
        }

      }
    },
  }
});
</script>
