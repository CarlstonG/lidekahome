<template>
    <div>
        <CenterTitle :title="collection.title" />
        <CenterParagraph v-if="collection.content">
            <p class="text-white font-extralight" v-html="collection.content"></p>
        </CenterParagraph>

        <ProductsWithBackground
            v-if="collection.collection"
            :collection="collection.collection"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CenterTitle from "~/components/blocks/CenterTitle.vue";
import CenterParagraph from "~/components/blocks/CenterParagraph.vue";
import ProductsWithBackground from "~/components/blocks/ProductsWithBackground.vue";

export default Vue.extend({
    components: {
        CenterTitle,
        CenterParagraph,
        ProductsWithBackground,
    },

    props: {
        collection: Object,
    },
});
</script>