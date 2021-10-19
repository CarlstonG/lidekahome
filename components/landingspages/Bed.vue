<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <BedPageBanner
        title="LED BEDVERLICHTING"
        :imageSrc="require('assets/design/landings/bed/bannerBedPage.png')"
        :smallText="true"
      />
          <div class="text-center m-auto banner-desc">
            <p class="text-white mt-10 font-extralight">
              Wil jij graag wat extra versiering voor jouw bed? Of zoek je gewoon verlichting voor jouw kamer? Dan ben je bij Lideka aan het beste adres. Wij bieden je graag onze RGB en RGB-IC LED-strips aan. Beiden meer dan geschikt voor het bed.
            </p>
            <p class="text-white mt-10 font-extralight">
              Beiden LED-strips beschikken over 3M tape wat nooit meer loslaat op bijna ieder ondervlak. Door zijn hoge helderheid en vele functies is dit de ideale oplossing als je opzoek bent naar Led bedverlichting.
            </p>
            <p class="text-white mt-10 font-extralight">
              Bij goede LED verlichting is het vooral belangrijk dat je let op het aantal Led’s, daar hebben we bij Lideka goed over nagedacht, en dus hoef jij je daar geen zorgen over te maken. We gebruiken de hoogste kwaliteit met de meeste lichtopbrengst.
            </p>
          </div>

      <CenterTitle title="TWEE SOORTEN LED STRIPS" />

      <ProductsWithBackground
        v-if="collection1"
        title="RGB LED Strips"
        :collection="collection1"
      />

      <div class="max-w-5xl m-auto center-paragraph">
        <p class="text-center text-white">RGB LED-strips hebben vele functies, en oneindig veel kleuren combinaties. Dat maakt het zo leuk. Je kunt zelfs je muziek erop aansluiten en een eigen feestje maken.</p>
      </div>

      <ProductsWithBackground
        v-if="collection1"
        title="RGB-IC LED Strips"
        :collection="collection1"
      />

      <LongParagraph
        title="Eenvoudige montage met plakstrip"
        :bg-color="true"
      >
        <p>
          Jouw nieuwe led strip is uitgerust met het ijzersterke 3M tape, 3M tape zal niet zomaar meer loslaten en is volledig zelfklevend. Voor een eenvoudige montage met plakstrip is dus altijd een dubbelzijdige 3M tape aan te raden. 3M tape staat erom bekend dat het niet zomaar meer loslaat.
        </p>
      </LongParagraph>
      <LongParagraph
        title="Donkere slaapkamer"
        :bg-color="true"
      >
        <p>
          We hebben allemaal last van een donkere slaapkamer, en dit dan speciaal in de donkere maanden. Een mooie bed
          verlichting zou dan een groot voordeel hebben. We raden je aan goed na te denken over het soort dat je daarbij
          wilt aankopen. Je kunt voor warm licht gaan, maar ook voor koud licht. Het is echt helemaal aan jou.
        </p>
        <p>
          Onze ervaring is dat RGB verlichting voldoende licht produceert en ook makkelijk te dimmen is. Je kunt
          natuurlijk gebruik maken van een sensor, maar vaak werken deze niet 100%. Een afstandsbediening waarmee je de
          sfeer verlichting aan en uit zet werkt dan veel beter en makkelijker.
        </p>
        <p>
          Ook wanneer je nachts uit bed gaat is verlichting met een afstandsbediening meer dan handig. Zo bepaal je zelf
          wanneer deze aan of uit zal gaan, in tegenstelling tot een sensor bepaalt deze zelf wanneer hij uitgaat, het
          kan dus soms zijn dat deze ongewenst lang blijft aanstaan terwijl jij weer in slaapt probeert te komen.
        </p>
      </LongParagraph>

      <div class="relative">
        <img src="~assets/design/landings/bed/bedroom-blue.png">
      </div>

      <CenterParagraph description="RGB-IC LED-strips hebben nog een extra en speciale functie, doordat je verschillende kleuren LED’s tegelijk door de strip heen kunt laten schieten creëer je echt een heel bijzonder effect. Ontdek het zelf deze nieuwe soort verlichting, en geniet van een ware lichtshow." />

      <SingleImage :image-src="require('assets/design/landings/woonkamer/banner2.png')" />

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

      <SingleImage :image-src="require('assets/design/landings/woonkamer/banner3.png')" />

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
        :reverse="true"
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
            title: 'Kleureffecten',
            description: 'Eindeloze kleureffecten',
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

      <Usages />

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";
import Banner from "~/components/blocks/Banner.vue";
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
    BedPageBanner,
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
<style lang="scss" scoped>
.banner-desc p{
  font-size: 24px;
  line-height: 33px;
}
.center-paragraph {
  margin-top: 0 !important;
}
</style>
