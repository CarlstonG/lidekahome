<template>
  <div class="bg-black">

    <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 lg:mb-0">
      <Banner :imageSrc="require('assets/photos/remote.jpg')"/>

      <div class="mt-4">
        <CenterTitle
            tag="h1"
            title="LED-strips met afstandsbediening"
        />
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10">
      <LongParagraph>
        <p class="text-white font-extralight">
          Ben jij opzoek naar een
          <strong>LED-strip met afstandsbediening?</strong>
          Dan ben je hier aan het juiste adres. Lideka biedt je meerdere soorten en lengten aan als het gaat om
          <NuxtLink to="/categorie/led-strips" class="link">LED-strips</NuxtLink> met afstandsbediening.
          Zo hebben we welbekende <NuxtLink to="/categorie/rgb-led-strips" class="link">RGB LED-strip variant</NuxtLink>, maar ook de nieuwe
          <NuxtLink class="link" to="/categorie/rgb-ic-led-strips">RGB-IC LED-strip</NuxtLink> variant.
          Beiden worden geleverd met een universele afstandsbediening, die talloze functies bevat.
          Als je opzoek bent naar een <NuxtLink to="/categorie/tv-led-strips" class="link">TV LED-strip</NuxtLink> met een USB-aansluitingen
          dan hebben we deze ook met een afstandsbediening.
        </p>
      </LongParagraph>
    </div>

    <div class="max-w-7xl mx-auto space-y-10 mb-10 px-6 lg:px-0">
      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED-strips met afstandsbediening"
          :collection="collection1"
      />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED-strips met afstandsbediening"
          :collection="collection3"
      />

      <ProductsWithBackground
          v-if="collection2"
          title="USB TV LED-strips met afstandsbediening"
          :collection="collection2"
      />

      <ProductsWithBackground
          v-if="collection4"
          title="LED-strip pakketten met afstandsbediening"
          :collection="collection4"
      />

      <VideoReviews />

      <TextWithImage
          title="Universele afstandsbediening"
          imageAlt="Universele afstandsbediening"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-1.jpg')"
      >
        <p class="text-white font-extralight">
          Lideka maakt gebruikt van een universele afstandsbediening, zo kun je al onze producten met dezelfde universele afstandsbediening bedienen. Let daarbij wel op dat je een wifi of bluetooth module hebt, beiden kunnen nog verschillen. Vaak zal een led strip met afstandsbediening een wifi module hebben.
        </p>
      </TextWithImage>

      <TextWithImage
          title="Bediening via afstandsbediening"
          imageAlt="Bediening via afstandsbediening"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-2.jpg')"
          reverse="true"
      >
        <p class="text-white font-extralight">
          De bediening via afstandsbediening is makkelijker en sneller dan ooit. Vanwege zijn nieuwe formaat en nieuwe design kun je extra snel schakelen tussen gave kleuren en effecten.
        </p>
      </TextWithImage>

      <TextWithImage
          title="Juiste afstandsbediening"
          imageAlt="Juiste afstandsbediening"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-3.jpg')"
          url="/products/rgb-led-light-strip-15-meter-smart-verlichting"
          urlText="Best verkochte LED-strip"
      >
        <p class="text-white font-extralight">
          Bij Lideka hoef jij je nooit geen zorgen te maken over de juiste afstandsbediening. Bij een compleet set zorgen wij altijd voor de beste componenten met de hoogste kwaliteit.
        </p>
      </TextWithImage>

      <CTA
        to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Best verkochte LED-strip
      </CTA>

      <SingleImage
        :image-src="require('~/assets/photos/Woonkamer-1.jpg')"
      />

      <LongParagraph
        title="Strip with remote controller"
      >
        <p class="text-white font-extralight">
          Bij deze strip with remote controller wordt een geweldige en moderne afstandsbediening geleverd. Deze afstandsbediening ligt lekker in de hand en heeft een prima formaat.
        </p>
        <p class="text-white font-extralight">
          Het is noodzakelijk dat je een controller met afstandsbediening hebt, anders zal de afstandsbediening niet werken. Je kan dit ook wel een intuïtieve afstandsbediening noemen door zijn snelle reactie.
        </p>
      </LongParagraph>

      <LongParagraph
          title="Functies afstandsbediening"
      >
        <p class="text-white font-extralight">
          Je kunt deze bedienen door middel van kleuraanduidingen en gebruik van symbolen.
        </p>
        <ul class="text-white font-extralight">
          <li>Strobe flitser</li>
          <li>Uit/aan</li>
          <li>10 Niveaus van snelheid</li>
          <li>10 Helderheid niveaus</li>
          <li>12 Kleuren</li>
          <li>7 veranderen muziek dansende kleuren</li>
          <li>7 muziek dansende cirkels</li>
          <li>12 statische kleuren</li>
          <li>10 cirkelende modus</li>
          <li>Wifi</li>
        </ul>
      </LongParagraph>

      <SingleImage
          :image-src="require('~/assets/photos/Woonkamer-2.jpg')"
      />

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Best verkochte LED-strip
      </CTA>

      <LongParagraph
          title="Dimbare LED-strips"
      >
        <p class="text-white font-extralight">
          Al onze LED-strips kunnen super makkelijk gedimd worden om maar liefst drie verschillende manieren
        </p>
        <ul class="text-white font-extralight">
          <li>1. Met de controller</li>
          <li>2. Met de app</li>
          <li>3. Met de afstandsbediening</li>
        </ul>
      </LongParagraph>

      <LongParagraph
          title="Voordeel van LED-strips"
      >
        <ul class="text-white font-extralight">
          <li>Makkelijke bevestiging, nog sneller genieten van een ontspanningsmoment</li>
          <li>Hoge lichtopbrengst, geen reguliere lampen meer nodig, nog meer geld besparen</li>
          <li>Extra duurzaam, beter voor het milieu en jouw portemonnee</li>
          <li>Goed voor de ogen, ze creeer je meer rust en kalmte in je hoofd</li>
          <li>Bediening via app en afstandsbediening, zo kun je lekker in je luie stoel blijven zitten</li>
          <li>Bijzondere muziek modus, om jouw feestje nog mooier te maken</li>
        </ul>
      </LongParagraph>

      <SingleImage
          :image-src="require('~/assets/photos/Woonkamer-3.jpg')"
      />

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Best verkochte LED-strip
      </CTA>

      <LongParagraph
        title="LEDS per meter"
      >
        <p class="font-extralight text-white">
          Lideka heeft natuurlijk verschillende soorten strips en verschillende lengtes daarin. We gaan er vanuit dat jij houd van heldere verlichting, en dat je deze verlichting misschien ook wel als indirecte verlichting wilt gaan gebruiken.
        </p>
        <p class="font-extralight text-white">
          Daarom kiezen wij altijd voor een hoge kwaliteit leds en een hoog aantal leds per meter. Voor het aantal watt per meter verwijzen we je graag door naar onze product pagina's.
        </p>
      </LongParagraph>

      <CenterTitle title="Kies jou specifieke lengte" />
      <Lenghts />

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
import CTA from "~/components/CTA.vue";
import Lenghts from "~/components/Lenghts.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    Lenghts,
    CTA,
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
