<template>
  <div>
    <form @submit.prevent="submit">
      <div class="flex space-x-4">
        <FormField class="flex-1" :errors="$v.fields.email" :model-value.sync="fields.email" :hide-label="true"
                   name="E-mailadres" input-type="email"/>
        <div>
          <button type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Inschrijven
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import FormField from "~/components/input/FormField.vue";
import {email, required} from "vuelidate/lib/validators";
import Vue from "vue";
import {post} from "~/services/ApiService";
import axios from "axios";

export default Vue.extend({
  components: {FormField},

  data() {
    return {
      loading: false,
      fields: {
        email: '',
        message: 'Nieuwsbrief inschrijving',
        name: 'Nieuwsbrief inschrijving'
      }
    }
  },

  methods: {
    async submit() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$root.$emit('addNotification', 'Niet gelukt!', 'Vul alle velden correct in', 'error')
      } else {
        try {
          await post('/newsletter', {
            ...this.fields
          })

          this.fields.email = '';
          this.$root.$emit('addNotification', 'Gelukt!', 'Je bent geabonneerd, bedankt!', '', 5000)
        } catch (err) {
          this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
        }

        this.loading = false;
      }
    }
  },

  validations: {
    fields: {
      email: {
        required,
        email
      },
    }
  },
});
</script>
