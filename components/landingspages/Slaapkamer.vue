<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="LED STRIP SLAAPKAMER"
        description="Onze <a href='/categorie/led-strips' class='link'>RGB LED-strips</a> en
        <a href='/categorie/rgb-ic-led-strips' class='link'>RGB-IC LED-strips</a> zijn perfect voor in de slaapkamer.
        Beiden hebben een bijzonder <strong>stevige plakstrip</strong>, en kunnen daarmee overal bevestigd worden.
        Ook is onze LED verlichting uitgerust met de <strong>beste kwaliteit led lampjes</strong>,
        waardoor je een enorm hoge helderheid hebt."
        :imageSrc="require('assets/photos/Bed-1.jpg')"
        :smallText="true"
      />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED Strips"
          :collection="collection1"
      />

      <CenterParagraph>
        <p class="text-white font-extralight">
          De RGB LED-strips beschikken over
          <strong>oneindig veel kleuren</strong> en zijn te bedienen met zowel een
          afstandsbediening als onze eigen app. Stel je eigen <strong>tijdschema’s</strong> in, ontwerp je eigen <strong>kleurencombinaties</strong> en nog veel meer….
        </p>
      </CenterParagraph>

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <LongParagraph>
        <p class="text-white font-extralight">
          De RGB-IC LED-strips lijken veel op de RGB, maar zijn toch net iets anders. Ze worden ook wel de <strong>dreamcolor</strong> LEDstrips genoemd,
          je hebt namelijk <strong>extra mogelijkheden</strong> om bijzondere effecten te creëren, zo kun je <strong>meerdere kleuren tegelijk</strong> door de  dreamcolor LEDstrips heen laten schieten. Verder werkt alles hetzelfde bij deze specifieke
          <a href="/categorie/led-strips" target="_blank">LED verlichting</a>.
        </p>
        <p class="text-white font-extralight">
          Benieuwd naar het positieve effect van <a class="link" href="/blog/tv-led-strips-een-nieuwe-vorm-van-televisie-kijken">TV Led-strips?</a> Lees hier onze blog.
        </p>
      </LongParagraph>

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

      <LongParagraph
        title="Vochtige ruimte"
      >
        <p class="text-white font-extralight">
          Wil je jouw nieuwe led strip
          <a href="/categorie/led-strip-plafond" class="link">plafond</a>
          in de <a href="/categorie/led-strip-badkamer" class="link">badkamer</a> gaan plaatsen of in een andere vochtige kamer? Let daarbij altijd op dat je wel te maken hebt met een minimale
          <a href="https://nl.wikipedia.org/wiki/IP-code" target="_blank" class="link">IP 65 ratio</a>. Deze leds zijn namelijk <strong>waterbestendig</strong> en zorgen ervoor dat jij nog jaren
          kunt genieten van je nieuwe verlichting. Tevens geeft Lideka <strong>2 jaar garantie.</strong>
        </p>
      </LongParagraph>

      <CenterTitle title="LEDS PER METER" />

      <div class="mx-auto max-w-5xl">
        <TextWithImage :bg-color="false" :small-image="true" image-alt="LEDS PER METER" :reverse="true" :imageSrc="require('assets/design/landings/slaapkamer/leds-per-meter.png')" title="">
          <p class="text-white font-extralight">
            Het aantal leds per meter is <strong>enorm belangrijk</strong>
            als je gaat kijken voor nieuwe bedienbare ledstrips. Waarom is dat nu zo belangrijk? <strong>Hoe minder leds, hoe lager de lichtopbrengst</strong>,
            daarom heeft Lideka gekozen voor een aantal van 30 leds per meter. Hierdoor heb je meer dan voldoende licht bij jouw nieuwe RGB verlichting.
          </p>
          <p class="text-white font-extralight">
            <a href="/categorie/rgb-led-strips" class="link">Bekijk ook eens onze andere RGB verlichting.</a>
          </p>
        </TextWithImage>
      </div>

      <CenterTitle title="LED DIMMER" />

      <LongParagraph>
        <p class="text-white font-extralight">
          De meeste aanbieders in verlichting willen je graag nog een extra led dimmer verkopen, bij Lideka doen we dat niet. Wij houden van <strong>gemak, betrouwbaarheid en eenvoud</strong>. Daarom zijn al onze strips makkelijk te dimmen op maar liefst drie verschillende manieren.
        </p>
        <ol class="text-white font-extralight">
          <li>Via onze eigen app</li>
          <li>Via de afstandsbediening</li>
          <li>Via de controller</li>
        </ol>
      </LongParagraph>

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

      <LongParagraph>
        <p class="text-white font-extralight">
          Zoals je misschien al wist levert Lideka altijd <strong>complete sets</strong>,
          dit doen we omdat we houden van gemak. Niemand heeft zin om allerlei extra dingen erbij te moeten zoeken, als je er helemaal <strong>geen verstand van hebt</strong>. Voor een expert op het gebied van verlichting zou het dan weer een ander verhaal zijn. Met onze led strip controller kun je volgende 3 dingen doen:
        </p>
        <ol class="text-white font-extralight">
          <li>Dimmen</li>
          <li>Kleur veranderen</li>
          <li>Verschillende scenes afspelen</li>
        </ol>
        <p>
          <a href="/blog/alles-over-led-verlichting-als-sfeerverlichting" class="link">
            Alles over LED verlichting als sfeerverlichting - Lideka Home
          </a>
        </p>
      </LongParagraph>

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
          :image-src="require('assets/photos/Slaapkamer-indirect.jpg')"
      >
        <div class="space-y-4">
          <h2 class="font-bold text-3xl">Indirecte verlichting</h2>
          <p>
            Deze <a class="link" href="/blog/alles-over-led-verlichting-als-sfeerverlichting">sfeervolle verlichting</a> van lideka is perfect te gebruiken als <strong>indirecte verlichting</strong>, maar ook als decoratieve verlichting. Het licht wordt mooi verspreid en het geeft een warme sfeer.
          </p>
          <p>
            Het maakt niet uit voor welke soorten verlichting je kiest bij Lideka, vanwege de <strong>dim opties</strong> en de <strong>hoge kwaliteit leds</strong> kun je ze voor talloze doelen gebruiken. De Lideka led strips kunnen ook gebruikt worden in combinatie met led strip profielen, deze verkopen wij zelf niet.
          </p>
          <p>
            Echter hebben led strip profielen wel een <strong>positieve invloed</strong> op de led strip zelf. Het kan ook zijn dat je nog geen indirecte verlichting nodig hebt, dan kun je onze strips gewoon als sfeer of decoratie verlichting gebruiken.
          </p>
        </div>
      </SingleImageWithContent>

      <CenterTitle title="DUBBELZIJDIG TAPE" />
      <LongParagraph>
        <p>
          Jouw nieuwe aanwinst zal uitgerust zijn met ijzer sterk dubbelzijdig 3M tape. Eenmaal goed vastgemaakt zal deze niet zomaar meer loslaten. We hebben hieronder een aantal mooie tips neergezet voor het bevestigen van jouw nieuwe feestelijke verlichting.
        </p>
        <p>
          <strong>Stap voor stap</strong>
        </p>
        <ol>
          <li>Zoek een mooie plek uit om de strip te bevestigen</li>
          <li>Maak de ondergrond netjes schoon met een vochtige doek en daarna met een droge doek</li>
          <li>Zorg dat je de strip stevig aandrukt zodat er geen lucht onder blijft zitten</li>
        </ol>
        <p>
          <a href="/blog/kan-je-de-kleur-van-led-verlichting-wijzigen" class="link">
            Kan je de kleur van led verlichting wijzigen? - Lideka Home
          </a>
        </p>
      </LongParagraph>

      <CenterTitle title="Led strip afstandsbediening" />
      <LongParagraph>
        <p>
          Bij deze TV strip wordt een prachtige <strong>moderne afstandsbediening</strong> geleverd. Deze afstandsbediening heeft meerdere opties,
          zo kun je heel makkelijk en <strong>snel van kleur veranderen</strong>. Je kunt ook verschillende <strong>soorten scenes</strong> instellen, en dat maak het hem extra veelzijdig. Voor een compleet overzicht van alle functies kun je hier een kijkje nemen
        </p>
      </LongParagraph>

      <TextWithImage
          title="LED LAMPEN"
          imageAlt="Led lampen"
          :bg-color="false"
          :reverse="true"
          :medium-image="true"
          :imageSrc="require('assets/photos/Slaapkamer-led-lamp.jpg')"
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
          Deze led strips zijn niet alleen goed te gebruiken voor de slaapkamer, je kunt ze namelijk voor nog veel meer doeleinden gebruiken. Zo zijn ze ook prima als
          <strong>extra verlichting</strong> in de keuken. In de <a href="/categorie/keuken" class="link">keuken</a> wordt vaak gebruik gemaakt van wit licht, dat is mede doordat je met wit licht toch een beter zicht krijgt op de tafel.
        </p>
        <p class="text-white font-extralight">
          Eigenlijk voor iedere plaats waar jij extra verlichting wilt zijn ze onze artikelen geschikt, let daarbij wel op dat je de juiste
          <a href="https://nl.wikipedia.org/wiki/IP-code" target="_blank" class="link">IP ratio</a> hebt, aangezien niet elke plaats vrij zal zijn van water en vocht.
        </p>
        <p class="text-white font-extralight">
          <a href="/blog/wat-is-led" class="link">
            Wat is led? - Lideka Home
          </a>
        </p>
      </TextWithImage>

      <TextWithImage
          title="WIT LICHT"
          imageAlt="Wit licht"
          :bg-color="false"
          :reverse="true"
          :imageSrc="require('assets/photos/slaapkamer-wit.jpg')"
      >
        <p class="text-white font-extralight">
          Er zijn ook vele soorten verlichting te koop met een wit licht, toch gaan de meeste mensen tegenwoordig voor de nieuwe
          <a href="/categorie/rgb-led-strips" class="link" >RGB verlichting</a>. Je kunt ook een mooie combinatie van verlichting maken door bijvoorbeeld rood en wit te combineren met elkaar. Echter is het in de praktijk niet heel makkelijk om een combinatie van verlichting te maken, daarom raden wij bij voorkeur de volgende soorten led aan:
        </p>
        <ul class="text-white font-extralight">
          <li><a href="/categorie/rgb-led-strips" class="link">RGB</a></li>
          <li><a href="/categorie/rgb-ic-led-strips" class="link">RGBIC</a></li>
        </ul>
      </TextWithImage>

      <SingleImage
          :image-src="require('assets/photos/Bed-2.jpg')"
      />

      <CenterTitle
          title="Waarom zijn dit de beste LED-strips voor de slaapkamer?"
      />

      <LongParagraph>
        <p class="text-white font-extralight">
          Onze LED-strips hebben een bijzonder stevige <strong>3M tape</strong>, en laten dus niet zomaar meer los. Je kunt ze dus op iedere ondergrond met een gerust hart vastplakken. Daarbij beschikken ze over een bijzonder hoge helderheid, en verlicht je dus jouw gehele kamer met slechts
          <a href="/products/lideka-rgb-led-light-strip-3-meter" class="link">3 meter strip.</a>
        </p>
        <p class="text-white font-extralight">
          Ook het bedienen van de LED-strip is kinderspel, en makkelijker dan ooit, kies zelf of je het handmatig doet, of via je smartphone of tablet. Deze mooie strip zorgt bij iedere kamer voor meer dan voldoende licht.
        </p>
        <p class="text-white font-extralight">
          Maak zelf kleurencombinaties, en kies voor iedere mood een aparte kleur, het is allemaal mogelijk met de LED verlichting van Lideka.
        </p>
        <p class="text-white font-extralight">
          Als je nog opzoek bent naar inspiratie voor je slaapkamer, dan kun je altijd even kijken op <a target="_blank" class="link" href="https://nl.pinterest.com/search/pins/?rs=ac&len=2&q=slaapkamer%20inspiratie&eq=slaapkame&etslf=7416&term_meta%5B%5D=slaapkamer%7Cautocomplete%7C0&term_meta%5B%5D=inspiratie%7Cautocomplete%7C0">pinterest.</a>
        </p>
        <p class="text-white font-extralight">
          Lideka heeft niet de laagste prijs, maar wel een hele degelijke kwaliteit, en de allerbeste service!
        </p>
        <p class="text-white font-extralight">
          <a href="/blog/hoe-sluit-ik-mijn-led-strips-aan">
            Hoe sluit ik mijn led strips aan? - Lideka Home
          </a>
        </p>
      </LongParagraph>

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
        :image-src="require('assets/products/18.png')"
        :right-data="[
          {
            title: 'De LED Strip',
            description: 'IP65'
          },
          {
            title: 'Controller box',
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
