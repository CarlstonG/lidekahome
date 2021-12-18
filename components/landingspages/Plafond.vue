<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">


      <Banner
        :imageSrc="require('assets/design/landings/plafond/banner.jpg')"
      />

      <CenterTitle title="LED-strips plafond" />

      <LongParagraph>
        <div class="text-left">
          <p class="text-white font-extralight">
            Zoek je heldere, kwalitatieve <a href="/categorie/led-strips" class="link">LED-strips</a> voor het
            <strong>plafond?</strong> Dan ben je bij Lideka aan het juiste adres. Wij focussen ons puur op <strong>betaalbare en kwalitatieve</strong>
            <a class="link" href="/categorie/led-strips">LED verlichting</a>. Doordat al onze LED-strips uitgerust zijn met het <strong>allersterkste 3M tape</strong> ben jij verzekerd van een goede aankoop.
          </p>
          <p class="text-white font-extralight">
            Maar dat niet alleen, onze LED-strips hebben <strong>talloze mogelijkheden</strong> en functies, van <strong>tijdschema’s</strong> tot eigen
            <strong>kleurencombinaties</strong> en veel meer….
          </p>
          <p class="text-white font-extralight">
            Je hebt een <strong>ruime keuze</strong> als het gaat om kleuren samenstelling en tijdschema's.
          </p>
          <p class="text-white font-extralight">
            We hebben 2 uitstekende soorten LED-strips in ons assortiment, beiden worden geleverd als een <strong>compleet set</strong>, en verder heb je dus niets meer nodig.
          </p>
          <p class="text-white font-extralight">
            Benieuwd naar het positieve effect van <a href="/blog/tv-led-strips-een-nieuwe-vorm-van-televisie-kijken" class="link">TV Led-strips?</a> Lees hier onze blog.
          </p>
        </div>
      </LongParagraph>

      <CenterTitle title="Kies zelf uit de volgende 2 soorten RGB of RGB-IC." />

      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED-strips"
          :collection="collection1"
      />

      <CenterParagraph>
        <p class="text-white font-extralight">
          <a class="link" href="/products/led-strip-5-meter">RGB Led verlichting</a> staat bekend om zijn vele kleuren, 16 miljoen maar liefst. Hij is op afstand bestuurbaar, en kan verbonden worden met <strong>onze eigen app.</strong> Mede door zijn <strong>bijzonder sterke plakstrip</strong> is hij meer dan geschikt voor het plafond.
        </p>
      </CenterParagraph>

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED-strips"
          :collection="collection3"
      />

      <CenterParagraph>
        <p class="text-white font-extralight">
          RGB-IC lijkt veel op de RGB versie, maar heeft net nog een extra functie erbij die zeer aangenaam is.
          Je kunt met de <a href="/products/led-strip-5-meter-1-meter-van-lideka-rgb" class="link">RGB-IC</a> namelijk <strong>verschillende
          kleuren Led’s tegelijk</strong> voor de strip heen laten schieten, en dat geeft echt een <strong>gaaf effect.</strong> Dit set wordt ook compleet geleverd.
        </p>
      </CenterParagraph>

      <SingleImage :image-src="require('assets/design/landings/plafond/banner2.jpg')" />

      <CenterTitle title="SMD 5050 LEDS" />

      <CenterParagraph>
        <p class="text-white font-extralight">
          Vanwege de hoge kwaliteit <strong>SMD 5050 leds</strong> is onze
          LED-strip verlichting meer dan geschikt voor een <strong>grote en een kleine ruimte.</strong>
          De SMD 5050 leds brengen <strong>drie keer zoveel licht</strong> op als de oude leds.
        </p>
      </CenterParagraph>


      <div class="mx-auto max-w-5xl">
        <LongParagraph
          :bg-color="true"
          title="LED-strip profiel"
        >
          <p class="text-white font-extralight">
            Een led profiel heeft enkele voordelen, maar het is zeker <strong>niet noodzakelijk.</strong> Het heeft echter wel een positieve invloed op de LED-strips. Je hebt altijd keuze uit meerdere profielen waaronder aluminium profielen, deze gaan lang mee en zijn licht in gewicht.
          </p>

          <p class="text-white font-extralight">
            Een led profiel is vooral handig als je opzoek bent naar indirect licht. Aluminium profielen kunnen jouw ruimte een <strong>luxe touch geven</strong>, zeker als je gebruik maakt van zacht licht en dit licht egaal verspreid wordt.
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <TextWithImage image-alt="Badkamerverlichting" :image-src="require('assets/design/landings/plafond/indirect.jpg')" title="Indirecte woonkamer verlichting">
          <p class="text-white font-extralight">
            Ledstrip verlichting is een uitstekende toepassing als het gaat om indirecte verlichting. Vaak word sfeervolle verlichting aangeraden voor de woonkamer, en dat is begrijpelijk aangezien we allemaal houden van extra sfeer in
            <a class="link" href="/categorie/woonkamer">de woonkamer.</a>
          </p>
          <p class="text-white font-extralight">
            Als je echt speciale woonkamer verlichting nodig hebt, dan ben je hier aan het juiste adres. De RGB en de RGBIC zijn daar meer dan geschikt voor. Bij een compleet set krijg je altijd een LED-strip <strong>controller</strong>,
            een LED-strip <strong>afstandsbediening</strong> en, een Led strip <strong>voeding.</strong>
          </p>
          <p class="text-white font-extralight">
            Je kunt ook kiezen voor RGBW strips in de woonkamer, dan kun je ook nog kiezen uit een een strip koud of strip warm. Om <strong>de juiste sfeer</strong> te maken kan dit best helpen.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/wat-is-led" class="link">
              Wat is led? - Lideka Home
            </a>
          </p>
        </TextWithImage>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
          title="Led lamp"
          :bg-color="true"
        >
          <p class="text-white font-extralight">
            Nu veel mensen klagen over de stijgende elektriciteitskosten, is het niet verwonderlijk dat <strong>alternatieve energiebronnen</strong> steeds populairder worden.
          </p>

          <p class="text-white font-extralight">
            Een van deze middelen is de LED-lamp, of Light-Emitting Diode (LED). Deze lampen verbruiken <strong>80% minder energie</strong> dan traditionele gloeilampen en ze gaan tot
            <strong>25 keer langer mee</strong>
          </p>

          <p class="text-white font-extralight">
            Dus in deze tijd waarin <strong>geld besparen</strong> op onze energierekeningen belangrijk is, zijn LED's een ideale oplossing. In dit artikel gaan we in op enkele van de beste redenen waarom u onmiddellijk op LED's zou moeten overschakelen.
          </p>

          <h3 class="uppercase text-white text-4xl force-white">Geen kwik</h3>

          <p class="text-white font-extralight">
            Het gemiddelde huishouden heeft vijf lampen per huis, wat voor de meeste gezinnen betekent dat er elk jaar minstens één lamp gevuld is met kwik. De het kwik dat in deze lampen wordt gebruikt, kan mogelijk in de bodem lekken, wat een effect heeft op ons drinkwater.
          </p>

          <p class="text-white font-extralight">
            <a href="/blog/welke-kleuren-led-strips-zijn-er" class="link">
              Welke kleuren LED-strips zijn er?
            </a>
          </p>

          <h3 class="uppercase text-white text-4xl force-white">LED's bevatten geen kwik, dus er is geen kans op besmetting</h3>

          <p class="text-white font-extralight">
            Dit betekent ook dat het opruimen na een kapotte lamp veel eenvoudiger is - u hoeft uw schoenen niet uit te trekken bij de deur of ervoor te zorgen dat u alle sporen hebt verwijderd!
          </p>

          <h3 class="uppercase text-white text-4xl force-white">Het aan- en uitzetten van LED's heeft geen invloed op hun levensduur</h3>

          <p class="text-white font-extralight">
            Een traditionele gloeilamp gaat ongeveer 1.000 uur mee als u hem één keer per dag aan en uit zet, maar als u hem aan zet en laat zitten is dat meer dan 5 jaar levensduur! Maar met de LED-lamp gaat hij, zelfs als hij altijd aan is, nog steeds ongeveer 25 keer langer mee dan een gewone gloeilamp.
          </p>

          <p class="text-white font-extralight">
            Lees onze blog als je meer wilt weten over <a href="/blog/de-levensduur-van-led-verlichting" class="link">de levensduur van Led verlichting?</a>
          </p>

          <h3 class="uppercase text-white text-4xl force-white">LED's produceren minder warmte en zijn veiliger om aan te raken</h3>

          <p class="text-white font-extralight">
            De LED geeft geen warmte af dankzij het lage stroomverbruik, en ook al is de werkelijke bedrijfstemperatuur hoog (dit is wat ze oplaadt), toch is deze veel lager dan bij traditionele gloeilampen
          </p>
          <p class="text-white font-extralight">
            Bovendien zijn ze veilig - je kunt een LED-lamp aanraken zonder een schok te krijgen omdat LED's geen elektriciteit opwekken tenzij er weerstand is. Als er een uitgaat, is het nog steeds veilig om aan te raken omdat er geen kortsluiting is zoals bij traditionele gloeilampen, waardoor ze kunnen breken of exploderen wanneer ze worden ingeschakeld.
          </p>

          <p class="text-white font-extralight">
            <a href="/blog/welke-functies-kun-je-led-verlichting-meegeven" class="link">
              Welke functies kun je LED verlichting meegeven? - Lideka Home
            </a>
          </p>

          <h3 class="uppercase text-white text-4xl force-white">Ze besparen u geld in energiekosten en vervangingskosten</h3>

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
              Bij Lideka hebben we een <strong>ruime keuze in lengtes</strong>,
              iedere kamer is anders en zo ook ieder
              <a class="link" href="/categorie/plafond">plafond</a>. We raden je altijd aan om voor je bestelling goed te kijken welke lengte je nodig hebt. Je hebt tevens altijd de mogelijkheid om onze
              <a href="/categorie/led-strips" class="link">LED-strip</a> <strong>op maat</strong> te maken.
            </p>
            <p>
              <a href="/blog/alles-over-led-verlichting-als-sfeerverlichting" class="link">
                Alles over LED verlichting als sfeerverlichting - Lideka Home
              </a>
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Ondergronden"
          >
            <p class="text-white font-extralight">
              Er zijn best wel een aantal dingen waarom je moet letten als je een strip gaat uitkiezen voor jouw plafond. <strong>Iedere ondergrond is natuurlijk anders</strong>,
              en wat je niet wilt is dat jouw nieuwe verlichting na een aantal weken naar beneden komt. Daarom raden we je altijd aan te kijken naar 3M tape, <strong>3M tape</strong> is enorm sterk en laat op bijna iedere ondergrond niet meer los.

            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <TextWithImage image-alt="Slaapkamer" :image-src="require('assets/design/landings/plafond/slaapkamer.jpg')" title="Slaapkamer">
          <p class="text-white font-extralight">
            Als je houd van een gezellige slaapkamer dan is RGB verlichting echt iets voor jou. Onze ervaring is dat je een gewone
            <a href="/categorie/slaapkamer" class="link">slaapkamer</a> binnen no-time kan omtoveren naar een ware lichtshow. Door middel van een RGB LED-strip is het ook nog eens een <strong>gemakkelijke oplossing</strong>. De installatie is namelijk enorm makkelijk.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/led-verlichting-in-de-badkamer" class="link">
              Led verlichting in de badkamer - Lideka Home
            </a>
          </p>
        </TextWithImage>
      </div>

      <SingleImage
        :image-src="require('assets/design/landings/plafond/banner3.png')"
      />

      <CenterTitle title="Wit licht" />

      <LongParagraph>
        <p class="text-white font-extralight">
          Je kunt ook wit licht gebruiken om sfeer in huis te brengen, het <strong>nadeel</strong> is dat je dan <strong>1 vaste kleur hebt</strong>. Daarom is een juist keuze toch vaak RGB ledverlichting. Hiermee heb je nu eenmaal meer keuze en kun je voor elke setting de juiste kleur instellen.
        </p>
        <p class="text-white font-extralight">
          <strong>Waarom zou ik deze <a href="/categorie/led-strips" class="link">LED-strips</a> nemen voor mijn plafond?</strong>
        </p>
        <p class="text-white font-extralight">
          Zoals eerder al aangegeven is een <strong>sterke strip</strong> enorm belangrijk, je wilt namelijk niet dat de strip na een paar maanden los komt, en daar heeft Lideka aan gedacht.
        </p>
        <p class="text-white font-extralight">
          Als je nog opzoek bent naar inspiratie voor je plafond, of andere producten, dan kun je altijd even kijken op
          <a href="https://nl.pinterest.com/search/pins/?q=inspiratie%20plafond&rs=typed&term_meta%5B%5D=inspiratie%7Ctyped&term_meta%5B%5D=plafond%7Ctyped" class="link" target="_blank">pinterest.</a>
        </p>
        <p class="text-white font-extralight">
          Verder is een <strong>hoge helderheid</strong> ook belangrijk, met name omdat een ruimte met een plafond vaak erg groot uitvalt. Daarom maakt Lideka gebruikt van de nieuwste <strong>SMD 5050 Led’s</strong>, deze hebben drie keer zoveel lichtopbrengst als een normale Led.
        </p>
        <p class="text-white font-extralight">
          Daarnaast staat Lideka <a href="/contact" class="link">24/7</a> klaar om al jouw vragen te beantwoorden. Als klant heb je altijd de optie om te ruilen of om jouw artikel gratis te retourneren.
        </p>
        <p class="text-white font-extralight">
          <a href="/blog/hoe-werkt-led-verlichting" class="link">
            Hoe werkt led verlichting?
          </a>
        </p>
      </LongParagraph>

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
