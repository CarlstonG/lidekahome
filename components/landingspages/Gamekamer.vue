<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        :imageSrc="require('assets/design/landings/gamekamer/banner.jpg')"
        :smallText="true"
      />

      <CenterTitle title="RGB LED-strip" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Ben jij een echte game liefhebber of speel je gewoon graag wat spelletjes? En ben je daarom op zoek naar mooie en betaalbare
          <a href="/categorie/led-strips" class="link">RGB LED-strips?</a> Dan ben je bij Lideka aan het <strong>juiste adres.</strong>
        </p>
        <p class="text-white font-extralight">
          Wij hebben maar liefst 3 verschillende soorten LED-strips voor jouw game kamer. Voor een directe bevestiging aan de TV of PC raden we onze speciale
          <a href="/products/lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app" class="link">TV LED-strips</a> aan, deze hebben in de <strong>RGB uitvoering</strong>, en zijn makkelijk te verbinden met een <strong>USB kabel</strong>.
        </p>
        <p class="text-white font-extralight">
          Als je daarnaast nog verder op zoek bent naar mooie LED-strips dan zijn onze normale <strong>RGB-IC en RGB LED-strips</strong> een hele <strong>goede keuze</strong>. Je kunt bijvoorbeeld kiezen voor een 10 meter RGB strip, maar we hebben ook vele andere lengtes, kies gewoon wat het beste bij jou past.
        </p>
        <p class="text-white font-extralight">
          Al onze <a href="/categorie/led-strips" class="link">LED-strips</a> hebben de nieuwste functies, en zijn te bedienen met een app, maar ook gewoon met een <strong>afstandsbediening</strong>.
        </p>
        <p class="text-white font-extralight">
          Door zijn enorm <strong>stevige 3M tape</strong> laat hij nooit meer los, en kan hij op elke gewenste plek bevestigd worden.
        </p>
        <p class="text-white font-extralight">
          Met de ingebouwde microfoon gaan de <a href="/products/lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app" class="link">LED-strips</a> <strong>perfect mee op het geluid</strong> van de TV of PC, en geniet je van een echte game ervaring!
        </p>
        <p class="text-white font-extralight">
            Benieuwd naar het positieve effect van <a href="/blog/tv-led-strips-een-nieuwe-vorm-van-televisie-kijken" class="link">TV Led-strips?</a> Lees hier onze blog
        </p>
      </LongParagraph>

      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED-strips"
          :collection="collection1"
      />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED-strips"
          :collection="collection3"
      />

      <ProductsWithBackground
          v-if="collection2"
          title="USB TV LED-stripS"
          :collection="collection2"
      />

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner2.jpg')" />

      <CenterTitle title="Wat is een RGB LED-strip?" />

      <LongParagraph>
        <p class="text-white font-extralight">
          De RGB LED-strip is een <strong>modulair, flexibel verlichtingssysteem.</strong> Het kan op elke gewenste lengte van de rol worden afgesneden en elke afzonderlijke RGB LED-lichtmodule kan in serie worden geschakeld.
          Elke RGB LED-module heeft drie LED's in zich: een <strong>rode, een groene en een blauwe.</strong>
        </p>
        <p class="text-white font-extralight">
          De RGB LED-strips zijn licht van gewicht en ook <strong>duurzaam.</strong> Zij kunnen tot 360 graden buigen zonder te breken of te barsten.
          De RGB LED-strip heeft een <strong>peel-and-stick</strong> achterzijde die zich hecht aan vrijwel elk plastic of metalen oppervlak zonder een spoor achter te laten bij verwijdering.
        </p>
        <p class="text-white font-extralight">
          Bij elke RGB LED-strip wordt een externe netvoeding geleverd, waardoor de RGB's tot 5 meter per strip kunnen worden bediend zonder dat extra voedingen nodig zijn. De RGB LED-strip is een
          <strong>handige manier</strong> om wisselende verlichting toe te voegen aan verschillende oppervlakken.
        </p>
        <p class="text-white font-extralight">
          Deze RGB LED-lampen zijn eenvoudig te installeren in een hoek van de ruimte of onder kasten en planken. Zij worden ook vaak gebruikt voor rand en onder-kastverlichting,
          kabinet verlichting, <a href="/categorie/plafond">koof verlichting</a>, teen-kick verlichting, en taakverlichting.
        </p>
        <p class="text-white font-extralight">
          Lideka biedt RGB verlichting aan in de vorm van <strong>slimme verlichting</strong>, dat houd in dat deze te bedienen zijn via een
          <strong>app en met een afstandsbediening</strong>. Als je meer informatie wilt omtrent slimme verlichting dan verwijs ik je graag door naar onze
          <a href="/blog" class="link">informatiepagina.</a>
        </p>
        <p>
          <a href=/blog/welke-kleuren-led-strips-zijn-er" class="link">
            Welke kleuren LED-strips zijn er?
          </a>
        </p>
      </LongParagraph>

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner3.jpg')" />

      <div class="mx-auto max-w-5xl">
        <TextWithImage :bg-color="true" image-alt="RGB verlichting" :reverse="true" :imageSrc="require('assets/design/landings/gamekamer/rgbverlichting.jpg')"
                       title="RGB verlichting">
          <p class="text-white font-extralight">
            RGB verlichting wordt steeds vaker gebruikt als decoratieve verlichting, dit heeft meerdere redenen. RGB verlichting is namelijk een hele <strong>efficiënte verlichting</strong>,
            en je kunt er een hele mooie en rustige sfeer mee creëren. Door de eindeloze opties wordt het steeds populairder, zo kun je onze RGB
            verlichting zelfs bedienen via <strong>app en afstandsbediening</strong>. Ideaal tijdens een <strong>romantisch diner</strong>. De bediening via app werkt volledig op het systeem van Lideka.
          </p>
        </TextWithImage>
      </div>

      <div class="mx-auto max-w-5xl">
        <TextWithImage :bg-color="true" :small-image="true" image-alt="Primaire kleuren" :reverse="false" :imageSrc="require('assets/design/landings/gamekamer/colors.png')"
                       title="Primaire kleuren">
          <p class="text-white font-extralight">
            RGB verlichting heeft 3 primaire kleuren, en door deze kleuren kun je eigenlijk iedere kleurencombinatie zelf creëren. De drie kleuren zijn <strong>Rood, Groen en Blauw</strong>. Je kunt ook een losse strip met RGB kleuren verkrijgen bij de accessoires van Lideka.
          </p>
        </TextWithImage>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
            title="LED-strip profiel"
          >
            <p class="text-white font-extralight">
              Onze strips zijn uitstekend te gebruiken in combinatie met een profiel. Het heeft zelfs een <strong>positieve invloed</strong> op het product. Echter is het zeker <strong>niet noodzakelijk</strong>. Onze artikelen zijn van enorm <strong>hoge kwaliteit</strong> en de warmte wordt perfect afgevoerd.
            </p>
            <p class="text-white font-extralight">
              <a href="/blog/hoe-werkt-led-verlichting" class="link">
                Hoe werkt led verlichting?
              </a>
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="RGB controllers"
          >
            <p class="text-white font-extralight">
              RGB verlichting word steeds vaker gebruikt als decoratieve verlichting, dit heeft meerdere redenen. RGB verlichting is namelijk een hele efficiënte verlichting, en je kunt er een hele mooie en rustige sfeer mee creeren. Door de eindeloze opties word het steeds populairder, zo kun je onze RGB verlichting zelfs bedienen via app en afstandsbediening. Ideaal tijdens een romantisch diner. De bediening via app werkt volledig op het systeem van Lideka.
            </p>
          </LongParagraph>
        </div>
      </div>
      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div class="grid grid colls-1 gap-10">
            <LongParagraph
                bg-color
                title="Vochtige ruimtes"
            >
              <p class="text-white font-extralight">
                Let bij vochtige ruimtes zoals: keukens, badkamers, veranda's etc.. vooral op welke bescherming je gebruikt voor de leds. Wij raden je altijd een minimale
                <strong>IP 65 ratio</strong> aan.
                <a href="https://nl.wikipedia.org/wiki/IP-code" target="_blank" class="link">Klik hier als je meer informatie wenst te hebben omtrent IP ratio's.</a> Op de productpagina's bij de specificaties kun je direct zien welke IP ratio iedere artikel heeft.
              </p>
              <p class="text-white font-extralight">
                <a href="/blog/led-verlichting-in-de-badkamer" class="link">
                  Led verlichting in de badkamer - Lideka Home
                </a>
              </p>
            </LongParagraph>
            <LongParagraph
                bg-color
                title="Traditionele gloeilampen"
            >
              <p class="text-white font-extralight">
                Traditionele gloeilampen zijn <strong>slecht voor het milieu</strong>, verbruiken veel energie en geven veel warmte af. Traditionele gloeilampen produceren ook een scherp, gelig licht dat vermoeide ogen kan veroorzaken.
              </p>
              <p class="text-white font-extralight">
                Deze zijn al tientallen jaren op hun retour omdat er <strong>efficiëntere, betere verlichting</strong> opties beschikbaar zijn gekomen. Traditionele gloeilampen zijn zo slecht dat ze sinds 2009 niet meer mogen worden verkocht in Europa en sinds 2014 niet meer mogen worden geïmporteerd in China.
              </p>
              <p class="text-white font-extralight">
                <strong>Kortom: traditionele gloeilampen zijn waardeloos!</strong>
              </p>
            </LongParagraph>
          </div>
          <LongParagraph
              bg-color
              title="LED lampen"
          >
            <p class="text-white font-extralight">
              LED-lampen gaan lang mee. <strong>De levensduur van een LED lamp is 50.000 uur</strong>,
              terwijl de levensverwachting van een <strong>traditionele gloeilamp slechts 1000 uur is</strong>.
              Dat betekent dat u uw LED lampen maar eens in de 6 jaar hoeft te vervangen!
            </p>
            <p class="text-white font-extralight">
              LED lampen zijn <strong>milieuvriendelijk</strong>. Traditionele gloeilampen verspillen 90% van de energie die ze gebruiken aan het produceren van warmte in plaats van licht. Vergelijk dat eens met de efficiëntie van een LED lamp, die 11-22% bedraagt.
            </p>
            <p class="text-white font-extralight">
              LED's stoppen ook helemaal met het produceren van warmte wanneer ze worden uitgeschakeld, dus ze verspillen niet zoveel energie als traditionele gloeilampen. In auto's worden leds gebruikt. De dagrijlichten van de meeste nieuwe auto's zijn led lampen. Ze kunnen tot 100.000 uur meegaan, dus de gemiddelde auto hoeft zijn koplampen maar twee keer te vervangen gedurende de hele levensduur van de auto!
            </p>
            <p class="text-white font-extralight">
              Lees onze blog als je meer wilt weten over <a href="/blog/de-levensduur-van-led-verlichting" class="link">de levensduur van Led verlichting?</a>
            </p>
          </LongParagraph>
        </div>
      </div>

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner4.jpg')" />

      <CenterTitle title="Waarom zou ik deze LED-strips gebruiken voor de game kamer?" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Door zijn hoge helderheid verlicht je makkelijk de gehele game kamer, en verhoog je automatisch je concentratie.
        </p>
        <p class="text-white font-extralight">
          Ook door het mega sterke 3M tape is het gewoon plakken, en genieten.
        </p>
        <p class="text-white font-extralight">
          Daarbij staat Lideka <a href="/contact" class="link">24/7</a> klaar voor al jouw vragen, klachten en opmerkingen.
        </p>
        <p class="text-white font-extralight">
          Service is bij ons het allerbelangrijkste.
        </p>
        <p class="text-white font-extralight">
          Bestel vandaag, en geniet morgen van jouw eigen lichtshow.
        </p>
        <p class="text-white font-extralight">
          Als je nog opzoek bent naar inspiratie voor je game kamer, dan kun je altijd even kijken op <a href="https://nl.pinterest.com/pin/383931936993652308/" class="link" target="_blank">pinterest.</a>
        </p>
      </LongParagraph>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Wit licht"
          >
            <p class="text-white font-extralight">
              Je kunt ook kiezen voor wit licht,
              dit wordt alleen <strong>nauwelijks gebruikt</strong> voor een game kamer. Je wilt spanning en donkere kleuren die
              jouw concentratie verhogen zodat je beter gaat presteren. Een witte strip gaat hierbij dan niet helpen. Wit licht wordt meer gebruikt in bijvoorbeeld
              <a href="/categorie/keuken" class="link">keukens</a> of eetkamers.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Service"
          >
            <p class="text-white font-extralight">
              Wij geloven in een <strong>uitstekende service</strong> voor jou, niet alleen voor of tijden het verkoopproces, maar vooral daarna. We willen er voor jou zijn op de momenten dat je ons het meest nodig hebt. Zo kun je altijd bij ons terecht met al jouw vragen, opmerkingen klachten of andere zaken. We hebben niet voor niets een <strong>gemiddelde score van 9,6</strong>.
            </p>
          </LongParagraph>
        </div>
      </div>

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
