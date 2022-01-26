<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner :imageSrc="require('assets/photos/Bed-1.jpg')"/>

      <CenterTitle
        tag="h1"
        title="LED-strip slaapkamer"
        />

      <LongParagraph>
        <div class="text-white font-extralight">
          Ben jij op zoek naar een mooie
          <NuxtLink to="/categorie/led-strips" class="link">LED-strip</NuxtLink> voor in de slaapkamer? Onze
          <NuxtLink to="/categorie/rgb-led-strips" class="link">RGB LED-strips</NuxtLink> en
          <NuxtLink to="/categorie/rgb-ic-led-strips" class="link">RGB-IC LED-strips</NuxtLink> zijn perfect voor in de slaapkamer.
          Beiden hebben een bijzonder stevige plakstrip, en kunnen daarmee overal bevestigd worden.
          Ook is onze LED verlichting uitgerust met de beste kwaliteit led lampjes, waardoor je een enorm hoge helderheid hebt.
          Onze <NuxtLink class="link" to="/categorie/led-strips">LED-strips</NuxtLink> zijn volledig dimbaar en dus ideaal te gebruiken als sfeerverlichting in de slaapkamer.
        </div>
      </LongParagraph>


      <LongParagraph
        title="RGB LED-strips voor in de slaapkamer"
      >
        <p class="text-white font-extralight">
          De RGB LED-strips beschikken over oneindig veel kleuren en zijn te bedienen met zowel een afstandsbediening als onze eigen app. Stel je eigen tijdschema’s in, ontwerp je eigen kleurencombinaties en nog veel meer….
        </p>
      </LongParagraph>

      <ProductsWithBackground
          v-if="collection1"
          :collection="collection1"
      />

      <LongParagraph
          title="RGB-IC LED-strips voor in de slaapkamer"
      >
        <p class="text-white font-extralight">
          De RGB-IC LED-strips lijken veel op de RGB, maar zijn toch net iets anders. Ze worden ook wel de ‘dreamcolor’
          <NuxtLink to="/categorie/rgb-ic-led-strips" class="link">LED-strips</NuxtLink> genoemd, je hebt namelijk extra mogelijkheden om bijzondere effecten te creëren, zo kun je meerdere kleuren tegelijk door de LED-strip heen schieten. Verder werkt alles hetzelfde bij deze specifieke LED verlichting.
        </p>
      </LongParagraph>

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED-strips"
          :collection="collection3"
      />

      <VideoReviews />

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
          Als je nog opzoek bent naar inspiratie voor je slaapkamer, dan kun je altijd even kijken op <a target="_blank" class="link" href="https://nl.pinterest.com/search/pins/?rs=ac&len=2&q=slaapkamer%20inspiratie&eq=slaapkame&etslf=7416&term_meta%5B%5D=slaapkamer%7Cautocomplete%7C0&term_meta%5B%5D=inspiratie%7Cautocomplete%7C0" rel="noopener">pinterest.</a>
        </p>
        <p class="text-white font-extralight">
          Lideka heeft niet de laagste prijs, maar wel een hele degelijke kwaliteit, en de allerbeste service!
        </p>
        <p class="text-white font-extralight">
          <a href="/blog/hoe-sluit-ik-mijn-led-strips-aan">
            Hoe sluit ik mijn LED-strips aan? - Lideka Home
          </a>
        </p>
      </LongParagraph>

      <LongParagraph
        title="Vochtige ruimte"
      >
        <p class="text-white font-extralight">
          Wil je jouw nieuwe LED-strip
          <a href="/categorie/led-strip-plafond" class="link">plafond</a>
          in de <a href="/categorie/led-strip-badkamer" class="link">badkamer</a> gaan plaatsen of in een andere vochtige kamer? Let daarbij altijd op dat je wel te maken hebt met een minimale
          <a href="https://nl.wikipedia.org/wiki/IP-code" target="_blank" class="link">IP 65 ratio</a>. Deze leds zijn namelijk <strong>waterbestendig</strong> en zorgen ervoor dat jij nog jaren
          kunt genieten van je nieuwe verlichting. Tevens geeft Lideka <strong>2 jaar garantie.</strong>
        </p>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte slaapkamer LED-strips
      </CTA>

      <SingleImage
          :image-src="require('assets/photos/Bed-1.jpg')"
      />

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

      <Lenghts />

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

      <CenterTitle
          title="LED-strip CONTROLLER"
      />

      <LongParagraph>
        <p class="text-white font-extralight">
          Zoals je misschien al wist levert Lideka altijd <strong>complete sets</strong>,
          dit doen we omdat we houden van gemak. Niemand heeft zin om allerlei extra dingen erbij te moeten zoeken, als je er helemaal <strong>geen verstand van hebt</strong>. Voor een expert op het gebied van verlichting zou het dan weer een ander verhaal zijn. Met onze LED-strip controller kun je volgende 3 dingen doen:
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

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte slaapkamer LED-strips
      </CTA>

      <SingleImage
          :image-src="require('assets/photos/Bed-2.jpg')"
      />

      <CenterTitle title="Kies hier jouw specifieke toepassing" />

      <Usages />

      <NewsletterBlock />
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
import CTA from "~/components/CTA.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import Lenghts from "~/components/Lenghts.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    Lenghts,
    VideoReviews,
    CTA,
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
    ProductItemGradient,
    NewsletterBlock,
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
