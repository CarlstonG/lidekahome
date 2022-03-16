<template>
    <div class="space-y-10">
        <CenterTitle :title="collection.title" :tag="heading_type" />
        <CenterParagraph v-if="collection.content">
            <p class="text-white font-extralight" v-html="collection.content"></p>
        </CenterParagraph>

        <ProductsWithBackground
            v-if="collection.collection"
            :collection="collection.collection"
        />
    </div>
</template>

<script>
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

    computed: {
      heading_type() {
        return this.collection.heading_type ?? 'h2';
      }
    }
});
</script>