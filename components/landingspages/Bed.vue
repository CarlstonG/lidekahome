<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner :imageSrc="require('assets/photos/Bed-1.jpg')"/>

      <CenterTitle tag="h1" title="LED-strip bedverlichting" />

      <div>
        <LongParagraph>
            <p class="text-white mt-10 font-extralight">
              Wil jij graag wat <strong>extra versiering</strong> voor jouw bed? Of zoek je gewoon verlichting voor jouw kamer?
              Dan ben je bij Lideka aan het beste adres. Wij bieden je graag onze
              <a href="/categorie/led-strips" class="link">RGB en RGB-IC LED-strips</a> aan. Beiden meer dan geschikt voor het bed. Beiden LED-strips beschikken over <strong>3M tape</strong> wat nooit meer loslaat op bijna ieder ondervlak. Door zijn <strong>hoge helderheid</strong> en vele functies is dit de ideale oplossing als je opzoek bent naar Led bedverlichting.
            </p>
            <p class="text-white mt-10 font-extralight">
              Bij goede <a href="/categorie/led-strips">LED verlichting</a> is het vooral belangrijk dat je let op het aantal Led’s, daar hebben we bij Lideka goed over nagedacht, en dus hoef jij je daar geen zorgen over te maken. We gebruiken de hoogste kwaliteit met de meeste lichtopbrengst.
            </p>
          <p>
            <a href="/blog/de-levensduur-van-led-verlichting" class="link">
              Lees onze blog als je meer wilt weten over de levensduur van Led verlichting?
            </a>
          </p>
        </LongParagraph>
      </div>

      <LongParagraph
        title="RGB LED-strips"
      >
        <p class="text-white font-extralight">
          <NuxtLink to="/categorie/rgb-led-strips" class="link">RGB LED-strips</NuxtLink> hebben vele functies, en oneindig veel kleuren combinaties. Dat maakt het zo leuk. Je kunt zelfs je muziek erop aansluiten en een eigen feestje maken.
        </p>
      </LongParagraph>

      <ProductsWithBackground
        v-if="collection1"
        :collection="collection1"
      />

      <LongParagraph
          title="RGB-IC LED-strips"
      >
        <p class="text-white font-extralight">
          <NuxtLink to="/categorie/rgb-ic-led-strips" class="link">RGB-IC LED-strips</NuxtLink> hebben nog een extra en speciale functie, doordat je verschillende kleuren LED’s tegelijk door de strip heen kunt laten schieten creëer je echt een heel bijzonder effect. Ontdek het zelf, en geniet van een ware lichtshow.
        </p>
      </LongParagraph>

      <ProductsWithBackground
        v-if="collection3"
        title="RGB-IC LED-strips"
        :collection="collection3"
      />

      <VideoReviews />

      <Banner :imageSrc="require('assets/photos/Bed-2.jpg')"/>

      <LongParagraph
          title="Eenvoudige montage met plakstrip"
          :bg-color="true"
      >
        <p class="text-white font-extralight">
          Jouw nieuwe LED-strip is uitgerust met het <strong>ijzersterke 3M tape</strong>,
          3M tape zal niet zomaar meer loslaten en is volledig zelfklevend. Voor een
          <strong>eenvoudige montage</strong> met plakstrip is dus altijd een dubbelzijdige 3M tape aan te raden. 3M tape staat erom bekend dat het niet zomaar meer loslaat.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Waarom zou ik deze LED-strips gebruiken voor mijn bed, als bedverlichting?"
      >
        <p class="text-white font-extralight">
            Door zijn bijzonder sterke plakstrip zal deze nooit meer loslaten, en blijft hij ook stevig zitten als je het bed gaat verschuiven.
        </p>
        <p class="text-white font-extralight">
          Met vele verschillende functies en een <strong>bijzonder uitgebreide app</strong>, zijn deze <NuxtLink to="/categorie/led-strips" class="link">LED-strips</NuxtLink> beter dan ooit
        </p>
        <p class="text-white font-extralight">
          Daarbij staat Lideka <NuxtLink to="/contact" class="link">24/7</NuxtLink> klaar voor al jouw vragen, klachten en opmerkingen.
        </p>
        <p class="text-white font-extralight">
          Service is bij ons het allerbelangrijkste.
        </p>
        <p class="text-white font-extralight">
          Bestel vandaag, en geniet morgen van jouw eigen lichtshow.
        </p>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte bed LED-strips
      </CTA>


      <Banner :imageSrc="require('assets/photos/Bed-1.jpg')"/>

      <CenterTitle title="Kies hier jouw specifieke toepassing" />

      <Usages />

      <NewsletterBlock />

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";
import BedPageBanner from "~/components/blocks/BedPageBanner.vue";
import CenterParagraph from "~/components/blocks/CenterParagraph.vue";
import Highlights from "~/components/blocks/Highlights.vue";
import ProductsWithBackground from "~/components/blocks/ProductsWithBackground.vue";
import CenterTitle from "~/components/blocks/CenterTitle.vue";
import Benefits from "~/components/blocks/Benefits.vue";
import BenefitsThreeCols from "~/components/blocks/BenefitsThreeCols.vue";
import SingleImage from "~/components/blocks/SingleImage.vue";
import CompleteSet from "~/components/blocks/CompleteSet.vue";
import LengthProducts from "~/components/blocks/LengthProducts.vue";
import OtherCollections from "~/components/blocks/OtherCollections.vue";
import SmallCenterTitle from "~/components/blocks/SmallCenterTitle.vue";
import TextWithImage from "~/components/blocks/TextWithImage.vue";
import {getCollection} from "~/services/ApiService";
import Steps from "~/components/blocks/Steps.vue";
import SingleImageWithContent from "~/components/blocks/SingleImageWithContent.vue";
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import BedPageCompleteSet from "~/components/blocks/BedPageCompleteSet.vue";
import Usages from "~/components/blocks/Usages.vue";
import Banner from "~/components/blocks/Banner.vue";
import CTA from "~/components/CTA.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    VideoReviews,
    CTA,
    Banner,
    Usages,
    BedPageCompleteSet,
    LongParagraph,
    SingleImageWithContent,
    Steps,
    TextWithImage,
    SmallCenterTitle,
    OtherCollections,
    LengthProducts,
    CompleteSet,
    SingleImage,
    BenefitsThreeCols,
    Benefits,
    CenterTitle,
    ProductsWithBackground,
    Highlights,
    CenterParagraph,
    BedPageBanner,
    ProductItem,
    ProductItemGradient,
    NewsletterBlock,
  },
  props: {
    collection: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      collection1: null as null|{},
      collection2: null as null|{},
      collection3: null as null|{},
      collection4: null as null|{},
    }
  },

  created() {
    this.getCollection();
  },

  methods: {
    async getCollection() {
      this.collection1 = await getCollection('rgb-led-strips', {
        reverseImages: true,
        sortKey: 'PRICE',
      });

      this.collection2 = await getCollection('tv-led-strips', {
        reverseImages: true,
        sortKey: 'PRICE',
      });

      this.collection3 = await getCollection('rgb-ic-led-strips', {
        reverseImages: true,
        sortKey: 'PRICE',
      });

      this.collection4 = await getCollection('led-pakketten', {
        reverseImages: true,
        sortKey: 'PRICE',
      });
    }
  },
});
</script>
<style lang="scss" scoped>
.banner-desc p{
  font-size: 24px;
  line-height: 33px;
}
.center-paragraph {
  margin-top: 0 !important;
}
h1 {
  font-size: 48px;
}
</style>
