<template>
  <div class="bg-black">
    <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 lg:mb-0">
      <h1 class="md:hidden mx-auto text-3xl text-white font-bold tracking-wide uppercase mb-6">
        LED-strip 20 meter
      </h1>

      <video :poster="require('~/assets/video-poster-2.jpg')" class="w-full h-full rounded-2xl" autoplay muted playsinline>
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/led-strip-video.webm" type="video/webm" />
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/led-strip-video_1.mp4" type="video/mp4" />
      </video>

      <div class="hidden md:block md:absolute mt-10 lg:mt-0 bottom-2 right-2 left-2 md:bottom-20 md:left-20 md:right-20 text-center">
        <h2 class="mx-auto text-center text-3xl text-white font-bold tracking-wide">
          LED-strip 20 meter
        </h2>
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10">
      <LongParagraph>
        <p class="text-white font-extralight">
          Ben jij opzoek naar een <NuxtLink to="/categorie/led-strips">strip</NuxtLink> van 20 meter die jouw favoriete kamer omtovert tot een ware lichtshow of heb je liever een oase van rust? Met de <NuxtLink to="/categorie/led-strips">LED-strips</NuxtLink> van 20 meter bij Lideka kan het allemaal. We hebben overal aan gedacht, en we leveren alleen de meest innovatieve, kwalitatieve en gemakkelijke strips voor jou. Onze strips van 20 meter beschikken over een enorm aantal super heldere lampjes die volledig dimbaar zijn, en dus creëer je altijd de perfecte setting
        </p>
      </LongParagraph>
    </div>

    <div class="max-w-7xl mx-auto space-y-10 mb-10 px-6 lg:px-0">
      <ProductsWithBackground
          v-if="collection"
          title="20 meter LED-strips"
          :collection="collection"
      />

      <VideoReviews />

      <TextWithImage
          title="Twee soorten LED-strips"
          imageAlt="Twee soorten LED-strips"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-1.jpg')"
      >
        <p class="text-white font-extrabold">
          <strong>RGB</strong>
        </p>
        <p class="text-white font-extralight">
          De <NuxtLink to="/categorie/led-strips">RGB LED-strips</NuxtLink> 20 meter van Lideka beschikken over 16 miljoen kleuren. Het heeft 60 lampjes per meter, en deze zijn van de hoogste kwaliteit. De RGB LED-strip zelf is gemaakt met topkwaliteit materialen en componenten om ervoor te zorgen dat u het beste product voor uw geld krijgt. Hij bezit bijzonder mooie kleuren zoals, blauw, rood en ook bijvoorbeeld de kleur groen, maar dat is niet alles, bestel vandaag, en ontdek morgen alle RGB kleuren..
        </p>
        <p class="text-white font-extrabold">
          <strong>RGBIC</strong>
        </p>
        <p class="text-white font-extralight">
          De <NuxtLink to="/categorie/rgb-ic-led-strips">RGBIC LED-strips</NuxtLink> hebben ook 16 miljoen kleuren, en beschikken ook over 60 lampjes per meter. Toch is deze versie net iets anders, deze LED-strip heeft een unieke eigenschap, en dat is de mogelijkheid om verschillende kleuren leds tegelijk door de strip heen te laten schieten.
        </p>
      </TextWithImage>

      <TextWithImage
          title="Bediening verlichting"
          imageAlt="Bediening verlichting"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-2.jpg')"
          reverse="true"
      >
        <p class="text-white font-extralight">
          De bediening kan maar liefst op drie manieren:
        </p>
        <ul class="text-white font-extralight">
          <li>- Bediening via afstandsbediening</li>
          <li>- Met de App</li>
          <li>- Of met de controller</li>
        </ul>
        <p class="text-white font-extralight">
          Alle drie de bedieningsmogelijkheden beschikken over een goede kwaliteit materiaal.
        </p>
      </TextWithImage>

      <TextWithImage
          title="Aantal leds per meter"
          imageAlt="Aantal leds per meter"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-3.jpg')"
      >
        <p class="text-white font-extralight">
          Het aantal lampjes op een gehele strip zegt enorm veel over de helderheid. Wij kunnen jou gerust stellen met het feit dat je voor 60 per meter kiest, aangezien dit echt meer dan voldoende is. Onze LED-strip extra helder RGB, brengt het meeste licht op.
        </p>
      </TextWithImage>

      <SingleImage
        :image-src="require('~/assets/photos/Woonkamer-1.jpg')"
      />

      <TextWithImage
          title="20 meter LED-strips"
          imageAlt="20 meter LED-strips"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-2.jpg')"
          reverse="true"
      >
        <p class="text-white font-extralight">
          20 meter strip is een hele gebruikelijke lengte, dit heeft te maken met het feit dat de meeste muren, kamers en huizen toch wel een lengte of breedte hebben van 20 meter. Ook brengt 20 meter LED een hoge hoeveelheid licht op, mits er genoeg lampjes per meter LED hebt. Wij raden een licht kleur RGB of RGBIC aan, hier heb je talloze mogelijkheden en combinaties.
        </p>
      </TextWithImage>


      <div class="mx-auto max-w-7xl lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-10 lg:py-24 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-32 mx-auto" src="~assets/icon/icons8-return-purchase-50.svg" alt="Retour icon" />
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
                <img class="w-32 mx-auto" src="~assets/icon/icons8-technical-support-50.svg" alt="Support icon" />
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
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

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
