<template>
    <div class="space-y-10">
        <CenterTitle
          :title="block.title"
      />

      <Lenghts />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CenterTitle from "~/components/blocks/CenterTitle.vue";
import Lenghts from "~/components/Lenghts.vue";

export default Vue.extend({
    components: {
        CenterTitle,
        Lenghts,
    },
    
    props: {
        block: Object,
    }
})
</script>