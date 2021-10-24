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
            imageSrc: require('assets/icon/icons8-water-50.svg'),
            description: '<a href=\'https://nl.wikipedia.org/wiki/IP-code\' class=\'link\' target=\'blank\'>IP65-waterproof</a> bescherming en led-lampjes van de hoogste kwaliteit'
          },
          {
            imageSrc: require('assets/icon/icons8-usb-on-50.svg'),
            description: 'Word geleverd met dubbelzijdig tape.'
          },
          {
            imageSrc: require('assets/icon/icons8-warranty-50.svg'),
            description: 'Zo ben je verzekerd van 2 jaar <a class=\'link\' href=\'/pages/garantie\' target=\'blank\'>garantie</a>.'
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
        :image-src="require('assets/products/16.png')"
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

      <LongParagraph
          title="Led strip RGBIC"
      >
        <div>
          <p class="text-white font-extralight">
            Net als bij een standaard model vormt de RGBIC led <strong>alle mogelijke kleurtinten</strong>, maar dan
            met schitterende <strong>extra lichteffecten</strong>. Deze splinternieuwe vorm van led strip verlichting
            wordt ook wel ‘<strong>Dreamcolor Ledstrip</strong>’ genoemd en is razend populair bij onder Amerikaanse
            TikTokkers, en bij aanbieders zoals amazon.
          </p>
          <p class="text-white font-extralight">
            Van <strong>regenboog patronen</strong> tot schietende leds of
            dromerige kleuren, met deze gloednieuwe dreamcolor ledstrip is het mogelijk!
            Naast deze extra features werkt de RGBIC led uitvoering net als een <a class="link" target="_blank" href="https://www.straluma.nl/verlichting-tips/wat-zijn-ip-waarden-lees-alles-wat-je-moet-weten/">traditionele led-strip</a>. Zo
            ben je verzekerd van 2 jaar garantie, <a href="https://www.straluma.nl/verlichting-tips/wat-zijn-ip-waarden-lees-alles-wat-je-moet-weten/" target="_blank" class="link">IP65-waterproof</a> bescherming en led-lampjes van de
            hoogste kwaliteit. Deze nieuwe generatie strips wordt alleen maar populairder.
          </p>
          <p class="text-white font-extralight">
            Creëer een extra persoonlijke sfeer met RGBIC led verlichting! Kies voor een gave scène of
            een bepaalde kleur, bijvoorbeeld jouw favoriete kleur.
          </p>
        </div>
      </LongParagraph>

      <LongParagraph
          title="Smart IC Chip"
      >
        <div>
          <p class="text-white font-extralight">
            Een smart IC Chip of ook wel <strong>'WS2811b Chip'</strong> is de meest geavanceerde chip op de markt van dit moment, maar dat niet alleen. Deze WS2811b Chip is ook nog eens één van de <strong>nieuwste chips</strong>.
          </p>
        </div>
      </LongParagraph>

      <SingleImage :image-src="require('assets/design/landings/tv-bg.png')"
                   description="<strong class='font-bold text-2xl'>100% tevredenheidsgarantie</strong><br />Ben je niet tevreden met je aankoop? Wij betalen jouw volledige aankoopbedrag terug of je krijgt gratis een compleet nieuw set."
      />

      <LengthProducts
        :collection="collection"
        title="Welke lengtes hebben we?"
        description="Of je nu een LED-strip van 5 of 10 meter wilt, wij hebben het allebei! "
      />

      <SingleImage
          :image-src="require('assets/design/landings/rgb-led-strips/banner-5.png')"
      />

      <CenterTitle
          title="Google home"
      />

      <CenterParagraph>
        <p class="text-white font-extralight text-center">
          Vaak kan jouw nieuwe light strip ook verbonden worden met google home.
          <a href="https://nl.wikipedia.org/wiki/Google_Home" class="link" target="_blank">Google home</a> is een platform waar jij al jouw slimme apparaten kunt toevoegen en ook direct bedienen. Je zult dan een wifi RGBIC strip nodig hebben, en deze moet natuurlijk te verbinden zijn met google home, let daar goed op bij het moment van aankopen.
        </p>
        <p class="text-white font-extralight text-center mt-2">
          Je zult dan een wifi RGBIC strip nodig hebben, en deze moet natuurlijk te verbinden zijn met google home, let daar goed op bij het moment van aankopen.
        </p>
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

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Muziek modus"
          >
            <p class="text-white font-extralight">
              Door onze speciale muziek led strips kun je extra genieten, er zit een <strong>hele gevoelige</strong> microfoon in onze controllers,
              als je de muziek modus aanzet via de app of met de afstandsbediening dan zal de verlichting prachtig <strong>meedansen</strong> op de muziek.
            </p>
            <p class="text-white font-extralight">
              Als je hier nog vragen over hebt dan kun je altijd even een kijkje nemen bij onze
              <a href="/veelgestelde-vragen" class="link" target="_blank">veelgestelde vragen</a>
              of contact opnemen met de <a href="/klantenservice" target="_blank" class="link">klantenservice</a>. Ook voor extra informatie kun je bij ons terecht.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Strip lights"
          >
            <p class="text-white font-extralight">
              In landen zoals amerika hoor je vaak de term ''strip lights'' vallen, dat is een andere benaming voor ''led strips''. Er wordt eigenlijk precies hetzelfde bedoeld, het wordt alleen iets anders uitgedrukt. Er zijn wel verschillende soorten strip lights, maar dat valt ook weer onder led strips. Zo zijn er ook nog andere synoniemen voor strip lights, zoals: light strip. Het komt uiteindelijk allemaal op hetzelfde neer.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="16 Miljoen kleuren"
          >
            <p class="text-white font-extralight">
              Je leest het vaak: 16 miljoen kleuren, maar hoe komen al die aanbieders daar nu bij? Als je gaat rekenen dan kom je zelf uit op meer dan 16 miljoen kleuren. We gaan je nu uitleggen hoe dat kan. Bij RGB kleuren wordt er gebruikt gemaakt van 8 bits, zo kun je het aandeel van elke kleur in 255 stapjes uitdrukken, daardoor kunnen er 16,7 miljoen verschillende kleuren gecodeerd worden.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Betaling"
          >
            <p class="text-white font-extralight">
              We maken gebruik van een zeer geavanceerd systeem voor betalingsbeveiliging, dit systeem codeert jouw gegevens tijden een transactie en dus kun jij genieten van risicoloos shoppen.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
          <LongParagraph
              bg-color
              title="Soort lamp"
          >
            <p class="text-white font-extralight">
              Deze RGBIC led strips zijn uitgerust met de welbekende SMD 5050 leds, deze zijn bijzonder stevig, en hebben een langere levensduur. Deze zijn echt van de hoogste kwaliteit, en zorgen ervoor dat jij nog jaren kunt genieten van je nieuwe led strip.
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
