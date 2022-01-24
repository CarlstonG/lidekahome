<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
          :imageSrc="require('assets/design/landings/badkamer/banner.jpg')"
      />

      <CenterTitle
        tag="h1"
        title="LED-strip badkamer"
      />

      <LongParagraph>
        <div class="text-left">
          <p class="text-white font-extralight">
            Ben jij opzoek naar mooie <NuxtLink to="/categorie/led-strips" class="link">LED-strips</NuxtLink> voor in de badkamer? Lideka biedt jou een mooi assortiment met LED-strips voor de badkamer aan.
            We hebben daarvoor 2 speciale pareltjes in ons assortiment, de welbekende
            <NuxtLink to="/products/led-strip-5-meter" class="link">RGB LED-strip</NuxtLink>, en de wat nieuwere
            <NuxtLink to="/products/led-strip-5-meter-1-meter-van-lideka-rgb">RGB-IC LED-strip</NuxtLink>. Beiden LED-strips beschikken over een bijzonder hoge helderheid, en zijn op talloze manieren te bedienen.
          </p>
          <p class="text-white font-extralight">
            De RGB LED-strips beschikken over 16 miljoen kleuren, en de RGB-IC heeft daar net nog een speciale functie bij, hij wordt daarom ook wel ‘’dreamcolor’’ genoemd. Dat wil zeggen dat je verschillende kleuren led’s tegelijk door de
            <NuxtLink to="/categorie/rgb-ic-led-strips" class="link">RGBIC LED-strip</NuxtLink> heen kan laten schieten. Dat geeft een bijzonder gaaf effect.
          </p>
          <p class="text-white font-extralight">
            Bij badkamerverlichting is het vooral belangrijk dat je LED verlichting plaatst met een
            <NuxtLink to="/blog/ip-rating-bij-led-strips-wat-betekent-ip65-lideka" class="link">IP65 ratio</NuxtLink>, dat betekent waterdicht. Onze speciale badkamer LED-strips beschikken over dit ratio, en zijn daarom meer dan geschikt.
          </p>
        </div>
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

      <VideoReviews />

      <SingleImage :image-src="require('~/assets/photos/Badkamer-2.jpg')" />

      <CTA
        to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte badkamer LED-strips
      </CTA>

      <CenterTitle title="LED-strips badkamer" />

      <LongParagraph>
        <div class="text-left">
          <p class="text-white font-extralight">
            LED-strips in de badkamer geven een <strong>gezellige sfeer</strong>. Met LED-strips kunt u zelfs een bepaalde sfeer creëren, misschien bent u niet in de stemming voor een rustige sfeer en wilt u iets ruigers, LED-strips zullen precies dat doen.
          </p>
          <p class="text-white font-extralight">
            Voor een goede verlichting met je echt <strong>stap voor stap</strong> te werk gaan, je ziet namelijk snel dingen over het hoofd. Er komen veel aspecten bij kijken. Je wilt natuurlijk een <strong>strakke afwerking</strong>. Badkamer ledstrips vereisen strakke lichtlijnen, en de beste led lampjes.
          </p>
          <p class="text-white font-extralight">
            Als je <strong>snel de juiste verlichting</strong> in huis wilt halen voor de beste sfeer dan raden we RGB of RGBIC LED-strips aan, deze gaan bijzonder lang mee en hebben heel veel verschillende kleuren.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/welke-functies-kun-je-led-verlichting-meegeven" class="link">
              Welke functies kun je LED verlichting meegeven? - Lideka Home
            </a>
          </p>
        </div>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Beste verkochte badkamer LED-strips
      </CTA>

      <SingleImage
          :image-src="require('assets/photos/Badkamer-4.jpg')"
      />

      <CenterTitle title="Waarom zou ik deze LED-strips gebruiken als badkamerverlichting?" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Doordat de <a href="/categorie/led-strips">LED-strips</a> volledig waterdicht zijn ben je verzekerd van verlichting die lang mee gaat. Ook is de installatie erg snel en makkelijk. Door zijn <strong>zelfklevende strip</strong> is het bevestigen kinderspel geworden.
        </p>
        <p class="text-white font-extralight">
          Onze strips zijn zelfs geschikt voor het <a href="/categorie/plafond">plafond</a>, met het ijzersterke 3M tape waar al onze producten over beschikken ben jij verzekerd van verlichting dat niet meer loslaat.
        </p>
        <p class="text-white font-extralight">
          Door gebruik te maken van <strong>onze eigen app</strong> heb je zelfs de mogelijkheid speciale tijdschema’s in te stellen, en om jouw eigen kleuren schema’s te maken. Daarnaast staat Lideka
          <a href="/klantenservice" class="link">24/7</a> klaar om al jouw vragen te beantwoorden. De bijgeleverde afstandsbediening heeft ook meer dan genoeg functies.
        </p>
        <p class="text-white font-extralight">
          Als je nog opzoek bent naar inspiratie voor je badkamer, dan kun je altijd even kijken op
          <a href="https://nl.pinterest.com/search/pins/?q=inspiratie%20badkamer&rs=typed&term_meta%5B%5D=inspiratie%7Ctyped&term_meta%5B%5D=badkamer%7Ctyped"
             target="_blank" class="link" rel="noopener">pinterest</a>.
        </p>
        <p class="text-white font-extralight">
          <strong>Bestel vandaag, en transformeer morgen jouw badkamer naar een ware lichtshow!</strong>
        </p>
        <p class="text-white font-extralight">
          <a href="/blog/led-verlichting-in-de-badkamer" class="link">
            Led verlichting in de badkamer - Lideka Home
          </a>
        </p>
      </LongParagraph>

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
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
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
