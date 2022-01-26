<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">


      <Banner
        :imageSrc="require('assets/design/landings/plafond/banner.jpg')"
      />

      <CenterTitle tag="h1" title="LED-strip plafond" />

      <LongParagraph>
        <div class="text-left">
          <p class="text-white font-extralight">
            Zoek je heldere, kwalitatieve <a href="/categorie/led-strips" class="link">LED-strips</a> voor het
            <strong>plafond?</strong> Dan ben je bij Lideka aan het juiste adres. Wij focussen ons puur op <strong>betaalbare en kwalitatieve</strong>
            <a class="link" href="/categorie/led-strips">LED verlichting</a>. Doordat al onze LED-strips uitgerust zijn met het <strong>allersterkste 3M tape</strong> ben jij verzekerd van een goede aankoop.
          </p>
          <p class="text-white font-extralight">
            Maar dat niet alleen, onze LED-strips hebben <strong>talloze mogelijkheden</strong> en functies, van <strong>tijdschema’s</strong> tot eigen
            <strong>kleurencombinaties</strong> en veel meer….
          </p>
          <p class="text-white font-extralight">
            Je hebt een <strong>ruime keuze</strong> als het gaat om kleuren samenstelling en tijdschema's.
          </p>
          <p class="text-white font-extralight">
            We hebben 2 uitstekende soorten LED-strips in ons assortiment, beiden worden geleverd als een <strong>compleet set</strong>, en verder heb je dus niets meer nodig.
          </p>
          <p class="text-white font-extralight">
            Benieuwd naar het positieve effect van <a href="/blog/tv-led-strips-een-nieuwe-vorm-van-televisie-kijken" class="link">TV Led-strips?</a> Lees hier onze blog.
          </p>
        </div>
      </LongParagraph>

      <CenterTitle title="RGB LED-strips" />
      <CenterParagraph>
        <p class="text-white font-extralight">
          <NuxtLink to="/products/led-strip-5-meter" class="link">RGB LED verlichting</NuxtLink> staat bekend om zijn vele kleuren, 16 miljoen maar liefst. Hij is op afstand bestuurbaar, en kan verbonden worden met onze eigen app. Mede door zijn bijzonder sterke plakstrip is hij meer dan geschikt voor het plafond.
        </p>
      </CenterParagraph>

      <ProductsWithBackground
          v-if="collection1"
          :collection="collection1"
      />

      <CenterTitle title="RGB-IC LED-strips" />
      <CenterParagraph>
        <p class="text-white font-extralight">
          RGB-IC lijkt veel op de RGB versie, maar heeft net nog een extra functie erbij die zeer aangenaam is. Je kunt met de
          <NuxtLink to="/categorie/rgb-ic-led-strips" class="link">RGB-IC LED-strips</NuxtLink> namelijk verschillende kleuren Led’s tegelijk voor de strip heen laten schieten, en dat geeft echt een gaaf effect. Dit set wordt ook compleet geleverd.
        </p>
      </CenterParagraph>

      <ProductsWithBackground
          v-if="collection3"
          :collection="collection3"
      />

      <VideoReviews />

      <SingleImage :image-src="require('assets/design/landings/plafond/banner2.jpg')" />

      <CenterTitle title="Waarom zou ik deze LED-strips nemen voor mijn plafond?" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Zoals eerder al aangegeven is een <strong>sterke strip</strong> enorm belangrijk, je wilt namelijk niet dat de strip na een paar maanden los komt, en daar heeft Lideka aan gedacht.
        </p>
        <p class="text-white font-extralight">
          Als je nog opzoek bent naar inspiratie voor je plafond, of andere producten, dan kun je altijd even kijken op
          <a href="https://nl.pinterest.com/search/pins/?q=inspiratie%20plafond&rs=typed&term_meta%5B%5D=inspiratie%7Ctyped&term_meta%5B%5D=plafond%7Ctyped" class="link" target="_blank" rel="noopener">pinterest.</a>
        </p>
        <p class="text-white font-extralight">
          Verder is een <strong>hoge helderheid</strong> ook belangrijk, met name omdat een ruimte met een plafond vaak erg groot uitvalt. Daarom maakt Lideka gebruikt van de nieuwste <strong>SMD 5050 Led’s</strong>, deze hebben drie keer zoveel lichtopbrengst als een normale Led.
        </p>
        <p class="text-white font-extralight">
          Daarnaast staat Lideka <a href="/contact" class="link">24/7</a> klaar om al jouw vragen te beantwoorden. Als klant heb je altijd de optie om te ruilen of om jouw artikel gratis te retourneren.
        </p>
        <p class="text-white font-extralight">
          <a href="/blog/hoe-werkt-led-verlichting" class="link">
            Hoe werkt led verlichting?
          </a>
        </p>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte plafond LED-strips
      </CTA>

      <SingleImage
          :image-src="require('assets/design/landings/plafond/banner3.png')"
      />

      <LongParagraph
        bg-color
        title="SMD 5050 LEDS"
      >
        <p class="text-white font-extralight">
          Vanwege de hoge kwaliteit <strong>SMD 5050 leds</strong> is onze
          LED-strip verlichting meer dan geschikt voor een <strong>grote en een kleine ruimte.</strong>
          De SMD 5050 leds brengen <strong>drie keer zoveel licht</strong> op als de oude leds.
        </p>
      </LongParagraph>


      <LongParagraph
          bg-color
          title="Ondergronden"
      >
        <p class="text-white font-extralight">
          Er zijn best wel een aantal dingen waarom je moet letten als je een strip gaat uitkiezen voor jouw plafond. <strong>Iedere ondergrond is natuurlijk anders</strong>,
          en wat je niet wilt is dat jouw nieuwe verlichting na een aantal weken naar beneden komt. Daarom raden we je altijd aan te kijken naar 3M tape, <strong>3M tape</strong> is enorm sterk en laat op bijna iedere ondergrond niet meer los.

        </p>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte plafond LED-strips
      </CTA>

      <SingleImage
        :image-src="require('assets/design/landings/plafond/banner3.png')"
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
import VideoReviews from "~/components/VideoReviews.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';
import CTA from "~/components/CTA.vue";

export default Vue.extend({
  components: {
    VideoReviews,
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
    CTA,
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
