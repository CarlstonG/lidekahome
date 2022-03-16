<template>
    <div class="space-y-10">
        <CenterTitle
            :title="block.block_title"
      />

      <BenefitsThreeCols
          :first-block="{
            description: block.column_1_title,
            imageSrc: block.column_1_image.data.attributes.url,
          }"
          :second-block="{
            description: block.column_2_title,
            imageSrc: block.column_2_image.data.attributes.url,
          }"
          :third-block="{
            description: block.column_3_title,
            imageSrc: block.column_3_image.data.attributes.url,
          }"
      />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BenefitsThreeCols from './BenefitsThreeCols.vue';
import CenterTitle from './CenterTitle.vue';

export default Vue.extend({
    components: {
        BenefitsThreeCols,
        CenterTitle,
    },

    props: {
        block: Object,
    },
});
</script>