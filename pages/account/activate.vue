<template>
  <div class="bg-black py-16 pb-32">
    <div class="sm:mx-auto sm:w-full sm:max-w-md mb-8">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
        Activeer account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Of
        <NuxtLink to="/account/login" class="font-medium text-indigo-400 hover:text-indigo-300">
          inloggen
        </NuxtLink>
      </p>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-16 px-4 shadow rounded-lg sm:px-10">
        <Activate />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Activate from "../../components/auth/Activate";

export default Vue.extend({
  components: {Activate}
})
</script>
