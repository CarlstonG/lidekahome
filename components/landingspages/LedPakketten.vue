<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="LED-strip pakketten | Combineren | Complete sets"
        :imageSrc="require('assets/headers/led-pakket-1.jpg')"
      />

      <LongParagraph>
        <p class="text-white font-extralight">
          Voor de echte liefhebbers hebben we <strong>complete</strong> pakketten. Deze pakketten bestaan uit <NuxtLink to="/products/lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app" class="link">TV LED-strips</NuxtLink>,
          en <NuxtLink to="/categorie/rgb-led-strips" class="link">RGB LED-strips</NuxtLink>. Beiden soorten bestaan uit complete sets.
        </p>
        <p class="text-white font-extralight">
          Met een <strong>uitstekende plakstrip</strong> die nooit meer laat, en eindeloze kleurencombinaties is dit een bijzonder pakket.
        </p>
      </LongParagraph>

      <ProductsWithBackground
          title="Onze pakketten"
          :collection="collection"
      />

      <VideoReviews />

      <SingleImage :image-src="require('assets/photos/Woonkamer-1.jpg')" />

      <div class="mx-auto max-w-4xl space-y-10 lg:px-0">
        <TextWithImage
            title="RGB"
            imageAlt="RGB"
            :imageSrc="require('assets/design/landings/led-pakketten/pakket-1.jpg')"
            url="/"
        >
          <p class="text-white font-extralight">
            De <NuxtLink class="link" to="/products/led-strip-5-meter">RGB LED-strip</NuxtLink> beschikt over een breed scala aan kleuren, rood, blauw, groen het zit er allemaal bij. Kies, combineer en bepaal zelf wanneer je welke combinatie wilt zien.
          </p>
          <p class="text-white font-extralight">
            Door middel van een <strong>moderne en geavanceerde afstandsbediening</strong> is het makkelijker dan ooit om de LED-strips te bedienen, maar dat niet alleen, onze <strong>uitgebreide app</strong> beschikt ook over oneindige functies en mogelijkheden.
          </p>
        </TextWithImage>

        <TextWithImage
            title="TV"
            imageAlt="TV"
            :imageSrc="require('assets/design/landings/led-pakketten/pakket-3.jpg')"
            url="/"
            reverse
        >
          <p class="text-white font-extralight">
            De <NuxtLink class="link" to="/categorie/tv-led-strips">TV LED-strip</NuxtLink> beschikt over een <strong>enorm stevige plakstrip</strong>, waardoor hij nooit meer loslaat.
            Door de <strong>flexibiliteit van de strip</strong> was het nog nooit zo makkelijk om deze te installeren.
          </p>
          <p class="text-white font-extralight">
            Met een naadloze overgang op het geluid van de <strong>TV, Computer of Game console</strong>, ben jij verzekerd van een unieke kijk of speelervaring!
          </p>
        </TextWithImage>
      </div>

      <CTA to="/products/rgb-led-light-strip-5-meter-tv-strip-2m-combinatie-pakket">
        Bekijk beste verkochte pakket
      </CTA>

      <CenterTitle
        title="De voordelen van jouw nieuwe strips"
      />

      <Benefits
          :first-block="{
          title: 'Energiebesparend',
          description: 'Energiebesparend',
          imageSrc: require('assets/icon/icons8-forest.svg')
        }"
          :second-block="{
          title: 'Naadloze overgang',
          description: 'Naadloze overgang op het geluid van de tv',
          imageSrc: require('assets/icon/icons8-audio-wave-50.svg')
        }"
      />

      <BenefitsThreeCols
          :first-block="{
            title: 'Kleuren',
            description: '16 miljoen kleuren',
            imageSrc: require('assets/icon/icons8-paint-palette-50.svg')
          }"
          :second-block="{
            title: 'Makkelijke bevestiging',
            description: 'Makkelijke bevestiging',
            imageSrc: require('assets/icon/icons8-wrench-50.svg')
          }"
          :third-block="{
            title: 'Helderheid',
            description: 'Hoge helderheid',
            imageSrc: require('assets/icon/icons8-shade-selected-faces-50.svg')
          }"
      />

      <div class="mx-auto max-w-4xl lg:px-0">
        <SingleImage :image-src="require('assets/photos/TV3.jpg')"
                     description="<div class='font-bold text-2xl'>100% tevredenheidsgarantie.</div> Wij staan volledig achter de kwaliteit van onze producten en bieden jou een onvoorwaardelijke garantie van 24 maanden."
        />
      </div>


      <div class="mx-auto max-w-4xl space-y-10 lg:px-0">
        <CenterTitle title="Kies jou specifieke lengte" />
        <Lenghts />
      </div>

      <div class="mx-auto max-w-4xl lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-6 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-24 mx-auto" src="~assets/icon/icons8-return-purchase-50.svg" alt="Retour icon" />
              </div>
              <h2 class="text-white font-bold text-left md:text-center text-sm uppercase tracking-wide pt-6 px-6 lg:px-20">
                60 dagen gratis retourneren
              </h2>
              <p class="text-white font-extralight text-left md:text-center pt-2 px-6 lg:px-20 text-sm">
                Omdat wij geloven in service, en jou willen voorzien van een risicoloze aankoop geven we in eerste instantie 60 dagen gratis retourneren.
              </p>
            </div>
          </div>
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-6 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-24 mx-auto" src="~assets/icon/icons8-technical-support-50.svg" alt="Support icon" />
              </div>
              <h2 class="text-white font-bold text-left md:text-center text-sm uppercase tracking-wide pt-6 px-6 lg:px-20">
                24/7 ondersteuning beschikbaar
              </h2>
              <p class="text-white font-extralight text-left md:text-center pt-2 px-6 lg:px-20 text-sm">
                Lideka staat overigens 24/7 klaar om al jouw vragen te beantwoorden.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="mx-auto max-w-4xl lg:px-0">
        <BlogList />
      </div>

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
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
import VideoReviews from "~/components/VideoReviews.vue";
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import CTA from "~/components/CTA.vue";
import Lenghts from "~/components/Lenghts.vue";
import BlogList from "~/components/BlogList.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    BlogList,
    Lenghts,
    CTA,
    LongParagraph,
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
    VideoReviews,
    NewsletterBlock,
  },
  props: {
    collection: {
      type: Object,
      required: true
    }
  }
});
</script>
