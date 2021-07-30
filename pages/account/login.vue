<template>
  <div class="bg-black py-16 pb-32">
    <div class="sm:mx-auto sm:w-full sm:max-w-md mb-8">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
        Inloggen
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Of
        <NuxtLink to="/account/register" class="font-medium text-indigo-400 hover:text-indigo-300">
          maak een account aan
        </NuxtLink>
      </p>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-16 px-4 shadow rounded-lg sm:px-10">
        <Login/>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Login from "../../components/auth/Login";

export default Vue.extend({
  components: {Login}
  //
})
</script>
