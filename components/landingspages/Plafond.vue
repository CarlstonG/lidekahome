<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">


      <Banner
        :imageSrc="require('assets/design/landings/plafond/banner.jpg')"
      />

      <CenterTitle title="Led strips plafond" />

      <LongParagraph>
        <div class="text-center">
          <p class="text-white font-extralight">
            Led strips in de badkamer geven een gezellige sfeer. Met led strips kunt u zelfs een bepaalde sfeer creëren, misschien bent u niet in de stemming voor een rustige sfeer en wilt u iets ruigers, led strips zullen precies dat doen.
          </p>
          <p class="text-white font-extralight">
            Voor een goede verlichting met je echt stap voor stap te werk gaan, je ziet namelijk snel dingen over het hoofd. Er komen veel aspecten bij kijken. Je wilt natuurlijk een strakke afwerking. Badkamer ledstrips vereisen strakke lichtlijnen, en de beste led lampjes.
          </p>
          <p class="text-white font-extralight">
            Als je snel de juiste verlichting in huis wilt halen voor de beste sfeer dan raden we RGB of RGBIC led strips aan, deze gaan bijzonder lang mee en hebben heel veel verschillende kleuren.
          </p>
        </div>
      </LongParagraph>

      <CenterTitle title="Kies zelf uit de volgende 2 soorten RGB of RGB-IC." />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED Strips"
          :collection="collection1"
      />

      <CenterParagraph description="RGB Led verlichting staat bekend om zijn vele kleuren, 16 miljoen maar liefst. Hij is op afstand bestuurbaar, en kan verbonden worden met onze eigen app. Mede door zijn bijzonder sterke plakstrip is hij meer dan geschikt voor het plafond." />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <CenterParagraph description="RGB-IC lijkt veel op de RGB versie, maar heeft net nog een extra functie erbij die zeer aangenaam is. Je kunt met de RGB-IC namelijk verschillende kleuren Led’s tegelijk voor de strip heen laten schieten, en dat geeft echt een gaaf effect. Dit set wordt ook compleet geleverd." />

      <SingleImage :image-src="require('assets/design/landings/plafond/banner2.jpg')" />

      <CenterTitle title="SMD 5050 LEDS" />

      <CenterParagraph description="Vanwege de hoge kwaliteit SMD 5050 leds is onze led strip verlichting meer dan geschikt voor een grote en een kleine ruimte. De SMD 5050 leds brengen drie keer zoveel licht op als de oude leds." />


      <div class="mx-auto max-w-5xl">
        <LongParagraph
          :bg-color="true"
          title="Led strip profiel"
        >
          <p class="text-white font-extralight">
            Een led profiel heeft enkele voordelen, maar het is zeker niet noodzakelijk. Het heeft echter wel een positieve invloed op de led strips. Je hebt altijd keuze uit meerdere profielen waaronder aluminium profielen, deze gaan lang mee en zijn licht in gewicht.
          </p>

          <p class="text-white font-extralight">
            Een led profiel is vooral handig als je opzoek bent naar indirect licht. Aluminium profielen kunnen jouw ruimte een luxe touch geven, zeker als je gebruik maakt van zacht licht en dit licht egaal verspreid wordt.
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <TextWithImage image-alt="Badkamerverlichting" :image-src="require('assets/design/landings/plafond/indirect.jpg')" title="Indirecte woonkamer verlichting">
          <p class="text-white font-extralight">
            Ledstrip verlichting is een uitstekende toepassing als het gaat om indirecte verlichting. Vaak word sfeervolle verlichting aangeraden voor de woonkamer, en dat is begrijpelijk aangezien we allemaal houden van extra sfeer in de woonkamer.
            Als je echt speciale woonkamer verlichting nodig hebt, dan ben je hier aan het juiste adres. De RGB en de RGBIC zijn daar meer dan geschikt voor. Bij een compleet set krijg je altijd een Led strip controller, een Led strip afstandsbediening en, een Led strip voeding.
          </p>
          <p class="text-white font-extralight">
            Je kunt ook kiezen voor RGBW strips in de woonkamer, dan kun je ook nog kiezen uit een een strip koud of strip warm. Om de juiste sfeer te maken kan dit best helpen.
          </p>
        </TextWithImage>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
          title="Led lamp"
          :bg-color="true"
        >
          <p class="text-white font-extralight">
            Nu veel mensen klagen over de stijgende elektriciteitskosten, is het niet verwonderlijk dat alternatieve energiebronnen steeds populairder worden.
          </p>

          <p class="text-white font-extralight">
            Een van deze middelen is de LED-lamp, of Light-Emitting Diode (LED). Deze lampen verbruiken 80% minder energie dan traditionele gloeilampen en ze gaan tot 25 keer langer mee
          </p>

          <p class="text-white font-extralight">
            Dus in deze tijd waarin geld besparen op onze energierekeningen belangrijk is, zijn LED's een ideale oplossing. In dit artikel gaan we in op enkele van de beste redenen waarom u onmiddellijk op LED's zou moeten overschakelen.
          </p>

          <h3 class="uppercase text-white text-4xl">Geen kwik</h3>

          <p class="text-white font-extralight">
            Het gemiddelde huishouden heeft vijf lampen per huis, wat voor de meeste gezinnen betekent dat er elk jaar minstens één lamp gevuld is met kwik. De het kwik dat in deze lampen wordt gebruikt, kan mogelijk in de bodem lekken, wat een effect heeft op ons drinkwater.
          </p>

          <h3 class="uppercase text-white text-4xl">LED's bevatten geen kwik, dus er is geen kans op besmetting</h3>

          <p class="text-white font-extralight">
            Dit betekent ook dat het opruimen na een kapotte lamp veel eenvoudiger is - u hoeft uw schoenen niet uit te trekken bij de deur of ervoor te zorgen dat u alle sporen hebt verwijderd!
          </p>

          <h3 class="uppercase text-white text-4xl">Het aan- en uitzetten van LED's heeft geen invloed op hun levensduur</h3>

          <p class="text-white font-extralight">
            Een traditionele gloeilamp gaat ongeveer 1.000 uur mee als u hem één keer per dag aan en uit zet, maar als u hem aan zet en laat zitten is dat meer dan 5 jaar levensduur! Maar met de LED-lamp gaat hij, zelfs als hij altijd aan is, nog steeds ongeveer 25 keer langer mee dan een gewone gloeilamp.
          </p>

          <h3 class="uppercase text-white text-4xl">LED's produceren minder warmte en zijn veiliger om aan te raken</h3>

          <p class="text-white font-extralight">
            De LED geeft geen warmte af dankzij het lage stroomverbruik, en ook al is de werkelijke bedrijfstemperatuur hoog (dit is wat ze oplaadt), toch is deze veel lager dan bij traditionele gloeilampen
          </p>
          <p class="text-white font-extralight">
            Bovendien zijn ze veilig - je kunt een LED-lamp aanraken zonder een schok te krijgen omdat LED's geen elektriciteit opwekken tenzij er weerstand is. Als er een uitgaat, is het nog steeds veilig om aan te raken omdat er geen kortsluiting is zoals bij traditionele gloeilampen, waardoor ze kunnen breken of exploderen wanneer ze worden ingeschakeld.
          </p>

          <h3 class="uppercase text-white text-4xl">Ze besparen u geld in energiekosten en vervangingskosten</h3>

          <p class="text-white font-extralight">
            Omdat deze lampen zo lang meegaan, betekent het verminderde aantal vervangingen dat u duizenden euro's bespaart gedurende hun hele levensduur. En omdat ze zo veel minder energie verbruiken, bespaart u nog meer op uw energierekeningen!
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
            title="Lengtes"
          >
            <p class="text-white font-extralight">
              Bij Lideka hebben we een ruime keuze in lengtes, iedere kamer is anders en zo ook ieder plafond. We raden je altijd aan om voor je bestelling goed te kijken welke lengte je nodig hebt. Je hebt tevens altijd de mogelijkheid om onze led strip op maat te maken.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Ondergronden"
          >
            <p class="text-white font-extralight">
              Er zijn best wel een aantal dingen waarom je moet letten als je een strip gaat uitkiezen voor jouw plafond. Ieder ondergrond is natuurlijk anders, en wat je niet wilt is dat jouw nieuwe verlichting na een aantal weken naar beneden komt. Daarom raden we je altijd aan te kijken naar 3M tape, 3M tape is enorm sterk en laat op bijna iedere ondergrond niet meer los.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <TextWithImage image-alt="Slaapkamer" :image-src="require('assets/design/landings/plafond/slaapkamer.jpg')" title="Slaapkamer">
          <p class="text-white font-extralight">
            Als je houd van een gezellige slaapkamer dan is RGB verlichting echt iets voor jou. Onze ervaring is dat je een gewone slaapkamer binnen no-time kan omtoveren naar een ware lichtshow. Door middel van een RGB led strip is het ook nog eens een gemakkelijke oplossing. De installatie is namelijk enorm makkelijk.
          </p>
        </TextWithImage>
      </div>

      <SingleImage
        :image-src="require('assets/design/landings/plafond/banner3.png')"
      />

      <CenterTitle title="Wit licht" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Je kunt ook wit licht gebruiken om sfeer in huis te brengen, het nadeel is dat je dan 1 vaste kleur hebt. Daarom is een juist keuze toch vaak RGB ledverlichting. Hiermee heb je nu eenmaal meer keuze en kun je voor elke setting de juiste kleur instellen.
        </p>
        <p class="text-white font-extralight">
          Waarom zou ik deze LED-strips nemen voor mijn plafond?
        </p>
        <p class="text-white font-extralight">
          Zoals eerder al aangegeven is een sterke strip enorm belangrijk, je wilt namelijk niet dat de strip na een paar maanden los komt, en daar heeft Lideka aan gedacht.
        </p>
        <p class="text-white font-extralight">
          Als je nog opzoek bent naar inspiratie voor je plafond, of andere producten, dan kun je altijd even kijken op pinterest.
        </p>
        <p class="text-white font-extralight">
          Verder is een hoge helderheid ook belangrijk, met name omdat een ruimte met een plafond vaak erg groot uitvalt. Daarom maakt Lideka gebruikt van de nieuwste SMD 5050 Led’s, deze hebben drie keer zoveel lichtopbrengst als een normale Led.
        </p>
        <p class="text-white font-extralight">
          Daarnaast staat Lideka 24/7 klaar om al jouw vragen te beantwoorden. Als klant heb je altijd de optie om te ruilen of om jouw artikel gratis te retourneren.
        </p>
      </LongParagraph>

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
import {getCollection} from "~/services/ApiService";
import Steps from "~/components/blocks/Steps.vue";
import SingleImageWithContent from "~/components/blocks/SingleImageWithContent.vue";
import LongParagraph from "~/components/blocks/LongParagraph.vue";

export default Vue.extend({
  components: {
    LongParagraph,
    SingleImageWithContent,
    Steps,
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
  },

  data() {
    return {
      collection1: null as null|{},
      collection2: null as null|{},
      collection3: null as null|{},
      collection4: null as null|{},
    }
  },

  created() {
    this.getCollection();
  },

  methods: {
    async getCollection() {
      this.collection1 = await getCollection('rgb-led-strips', {
        reverseImages: true,
        sortKey: 'PRICE',
      });

      this.collection2 = await getCollection('tv-led-strips', {
        reverseImages: true,
        sortKey: 'PRICE',
      });

      this.collection3 = await getCollection('rgb-ic-led-strips', {
        reverseImages: true,
        sortKey: 'PRICE',
      });

      this.collection4 = await getCollection('led-pakketten', {
        reverseImages: true,
        sortKey: 'PRICE',
      });
    }
  },
});
</script>
