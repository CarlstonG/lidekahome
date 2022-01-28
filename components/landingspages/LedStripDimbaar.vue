<template>
  <div class="bg-black">

    <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 lg:mb-0">
      <Banner :imageSrc="require('assets/photos/TV3.jpg')"/>

      <div class="mt-4">
        <CenterTitle
            tag="h1"
            title="LED-strips dimbaar"
        />
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10">
      <LongParagraph>
        <p class="text-white font-extralight">
          Ben jij opzoek naar een
          <strong>dimbare LED-strip?</strong>
          Dan ben je hier aan het juiste adres. Lideka biedt je meerdere soorten en lengten aan als het gaat om dimbare
          <NuxtLink to="/categorie/led-strips" class="link">LED-strips</NuxtLink>.
          Zo hebben we welbekende <NuxtLink to="/categorie/rgb-led-strips" class="link">RGB LED-strip variant</NuxtLink>, maar ook de nieuwe
          <NuxtLink class="link" to="/categorie/rgb-ic-led-strips">RGB-IC LED-strip</NuxtLink> variant.
        </p>
      </LongParagraph>
    </div>

    <div class="max-w-7xl mx-auto space-y-10 mb-10 px-6 lg:px-0">
      <ProductsWithBackground
          v-if="collection"
          title="Dimbare LED-strips"
          :collection="collection"
      />

      <VideoReviews />

      <SingleImage
        :image-src="require('~/assets/photos/Woonkamer-1.jpg')"
      />

      <LongParagraph
        title="Dimbare led strips | Hoe werkt dat precies?"
      >
        <p class="text-white font-extralight">
          Veel huishoudens maken tegenwoordig gebruik van led verlichting - zowel binnenshuis of als sfeervolle buitenverlichting. Dit is niet alleen beter voor het milieu, maar in de meeste gevallen is het ook een kosteneffectieve oplossing in vergelijking met traditionele lampen en verlichting. Van traditionele verlichting - zoals gloeilampen en halogeenlampen -is algemeen bekend dat ze verschillende mogelijkheden bieden om het licht te dimmen. Een vraag die ons regelmatig gesteld wordt is: ‘Zijn led strips dimbaar?’. Natuurlijk niet zo’n gekke vraag als je je bedenkt dat het dimmen van licht een belangrijke factor is voor het creëren van een bepaalde sfeer (in huis). In dit artikel leggen we je uit hoe je led strips kunt dimmen en zetten we de mogelijkheden voor het dimbaar maken van led strips uiteen.
        </p>
      </LongParagraph>

      <LongParagraph
          title="Zijn alle led strips dimbaar?"
      >
        <p class="text-white font-extralight">
          Hoewel bijna alle led strips dimbaar zijn, doe je er goed aan om bij het kopen van led strips er op te letten dat ze ook daadwerkelijk te dimmen zijn. Sommige led strips worden namelijk alleen gebruikt als sfeerverlichting, en deze zijn vaak niet of slechts heel beperkt dimbaar.
        </p>

        <p class="text-white font-extralight">
          Over het algemeen geldt dat wanneer de spanning van de led strip wordt verlaagd, de led lichtjes zachtjes worden gedimd. Echter is het probleem vaak dat de led strips een constante spanning toegeleverd krijgen. Voor het dimmen van de led strips is dus een (geïntegreerde) dimmer nodig.
        </p>

        <p class="text-white font-extralight">
          Alle <NuxtLink to="/categorie/led-strips" class="link">led strips van Lideka Home</NuxtLink> bevatten 10 verschillende helderheid standen, en zijn dus volledig dimbaar.
        </p>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Best verkochte LED-strip
      </CTA>

      <SingleImage
          :image-src="require('~/assets/photos/Woonkamer-2.jpg')"
      />

      <LongParagraph
          title="Hoe kan ik led strips dimmen?"
      >
        <p class="text-white font-extralight">
          Sommige led strips - zoals de Lideka led strips - zijn standaard dimbaar. Voor het dimmen van de led strips kan bijvoorbeeld een <NuxtLink to="/products/afstandsbediening-bleutooth" class="link">bluetooth afstandsbediening</NuxtLink> worden gebruikt. Wanneer de led strip niet standaard dimbaar is, kunnen er diverse methoden worden toegepast die het dimmen van de led strip mogelijk maken. Elke methode en/of toepassing heeft zijn eigen voor- en nadelen. Welke manier je gebruikt, is afhankelijk van de omvang van je ledstrip-project. Bij grote projecten met vele, meerdere of lange led strips is een andere methode voor het dimmen beter dan voor een project met slechts één enkele led strip. Daarnaast hangt het er ook vanaf welk dimeffect je wilt bereiken - ga je voor een lichte dimming of wil je verschillende dimstanden voor je led strips?
        </p>
      </LongParagraph>

      <LongParagraph
          title="Dimbare led strips | Mogelijkheden"
      >
        <p class="text-white font-extralight">
          Bij kleine led strip projecten volstaat een eenvoudige transformator of led-dimmer die op het lichtnet kan worden aangesloten. Voor grotere projecten - bijvoorbeeld bij tientallen dimbare led strips - heb je voor elke led strip een eigen transformator voor led dimming nodig. Je kunt dan zelfs bepalen dat de ene led strip een andere dimstand heeft dan andere led strips.
        </p>

        <p class="text-white font-extralight">
          Andere mogelijkheden voor het dimbaar maken van led strips zijn o.a. het gebruik van een afstandsbediening voor dimmen, een zogenaamde wanddimmer, een 0-10 Volt dimmer (vergt een lastige installatie i.v.m. veel bedrading) en een draaidimmer (niet voor alle led strips mogelijk).
        </p>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Best verkochte LED-strip
      </CTA>

      <SingleImage
          :image-src="require('~/assets/photos/Woonkamer-3.jpg')"
      />

      <LongParagraph
        title="Lideka dimbare led strips"
      >
        <p class="font-extralight text-white">
          De led strips van Lideka Home zijn uitstekend trillingsvrij dimbaar en worden veel gebruikt voor sfeerverlichting en een mooi lichteffect. De dimbare led strips zijn bedienbaar met verschillende soorten dimmers, waaronder een bluetooth afstandsbediening of (draadloze) muurdimmers.
        </p>
        <p class="font-extralight text-white">
          Heb je vragen over ons assortiment led strips, led strips accessoires of het dimmen van led strips? <NuxtLink to="/klantenservice" class="link">Neem vrijblijvend contact met ons op.</NuxtLink> We helpen je graag.
        </p>
      </LongParagraph>

      <CTA
          to="/products/rgb-led-light-strip-15-meter-smart-verlichting"
      >
        Best verkochte LED-strip
      </CTA>

      <CenterTitle title="Kies jou specifieke lengte" />
      <Lenghts />

      <div class="mx-auto max-w-7xl lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-10 lg:py-24 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-32 mx-auto" src="~assets/icon/icons8-return-purchase-50.svg" alt="Retour icon" />
              </div>
              <h2 class="text-white font-bold text-left md:text-center text-xl uppercase tracking-wide pt-6 px-6 lg:px-20">
                60 dagen gratis retourneren
              </h2>
              <p class="text-white font-extralight text-left md:text-center pt-6 px-6 lg:px-20">
                Omdat wij geloven in service, en jou willen voorzien van een risicoloze aankoop geven we in eerste instantie 60 dagen gratis retourneren.
              </p>
            </div>
          </div>
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-10 lg:py-24 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-32 mx-auto" src="~assets/icon/icons8-technical-support-50.svg" alt="Support icon" />
              </div>
              <h2 class="text-white font-bold text-left md:text-center text-xl uppercase tracking-wide pt-6 px-6 lg:px-20">
                24/7 ondersteuning beschikbaar
              </h2>
              <p class="text-white font-extralight text-left md:text-center pt-6 px-6 lg:px-20">
                Lideka staat overigens 24/7 klaar om al jouw vragen te beantwoorden.
              </p>
            </div>
          </div>
        </div>
      </div>

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
import TextWithImage from "~/components/blocks/TextWithImage.vue";
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import CTA from "~/components/CTA.vue";
import Lenghts from "~/components/Lenghts.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    Lenghts,
    CTA,
    VideoReviews,
    LongParagraph,
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
    ProductItemGradient,
    NewsletterBlock,
  },
  props: {
    collection: {
      type: Object,
      required: true
    }
  },
});
</script>
