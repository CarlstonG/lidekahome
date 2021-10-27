<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="LED STRIP SLAAPKAMER"
        description="Onze RGB LED-strips en RGB-IC LED-strips zijn perfect voor in de slaapkamer. Beiden hebben een bijzonder stevige plakstrip, en kunnen daarmee overal bevestigd worden. Ook is onze LED verlichting uitgerust met de beste kwaliteit led lampjes, waardoor je een enorm hoge helderheid hebt."
        :imageSrc="require('assets/design/landings/slaapkamer/banner.jpg')"
        :smallText="true"
      />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED Strips"
          :collection="collection1"
      />

      <CenterParagraph description="De RGB LED-strips beschikken over oneindig veel kleuren en zijn te bedienen met zowel een afstandsbediening als onze eigen app. Stel je eigen tijdschema’s in, ontwerp je eigen kleurencombinaties en nog veel meer…." />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <CenterParagraph description="De RGB-IC LED-strips lijken veel op de RGB, maar zijn toch net iets anders. Ze worden ook wel de dreamcolor LEDstrips genoemd, je hebt namelijk extra mogelijkheden om bijzondere effecten te creëren, zo kun je meerdere kleuren tegelijk door de  dreamcolor LEDstrips heen laten schieten. Verder werkt alles hetzelfde bij deze specifieke LED verlichting." />

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


      <CenterTitle title="LEDS PER METER" />

      <div class="mx-auto max-w-5xl">
        <TextWithImage :bg-color="false" :small-image="true" image-alt="LEDS PER METER" :reverse="true" :imageSrc="require('assets/design/landings/slaapkamer/leds-per-meter.png')" title="">
          <p class="text-white font-extralight">
            Het aantal leds per meter is enorm belangrijk als je gaat kijken voor nieuwe bedienbare ledstrips. Waarom is dat nu zo belangrijk? Hoe minder leds, hoe lager de lichtopbrengst, daarom heeft Lideka gekozen voor een aantal van 30 leds per meter. Hierdoor heb je meer dan voldoende licht bij jouw nieuwe RGB verlichting. Bekijk ook eens onze andere RGB verlichting.
          </p>
        </TextWithImage>
      </div>

      <CenterTitle title="LED DIMMER" />

      <CenterParagraph description="De meeste aanbieders in verlichting willen je graag nog een extra led dimmer verkopen, bij Lideka doen we dat niet. Wij houden van gemak, betrouwbaarheid en eenvoud. Daarom zijn al onze strips makkelijk te dimmen op maar liefst drie verschillende manieren." />

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

      <CenterTitle
          title="LED STRIP CONTROLLER"
      />

      <CenterParagraph
          description="Zoals je misschien al wist levert Lideka altijd complete sets, dit doen we omdat we houden van gemak. Niemand heeft zin om allerlei extra dingen erbij te moeten zoeken, als je er helemaal geen verstand van hebt. Voor een expert op het gebied van verlichting zou het dan weer een ander verhaal zijn. Met onze led strip controller kun je volgende 3 dingen doen:"
      />

      <div class="mx-auto max-w-5xl">
        <Highlights :gradient="false" :highlights="[
            {
              imageSrc: require('assets/design/landings/slaapkamer/brightness.png'),
              description: 'Dimmen'
            },
            {
              imageSrc: require('assets/design/landings/slaapkamer/color.png'),
              description: 'Kleur veranderen'
            },
            {
              imageSrc: require('assets/design/landings/slaapkamer/scenes.png'),
              description: 'Verschillende scenes afspelen'
            }
        ]" />
      </div>

      <SingleImageWithContent
          :image-src="require('assets/design/landings/slaapkamer/banner2.jpg')"
      >
        <h2 class="font-bold text-3xl">Indirecte verlichting</h2>
        <p>
          Deze sfeervolle verlichting van lideka is perfect te gebruiken als indirecte verlichting, maar ook als decoratieve verlichting. Het licht word mooi verspreid en het geeft een warme sfeer. Het maakt niet uit voor welke soorten verlichting je kiest bij Lideka, vanwege de dim opties en de hoge kwaliteit leds kun je ze voor talloze doelen gebruiken. De Lideka led strips kunnen ook gebruikt worden in combinatie met led strip profielen, deze verkopen wij zelf niet. Echter hebben led strip profielen wel een positieve invloed op de led strip zelf. Het kan ook zijn dat je nog geen indirecte verlichting nodig hebt, dan kun je onze strips gewoon als sfeer of decoratie verlichting gebruiken.
        </p>
      </SingleImageWithContent>

      <CenterTitle title="DUBBELZIJDIG TAPE" />
      <CenterParagraph description="Zoals je misschien al wist levert Lideka altijd complete sets, dit doen we omdat we houden van gemak. Niemand heeft zin om allerlei extra dingen erbij te moeten zoeken, als je er helemaal geen verstand van hebt. Voor een expert op het gebied van verlichting zou het dan weer een ander verhaal zijn. Met onze led strip controller kun je volgende 3 dingen doen:" />
      <CenterTitle title="Stap voor stap" />

      <Steps
        :steps="[
          {
            step: 1,
            description: 'Zoek een mooie plek uit om de strip te bevestigen',
          },
          {
            step: 2,
            description: 'Maak de ondergrond netjes schoon met een vochtige doek en daarna met een droge doek',
          },
          {
            step: 3,
            description: 'Zorg dat je de strip stevig aandrukt zodat er geen lucht onder blijft zitten',
          }
        ]"
      />

      <CenterTitle title="Led strip afstandsbediening" />
      <CenterParagraph description="Bij deze TV strip wordt een prachtige moderne afstandsbediening geleverd. Deze afstandsbediening heeft meerdere opties, zo kun je heel makkelijk en snel van kleur veranderen. Je kunt ook verschillende soorten scenes instellen, en dat maak het hem extra veelzijdig. Voor een compleet overzicht van alle functies kun je hier een kijkje nemen." />

      <TextWithImage
          title="LED LAMPEN"
          imageAlt="Led lampen"
          :bg-color="false"
          :reverse="true"
          :medium-image="true"
          :imageSrc="require('assets/design/landings/slaapkamer/lampen.jpg')"
      >
        <p class="text-white font-extralight">
          Er zijn ook bijzonder mooie led lampen te koop die je ook kunt aansluiten op een netwerk van slimme verlichting. We raden dit dan ook zeker aangezien je nog meer sfeer kunt creëren in de kamer. Lideka zal deze led lampen ook snel gaan uitbrengen.
        </p>
      </TextWithImage>

      <TextWithImage
          title="EXTRA VERLICHTING"
          imageAlt="Extra verlichting"
          :bg-color="false"
          :reverse="false"
          :imageSrc="require('assets/design/landings/slaapkamer/verlichting.jpg')"
      >
        <p class="text-white font-extralight">
          Deze led strips zijn niet alleen goed te gebruiken voor de slaapkamer, je kunt ze namelijk voor nog veel meer doeleinden gebruiken. Zo zijn ze ook prima als extra verlichting in de keuken. In de keuken wordt vaak gebruik gemaakt van wit licht, dat is mede doordat je met wit licht toch een beter zicht krijgt op de tafel. Eigenlijk voor iedere plaats waar jij extra verlichting wilt zijn ze onze artikelen geschikt, let daarbij wel op dat je de juiste IP ratio hebt, aangezien niet elke plaats vrij zal zijn van water en vocht.
        </p>
      </TextWithImage>

      <TextWithImage
          title="WIT LICHT"
          imageAlt="Wit licht"
          :bg-color="false"
          :reverse="true"
          :imageSrc="require('assets/design/landings/slaapkamer/white.jpg')"
      >
        <p class="text-white font-extralight">
          Er zijn ook vele soorten verlichting te koop met een wit licht, toch gaan de meeste mensen tegenwoordig voor de nieuwe RGB verlichting. Je kunt ook een mooie combinatie van verlichting maken door bijvoorbeeld rood en wit te combineren met elkaar. Echter is het in de praktijk niet heel makkelijk om een combinatie van verlichting te maken, daarom raden wij bij voorkeur de volgende soorten led aan:
        </p>
      </TextWithImage>

      <SingleImage
          :image-src="require('assets/design/landings/slaapkamer/banner3.jpg')"
      />

      <CenterTitle
          title="Waarom zijn dit de beste LED-strips voor de slaapkamer?"
      />

      <CenterParagraph
          description="Onze LED-strips hebben een bijzonder stevige 3M tape, en laten dus niet zomaar meer los. Je kunt ze dus op iedere ondergrond met een gerust hart vastplakken. Daarbij beschikken ze over een bijzonder hoge helderheid, en verlicht je dus jouw gehele kamer met slechts 3 meter strip.
Ook het bedienen van de LED-strip is kinderspel, en makkelijker dan ooit, kies zelf of je het handmatig doet, of via je smartphone of tablet. Deze mooie strip zorgt bij iedere kamer voor meer dan voldoende licht.
Maak zelf kleurencombinaties, en kies voor iedere mood een aparte kleur, het is allemaal mogelijk met de LED verlichting van Lideka.
Als je nog opzoek bent naar inspiratie voor je slaapkamer, dan kun je altijd even kijken op pinterest.
Lideka heeft niet de laagste prijs, maar wel een hele degelijke kwaliteit, en de allerbeste service!"
      />

      <SmallCenterTitle title="Lideka staat overigens 24/7 klaar om al jouw vragen te beantwoorden."/>

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

export default Vue.extend({
  components: {
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
