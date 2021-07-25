<template>
  <div class="px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="max-w-xl mx-auto">
      <main class="sm:flex">
        <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Pagina niet gevonden.</h1>
            <p class="mt-3 text-base text-gray-500">
              Probeer de onderstaande zoekbalk of klik op de button om terug te gaan.
            </p>
            <div class="mt-10">
              <Search />
            </div>
          </div>
          <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <NuxtLink to="/" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Breng me terug
            </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Search from "./Search";

export default Vue.extend({
  components: {Search}

  //
});
</script>
