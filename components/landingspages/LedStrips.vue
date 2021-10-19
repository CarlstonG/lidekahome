<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        description="Led Strips"
        :imageSrc="require('assets/design/landings/led-strips/banner.png')"
      />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED Strips"
          :collection="collection1"
      />

      <ProductsWithBackground
          v-if="collection2"
          title="TV LED Strips"
          :collection="collection2"
      />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <ProductsWithBackground
          v-if="collection4"
          title="LED strip pakketten"
          :collection="collection4"
      />

      <TextWithImage
          title="LED-strip pakketten"
          imageAlt="LED-strip pakketten"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-1.png')"
          url="/"
      >
        <p class="text-white font-extralight">
          Voor de echte liefhebbers hebben we complete LED pakketten. Deze LED pakketten bestaan uit TV Led strips, en RGB Led strips. Beiden soorten bestaan uit complete sets.
        </p>
        <p class="text-white font-extralight">
          Met een uitstekende plakstrip die nooit meer laat, en eindeloze kleurencombinaties is dit een bijzonder pakket.
        </p>
      </TextWithImage>

      <TextWithImage
          title="RGB LED-strip"
          imageAlt="RGB LED-strip"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-2.png')"
          url="/"
          reverse="true"
      >
        <p class="text-white font-extralight">
          De RGB LED-strip beschikt over een breed scala aan kleuren, rood, blauw, groen het zit er allemaal bij. Kies, combineer en bepaal zelf wanneer je welke combinatie wilt zien.
        </p>
        <p class="text-white font-extralight">
          Door middel van een moderne en geavanceerde afstandsbediening is het makkelijker dan ooit om de LED-strips te bedienen, maar dat niet alleen, onze uitgebreide app beschikt ook over oneindige functies en mogelijkheden.
        </p>
      </TextWithImage>

      <TextWithImage
          title="TV LED-strip"
          imageAlt="TV LED-strip"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-3.png')"
          url="/"
      >
        <p class="text-white font-extralight">
          De TV LED-strip beschikt over een enorm stevige plakstrip, waardoor hij nooit meer loslaat. Door de flexibiliteit van de strip was het nog nooit zo makkelijk om deze te installeren.
        </p>
        <p class="text-white font-extralight">
          Met een naadloze overgang op het geluid van de TV, Computer of Game console, ben jij verzekerd van een unieke kijk of speelervaring!
        </p>
      </TextWithImage>

      <Highlights :highlights="[
          {
            imageSrc: require('assets/design/landings/tape.png'),
            description: 'Door zijn bijzondere stevige dubbelzijge 3M tape ben jij verzekerd van een LED-strip die nooit meer loslaat. Zorg voor een schone ondergrond.'
          },
          {
            imageSrc: require('assets/design/landings/usb.png'),
            description: 'Dit set wordt bovendien geleverd met  een directe USB-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.'
          },
          {
            imageSrc: require('assets/design/landings/warranty.png'),
            description: 'Naast deze slimme functies wordt ook dit Lideka® model geleverd met led-lampjes van de hoogste kwaliteit en een onvoorwaardelijke garantie van 2 jaar.'
          }
      ]" />


      <ProductsWithBackground
        title="Thuis genieten van die fijne lounge vibes? Bestel jouw RGB led-strip vandaag nog!"
        :collection="collection"
      />

      <CenterTitle
        title="De voordelen van jouw nieuwe LED strips"
      />

      <Benefits
        :first-block="{
          title: 'Energiebesparend',
          description: 'Energiebesparend',
          imageSrc: require('assets/design/landings/plant.png')
        }"
        :second-block="{
          title: 'Naadloze overgang',
          description: 'Naadloze overgang op het geluid van de tv',
          imageSrc: require('assets/design/landings/audio.png')
        }"
      />

      <BenefitsThreeCols
          :first-block="{
            title: 'Kleuren',
            description: '16 miljoen kleuren',
            imageSrc: require('assets/design/landings/colors.png')
          }"
          :second-block="{
            title: 'Makkelijke bevestiging',
            description: 'Makkelijke bevestiging',
            imageSrc: require('assets/design/landings/settings.png')
          }"
          :third-block="{
            title: 'Helderheid',
            description: 'Hoge helderheid',
            imageSrc: require('assets/design/landings/brightness.png')
          }"
      />

      <SingleImage
        :image-src="require('assets/design/landings/led-pakketten/banner2.png')"
      />

      <CenterTitle title="Een complete set bestaat uit:" />

      <CompleteSet
        :left-data="[
          {
            title: 'Afstandsbediening',
            description: 'Modern model'
          },
          {
            title: 'Handleiding',
            description: 'Nederlands, Engels, Duits en Frans'
          },
          {
            title: 'Controller box',
            description: 'Met 3 verschillende knoppen'
          }
        ]"
        :image-src="require('assets/design/landings/led-pakketten/pakket.png')"
        :right-data="[
          {
            title: 'De TV Strips',
            description: 'IP20'
          },
          {
            title: 'USB aansluiting',
            description: 'Hoge kwaliteit kunststof'
          },
          {
            title: 'Bedankt kaartje',
            description: 'Omdat we blij met je zijn'
          }
        ]"
      />

      <SingleImage :image-src="require('assets/design/landings/led-pakketten/satisfy.png')"
                   description="<div class='font-bold text-2xl'>100% tevredenheidsgarantie.</div> Wij staan volledig achter de kwaliteit van onze producten en bieden jou een onvoorwaardelijke garantie van 24 maanden."
      />

      <div class="mx-auto max-w-7xl py-10 px-6 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="relative flex justify-center items-center" style="border-radius: 38px; background: rgba(37, 178, 231, 0.63); background: linear-gradient(178.32deg, rgba(37, 178, 231, 0.63) 1.42%, rgba(127, 96, 169, 0.12) 95%);"
          >
            <div class="h-full py-10 lg:py-24 flex justify-center flex-col" style="z-index: 1">
              <div class="flex-grow flex items-center">
                <img class="w-40 mx-auto" src="~assets/icons/WEBicons-05.png" />
              </div>
              <h2 class="text-white font-bold text-center text-3xl pt-6 px-6 lg:px-20">
                60 dagen gratis retourneren
              </h2>
              <p class="text-white font-extralight text-sm pt-6 px-6 lg:px-20">
                Omdat wij geloven in service, en jou willen voorzien van een risicoloze aankoop geven we in eerste instantie 60 dagen gratis retourneren.
              </p>
            </div>
          </div>
          <div class="relative flex justify-center items-center" style="border-radius: 38px; background: rgba(37, 178, 231, 0.63); background: linear-gradient(178.32deg, rgba(37, 178, 231, 0.63) 1.42%, rgba(127, 96, 169, 0.12) 95%);"
          >
            <div class="h-full py-10 lg:py-24 flex justify-center flex-col" style="z-index: 1">
              <div class="flex-grow flex items-center">
                <img class="w-28 mx-auto" src="~assets/icons/person.png" />
              </div>
              <h2 class="text-white font-bold text-center text-3xl pt-6 px-6 lg:px-20">
                24/7 ondersteuning beschikbaar
              </h2>
              <p class="text-white font-extralight text-sm pt-6 px-6 lg:px-20">
                Lideka staat overigens 24/7 klaar om al jouw vragen te beantwoorden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LengthProducts
        :collection="collection"
        title="Uit welke lengtes kan je kiezen?"
        description="Wij leveren pakketten van 3 meter, 5 meter, 10 meter, 15 meter, en 20 meter."
      />

      <CenterTitle
        title="Bekijk ook eens onze andere soorten LED-strips:"
      />

      <OtherCollections
        :collections="[
            'led-strip-pakketten',
            'rgb-led-strips',
            'tv-led-strips'
        ]"
      />

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
      />

      <SingleImage :image-src="require('assets/design/landings/sitting-tv.png')" />

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

export default Vue.extend({
  components: {
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
