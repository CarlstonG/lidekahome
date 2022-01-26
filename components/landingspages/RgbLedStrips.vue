<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        :imageSrc="require('assets/design/landings/rgb-led-strips/banner.jpg')"
      />

      <div class="mt-4">
        <CenterTitle
            tag="h1"
            title="RGB LED-strips"
        />
      </div>

      <LongParagraph>
        <p class="text-white font-extralight">
          De LIDEKA® RGB multicolor creëert een gezellige lounge sfeer en blijft muurvast zitten! Onze RGB LED-strips zijn van de hoogste kwaliteit en beschikken over de meest geavanceerde bedieningsmogelijkheden. Geniet van een breed scala aan kleuren, en ervaar de rust en gezelligheid die onze RGB strips brengen.
        </p>
        <p class="text-white font-extralight">
          Thuis genieten van die fijne lounge vibes, bij jouw favoriete films? Of heb je zin in een romantisch diner? Het kan allemaal! Bestel jouw <NuxtLink class="link" to="/products/lideka-rgb-led-light-strip-3-meter">RGB LED-strip</NuxtLink> vandaag, en geniet morgen al van een <strong>wonderbaarlijke sfeer</strong>!
        </p>
      </LongParagraph>

      <div style="margin-top: 100px;">
        <ProductsWithBackground
            title="RGB LED-strips"
            :collection="collection"
        />
      </div>

      <VideoReviews />

<!--      <CenterTitle-->
<!--          title="Jouw nieuwe RGB led-strip is:"-->
<!--      />-->

<!--      <Highlights :highlights="[-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-best-seller-50.svg'),-->
<!--            description: 'Deze stijlvolle led set wordt geleverd <strong>inclusief installatiemateriaal</strong>, ' +-->
<!--            'kunt gebruiken.'-->
<!--          },-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-water-50.svg'),-->
<!--            description: '<a href=\'https://nl.wikipedia.org/wiki/IP-code\' target=\'blank\' class=\'link\'>IP65-waterproof</a>\n'+-->
<!--'bescherming en led lampjes van de hoogste kwaliteit zodat je jouw aankoop nog jarenlang'-->
<!--          },-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-warranty-50.svg'),-->
<!--            description: 'Toch niet tevreden? Lideka® garandeert jou van een 2-jarige garantie'-->
<!--          }-->
<!--      ]" />-->

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="De voordelen van jouw nieuwe RGB strip"
        >
          <p class="text-white font-extralight">
            De verlichting combineert rode, groene en blauwe led-lampjes in één behuizing en vormt honderden verschillende lichttinten door deze drie kleuren te mengen. Zo stel jij jouw favoriete kleuren samen wanneer je maar wilt en geniet je iedere keer weer van een unieke sfeer.
          </p>
          <p class="text-white font-extralight">
            Deze stijlvolle verlichting set wordt geleverd <strong>inclusief installatiemateriaal</strong>,
            <NuxtLink to="/blog/ip-rating-bij-led-strips-wat-betekent-ip65-lideka" class="link">IP65-waterproof</NuxtLink> bescherming en led lampjes van de hoogste kwaliteit zodat je jouw aankoop nog jarenlang kunt gebruiken. Toch niet tevreden? Lideka® garandeert jou van een 2-jarige garantie.
          </p>
          <p class="text-white font-extralight">
            Met 16 miljoen RGB-kleuren, krachtige LED-lampjes en een bijgeleverde bluetooth <strong>afstandsbediening</strong> stel jij jouw product helemaal naar wens in. Leun lekker achterover, geniet van een extra knus interieur en laat het loungen maar beginnen! Je kunt in principe oneindig <strong>veel verschillende kleurencombinaties</strong> maken.
          </p>
          <p class="text-white font-bold">
            De drie primaire kleuren:
          </p>
          <ol class="text-white font-extralight">
            <li>Rood</li>
            <li>Groen</li>
            <li>Blauw</li>
          </ol>
        </LongParagraph>
      </div>

      <CTA to="/products/rgb-led-light-strip-15-meter-smart-verlichting">
        Bekijk best verkochte RGB strip
      </CTA>

      <div class="mx-auto max-w-5xl">
        <SingleImage
            :image-src="require('assets/design/landings/rgb-led-strips/banner-6.jpg')"
            description="<h2 class='text-3xl font-bold'>Multifunctioneel</h2><p>Met handige pijltjes en <strong>snijmarkeringen</strong> knip je jouw strip gemakkelijk door op de juiste lengte. Kies je voor een futuristisch verlichte tv, trendy keuken of sfeervolle tuin? Deze <strong>multifunctionele led-strip</strong> is écht overal te gebruiken.</p>"
        />
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="RGB kleuren berekening"
        >
          <p class="text-white font-extralight">
            <a href="https://nl.wikipedia.org/wiki/RGB-kleursysteem" target="_blank" class="link rel="noopener"">RGB</a>
            is een kleurenmodel waarin het effect van een bepaalde kleur op een vlek wordt bepaald door hoeveel wit, zwart en/of rood licht die vlek weerkaatst. De naam is afgeleid van het gebruik van drie primaire kleuren: Rood, Groen en Blauw. <a href="https://nl.wikipedia.org/wiki/RGB-kleursysteem" target="_blank" class="link" rel="noopener">RGB</a> maakt drie kanalen van 24-bit kleur mogelijk met vier bytes per kleur, wat resulteert in een totaal aantal van 16,8 miljoen kleuren (24 bit x 3 = 72 bit ≈ 0,072 byte ≈ 8 bits).
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="RGB colour model"
        >
          <p class="text-white font-extralight">
            <a href="https://nl.wikipedia.org/wiki/RGB-kleursysteem" target="_blank" class="link" rel="noopener">RGB</a> colour (rood, groen, blauw) is een kleurenmodel dat de kleuren beschrijft van het licht dat door voorwerpen wordt uitgezonden of weerkaatst. RGB colour gebruikt <strong>drie primaire kleuren</strong>, additieve primaries, om alle andere kleuren te creëren.
          </p>
          <p class="text-white font-extralight">
            Het RGB colour-kleur model is ontwikkeld door deze drie primaire kleuren in <strong>verschillende hoeveelheden</strong> met elkaar te mengen. De informatie wordt in kleurenbeelden gewoonlijk gecodeerd in drie kanalen voor rood, groen en blauw.
          </p>
          <p class="text-white font-extralight">
            De hoeveelheid van elk kanaal kan worden weergegeven als een percentage, soms met een alfakanaal dat bepaalt hoeveel van het specifieke kanaal nodig is om de gewenste kleur te creëren.
            </p>
          <p class="text-white font-extralight">
            Een computer monitor meet de <strong>helderheid</strong> van deze drie kanalen met verschillende schalen voor elk kanaal. Dit creëert verschillende percepties van lichtheid voor elk kanaal en maakt het mogelijk andere kleuren te mengen, waardoor het potentieel voor miljoenen kleurencombinaties.
            </p>
          <p class="text-white font-extralight">
            RGB-informatie kan worden gebruikt om andere kleuren te creëren, maar wordt ook vaak gebruikt om de precieze mix van elk kanaal te bepalen waarmee specifieke kleuren worden gecreëerd - dit proces wordt "kleuraanpassing" genoemd.
          </p>
        </LongParagraph>
      </div>

      <CTA to="/products/rgb-led-light-strip-15-meter-smart-verlichting">
        Bekijk best verkochte RGB strip
      </CTA>

      <CenterTitle
        title="Jouw nieuwe RGB strip is:"
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

      <SingleImage :image-src="require('assets/photos/Woonkamer-3.jpg')" />

      <CenterTitle
          title="Beschikbare lengtes"
      />

      <Lenghts />

      <CenterTitle
        title="Bekijk ook eens onze andere soorten LED-strips:"
      />

      <OtherCollections
        :collections="[
            'rgb-ic-led-strips',
            'tv-led-strips',
            'led-pakketten',
        ]"
      />

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
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import QualityBlocks from "~/components/QualityBlocks.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import CTA from "~/components/CTA.vue";
import Lenghts from "~/components/Lenghts.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    Lenghts,
    CTA,
    QualityBlocks,
    LongParagraph,
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
