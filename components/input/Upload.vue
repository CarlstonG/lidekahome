<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700 mb-1">
      {{ name }}
    </label>
    <div class="relative">
      <input :id="name" :name="name"
            @change="change"
             type="file"
             v-bind="$attrs"
             multiple
             accept="image/jpeg,image/png"
             class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: '',
    },
    initialValue: {
      type: [],
      default: '',
    },
    modelValue: {
      type: [],
      default: '',
    },
  },

  methods: {
    change(event: { target: { files: any; }; }) {
      this.$emit('update:modelValue', event.target.files);
    }
  }
});
</script>
