<template>
  <div class="bg-black">
    <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 lg:mb-0">
      <h1 class="md:hidden mx-auto text-3xl text-white font-bold tracking-wide uppercase mb-6">
        LED strip 3 meter
      </h1>

      <video :poster="require('~/assets/video-poster-2.jpg')" class="w-full h-full rounded-2xl" autoplay muted playsinline>
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/led-strip-video.webm" type="video/webm" />
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/led-strip-video_1.mp4" type="video/mp4" />
      </video>

      <div class="hidden md:block md:absolute mt-10 lg:mt-0 bottom-2 right-2 left-2 md:bottom-20 md:left-20 md:right-20 text-center">
        <h1 class="mx-auto text-center text-3xl text-white font-bold tracking-wide">
          LED strip 3 meter
        </h1>
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10">
      <LongParagraph>
        <p class="text-white font-extralight">
          <a href="/categorie/led-strips">Led strips</a> van 3 meter worden steeds populairder decoratie in de vorm van een strip. Ze hebben een hoge lichtopbrengst, een laag stroomverbruik en zijn gemakkelijk te gebruiken. We hebben ze in verschillende types.
        </p>
        <p class="text-white font-extralight">
          Je kunt bij ons kiezen uit een RGB LED-strip van 3 meter met een stekker of een USB aansluiting. De LED-strip van 3 meter die is uitgerust met een USB aansluiting wordt vaak gebruikt voor een TV.
        </p>
        <p class="text-white font-extralight">
          Onze LED-strip van 3 meter kunnen ook gebruikt worden om uw zicht nog mooier te maken! Of u nu uw interieur of exterieur wilt transformeren, of het nu binnen of buiten is. Met deze componenten, zal niets je tegenhouden! Eenmaal gemonteerd op een gladde ondergrond gaan ze jaren mee!
        </p>
      </LongParagraph>
    </div>

    <div class="max-w-7xl mx-auto space-y-10 mb-10 px-6 lg:px-0">
      <ProductsWithBackground
          v-if="collection"
          title="3 meter led strips"
          :collection="collection"
      />

      <VideoReviews />

      <TextWithImage
          title="Energiezuinige LED-strips van 3 meter"
          imageAlt="Energiezuinige LED-strips van 3 meter"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-1.jpg')"
      >
        <p class="text-white font-extralight">
          U hebt misschien al gehoord dat nieuwe verlichting zeer energiezuinig is. Hoe meer lichtopbrengst ze geven, hoe minder stroom je nodig hebt om ze te gebruiken. Geen oude halogeenlampen meer met een hoog energieverbruik en een korte levensduur! Dit betekent dat u lange tijd kunt decoreren zonder elk jaar of zo te veel geld te hoeven investeren in nieuwe lampen.
        </p>
      </TextWithImage>

      <TextWithImage
          title="LED-strips van 3 meter bestuurd door app"
          imageAlt="LED-strips van 3 meter bestuurd door app"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-2.jpg')"
          reverse="true"
      >
        <p class="text-white font-extralight">
          Deze led verlichting heeft een hele leuke functie, namelijk dat je zelf kunt kiezen hoe het licht eruit komt te zien. De led verlichtingsstrips worden bestuurd door een app (bijvoorbeeld voor je telefoon). U kunt het eruit laten zien zoals u wilt. De led verlichtingsstrips zijn makkelijk in gebruik omdat ze wifi of bluetooth hebben, op deze manier is het makkelijk om ze te bedienen met je smartphone of tablet.
        </p>
      </TextWithImage>

      <TextWithImage
          title="Leds per meter 3 meter LED-strip"
          imageAlt="Leds per meter 3 meter LED-strip"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-3.jpg')"
          url="/products/rgb-led-light-strip-3-meter-smart-verlichting"
          urlText="Best verkochte 3 meter led strip"
      >
        <p class="text-white font-extralight">
          Wij leveren onze Led strip van 3 meter met 30 leds per meter. Het type led strip 3 m 30led/meter heeft een vermogen van 18 watt, waardoor het een zeer sterke lichtopbrengst heeft.
        </p>
        <p class="text-white font-extralight">
          We leveren ook USB led strip set TV met 30 leds per meter, deze hebben ook vermogen van 7.5 watt.
        </p>
        <p class="text-white font-extralight">
          Als u een vraag heeft dan beantwoorden wij deze met alle liefde en plezier. Lideka staat altijd klaar voor alle soorten vragen. Je kunt je vraag dan ook via de mail indienen of telefonisch, dit doe je gemakkelijk bij onze klantenservice.
        </p>
      </TextWithImage>

      <SingleImage
        :image-src="require('~/assets/photos/Woonkamer-1.jpg')"
      />

      <TextWithImage
          title="Achtergrondkleur Strip"
          imageAlt="Achtergrondkleur Strip"
          :imageSrc="require('~/assets/design/landings/led-pakketten/pakket-2.jpg')"
          url="/"
          reverse="true"
      >
        <p class="text-white font-extralight">
          De RGB led strip heeft een silicone achtergrond kleur doordat hij een IP65 ratio heeft. De USB led strip daarentegen heeft een mooie zwarte achtergrondkleur omdat hij een IP20 ratio heeft.
        </p>
      </TextWithImage>


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
