<template>
    <div class="bg-black">
        <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
            <div v-if="strapi.cover_video_url" class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 lg:mb-0">
                <h1 v-if="$device.isMobile" class="md:hidden mx-auto text-3xl text-white font-bold tracking-wide uppercase mb-6">
                    {{strapi.title}}
                </h1>

                <template v-else>
                    <video :poster="strapi.cover.data ? strapi.cover.data.attributes.url : require('assets/video-poster-2.jpg')" class="w-full h-full rounded-2xl" autoplay muted playsinline>
                        <source :src="strapi.cover_video_url" type="video/mp4" />
                    </video>

                    <div class="hidden md:block md:absolute mt-10 lg:mt-0 bottom-2 left-2 md:bottom-20 md:left-20 md:right-20">
                        <h1 class="mx-auto text-3xl text-white font-bold tracking-wide text-center">
                        {{strapi.title}}
                        </h1>
                    </div>
                </template>
            </div>
            <template v-else>
                <Banner
                    :imageSrc="strapi.cover.data.attributes.url"
                    :alt="strapi.cover.data.attributes.alternativeText"
                />

                <div class="mt-4">
                    <CenterTitle
                        tag="h1"
                        :title="strapi.title"
                    />
                </div>
            </template>

            <LongParagraph>
                <span class="text-white font-extralight" v-html="intro"></span>
            </LongParagraph>

            <template v-if="collections">
                <Collection
                    v-for="collection in collections"
                    :key="collection.title"
                    :collection="collection"
                />
            </template>

            <VideoReviews
                v-if="strapi.slug !== 'solar-powerbank'"
            />
            <VideoReviews
                v-else
                :show-video-reviews="false"
                for-product="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY4NzI1OTMwNzIyNzc="
            />

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
import VideoReviews from "~/components/VideoReviews.vue";
import Block from './Block.vue';
import Collection from './Collection.vue';
import NewsletterBlock from '~/components/NewsletterBlock.vue';
import {getCollection} from "~/services/ApiService";

export default Vue.extend({
    components: {
        Block,
        Collection,
        Banner,
        CenterTitle,
        LongParagraph,
        VideoReviews,
        NewsletterBlock,
    },

    props: {
        strapi: Object,
    },

    data() {
        return {
            intro: marked.parse(this.strapi.intro, {
                breaks: true,
            }),
            collections: [] as any[],
        };
    },

    created() {
        this.getCollections()
    },

    methods: {
        async getCollections() {
            if (! this.strapi.collections) {
                return;
            }

            for (const collection of this.strapi.collections) {
                const c = {...collection} as any;
                c.collection = await getCollection(collection.shopify_collection_slug, {
                    reverseImages: true,
                    sortKey: 'PRICE',
                });

                if (c.content) {
                    c.content = marked.parse(c.content, {
                        breaks: true,
                    });
                }

                this.collections.push(c);
            }
        },
    },
})
</script>