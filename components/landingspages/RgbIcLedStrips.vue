<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="RGB-IC Led strips | Dreamcolor | Special Effects | Complete sets"
        description="RGB-IC Led strips"
        :imageSrc="require('assets/design/landings/rgb-ic/banner.jpg')"
      />

      <CenterParagraph
        description="Net als bij een standaard model vormt de RGB-IC led-strip alle mogelijke kleurtinten, maar dan met schitterende extra lichteffecten. Deze splinternieuwe vorm van led licht wordt ook wel ‘Dreamcolor Led’ genoemd en is razend populair bij onder Amerikaanse TikTokkers. Van regenboog patronen tot schietende leds of dromerige kleuren, met deze gloednieuwe editie is het mogelijk!"
      />

      <ProductsWithBackground
          title="Creëer een extra persoonlijke sfeer met RGB-IC led verlichting!"
          :collection="collection"
      />

      <Highlights :highlights="[
          {
            imageSrc: require('assets/icon/icons8-water-50.svg'),
            description: '<a href=\'https://nl.wikipedia.org/wiki/IP-code\' class=\'link\' target=\'blank\'>IP65-waterproof</a> bescherming en led-lampjes van de hoogste kwaliteit'
          },
          {
            imageSrc: require('assets/icon/icons8-wrench-50.svg'),
            description: 'Word geleverd met dubbelzijdig tape.'
          },
          {
            imageSrc: require('assets/icon/icons8-warranty-50.svg'),
            description: 'Zo ben je verzekerd van 2 jaar <a class=\'link\' href=\'/pages/garantie\' target=\'blank\'>garantie</a>.'
          }
      ]" />

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
        :image-src="require('assets/design/landings/rgb-ic/banner-2.jpg')"
      />

      <CenterTitle title="Een complete set bestaat uit:" />

      <CompleteSet
        :left-data="[
          {
            title: 'Afstandsbediening',
            description: 'Modern model'
          },
          {
            title: 'De RGB-IC strips',
            description: 'IP65'
          },
          {
            title: 'Handleiding',
            description: 'Nederlands, Engels, Duits en Frans'
          }
        ]"
        :image-src="require('assets/products/16.png')"
        :right-data="[
          {
            title: 'Adapter',
            description: 'Hoge kwaliteit kunststof'
          },
          {
            title: 'Controller box',
            description: 'Met 3 verschillende knoppen'
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

      <SingleImage :image-src="require('assets/design/landings/tv-bg.jpg')"
                   description="<strong class='font-bold text-2xl'>100% tevredenheidsgarantie</strong><br />Ben je niet tevreden met je aankoop? Wij betalen jouw volledige aankoopbedrag terug of je krijgt gratis een compleet nieuw set."
      />

      <LengthProducts
        :collection="collection"
        title="Welke lengtes hebben we?"
        description="Of je nu een LED-strip van 5 of 10 meter wilt, wij hebben het allebei! "
      />

      <SingleImage
          :image-src="require('assets/design/landings/rgb-led-strips/banner-5.jpg')"
      />

      <CenterTitle
          title="Google home"
      />

      <CenterParagraph>
        <p class="text-white font-extralight text-left md:text-center">
          Vaak kan jouw nieuwe light strip ook verbonden worden met google home.
          <a href="https://nl.wikipedia.org/wiki/Google_Home" class="link" target="_blank">Google home</a> is een platform waar jij al jouw slimme apparaten kunt toevoegen en ook direct bedienen. Je zult dan een wifi RGBIC strip nodig hebben, en deze moet natuurlijk te verbinden zijn met google home, let daar goed op bij het moment van aankopen.
        </p>
        <p class="text-white font-extralight text-left md:text-center mt-2">
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
              In landen zoals amerika hoor je vaak de term <a href="https://lidekahome.nl/categorie/led-strips" target="_blank" class="link">"strip lights"</a>
              vallen, dat is een andere benaming voor "led strips". Er wordt eigenlijk <strong>precies hetzelfde</strong> bedoeld, het wordt alleen iets anders uitgedrukt.
            </p>
            <p class="text-white font-extralight">
              Er zijn wel verschillende soorten strip lights, maar dat valt ook weer onder led strips. Zo zijn er ook nog andere synoniemen voor strip lights, zoals: light strip. Het komt uiteindelijk allemaal op hetzelfde neer.
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
              Je leest het vaak: 16 miljoen kleuren, maar hoe komen al die aanbieders daar nu bij? Als je gaat rekenen dan kom je zelf uit op meer dan <strong>16 miljoen kleuren</strong>. We gaan je nu uitleggen hoe dat kan.
            </p>
            <p class="text-white font-extralight">
              Bij RGB kleuren wordt er gebruikt gemaakt van <strong>8 bits</strong>, zo kun je het aandeel van elke kleur in 255 stapjes uitdrukken,
              daardoor kunnen er 16,7 miljoen verschillende kleuren <strong>gecodeerd</strong> worden.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Digitale ledstrips"
          >
            <p class="text-white font-extralight">
              Je ziet soms de term digitaal voorbij komen, we leggen je graag uit wat dat precies inhoudt zodat je precies waar je op moet letten als aan het shoppen bent.
            </p>
            <p class="text-white font-extralight">
              Digitaal betekent heel simpel dat de verlichting te besturen is <strong>via een app</strong>, dat kan dan via
              verschillende apparaten zijn. In dit geval gaat het dan om digitale WS2812b ledstrips. Jouw nieuwe artikel heeft een <strong>built-in RGBIC chip</strong>.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <LongParagraph
                bg-color
                title="Ledstrip voor bar"
            >
              <p class="text-white font-extralight">
                Ook is dit artikel meer dan geschikt voor een bar, vanwege het <strong>ijzersterke 3M tape</strong> en zijn hoge helderheid is hij prima geschikt.
              </p>
            </LongParagraph>
            <LongParagraph
                bg-color
                title="Verschillende kleurenopties"
            >
              <p class="text-white font-extralight">
                Het is ook mogelijk om een <strong>vaste kleur</strong> te kiezen, je kunt zelfs de <strong>snelheid bepalen</strong>. Je kunt deze vaste kleur ook dimmen en instellen zoals jij het wilt.
              </p>
            </LongParagraph>
          </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Levendige kleur"
          >
            <p class="text-white font-extralight">
              Met deze speciale functie heb je meer <strong>levendige kleuren</strong> dan bij een RGB versie. Dat komt doordat de kleuren echt er doorheen kunnen schieten.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Ledstrip instelbaar"
          >
            <p class="text-white font-extralight">
              Deze speciale editie is volledig instelbaar, je kunt hem om de <strong>circa 10 centimeter</strong> afknippen zonder gevolgen. Dit kan bijvoorbeeld erg handig zijn als je net teveel hebt.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Betaling"
          >
            <p class="text-white font-extralight">
              We maken gebruik van een <strong>zeer geavanceerd</strong> systeem voor betalingsbeveiliging,
              dit systeem codeert jouw gegevens tijden een transactie en dus kun jij genieten van risicoloos shoppen.
              Jouw <a href="/privacy-statement" class="link" target="_blank">privacy</a> is onze zorg.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Soort lamp"
          >
            <p class="text-white font-extralight">
              Deze RGBIC led strips zijn uitgerust met de welbekende SMD 5050 leds, deze zijn bijzonder stevig,
              en hebben een langere levensduur. Deze zijn echt van de <strong>hoogste kwaliteit</strong>,
              en zorgen ervoor dat jij nog <strong>jaren</strong> kunt genieten van je nieuwe led strip.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Light Colour"
          >
            <p class="text-white font-extralight">
              Het bijzondere aan dit nieuwe soort chip is dat je een <strong>verschillende colours</strong> door de led strip heen kan
              laten schieten op <strong>hetzelfde moment</strong>. In het verleden werd dit item op amazon gekocht,
              je kunt ze nu ook bij ons bestellen.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Strip color outdoor"
          >
            <p class="text-white font-extralight">
              Door de IP 65 rating van deze mobiele strip is hij <strong>ook buiten</strong> te gebruiken.
              Een strip color outdoor staat erom bekend een hoge lichtopbrengst te geven,
              en dan is bij deze strip niet anders. Zoals je hierboven al gelezen
              hebt zijn al onze Led strip color outdoor uitgerust met de <strong>SMD 5050 leds</strong>.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="RGB Colour"
        >
          <p class="text-white font-extralight">
            <a href="https://nl.wikipedia.org/wiki/RGB-kleursysteem" class="link" target="_blank">RGB colour</a> (rood, groen, blauw) is een kleurenmodel dat de kleuren beschrijft van het
            licht dat door voorwerpen wordt uitgezonden of weerkaatst. RGB colour gebruikt <strong>drie primaire kleuren</strong>,
            additieve primaries, om alle andere kleuren te creëren.
          </p>
          <p class="text-white font-extralight">
            Het RGB colour-kleur model is ontwikkeld door deze drie primaire kleuren in
            <strong>verschillende hoeveelheden</strong> met elkaar te mengen. De informatie wordt in kleurenbeelden
            gewoonlijk gecodeerd in drie kanalen voor rood, groen en blauw.
          </p>
          <p class="text-white font-extralight">
            De hoeveelheid van elk kanaal kan worden weergegeven als een percentage, soms met een
            alfakanaal dat bepaalt hoeveel van het specifieke kanaal nodig is om de gewenste kleur te creëren.
          </p>
          <p class="text-white font-extralight">
            Een computer monitor meet de <strong>helderheid</strong> van deze drie kanalen met verschillende schalen
            voor elk kanaal. Dit creëert verschillende percepties van lichtheid voor elk kanaal en maakt het
            mogelijk andere kleuren te mengen, waardoor het potentieel voor miljoenen kleurencombinaties.
          </p>
          <p class="text-white font-extralight">
            RGB-informatie kan worden gebruikt om andere kleuren te creëren, maar wordt ook
            vaak gebruikt om de precieze mix van elk kanaal te bepalen waarmee specifieke
            kleuren worden gecreëerd - dit proces wordt "kleuraanpassing" genoemd.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/kan-je-de-kleur-van-led-verlichting-wijzigen" target="_blank" class="link">
              Lees hier meer over hoe led verlichting met kleuren
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Coating"
          >
            <p class="text-white font-extralight">
              De RGBIC ledstrip van Lideka is niet ongecoat, hij heeft een mooie stevige behuizing van siliconen en zal daarom een stuk veiliger zijn.
              Je hebt ook led strip <strong>ongecoat</strong>, dat is dan een artikel met een <strong>Ip 20 rating</strong>. We raden je alleen aan een led strip
              ongecoat te gebruiken als het geen kans heeft om vocht te ontvangen.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Led Strip warm"
          >
            <p class="text-white font-extralight">
              Je kunt ook voor een Led strip warm gaan, daarmee wordt dan een <strong>warme kleur</strong> wit bedoeld.
              Dit wordt vaak gebruikt voor sfeerverlichting in bijvoorbeeld een woonkamer. Toch is ons advies om wel voor een RGB,
              RGBW, RGBWW of RGBIC te gaan. Je hebt dan <strong>meer keuze</strong> als het gaat om kleur.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Strip with remote controller
"
        >
          <p class="text-white font-extralight">
            Bij deze strip with remote controller wordt een geweldige en <strong>moderne afstandsbediening</strong> geleverd. Deze afstandsbediening ligt lekker in de hand en heeft een prima formaat.
          </p>
          <p class="text-white font-extralight">
            Het is noodzakelijk dat je een controller met afstandsbediening hebt, anders zal de afstandsbediening niet werken.
            Je kan dit ook wel een <strong>intuïtieve afstandsbediening</strong> noemen door zijn snelle reactie.
          </p>
          <p class="text-white font-extralight">
            <a href="/products/led-strip-10-meter" target="_blank" class="link">
              Bekijk ons meest verkochte product
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Mobiele data verbinding"
          >
            <p class="text-white font-extralight">
              Als je gebruikt wilt maken van Alexa Google Siri of andere smart platformen dan heb je een
              <strong>mobiele dataverbinding</strong> nodig. Als het een artikel is dat werkt via bluetooth dan is dit niet perse nodig.
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Aantal lichtjes"
          >
            <p class="text-white font-extralight">
              We raden je altijd aan het aantal lichtjes goed in de gaten te houden, dit
              heeft namelijk enorm veel invloed op jouw nieuwe product. Je hebt namelijk verlichting
              met een aantal lichtjes van 10, en bijvoorbeeld een aantal lichtjes van 60. Hier zit een zo
              groot verschil in dat je jezelf echt moet afvragen wat je het liefste hebt. De
              prijs zal bij een <strong>hoger aantal lichtjes</strong> vaak ook <strong>hoger worden</strong>.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Geschikt voor binnen gebruik"
        >
          <p class="text-white font-extralight">
            Deze light strip is meer dan geschikt voor <strong>binnen gebruik</strong>. Je kunt ze overal binnen bevestigen.
            Door de hoogwaardige kwaliteit leds zul je zowel binnen als buiten een prachtige sfeer hebben.
          </p>
          <p class="text-white font-extralight">
            <a href="/categorie/gamekamer" target="_blank" class="link">
              Bekijk ons meest verkochte product
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Functies afstandsbediening"
        >

          <p class="text-white font-extralight">
            Je kunt deze bedienen door middel van <strong>kleuraanduidingen</strong> en gebruik van symbolen.
          </p>
          <ul class="text-white font-extralight">
            <li>Strobe flitser</li>
            <li>Uit/aan</li>
            <li>10 Niveaus van snelheid</li>
            <li>10 Helderheid niveaus</li>
            <li>12 Kleuren</li>
            <li>7 veranderen muziek dansende kleuren</li>
            <li>7 muziek dansende cirkels</li>
            <li>12 statische kleuren</li>
            <li>10 cirkelende modus</li>
            <li>Wifi</li>
          </ul>
          <p class="text-white font-extralight">
            <a href="/blog/de-levensduur-van-led-verlichtingr" target="_blank" class="link">
              Benieuwd naar de levensduur van LED verlichting? Lees onze blog!
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="De voordelen van jouw nieuwe RGBIC led strip"
        >
          <ul class="text-white font-extralight no-list-type">
            <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Speciale effecten met de dreamcolor functie</span></li>
            <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Zuinig in verbruik</span></li>
            <li class="flex items-center space-x-4"><img alt="Checkmark"  class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Bijzonder heldere led’s</span></li>
            <li class="flex items-center space-x-4"><img alt="Checkmark"  class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Volledige waterdichte led’s | IP65</span></li>
            <li class="flex items-center space-x-4"><img alt="Checkmark"  class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Eindeloze kleureffecten</span></li>
            <li class="flex items-center space-x-4"><img alt="Checkmark"  class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Bedienbaar via app en afstandsbediening</span></li>
            <li class="flex items-center space-x-4"><img alt="Checkmark"  class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Led strip verlichting met SMD 5050 leds</span></li>
            <li class="flex items-center space-x-4"><img  alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Hoogste kwaliteit leds</span></li>
            <li class="flex items-center space-x-4"><img  alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" /><span class="tracking-wide text-gray-300 uppercase font-bold">Zeer mobiele strip</span></li>
          </ul>
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
