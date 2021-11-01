<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 mb-10 lg:mb-0">
        <video :poster="require('assets/video-poster-1.jpg')" class="w-full h-full rounded-2xl" autoplay muted playsinline>
          <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/woonkamer-video.webm" type="video/webm" />
          <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/woonkamer-video_1.mp4" type="video/mp4" />
        </video>

        <div class="md:absolute mt-10 lg:mt-0 bottom-2 left-2 md:bottom-20 md:left-20">
          <h1 class="mx-auto text-4xl text-white font-bold tracking-wide">
            LED STRIP WOONKAMER
          </h1>
          <h2 class="mx-auto text-lg font-extralight text-white">
            Als je naar betaalbare, kwalitatieve LED-strips opzoekt bent voor in de woonkamer, dan ben je hier aan het perfecte adres. Lideka biedt speciaal voor de woonkamer onze RGB en RGB-IC LED-strips aan. Onze LED lights is van hoge kwaliteit, en helderder dan ooit in de geschiedenis van LED verlichting.
          </h2>
        </div>
      </div>

      <CenterTitle title="KIEZEN UIT 2 SOORTEN" />

      <CenterParagraph description="Lideka bied op dit moment 2 geweldige soorten led strips aan voor de woonkamer, beiden strips worden geleverd als een compleet set, en beiden zijn van een uitstekende kwaliteit met een scherpe prijs. Je kunt onze artikelen ook gebruiken in combinatie met led strip profielen, dit heeft tevens een positieve invloed op de strips zelf." />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB"
          :collection="collection1"
      />

      <CenterParagraph description="De RGB Led-strips beschikken over maar liefst 16 miljoen verschillende kleuren combinaties. Wat het nog leuker maakt, is dat je deze zelf kunt kiezen vanuit onze eigen app. De RGB LED-strips worden geleverd in een compleet set, je bent dus in 1 keer klaar." />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <CenterParagraph description="De RGB-IC LED-strips hebben nog een extra functie, een hele bijzondere functie. Je bij dit soort namelijk verschillende kleuren tegelijk door de strips laten gaan. Dat is een enorm gaaf effect, en erg geliefd onder onze klanten. Verder werkt alles hetzelfde bij dit type LED verlichting, en wordt deze ook in een compleet set geleverd." />

      <SingleImage :image-src="require('assets/design/landings/woonkamer/banner2.jpg')" />

      <CenterTitle title="Led verlichting woonkamer" />

      <LongParagraph>
        <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
          <p>
            "Led verlichting is zeer duurzaam, het wordt steeds vaker gebruikt als sfeerverlichting en gaat langer mee dan normale verlichting. Vooral in de woonkamer, deze verlichting is super cool. " Cool? Ik weet niet hoe het met jullie zit, maar ik ben niet echt een fan van het woord "cool", hoewel het wel leuk klinkt . Yay!
          </p>
          <p>
            Laten we verder gaan met hoe LED-lampen werken: "De nieuwe LED-lampen kunnen aangaan zonder opwarmtijd. En omdat ze gemaakt zijn van licht emitterende diodes (LED), hebben ze weinig elektriciteit nodig en gaan ze veel langer mee dan traditionele gloeilampen."
          </p>
          <p>
            Dat klinkt krachtig - vooral het gedeelte over "omdat ze gemaakt zijn van licht emitterende diodes (LED)!" Een ander voordeel dat in het artikel wordt genoemd, is dat LED-lampen minder warmte produceren dan gewone lampen. Zie Ik zei het je, het artikel is behoorlijk informatief!
          </p>
          <p>
            De led strips van Lideka kun je op iedere gewenste plek bevestigen in jouw woonkamer. Reken eerst uit hoeveel meter je precies nodig hebt, daarna kun je de juiste lengte erbij kiezen.
          </p>
        </div>
      </LongParagraph>

      <LongParagraph
        title="UNIEKE VOORDELEN VAN LED VERLICHTING"
        :bg-color="true"
      >
        <p>
          "Led verlichting is zeer duurzaam, het wordt steeds vaker gebruikt als sfeerverlichting en gaat langer mee dan normale verlichting. Vooral in de woonkamer, deze verlichting is super cool. " Cool? Ik weet niet hoe het met jullie zit, maar ik ben niet echt een fan van het woord "cool", hoewel het wel leuk klinkt . Yay!
        </p>
        <p>
          Laten we verder gaan met hoe LED-lampen werken: "De nieuwe LED-lampen kunnen aangaan zonder opwarmtijd. En omdat ze gemaakt zijn van licht emitterende diodes (LED), hebben ze weinig elektriciteit nodig en gaan ze veel langer mee dan traditionele gloeilampen."
        </p>
        <p>
          Dat klinkt krachtig - vooral het gedeelte over "omdat ze gemaakt zijn van licht emitterende diodes (LED)!" Een ander voordeel dat in het artikel wordt genoemd, is dat LED-lampen minder warmte produceren dan gewone lampen. Zie Ik zei het je, het artikel is behoorlijk informatief!
        </p>
        <p>
          De led strips van Lideka kun je op iedere gewenste plek bevestigen in jouw woonkamer. Reken eerst uit hoeveel meter je precies nodig hebt, daarna kun je de juiste lengte erbij kiezen.
        </p>
      </LongParagraph>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <LongParagraph
            title="TRADITIONELE VERLICHTING"
            :bg-color="true"
        >
         <p>
           Traditionele verlichting wordt steeds minder gebruikt, en dat is meer dan logisch. Aangezien een Led lamp enorm veel voordelen heeft. Je kunt nu zelfs een led strip met afstandsbediening kopen, daarmee kun je bijvoorbeeld verschillende kleuren combinaties maken.
           Nieuwe verlichting is ook steeds beter bestemd tegen een vochtige ruimte, daar had de oude verlichting vaak moeite mee en dat kon nog wel eens gevaarlijke situaties opleveren.
        </p>
        <p>
           We zien ook nog wel eens zelfgemaakte lampen voorbij komen, maar daar moet je natuurlijk wel de tijd voor hebben, hier kun je daar wat inspiratie voor opdoen.
         </p>
        </LongParagraph>
        <LongParagraph
            title="KLEUR"
            :bg-color="true"
        >
          <p>
            Je vraagt je misschien af welke kleur je precies moet gebruiken voor de woonkamer, dat hangt helemaal af van de muren en van de meubels. Daarom raden we je altijd aan om voor RGB of RGBIC ledstrip te kiezen. Bij deze producten heb je eindeloos veel keuzes als het gaat om kleuren combinaties.
          </p>
        </LongParagraph>
      </div>

      <LongParagraph
          title="ACCESSOIRES VOOR LEDSTRIPS"
          :bg-color="true"
      >
        <ul>
          <li>Adapter</li>
          <li>Led controller</li>
          <li>Afstandsbediening</li>
          <li>Losse strips</li>
        </ul>
      </LongParagraph>

      <CenterTitle title="DIMBARE LEDSTRIPS" />

      <CenterParagraph description="Al onze led strips kunnen super makkelijk gedimd worden om maar liefst drie verschillende manieren" />

      <div class="mx-auto max-w-5xl">
        <Highlights :highlights="[
            {
              imageSrc: require('assets/design/landings/slaapkamer/app.png'),
              description: 'Via onze eigen app'
            },
            {
              imageSrc: require('assets/design/landings/slaapkamer/remote.png'),
              description: 'Via de afstandsbediening'
            },
            {
              imageSrc: require('assets/design/landings/slaapkamer/controller.png'),
              description: 'Via de controller'
            }
        ]" />
      </div>

      <LongParagraph
        title="MUUR LEDSTRIPS"
      >
        <p>
          Er zijn niet echt speciale muur ledstrips, je moet echter wel voorzichtig zijn bij het aankopen van led strips als je ze voor de muur wilt gaan gebruiken, we raden je aan altijd voor 3M tape te kiezen.
        </p>

        <p>
          Al onze strips zijn uitgerust met het ijzersterke 3M tape, tevens krijg je bij ons altijd 2 jaar garantie.
        </p>
      </LongParagraph>

      <SingleImage :image-src="require('assets/design/landings/woonkamer/banner3.jpg')" />

      <LongParagraph
        title="Waarom zijn dit de beste LED-strips voor de woonkamer?"
      >
        <p>
          Doordat onze RGB en RGB-IC LED-strips beschikken over een speciale SMD 5050 chip heb je drie keer zoveel lichtopbrengst dan een normale LED-strip. Aangezien de meeste woonkamers groter zijn dan een gemiddelde kamer is dit een uitstekende keuze.
        </p>
        <p>
          Daarbij komt ook nog eens dat je oneindig veel kleuren combinaties kunt maken, en je deze helemaal zelf kunt instellen via onze eigen app.
        </p>
        <p>
          Breng je woonkamer tot leven, en geniet van een ware lichtshow!
        </p>
        <p>
          Als je nog opzoek bent naar inspiratie voor je woonkamer, dan kun je altijd even kijken op pinterest.
        </p>
        <p>
          Voor verdere vragen kun je altijd terecht bij onze klantenservice.
        </p>
      </LongParagraph>

      <Benefits
          :first-block="{
          title: 'Energiebesparend',
          description: 'Energiebesparend',
          imageSrc: require('assets/icon/icons8-forest.svg')
        }"
          :second-block="{
          title: 'Naadloze overgang',
          description: 'Naadloze overgang op het geluid van de tv',
          imageSrc: require('assets/icon/icons8-audio-wave-50.svg')
        }"
      />

      <BenefitsThreeCols
          :first-block="{
            title: 'Kleuren',
            description: '16 miljoen kleuren',
            imageSrc: require('assets/icon/icons8-paint-palette-50.svg')
          }"
          :second-block="{
            title: 'Makkelijke bevestiging',
            description: 'Makkelijke bevestiging',
            imageSrc: require('assets/icon/icons8-wrench-50.svg')
          }"
          :third-block="{
            title: 'Helderheid',
            description: 'Hoge helderheid',
            imageSrc: require('assets/icon/icons8-shade-selected-faces-50.svg')
          }"
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
        :image-src="require('assets/products/18.png')"
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

export default Vue.extend({
  components: {
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
