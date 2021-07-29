<template>
  <div class="bg-white">
    <div class="container mx-auto">
      <Register />
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Register from "../../components/auth/Register";

export default Vue.extend({
  components: {Register}
})
</script>
