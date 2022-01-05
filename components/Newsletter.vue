<template>
  <div>
    <form @submit.prevent="submit">
      <div class="space-y-2">
        <div class="flex space-x-2">
          <FormField class="flex-1" :extra-rounded="true" :errors="$v.fields.firstName" :model-value.sync="fields.lastName" :hide-label="true"
                    name="Voornaam" input-type="text" />

          <FormField class="flex-1" :extra-rounded="true" :errors="$v.fields.lastName" :model-value.sync="fields.lastName" :hide-label="true"
          name="Achternaam" input-type="text"/>
        </div>
        <div class="flex space-x-2">
          <FormField class="flex-1" :extra-rounded="true" :errors="$v.fields.email" :model-value.sync="fields.email" :hide-label="true"
                    name="E-mailadres" input-type="email"/>
          <div>
            <button type="submit"
                    class="uppercase tracking-wide flex inline-block shadow-md p-2 px-6 items-center justify-center border border-transparent rounded-full shadow-sm text-md  text-white bg-indigo-500 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Inschrijven
            </button>
          </div>
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
        firstName: '',
        lastName: '',
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
          await post('/newsletter/klaviyo', {
            ...this.fields
          })

          this.$v.$reset();
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
