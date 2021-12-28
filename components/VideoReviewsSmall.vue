<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
      <div>
        <div class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-2 text-white animate-pulse transition-all transform hover:scale-105 cursor-pointer" @click="openModal('lois')">
          <div class="flex items-center space-x-4">
            <div>
              <img src="~assets/lo.jpg" class="object-cover w-16 h-16 rounded-full" />
            </div>
            <div>
              <div class="mb-2 flex items-center">
                <svg v-for="i in 5" class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <p class="text-white font-bold tracking-wide text-sm pb-2">
                "Verliefd op Lideka"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-2 text-white animate-pulse transition-all transform hover:scale-105 cursor-pointer" @click="openModal('daniel')">
          <div class="flex items-center space-x-4">
            <div>
              <img src="~assets/dan.jpg" class="object-cover w-16 h-16 rounded-full" />
            </div>
            <div>
              <div class="mb-2 flex items-center">
                <svg v-for="i in 5" class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <p class="text-white font-bold tracking-wide text-sm pb-2">
                "Mega enthousiast!"
              </p>
            </div>
        </div>
      </div>
    </div>

      <div>
        <div class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-2 text-white animate-pulse transition-all transform hover:scale-105 cursor-pointer" @click="openModal('2')">
          <div class="flex items-center space-x-4">
            <div>
              <img src="~assets/2.jpg" class="object-cover w-16 h-16 rounded-full" />
            </div>
            <div>
              <div class="mb-2 flex items-center">
                <svg v-for="i in 5" class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <p class="text-white font-bold tracking-wide text-sm pb-2">
                "Geweldige kwaliteit!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="rounded-lg h-full bg-gradient-to-r from-indigo-400 to-purple-500 p-2 text-white animate-pulse transition-all transform hover:scale-105 cursor-pointer" @click="openModal('3')">
          <div class="flex items-center space-x-4">
            <div>
              <img src="~assets/3.jpg" class="object-cover w-16 h-16 rounded-full" />
            </div>
            <div>
              <div class="mb-2 flex items-center">
                <svg v-for="i in 5" class="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <p class="text-white font-bold tracking-wide text-sm pb-2">
                "Een 10 op 10!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {get} from "~/services/ApiService";

export default Vue.extend({
  data() {
    return {
      reviews: [],
    }
  },

  methods: {
    openModal(name) {
      if (name === 'daniel') {
        this.$root.$emit('openModal', {
          video: 'https://cdn.shopify.com/s/files/1/0570/2352/9109/files/daniel.mp4?v=1638879155'
        });
      } else if (name === '3') {
        this.$root.$emit('openModal', {
          video: 'https://cdn.shopify.com/s/files/1/0570/2352/9109/files/UGC__link_pizza.mov?v=1640707713'
        });
      } else if (name === '2') {
        this.$root.$emit('openModal', {
          video: 'https://cdn.shopify.com/s/files/1/0570/2352/9109/files/Video_4-f8fa061c-f1e9-4f78-8128-904db4b0d0ce.mov?v=1640707712'
        });
      } else {
        this.$root.$emit('openModal', {
          video: 'https://cdn.shopify.com/s/files/1/0570/2352/9109/files/isabelle.lois.mp4?v=1638874209'
        });
      }
    }
  }
});
</script>
