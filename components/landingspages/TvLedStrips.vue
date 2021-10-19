<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="RGB TV Led strips | 16 miljoen kleuren | Complete sets"
        description="TV LED-STRIPS"
        :imageSrc="require('assets/design/landings/banner.png')"
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
        style="margin-top: 80px;"
      />

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Compleet pakket"
          >
            <p class="text-white font-extralight">
              Dit set is echt helemaal compleet en je hebt geen extra kabel meer nodig. Je zou er wel nog hoekconnectoren bij kunnen gebruiken maar deze raden wij sterk af. Onze TV led strips zijn enorm flexibel en deze kun je zonder te knippen achter op een TV plakken.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Waarschuwing"
          >
            <p class="text-white font-extralight">
              Let AUB goed op het feit dat sommige TV's niet voldoende stroom geven aan de led strip, in dit geval raden we je aan om een USB adapter te gebruiken, deze zijn overal te verkrijgen. Je kunt dit ontdekken door gewoon te kijken naar de manier waarop de led strip functioneert. Bij vragen kun je altijd even contact opnemen met de klantenservice.
            </p>
          </LongParagraph>
        </div>
      </div>

      <SingleImage
        :image-src="require('assets/design/landings/tv-green.png')"
        description="<h2 class='font-bold text-3xl'>TV verlichting goed voor de ogen</h2><p>Er zijn meerdere studies en onderzoeken geweest naar het gebruik van TV led strips, en daar is keer op keer uitgekomen dat het goed voor de ogen is. Vooral de wat zachtere kleuren zoals rood doen het enorm goed, het brengt je ogen en mind tot rust en het laat je meer ontspannen.</p>"
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
            Er zijn bepaalde softwares zoals google assistent en amazon alexa die dit soort apparaten kunnen bedienen. Echter is dat bij TV Led strips vaak overbodig aangezien deze vanzelf al aan en uit gaan met de TV.
          </p>
        </LongParagraph>
      </div>

      <SingleImage
          :image-src="require('assets/design/landings/banner-2.png')"
      />

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            title="Led verlichting"
        >
          <p class="text-white font-extralight">
            De meeste mensen denken bij verlichting aan elektriciteit en de daaraan verbonden risico's, en het is waar dat elk elektrisch apparaat brand kan veroorzaken. Velen gebruiken ze zelfs als sfeerverlichting omdat ze vaak dimbaar zijn, en je veel meer keuze hebt in kleur. Led verlichting is bijzonder duurzaam en wordt steeds vaker gebruikt in en om het huis. Lampen gaan langer mee dan gewone verlichtingsarmaturen en produceren minder warmte in het milieu.
          </p>
          <p class="text-white font-extralight">
            LED lampen bevatten geen kwik, in tegenstelling tot fluorescentielampen die grote hoeveelheden kwik bevatten en kunnen versplinteren als ze op een harde vloer vallen of als er een dier op valt. Omdat dit soort ongelukken soms gebeuren, moeten deze lampen vanwege hun gevaarlijke bestanddelen met zorg worden weggegooid bij speciale recyclingcentra. Door het gebruik van LED-verlichting voor uw huis of bedrijf bespaart u niet alleen geld, maar beschermt u ook het milieu!
            Dit zijn slechts enkele van de manieren waarop u de opwarming van de aarde kunt helpen voorkomen. Het gebruik van deze ongewone soorten lampen zal u helpen elektriciteit te besparen en tegelijkertijd de broeikasgassen te verminderen die bijdragen tot de klimaatverandering! LED-verlichting voor thuis of voor uw bedrijf is een geweldige manier om groen te zijn, omdat ze u helpen geld te besparen en tegelijkertijd de CO2-uitstoot te verminderen.
          </p>
          <p class="text-white font-extralight">
            Led lampen worden niet beïnvloed door stroompieken, ze flikkeren niet bij 60 Hz zoals sommige fluorescentielampen doen, dus de meeste mensen merken het niet eens als ze worden ingeschakeld. Ze kunnen zonder afdekkingen worden gebruikt in afgesloten ruimtes, omdat er geen risico is op verwondingen door gebroken glas als zich onverwacht een defect voordoet. En in tegenstelling tot compacte fluorescentielampen die kwik bevatten, bevatten led lampen helemaal geen gevaarlijke stoffen.
          </p>
        </LongParagraph>
      </div>

      <CenterTitle
          title="De voordelen van jouw nieuwe RGB TV LED-strip"
      />

      <Benefits
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
            title: 'Kleuren',
            description: '16 miljoen kleuren',
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
        :image-src="require('assets/design/landings/tv-pakket.png')"
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

      <SingleImage :image-src="require('assets/design/landings/tv-bg.png')"
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
            'rgb-led-strips',
            'rgb-ic-led-strips',
            'led-pakketten',
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
import LongParagraph from "~/components/blocks/LongParagraph.vue";

export default Vue.extend({
  components: {
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
