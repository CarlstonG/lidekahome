<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        :imageSrc="require('assets/photos/keuken.jpg')"
        :smallText="true"
      />

      <CenterTitle title="LED STRIP KEUKEN" />

      <LongParagraph>
        <p>
          Wil je graag jouw keuken wat opfleuren met mooie keukenverlichting? Dan ben je bij ons aan het juiste adres. Onze RGB en RGB-IC versies zijn speciaal ontworpen met een siliconen coating, daardoor zijn de ledjes volledig waterdicht.
        </p>
        <p>
          Ook beschikt onze keuken verlichting over de uitzonderlijke heldere SMD 5050 Led’s. Met deze bijzondere leds heb jij meer dan voldoende licht in de keuken, en creeer jij per direct een bijzondere sfeer. Geniet daarbij ook nog eens van een breed scala aan kleuren.
        </p>
        <p>
          Tevens zijn ze enorm makkelijk te bedienen door middel van een app of afstandsbediening. Wat vooral belangrijk is bij verlichting voor de keuken is de IP65 ratio, dat houd in dat de lampjes 100% waterdicht zijn, door alle dampen en vocht die zich voordoen in de keuken raden we je zeker een IP65 ratio aan.
        </p>
      </LongParagraph>

      <CenterTitle title="Kies uit 2 geweldige soorten LED verlichting, en creëer je eigen magische lichtshow." />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB"
          :collection="collection1"
      />

      <CenterParagraph description="De RGB LED-strips hebben oneindig veel kleuren combinaties. Deze worden geleverd met alle benodigdheden en je hebt dus helemaal niks meer nodig verder. Bedien de LED-strip makkelijk en snel met je afstandsbediening of app." />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <CenterParagraph description="De RGB-IC LED-strip is bijna hetzelfde, maar toch net even iets anders. Er zit namelijk een speciale functie bij, met deze functie kun je verschillende kleuren Led’s tegelijk door de LED-strip heen laten gaan. Dat geef een heel gaaf effect, en wordt ook wel ‘’dreamcolor’’ genoemd. Verder wordt deze ook in een compleet set geleverd en heb je verder niets meer nodig." />

      <SingleImage :image-src="require('assets/design/landings/keuken/banner2.jpg')" />

      <CenterTitle title="Wit licht" />

      <CenterParagraph description="De RGB en RGBIC strips bevatten op dit moment nog geen wit licht, echter zit er wel een soort licht bij dat er veel op lijkt. Deze word dan ook vaak gebruik ter vervanging van het gewone witte licht. Wat je dan niet hebt is de mogelijkheid om de strip koud wit te maken. Als je de strip warm wit wilt maken wordt het al makkelijker aangezien de meeste kleuren al warmer zijn. Een witte strip word het meest gebruikt aan bijvoorbeeld een eettafel." />

      <TextWithImage image-alt="GESCHIKTE VERLICHTING"
                     :image-src="require('assets/design/landings/keuken/verlichting.jpg')"
                     title="GESCHIKTE VERLICHTING"
                     :bg-color="false"
                     :reverse="true"
      >
        <p class="text-white font-extralight">
          Je kunt onze strips ook prima als accent verlichting gebruiken, we zien het namelijk steeds vaker doordat accent verlichting toch wel een ander soort verlichting vereist dan de traditionele verlichting. Maar dat niet alleen, goede verlichting moet ook gebruikt kunnen worden als sfeervolle verlichting, daarom zijn al onze artikelen dimbaar en kun je deze zelf makkelijk instellen.
        </p>
      </TextWithImage>

      <CenterTitle title="LED STRIP BEDIENING" />

      <CenterParagraph description="Onze geweldige led strips zijn op drie verschillende manieren te bedienen. " />

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

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <LongParagraph
          title="LED STRIP PROFIELEN"
          :bg-color="true"
        >
          <p>
            De led strips van Lideka kunnen prima gebruikt worden in combinatie met led strip profielen. De voorkeur gaat dan uit naar een aluminium led profiel, dit heeft namelijk een positieve invloed op de ledstrip zelf.
          </p>
        </LongParagraph>
        <LongParagraph
            title="ALUMINIUM PROFIELEN"
            :bg-color="true"
        >
          <p>
            Profielen van aluminium worden vaak gebruikt in de keuken, maar ook in de slaapkamer of in de badkamer. Het kan allemaal, let daarbij wel op dat je een product neemt met een IP 65 ratio, dit zorgt voor een volledige waterdichtheid van de lampjes zelf.
          </p>
        </LongParagraph>
      </div>

      <LongParagraph
          title="COMPLEET PAKKET"
          :bg-color="true"
      >
       <p>
         Bij Lideka houden we makkelijk en eenvoudig, niet iedereen is namelijk een techneut en heeft veel verstand van verlichting of elektrischiteit. Daarom worden onze sets geleverd inclusief ledstrip controller, voeding en led strip afstandsbediening. Hieronder wat specificaties omtrent de componenten van de led strip.
       </p>
        <h3 class="font-bold text-4xl uppercase text-white">LED strip controller:</h3>
        <ul>
          <li>Hoogwaardige kwaliteit kunststof</li>
          <li>Drie verschillende knoppen voor een extra makkelijk bediening</li>
          <li>Stel zelf de helderheid in zodat je het prima kunt gebruiken als sfeerverlichting</li>
          <li>Ruime keuze aan kleuren, voor iedere setting een goede kleur</li>
          <li>Lengte van ongeveer 15cm</li>
        </ul>
        <h3 class="font-bold text-4xl uppercase text-white">Led strip afstandsbediening:</h3>
        <ul>
          <li>Talloze kleuren voor een eigen lichtshow</li>
          <li>Kies zelf een gave scene voor iedere gelegenheid</li>
          <li>Nieuwste model</li>
          <li>Uitstekende kwaliteit, zodat je nog jaren kunt genieten</li>
        </ul>
        <h3 class="font-bold text-4xl uppercase text-white">Led strip voeding:</h3>
        <ul>
          <li>12V voor een bijzonder hoge lichtopbrengst<li>
          <li>Kabel van 1.40 zodat installeren nog eenvoudiger word<li>
          <li>Hoogwaardige kwaliteit kunststof</li>
        </ul>
      </LongParagraph>


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

      <SingleImage :image-src="require('assets/design/landings/keuken/banner4.jpg')" />

      <LongParagraph
        title="Waarom zijn dit de beste led strips voor de keuken?"
      >
        <p>
          We hebben deze LEDstrip speciaal geselecteerd als keukenverlichting door zijn IP65 ratio. Bij gebruik van verlichting in de keuken is het namelijk belangrijk dat je rekening houd met een bepaalde hoeveelheid vocht en damp, zo is een IP 65 ratio ideaal.
        </p>
        <p>
          Maar dat niet alleen, ook de kristal heldere SMD 5050 lampjes maken hem de absolute winnaar.
        </p>
        <p>
          Als je nog opzoek bent naar inspiratie voor je woonkamer, dan kun je altijd even kijken op pinterest.
        </p>
        <p>
          Heb je nog vragen? Lideka staat 24/7 klaar om al jouw vragen te beantwoorden, we helpen je daarbij ook graag om de juiste verlichting te vinden. >
        </p>
      </LongParagraph>

      <CenterTitle title="Op welke plekken kun je onze artikelen gebruiken in de keuken?"/>

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
