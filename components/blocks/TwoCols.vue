<template>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <LongParagraph
            bg-color
            :title="block.column_one_title"
        >
        <span class="text-white font-extralight" v-html="content_one"></span>
        </LongParagraph>
        <LongParagraph
            bg-color
            :title="block.column_two_title"
        >
        <span class="text-white font-extralight" v-html="content_two"></span>
        </LongParagraph>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { marked } from 'marked';
import LongParagraph from './LongParagraph.vue';

export default Vue.extend({
    components: {
        LongParagraph,
    },

    props: {
        block: Object,
    },

    data() {
        return {
            content_one: marked.parse(this.block.column_one_content, {
                breaks: true,
            }),
            content_two: marked.parse(this.block.column_one_content, {
                breaks: true,
            }),
        };
    },
});
</script>