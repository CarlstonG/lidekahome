<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="col-span-1 lg:col-span-5 _living-room">
        <NuxtLink to="/categorie/woonkwamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold">Huiskamer</h2>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-7 _bedroom">
        <NuxtLink to="/categorie/slaapkamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold">Slaapkamer</h2>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
      <div class="col-span-1 lg:col-span-8 _kitchen">
        <NuxtLink to="/categorie/keuken">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold">Keuken</h2>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-4 _gameroom">
        <NuxtLink to="/categorie/gamekamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold">Game kamer</h2>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
      <div class="col-span-1 lg:col-span-4 _bathroom">
        <NuxtLink to="/categorie/badkamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold">Badkamer</h2>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-4 _ceiling">
        <NuxtLink to="/categorie/plafond">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold">Plafond</h2>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-4 _bed">
        <NuxtLink to="/categorie/badkamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold">Bed</h2>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

});
</script>
