<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner :imageSrc="require('assets/photos/Woonkamer-1.jpg')" />
      <CenterTitle tag="h1" title="LED-strips woonkamer" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Als je naar betaalbare, kwalitatieve <NuxtLink to="/categorie/led-strips" class="link">LED-strips</NuxtLink> opzoekt bent voor in de woonkamer, dan ben je hier aan het perfecte adres. Lideka biedt speciaal voor de woonkamer onze
          <NuxtLink to="/categorie/rgb-led-strips" class="link">RGB LED-strips</NuxtLink> en <NuxtLink to="/categorie/rgb-ic-led-strips" class="link">RGB-IC LED-strips</NuxtLink> aan.
        </p>
        <p class="text-white font-extralight">
          Onze lights zijn van hoge kwaliteit, en helderder dan ooit in de geschiedenis van LED verlichting.
        </p>
        <p class="text-white font-extralight">
          Kies uit 2 geweldige soorten LED verlichting, en creëer je eigen magische lichtshow.
        </p>
      </LongParagraph>

      <CenterTitle title="RGB strips" />
      <LongParagraph>
        <p class="text-white font-extralight">
          De <NuxtLink to="/categorie/rgb-led-strips" class="link">RGB Led-strips</NuxtLink> beschikken over maar liefst 16 miljoen verschillende kleuren combinaties. Wat het nog leuker maakt, is dat je deze zelf kunt kiezen vanuit onze eigen app. De RGB LED-strips worden geleverd in een compleet set, je bent dus in 1 keer klaar.
        </p>
      </LongParagraph>

      <ProductsWithBackground
          v-if="collection1"
          :collection="collection1"
      />

      <CenterTitle title="RGB-IC strips" />
      <LongParagraph>
        <p class="text-white font-extralight">
          De <NuxtLink class="link" to="/categorie/rgb-ic-led-strips">RGB-IC LED-strips</NuxtLink> hebben nog een extra functie, een hele bijzondere functie. Je bij dit soort namelijk verschillende kleuren tegelijk door de strips laten gaan. Dat is een enorm gaaf effect, en erg geliefd onder onze klanten. Verder werkt alles hetzelfde ij dit type LED verlichting, en wordt deze ook in een compleet set geleverd.
        </p>
      </LongParagraph>

      <ProductsWithBackground
          v-if="collection3"
          :collection="collection3"
      />

      <VideoReviews />

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte woonkamer strips
      </CTA>

      <SingleImage :image-src="require('assets/photos/Woonkamer-2.jpg')" />

      <LongParagraph
          title="Waarom zijn dit de beste strips voor de woonkamer?"
      >
        <p>
          Doordat onze <NuxtLink to="/categorie/rgb-led-strips" class="link">RGB</NuxtLink> en
          <NuxtLink to="/categorie/rgb-ic-led-strips">RGB-IC LED-strips</NuxtLink> beschikken over een speciale
          SMD 5050 chip heb je drie keer zoveel lichtopbrengst dan een normale LED-strip.
          Aangezien de meeste woonkamers groter zijn dan een gemiddelde kamer is dit een
          uitstekende keuze.
        </p>
        <p>
          Daarbij komt ook nog eens dat je oneindig veel kleuren combinaties kunt maken, en je deze helemaal zelf kunt instellen via onze eigen app.
        </p>
        <p>
          Breng je woonkamer tot leven, en geniet van een ware lichtshow!
        </p>
        <p>
          Als je nog opzoek bent naar inspiratie voor je woonkamer, dan kun je altijd even kijken op <a href="https://nl.pinterest.com/search/pins/?q=woonkamer%20inspiratie&rs=typed&term_meta%5B%5D=woonkamer%7Ctyped&term_meta%5B%5D=inspiratie%7Ctyped" class="link">pinterest</a>.
        </p>
        <p>
          Voor verdere vragen kun je altijd terecht bij onze <NuxtLink to="/contact" class="link">klantenservice</NuxtLink>.
        </p>
      </LongParagraph>

      <SingleImage :image-src="require('assets/photos/Woonkamer-3.jpg')" />

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte woonkamer LED-strips
      </CTA>

      <BlogList />

      <CenterTitle title="Kies hier jouw specifieke toepassing" />

      <Usages />

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
import VideoReviews from "~/components/VideoReviews.vue";
import CTA from "~/components/CTA.vue";
import BlogList from "~/components/BlogList.vue";

export default Vue.extend({
  components: {
    BlogList,
    CTA,
    VideoReviews,
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
    ProductItemGradient
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
