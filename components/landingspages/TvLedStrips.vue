<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        :imageSrc="require('assets/photos/TV-1.jpg')"
      />

      <div class="mt-4">
        <CenterTitle
            tag="h1"
            title="RGB TV LED-strips"
        />
      </div>

      <LongParagraph>
        <p class="text-white font-extralight">
          Een led-strip achter je TV creëert een stijlvolle lichtgloed rondom het scherm en geeft jouw huiskamer een echte bioscoop sfeer. Maar deze handige strips zijn veel meer dan alleen mooi en zorgen ook voor een subtielere overgang tussen licht en donker. Zo worden jouw ogen minder snel moe en kijk je extra comfortabel naar jouw favoriete films & shows.
        </p>
        <p class="text-white font-extralight">
          Dit set wordt bovendien geleverd met dubbelzijdig tape en een directe USB-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.
        </p>
        <p class="text-white font-extralight">
          Als je TV toevallig geen USB aansluiting heeft dan kun je heel gemakkelijk de USB adapter van bijvoorbeeld je telefoon gebruiken.
        </p>
        <p class="text-white font-extralight">
          Naast deze slimme functies wordt ook dit Lideka® model geleverd met led-lampjes van de hoogste kwaliteit en een onvoorwaardelijke garantie van 2 jaar.
        </p>
        <p class="text-white font-extralight">
          Transformeer jouw ruimte tot thuisbioscoop met onze multifunctionele TV led-strips!
        </p>
      </LongParagraph>

      <ProductsWithBackground
          title="Transformeer jouw ruimte tot thuisbioscoop met onze multifunctionele TV led-strips!"
          :collection="collection"
          style="margin-top: 80px;"
      />

      <VideoReviews />

<!--      <CenterTitle-->
<!--          title="Jouw nieuwe RGB led-strip is:"-->
<!--      />-->

<!--      <Highlights :highlights="[-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-best-seller-50.svg'),-->
<!--            description: 'Door zijn bijzondere stevige dubbelzijge 3M tape ben jij verzekerd van een LED-strip die nooit meer loslaat. Zorg voor een schone ondergrond.'-->
<!--          },-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-usb-on-50.svg'),-->
<!--            description: 'Dit set wordt bovendien geleverd met  een directe USB-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.'-->
<!--          },-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-warranty-50.svg'),-->
<!--            description: 'Naast deze slimme functies wordt ook dit Lideka® model geleverd met led-lampjes van de hoogste kwaliteit en een onvoorwaardelijke garantie van 2 jaar.'-->
<!--          }-->
<!--      ]" />-->

      <div class="mx-auto ">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Compleet pakket"
          >
            <p class="text-white font-extralight">
              Dit set is echt helemaal compleet en je hebt geen extra kabel meer nodig. Je zou er wel nog hoekconnectoren bij kunnen gebruiken maar deze raden wij sterk af. Onze TV LED-strips zijn enorm flexibel en deze kun je zonder te knippen achter op een TV plakken. Vanwege de USB poort is installeren nog makkelijker.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Incl app"
          >
            <p class="text-white font-extralight">
              Wil je gewoon even en vaste kleur zien in plaats van verlichting dat meegaat op de muziek? Dat is met deze geavanceerde Tv strips helemaal mogelijk. Je krijgt namelijk toegang tot de Lideka Home app. Hiermee kun je zelf de kleuren kiezen en ook dimmen als je graag wat sfeerverlichting wilt.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto ">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Waarschuwing"
          >
            <p class="text-white font-extralight">
              Let AUB goed op het feit dat sommige TV's niet voldoende stroom geven aan USB poort, in dit geval raden we je aan om een USB adapter te gebruiken, deze zijn overal te verkrijgen. Je kunt dit ontdekken door gewoon te kijken naar de manier waarop de LED-strip functioneert. Bij vragen kun je altijd even contact opnemen met de klantenservice.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="TV verlichting goed voor de ogen"
          >
            <p class="text-white font-extralight">
              Er zijn meerdere studies en onderzoeken geweest naar het gebruik van TV LED-strips, en daar is keer op keer uitgekomen dat het goed voor de ogen is. Vooral de wat zachtere kleuren zoals rood doen het enorm goed, het brengt je ogen en mind tot rust en het laat je meer ontspannen.
            </p>
          </LongParagraph>
        </div>
      </div>

      <CTA to="/products/lideka-tv-led-strip-3-meter-usb-rgb-smart-verlichting">
        Bekijk meest verkochte LED-strip
      </CTA>

      <SingleImage
        :image-src="require('assets/photos/remote.jpg')"
        description="<h2 class='font-bold text-3xl'>TV verlichting goed voor de ogen</h2><p>Er zijn meerdere studies en onderzoeken geweest naar het gebruik van TV LED-strips, en daar is keer op keer uitgekomen dat het goed voor de ogen is. Vooral de wat zachtere kleuren zoals rood doen het enorm goed, het brengt je ogen en mind tot rust en het laat je meer ontspannen.</p>"
      />

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Indirecte verlichting"
          >
            <p class="text-white font-extralight">
              Deze TV strip sets kunnen perfect gebruikt worden als indirecte verlichting, daar zijn ze immers voor bedoeld. Lees ook goed de nederlandse handleiding zodat jij een echte verlichting specialist kunt worden. Mocht je al een verlichting specialist zijn dan horen we graag wat wij nog kunnen verbeteren aan onze artikelen.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Kleuren verlichting"
          >
            <p class="text-white font-extralight">
              Deze verlichting heeft echt een bijzonder breed scala aan kleuren 16 miljoen+ kleuren maar liefst. Je kunt je dromerige kleuren instellen, ja favoriete kleuren, fellere kleuren, maar ook een kleur helder blauw bijvoorbeeld. De mogelijkheden zijn echt oneindig.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Verbindingen"
        >
          <p class="text-white font-extralight">
            Er zijn bepaalde softwares zoals google assistent en amazon alexa die dit soort apparaten kunnen bedienen. Echter is dat bij TV LED-strips vaak overbodig aangezien deze vanzelf al aan en uit gaan met de TV.
          </p>
          <p class="text-white font-extralight">
            <strong>USB Poort</strong>
          </p>
          <p class="text-white font-extralight">
            De complete sets van Lideka worden direct aangesloten op alle TV's met een USB poort, nu hebben niet alle TV's een USB poort. Dat is geen probleem, je kunt een een adapter kopen met een USB poort en daar dan de TV LED-strip direct op aansluiten. Houd er ook rekening mee dat niet alle TV's voldoende stroom geven op de USB poort. Een USB poort is vooral enorm handig als je weinig ruimte hebt voor een extra stekker.
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Ledstrip op maat"
        >
          <p class="text-white font-extralight">
            Deze strips van Lideka zijn volledig op maat te knippen, je hebt er geen speciale schaar voor nodig. Meestal kun je rond de +- 5 a 10 cm de strip netjes afknippen. Het is een bijzondere kwaliteit LED waardoor je met een gerust hard deze led-strip kunt knippen op maat.
          </p>
        </LongParagraph>
      </div>

      <CTA to="/products/lideka-tv-led-strip-3-meter-usb-rgb-smart-verlichting">
        Bekijk meest verkochte LED-strip
      </CTA>

      <SingleImage
          :image-src="require('assets/photos/TV3.jpg')"
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

      <CTA to="/products/lideka-tv-led-strip-3-meter-usb-rgb-smart-verlichting">
        Bekijk meest verkochte LED-strip
      </CTA>

      <SingleImage :image-src="require('assets/photos/tv-last.jpg')"
                   description="Wij staan volledig achter de kwaliteit van onze producten en bieden jou een onvoorwaardelijke garantie van 24 maanden.<br />
          Niet tevreden met jouw aankoop of loop je tegen problemen aan?<br />
          Wij betalen je het aankoopbedrag zonder probleem terug of zorgen voor een vervangend exemplaar."
      />


      <CenterTitle
          title="Uit welke lengtes kan je kiezen?"
      />

      <Lenghts />

      <CenterTitle
        title="Bekijk ook eens onze andere soorten LED-strips:"
      />

      <OtherCollections
        :collections="[
            'rgb-led-strips',
            'rgb-ic-led-strips',
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
