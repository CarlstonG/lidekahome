<template>
  <div>
    <form @submit.prevent="submit">
      <div class="space-y-2">
        <div class="mb-4 space-y-2">
          <div v-for="value in values" class="relative flex items-start">
            <div class="flex items-center h-5">
              <input :id="value.id" v-model="fields.stars" type="radio" :value="value.id" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rouded-full">
            </div>
            <div class="ml-3 text-sm">
              <label :for="value.id" class="text-gray-500 text-sm flex items-center">
                <svg v-for="i in value.id" class="flex-shrink-0 h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <span class="ml-2">{{ value.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <FormField :hide-label="true" :errors="$v.fields.name" :model-value.sync="fields.name" name="Naam" input-type="text" />
        <FormField :hide-label="true" :errors="$v.fields.email" :model-value.sync="fields.email" name="E-mailadres" input-type="text" />
        <FormField :hide-label="true" :errors="$v.fields.title" :model-value.sync="fields.title" name="Titel" input-type="text" />
        <FormField :hide-label="true" :errors="$v.fields.description" :model-value.sync="fields.description" name="Beschrijving" input-type="textarea" />
        <Upload :model-value.sync="fields.uploads" name="Foto's" />

        <div>
          <button type="submit"
                  class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Review plaatsen
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormField from "~/components/input/FormField.vue";
import Upload from "~/components/input/Upload.vue";
import {email, minLength, required} from "vuelidate/lib/validators";
import {createReview} from "~/services/ApiService";
import {safeGet} from "~/services/Helpers";

export default Vue.extend({
  components: {FormField, Upload},
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  validations: {
    fields: {
      name: {
        required
      },
      stars: {
        required
      },
      email: {
        required,
        email
      },
      title: {
        required,
      },
      description: {
        required,
        minLength: minLength(6)
      },
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
          const formData = new FormData();
          formData.append('shopify_product_id', safeGet(this.product, 'id'));
          formData.append('anonymous', '0');

          for (const [key, value] of Object.entries(this.fields)) {
            if (key !== 'uploads') {
              formData.append(key, <string>value);
            } else {
              const files = <FileList><unknown>value;
              
              for (let i = 0; i < files.length; i++) {
                const file = files.item(i);
                
                if (file) {
                  formData.append('photos', file);
                }
              }
            }
          }

          await createReview(formData);

          this.$emit('close');

          this.$root.$emit('addNotification', 'Bedankt!', 'Heel erg bedankt voor je bijdrage, je review is geplaatst.')
        } catch (err) {
          this.$root.$emit('addNotification', 'Oops.', 'Er is iets fout gegaan.', 'error')
        }
      }

      this.loading = false;
    },
  },

  data() {
    return {
      loading: false,
      fields: {
        stars: 5,
        name: '',
        email: '',
        title: '',
        description: '',
        uploads: [],
      },
      values: [
        {
          id: 5,
          label: '5 sterren',
        },
        {
          id: 4,
          label: '4 sterren',
        },
        {
          id: 3,
          label: '3 sterren',
        },
        {
          id: 2,
          label: '2 sterren',
        },
        {
          id: 1,
          label: '1 ster',
        },
      ]
    }
  }
})
</script>
