<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <BedPageBanner
        title="LED BEDVERLICHTING"
        :imageSrc="require('assets/design/landings/bed/bannerBedPage.png')"
        :smallText="true"
      />
          <div class="text-center m-auto banner-desc">
            <p class="text-white mt-10 text-2xl font-extralight">
              Wil jij graag wat extra versiering voor jouw bed? Of zoek je gewoon verlichting voor jouw kamer? Dan ben je bij Lideka aan het beste adres. Wij bieden je graag onze RGB en RGB-IC LED-strips aan. Beiden meer dan geschikt voor het bed.
            </p>
            <p class="text-white mt-10 text-2xl font-extralight">
              Beiden LED-strips beschikken over 3M tape wat nooit meer loslaat op bijna ieder ondervlak. Door zijn hoge helderheid en vele functies is dit de ideale oplossing als je opzoek bent naar Led bedverlichting.
            </p>
            <p class="text-white mt-10 text-2xl font-extralight">
              Bij goede LED verlichting is het vooral belangrijk dat je let op het aantal Led’s, daar hebben we bij Lideka goed over nagedacht, en dus hoef jij je daar geen zorgen over te maken. We gebruiken de hoogste kwaliteit met de meeste lichtopbrengst.
            </p>
          </div>

      <CenterTitle title="TWEE SOORTEN LED STRIPS" />

      <ProductsWithBackground
        v-if="collection1"
        title="RGB LED Strips"
        :collection="collection1"
      />

<!--      <div class="max-w-5xl m-auto center-paragraph">-->
<!--        <p class="text-center text-white">RGB LED-strips hebben vele functies, en oneindig veel kleuren combinaties. Dat maakt het zo leuk. Je kunt zelfs je muziek erop aansluiten en een eigen feestje maken.</p>-->
<!--      </div>-->

      <CenterParagraph description="RGB LED-strips hebben vele functies, en oneindig veel kleuren combinaties. Dat maakt het zo leuk. Je kunt zelfs je muziek erop aansluiten en een eigen feestje maken. " />

      <div class="text-white font-extralight rounded-lg p-10 py-10"
           style="background: rgba(255, 255, 255, 0.1)"
      >
      <ProductsWithBackground
        v-if="collection3"
        title="RGB-IC LED Strips"
        :collection="collection3"
      />
        </div>

      <CenterParagraph description="RGB-IC LED-strips hebben nog een extra en speciale functie, doordat je verschillende kleuren LED’s tegelijk door de strip heen kunt laten schieten creëer je echt een heel bijzonder effect. Ontdek het zelf deze nieuwe soort verlichting, en geniet van een ware lichtshow." />

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
        <div class="lg:absolute max-w-5xl bottom-5 inset-x-0 mx-auto">
          <h1 class="text-white">Indirect licht</h1>
          <span class="text-white">De led strips van Lideka kunnen uitstekend worden gebruikt als indirect licht, dat komt door zijn hoge helderheid en hoge aantal leds per meter. Al onze strips zijn uitgerust met de hoge kwalitatieve SMD 5050 leds die drie keer zoveel licht opbrengen en drie keer zo lang meegaan.</span>
        </div>
      </div>

      <LongParagraph
        title="Decoratief licht"
        :bg-color="true"
      >
        <p>
          Als je opzoek bent naar decoratief licht, en je wilt dat deze voldoende licht opbrengt maar toch ook als
          sfeerverlichting gebruikt kan worden, dan raden we je led strip bedverlichting aan. Dit kunnen gewoon normale
          flexibele strips zijn zodat je ze extra makkelijk kunt bevestigen.
        </p>
        <p>
          Led strip bedverlichting wordt steeds populairder, en dat heeft ook te maken het feit dat er steeds mooiere
          kleurtjes bij komen. Met de flexibele strips van Lideka ben jij binnen no-time heel je bed rond en heb je een
          wonderbaarlijke nachtrust.
        </p>
        <p>
          Ook wil je extreem fel licht voorkomen in de slaapkamer aangezien dit een onaangename situatie kan
          veroorzaken, zeker als je opstaat uit de slaap om naar het toilet te gaan.
        </p>
      </LongParagraph>

      <div>

      </div>


<!--      <CenterParagraph description="RGB-IC LED-strips hebben nog een extra en speciale functie, doordat je verschillende kleuren LED’s tegelijk door de strip heen kunt laten schieten creëer je echt een heel bijzonder effect. Ontdek het zelf deze nieuwe soort verlichting, en geniet van een ware lichtshow." />-->

<!--      <SingleImage :image-src="require('assets/design/landings/woonkamer/banner2.png')" />-->

<!--      <CenterTitle title="Led verlichting woonkamer" />-->

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <LongParagraph
          title="Nadere Informatie verlichting"
          :bg-color="true"
        >
          <p>
            We geven je graag wat meer informatie omtrent verlichting voor het huis, en dan in het speciaal voor bed verlichting. Bij voorkeur gaan we voor flexibele led strips zodat je een makkelijke installatie hebt.
            We raden je aan een RGB of RGBIC versie te nemen, hiermee kun je warme en donkere kleuren produceren die extra rustig zijn voor de ogen.
            De Led strip sets van Lideka bevatten altijd een moderne afstandsbediening waarmee je de verlichting aan en uit kunt zetten.
            We raden je aan eerst goed je bed op te meten zodat je precies weet hoeveel meter strip je nodig hebt. Vaak is een 5 meter strip genoeg voor een 1 persoons bed, en heb je met 10 meter genoeg voor een 2 persoons bed.
            Ga altijd voor een montage met plakstrip zodat je geen lijm of extern dubbelzijdig tape hoeft te gebruiken.
          </p>
          <p>
            We zien ook nog wel eens zelfgemaakte lampen voorbij komen, maar daar moet je natuurlijk wel de tijd voor hebben, hier kun je daar wat inspiratie voor opdoen.
          </p>
        </LongParagraph>
        <div class="grid grid-cols-1 gap-10">
          <LongParagraph
            title="Led strip sets"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
              <p>We geven je graag een overzicht waaruit onze led strips sets bestaan</p>
              <ul class="text-white">
                <li>Adapter</li>
                <li>Controller</li>
                <li>Afstandsbediening</li>
                <li>Strip(s)</li>
              </ul>
            </div>
          </LongParagraph>
          <LongParagraph
            title="Wit licht"
            :bg-color="true"
          >
            <p>
              Er zijn veel soorten led strips die ook wit licht hebben als optie, dit kan erg mooi zijn en zeker als je kan kiezen tussen verschillende tinten wit. Echter wordt wit meer gebruikt in combinatie met een eettafel of als gewone verlichting. Voor echte sfeer verlichting wordt toch vaker RGB gebruikt.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="flex gap-10">
        <div class="flex-2 flex">
          <LongParagraph
            title="Led strip Bedverlichting met sensor"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
              <p>Led strip Bedverlichting met sensor kun je gebruiken als je dat handig vind, toch wordt het nog vaak
                als overbodig gezien. Waarom zul je denken... Dat heeft te maken met het feit dat je bijna nooit direct
                gaat slapen als je naar bed gaat, dan is een warme rode sfeer kleur veel relevanter. Deze zet je dan
                gemakkelijk aan en uit met een app of afstandsbediening.</p>
              <p>Vaak zien we dat een strip met sensor niet altijd werkt zoals je dat zou willen, het is namelijk best
                vervelend als je weer in slaap probeert te komen en de strip aan blijft staan. Daarom is een strip met
                sensor niet altijd die ideale oplossing.</p>
            </div>
          </LongParagraph>
        </div>
        <div class="flex-1 flex">
          <LongParagraph
            title="Materiaal"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
              <p>Ga voor een compleet set bij Lideka en krijgt direct alle bevestigingsmaterialen meegeleverd. Door de
                ijzersterke 3M tape heb je bijna niets extra's meer nodig en ben je binnen no-time helemaal klaar.</p>
            </div>
          </LongParagraph>
        </div>
      </div>

      <div>
        <div class="relative top-10">
          <img src="~assets/design/landings/bed/bedWithLedLighting.png">
        </div>
        <div class="relative max-w-5xl bottom-10 inset-x-0 mx-auto">
          <h1 class="text-white">Waarom zou ik deze LED-strip gebruiken voor mijn bed, als bedverlichting?</h1>
          <span class="text-white">Door zijn bijzonder sterke plakstrip zal deze nooit meer loslaten, en blijft hij ook stevig zitten als je het bed gaat verschuiven. Met vele verschillende functies en een bijzonder uitgebreide app, zijn deze LED-strips beter dan ooit.</span>
        </div>
      </div>
      <div class="flex gap-10">
        <div class="flex flex-col gap-10">
          <LongParagraph
            title="Single color led strip"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
              <p>Je kunt ook voor een single color led strip gaan, dat houd in dat je maar 1 kleur hebt. Je kunt bijvoorbeeld kiezen om voor rood of blauw te gaan. Echter raden wij dit altijd af, zeker nu een RGB strip bijna dezelfde prijs hebben. Dan kun je beter nog eens kiezen tussen 1 van de vele kleuren combinaties die je kunt maken met de led strip.</p>
            </div>
          </LongParagraph>
          <LongParagraph
            title="Bedlamp"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
              <p>Als je opzoek bent naar een bedlamp dan raden we je altijd aan eerst even goed na te denken over het soort bedlamp dat je nodig hebt, zo is een flexibele arm altijd aan te raden als je het gaat gebruiken om te lezen.</p>
            </div>
          </LongParagraph>
        </div>
        <div class="flex">
          <LongParagraph
            title="Moderne bedlampen"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
              <p>Moderne bedlampen worden steeds vaker gebruikt in slaapkamers, je creëert er makkelijk en snel een mooie warme sfeer mee. Vaak krijg je er een mooi indirect licht door, dat betekent dat het licht mooi wordt verspreid over de muur.</p>
              <p>Een Bedlampje is steeds noodzakelijker en zeker voor kinderen, aangezien veel kinderen bang zijn in het donker. Let daarbij wel op dat je een lamp gebruikt die niet te fel is. Wanneer je een te felle lamp gebruikt kan dit invloed hebben op de kwaliteit van de nachtrust.</p>
            </div>
          </LongParagraph>
        </div>
      </div>
      <div class="text-white font-extralight rounded-lg p-10 py-20"
           style="background: #121212"
      >
      <BedPageCompleteSet
        midTitle="Een compleet set bestaat uit:"
        title="Service"
        description="Daarbij staat Lideka 24/7 klaar voor al jouw vragen, klachten en opmerkingen. Service is bij ons het allerbelangrijkste. We willen er altijd voor jou zijn en zeker op de momenten wanneer je ons het hardst nodig hebt. Bestel vandaag, en geniet morgen van jouw eigen lichtshow."
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
        :image-src="require('assets/design/landings/bed/completeImage.png')"
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";
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
import TextWithImage from "~/components/blocks/TextWithImage.vue";
import {getCollection} from "~/services/ApiService";
import Steps from "~/components/blocks/Steps.vue";
import SingleImageWithContent from "~/components/blocks/SingleImageWithContent.vue";
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import BedPageCompleteSet from "~/components/blocks/BedPageCompleteSet.vue";

export default Vue.extend({
  components: {
    BedPageCompleteSet,
    LongParagraph,
    SingleImageWithContent,
    Steps,
    TextWithImage,
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
    ProductItemGradient,
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
h1 {
  font-size: 48px;
}
</style>
