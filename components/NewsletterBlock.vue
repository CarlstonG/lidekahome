<template>
  <div class="w-full bg-white py-8 px-3">
   <div class="newsletter-block max-w-7xl mx-auto  p-4 bg-white md:px-32 md:py-24 rounded-xl border-2 border-indigo-400">
    <form class="flex flex-col text-center justify-center" @submit.prevent="submit">
      <img 
        class="h-8 w-auto mb-8"
        src="~/assets/lideka-home-alt.svg"
        alt="Lideka Home"
      >

      <h2 class="text-3xl font-bold uppercase text-white">
        Ontvang gratis ebooks en exclusieve deals van Lideka
      </h2>

      <p class="mt-6 px-4 text-white">
        Meld je aan voor de nieuwsbrief en ontvang gratis e-boeken en speciaal nieuws en aanbiedingen van de lideka.
      </p>

      <div class="md:flex md:w-1/2 my-6 mx-auto space-y-4 md:space-y-0">
        <FormField
          class="flex-1"
          :hide-label="true"
          name="Voer je e-mailadres in"
          :errors="$v.fields.email"
          :model-value.sync="fields.email"
          input-type="email"
        />

        <button
          type="submit"
          class="ml-4 uppercase tracking-wide shadow-md py-1 px-6 border border-transparent rounded text-md text-white hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Aanmelden
        </button>
      </div>

      <p class="text-white">
        Door je aan te melden, ga je akkoord met het
        <NuxtLink to="/privacy-statement" target="_blank" rel="noopener" class="underline">privacybeleid</NuxtLink>
        en de
        <NuxtLink to="/algemene-voorwaarden" target="_blank" rel="noopener" class="underline">gebruiksvoorwaarden</NuxtLink>
      </p>
    </form>
   </div>
  </div>
</template>

<script lang="ts">
import FormField from "~/components/input/FormField.vue";
import {email, required} from "vuelidate/lib/validators";
import Vue from "vue";
import {post} from "~/services/ApiService";

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

<style lang="scss">
.newsletter-block {
  background: url('~/assets/newsletter-background.png') no-repeat;
  background-position: center;

  button {
    background: linear-gradient(100.91deg, #5AB6E7 -6.75%, #8560CD 111.47%);
  }
}
</style>
