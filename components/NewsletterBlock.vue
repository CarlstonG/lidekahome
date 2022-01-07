<template>
  <div class="max-w-7xl mx-auto">
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
