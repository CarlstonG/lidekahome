<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="RGB Led strips | Multicolor | Complete sets"
        description="RGB Led strips"
        :imageSrc="require('assets/design/landings/rgb-led-strips/banner.png')"
      />

      <CenterParagraph
        description="De LIDEKA® RGB multicolor LED-strip creëert een gezellige lounge sfeer en blijft muurvast zitten!
RGB-led verlichting combineert rode, groene en blauwe led-lampjes
in één behuizing en vormt honderden verschillende lichttinten door deze drie kleuren te mengen.
Zo stel jij jouw favoriete kleuren samen wanneer je maar wilt en geniet je iedere keer weer van een unieke sfeer."
      />

      <Highlights :highlights="[
          {
            imageSrc: require('assets/design/landings/tape.png'),
            description: 'Deze stijlvolle led set wordt geleverd inclusief installatiemateriaal'
          },
          {
            imageSrc: require('assets/design/landings/rgb-ic/waterproof.png'),
            description: 'IP65-waterproof bescherming en led lampjes van de hoogste kwaliteit zodat je jouw aankoop nog jarenlang kunt gebruiken'
          },
          {
            imageSrc: require('assets/design/landings/warranty.png'),
            description: 'Toch niet tevreden? Lideka® garandeert jou van een 2-jarige garantie'
          }
      ]" />


      <ProductsWithBackground
        title="Thuis genieten van die fijne lounge vibes? Bestel jouw RGB led-strip vandaag nog!"
        :collection="collection"
      />

      <CenterTitle
        title="Jouw nieuwe RGB led-strip is:"
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
        :image-src="require('assets/design/landings/rgb-led-strips/banner-2.png')"
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
            title: 'De RGB strips',
            description: 'IP20'
          },
          {
            title: 'Adapter',
            description: 'Hoge kwaliteit kunststof'
          },
          {
            title: 'Bedankt kaartje',
            description: 'Omdat we blij met je zijn'
          }
        ]"
      />

      <SingleImage :image-src="require('assets/design/landings/rgb-led-strips/banner-3.png')" />

      <LengthProducts
        :collection="collection"
        title="Beschikbare lengtes:"
        description="Of je nu een LED-strip van 3 meter, 5 meter, 10 meter, 15 meter of 20 meter wilt,
        wij hebben het allemaal!"
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

      <SingleImage :image-src="require('assets/design/landings/rgb-led-strips/banner-4.png')" />

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
