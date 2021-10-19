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

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            :bg-color="true"
            title="Soort lamp"
        >
          <div class="space-y-4">
            <p class="text-white font-extralight">
              Thuis genieten van die fijne lounge vibes, bij jouw favoriete films? Of heb je zin in een romantisch diner? Het kan allemaal! Bestel jouw RGB led-strip vandaag, en geniet morgen al van een wonderbaarlijke sfeer!
            </p>
            <p class="text-white font-extralight">
              Met 16 miljoen RGB-kleuren, krachtige LED-lampjes en een bijgeleverde bluetooth afstandsbediening stel jij jouw RGB ledstrip helemaal naar wens in. Leun lekker achterover, geniet van een extra knus interieur en laat het loungen maar beginnen! Je kunt in principe oneindig veel verschillende kleurencombinaties maken.
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
          </div>
        </LongParagraph>
      </div>

      <div style="margin-top: 100px;">
        <ProductsWithBackground
          title="Thuis genieten van die fijne lounge vibes? Bestel jouw RGB led-strip vandaag nog!"
          :collection="collection"
        />
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Zelfklevende strip"
        >
          <p class="text-white font-extralight">
            Bij Lideka houden we van gemak en eenvoud, ik denk jij ook. Daarom hebben al onze producten een zelfklevende strip, dit maakt installeren nog eenvoudiger. De zelfklevende strip bevat het welbekende 3M tape, eenmaal vast zal het niet zomaar meer loslaten.
          </p>
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
                Als je opzoek bent naar een RGB led strip dan zit daar geen wit licht bij. Er zit wel een soort wit licht bij dat er erg veel op lijkt. We raden jou dan ook aan om voor een RGB strip te gaan, hier heb je veel meer keuze in verschillende tinten en kleuren.
              </p>
            </LongParagraph>
            <LongParagraph
                bg-color
                title="Indirecte verlichting"
            >
              <p class="text-white font-extralight">
                Deze RGB strips kunnen perfect gebruikt worden als indirecte verlichting, dit komt door de SMD 5050 leds die een zeer hoge lichtopbrengst hebben. De losse ledstrip is altijd zelf klevend en beschikt over het ijzersterke 3M tape.
              </p>
            </LongParagraph>
          </div>
        </div>
      </div>

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
            'rgb-ic-led-strips',
            'tv-led-strips',
            'led-pakketten',
        ]"
      />

      <SingleImage
          :image-src="require('assets/design/landings/rgb-led-strips/banner-6.png')"
          description="<h2 class='text-3xl font-bold'>Multifunctioneel</h2><p>Met handige pijltjes en snijmarkeringen knip je jouw strip gemakkelijk door op de juiste lengte. Kies je voor een futuristisch verlichte tv, trendy keuken of sfeervolle tuin? Deze multifunctionele led-strip is écht overal te gebruiken.</p>"
      />

      <QualityBlocks />

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
      />

      <SingleImage
          :image-src="require('assets/design/landings/rgb-led-strips/banner-4.png')"
      />

      <Usages />

      <SingleImage :image-src="require('assets/design/landings/rgb-led-strips/banner-7.png')" />

      <CenterTitle
        title="Decoratieve verlichting"
      />

      <LongParagraph>
        Stripverlichting is een type strip dat ontworpen is voor zowel functionele als decoratieve doeleinden, het produceert geen warmte waardoor het perfect is voor keukens waar de bovenlichten een ondraaglijke hoeveelheid warmte kunnen creëren tijdens het koken van voedsel. De strips moeten worden aangesloten op een 12v voeding met een ampère die geschikt is voor de LED-strip wordt gebruikt om veilig gebruik in huis te garanderen.
      </LongParagraph>

      <div class="mx-auto max-w-5xl">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <LongParagraph
              bg-color
              title="Soorten decoratieve verlichting"
          >
            <p class="text-white font-extralight">
              Decoratieve verlichting wordt ook gebruikt om een ruimte te verfraaien. Het is bedoeld voor decoratieve doeleinden en niet voor het verlichten van een ruimte. Verschillende soorten decoratieve verlichting zijn onder meer kroonluchters, hanglampen en spots. Decoratieve verlichting kan duur zijn en moeilijk te kiezen. Om te beginnen moet u de plaats bepalen waar de decoratieve verlichting zal worden geplaatst. U moet er ook een budget voor vaststellen. De meest gebruikte plaatsen zijn de woonkamer, keuken en slaapkamer. Als u een kroonluchter in uw hal of eetkamer heeft, wilt u misschien hanglampen gebruiken in plaats van spots om het zicht door uw ramen niet te belemmeren als ze aan weerszijden van uw hal of eetkamer kroonluchter zijn .
            </p>
          </LongParagraph>
          <LongParagraph
              bg-color
              title="Decoratieve verlichting in de slaapkamer"
          >
            <p class="text-white font-extralight">
              Als u decoratieve verlichting in uw slaapkamer installeert, zorg er dan voor dat de lichten uw slaap niet verstoren. U kunt een dimmer gebruiken om de intensiteit van het licht te verlagen of te verhogen, afhankelijk van of u wilt lezen of slapen. Als u een grote slaapkamer hebt, gebruik dan verschillende soorten spots in de hele slaapkamer voor een meer dramatisch effect. Decoratieve lampen en kroonluchters met meerdere armen geven een geraffineerdere uitstraling dan die met minder armen. Het aantal lampen op uw kroonluchter is ook een belangrijke factor, aangezien meer lampen helderder licht produceren, wat een dramatischer effect creëert.
            </p>
          </LongParagraph>
        </div>
      </div>

      <div class="mx-auto max-w-5xl">
        <LongParagraph
            bg-color
            title="Decoratieve spots"
        >
          <p class="text-white font-extralight">
            Decoratieve spots worden gebruikt voor specifieke redenen op bepaalde plaatsen terwijl lampen overal in het huis of kantoor worden geplaatst, afhankelijk van hun ontwerp , kleur , grootte enz. Bijvoorbeeld : aan de wand gemonteerde lampen naast bedden, bedzijde. Veel spots kunnen tegenwoordig bediend worden met een app, en deze apps zijn vaak weer te verbinden met google home. Google home is een platform waar jij al jouw slimme apparaten kunt toevoegen en bedienen.
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
