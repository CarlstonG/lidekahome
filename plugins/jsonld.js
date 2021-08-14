import Vue from 'vue';
import NuxtJsonld from 'nuxt-jsonld';

Vue.use(NuxtJsonld);

Vue.filter('reverse', function(value) {
  return value.slice().reverse();
});
