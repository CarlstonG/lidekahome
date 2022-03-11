<template>
    <div class="space-y-10">
        <CenterTitle
            :title="block.title"
      />

      <Benefits
        :first-block="{
          title: 'Energiebesparend',
          description: 'Energiebesparend',
          imageSrc: require('assets/icon/icons8-forest.svg')
        }"
        :second-block="{
          title: 'Naadloze overgang',
          description: 'Naadloze overgang op het geluid van de tv',
          imageSrc: require('assets/icon/icons8-audio-wave-50.svg')
        }"
      />

      <BenefitsThreeCols
          :first-block="{
            title: 'Kleuren',
            description: '16 miljoen kleuren',
            imageSrc: require('assets/icon/icons8-paint-palette-50.svg')
          }"
          :second-block="{
            title: 'Makkelijke bevestiging',
            description: 'Makkelijke bevestiging',
            imageSrc: require('assets/icon/icons8-wrench-50.svg')
          }"
          :third-block="{
            title: 'Helderheid',
            description: 'Hoge helderheid',
            imageSrc: require('assets/icon/icons8-shade-selected-faces-50.svg')
          }"
      />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Benefits from './Benefits.vue';
import BenefitsThreeCols from './BenefitsThreeCols.vue';
import CenterTitle from './CenterTitle.vue';

export default Vue.extend({
    components: {
        Benefits,
        BenefitsThreeCols,
        CenterTitle,
    },

    props: {
        block: Object,
    },
});
</script>