<template>
  <div class="bg-white">
    <div class="container mx-auto">
      <form @submit.prevent="submit">
        <div class="space-y-6">
          <FormField :errors="$v.password" :model-value.sync="password" name="Password" input-type="password"/>
          <FormField :errors="$v.passwordConfirmation" :model-value.sync="passwordConfirmation"
                     name="Bevestig wachtwoord" input-type="password"/>

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
</template>

<script lang="js">
import Vue from 'vue';
import FormField from "../../components/input/FormField";
import {minLength, required, sameAs} from "vuelidate/lib/validators";
import {Customers} from "../../services/shopify/Customers";
import {safeGet} from "../../services/Helpers";

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
          const { customerActivateByUrl } = await Customers.activate({
            activationUrl: window.location.href,
            password: this.password
          });

          const code = safeGet(customerActivateByUrl, 'customerUserErrors.0.code');
          const message = safeGet(customerActivateByUrl, 'customerUserErrors.0.message');

          if (code === 'ALREADY_ENABLED') {
            this.$root.$emit('addNotification', 'Account is al geactiveerd.', 'Je bent doorverwezen naar de login pagina.', 'error', 5000)
            await this.$router.push('/account/login');
            return;
          }

          if (code === 'TOKEN_INVALID') {
            this.$root.$emit('addNotification', 'Fout.', 'Activatie code ongeldig', 'error', 5000)
            return;
          }

          /*
          TODO: Log in here.
           */

          this.$root.$emit('addNotification', 'Account geactiveerd!.', 'Je kunt nu inloggen!', '', 5000);
          await this.$router.push('/account/login');
        } catch (e) {
          this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
        }
      }
    },
  }
})
</script>
