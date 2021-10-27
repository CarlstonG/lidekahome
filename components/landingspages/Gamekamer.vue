<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        :imageSrc="require('assets/design/landings/gamekamer/banner.jpg')"
        :smallText="true"
      />

      <CenterTitle title="RGB LED STRIP" />

      <LongParagraph>
        <p>
          Ben jij een echte game liefhebber of speel je gewoon graag wat spelletjes? En ben je daarom op zoek naar mooie en betaalbare RGB LED-strips? Dan ben je bij Lideka aan het juiste adres.
        </p>
        <p>
          Wij hebben maar liefst 3 verschillende soorten LED-strips voor jouw game kamer. Voor een directe bevestiging aan de TV of PC raden we onze speciale TV LED-strips aan, deze hebben in de RGB uitvoering, en zijn makkelijk te verbinden met een USB kabel.
        </p>
        <p>
          Als je daarnaast nog verder op zoek bent naar mooie LED-strips dan zijn onze normale RGB-IC en RGB LED-strips een hele goede keuze. Je kunt bijvoorbeeld kiezen voor een 10 meter RGB strip, maar we hebben ook vele andere lengtes, kies gewoon wat het beste bij jou past.
        </p>
        <p>
          Al onze LED-strips hebben de nieuwste functies, en zijn te bedienen met een app, maar ook gewoon met een afstandsbediening.
        </p>
        <p>
          Door zijn enorm stevige 3M tape laat hij nooit meer los, en kan hij op elke gewenste plek bevestigd worden.
          Met de ingebouwde microfoon gaan de LED-strips perfect mee op het geluid van de TV of PC, en geniet je van een echte game ervaring!
        </p>
      </LongParagraph>

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner2.jpg')" />

      <CenterTitle title="RGB LED STRIP" />

      <CenterParagraph description="Lideka heeft natuurlijk verschillende soorten strips en verschillende lengtes daarin. We gaan er vanuit dat jij houd van heldere verlichting, en dat je deze verlichting misschien ook wel als indirecte verlichting wilt gaan gebruiken. Daarom kiezen wij altijd voor hoge kwaliteit leds en een hoog aantal leds per meter. Voor het aantal watt per meter verwijzen we je graag door naar onze product pagina's." />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED Strips"
          :collection="collection1"
      />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <ProductsWithBackground
          v-if="collection2"
          title="USB TV LED STRIPS"
          :collection="collection2"
      />

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner3.jpg')" />

      <CenterTitle title="Wat is een RGB led strip?" />

      <LongParagraph>
        <p>
          De RGB LED Strip is een modulair, flexibel verlichtingssysteem. Het kan op elke gewenste lengte van de rol worden afgesneden en elke afzonderlijke rGB LED-lichtmodule kan in serie worden geschakeld. Elke RGB LED-module heeft drie LED's in zich: een rode, een groene en een blauwe.
        </p>
        <p>
          De RGB LED Strips zijn licht van gewicht en ook duurzaam. Zij kunnen tot 360 graden buigen zonder te breken of te barsten. De RGB LED Strip heeft een peel-and-stick achterzijde die zich hecht aan vrijwel elk plastic of metalen oppervlak zonder een spoor achter te laten bij verwijdering.
        </p>
        <p>
          Bij elke RGB LED-strip wordt een externe netvoeding geleverd, waardoor de RGB's tot 5 meter per strip kunnen worden bediend zonder dat extra voedingen nodig zijn. De RGB LED Strip is een handige manier om wisselende verlichting toe te voegen aan verschillende oppervlakken.
        </p>
        <p>
          Deze RGB LED-lampen zijn eenvoudig te installeren in een hoek van de ruimte of onder kasten en planken. Zij worden ook vaak gebruikt voor rand en onder-kastverlichting, kabinetsverlichting, koof verlichting, teen-kick verlichting, en taakverlichting.
        </p>
        <p>
          Lideka bied alleen RGB verlichting aan in de vorm van slimme verlichting, dat hou in dat deze te bedienen zijn via een app en met een afstandsbediening. Als je meer informatie wilt omtrent slimme verlichting dan verwijs ik je graag door naar onze informatie pagina.
        </p>
      </LongParagraph>

      <div class="mx-auto max-w-5xl">
        <TextWithImage :bg-color="true" image-alt="RGB verlichting" :reverse="true" :imageSrc="require('assets/design/landings/gamekamer/rgbverlichting.jpg')"
                       title="RGB verlichting">
          <p class="text-white font-extralight">
            Het aantal leds per meter is enorm belangrijk als je gaat kijken voor nieuwe bedienbare ledstrips. Waarom is dat nu zo belangrijk? Hoe minder leds, hoe lager de lichtopbrengst, daarom heeft Lideka gekozen voor een aantal van 30 leds per meter. Hierdoor heb je meer dan voldoende licht bij jouw nieuwe RGB verlichting. Bekijk ook eens onze andere RGB verlichting.
          </p>
        </TextWithImage>
      </div>

      <div class="mx-auto max-w-5xl">
        <TextWithImage :bg-color="true" :small-image="true" image-alt="Primaire kleuren" :reverse="false" :imageSrc="require('assets/design/landings/gamekamer/colors.png')"
                       title="Primaire kleuren">
          <p class="text-white font-extralight">
            RGB verlichting heeft 3 primaire kleuren, en door deze kleuren kun je eigenlijk iedere kleuren combinatie zelf creeren. De drie kleuren zijn Rood, Groen en Blauw. Je kunt ook een losse strip met RGB kleuren verkrijgen bij de accessoires van Lideka.
          </p>
        </TextWithImage>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
            title="Led strip profiel"
          >
            <p class="text-white font-extralight">
              Onze strips zijn uitstekend te gebruiken in combinatie met een profiel. Het heeft zelfs een positieve invloed op het product. Echter is het zeker niet noodzakelijk. Onze artikelen zijn van enorm hoge kwaliteit en de warmte word perfect afgevoerd.
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
                Let bij vochtige ruimtes zoals: keukens, badkamers, verandas etc.. vooral op welke bescherming je gebruikt voor de leds. Wij raden je altijd een minimale IP 65 ratio aan. Klik hier als je meer informatie wenst te hebben omtrent IP ratio's. Op de productpagina's bij de specificaties kun je direct zien welke IP ratio iedere artikel heeft.
              </p>
            </LongParagraph>
            <LongParagraph
                bg-color
                title="Traditionele gloeilampen"
            >
              <p class="text-white font-extralight">
                Traditionele gloeilampen zijn slecht voor het milieu, verbruiken veel energie en geven veel warmte af. Traditionele gloeilampen produceren ook een scherp, gelig licht dat vermoeide ogen kan veroorzaken.
              </p>
              <p class="text-white font-extralight">
                Deze zijn al tientallen jaren op hun retour omdat er efficiëntere, betere verlichtingsopties beschikbaar zijn gekomen. Traditionele gloeilampen zijn zo slecht dat ze sinds 2009 niet meer mogen worden verkocht in Europa en sinds 2014 niet meer mogen worden geïmporteerd in China.
              </p>
              <p class="text-white font-extralight">
                Kortom: traditionele gloeilampen zijn waardeloos!
              </p>
            </LongParagraph>
          </div>
          <LongParagraph
              bg-color
              title="LED lampen"
          >
            <p class="text-white font-extralight">
              LED-lampen gaan lang mee. De levensduur van een LED lamp is 50.000 uur, terwijl de levensverwachting van een traditionele gloeilamp slechts 1000 uur is. Dat betekent dat u uw LED lampen maar eens in de 6 jaar hoeft te vervangen!
            </p>
            <p class="text-white font-extralight">
              LED lampen zijn milieuvriendelijk. Traditionele gloeilampen verspillen 90% van de energie die ze gebruiken aan het produceren van warmte in plaats van licht. Vergelijk dat eens met de efficiëntie van een LED lamp, die 11-22% bedraagt.
            </p>
            <p class="text-white font-extralight">
              LED's stoppen ook helemaal met het produceren van warmte wanneer ze worden uitgeschakeld, dus ze verspillen niet zoveel energie als traditionele gloeilampen. In auto's worden leds gebruikt. De dag rijlichten van de meeste nieuwe auto's zijn led lampen. Ze kunnen tot 100.000 uur meegaan, dus de gemiddelde auto hoeft zijn koplampen maar twee keer te vervangen gedurende de hele levensduur van de auto!
            </p>
          </LongParagraph>
        </div>
      </div>

      <SingleImage :image-src="require('assets/design/landings/gamekamer/banner4.jpg')" />

      <CenterTitle title="Wat is een RGB led strip?" />

      <LongParagraph>
        <p>
          Door zijn hoge helderheid verlicht je makkelijk de gehele game kamer, en verhoog je automatisch je concentratie.
        </p>
        <p>
          Ook door het mega sterke 3M tape is het gewoon plakken, en genieten.
        </p>
        <p>
          Daarbij staat Lideka 24/7 klaar voor al jouw vragen, klachten en opmerkingen.
        </p>
        <p>
          Service is bij ons het allerbelangrijkste.
        </p>
        <p>
          Bestel vandaag, en geniet morgen van jouw eigen lichtshow.
        </p>
        <p>
          Als je nog opzoek bent naar inspiratie voor je game kamer, dan kun je altijd even kijken op pinterest.
        </p>
      </LongParagraph>

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
          :image-src="require('assets/design/landings/led-pakketten/pakket.jpg')"
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

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Wit licht"
          >
            <p class="text-white font-extralight">
              Je kunt ook kiezen voor wit licht, echter is dit niet heel gebruiken als het gaat om led verlichting voor de game kamer. Je wilt spanning en donkere kleuren die jouw concentratie verhogen zodat je beter gaat presteren. Een witte strip gaat hierbij dan niet helpen. Wit licht word meer gebruikt in bijvoorbeeld keukens of eetkamers.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Service"
          >
            <p class="text-white font-extralight">
              Wij geloven in een uitstekende service voor jou, niet alleen voor of tijden het verkoopproces, maar vooral daarna. We willen er voor jou zijn op de momenten dat je ons het meest nodig hebt. Zo kun je altijd bij ons terecht met al jouw vragen, opmerkingen klachten of andere zaken. We hebben niet voor niets een gemiddelde score van 9,6.
            </p>
          </LongParagraph>
        </div>
      </div>

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
