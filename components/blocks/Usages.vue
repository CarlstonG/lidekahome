<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="col-span-1 lg:col-span-5 _living-room hover:opacity-50 transition-all">
        <NuxtLink to="/categorie/woonkamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Woonkamer</h2>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-7 _bedroom hover:opacity-50 transition-all">
        <NuxtLink to="/categorie/slaapkamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Slaapkamer</h2>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
      <div class="col-span-1 lg:col-span-8 _kitchen hover:opacity-50 transition-all">
        <NuxtLink to="/categorie/keuken">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Keuken</h2>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-4 _gameroom hover:opacity-50 transition-all">
        <NuxtLink to="/categorie/gamekamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Game kamer</h2>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
      <div class="col-span-1 lg:col-span-4 _bathroom hover:opacity-50 transition-all">
        <NuxtLink to="/categorie/badkamer">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Badkamer</h2>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-4 _ceiling hover:opacity-50 transition-all">
        <NuxtLink to="/categorie/plafond">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Plafond</h2>
          </div>
        </NuxtLink>
      </div>
      <div class="col-span-1 lg:col-span-4 _bed hover:opacity-50 transition-all">
        <NuxtLink to="/categorie/bed">
          <div class="flex items-end justify-center text-center" style="height: 400px;">
            <h2 class="p-6 text-white text-2xl font-bold tracking-wide uppercase">Bed</h2>
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
