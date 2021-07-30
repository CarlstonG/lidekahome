<template>
  <form @submit.prevent="submit">
    <div class="space-y-6">
      <FormField :errors="$v.password" :model-value.sync="password" name="Wachtwoord" input-type="password"/>
      <FormField :errors="$v.passwordConfirmation" :model-value.sync="passwordConfirmation"
                 name="Bevestig wachtwoord" input-type="password"/>

      <div>
        <button type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Reset wachtwoord
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import FormField from "~/components/input/FormField.vue";
import {minLength, required, sameAs} from "vuelidate/lib/validators";
import { Customers } from "~/services/shopify/Customers";
import { safeGet } from "~/services/Helpers";

export default Vue.extend({
  components: {FormField},
  data() {
    return {
      password: '',
      passwordConfirmation: '',
    }
  },

  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    passwordConfirmation: {
      required,
      sameAsPassword: sameAs('password'),
    }
  },

  methods: {
    async submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$root.$emit('addNotification', 'Niet gelukt!', 'Vul alle velden correct in', 'error')
      } else {
        try {
          const { customerResetByUrl } = await Customers.reset({
            resetUrl: window.location.href,
            password: this.password
          }) as { customerResetByUrl: {} };

          const code = safeGet(customerResetByUrl, 'customerUserErrors.0.code');

          if (code === 'TOKEN_INVALID') {
            this.$root.$emit('addNotification', 'Fout.', 'Reset code ongeldig', 'error', 5000)
            return;
          }

          this.$root.$emit('addNotification', 'Wachtwoord reset', 'Je kunt nu inloggen met je nieuwe wachtwoord!', '', 5000);
          await this.$router.push('/account/login');
        } catch (e) {
          this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
        }
      }
    },
  }
});
</script>
