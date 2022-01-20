<template>
  <div class="bg-black">
    <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 mb-10 lg:mb-0">
      <video preload="none" :poster="require('assets/video-poster-1.jpg')" class="w-full h-full rounded-2xl" autoplay muted playsinline>
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/video.webm" type="video/webm" />
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/video_1.mp4" type="video/mp4" />
      </video>

      <div class="md:absolute mt-10 lg:mt-0 bottom-2 left-2 md:bottom-20 md:left-20">
        <h1 class="mx-auto text-3xl text-white font-bold tracking-wide">
          Wij creëren de ultieme sfeer voor jou.
        </h1>
        <h2 class="mx-auto text-lg font-extralight text-white mt-2">
          Zowel binnen als buiten het huis, en dat doen we met betaalbare Slimme LED-strips!
        </h2>
      </div>
    </div>

    <div class="max-w-7xl mx-auto p-2 hidden lg:block">
      <div class="flex overflow-x-auto">
        <div class="mx-auto flex space-x-12 whitespace-nowrap py-3 px-4 sm:px-6 lg:space-x-24 lg:px-8">
          <div class="flex items-center text-sm font-medium text-indigo-400">
            <!-- Heroicon name: outline/truck -->
            <svg class="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/>
            </svg>
            <DeliveryTime />
          </div>

          <div class="flex items-center text-sm font-medium text-indigo-400">
            <!-- Heroicon name: outline/badge-check -->
            <svg class="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <p>Gratis verzending in NL en BE</p>
          </div>

          <div class="flex items-center text-sm font-medium text-indigo-400">
            <!-- Heroicon name: outline/calendar -->
            <svg class="mr-2 flex-none w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
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
      <p class="text-white text-2xl text-center mt-2">
        welke kies jij?
      </p>
    </div>

    <div class="px-6 lg:px-0 max-w-7xl mx-auto mt-10">
      <CategorySlider />
    </div>

    <div class="px-6 lg:px-0 max-w-7xl mx-auto mt-10">
      <VideoReviews />
    </div>

    <Partners />

    <Calendly />

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

    <div class="px-6 lg:px-0 mb-10">
      <Usages />
    </div>

    <div class="px-6 lg:px-0">
      <div class="mx-auto max-w-7xl py-10 px-8 default-gradient" style="border-radius: 20px;">
        <h2>
          <div class="flex items-center justify-center mb-4 lg:mb-0">
            <h2 class="text-3xl text-white font-bold tracking-wide uppercase">Wij geloven in...</h2>
          </div>
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 p-0 lg:p-10 gap-6 lg:gap-0">
          <div class="flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4"
               style="border-color: rgba(255, 255, 255, 0.1)"
          >
            <div class="flex-grow items-center flex">
              <img class="w-32" src="~assets/icon/icons8-technical-support-50.svg" alt="Service icon" />
            </div>
            <h3 class="text-gray-100 tracking-wide font-bold uppercase mt-4">Service</h3>
          </div>
          <div class="flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4"
               style="border-color: rgba(255, 255, 255, 0.1)"
          >
            <div class="flex-grow items-center flex">
              <img class="w-32" src="~assets/icon/icons8-verified-account-50.svg" alt="Kwaliteit vinkje" />
            </div>
            <h3 class="text-gray-100 tracking-wide font-bold uppercase mt-4">Kwaliteit</h3>
          </div>
          <div class="flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4"
               style="border-color: rgba(255, 255, 255, 0.1)"
          >
            <div class="flex-grow items-center flex h-40 lg:h-auto">
              <img class="w-32" src="~assets/icon/icons8-low-price-euro-50.svg" alt="Icon voor prijs naar beneden" />
            </div>
            <h3 class="text-gray-100 tracking-wide font-bold uppercase mt-4">Betaalbaarheid</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl py-10 px-6 lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="relative flex justify-center items-center green-gradient" style="border-radius: 20px;"
        >
          <div class="h-full py-10 lg:py-32 flex justify-center flex-col" style="z-index: 1">
            <div class="flex-grow flex items-center">
              <img class="w-40 mx-auto" src="~assets/icon/icons8-forest.svg" alt="Icon voor bomen en bosjes" />
            </div>
            <h3 class="text-gray-100 tracking-wide text-center font-bold uppercase mt-4">Duurzame verlichting</h3>
            <p class="text-white font-extralight text-lg pt-6 px-6 lg:px-20 text-left md:text-center tracking-wide">
              Onze duurzame smart verlichting is met zorg geproduceerd, makkelijk bedienbaar, en draagt bij aan het behoud van onze planeet!
            </p>
          </div>
        </div>
        <div class="relative flex justify-center items-center default-gradient" style="border-radius: 20px;"
        >
          <div class="h-full py-10 lg:py-32 flex justify-center flex-col" style="z-index: 1">
            <div class="flex-grow flex items-center">
              <img class="w-40 mx-auto" src="~assets/icon/icons8-return-purchase-50.svg" alt="Winkelwagen icon" />
            </div>
            <h3 class="text-gray-100 tracking-wide text-center font-bold uppercase mt-4">Gratis retourneren</h3>
            <p class="text-white font-extralight text-lg pt-6 px-6 lg:px-20 text-left md:text-center tracking-wide">
              Ben je niet tevreden met je aankoop? Retourneer makkelijk, gratis, en ontvang het volledige aankoopbedrag terug.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl relative lg:px-0 space-y-6 lg:space-y-0">
      <div>
        <img src="~assets/headers/1.jpg" class="rounded-2xl mx-auto" alt="Lideka home" />
      </div>
      <div class="lg:absolute bottom-10 right-10 left-10 rounded-2xl p-10 prose prose-teal-500 text-white"
        style="background: rgba(0, 0, 0, 0.75)"
      >
        <h2 class="mx-auto text-3xl uppercase text-white font-bold mb-4" style="color: white;">
          Lideka home - Betaalbare Slimme LED-strips
        </h2>
        <p class="mx-auto text-white font-extralight">
          Lideka is een merk dat zich concentreert op het produceren van
          <a target="_blank" class="link" href="/categorie/led-strips">slimme betaalbare LED-strips.</a>
          Op dit moment bestaat ons assortiment uit
          <a class="link" href="/categorie/rgb-led-strips">RGB LED-strips</a>,
          <a class="link" href="/categorie/rgb-ic-led-strips">RGBIC LED-strips</a>,
          <a class="link" href="/categorie/tv-led-strips">TV LED-strips</a> en
          <a class="link" href="/categorie/led-pakketten">LED-strips pakketten</a>.
        </p>
        <p class="mx-auto text-white font-extralight">
          Ons assortiment zal snel uitgebreid worden met andere soorten slimme verlichting.
          Wij onderscheiden onszelf van de concurrentie door een <strong>goede, degelijke kwaliteit</strong> te leveren met een <strong>lange levensduur</strong>,
          en de <strong>allerbeste service</strong>. Tegelijk dragen we bij aan een vermindering van energieverbruik.
        </p>
        <p class="mx-auto text-white font-extralight">
          Dit alles tegen een verkoopprijs die voor vrijwel alle burgers gemakkelijk haalbaar is.
          En op deze wijze creëren we voor iedereen een meer <strong>sfeervolle, aangenamere leefomgeving</strong>.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto mt-10 lg:px-0 px-6">
      <div class="_house">
        <div class="flex flex-col items-center justify-center text-center" style="height: 500px;">
          <img class="w-24" src="~assets/design/kiyoh.png" alt="Kiyoh logo" />
          <h2 class="py-2 pt-4 text-white text-2xl font-bold">
            Kiyoh
          </h2>
          <div class="flex">
            <svg v-for="i in 5" :key="i" class="flex-shrink-0 h-7 w-7 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-white p-2 font-extralight">
            81 beoordelingen
          </p>
          <a href="https://www.kiyoh.com/reviews/1064733/lideka" target="_blank" rel="noopener noreferrer" class="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 rounded-full text-white">
            Bekijk onze beoordelingen
          </a>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl py-10 px-6 lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="relative default-gradient" style="border-radius: 20px;"
        >
          <div class="py-10 lg:py-16 " style="z-index: 1">
            <div class="flex items-center">
              <img class="w-32 mx-auto" src="~assets/icon/icons8-technical-support-50.svg" alt="Support icon" />
            </div>
            <h2 class="text-white font-bold text-center text-2xl px-6 mt-4 uppercase tracking-wide">
              Service
            </h2>
            <p class="text-white font-extralight pt-6 px-6">
              Een goede service voor jou vinden wij belangrijk.
              Wij geloven dat het onze verantwoordelijkheid is om jou te helpen en te adviseren waar dat nodig is, niet alleen tijdens het verkoopproces, maar vooral na het verkoopproces.
            </p>
            <p class="text-white font-extralight pt-6 px-6">
              Je kunt ons 24/7 bereiken op (<a class="link" href="tel:0850601297">085-0601297</a>),
              je zult niet altijd direct antwoord kunnen krijgen op specifieke vragen,
              maar onze experts zullen je altijd zo snel mogelijk antwoord geven. We streven ernaar om altijd binnen 24 uur terug te bellen of terug te mailen, dit kan op
              <a class="link" href="mailto:klantenservice@lidekahome.nl">klantenservice@lidekahome.nl</a>.
            </p>
          </div>
        </div>
        <div class="relative default-gradient" style="border-radius: 20px;"
        >
          <div class="py-10 lg:py-16 " style="z-index: 1">
            <div class="flex items-center">
              <img class="w-32 mx-auto" src="~assets/icon/icons8-verified-account-50.svg" alt="Verified icon" />
            </div>
            <h2 class="text-white font-bold text-center text-2xl px-6 mt-4 uppercase tracking-wide">
              Kwaliteit
            </h2>
            <p class="text-white font-extralight pt-6 px-6">
              Zoals je hierboven al hebt gelezen gaan we voor een <strong>degelijke kwaliteit</strong>.
              Een kwaliteit waarop jij kan bouwen, en een kwaliteit waarin jij kan geloven.
            </p>
            <p class="text-white font-extralight pt-6 px-6">
              Al onze fabrieken worden zorgvuldig gecontroleerd op zaken zoals:
              Kinderarbeid, slechte werkcondities en slechte salarissen. Alle materialen die we
              gebruiken hebben een <strong>uitstekende kwaliteit</strong>, tevens voldoen alle artikelen aan de zogeheten <strong>CE markeringen</strong>.
            </p>
            <p class="text-white font-extralight pt-6 px-6">
              Mocht er onverhoopt iets misgaan of ben je toch niet tevreden? Er is altijd iemand voor
              jou beschikbaar om al je obstakels op te lossen, twijfel nooit om contact op te nemen.
            </p>
          </div>
        </div>
        <div class="relative default-gradient" style="border-radius: 20px;"
        >
          <div class="py-10 lg:py-16 " style="z-index: 1">
            <div class="flex items-center">
              <img class="w-32 mx-auto" src="~assets/icon/icons8-low-price-euro-50.svg" alt="Winkelwagen icon" />
            </div>
            <h2 class="text-white font-bold text-center text-2xl px-6 mt-4 uppercase tracking-wide">
              Betaalbaarheid
            </h2>
            <p class="text-white font-extralight pt-6 px-6 mx-auto max-w-2xl">
              Slimme verlichting kan erg duur zijn, en vooral <a class="link" href="/categorie/led-strips">slimme led-strips</a>, nu kun je ook voor een goedkopere gaan maar je wilt toch
              <strong>kwaliteit</strong>.
            </p>
            <p class="text-white font-extralight pt-6 px-6 mx-auto max-w-2xl">
              Vaak wordt er gedacht dat kwaliteit automatisch duur is, maar kwaliteit hoeft echt niet duur te zijn. Door de <strong>juiste processen</strong> te hanteren in de fabriek en de juiste partners te vinden kun jij een hele degelijke prijs neerzetten die voor iedereen haalbaar is.
            </p>
            <p class="text-white font-extralight pt-6 px-6 mx-auto max-w-2xl">
              Dat is Lideka en dat is waar wij in <strong>geloven</strong>, betaalbare slimme LED-strips en verlichting, niet alleen voor jou, maar voor <strong>iedereen</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto pt-8 py-12 px-6 md:px-0">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-04.webp" alt="Gratis Verzending" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2 mt-2 tracking-wide uppercase">Gratis Verzending</h2>
          <p class="text-gray-500 text-center text-sm">
            Omdat Lideka® voor service staat bieden wij al onze artikelen aan met gratis verzending (vanaf 20,-). Dat
            noemen we service!
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-05.webp" alt="Makkelijk retourneren" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2 mt-2 tracking-wide uppercase">Makkelijk retourneren</h2>
          <p class="text-gray-500 text-center text-sm">
            Lideka® maakt retourneren makkelijk. Via ‘Returnless’ kun je op een PostNl locatie jouw pakketje gratis
            afleveren en scannen met je mobiel.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-06.webp" alt="100% tevredenheidsgarantie" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2 mt-2 tracking-wide uppercase">100% tevredenheidsgarantie</h2>
          <p class="text-gray-500 text-center text-sm">
            Wij staan volledig achter de kwaliteit van onze producten en bieden jou daarom een onvoorwaardelijke
            garantie van 12-24 maanden.
          </p>
        </div>
        <div class="flex items-center flex-col">
          <img loading="lazy" src="~assets/icons/WEBicons-07.webp" alt="Duurzaamheid" class="w-20"/>
          <h2 class="text-white text-center text-sm font-bold mb-2 mt-2 tracking-wide uppercase">Duurzaamheid</h2>
          <p class="text-gray-500 text-center text-sm">
            Lideka® denkt mee aan het milieu, met een duurzame achtergrond werken de producten energiebesparend, en
            energieopwekkend.
          </p>
        </div>
      </div>
    </div>

    <Newsletter />

    <div class="max-w-7xl mx-auto pt-16 py-32 pb-20 px-6 md:px-0">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://www.facebook.com/lidekahome" target="_blank" rel="noopener"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">Facebook</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"/>
          </svg>
        </a>

        <a href="https://www.instagram.com/lidekahome" target="_blank" rel="noopener"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">Instagram</span>
          <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"/>
          </svg>
        </a>

        <a href="https://www.linkedin.com/company/lideka" target="_blank" rel="noopener"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">LinkedIn</span>
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8">
            <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        </a>

        <a href="https://www.youtube.com/channel/UCM6KUMoinLVJZUIOx3Mm2Tw" target="_blank" rel="noopener"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">YouTube</span>
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24">
            <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </a>

        <a href="https://pin.it/7w89n1e" target="_blank" rel="noopener"
           class="hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2">
          <span class="sr-only">Pinterest</span>
          <svg role="img" class="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Pinterest</title>
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
          </svg>
        </a>
      </div>
    </div>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url":"https://lidekahome.nl/",
      "email":"klantenservice@lidekahome.nl",
      "name":"Lideka Home - Ruim Aanbod Slimme Led-strips",
      "description":"Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Edisonstraat 98",
        "postalCode": "3281",
        "streetAddress": "NC Numansdorp"
      },
        "potentialAction": {
        "@type": "SearchAction",
        "target": "https://lidekahome.nl/",
        "query": "required"
      },
      "logo":"https://lidekahome.nl/_nuxt/img/78f730f.svg",
      "telephone": "+31 (0)85 - 06 01 297",
        "brand" : [{
      "@type" : "Organization",
      "name" : " Lideka Home "}
      ],
      "sameAs": [
        "https://www.facebook.com/lidekahome",
        "https://www.instagram.com/lidekahome",
        "https://www.linkedin.com/company/lideka",
        "https://www.youtube.com/channel/UCM6KUMoinLVJZUIOx3Mm2Tw",
        "https://pin.it/7w89n1e"
      ]
    }
    </script>


    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name":"Lideka Home - Ruim Aanbod Slimme Led-strips",
      "telephone": "+31 (0)85 - 06 01 297",
      "url" : "https://lidekahome.nl/",
      "description":"Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.",
      "priceRange" : "€€",
      "logo":"https://lidekahome.nl/_nuxt/img/78f730f.svg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Edisonstraat 98",
        "addressCountry" : "Netherlands",
        "addressRegion": "NC",
        "postalCode": "3281",
        "streetAddress": "NC Numansdorp"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://lidekahome.nl/",
        "query": "required"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "bestRating": "5",
        "ratingCount": "5",
        "ratingValue": "5"
      },
      "hasMap" : "https://www.google.com/maps/dir/28.6200889,78.0548846/Edisonstraat+98,+3281+NC+Numansdorp,+Netherlands/@34.2985409,5.1980521,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47c4398b15af62e1:0x7228e8bcd6bc5b!2m2!1d4.444899!2d51.745817",
      "review" : [{
      "@type": "Review",
      "author": "Rene Van Der Werff",
      "datePublished": "12/01/2022",
      "reviewBody": "Na wat contact via de mail en whatsapp ,de led strip ontvangen en alles is wat ik had verwacht. Compleet inclusief een duidelijke beschrijving. Als je de app (inclusief bij de aanschaf) geïnstalleerd hebt kun je helemaal los. Leuk muziekje aan en de ledstrip speelt vrolijk mee. Top tevreden over de service.",
          "name": "",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
      },{
      "@type": "Review",
      "author": "Enrique Van Der horst",
      "datePublished": "15/09/2021",
      "reviewBody": "Vandaag de led strips ontvangen en zelf met gemak geplaatst! Tot nu toe zeer tevreden met het resultaat. Ik hoop dat ze lang mee gaan!",
          "name": "",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
      },{
      "@type": "Review",
      "author": "Lars Hopstaken",
      "datePublished": "17/11/2021",
      "reviewBody": "LED-strips besteld bij Lideka, helaas een kleine tegenslag maar na telefonisch contact werd dit binnen 1 werkdag helemaal opgelost. Hele snelle, vriendelijke en bovenal goed service! Ook de strips zelf zijn van goede kwaliteit, plug & play en genieten! Een absolute aanrader als je op zoek bent naar LED-strips",
          "name": "",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
      },{
      "@type": "Review",
      "author": "Berkay Gonultas",
      "datePublished": "05/09/2021",
      "reviewBody": "De strips zijn heel mooi en de klantenservice is heel klantvriendelijk",
          "name": "",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
      },{
      "@type": "Review",
      "author": "joost hoek",
      "datePublished": "14/09/2021",
      "reviewBody": "Super mooie website en snelle service",
          "name": "",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
      }
      ]
    }
    </script>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";
import Usages from "~/components/blocks/Usages.vue";
import CategorySlider from "~/components/CategorySlider.vue";
import Reviews from "~/components/reviews/Reviews.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import Lenghts from "~/components/Lenghts.vue";
import Calendly from '~/components/Calendly.vue';
import Newsletter from '~/components/NewsletterBlock.vue';
import DeliveryTime from '~/components/DeliveryTime.vue';
import Partners from '~/components/Partners.vue';

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
  },
  
  data() {
    return {
      collection: {},
      secondaryCollection: {},
    };
  },

  head() {
    return {
      title: 'Lideka Home - Ruim Aanbod Slimme Led-strips',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Lideka Home - Ruim Aanbod Slimme Led-strips',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('../assets/visuals/LEDxSolar_homepage.webp')
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Uitstekende Service En Kwaliteit, Klanten Geven Ons Een Beoordeling Van Gemiddeld 9,6. Op Werkdagen Voor 23:59 besteld = Morgen thuis, Gratis Verzending En Retour. Duurzaam.'
        }
      ]
    }
  },
})
</script>

<style lang="scss">
._living-room {
  background: url('~assets/design/living-room.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._bedroom {
  background: url('~assets/design/bedroom.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._kitchen {
  background: url('~assets/design/kitchen.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._gameroom {
  background: url('~assets/design/gameroom.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._bathroom {
  background: url('~assets/design/bathroom.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._other {
  background: url('~assets/headers/1.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._house {
  background: url('~assets/design/house.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._bed {
  background: url('~assets/design/bed.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._ceiling {
  background: url('~assets/design/ceiling.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._tv {
  background: url('~assets/design/home.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._rgb-ic {
  background: url('~assets/design/landings/rgb-ic/banner-2.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}

._rgb {
  background: url('~assets/design/landings/rgb-led-strips/banner-5.png') no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
}
</style>
