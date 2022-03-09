<template>
    <div class="space-y-10">
        <CenterTitle
            :title="block.title"
        />

        <Usages />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CenterTitle from './CenterTitle.vue';
import Usages from './Usages.vue';

export default Vue.extend({
    components: {
        CenterTitle,
        Usages,
    },

    props: {
        block: Object,
    },
})
</script>