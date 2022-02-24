<template>
    <div class="bg-black">
        <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
            <Banner
                :imageSrc="strapi.cover.data.attributes.url"
            />

            <div class="mt-4">
                <CenterTitle
                    tag="h1"
                    :title="strapi.title"
                />
            </div>

            <LongParagraph>
                <span class="text-white font-extralight" v-html="intro"></span>
            </LongParagraph>

            <ProductsWithBackground
                :title="strapi.collection_title"
                :collection="collection"
                style="margin-top: 80px;"
            />

            <VideoReviews />

            <Block 
                v-for="(block, index) in strapi.body"
                :key="`block-${index}`"
                :block="block"
            />

            <NewsletterBlock />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { marked } from 'marked';
import Banner from "~/components/blocks/Banner.vue";
import CenterTitle from "~/components/blocks/CenterTitle.vue";
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import ProductsWithBackground from "~/components/blocks/ProductsWithBackground.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import Block from './Block.vue';
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
    components: {
        Block,
        Banner,
        CenterTitle,
        LongParagraph,
        ProductsWithBackground,
        VideoReviews,
        NewsletterBlock,
    },

    props: {
        strapi: Object,
        collection: Object,
    },

    data() {
        return {
            intro: marked.parse(this.strapi.intro, {
                breaks: true,
            }),
        };
    },
})
</script>