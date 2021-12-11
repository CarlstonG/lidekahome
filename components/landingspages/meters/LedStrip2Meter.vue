<template>
  <div class="bg-black">
    <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 lg:mb-0">
      <h1 class="md:hidden mx-auto text-3xl text-white font-bold tracking-wide uppercase mb-6">
        LED strip 2 meter
      </h1>

      <video :poster="require('~/assets/video-poster-2.jpg')" class="w-full h-full rounded-2xl" autoplay muted playsinline>
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/led-strip-video.webm" type="video/webm" />
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/led-strip-video_1.mp4" type="video/mp4" />
      </video>

      <div class="hidden md:block md:absolute mt-10 lg:mt-0 bottom-2 right-2 left-2 md:bottom-20 md:left-20 md:right-20 text-center">
        <h1 class="mx-auto text-center text-3xl text-white font-bold tracking-wide">
          LED strip 2 meter
        </h1>
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10">
      <LongParagraph>
        <p class="text-white font-extralight">
          Ben je opzoek naar een leuke LED-strip van 2 meter? Lideka bied je graag zijn
          <a href="/categorie/tv-led-strips">TV LED-strip</a> van 2 meter aan met een totaal van 60 magische Led’s. We maken gebruik van de meest heldere, duurzame en sterke Led’s die er zijn op de markt. Je bent bij ons aan het perfect adres als het gaat om een LED-strip van 2 meter.
        </p>
      </LongParagraph>
    </div>

    <div class="max-w-7xl mx-auto space-y-10 mb-10 px-6 lg:px-0">
      <ProductsWithBackground
          v-if="collection"
          title="2 meter led strips"
          :collection="collection"
      />

      <VideoReviews />

      <TextWithImage
          title="Energiezuinige LED-strips van 2 meter"
          imageAlt="Energiezuinige LED-strips van 2 meter"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-1.jpg')"
      >
        <p class="text-white font-extralight">
          Doordat we gebruik maken van de meest geavanceerde LED technologie kun je rekenen op zeer duurzame LED-strip. De LED-strip kan bediend worden via de bijgeleverd afstandsbediening of met onze eigen ‘’Lideka Home’’ App.
        </p>
      </TextWithImage>

      <TextWithImage
          title="Leds per meter 2 meter LED-strip"
          imageAlt="Leds per meter 2 meter LED-strip"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-2.jpg')"
          reverse="true"
      >
        <p class="text-white font-extralight">
          Onze USB LED-strip van 2 meter wordt geleverd met een totaal van 60 SMD 5050 Led’s. Deze zijn extreem helder, duurzaam en zijn ook nog eens van hoge kwaliteit.
        </p>
      </TextWithImage>

      <TextWithImage
          title="Achtergrondkleur LED-strip 2 meter"
          imageAlt="Achtergrondkleur LED-strip 2 meter"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-3.jpg')"
      >
        <p class="text-white font-extralight">
          De USB LED-strip heeft een mooie zwarte achtergrond kleur en is daarmee extra decoratief.
        </p>
      </TextWithImage>

      <SingleImage
        :image-src="require('~/assets/photos/Woonkamer-1.jpg')"
      />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Strip eigenschappen"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Hieronder beschrijven we in het kort het de eigenschappen van beiden soorten led verlichting. Voor meer informatie kun je altijd doorgaan naar de productpagina.
          </p>
          <p class="text-white font-extralight">
            <NuxtLink to="/products/lideka-tv-led-strip-2-meter-usb-rgb-smart-verlichting">
              USB 2 meter led strip set TV
            </NuxtLink>
          </p>
          <ul class="text-white font-extralight no-list-type">
            <li v-for="item in [
                'Plakstrip: 3M Tape',
                'Breedte: 8MM',
                'Dikte: 2MM',
                'IP rating: IP20',
                'Led type: SMD 5050',
            ]" class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8"
                                                        src="~assets/icon/icons8-checkmark.svg"/><span
                class="tracking-wide text-gray-300 uppercase font-bold">{{item}}</span>
            </li>
          </ul>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-7xl lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-10 lg:py-24 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-32 mx-auto" src="~assets/icon/icons8-return-purchase-50.svg" />
              </div>
              <h2 class="text-white font-bold text-left md:text-center text-xl uppercase tracking-wide pt-6 px-6 lg:px-20">
                60 dagen gratis retourneren
              </h2>
              <p class="text-white font-extralight text-left md:text-center pt-6 px-6 lg:px-20">
                Omdat wij geloven in service, en jou willen voorzien van een risicoloze aankoop geven we in eerste instantie 60 dagen gratis retourneren.
              </p>
            </div>
          </div>
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-10 lg:py-24 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-32 mx-auto" src="~assets/icon/icons8-technical-support-50.svg" />
              </div>
              <h2 class="text-white font-bold text-left md:text-center text-xl uppercase tracking-wide pt-6 px-6 lg:px-20">
                24/7 ondersteuning beschikbaar
              </h2>
              <p class="text-white font-extralight text-left md:text-center pt-6 px-6 lg:px-20">
                Lideka staat overigens 24/7 klaar om al jouw vragen te beantwoorden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
      />

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
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import VideoReviews from "~/components/VideoReviews.vue";

export default Vue.extend({
  components: {
    VideoReviews,
    LongParagraph,
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
      const [
          col1,
          col2,
          col3,
          col4
      ] = await Promise.all([
        await getCollection('rgb-led-strips', {
          reverseImages: true,
          sortKey: 'PRICE',
          reverse: true
        }),
        await getCollection('tv-led-strips', {
          reverseImages: true,
          sortKey: 'PRICE',
          reverse: true
        }),
        await getCollection('rgb-ic-led-strips', {
          reverseImages: true,
          sortKey: 'PRICE',
          reverse: true
        }),
        await getCollection('led-pakketten', {
          reverseImages: true,
          sortKey: 'PRICE',
          reverse: true
        })
      ])

      this.collection1 = col1;
      this.collection2 = col2;
      this.collection3 = col3;
      this.collection4 = col4;
    }
  },
});
</script>
