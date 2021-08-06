<template>
  <form @submit.prevent="submit">
    <div class="space-y-6">
      <FormField :errors="$v.email" :model-value.sync="email" name="E-mailadres" input-type="email"/>

      <div>
        <button type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Account herstellen
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import FormField from "~/components/input/FormField.vue";
import {email, required} from "vuelidate/lib/validators";
import {recoverCustomer} from "~/services/ApiService";

export default Vue.extend({
  components: {FormField},
  data() {
    return {
      email: '',
    }
  },

  validations: {
    email: {
      required,
      email
    },
  },

  methods: {
    async submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$root.$emit('addNotification', 'Niet gelukt!', 'Vul alle velden correct in', 'error')
      } else {
        try {
          await recoverCustomer({
            email: this.email
          })

          this.$root.$emit('addNotification', 'E-mail verstuurd!', 'Als we je account konden vinden, sturen wij je een e-mail om jouw account te herstellen.', '', 5000);
          await this.$router.push('/account/login');
        } catch (e) {
          this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
        }
      }
    },
  }
});
</script>
