<template>
  <div class="bg-black">
    <div class="w-full bg-white">
      <video
        preload="none"
        :poster="require('/assets/photos/rgb-slaapkamer.jpg')"
        class="w-full"
        autoplay
        muted
        playsinline
      >
        <source
          src="https://cdn.shopify.com/videos/c/vp/4ab7983604dd4e5fb389611a194ede28/4ab7983604dd4e5fb389611a194ede28.HD-1080p-7.2Mbps.mp4"
          type="video/mp4"
        />
      </video>
      <div
        class="md:absolute w-fit bottom-2 left-2 px-6 py-4 md:p-6 md:bottom-20 md:left-0 md:bg-black/50 rounded-r-2xl "
      >
        <div class="lg:mt-0 bottom-2 md:bottom-20 md:left-20 items-center">
          <h1
            class="mx-auto my-2 text-3xl text-black md:text-white font-bold tracking-wide"
          >
            Wij creëren de ultieme sfeer<br />
            voor jou.
          </h1>
          <h2
            class="mx-auto my-2 text-lg font-extralight text-black md:text-white mt-2 w-fit"
          >
            Zowel binnen als buiten het huis, en dat doen
            <br v-if="!$device.isMobile" />
            we met betaalbare Slimme LED-strips!
          </h2>
        </div>
        <div class="my-4 flex justify-left">
          <CTA to="/products/rgb-led-light-strip-20-meter-smart-verlichting">
            Best verkochte LED-strips
          </CTA>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto p-2 hidden lg:block">
      <div class="flex overflow-x-auto">
        <div
          class="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8"
        >
          <div class="flex items-center text-sm font-medium text-indigo-400">
            <!-- Heroicon name: outline/truck -->
            <svg
              class="mr-2 flex-none w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
            <DeliveryTime />
          </div>

          <div class="flex items-center text-sm font-medium text-indigo-400">
            <!-- Heroicon name: outline/badge-check -->
            <svg
              class="mr-2 flex-none w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <p>Gratis verzending in NL en BE</p>
          </div>

          <div class="flex items-center text-sm font-medium text-indigo-400">
            <!-- Heroicon name: outline/calendar -->
            <svg
              class="mr-2 flex-none w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p>60 dagen gratis retourneren in NL en BE</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10 px-6">
      <h2 class="mx-auto text-3xl text-center text-white font-bold">
        De 4 meest populaire soorten LED-strips,
      </h2>
      <p class="text-white text-2xl text-center mt-2">welke kies jij?</p>
    </div>

    <div class="px-6 lg:px-0 max-w-7xl mx-auto mt-10">
      <CategorySlider />
    </div>

    <div class="px-6 lg:px-0 max-w-7xl mx-auto mt-10">
      <VideoReviews />
    </div>

    <div class="px-6 lg:px-0 max-w-7xl mx-auto flex justify-center">
      <a href="#usages">
        <button
          class="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 rounded-full text-white"
        >
          <span>Welke kamer zou jij willen opfleuren?</span>
        </button>
      </a>
    </div>

    <Partners v-if="!$device.isMobile" />

    <div class="mx-auto max-w-7xl my-10 px-6">
      <div class="grid grid-cols-6 gap-2">
        <div
          class="md:pr-8 pb-8 col-span-6 md:col-span-3 md:border-r-2 border-b-2 md:border-b-0 border-gray-600"
        >
          <img
            v-show="enabled"
            class="mx-auto swap-image rounded-2xl"
            src="~assets/creatives/kitchen_functional.jpg"
            alt="kitchen functional"
          />
          <img
            v-show="!enabled"
            class="mx-auto swap-image rounded-2xl"
            src="~assets/creatives/kitchen_colorful.jpg"
            alt="kitchen colorful"
          />
          <div
            v-if="$device.isMobile"
            class="w-full flex justify-center items-center pt-6"
          >
            <div class="px-2 ">
              <h3 class="text-white uppercase text-center">
                 kleurrijke <br />
                verlichting
              </h3>
            </div>
            <div class="px-4 mt-4">
              <switches
                v-model="enabled"
                color="blue"
                type-bold="true"
              ></switches>
            </div>
            <div class="px-2">
              <h3 class="text-white uppercase text-center">
               functionele<br />
                verlichting
              </h3>
            </div>
          </div>
        </div>

        <div
          class="p-2 flex items-center col-span-6 md:col-span-3 grow-1 text-white"
        >
          <div>
            <h2 class="mx-auto text-3xl text-center font-bold">
              Schakel om de magie te zien!
            </h2>
            <p class="px-4 text-center mx-auto pt-6">
              Schakel tussen verschillende soorten verlichting waarmee u uw huis
              kunt verfraaien. Lideka LED kan uw huis verlichten voor het
              alledaagse, informele leven en het opfleuren voor feestjes!
            </p>
            <div
              v-if="!$device.isMobile"
              class="w-full flex justify-center items-center pt-6"
            >
              <div class="px-2 ">
                <h3 class="text-white uppercase text-center">
                 kleurrijke<br />
                  verlichting
                </h3>
              </div>
              <div class="px-4 mt-4">
                <switches
                  v-model="enabled"
                  color="blue"
                  type-bold="true"
                ></switches>
              </div>
              <div class="px-2">
                <h3 class="text-white uppercase text-center">
                 functionele <br />
                  verlichting
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <Calendly /> -->

    <div class="mx-auto max-w-7xl mb-10 px-6">
      <h2 class="mx-auto text-3xl text-center text-white font-bold">
        Kies jou specifieke lengte
      </h2>
    </div>

    <div class="mb-10 px-6">
      <Lenghts />
    </div>

    <div class="mx-auto max-w-7xl mb-10 px-6">
      <h2 class="mx-auto text-3xl text-center text-white font-bold">
        Kies hier jouw specifieke toepassing
      </h2>
    </div>

    <div class="px-6 lg:px-0 mb-10" id="usages">
      <Usages />
    </div>

    <div class="mx-auto max-w-7xl py-10 px-6 lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          class="relative flex justify-center items-center green-gradient"
          style="border-radius: 20px"
        >
          <div
            class="h-full py-10 lg:py-32 flex justify-center flex-col"
            style="z-index: 1"
          >
            <div class="flex-grow flex items-center">
              <img
                class="w-40 mx-auto"
                src="~assets/icon/icons8-forest.svg"
                alt="Icon voor bomen en bosjes"
              />
            </div>
            <h3
              class="text-gray-100 tracking-wide text-center font-bold uppercase mt-4"
            >
              Duurzame verlichting
            </h3>
            <p
              class="text-white font-extralight text-lg pt-6 px-6 lg:px-20 text-left md:text-center tracking-wide"
            >
              Onze duurzame smart verlichting is met zorg geproduceerd,
              makkelijk bedienbaar, en draagt bij aan het behoud van onze
              planeet!
            </p>
          </div>
        </div>
        <div
          class="relative flex justify-center items-center default-gradient"
          style="border-radius: 20px"
        >
          <div
            class="h-full py-10 lg:py-32 flex justify-center flex-col"
            style="z-index: 1"
          >
            <div class="flex-grow flex items-center">
              <img
                class="w-40 mx-auto"
                src="~assets/icon/icons8-return-purchase-50.svg"
                alt="Winkelwagen icon"
              />
            </div>
            <h3
              class="text-gray-100 tracking-wide text-center font-bold uppercase mt-4"
            >
              Gratis retourneren
            </h3>
            <p
              class="text-white font-extralight text-lg pt-6 px-6 lg:px-20 text-left md:text-center tracking-wide"
            >
              Ben je niet tevreden met je aankoop? Retourneer makkelijk, gratis,
              en ontvang het volledige aankoopbedrag terug.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full relative lg:px-0 py-8 space-y-6 lg:space-y-0 bg-white px-4 md:px-0"
    >
      <div class="md:max-w-7xl mx-auto ">
        <img
          src="~assets/headers/1.jpg"
          class="rounded-2xl mx-auto "
          alt="Lideka home"
        />
      </div>
      <div
        class="lg:absolute bottom-20 right-10 left-20 px-4 rounded-2xl p-10 prose prose-teal-500 text-white"
        style="background: rgba(0, 0, 0, 0.75)"
      >
        <h2
          class="mx-auto text-3xl uppercase text-white font-bold mb-4"
          style="color: white"
        >
          Lideka home - Betaalbare Slimme LED-strips
        </h2>
        <p class="mx-auto text-white font-extralight">
          Lideka is een merk dat zich concentreert op het produceren van
          <a target="_blank" class="link" href="/categorie/led-strips"
            >slimme betaalbare LED-strips.</a
          >
          Op dit moment bestaat ons assortiment uit
          <a class="link" href="/categorie/rgb-led-strips">RGB LED-strips</a>,
          <a class="link" href="/categorie/rgb-ic-led-strips"
            >RGBIC LED-strips</a
          >,
          <a class="link" href="/categorie/tv-led-strips">TV LED-strips</a>
          <a class="link" href="/categorie/led-pakketten"
            >LED-strips pakketten</a
          > <a class="link" href="/categorie/solar-powerbank">Powerbanks en Solar Chargers</a>.
        </p>
        <p class="mx-auto text-white font-extralight">
          Ons assortiment zal snel uitgebreid worden met andere soorten slimme
          verlichting. Wij onderscheiden onszelf van de concurrentie door een
          <strong>goede, degelijke kwaliteit</strong> te leveren met een
          <strong>lange levensduur</strong>, en de
          <strong>allerbeste service</strong>. Tegelijk dragen we bij aan een
          vermindering van energieverbruik.
        </p>
        <p class="mx-auto text-white font-extralight">
          Dit alles tegen een verkoopprijs die voor vrijwel alle burgers
          gemakkelijk haalbaar is. En op deze wijze creëren we voor iedereen een
          meer <strong>sfeervolle, aangenamere leefomgeving</strong>.
        </p>
      </div>
    </div>

    <div class="px-6 lg:px-0 max-w-7xl mx-auto mt-6 flex justify-center">
      <a href="#usages">
        <button
          class="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 rounded-full text-white"
        >
          <span>Welke kamer zou jij willen opfleuren?</span>
        </button>
      </a>
    </div>

    <div class="max-w-7xl mx-auto mt-10 lg:px-0 px-6">
      <div class="_house">
        <div
          class="flex flex-col items-center justify-center text-center"
          style="height: 500px"
        >
          <img class="w-24" src="~assets/design/kiyoh.png" alt="Kiyoh logo" />
          <h2 class="py-2 pt-4 text-white text-2xl font-bold">Kiyoh</h2>
          <div class="flex">
            <svg
              v-for="i in 5"
              :key="i"
              class="flex-shrink-0 h-7 w-7 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <p class="text-white p-2 font-extralight">100+ beoordelingen</p>
          <a
            href="https://www.kiyoh.com/reviews/1064733/lideka"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 rounded-full text-white"
          >
            Bekijk onze beoordelingen
          </a>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl py-10 px-6 lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="relative default-gradient" style="border-radius: 20px">
          <div class="py-10 lg:py-16" style="z-index: 1">
            <div class="flex items-center">
              <img
                class="w-32 mx-auto"
                src="~assets/icon/icons8-technical-support-50.svg"
                alt="Support icon"
              />
            </div>
            <h2
              class="text-white font-bold text-center text-2xl px-6 mt-4 uppercase tracking-wide"
            >
              Service
            </h2>
            <p class="text-white font-extralight pt-6 px-6">
              Een goede service voor jou vinden wij belangrijk. Wij geloven dat
              het onze verantwoordelijkheid is om jou te helpen en te adviseren
              waar dat nodig is, niet alleen tijdens het verkoopproces, maar
              vooral na het verkoopproces.
            </p>
            <p class="text-white font-extralight pt-6 px-6">
              Je kunt ons 24/7 bereiken op (<a
                class="link"
                href="tel:0850601297"
                >085-0601297</a
              >), je zult niet altijd direct antwoord kunnen krijgen op
              specifieke vragen, maar onze experts zullen je altijd zo snel
              mogelijk antwoord geven. We streven ernaar om altijd binnen 24 uur
              terug te bellen of terug te mailen, dit kan op
              <a class="link" href="mailto:klantenservice@lidekahome.nl"
                >klantenservice@lidekahome.nl</a
              >.
            </p>
          </div>
        </div>
        <div class="relative default-gradient" style="border-radius: 20px">
          <div class="py-10 lg:py-16" style="z-index: 1">
            <div class="flex items-center">
              <img
                class="w-32 mx-auto"
                src="~assets/icon/icons8-verified-account-50.svg"
                alt="Verified icon"
              />
            </div>
            <h2
              class="text-white font-bold text-center text-2xl px-6 mt-4 uppercase tracking-wide"
            >
              Kwaliteit
            </h2>
            <p class="text-white font-extralight pt-6 px-6">
              Zoals je hierboven al hebt gelezen gaan we voor een
              <strong>degelijke kwaliteit</strong>. Een kwaliteit waarop jij kan
              bouwen, en een kwaliteit waarin jij kan geloven.
            </p>
            <p class="text-white font-extralight pt-6 px-6">
              Al onze fabrieken worden zorgvuldig gecontroleerd op zaken zoals:
              Kinderarbeid, slechte werkcondities en slechte salarissen. Alle
              materialen die we gebruiken hebben een
              <strong>uitstekende kwaliteit</strong>, tevens voldoen alle
              artikelen aan de zogeheten <strong>CE markeringen</strong>.
            </p>
            <p class="text-white font-extralight pt-6 px-6">
              Mocht er onverhoopt iets misgaan of ben je toch niet tevreden? Er
              is altijd iemand voor jou beschikbaar om al je obstakels op te
              lossen, twijfel nooit om contact op te nemen.
            </p>
          </div>
        </div>
        <div class="relative default-gradient" style="border-radius: 20px">
          <div class="py-10 lg:py-16" style="z-index: 1">
            <div class="flex items-center">
              <img
                class="w-32 mx-auto"
                src="~assets/icon/icons8-low-price-euro-50.svg"
                alt="Winkelwagen icon"
              />
            </div>
            <h2
              class="text-white font-bold text-center text-2xl px-6 mt-4 uppercase tracking-wide"
            >
              Betaalbaarheid
            </h2>
            <p class="text-white font-extralight pt-6 px-6 mx-auto max-w-2xl">
              Slimme verlichting kan erg duur zijn, en vooral
              <a class="link" href="/categorie/led-strips">slimme led-strips</a
              >, nu kun je ook voor een goedkopere gaan maar je wilt toch
              <strong>kwaliteit</strong>.
            </p>
            <p class="text-white font-extralight pt-6 px-6 mx-auto max-w-2xl">
              Vaak wordt er gedacht dat kwaliteit automatisch duur is, maar
              kwaliteit hoeft echt niet duur te zijn. Door de
              <strong>juiste processen</strong> te hanteren in de fabriek en de
              juiste partners te vinden kun jij een hele degelijke prijs
              neerzetten die voor iedereen haalbaar is.
            </p>
            <p class="text-white font-extralight pt-6 px-6 mx-auto max-w-2xl">
              Dat is Lideka en dat is waar wij in <strong>geloven</strong>,
              betaalbare slimme LED-strips en verlichting, niet alleen voor jou,
              maar voor <strong>iedereen</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-6 lg:px-0 max-w-7xl mx-auto mt-3 mb-6 flex justify-center">
      <a href="#usages">
        <button
          class="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 rounded-full text-white"
        >
          <span>Welke kamer zou jij willen opfleuren?</span>
        </button>
      </a>
    </div>

    <div class="w-full pt-8 py-12 px-6 md:px-0 bg-white">
      <div class=" mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="flex items-center flex-col">
          <img
            loading="lazy"
            src="~assets/icons/WEBicons-04.webp"
            alt="Gratis Verzending"
            class="w-20"
          />
          <h2
            class="text-gray-800 text-center text-sm font-bold mb-2 mt-2 tracking-wide uppercase"
          >
            Gratis Verzending
          </h2>
          <p class="text-gray-800 text-center text-sm">
            Omdat Lideka® voor service staat bieden wij al onze artikelen aan
            met gratis verzending (vanaf 20,-). Dat noemen we service!
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img
            loading="lazy"
            src="~assets/icons/WEBicons-05.webp"
            alt="Makkelijk retourneren"
            class="w-20"
          />
          <h2
            class="text-gray-800 text-center text-sm font-bold mb-2 mt-2 tracking-wide uppercase"
          >
            Makkelijk retourneren
          </h2>
          <p class="text-gray-800 text-center text-sm">
            Lideka® maakt retourneren makkelijk. Via ‘Returnless’ kun je op een
            PostNl locatie jouw pakketje gratis afleveren en scannen met je
            mobiel.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img
            loading="lazy"
            src="~assets/icons/WEBicons-06.webp"
            alt="100% tevredenheidsgarantie"
            class="w-20"
          />
          <h2
            class="text-gray-800 text-center text-sm font-bold mb-2 mt-2 tracking-wide uppercase"
          >
            100% tevredenheidsgarantie
          </h2>
          <p class="text-gray-800 text-center text-sm">
            Wij staan volledig achter de kwaliteit van onze producten en bieden
            jou daarom een onvoorwaardelijke garantie van 12-24 maanden.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img
            loading="lazy"
            src="~assets/icons/WEBicons-07.webp"
            alt="Duurzaamheid"
            class="w-20"
          />
          <h2
            class="text-gray-800 text-center text-sm font-bold mb-2 mt-2 tracking-wide uppercase"
          >
            Duurzaamheid
          </h2>
          <p class="text-gray-800 text-center text-sm">
            Lideka® denkt mee aan het milieu, met een duurzame achtergrond
            werken de producten energiebesparend, en energieopwekkend.
          </p>
        </div>
      </div>
    </div>

    <Newsletter />

    <div class="max-w-7xl mx-auto pt-16 py-32 pb-20 px-6 md:px-0">
      <SocialIcons />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";
import Usages from "~/components/blocks/Usages.vue";
import CategorySlider from "~/components/CategorySlider.vue";
import Reviews from "~/components/reviews/Reviews.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import Lenghts from "~/components/Lenghts.vue";
import Calendly from "~/components/Calendly.vue";
import Newsletter from "~/components/NewsletterBlock.vue";
import DeliveryTime from "~/components/DeliveryTime.vue";
import Partners from "~/components/Partners.vue";
import SocialIcons from "~/components/SocialIcons.vue";
import CTA from "~/components/CTA.vue";

export default Vue.extend({
  components: {
    Lenghts,
    Reviews,
    VideoReviews,
    CategorySlider,
    Usages,
    ProductItem,
    ProductItemGradient,
    Calendly,
    Newsletter,
    DeliveryTime,
    Partners,
    SocialIcons,
    CTA,
  },

  data() {
    return {
      collection: {},
      secondaryCollection: {},
      enabled: false,
    };
  },

  head() {
    return {
      title: "Lideka Home - Ruim Aanbod Slimme Led-strips",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Lideka Home - Ruim Aanbod Slimme Led-strips",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: require("../assets/visuals/LEDxSolar_homepage.webp"),
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content:
            "Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.",
        },
      ],
    };
  },

  // @ts-ignore
  jsonld() {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        url: "https://lidekahome.nl/",
        email: "klantenservice@lidekahome.nl",
        name: "Lideka Home - Ruim Aanbod Slimme Led-strips",
        description:
          "Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Koningsdreef 9",
          postalCode: "3261",
          streetAddress: "NJ Oud-beijerland",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://lidekahome.nl/",
          query: "required",
        },
        logo: "https://lidekahome.nl/_nuxt/img/78f730f.svg",
        telephone: "+31 (0)85 - 06 01 297",
        brand: [
          {
            "@type": "Organization",
            name: " Lideka Home ",
          },
        ],
        sameAs: [
          "https://www.facebook.com/lidekahome",
          "https://www.instagram.com/lidekahome.nl",
          "https://www.linkedin.com/company/lideka",
          "https://www.youtube.com/channel/UCM6KUMoinLVJZUIOx3Mm2Tw",
          "https://pin.it/7w89n1e",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Lideka Home - Ruim Aanbod Slimme Led-strips",
        telephone: "+31 (0)85 - 06 01 297",
        url: "https://lidekahome.nl/",
        description:
          "Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.",
        priceRange: "€€",
        logo: "https://lidekahome.nl/_nuxt/img/78f730f.svg",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Netherlands",
          addressRegion: "NJ",
          addressLocality: "Koningsdreef 9",
          postalCode: "3261",
          streetAddress: "NJ Oud-beijerland",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://lidekahome.nl/",
          query: "required",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          bestRating: "5",
          ratingCount: "5",
          ratingValue: "5",
        },
        hasMap:
          "https://www.google.com/maps/place/koningsdreef+9,+3261+LJ+Oud-Beijerland/@51.8178223,4.4142213,17z/data=!3m1!4b1!4m9!1m2!2m1!1sKoningsdreef+9,+Oud-beijerland,+3261+NJ!3m5!1s0x47c436fbe5220f89:0xeb85a8072b37361!8m2!3d51.817819!4d4.41641!15sCidLb25pbmdzZHJlZWYgOSwgT3VkLWJlaWplcmxhbmQsIDMyNjEgTkqSARBnZW9jb2RlZF9hZGRyZXNz",
        review: [
          {
            "@type": "Review",
            author: "Rene Van Der Werff",
            datePublished: "12/01/2022",
            reviewBody:
              "Na wat contact via de mail en whatsapp ,de led strip ontvangen en alles is wat ik had verwacht. Compleet inclusief een duidelijke beschrijving. Als je de app (inclusief bij de aanschaf) geïnstalleerd hebt kun je helemaal los. Leuk muziekje aan en de ledstrip speelt vrolijk mee. Top tevreden over de service.",
            name: "",
            reviewRating: {
              "@type": "Rating",
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            "@type": "Review",
            author: "Enrique Van Der horst",
            datePublished: "15/09/2021",
            reviewBody:
              "Vandaag de led strips ontvangen en zelf met gemak geplaatst! Tot nu toe zeer tevreden met het resultaat. Ik hoop dat ze lang mee gaan!",
            name: "",
            reviewRating: {
              "@type": "Rating",
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            "@type": "Review",
            author: "Lars Hopstaken",
            datePublished: "17/11/2021",
            reviewBody:
              "LED-strips besteld bij Lideka, helaas een kleine tegenslag maar na telefonisch contact werd dit binnen 1 werkdag helemaal opgelost. Hele snelle, vriendelijke en bovenal goed service! Ook de strips zelf zijn van goede kwaliteit, plug & play en genieten! Een absolute aanrader als je op zoek bent naar LED-strips",
            name: "",
            reviewRating: {
              "@type": "Rating",
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            "@type": "Review",
            author: "Berkay Gonultas",
            datePublished: "05/09/2021",
            reviewBody:
              "De strips zijn heel mooi en de klantenservice is heel klantvriendelijk",
            name: "",
            reviewRating: {
              "@type": "Rating",
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
          {
            "@type": "Review",
            author: "joost hoek",
            datePublished: "14/09/2021",
            reviewBody: "Super mooie website en snelle service",
            name: "",
            reviewRating: {
              "@type": "Rating",
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
          },
        ],
      },
    ];
  },
  async mounted() {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push({ event: "path_tracking", path: this.$route.path });
  },
});
</script>

<style lang="scss">
._living-room {
  background: url("~assets/design/living-room.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._bedroom {
  background: url("~assets/design/bedroom.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._kitchen {
  background: url("~assets/design/kitchen.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._gameroom {
  background: url("~assets/design/gameroom.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._bathroom {
  background: url("~assets/design/bathroom.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._other {
  background: url("~assets/headers/1.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._house {
  background: url("~assets/design/house.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._bed {
  background: url("~assets/design/bed.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._ceiling {
  background: url("~assets/design/ceiling.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._tv {
  background: url("~assets/design/home.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._rgb-ic {
  background: url("~assets/design/landings/rgb-ic/banner-2.png") no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._rgb {
  background: url("~assets/design/landings/rgb-led-strips/banner-5.png")
    no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

@mixin animate($animation, $duration, $method, $times) {
  animation: $animation $duration $method $times;
}

@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

.swap-image {
  @include keyframes(fade-in) {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @include animate(fade-in, 1s, linear, 1);
}
</style>
