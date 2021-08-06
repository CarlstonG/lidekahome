<template>
  <div>
    <form @submit.prevent="submit">
      <div class="space-y-6">
        <FormField :errors="$v.fields.name" :model-value.sync="fields.name" name="Naam" input-type="text" />
        <FormField :errors="$v.fields.email" :model-value.sync="fields.email" name="E-mailadres" input-type="email" />
        <FormField :model-value.sync="fields.phone" name="Telefoonnummer" input-type="text" />
        <FormField :errors="$v.fields.message" :model-value.sync="fields.message" name="Bericht" input-type="textarea" />

        <div>
          <button type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Contact opnemen
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FormField from "./input/FormField";
import {email, minLength, required} from "vuelidate/lib/validators";
import {post} from "../services/ApiService";

export default {
  components: {FormField},

  data() {
    return {
      loading: false,
      fields: {
        name: '',
        email: '',
        phone: '',
        message: '',
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
          await post('/contact', {
            ...this.fields
          })

          this.fields = {
            name: '',
            email: '',
            phone: '',
            message: '',
          }

          this.$root.$emit('addNotification', 'Gelukt!', 'Je bericht is verstuurd! Wij zullen zo spoedig mogelijk reageren!', '', 10000)
        } catch (err) {
          this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
        }
      }

      this.loading = false;
    }
  },

  validations: {
    fields: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(6)
      },
    }
  },
}
</script>
