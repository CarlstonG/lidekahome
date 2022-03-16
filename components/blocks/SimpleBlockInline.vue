<template>
    <TextWithImage
          :title="block.title"
          :imageAlt="block.image_inline.data.attributes.alternativeText"
          :imageSrc="block.image_inline.data.attributes.url"
          :reverse="block.display_image_left"
          :url="block.cta_slug"
          :urlText="block.cta_title"
          :titleTag="block.heading_type_inline"
          :link-behind-image="block.link"
      >
        <div class="text-white font-extralight prose block" v-html="content"></div>
      </TextWithImage>
</template>

<script>
import Vue from 'vue';
import { marked } from 'marked';
import TextWithImage from "~/components/blocks/TextWithImage.vue";

export default Vue.extend({
    components: {
        TextWithImage,
    },

    props: {
        block: Object,
    },

    data() {
        return {
            content: marked.parse(this.block.content_inline, {
                breaks: true,
            }),
        };
    },

    computed: {
      heading_type() {
        return this.block.heading_type ?? 'h2';
      }
    }
});
</script>

<style>
.block strong, .block a {
    color: #FFF;
}
</style>