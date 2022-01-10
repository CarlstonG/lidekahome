<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        :imageSrc="require('assets/design/landings/gamekamer/banner.jpg')"
        :smallText="true"
      />

      <CenterTitle tag="h1" title="Game verlichting" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Ben jij een echte game liefhebber of speel je gewoon graag wat spelletjes? En ben je daarom op zoek naar mooie en betaalbare
          <a href="/categorie/led-strips" class="link">RGB LED-strips?</a> Dan ben je bij Lideka aan het <strong>juiste adres.</strong>
        </p>
        <p class="text-white font-extralight">
          Wij hebben maar liefst 3 verschillende soorten LED-strips voor jouw game kamer. Voor een directe bevestiging aan de TV of PC raden we onze speciale
          <a href="/products/lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app" class="link">TV LED-strips</a> aan, deze hebben in de <strong>RGB uitvoering</strong>, en zijn makkelijk te verbinden met een <strong>USB kabel</strong>.
        </p>
        <p class="text-white font-extralight">
          Als je daarnaast nog verder op zoek bent naar mooie LED-strips dan zijn onze normale <strong>RGB-IC en RGB LED-strips</strong> een hele <strong>goede keuze</strong>. Je kunt bijvoorbeeld kiezen voor een 10 meter RGB strip, maar we hebben ook vele andere lengtes, kies gewoon wat het beste bij jou past.
        </p>
        <p class="text-white font-extralight">
          Al onze <a href="/categorie/led-strips" class="link">LED-strips</a> hebben de nieuwste functies, en zijn te bedienen met een app, maar ook gewoon met een <strong>afstandsbediening</strong>.
        </p>
        <p class="text-white font-extralight">
          Door zijn enorm <strong>stevige 3M tape</strong> laat hij nooit meer los, en kan hij op elke gewenste plek bevestigd worden.
        </p>
        <p class="text-white font-extralight">
          Met de ingebouwde microfoon gaan de <a href="/products/lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app" class="link">LED-strips</a> <strong>perfect mee op het geluid</strong> van de TV of PC, en geniet je van een echte game ervaring!
        </p>
        <p class="text-white font-extralight">
            Benieuwd naar het positieve effect van <a href="/blog/tv-led-strips-een-nieuwe-vorm-van-televisie-kijken" class="link">TV Led-strips?</a> Lees hier onze blog
        </p>
      </LongParagraph>

      <ProductsWithBackground
          v-if="collection2"
          title="USB TV LED-stripS"
          :collection="collection2"
      />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED-strips"
          :collection="collection1"
      />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED-strips"
          :collection="collection3"
      />

      <VideoReviews />

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte gamekamer LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner2.jpg')" />

      <CenterTitle title="Waarom zou ik deze LED-strips gebruiken voor de game kamer?" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Door zijn hoge helderheid verlicht je makkelijk de gehele game kamer, en verhoog je automatisch je concentratie.
        </p>
        <p class="text-white font-extralight">
          Ook door het mega sterke 3M tape is het gewoon plakken, en genieten.
        </p>
        <p class="text-white font-extralight">
          Daarbij staat Lideka <a href="/contact" class="link">24/7</a> klaar voor al jouw vragen, klachten en opmerkingen.
        </p>
        <p class="text-white font-extralight">
          Service is bij ons het allerbelangrijkste.
        </p>
        <p class="text-white font-extralight">
          Bestel vandaag, en geniet morgen van jouw eigen lichtshow.
        </p>
        <p class="text-white font-extralight">
          Als je nog opzoek bent naar inspiratie voor je game kamer, dan kun je altijd even kijken op <a href="https://nl.pinterest.com/pin/383931936993652308/" class="link" target="_blank" rel="noopener">pinterest.</a>
        </p>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte gamekamer LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner3.jpg')" />

      <BlogList />

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner4.jpg')" />

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
import Banner from "~/components/blocks/Banner.vue";
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
import Usages from "~/components/blocks/Usages.vue";
import TextWithImage from "~/components/blocks/TextWithImage.vue";
import {getCollection} from "~/services/ApiService";
import Steps from "~/components/blocks/Steps.vue";
import SingleImageWithContent from "~/components/blocks/SingleImageWithContent.vue";
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import CTA from "~/components/CTA.vue";
import BlogList from "~/components/BlogList.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    BlogList,
    CTA,
    LongParagraph,
    SingleImageWithContent,
    Steps,
    TextWithImage,
    Usages,
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
    Banner,
    ProductItem,
    ProductItemGradient,
    VideoReviews,
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
