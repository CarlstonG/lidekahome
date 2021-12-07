<template>
    <div v-if="isOpen" class="h-screen w-screen bg-black bg-opacity-50 fixed top-0 z-50 flex justify-center items-center">
        <div class="fixed left-0 right-0 top-0 bottom-0 z-40" @click="isOpen = false"></div>
        <div class="bg-white shadow-md px-6 py-4 max-w-xl rounded-lg z-50">
          <div v-if="content && content.video" class="flex rounded-2xl justify-center items-center">
            <video style="max-width: 75%; max-height: 600px;" class="rounded-2xl" controls autoplay>
              <source :src="content.video" type="video/mp4" />
            </video>
          </div>
          <div class="mt-4 mb-4 w-full">
            <a href="#" @click.prevent="isOpen = false" class="bg-white border border-gray-300 block rounded-md p-3 text-md font-medium text-gray-900 hover:bg-gray-50 text-center">
              Sluiten
            </a>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   data() {
       return {
         isOpen: false,
          content: {},
       };
   },
   mounted() {
     this.$root.$on('openModal', (content) => {
         this.isOpen = true;
         this.content = content;
     });
   },
});
</script>
