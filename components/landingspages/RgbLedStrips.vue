<template>
  <div class="bg-black">
    <div class="max-w-7xl mx-auto space-y-10 mt-10 mb-10 px-6 lg:px-0">
      <Banner
        title="RGB Led strips | Multicolor | Complete sets"
        description="RGB Led strips"
        :imageSrc="require('assets/design/landings/rgb-led-strips/banner.jpg')"
      />

      <CenterParagraph>
        <p class="text-white font-extralight text-center">
          De LIDEKA® RGB multicolor LED-strip creëert een gezellige lounge sfeer en blijft
          muurvast zitten!
        </p>
        <p class="text-white font-extralight text-center">
          <a class="link" href="/products/rgb-led-light-strip-3-meter-smart-verlichting">RGB-led verlichting</a>
          combineert rode, groene en blauwe led-lampjes in één behuizing en
          vormt honderden verschillende lichttinten door deze drie kleuren te mengen. Zo stel jij jouw
          <strong>favoriete kleuren</strong> samen wanneer je maar wilt en geniet je iedere keer weer van een unieke
          sfeer.
        </p>
      </CenterParagraph>

      <Highlights :highlights="[
          {
            imageSrc: require('assets/icon/icons8-best-seller-50.svg'),
            description: 'Deze stijlvolle led set wordt geleverd <strong>inclusief installatiemateriaal</strong>, ' +
            'kunt gebruiken.'
          },
          {
            imageSrc: require('assets/icon/icons8-water-50.svg'),
            description: '<a href=\'https://nl.wikipedia.org/wiki/IP-code\' target=\'blank\' class=\'link\'>IP65-waterproof</a>\n'+
'bescherming en led lampjes van de hoogste kwaliteit zodat je jouw aankoop nog jarenlang'
          },
          {
            imageSrc: require('assets/icon/icons8-warranty-50.svg'),
            description: 'Toch niet tevreden? Lideka® garandeert jou van een 2-jarige garantie'
          }
      ]" />

      <div style="margin-top: 100px;">
        <ProductsWithBackground
          title="Thuis genieten van die fijne lounge vibes? Bestel jouw RGB led-strip vandaag nog!"
          :collection="collection"
        />
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="De voordelen van jouw nieuwe RGBIC led strip"
        >
          <ul class="text-white font-extralight no-list-type">
            <li v-for="item in [
                'Gemakkelijk te installeren',
                'Zuinig in energieverbruik met led lampjes van topkwaliteit',
                'IJzersterk; doe je voordeel met een geavanceerde epistar chip en krachtige behuizing',
                'IP65 waterproof; dus ook geschikt voor in de tuin!',
                'Voorzien van talloze kleuren &amp; sfeervolle lichteffecten',
                'Bediening via app'
            ]" class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8" src="~assets/icon/icons8-checkmark.svg" />
              <span class="tracking-wide text-gray-300 uppercase font-bold">
                {{ item }}
              </span>
            </li>
          </ul>

          <p>
            <a href="/categorie/plafond" class="link">
              Bekijk hier onze Led-strip plafond
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Zelfklevende strip"
        >
          <p class="text-white font-extralight">
            Bij Lideka houden we van <strong>gemak en eenvoud</strong>, ik denk jij ook. Daarom hebben al onze producten een <strong>zelfklevende strip</strong>,
            dit maakt installeren nog eenvoudiger. De zelfklevende strip bevat het welbekende <strong>3M tape</strong>, eenmaal vast zal het niet zomaar meer loslaten.
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            :bg-color="true"
            title="Soort lamp"
        >
          <div class="space-y-4">
            <p class="text-white font-extralight">
              Thuis genieten van die fijne lounge vibes, bij jouw favoriete films? Of heb je zin in een
              romantisch diner? Het kan allemaal! Bestel jouw
              <a href="/products/rgb-led-light-strip-3-meter-smart-verlichting" class="link">RGB led-strip</a> vandaag,
              en geniet morgen al van een <strong>wonderbaarlijke sfeer!</strong>
            </p>
            <p class="text-white font-extralight">
              Met 16 miljoen RGB-kleuren, krachtige LED-lampjes en een bijgeleverde bluetooth
              <strong>afstandsbediening</strong> stel jij jouw <a href="/products/rgb-led-light-strip-3-meter-smart-verlichting" class="link">RGB ledstrip</a> helemaal naar wens in. Leun lekker
              achterover, geniet van een extra knus interieur en laat het loungen maar beginnen! Je kunt
              in principe oneindig veel <strong>verschillende kleurencombinaties</strong> maken.
            </p>
            <p class="text-white font-extralight">
              De drie primaire kleuren:
            </p>
            <ul class="list-disc list-inside text-white font-extralight">
              <li>Rood</li>
              <li>Groen</li>
              <li>Blauw</li>
            </ul>
            <p class="text-white font-bold">
              Jouw LIDEKA® led-strip is voorzien van hoogwaardige led lampjes met 50.000 branduren voor langdurig gebruiksplezier!
            </p>
            <p>
              <a href="/categorie/keuken" class="link">
                Wil je graag wat extra sfeer in de keuken? Bekijk hier led strip keuken.
              </a>
            </p>
          </div>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <div class="mb-20">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <LongParagraph
                bg-color
                title="Wit licht"
            >
              <p class="text-white font-extralight">
                Als je opzoek bent naar een RGB led strip dan zit daar <strong>geen wit licht</strong> bij. Er zit wel een
                <strong>soort wit licht</strong> bij dat er erg veel op lijkt. We raden jou dan ook aan
                om voor een RGB strip te gaan, hier heb je <strong>veel meer keuze</strong> in verschillende tinten en kleuren.
              </p>
            </LongParagraph>
            <LongParagraph
                bg-color
                title="Indirecte verlichting"
            >
              <p class="text-white font-extralight">
                Deze RGB strips kunnen perfect gebruikt worden
                als <strong>indirecte verlichting</strong>, dit komt door de SMD 5050 leds die een
                <strong>zeer hoge lichtopbrengst</strong> hebben. De losse ledstrip is altijd
                zelf klevend en beschikt over het <strong>ijzersterke 3M tape</strong>.
              </p>
            </LongParagraph>
          </div>
        </div>
      </div>

      <CenterTitle
        title="Jouw nieuwe RGB led-strip is:"
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
        :image-src="require('assets/design/landings/rgb-led-strips/banner-2.jpg')"
      />

      <CenterTitle title="Een complete set bestaat uit:" />

      <CompleteSet
        :left-data="[
          {
            title: 'Afstandsbediening',
            description: 'Modern model'
          },
          {
            title: 'Controller box',
            description: 'Met 3 verschillende knoppen'
          },
          {
            title: 'De RGB strips',
            description: 'IP65'
          },
        ]"
        :image-src="require('assets/products/1.png')"
        :right-data="[
          {
            title: 'Handleiding',
            description: 'Nederlands, Engels, Duits en Frans'
          },
          {
            title: 'Adapter',
            description: 'Hoge kwaliteit kunststof'
          },
        ]"
      />

      <SingleImage :image-src="require('assets/design/landings/rgb-led-strips/banner-3.jpg')" />

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
            'rgb-ic-led-strips',
            'tv-led-strips',
            'led-pakketten',
        ]"
      />

      <SingleImage
          :image-src="require('assets/design/landings/rgb-led-strips/banner-6.jpg')"
          description="<h2 class='text-3xl font-bold'>Multifunctioneel</h2><p>Met handige pijltjes en <strong>snijmarkeringen</strong> knip je jouw strip gemakkelijk door op de juiste lengte. Kies je voor een futuristisch verlichte tv, trendy keuken of sfeervolle tuin? Deze <strong>multifunctionele led-strip</strong> is écht overal te gebruiken.</p>"
      />

      <QualityBlocks />

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
      />

      <SingleImage
          :image-src="require('assets/design/landings/rgb-led-strips/banner-4.jpg')"
      />

      <CenterTitle title="Kies hier jouw specifieke toepassing" />

      <Usages />

      <SingleImage :image-src="require('assets/design/landings/rgb-led-strips/banner-7.jpg')" />

      <CenterTitle
        title="Decoratieve verlichting"
      />

      <LongParagraph>
        <p>
          Stripverlichting is een type strip dat ontworpen is voor zowel <strong>functionele als decoratieve doeleinden</strong>,
          het produceert <strong>geen warmte</strong> waardoor het perfect is voor keukens waar de bovenlichten een ondraaglijke hoeveelheid
          warmte kunnen creëren tijdens het koken van voedsel.
        </p>

        <p>
          De strips moeten worden aangesloten op een 12v voeding met een
          ampère die geschikt is voor de LED-strip wordt gebruikt om veilig gebruik in huis te garanderen.
        </p>

        <p>
          <a href="/blog/kan-je-de-kleur-van-led-verlichting-wijzigen" class="link">
            Wil je graag wat extra sfeer in de keuken? Bekijk hier led strip keuken.
          </a>
        </p>
      </LongParagraph>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Soorten decoratieve verlichting"
          >
            <p class="text-white font-extralight">
              Decoratieve verlichting wordt ook gebruikt om een ruimte te verfraaien. Het is bedoeld voor
              decoratieve doeleinden en niet voor het verlichten van een ruimte.
            </p>
            <p class="text-white font-extralight">
              Verschillende soorten decoratieve verlichting zijn onder meer kroonluchters, hanglampen en
              spots. Decoratieve verlichting kan duur zijn en moeilijk te kiezen. Om te beginnen moet u
              de plaats bepalen waar de decoratieve verlichting zal worden geplaatst.
            </p>
            <p class="text-white font-extralight">
              U moet er ook een budget voor vaststellen. De meest gebruikte plaatsen zijn de
              woonkamer, keuken en slaapkamer. Als u een kroonluchter in uw hal of eetkamer heeft, wilt
              u misschien hanglampen gebruiken in plaats van spots om het zicht door uw ramen niet te
              belemmeren als ze aan weerszijden van uw hal of eetkamer kroonluchter zijn
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Decoratieve verlichting in de slaapkamer"
          >
            <p class="text-white font-extralight">
              Als u decoratieve verlichting in uw slaapkamer installeert, zorg er dan voor dat de lichten uw
              slaap niet verstoren. U kunt een dimmer gebruiken om de intensiteit van het licht te
              verlagen of te verhogen, afhankelijk van of u wilt lezen of slapen.
            </p>
            <p class="text-white font-extralight">
              Als u een grote slaapkamer hebt, gebruik dan verschillende soorten spots in de hele
              slaapkamer voor een meer dramatisch effect. Decoratieve lampen en kroonluchters met
              meerdere armen geven een geraffineerde uitstraling dan die met minder armen. Het aantal
              lampen op uw kroonluchter is ook een belangrijke factor, aangezien meer lampen helderder
              licht produceren, wat een dramatischer effect creëert.
            </p>
            <p>
              <a href="/blog/hoe-werkt-led-verlichting" class="link">
                Lees hier meer over hoe led verlichting werkt
              </a>
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Installatie verlichting"
        >
          <p class="text-white font-extralight">
            De installatie van decoratieve verlichting kan duur zijn omdat u een elektricien moet
            inhuren die het systeem in uw elektrische bedrading systeem zal installeren. Hij zal alle
            componenten Verbinden en ervoor zorgen dat ze werken voordat ze uw huis verlaten. U zult
            hem moeten voorzien van al het gereedschap dat hij nodig heeft en natuurlijk betalen voor
            zijn diensten.
          </p>
          <p class="text-white font-extralight">
            Hoewel u kant-en-klare decoratieve verlichting kunt kopen, zult u tijd en geld besparen als u
            het zelf maakt, omdat u dan geen elektricien hoeft te betalen. Dit kan vooral aantrekkelijk
            zijn als u goed bent in doe-het-zelf projecten of in het repareren van elektrische bedrading.
            Zorg ervoor dat u een plaats kiest waar niemand de lampen per ongeluk aanraakt, evenals
            labels die aangeven dat de stroom is ingeschakeld.
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Decoratieve spots"
        >
          <p class="text-white font-extralight">
            Decoratieve spots worden gebruikt voor specifieke redenen op bepaalde plaatsen terwijl
            lampen overal in het huis of kantoor worden geplaatst, afhankelijk van hun ontwerp , kleur ,
            grootte enz. Bijvoorbeeld : aan de wand gemonteerde lampen naast bedden, bedzijde.
          </p>
          <p class="text-white font-extralight">
            Veel spots kunnen tegenwoordig bediend worden met een app, en deze apps zijn vaak
            weer te verbinden met <a href="https://nl.wikipedia.org/wiki/Google_Home" target="_blank" class="link">Google Home</a>.
            <a href="https://nl.wikipedia.org/wiki/Google_Home" target="_blank">Google home</a> is een platform waar jij al jouw slimme
            apparaten kunt toevoegen en bedienen.
          </p>
          <p>
            <a href="/categorie/badkamer" class="link">
              Extra sfeer in de badkamer? Bekijk snel onze specifieke badkamerverlichting.
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Enkele tips zijn:"
        >
          <ul class="text-white font-extralight">
            <li>
              Ga niet te ver met te veel items; één hoofdbron van decoratieve verlichting is meestal genoeg en vergeet niet dat er misschien al een aantal verlichtingsarmaturen zijn (kroonluchtershanglampen, plafondlampen).
            </li>
            <li>
              Kies een ruimte met goede verlichting, maar geen direct zonlicht. Zorg ervoor dat de kamer goed verlicht is met plafondlampen, tafellampen en staande lampen; dit zal het gemakkelijker maken om de decoratieve verlichting 's nachts te zien. U kunt spelen met verschillende lichteffecten; probeer een dimschakelaar op uw lampenkappen te plaatsen (ze zijn overal verkrijgbaar), waardoor u meer controle over het lichtniveau krijgt.
            </li>
            <li>
              Kies lampenkappen die mooi bij uw interieur passen; ze mogen niet vloeken. Als u bijvoorbeeld houten meubels heeft, kies dan voor houten lampenkappen of lampenkappen die passen bij de kleur van uw muren of andere decorstukken (bijv. kussens); als alternatief kunt u voor metallic-kleurige lampenkappen gaan als u metalen meubels in die kamer of in dezelfde ruimte heeft.
            </li>
            <li>
              Als u veel ruimte hebt in uw woonkamer, kunt u één grote lampenkap installeren, maar als uw woonkamer klein is, kunt u beter kleinere lampenkappen kiezen om niet veel ruimte in beslag te nemen.
            </li>
            <li>
              Installeer decoratieve lampen met zorg; vermijd plaatsing in de buurt van warmtebronnen zoals radiatoren of open haarden, waar ze gemakkelijk beschadigd kunnen raken. Zorg er ook voor dat de elektriciteitskabel niet wordt beschadigd door spijkers die in de muur worden geslagen wanneer u voorwerpen aan de muur hangt.
            </li>
            <li>
              Probeer nooit een nat voorwerp te repareren door het boven een oven of een andere directe warmtebron te leggen, want dit zal onherstelbare schade veroorzaken. Neem de nodige voorzorgsmaatregelen om uw sierverlichting te conserveren en waterschade te voorkomen.
            </li>
            <li>
              Zorg ervoor dat u decoratieve verlichting uitschakelt als u 's avonds uitgaat of naar bed gaat, want als u het licht laat branden, kan dat brand veroorzaken.
            </li>
          </ul>
        </LongParagraph>
      </div>

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

export default Vue.extend({
  components: {
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
