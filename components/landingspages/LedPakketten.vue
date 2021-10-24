<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="LED-strip pakketten | Combineren | Complete sets"
        description="LED PAKKETTEN"
        :imageSrc="require('assets/design/landings/led-pakketten/banner.png')"
      />

      <TextWithImage
          title="LED-strip pakketten"
          imageAlt="LED-strip pakketten"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-1.png')"
          url="/"
      >
        <p class="text-white font-extralight">
          Voor de echte liefhebbers hebben we complete LED pakketten. Deze LED pakketten bestaan uit TV Led strips, en RGB Led strips. Beiden soorten bestaan uit complete sets.
        </p>
        <p class="text-white font-extralight">
          Met een uitstekende plakstrip die nooit meer laat, en eindeloze kleurencombinaties is dit een bijzonder pakket.
        </p>
      </TextWithImage>

      <TextWithImage
          title="RGB LED-strip"
          imageAlt="RGB LED-strip"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-2.png')"
          url="/"
          reverse="true"
      >
        <p class="text-white font-extralight">
          De RGB LED-strip beschikt over een breed scala aan kleuren, rood, blauw, groen het zit er allemaal bij. Kies, combineer en bepaal zelf wanneer je welke combinatie wilt zien.
        </p>
        <p class="text-white font-extralight">
          Door middel van een moderne en geavanceerde afstandsbediening is het makkelijker dan ooit om de LED-strips te bedienen, maar dat niet alleen, onze uitgebreide app beschikt ook over oneindige functies en mogelijkheden.
        </p>
      </TextWithImage>

      <TextWithImage
          title="TV LED-strip"
          imageAlt="TV LED-strip"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-3.png')"
          url="/"
      >
        <p class="text-white font-extralight">
          De TV LED-strip beschikt over een enorm stevige plakstrip, waardoor hij nooit meer loslaat. Door de flexibiliteit van de strip was het nog nooit zo makkelijk om deze te installeren.
        </p>
        <p class="text-white font-extralight">
          Met een naadloze overgang op het geluid van de TV, Computer of Game console, ben jij verzekerd van een unieke kijk of speelervaring!
        </p>
      </TextWithImage>

      <Highlights :highlights="[
          {
            imageSrc: require('assets/icon/icons8-best-seller-50.svg'),
            description: 'Door zijn bijzondere stevige dubbelzijge 3M tape ben jij verzekerd van een LED-strip die nooit meer loslaat. Zorg voor een schone ondergrond.'
          },
          {
            imageSrc: require('assets/icon/icons8-usb-on-50.svg'),
            description: 'Dit set wordt bovendien geleverd met  een directe USB-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.'
          },
          {
            imageSrc: require('assets/icon/icons8-warranty-50.svg'),
            description: 'Naast deze slimme functies wordt ook dit Lideka® model geleverd met led-lampjes van de hoogste kwaliteit en een onvoorwaardelijke garantie van 2 jaar.'
          }
      ]" />


      <ProductsWithBackground
        title="Thuis genieten van die fijne lounge vibes? Bestel jouw RGB led-strip vandaag nog!"
        :collection="collection"
      />

      <CenterTitle
        title="De voordelen van jouw nieuwe LED strips"
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

      <SingleImage
        :image-src="require('assets/design/landings/led-pakketten/banner2.png')"
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
        :image-src="require('assets/products/18.png')"
        :right-data="[
          {
            title: 'De TV Strips',
            description: 'IP20'
          },
          {
            title: 'USB aansluiting',
            description: 'Hoge kwaliteit kunststof'
          },
          {
            title: 'Bedankt kaartje',
            description: 'Omdat we blij met je zijn'
          }
        ]"
      />

      <SingleImage :image-src="require('assets/design/landings/led-pakketten/satisfy.png')"
                   description="<div class='font-bold text-2xl'>100% tevredenheidsgarantie.</div> Wij staan volledig achter de kwaliteit van onze producten en bieden jou een onvoorwaardelijke garantie van 24 maanden."
      />

      <div class="mx-auto max-w-7xl px-6 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-10 lg:py-24 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-32 mx-auto" src="~assets/icon/icons8-return-purchase-50.svg" />
              </div>
              <h2 class="text-white font-bold text-center text-xl uppercase tracking-wide pt-6 px-6 lg:px-20">
                60 dagen gratis retourneren
              </h2>
              <p class="text-white font-extralight text-center pt-6 px-6 lg:px-20">
                Omdat wij geloven in service, en jou willen voorzien van een risicoloze aankoop geven we in eerste instantie 60 dagen gratis retourneren.
              </p>
            </div>
          </div>
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-10 lg:py-24 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-32 mx-auto" src="~assets/icon/icons8-technical-support-50.svg" />
              </div>
              <h2 class="text-white font-bold text-center text-xl uppercase tracking-wide pt-6 px-6 lg:px-20">
                24/7 ondersteuning beschikbaar
              </h2>
              <p class="text-white font-extralight text-center pt-6 px-6 lg:px-20">
                Lideka staat overigens 24/7 klaar om al jouw vragen te beantwoorden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LengthProducts
        :collection="collection"
        title="Uit welke lengtes kan je kiezen?"
        description="Wij leveren pakketten van 3 meter, 5 meter, 10 meter, 15 meter, en 20 meter."
      />

      <CenterTitle
        title="Bekijk ook eens onze andere soorten LED-strips:"
      />

      <OtherCollections
        :collections="[
            'rgb-ic-led-strips',
            'rgb-led-strips',
            'tv-led-strips'
        ]"
      />

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
      />

      <SingleImage :image-src="require('assets/design/landings/sitting-tv.png')" />

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

export default Vue.extend({
  components: {
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
  }
});
</script>
