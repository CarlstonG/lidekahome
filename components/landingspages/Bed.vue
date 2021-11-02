<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">

      <BedPageBanner
        title="LED BEDVERLICHTING"
        :imageSrc="require('assets/photos/Bed-1.jpg')"
        :smallText="true"
      />

      <div style="padding-bottom: 50px !important;">
        <LongParagraph>
            <p class="text-white mt-10 font-extralight">
              Wil jij graag wat <strong>extra versiering</strong> voor jouw bed? Of zoek je gewoon verlichting voor jouw kamer?
              Dan ben je bij Lideka aan het beste adres. Wij bieden je graag onze
              <a href="/categorie/led-strips" class="link">RGB en RGB-IC LED-strips</a> aan. Beiden meer dan geschikt voor het bed.
            </p>
            <p class="text-white mt-10 font-extralight">
              Beiden LED-strips beschikken over <strong>3M tape</strong>
              wat nooit meer loslaat op bijna ieder ondervlak. Door zijn <strong>hoge helderheid</strong> en vele functies is dit de ideale oplossing als je opzoek bent naar Led bedverlichting.
            </p>
            <p class="text-white mt-10 font-extralight">
              Bij goede <a href="/categorie/led-strips">LED verlichting</a> is het vooral belangrijk dat je let op het aantal Led’s, daar hebben we bij Lideka goed over nagedacht, en dus hoef jij je daar geen zorgen over te maken. We gebruiken de hoogste kwaliteit met de meeste lichtopbrengst.
            </p>
          <p>
            <a href="/blog/de-levensduur-van-led-verlichting" class="link">
              Lees onze blog als je meer wilt weten over de levensduur van Led verlichting?
            </a>
          </p>
        </LongParagraph>
      </div>

      <ProductsWithBackground
        v-if="collection1"
        title="RGB LED Strips"
        :collection="collection1"
      />

      <CenterParagraph>
        <p class="text-white">
          RGB LED-strips hebben vele functies, en <strong>oneindig veel kleuren</strong> combinaties. Dat maakt het
          zo leuk. Je kunt zelfs je muziek erop aansluiten en een eigen feestje maken.
        </p>
      </CenterParagraph>

      <CenterParagraph>
        <p class="text-white">
          <a href="/blog/alles-over-led-verlichting-als-sfeerverlichting" class="link">
            Alles over LED verlichting als sfeerverlichting - Lideka Home
          </a>
        </p>
      </CenterParagraph>

      <ProductsWithBackground
        v-if="collection3"
        title="RGB-IC LED Strips"
        :collection="collection3"
      />

      <CenterParagraph>
        <p class="text-white">
          <a class="link" href="/blog/alles-over-led-verlichting-als-sfeerverlichting">RGB-IC LED-strips</a>
          hebben nog een extra en speciale functie, doordat je verschillende kleuren
          LED’s <strong>tegelijk door de strip heen kunt laten schieten</strong> creëer je echt een heel bijzonder effect.
          Ontdek het zelf deze nieuwe soort verlichting, en geniet van een ware lichtshow.
        </p>
      </CenterParagraph>

      <LongParagraph
        title="Eenvoudige montage met plakstrip"
        :bg-color="true"
      >
        <p>
          Jouw nieuwe led strip is uitgerust met het <strong>ijzersterke 3M tape</strong>,
          3M tape zal niet zomaar meer loslaten en is volledig zelfklevend. Voor een
          <strong>eenvoudige montage</strong> met plakstrip is dus altijd een dubbelzijdige 3M tape aan te raden. 3M tape staat erom bekend dat het niet zomaar meer loslaat.
        </p>
      </LongParagraph>
      <LongParagraph
        title="Donkere slaapkamer"
        :bg-color="true"
      >
        <p>
          We hebben allemaal last van een donkere
          <a href="/categorie/slaapkamer" class="link">slaapkamer</a>, en dit dan speciaal in de donkere maanden.
          Een mooie bed verlichting zou dan een groot voordeel hebben. We raden je aan goed na te denken over het <strong>soort</strong> dat je daarbij
          wilt aankopen. Je kunt voor <strong>warm licht</strong> gaan, maar ook voor <strong>koud licht</strong>. Het is echt helemaal aan jou.
        </p>
        <p>
          Onze ervaring is dat <a href="/categorie/rgb-led-strips" class="link">RGB verlichting</a> voldoende licht produceert en ook makkelijk te dimmen is. Je kunt
          natuurlijk gebruik maken van een sensor, maar vaak werken deze niet 100%. Een afstandsbediening waarmee je de
          <a class="link" href="/blog/alles-over-led-verlichting-als-sfeerverlichting">sfeer verlichting</a> aan en uit zet werkt dan veel beter en makkelijker.
        </p>
        <p>
          Ook wanneer je nachts uit bed gaat is verlichting met een afstandsbediening meer dan handig. Zo bepaal je zelf
          wanneer deze aan of uit zal gaan, in tegenstelling tot een sensor bepaalt deze zelf wanneer hij uitgaat, het
          kan dus soms zijn dat deze <strong>ongewenst</strong> lang blijft aanstaan terwijl jij weer in slaapt probeert te komen.
        </p>
        <p class="text-white">
          <a href="/blog/led-verlichting-in-de-badkamer" class="link">
            Led verlichting in de badkamer - Lideka Home
          </a>
        </p>
      </LongParagraph>

      <div class="relative">
        <img src="~assets/photos/Bed-2.jpg" class="rounded-2xl" />
        <div class="lg:absolute max-w-5xl bottom-5 inset-x-0 mx-auto">
          <h2 class="text-white uppercase font-bold tracking-wide text-3xl">Indirect licht</h2>
          <span class="text-white">De led strips van Lideka kunnen uitstekend worden gebruikt als indirect licht, dat komt door zijn

            <strong>hoge helderheid</strong> en hoge aantal leds per meter. Al onze strips zijn uitgerust met de
            hoge kwalitatieve <strong>SMD 5050 leds</strong> die <strong>drie keer zoveel licht</strong> opbrengen en <strong>drie keer zo lang meegaan.</strong></span>
        </div>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
          title="Decoratief licht"
          :bg-color="true"
        >
          <p>
            Als je opzoek bent naar <strong>decoratief licht</strong>, en je wilt dat deze voldoende licht opbrengt maar toch ook als
            <strong>sfeerverlichting</strong> gebruikt kan worden, dan raden we je led strip bedverlichting aan. Dit kunnen gewoon normale
            <strong>flexibele strips</strong> zijn zodat je ze <strong>extra makkelijk</strong> kunt bevestigen.
          </p>
          <p>
            Led strip bedverlichting wordt <strong>steeds populairder</strong>, en dat heeft ook te maken het feit dat er steeds mooiere
            kleurtjes bij komen. Met de flexibele strips van Lideka ben jij binnen no-time heel je bed rond en heb je een
            <strong>wonderbaarlijke nachtrust</strong>.
          </p>
          <p>
            Ook wil je extreem fel licht voorkomen in de slaapkamer aangezien dit een onaangename situatie kan
            veroorzaken, zeker als je opstaat uit de slaap om naar het toilet te gaan.
          </p>

          <p class="text-white">
            <a href="/blog/kan-je-de-kleur-van-led-verlichting-wijzigen" class="link">
              Kan je de kleur van led verlichting wijzigen? - Lideka Home
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <LongParagraph
            title="Nadere Informatie verlichting"
            :bg-color="true"
          >
            <p class="text-white">
              We geven je graag wat meer informatie omtrent <strong>verlichting voor het huis</strong>, en dan in het speciaal voor bed verlichting. Bij voorkeur gaan we voor flexibele led strips zodat je een
              <strong>makkelijke installatie</strong> hebt.
            </p>
            <p class="text-white">
              We raden je aan een RGB of RGBIC versie te nemen, hiermee kun je <strong>warme en donkere kleuren</strong> produceren die extra rustig zijn voor de ogen.
            </p>
            <p class="text-white">
              De Led strip sets van Lideka bevatten altijd een <strong>moderne afstandsbediening</strong> waarmee je de verlichting aan en uit kunt zetten.
            </p>
            <p class="text-white">
              We raden je aan eerst goed je bed op te meten zodat je precies weet hoeveel meter strip je nodig hebt.
              Vaak is een 5 meter strip genoeg voor een <strong>1 persoons bed</strong>, en heb je met 10 meter genoeg voor een <strong>2 persoons bed</strong>.
            </p>
            <p class="text-white">
              Ga altijd voor een montage met plakstrip zodat je <strong>geen lijm</strong> of <strong>extern dubbelzijdig tape</strong> hoeft te gebruiken.
            </p>
            <p class="text-white">
              We zien ook nog wel eens zelfgemaakte lampen voorbij komen, maar daar moet je natuurlijk wel de tijd voor hebben, hier kun je daar wat inspiratie voor opdoen.
            </p>
            <p class="text-white">
              <a href="/blog/wat-is-led" class="link">
                Wat is led? - Lideka Home
              </a>
            </p>
          </LongParagraph>
          <div class="grid grid-cols-1 gap-10">
            <LongParagraph
              title="Led strip sets"
              :bg-color="true"
            >
              <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
                <p>We geven je graag een overzicht waaruit onze led strips sets bestaan</p>
                <ul class="text-white font-extralight no-list-type">
                  <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Adapter</span></li>
                  <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Controller</span></li>
                  <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Afstandsbediening</span></li>
                  <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Strip(s)</span></li>
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
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <LongParagraph
            title="Led strip Bedverlichting met sensor"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
              <p>Led strip Bedverlichting met sensor kun je gebruiken als je dat handig vind, toch wordt het nog vaak
                als overbodig gezien. Waarom zul je denken... Dat heeft te maken met het feit dat je bijna nooit direct
                gaat slapen als je naar bed gaat, dan is een warme rode sfeer kleur veel relevanter. Deze zet je dan
                <strong>gemakkelijk</strong> aan en uit met een <strong>app of afstandsbediening.</strong></p>
              <p>Vaak zien we dat een strip met sensor niet altijd werkt zoals je dat zou willen, het is namelijk best
                vervelend als je weer in slaap probeert te komen en de strip aan blijft staan. Daarom is een strip met
                sensor <strong>niet altijd die ideale oplossing</strong>.</p>

              <p class="text-white">
                <a href="/blog/welke-kleuren-led-strips-zijn-er" class="link">
                  Welke kleuren led strips zijn er?
                </a>
              </p>
            </div>
          </LongParagraph>
          <LongParagraph
            title="Materiaal"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
              <p>Ga voor een compleet set bij Lideka en krijgt direct alle bevestigingsmaterialen meegeleverd. Door de
                <strong>ijzersterke 3M tape</strong> heb je bijna niets extra's meer nodig en ben je binnen no-time helemaal klaar.</p>
            </div>
          </LongParagraph>
        </div>
      </div>

      <div>
        <div class="relative top-10">
          <img src="~assets/design/landings/bed/bedWithLedLighting.jpg">
        </div>
        <div class="relative max-w-5xl bottom-10 inset-x-0 mx-auto px-6 lg:px-0">
          <h2 class="text-white text-2xl uppercase tracking-wide font-bold">Waarom zou ik deze
            <a href="/categorie/led-strips" class="link">LED-strip</a> gebruiken voor mijn bed, als bedverlichting?
          </h2>
          <span class="text-white mt-2 lg:mt-0">Door zijn bijzonder sterke plakstrip zal deze nooit meer loslaten, en
            blijft hij ook stevig zitten als je het bed gaat verschuiven. Met vele verschillende functies en een
            <strong>bijzonder uitgebreide app</strong>, zijn deze
            <a href="/categorie/led-strips" class="link">LED-strips</a> beter dan ooit.</span>
        </div>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <LongParagraph
            title="Single color led strip"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white mx-auto">
              <p>Je kunt ook voor een <strong>single color led strip</strong> gaan,
                dat houd in dat je maar 1 kleur hebt. Je kunt bijvoorbeeld kiezen
                om voor rood of blauw te gaan. Echter <strong>raden wij dit altijd af</strong>, zeker nu een RGB strip bijna dezelfde prijs hebben. Dan kun je beter nog eens kiezen tussen 1 van de vele kleuren combinaties die je kunt maken met de led strip.</p>
            </div>
          </LongParagraph>
          <LongParagraph
            title="Bedlamp"
            :bg-color="true"
          >
            <div class="prose prose-teal-500 text-white mx-auto">
              <p>Als je opzoek bent naar een bedlamp dan raden we je altijd aan
                eerst even goed na te denken over het soort bedlamp dat je nodig hebt, zo is een
                flexibele arm altijd aan te raden als je het gaat gebruiken om te lezen.</p>
            </div>
          </LongParagraph>
        </div>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
          title="Moderne bedlampen"
          :bg-color="true"
        >
          <div class="prose prose-teal-500 text-white max-w-5xl mx-auto">
            <p>Moderne bedlampen worden steeds vaker gebruikt in <a href="/categorie/slaapkamer" clas="link">slaapkamers</a>, je creëert er makkelijk en snel een mooie warme sfeer mee. Vaak krijg je er een mooi indirect licht door, dat betekent dat het licht <strong>mooi wordt verspreid</strong> over de muur.</p>
            <p>Een Bedlampje is steeds noodzakelijker en zeker voor kinderen, aangezien veel kinderen bang zijn in het donker. Let daarbij wel op dat je een lamp gebruikt die niet te fel is. Wanneer je een <strong>te felle lamp</strong> gebruikt kan dit invloed hebben op de kwaliteit van de nachtrust.</p>
          </div>
        </LongParagraph>
      </div>

      <CenterParagraph>
        <p class="text-white">
          Daarbij staat Lideka <a href="/pages/klantenservice" class="link">24/7</a> klaar voor al jouw vragen, klachten en opmerkingen. Service is bij
          ons het allerbelangrijkste. We willen er altijd voor jou zijn en zeker op de momenten wanneer
          je ons het hardst nodig hebt. Bestel vandaag, en geniet morgen van jouw eigen lichtshow.
        </p>
      </CenterParagraph>

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
            title: 'De LED Strip',
            description: 'IP65'
          },
          {
            title: 'Adapter',
            description: 'Hoge kwaliteit kunststof'
          },
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
import Usages from "~/components/blocks/Usages.vue";

export default Vue.extend({
  components: {
    Usages,
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
