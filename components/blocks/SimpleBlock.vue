<template>
    <div>
        <SingleImage
            v-if="block.image.data"
          :image-src="block.image.data.attributes.url"
      />

      <CenterTitle
          :title="block.title"
      />

      <LongParagraph
        :bg-color="block.dark_bg"
      >
        <span class="text-white font-extralight" v-html="content"></span>
      </LongParagraph>

      <CTA
        v-if="block.cta_title"
        :to="block.cta_slug"
      >
        {{ block.cta_title }}
      </CTA>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { marked } from 'marked';
import SingleImage from './SingleImage.vue';
import CenterTitle from './CenterTitle.vue';
import LongParagraph from './LongParagraph.vue';
import CTA from '../CTA.vue';

export default Vue.extend({
    components: {
        SingleImage,
        CenterTitle,
        LongParagraph,
        CTA,
    },

    props: {
        block: Object,
    },

    data() {
        return {
            content: marked.parse(this.block.content, {
                breaks: true,
            }),
        };
    },
})
</script>