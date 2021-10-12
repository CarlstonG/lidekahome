<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="RGB-IC Led strips | Dreamcolor | Special Effects | Complete sets"
        description="RGB-IC Led strips"
        :imageSrc="require('assets/design/landings/rgb-ic/banner.png')"
      />

      <CenterParagraph
        description="Net als bij een standaard model vormt de RGB-IC led-strip alle mogelijke kleurtinten, maar dan met schitterende extra lichteffecten. Deze splinternieuwe vorm van led licht wordt ook wel ‘Dreamcolor Led’ genoemd en is razend populair bij onder Amerikaanse TikTokkers. Van regenboog patronen tot schietende leds of dromerige kleuren, met deze gloednieuwe editie is het mogelijk!"
      />

      <Highlights :highlights="[
          {
            imageSrc: require('assets/design/landings/tape.png'),
            description: 'Dit set wordt bovendien geleverd met dubbelzijdig tape en een directe USB-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.'
          },
          {
            imageSrc: require('assets/design/landings/rgb-ic/waterproof.png'),
            description: 'IP65-waterproof bescherming en led-lampjes van de hoogste kwaliteit'
          },
          {
            imageSrc: require('assets/design/landings/warranty.png'),
            description: 'Zo ben je verzekerd van 2 jaar garantie.'
          }
      ]" />


      <ProductsWithBackground
        title="Creëer een extra persoonlijke sfeer met RGB-IC led verlichting!"
        :collection="collection"
      />

      <CenterTitle
        title="De voordelen van jouw nieuwe RGB-IC LED-strip"
      />

      <Benefits
        :reverse="true"
        :first-block="{
          title: 'Energiebesparend',
          description: 'Energiebesparend',
          imageSrc: require('assets/design/landings/plant.png')
        }"
        :second-block="{
          title: 'Naadloze overgang',
          description: 'Naadloze overgang op het geluid van de tv',
          imageSrc: require('assets/design/landings/audio.png')
        }"
      />

      <BenefitsThreeCols
          :first-block="{
            title: 'Kleureffecten',
            description: 'Eindeloze kleureffecten',
            imageSrc: require('assets/design/landings/colors.png')
          }"
          :second-block="{
            title: 'Makkelijke bevestiging',
            description: 'Makkelijke bevestiging',
            imageSrc: require('assets/design/landings/settings.png')
          }"
          :third-block="{
            title: 'Helderheid',
            description: 'Hoge helderheid',
            imageSrc: require('assets/design/landings/brightness.png')
          }"
      />

      <SingleImage
        :image-src="require('assets/design/landings/rgb-ic/banner-2.png')"
      />

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
        :image-src="require('assets/design/landings/rgb-ic/set.png')"
        :right-data="[
          {
            title: 'De RGB-IC strips',
            description: 'IP20'
          },
          {
            title: 'Bedankt kaartje',
            description: 'Omdat we blij met je zijn'
          }
        ]"
      />

      <SingleImage :image-src="require('assets/design/landings/tv-bg.png')"
                   description="<strong class='font-bold text-2xl'>100% tevredenheidsgarantie</strong><br />Ben je niet tevreden met je aankoop? Wij betalen jouw volledige aankoopbedrag terug of je krijgt gratis een compleet nieuw set."
      />

      <LengthProducts
        :collection="collection"
        title="Welke lengtes hebben we?"
        description="Of je nu een LED-strip van 5 of 10 meter wilt, wij hebben het allebei! "
      />

      <CenterTitle
        title="Bekijk ook eens onze andere soorten LED-strips:"
      />

      <OtherCollections
        :collections="[
            'led-strip-pakketten',
            'rgb-led-strips',
            'tv-led-strips'
        ]"
      />

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
      />

      <SingleImage :image-src="require('assets/design/landings/rgb-ic/banner-3.png')" />

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

export default Vue.extend({
  components: {
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
  }
});
</script>
