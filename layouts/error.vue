<template>
  <div class="bg-gray-900">
    <NotFound />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NotFound from "~/components/NotFound.vue";

export default Vue.extend({
  components: {NotFound}
})
</script>
