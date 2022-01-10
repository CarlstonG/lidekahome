<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">


    <SingleImage :imageSrc="require('assets/photos/Woonkamer-1.jpg')" />

    <CenterTitle
        tag="h1"
        title="LED-strip action"
    />

    <LongParagraph>
      <p class="text-white font-extralight">
        Welkom bij dit uitgebreide onderzoek van de Led strips van action. Er is veel commotie rondom de action en we horen vaak dat de action veel goedkoper is, en dat is natuurlijk ook zo, maar wat zijn nu echt de verschillen als het gaat om led-strips?
      </p>
    </LongParagraph>

    <LongParagraph
      title="LED-strip action in vergelijking met Lideka"
    >
      <p class="text-white font-extralight">
        We willen je graag op verschillende aspecten een beeld geven van de verschillen. Zo komt er bij aan aankoop van een Led strip erg veel kijken. Je hebt te maken met verschillende soorten led’s, een andere garantie, maar ook algemene eigenschappen.
      </p>
      <p class="text-white font-extralight">
        Hieronder heb je direct een totaaloverzicht van alle verschillen, voordelen en nadelen!
      </p>
    </LongParagraph>

      <div class="bg-gray-900 rounded-lg overflow-x-auto">
        <table class="action-table table-auto table-responsive w-full h-full table-bordered table-striped" style="min-width: 600px">
          <tr>
            <td></td>
            <th class="text-white py-2 px-2">
              <div class="mx-auto"><img class="w-40 p-4 mx-auto" :src="require('assets/action.png')" alt="Lideka LED-strip 5 meter"/></div>

              Action LED-strip 5 meter
            </th>
            <th class="text-white py-2 px-2 text-center">
              <div class="mx-auto"><img class="w-40 mx-auto" src="https://cdn.shopify.com/s/files/1/0570/2352/9109/products/14_1024x1024.png?v=1635149861" alt="Lideka LED-strip 5 meter"/></div>

              <NuxtLink to="/products/rgb-led-light-strip-5-meter-smart-verlichting">
                Lideka LED-strip 5 meter
              </NuxtLink>
            </th>
          </tr>


          <tr
            v-for="item in [
              {
                title: 'Dimbaar',
                action: 'yes',
                lideka: 'yes'
              },
              {
                title: 'Inclusief montage',
                action: 'yes',
                lideka: 'yes'
              },
              {
                title: 'Aantal LED’s per meter',
                action: '30',
                lideka: '60'
              },
              {
                title: 'Geproduceerd in',
                action: 'China',
                lideka: 'China'
              },
              {
                title: 'Energieverbruik',
                action: 'Hoog',
                lideka: 'Laag'
              },
              {
                title: 'Levensduur',
                action: '25000H',
                lideka: '50000H'
              },
              {
                title: 'Prijs',
                action: '€ 19,99',
                lideka: '€ 34,95'
              },
              {
                title: 'Dimbaar',
                action: '10-100%',
                lideka: '10-100%',
              },
              {
                title: 'Soort plakstrip',
                action: 'Merkloos',
                lideka: '3M type bruin',
              },
              {
                title: 'Knip op maat',
                action: 'Per 3 leds / 10cm',
                lideka: 'Per 3 leds / 10cm',
              },
              {
                title: 'Type LED',
                action: '5050 SMD',
                lideka: '5050 SMD',
              },
              {
                title: 'Merk LED',
                action: 'Merkloos',
                lideka: 'Epistar',
              },
              {
                title: 'Kleurtemperatuur (Kelvin)',
                action: '-',
                lideka: '-',
              },
              {
                title: 'Lichtsterkte in RGB modus',
                action: '840 Lumen',
                lideka: '3600 Lumen',
              },
              {
                title: 'Aantal LED\'s p/m',
                action: '30',
                lideka: '60',
              },
              {
                title: 'Verbruik',
                action: '16,5 Watt',
                lideka: '36 Watt',
              },
              {
                title: 'Bescherming',
                action: 'IP65',
                lideka: 'IP65',
              },
              {
                title: 'Aantal branduren',
                action: '25.000',
                lideka: '50.000',
              }
            ]"
          >
            <th class="text-gray-300 font-medium text-left py-2 px-2">{{ item.title }}</th>
            <td class="text-white text-center py-2 px-2">
              <svg v-if="item.action === 'no'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else-if="item.action === 'yes'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div v-else class="text-gray-300">
                {{ item.action }}
              </div>
            </td>
            <td class="text-white text-center py-2 px-2">
              <svg v-if="item.lideka === 'yes'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else-if="item.lideka === 'no'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div v-else class="text-gray-300">
                {{ item.lideka }}
              </div>
            </td>
          </tr>
        </table>
      </div>


      <LongParagraph
        title="Eerlijk advies omtrent de led strips van de action"
      >
        <p class="font-extralight text-white">
          De action verkoopt zeker leuke led strips, maar we kunnen nu duidelijk zien waar het prijsverschil vandaan komt, we raden je dan ook aan om zorgvuldig een beslissing te maken. Wil je graag iets duurzaams wat lang meegaat en wat en hoge helderheid opbrengt? Dan is de Lideka® Led strips zeker weten de juiste keuze.
        </p>
        <p class="font-extralight text-white">
          Tevens heb je bij Lideka® altijd de juiste snelle service als er iets aan de hand is.
        </p>
      </LongParagraph>

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
      />

      <CenterTitle title="Kies hier jouw specifieke toepassing" />

      <Usages />

      <NewsletterBlock />
    </div>
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
import BlogList from "~/components/BlogList.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    BlogList,
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
