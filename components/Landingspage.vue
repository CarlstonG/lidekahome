<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="RGB TV Led strips | 16 miljoen kleuren | Complete sets"
        description="TV LED-STRIPS"
        :imageSrc="require('assets/design/landings/banner.jpg')"
      />

      <CenterParagraph
        description="Een led-strip achter je TV creëert een stijlvolle lichtgloed rondom het scherm en geeft jouw huiskamer een echte bioscoop sfeer. Maar deze handige strips zijn veel meer dan alleen mooi en zorgen ook voor een subtielere overgang tussen licht en donker. Zo worden jouw ogen minder snel moe en kijk je extra comfortabel naar jouw favoriete films & shows."
      />

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


      <ProductsWithBackground
        title="Transformeer jouw ruimte tot thuisbioscoop met onze multifunctionele TV led-strips!"
        :collection="collection"
      />

      <CenterTitle
        title="De voordelen van jouw nieuwe RGB TV LED-strip"
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

      <SingleImage :image-src="require('assets/design/landings/tv-bg.jpg')"
                   description="Wij staan volledig achter de kwaliteit van onze producten en bieden jou een onvoorwaardelijke garantie van 24 maanden.<br />
          Niet tevreden met jouw aankoop of loop je tegen problemen aan?<br />
          Wij betalen je het aankoopbedrag zonder probleem terug of zorgen voor een vervangend exemplaar."
      />

      <LengthProducts
        :collection="collection"
        title="Uit welke lengtes kan je kiezen?"
        description="Wij leveren TV Led strips van 2 en 3 meter."
      />

      <CenterTitle
        title="Bekijk ook eens onze andere soorten LED-strips:"
      />

      <OtherCollections
        :collections="[
            'led-strip-pakketten'
        ]"
      />

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
