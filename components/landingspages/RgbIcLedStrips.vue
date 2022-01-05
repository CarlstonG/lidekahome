<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="RGB-IC LED-strips | Dreamcolor | Special Effects | Complete sets"
        :imageSrc="require('assets/photos/rgbic.jpg')"
      />

      <LongParagraph>
        <p class="text-white font-extralight">
          Net als bij een standaard model vormt de RGBIC <strong>alle mogelijke kleurtinten</strong>, maar dan met schitterende <strong>extra lichteffecten</strong>.
          Deze splinter nieuwe RGBIC strip verlichting wordt ook wel ‘<strong>Dreamcolor</strong>’ genoemd en is razend populair bij onder Amerikaanse TikTok kers, en bij aanbieders zoals amazon. Van regenboog patronen tot schietende leds of dromerige kleuren, met deze gloednieuwe dreamcolor ledstrip is het mogelijk!
        </p>
        <p class="text-white font-extralight">
          Naast deze extra features werkt de RGBIC uitvoering net als een traditionele <NuxtLink to="/categorie/led-strips" class="link">LED-strip</NuxtLink>.
          Zo ben je verzekerd van 2 jaar garantie, <NuxtLink class="link" target="_blank" to="/blog/ip-rating-bij-led-strips-wat-betekent-ip65-lideka">IP65-waterproof</NuxtLink> bescherming en lampjes van de hoogste kwaliteit. Deze nieuwe generatie strips wordt alleen maar populairder.
        </p>
      </LongParagraph>

      <ProductsWithBackground
          title="Creëer een extra persoonlijke sfeer met RGB-IC verlichting!"
          :collection="collection"
      />

      <VideoReviews />

<!--      <Highlights :highlights="[-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-water-50.svg'),-->
<!--            description: '<a href=\'https://nl.wikipedia.org/wiki/IP-code\' class=\'link\' target=\'blank\'>IP65-waterproof</a> bescherming en led-lampjes van de hoogste kwaliteit'-->
<!--          },-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-wrench-50.svg'),-->
<!--            description: 'Word geleverd met dubbelzijdig tape.'-->
<!--          },-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-warranty-50.svg'),-->
<!--            description: 'Zo ben je verzekerd van 2 jaar <a class=\'link\' href=\'/pages/garantie\' target=\'blank\'>garantie</a>.'-->
<!--          }-->
<!--      ]" />-->

      <CenterTitle
        title="De voordelen van jouw nieuwe RGB-IC LED-strip"
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

      <div class="mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
        <SingleImage
            :image-src="require('assets/photos/rgbic3.jpg')"
        />
        <SingleImage
            :image-src="require('assets/photos/dreamcolor.jpg')"
        />
      </div>

      <LongParagraph
          title="Smart IC Chip"
      >
        <div>
          <p class="text-white font-extralight">
            Een smart IC Chip of ook wel <strong>'WS2811b Chip'</strong> is de meest geavanceerde chip op de markt van dit moment, maar dat niet alleen. Deze WS2811b Chip is ook nog eens één van de <strong>nieuwste chips</strong>.
          </p>
        </div>
      </LongParagraph>

      <SingleImage :image-src="require('assets/photos/rgbic4.jpg')"
                   description="<strong class='font-bold text-2xl'>100% tevredenheidsgarantie</strong><br />Ben je niet tevreden met je aankoop? Wij betalen jouw volledige aankoopbedrag terug of je krijgt gratis een compleet nieuw set."
      />

      <CenterTitle
          title="Leds per meter"
      />

      <LongParagraph>
        <p class="text-white font-extralight">
          Voor een hoge kwaliteit en een hoge lichtopbrengst raden we altijd een minimum van 30 Leds per meter aan voor LED-strip tot 5 meter. Naarmate de lengte stijgt zullen automatisch het aantal lichtjes per meter aanzienlijk afnemen. Dit is noodzakelijk om ervoor te zorgen dat het licht mooi verdeeld wordt.
        </p>
        <p class="text-white font-bold">
          Aantal leds
        </p>
        <ul class="text-white font-extralight"l>
          <li>
            <NuxtLink class="link" to="/products/rgb-ic-led-light-strip-5-meter-smart-verlichting">
              Aantal lampen 5 meter: 30 P/M
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/products/rgb-ic-led-light-strip-10-meter-smart-verlichting">
              Aantal lampen 10 meter: 30 P/M
            </NuxtLink>
          </li>
        </ul>
        <p class="text-white font-bold">
          Aantal lichtsnoeren
        </p>
        <ul class="text-white font-extralight"l>
          <li>
            <NuxtLink class="link" to="/products/rgb-ic-led-light-strip-5-meter-smart-verlichting">
              Aantal lichtsnoeren 5 meter: 1x
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/products/rgb-ic-led-light-strip-10-meter-smart-verlichting">
              Aantal lichtsnoeren 10 meter: 2x
            </NuxtLink>
          </li>
        </ul>
      </LongParagraph>

      <SingleImage
          :image-src="require('assets/photos/Bed-2.jpg')"
      />

      <CTA to="/products/rgb-ic-led-light-strip-10-meter-smart-verlichting">
        Best verkocht RGBIC LED-strip
      </CTA>

      <CenterTitle
          title="Leds per meter"
      />

      <Lenghts />

      <SingleImage
          :image-src="require('assets/photos/rgbic2.jpg')"
      />

      <CenterTitle
          title="Google home"
      />

      <CenterParagraph>
        <p class="text-white font-extralight text-left">
          Vaak kan jouw nieuwe light strip ook verbonden worden met google home.
          <a href="https://nl.wikipedia.org/wiki/Google_Home" class="link" target="_blank">Google home</a> is een platform waar jij al jouw slimme apparaten kunt toevoegen en ook direct bedienen. 
        </p>
        <!-- <p class="text-white font-extralight text-left mt-2">
          Je zult dan een wifi RGBIC strip nodig hebben, en deze moet natuurlijk te verbinden zijn met google home, let daar goed op bij het moment van aankopen.
        </p> -->
      </CenterParagraph>

      <LongParagraph
        title="Google assistant"
      >
        <div>
          <p class="text-white font-extralight">
            <a class="link" target="_blank" href="https://nl.wikipedia.org/wiki/Google_Assistant">Google assistant</a> is een <strong>virtuele assistent</strong> dat in 2016 ontwikkeld is door google zelf. Je gebruikt google assistant dus in combinatie met google home.
          </p>
          <p class="text-white font-extralight">
            Om gebruik te maken van deze software heb je echter wel <strong>wifi verbinding</strong> nodig, let daarbij wel op dat een bluetooth verbinding makkelijker, en sneller zal werken.
          </p>
        </div>
      </LongParagraph>

      <CTA to="/products/rgb-ic-led-light-strip-10-meter-smart-verlichting">
        Best verkocht RGBIC LED-strip
      </CTA>

      <div class="mx-auto max-w-5xl">
          <LongParagraph
              bg-color
              title="Muziek modus"
          >
            <p class="text-white font-extralight">
              Door onze speciale muziek LED-strips kun je extra genieten, er zit een <strong>hele gevoelige</strong> microfoon in onze controllers,
              als je de muziek modus aanzet via de app of met de afstandsbediening dan zal de verlichting prachtig <strong>meedansen</strong> op de muziek.
            </p>
            <p class="text-white font-extralight">
              Als je hier nog vragen over hebt dan kun je altijd even een kijkje nemen bij onze
              <a href="/veelgestelde-vragen" class="link" target="_blank">veelgestelde vragen</a>
              of contact opnemen met de <a href="/klantenservice" target="_blank" class="link">klantenservice</a>. Ook voor extra informatie kun je bij ons terecht.
            </p>
          </LongParagraph>
      </div>

      <CenterTitle
        title="Bekijk ook eens onze andere soorten LED-strips:"
      />

      <OtherCollections
        :collections="[
            'led-pakketten',
            'rgb-led-strips',
            'tv-led-strips'
        ]"
      />

      <BlogList />

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
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
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import Lenghts from "~/components/Lenghts.vue";
import CTA from "~/components/CTA.vue";
import BlogList from "~/components/BlogList.vue";

export default Vue.extend({
  components: {
    BlogList,
    CTA,
    Lenghts,
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
    VideoReviews
  },
  props: {
    collection: {
      type: Object,
      required: true
    }
  }
});
</script>
