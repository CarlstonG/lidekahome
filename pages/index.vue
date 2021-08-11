<template>
  <div class="bg-black">
    <div class="text-center py-10">
      <h2 class="text-3xl font-bold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">Kwaliteit Led-en Solar
        artikelen</h2>
      <p class="mt-1 text-3xl text-white tracking-wide">van Lideka&reg;</p>
    </div>

    <div class="container mx-auto p-2">
      <NuxtLink to="/categorie/led-strips">
        <img alt="Lideka Home" src="~assets/visuals/LEDxSolar_homepage.webp" loading="lazy"
             class="rounded-lg"/>
      </NuxtLink>
    </div>

    <div class="container mx-auto py-10 px-6 md:px-0">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="flex items-center flex-col">
          <img src="~assets/icons/WEBicons-01.webp" alt="Hoge kwaliteit" class="w-20" loading="lazy" />
          <h2 class="text-white text-center text-sm font-bold mb-2">Hoge Kwaliteit</h2>

          <p class="text-gray-500 text-center text-xs">
            Al onze producten zijn van hoge kwaliteit, en voldoen dan ook aan alle europese eisen. Voordat de artikelen
            verpakt worden ze handmatig dubbel gecheckt.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-02.webp" alt="'Echte' service" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">'Echte' service</h2>
          <p class="text-gray-500 text-center text-xs">
            Lideka® stelt hoge eisen aan service, en daarom zijn we telefonisch 24/7 bereikbaar. Heb je s avonds laat
            een vraag en kom je er niet uit? Wij zijn er voor je…
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-03.webp" alt="Snelle levering" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Snelle levering</h2>
          <p class="text-gray-500 text-center text-xs">
            Wij zijn trotse partner van PostNl, en die zal dan dus ook jouw bestelling bij je thuis bezorgen. Is het
            artikel op voorraad? Vandaag besteld = morgen thuis
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/lideka-bulb.svg" alt="100% oplossings garantie" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">100% oplossings garantie</h2>
          <p class="text-gray-500 text-center text-xs">
            Bij Lideka&reg;️ hechten wij enorm hoge waarde aan service, en daarom lossen wij iedere probleem voor 100%
            op. Schroom niet en neem altijd contact op.
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-2">
      <div class="relative grid grid-cols-1 md:grid-cols-2">
        <div class="pr-2 pl-2">
          <NuxtLink class="relative block" to="categorie/led-strips">
            <img src="~assets/visuals/ambience_bedroom_nl.webp"
                 class="rounded-lg" loading="lazy" />

            <div class="absolute right-0 left-0 bottom-0 pb-4">
              <button type="button"
                      class="mx-auto hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 rounded-full py-2 px-10 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Producten bekijken
              </button>
            </div>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-2 py-6 md:py-0">
          <div v-if="collection" v-for="product in collection.products" :key="product.id">
            <ProductItem :gradient="true" :product="product" class="mx-2 md:mx-10" />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-8 py-12 px-6 md:px-0">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-04.webp" alt="Gratis Verzending" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Gratis Verzending</h2>
          <p class="text-gray-500 text-center text-xs">
            Omdat Lideka® voor service staat bieden wij al onze artikelen aan met gratis verzending (vanaf 20,-). Dat
            noemen we service!
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-05.webp" alt="Makkelijk retourneren" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Makkelijk retourneren</h2>
          <p class="text-gray-500 text-center text-xs">
            Lideka® maakt retourneren makkelijk. Via ‘Returnless’ kun je op een PostNl locatie jouw pakketje gratis
            afleveren en scannen met je mobiel.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-06.webp" alt="100% tevredenheidsgarantie" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">100% tevredenheidsgarantie</h2>
          <p class="text-gray-500 text-center text-xs">
            Wij staan volledig achter de kwaliteit van onze producten en bieden jou daarom een onvoorwaardelijke
            garantie van 12-24 maanden.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-07.webp" alt="Duurzaamheid" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2">Duurzaamheid</h2>
          <p class="text-gray-500 text-center text-xs">
            Lideka® denkt mee aan het milieu, met een duurzame achtergrond werken de producten energiebesparend, en
            energieopwekkend.
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-2">
      <div class="relative grid grid-cols-1 md:grid-cols-2">
        <div class="pr-2 pl-2 mb-6 md:mb-0">
          <NuxtLink class="relative block"
                    to="/products/lideka-solar-powerbank-30-000-mah-usb-c-waterdicht-4-usb-poorten-zonneenergie">
            <img src="~assets/visuals/Solar_Powerbank_product.webp" alt="Product Solar Powerbank" class="rounded-lg"
                 loading="lazy"
                 width="100%" height="100%"/>

            <div class="absolute top-0 right-0 left-0 pt-4">
              <h2 class="text-5xl text-white filter drop-shadow-lg text-center"><strong class="font-bold">Solar</strong>
                Powerbank</h2>
            </div>
            <div class="absolute right-0 left-0 bottom-0 pb-4">
              <button type="button"
                      class="mx-auto hover:opacity-50 bg-gradient-to-br from-orange-400 to-red-600 rounded-full py-2 px-10 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Product bekijken
              </button>
            </div>
          </NuxtLink>
        </div>
        <div class="pr-2 pl-2">
          <NuxtLink to="/categorie/solar-powerbank">
            <img src="~assets/visuals/Solar_Powerbank_square.webp" alt="Product Solar Powerbank" class="rounded-lg"
                 loading="lazy"
                 width="100%" height="100%"/>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-2">
      <div class="relative grid grid-cols-1 md:grid-cols-2">
        <div class="pr-2 pl-2">
          <NuxtLink v-if="secondaryCollection && secondaryCollection.url" class="relative block" :to="secondaryCollection.url">
            <img alt="Solar tuinverlichting" src="~assets/visuals/SOLAR_garden_square.webp" class="rounded-lg" loading="lazy"
                 width="100%" height="100%"/>

            <div class="absolute top-0 right-0 left-0 pt-4">
              <h2 class="text-5xl text-white filter drop-shadow-lg text-center"><strong class="font-bold">Solar</strong>
                Tuinverlichting</h2>
            </div>
            <div class="absolute right-0 left-0 bottom-0 pb-4">
              <button type="button"
                      class="mx-auto hover:opacity-50 bg-gradient-to-br from-orange-400 to-red-600 rounded-full py-2 px-10 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                Bekijk alle Solar Lamps
              </button>
            </div>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-2 py-6 md:py-0">
          <div v-if="secondaryCollection" v-for="product in secondaryCollection.products" :key="product.id">
            <ProductItem :gradient="true" :product="product" class="mx-2 md:mx-10" />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto pt-16 py-32 pb-20 px-6 md:px-0">
      <div class="text-xs text-gray-500 max-w-full prose">
        <h1 style="color: #ccc;">
          LED strips – sfeervolle verlichting voor binnen en buiten
        </h1>
        <p>
          Verhoog de sfeer binnen en buiten met de LED strips van Lideka Home. LED verlichting is de nieuwe trend voor huishoudens, verkrijgbaar in diverse maten en daardoor multifunctioneel te gebruiken. Wat zijn de voordelen van LED strips en waar kan je deze stijlvolle lichtsnoeren in huis installeren?
        </p>
        <h2 style="color: #ccc;">
          Wat zijn LED strips?
        </h2>
        <p>
          LED strips, ook wel geschreven als ledstrips, zijn lichtsnoeren met lichtcomponenten. LED staat voor Light Emitting Diode, vrij vertaald als lichtgevende lampjes. Het kenmerkende element van een LED strip is de veelzijdigheid. Wist je bijvoorbeeld dat je binnen het kleurenpalet keuze hebt uit meer dan 16 miljoen kleuren en tinten? Het zorgt ervoor dat LED verlichting in vrijwel elke ruimte een sfeervolle toepassing kent. Voorbeelden zijn LED strips in de badkamer, slaapkamer of woonkamer. Je kunt de ledstrips tegen het plafond installeren, of juist langs de rand van de spiegel in de badkamer. Zelfs als vervanging van de bestaande verlichting in de ruimte!
          Steeds meer mensen gebruiken LED strips buiten. En waarom ook niet? We kopen tegenwoordig de mooiste tuinsets om buiten te kunnen zitten, en sfeervolle verlichting hoort daar uiteraard bij. LED strips zijn eenvoudig te bevestigen langs de onderkant van het dak, en blijven dankzij een stevige plakrand altijd op hun plek hangen. Zo creëer je ook buiten een unieke sfeer, waarmee in de eigen tuin loungen nog leuker wordt.
        </p>
        <h2 style="color: #ccc;">
          Hoe werkt LED?
        </h2>
        <p>
          Zoals je misschien al wist is LED een energiezuinige manier om ruimtes van verlichting te voorzien. Binnen LED verlichting wordt 90 tot 95 procent van de energie gebruikt om licht te produceren. Bij de traditionele gloeilamp is dit hooguit 10 procent, en die besparing in energie merk je. De gloeilamp wordt voelbaar warmer dan LED lampen, waardoor onnodig veel energie verloren gaat. Een LED verlichting strip is derhalve een stuk efficiënter. Bij een LED strip worden de lampjes op evenredige afstand van elkaar op het lichtsnoer gesoldeerd, en zorgen daarmee over kleine en grote afstand voor een gelijke afgifte van licht. Sfeervol en efficiënt.
          5V, 12V en 24V ledstrips
        </p>
        <p>
          Overweeg je LED strips te kopen? Dan is het belangrijk om rekening te houden met het Voltage. De LED strips zijn beschikbaar in 5 en 12 volt. Langs de 5V ledstrips en 12V ledstrips loopt minder stroom, waardoor het over het algemeen als veiliger wordt ervaren. Voor de kortere ledstrips, zoals een LED strip van 3, 5 of 10 meter, is dit voltage ideaal. Voor de grotere lengtematen vanaf 10 meter is 12V de beste optie.
        </p>
        <h2 style="color: #ccc;">Voordelen LED strips</h2>
        <p>
        We hebben de voordelen van LED strips al kort laten doorschemeren. Het is een moderne vorm van verlichting voor binnen- en buitenshuis, alsmede voor bedrijfspanden. Bij Lideka Home willen we iedereen de kans geven om de voordelen van LED strips te ervaren. Wat zijn de belangrijkste voordelen van LED verlichting?
        </p>
        <ul>
          <li>Energiezuinige vorm van verlichting</li>
          <li>Verkrijgbaar in verschillende lengtematen</li>
          <li>LED strips zijn eenvoudig zelf op maat te maken</li>
          <li>Ruim kleurenpalet met miljoenen sprekende RGB kleuren en tinten</li>
          <li>Waterproof (IP65) en daarmee ook buiten te gebruiken</li>
          <li>Extra lange levensduur</li>
          <li>Sfeervol wonen, geschikt voor iedere gelegenheid</li>
        </ul>
        <h2 style="color: #ccc;">
          LED strips met lichteffecten
        </h2>
        <p>
        Nog meer halen uit je LED strips? Maak kennis met onze verrassende lichteffecten, ideaal voor iedere gelegenheid. Heb je een feestje? Dan kies je voor de Strobe stand: flitsende lichten, waarmee je iedereen in beweging krijgt. Een lounge avond met vrienden of familie? Met onze Fade verlichting creëer je een unieke sfeer. Deze verlichting biedt wisselende kleuren met donkere intervallen. De Flash verlichting op onze LED strips wisselen doorlopend van kleur en dat geeft een supergaaf effect. Tot slot kun je nog kiezen voor Smooth LED verlichting; gebruikt voor speciale gelegenheden, feestjes of simpelweg voor de optimale lounge experience.
        </p>
        <h2 style="color: #ccc;">Waterdichte LED strips</h2>
        <p>
          Onze 5, 12 en 24V LED strips zijn waterdicht, en daardoor ook geschikt voor buiten. Lekker als je ’s avonds tot in de late uurtjes buiten wilt genieten van zomerse omstandigheden, of juist in de winter, wanneer je buiten bij de warme kachel wilt zitten. Met onze IP65 bescherming garanderen we dat de LED strips ook in een vochtige omgeving optimaal functioneren. Op zoek naar LED strips die waterdicht zijn? Maak je keuze uit het ruime assortiment LED strips bij Lideka Home.
        </p>
        <h2 style="color: #ccc;">
          LED strips monteren: wat heb je nodig?
        </h2>
        <p>
          Wil je LED strips gebruiken? Montage is erg eenvoudig! Je kunt de LED strip naar eigen inzicht op maat afknippen op de aangegeven markering. Ideaal wanneer je iets van lengte te kort komt. De plakrand is extra stevig en blijft na montage op een glad oppervlak goed zitten. Met een totaal van 50.000 branduren kan je nog jaren genieten van unieke LED verlichting in huis. Welke onderdelen komen nog meer kijken bij de montage van LED strips?
        </p>
        <h2 style="color: #ccc;">Smart app Lideka Home of afstandsbediening LED</h2>
        <p>
          Met de Smart app van Lideka Home ervaar je het gewenste gebruiksgemak. Je kunt hiermee de LED strip op afstand bedienen en kiezen uit het volledige kleurenpalet. Heerlijk vanaf je smartphone schakelen tussen alle kleuren en tinten; de fijnste manier om de sfeer in huis te bepalen. Wil je niet kiezen voor de Smart app? Dan gebruik je onze bijgeleverde LED strip afstandsbediening.
        </p>
        <h2 style="color: #ccc;">Voedingsadapter LED strip</h2>
        <p>
          Zoals we al eerder vertelden, heb je bij de aankoop van LED strips keuze uit 5V, 12V of 24V. Welke keuze je hierin maakt, is eveneens afhankelijk van de voedingsadapter. Aangezien de normale stroomvoorziening vanuit het stopcontact vaststaat op 230V, dien je deze voor de LED verlichting nog wel om te zetten.
        </p>
        <h2 style="color: #ccc;">Toepassing van Led-strips</h2>
        <p>
          Led verlichting is toepasbaar in het gehele huis en door de waterdichtheid van de strips kun je ze ook buiten toepassen. Verlicht jouw schuur met helder wit licht en creëer sfeer in de woonkamer met elegante kleuren. De keuze is aan jou!
        </p>
      </div>
    </div>

    <div class="container mx-auto pt-16 py-32 pb-20 px-6 md:px-0">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://www.facebook.com/lidekahome" target="_blank"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">Facebook</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"/>
          </svg>
        </a>

        <a href="https://www.instagram.com/lidekahome" target="_blank"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">Instagram</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"/>
          </svg>
        </a>

        <a href="https://www.linkedin.com/company/lideka" target="_blank"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">LinkedIn</span>
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        </a>

        <a href="https://www.youtube.com/channel/UCM6KUMoinLVJZUIOx3Mm2Tw" target="_blank"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">YouTube</span>
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductItem from "~/components/products/ProductItem.vue";
import {getCollection} from "~/services/ApiService";

export default Vue.extend({
  components: {ProductItem},
  data() {
    return {
      collection: {},
      secondaryCollection: {},
    };
  },

  head() {
    return {
      title: 'Lideka Home - Kwaliteit Led-en Solar artikelen',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Lideka Home maakt het leven leuker, gezelliger en aantrekkelijker. Binnen de webshop vind je alle producten waarmee je die fijne sfeer meeneemt naar huis. Met unieke LED-verlichting creëer je zowel binnen als buiten een comfortabele omgeving; een plek waar je zelf graag bent, en waar je het liefst zit met de mensen om wie je het meest geeft.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Lideka Home'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Lideka Home maakt het leven leuker, gezelliger en aantrekkelijker. Binnen de webshop vind je alle producten waarmee je die fijne sfeer meeneemt naar huis. Met unieke LED-verlichting creëer je zowel binnen als buiten een comfortabele omgeving; een plek waar je zelf graag bent, en waar je het liefst zit met de mensen om wie je het meest geeft.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('../assets/visuals/LEDxSolar_homepage.webp')
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Lideka Home maakt het leven leuker, gezelliger en aantrekkelijker. Binnen de webshop vind je alle producten waarmee je die fijne sfeer meeneemt naar huis. Met unieke LED-verlichting creëer je zowel binnen als buiten een comfortabele omgeving; een plek waar je zelf graag bent, en waar je het liefst zit met de mensen om wie je het meest geeft.'
        }
      ]
    }
  },

  methods: {
    async getCollections() {
      this.collection = await getCollection('led-strips', {
        limit: 4,
        reverseImages: true,
      })

      this.secondaryCollection = await getCollection('solar-tuinverlichting', {
        limit: 4,
        reverseImages: true,
      })
    },
  },

  async fetch() {
    await this.getCollections();
  },
})
</script>
