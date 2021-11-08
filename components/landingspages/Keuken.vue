<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        :imageSrc="require('assets/photos/keuken.jpg')"
        :smallText="true"
      />

      <CenterTitle title="LED STRIP KEUKEN" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Wil je graag jouw keuken wat opfleuren met mooie <strong>keukenverlichting</strong>? Dan ben je bij ons aan het juiste adres. Onze
          <a href="/categorie/led-strips">RGB en RGB-IC versies</a> zijn speciaal ontworpen met een siliconen coating, daardoor zijn de ledjes volledig waterdicht.
        </p>
        <p class="text-white font-extralight">
          Ook beschikt onze keuken verlichting over de uitzonderlijke heldere <strong>SMD 5050</strong> Led’s. Met deze <strong>bijzondere leds</strong>
          heb jij meer dan voldoende licht in de keuken, en creëer jij per direct een bijzondere sfeer. Geniet daarbij ook nog eens van een <strong>breed scala</strong> aan kleuren.
        </p>
        <p class="text-white font-extralight">
          Tevens zijn ze enorm makkelijk te bedienen door middel van een <strong>app en afstandsbediening</strong>. Wat vooral belangrijk is bij verlichting voor de keuken is de
          <a href="https://nl.wikipedia.org/wiki/IP-code" class="link">IP65 ratio</a>, dat houd in dat de lampjes 100% waterdicht zijn, door alle dampen en vocht die zich voordoen in de keuken raden we je zeker een IP65 ratio aan.
        </p>
        <p>
          <a href="/blog/welke-kleuren-led-strips-zijn-er" class="link">
            Welke kleuren led strips zijn er?
          </a>
        </p>
      </LongParagraph>

      <CenterTitle title="Kies uit 2 geweldige soorten LED verlichting, en creëer je eigen magische lichtshow." />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB"
          :collection="collection1"
      />

      <CenterParagraph>
        <p class="text-white font-extralight">
          De <a href="/categorie/rgb-led-strips" class="link">RGB LED-strips</a> hebben oneindig veel kleuren combinaties. Deze worden geleverd met alle benodigdheden en je hebt dus helemaal niks meer nodig verder. Bedien de
          <a class="link" href="/categorie/led-strips">LED-strip</a> makkelijk en snel met je afstandsbediening of app.
        </p>
      </CenterParagraph>

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <CenterParagraph>
        <p class="text-white font-extralight">
          De RGB-IC LED-strip is bijna hetzelfde, maar toch net even iets anders. Er zit namelijk een speciale functie bij, met deze functie kun je verschillende kleuren Led’s tegelijk door de
          <a href="/categorie/led-strips" class="link">LED-strip</a> heen laten gaan. Dat geef een <strong>heel gaaf effect</strong>, en wordt ook wel ‘’<strong>dreamcolor</strong>’’ genoemd. Verder wordt deze ook in een compleet set geleverd en heb je verder niets meer nodig.
        </p>
        <p class="text-white font-extralight mt-4">
          <a href="/blog/hoe-werkt-led-verlichting" class="link">
            Hoe werkt led verlichting?
          </a>
        </p>
      </CenterParagraph>

      <SingleImage :image-src="require('assets/design/landings/keuken/banner2.jpg')" />

      <CenterTitle title="Wit licht" />

      <LongParagraph>
        <p class="text-white font-extralight">
          De RGB en RGBIC strips bevatten op dit moment nog <strong>geen wit licht</strong>, echter zit er wel een <strong>soort licht</strong> bij dat er veel op lijkt. Deze wordt dan ook vaak gebruik ter vervanging van het gewone witte licht.
        </p>
        <p class="text-white font-extralight">
          Wat je dan niet hebt is de mogelijkheid om de strip koud wit te maken. Als je de strip warm wit wilt maken wordt het al makkelijker aangezien de meeste kleuren al warmer zijn. Een witte strip wordt het meest gebruikt aan bijvoorbeeld een eettafel.
        </p>
      </LongParagraph>

      <TextWithImage image-alt="GESCHIKTE VERLICHTING"
                     :image-src="require('assets/design/landings/keuken/verlichting.jpg')"
                     title="GESCHIKTE VERLICHTING"
                     :bg-color="false"
                     :reverse="true"
      >
        <p class="text-white font-extralight">
          Je kunt onze strips ook prima als accentverlichting gebruiken, we zien het namelijk steeds vaker doordat accentverlichting toch wel een ander soort verlichting vereist dan de traditionele verlichting.
        </p>
        <p class="text-white font-extralight">
          Maar dat niet alleen, goede verlichting moet ook gebruikt kunnen worden als sfeervolle verlichting, daarom zijn al <strong>onze artikelen dimbaar</strong> en kun je deze zelf makkelijk instellen.
        </p>
        <p class="text-white font-extralight">
          <a href="/blog/led-verlichting-in-de-slaapkamer" class="link">
            LED verlichting in de slaapkamer - Lideka Home
          </a>
        </p>
      </TextWithImage>

      <CenterTitle title="LED STRIP BEDIENING" />

      <CenterParagraph description="Onze geweldige led strips zijn op drie verschillende manieren te bedienen. " />

      <div class="mx-auto max-w-5xl">
        <Highlights :highlights="[
            {
              imageSrc: require('assets/design/landings/slaapkamer/app.png'),
              description: 'Met de app'
            },
            {
              imageSrc: require('assets/design/landings/slaapkamer/remote.png'),
              description: 'Met de afstandsbediening'
            },
            {
              imageSrc: require('assets/design/landings/slaapkamer/controller.png'),
              description: 'Met de led strip controller'
            }
        ]" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <LongParagraph
          title="LED STRIP PROFIELEN"
          :bg-color="true"
        >
          <p>
            De led strips van Lideka kunnen prima gebruikt worden in combinatie met <strong>led strip profielen</strong>. De voorkeur gaat dan uit naar een <strong>aluminium led profiel</strong>, dit heeft namelijk een positieve invloed op de ledstrip zelf.
          </p>
        </LongParagraph>
        <LongParagraph
            title="ALUMINIUM PROFIELEN"
            :bg-color="true"
        >
          <p>
            Profielen van aluminium worden vaak gebruikt in de keuken, maar ook in de
            <a href="/categorie/slaapkamer" class="link">slaapkamer</a> of in de badkamer. Het kan allemaal, let daarbij wel op dat je een product neemt met een IP65 ratio, dit zorgt voor een
            <strong>volledige waterdichtheid</strong> van de lampjes zelf.
          </p>
        </LongParagraph>
      </div>

      <LongParagraph
          title="COMPLEET PAKKET"
          :bg-color="true"
      >
       <p>
         Bij Lideka houden we makkelijk en eenvoudig, niet iedereen is namelijk een techneut en heeft veel verstand van verlichting of elektriciteit. Daarom worden onze sets geleverd <strong>inclusief ledstrip controller, voeding en led strip afstandsbediening.</strong> Hieronder wat specificaties omtrent de componenten van de led strip.
       </p>
        <h3 class="font-bold text-4xl uppercase text-white force-white">LED strip controller:</h3>
        <ul class="text-white font-extralight">
          <li>Hoogwaardige kwaliteit kunststof</li>
          <li>Drie verschillende knoppen voor een extra makkelijk bediening</li>
          <li>Stel zelf de helderheid in zodat je het prima kunt gebruiken als sfeerverlichting</li>
          <li>Ruime keuze aan kleuren, voor iedere setting een goede kleur</li>
          <li>Lengte van ongeveer 15cm</li>
        </ul>
        <h3 class="font-bold text-4xl uppercase text-white force-white">Led strip afstandsbediening:</h3>
        <ul class="text-white font-extralight">
          <li>Talloze kleuren voor een eigen lichtshow</li>
          <li>Kies zelf een gave scene voor iedere gelegenheid</li>
          <li>Nieuwste model</li>
          <li>Uitstekende kwaliteit, zodat je nog jaren kunt genieten</li>
        </ul>
        <h3 class="font-bold text-4xl uppercase text-white force-white">Led strip voeding:</h3>
        <ul class="text-white font-extralight">
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
         We hebben deze LEDstrip speciaal geselecteerd als <strong>keukenverlichting</strong> door zijn <strong>IP65</strong> ratio. Bij gebruik van verlichting in de keuken is het namelijk belangrijk dat je rekening houd met een bepaalde hoeveelheid vocht en damp, zo is een IP65 ratio ideaal.
       </p>
        <p>
          Maar dat niet alleen, ook de kristal heldere <strong>SMD 5050</strong> lampjes maken hem de absolute winnaar.
        </p>
        <p>
          Als je nog opzoek bent naar inspiratie voor je woonkamer, dan kun je altijd even kijken op <a href="https://nl.pinterest.com/search/pins/?q=keuken%20inspiratie&rs=typed&term_meta%5B%5D=keuken%7Ctyped&term_meta%5B%5D=inspiratie%7Ctyped" target="_blank" class="link">pinterest</a>.
        </p>
        <p>
          Heb je nog vragen? Lideka staat <a href="/klantenservice" class="link">24/7</a> klaar om al jouw vragen te beantwoorden, we helpen je daarbij ook graag om de juiste verlichting te vinden.
        </p>
        <p>
          <a href="/blog/led-verlichting-in-de-badkamer" class="link">
            Led verlichting in de badkamer - Lideka Home
          </a>
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
