<template>
    <div>
        <TwoCols
            v-if="block.__typename === 'ComponentContentTwoColumns'"
            :block="block"
        />
        <SimpleBlock
            v-else-if="block.__typename === 'ComponentContentCollectionContentBlock'"
            :block="block"
        />
        <SimpleBlockInline
            v-else-if="block.__typename === 'ComponentContentCollectionContentBlockInline'"
            :block="block"
        />
        <LengthsBlock
            v-else-if="block.__typename === 'ComponentContentLengthButtons'"
            :block="block"
        />
        <UsageBlock
            v-else-if="block.__typename === 'ComponentContentApplicationsSlider'"
            :block="block"
        />
        <BenefitsBlock
            v-else-if="block.__typename === 'ComponentContentBenefits'"
            :block="block"
        />
        <template
            v-else-if="block.__typename === 'ComponentContentSingleImage'"
        >
            <SingleImage 
                :image-src="block.single_image.data.attributes.url"
                :alt="block.single_image.data.attributes.alternativeText"
            />

            <SmallCenterTitle
                v-if="block.bottom_text"
                :title="block.bottom_text"
            />
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BenefitsBlock from '~/components/blocks/BenefitsBlock.vue';
import TwoCols from '~/components/blocks/TwoCols.vue';
import SimpleBlock from '~/components/blocks/SimpleBlock.vue';
import SimpleBlockInline from '~/components/blocks/SimpleBlockInline.vue';
import LengthsBlock from '~/components/blocks/LengtsBlock.vue';
import UsageBlock from '~/components/blocks/UsageBlock.vue';
import SmallCenterTitle from "~/components/blocks/SmallCenterTitle.vue";
import SingleImage from "~/components/blocks/SingleImage.vue";

export default Vue.extend({
    components: {
        BenefitsBlock,
        TwoCols,
        SimpleBlock,
        LengthsBlock,
        UsageBlock,
        SimpleBlockInline,
        SmallCenterTitle,
        SingleImage,
    },

    props: {
        block: Object
    }
})
</script>