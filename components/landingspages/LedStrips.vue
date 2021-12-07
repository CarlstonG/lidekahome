<template>
  <div class="bg-black">
    <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 lg:mb-0">
      <h1 class="md:hidden mx-auto text-3xl text-white font-bold tracking-wide uppercase mb-6">
        LED strips
      </h1>

      <video :poster="require('assets/video-poster-2.jpg')" class="w-full h-full rounded-2xl" autoplay muted playsinline>
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/led-strip-video.webm" type="video/webm" />
        <source src="https://cdn.shopify.com/s/files/1/0570/2352/9109/files/led-strip-video_1.mp4" type="video/mp4" />
      </video>

      <div class="hidden md:block md:absolute mt-10 lg:mt-0 bottom-2 left-2 md:bottom-20 md:left-20">
        <h1 class="mx-auto text-3xl text-white font-bold tracking-wide">
          LED strips
        </h1>
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10">
      <LongParagraph>
        <p class="text-white font-extralight">
          Led-strips zijn niet meer uit jouw huiskamer weg te denken en worden als huisdecoratie steeds
          <strong>populairder</strong>. Deze gave lichteffecten zijn
          <strong>makkelijk</strong> te installeren, creëren een flinke dosis gezelligheid en transformeren jouw ruimte met stijlvolle lounge vibes.
        </p>
        <p class="text-white font-extralight">
          Het mooiste aan deze moderne
          <a class="link" href="/blog/alles-over-led-verlichting-als-sfeerverlichting">sfeerverlichting</a>?
          Led-strips zijn ontzettend <strong>multifunctioneel</strong> en op te hangen waar je maar wilt! Kies je voor een
          futuristisch verlichte tv, trendy keuken of sfeervolle tuin? Het Lideka® assortiment heeft een led-strip voor
          <strong>elke gelegenheid</strong>.
        </p>
        <p class="text-white font-extralight">
          Wat is nou het verschil tussen al die verschillende led-strips? Hier vind je al onze kennis en informatie in een handig overzicht. Zo ontdek je gemakkelijk welke Lideka® strip het beste bij jou en jouw ruimte past.
        </p>
      </LongParagraph>
    </div>

    <div class="max-w-7xl mx-auto space-y-10 mb-10 px-6 lg:px-0">
      <ProductsWithBackground
          v-if="collection1"
          title="RGB LED STRIPS"
          :collection="collection1"
      />

      <ProductsWithBackground
          v-if="collection2"
          title="TV LED Strips"
          :collection="collection2"
      />

      <ProductsWithBackground
          v-if="collection3"
          title="RGB-IC LED Strips"
          :collection="collection3"
      />

      <ProductsWithBackground
          v-if="collection4"
          title="LED strip pakketten"
          :collection="collection4"
      />

      <VideoReviews />

      <TextWithImage
          title="LED-strip pakketten"
          imageAlt="LED-strip pakketten"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-1.jpg')"
          url="/"
      >
        <p class="text-white font-extralight">
          Voor de echte liefhebbers hebben we complete LED pakketten.
          Deze LED pakketten bestaan uit TV Led strips, en RGB Led strips.
          Beiden soorten bestaan uit complete sets.
        </p>
        <p class="text-white font-extralight">
          Met een uitstekende plakstrip die nooit meer laat, en eindeloze kleurencombinaties is dit een bijzonder pakket.
        </p>
      </TextWithImage>

      <TextWithImage
          title="RGB LED-strip"
          imageAlt="RGB LED-strip"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-2.jpg')"
          url="/"
          reverse="true"
      >
        <p class="text-white font-extralight">
          De RGB LED-strip beschikt over een breed scala aan kleuren, rood, blauw, groen het zit er allemaal bij. Kies, combineer en bepaal zelf wanneer je welke combinatie wilt zien.
        </p>
        <p class="text-white font-extralight">
          Door middel van een moderne en geavanceerde afstandsbediening is het makkelijker dan ooit om de LED-strips te bedienen, maar dat niet alleen, onze uitgebreide app beschikt ook over oneindige functies en mogelijkheden.
        </p>
      </TextWithImage>

      <TextWithImage
          title="TV LED-strip"
          imageAlt="TV LED-strip"
          :imageSrc="require('assets/design/landings/led-pakketten/pakket-3.jpg')"
          url="/"
      >
        <p class="text-white font-extralight">
          De TV LED-strip beschikt over een enorm stevige plakstrip, waardoor hij nooit meer loslaat. Door de flexibiliteit van de strip was het nog nooit zo makkelijk om deze te installeren.
        </p>
        <p class="text-white font-extralight">
          Met een naadloze overgang op het geluid van de TV, Computer of Game console, ben jij verzekerd van een unieke kijk of speelervaring!
        </p>
      </TextWithImage>

      <Highlights :highlights="[
          {
            imageSrc: require('assets/icon/icons8-best-seller-50.svg'),
            description: 'Door zijn bijzondere stevige dubbelzijge 3M tape ben jij verzekerd van een LED-strip die nooit meer loslaat. Zorg voor een schone ondergrond.'
          },
          {
            imageSrc: require('assets/icon/icons8-usb-on-50.svg'),
            description: 'Dit set wordt bovendien geleverd met  een directe USB-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.'
          },
          {
            imageSrc: require('assets/icon/icons8-warranty-50.svg'),
            description: 'Naast deze slimme functies wordt ook dit Lideka® model geleverd met led-lampjes van de hoogste kwaliteit en een onvoorwaardelijke garantie van 2 jaar.'
          }
      ]" />


      <ProductsWithBackground
        title="Thuis genieten van die fijne lounge vibes? Bestel jouw RGB led-strip vandaag nog!"
        :collection="collection"
      />

      <CenterTitle
        title="De voordelen van jouw nieuwe LED strips"
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
        :image-src="require('assets/photos/Woonkamer-1.jpg')"
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
        :image-src="require('assets/products/1.png')"
        :right-data="[
          {
            title: 'De TV Strips',
            description: 'IP20'
          },
          {
            title: 'USB aansluiting',
            description: 'Hoge kwaliteit kunststof'
          },
          {
            title: 'Bedankt kaartje',
            description: 'Omdat we blij met je zijn'
          }
        ]"
      />

      <SingleImage :image-src="require('assets/photos/TV3.jpg')"
                   description="<div class='font-bold text-2xl'>100% tevredenheidsgarantie.</div> Wij staan volledig achter de kwaliteit van onze producten en bieden jou een onvoorwaardelijke garantie van 24 maanden."
      />

      <div class="mx-auto max-w-7xl lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-10 lg:py-24 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-32 mx-auto" src="~assets/icon/icons8-return-purchase-50.svg" />
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
                <img class="w-32 mx-auto" src="~assets/icon/icons8-technical-support-50.svg" />
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

      <LengthProducts
        :collection="collection"
        title="Uit welke lengtes kan je kiezen?"
        description="Wij leveren pakketten van 3 meter, 5 meter, 10 meter, 15 meter, en 20 meter."
      />

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

      <div class="max-w-5xl mx-auto">
        <LongParagraph
          title="LED Strips"
          :bg-color="true"
        >
          <p class="text-white font-extralight">
            LED strips, ook wel geschreven als ledstrips, zijn lichtsnoeren met lichtcomponenten. LED staat voor Light Emitting Diode, vrij vertaald als lichtgevende lampjes. Het kenmerkende element van een LED strip is de
            <strong>veelzijdigheid</strong>. Wist je bijvoorbeeld dat je binnen het kleurenpalet keuze hebt uit meer dan
            <strong>16 miljoen kleuren</strong> en tinten? Het zorgt ervoor dat LED verlichting in vrijwel elke ruimte een sfeervolle toepassing kent.
          </p>
          <p class="text-white font-extralight">
            Voorbeelden zijn LED strips in de
            <a href="/categorie/led-strip-badkamer" class="link">badkamer</a>,
            <a href="/categorie/led-strip-slaapkamer" class="link">slaapkamer</a> of
            <a href="/categorie/led-strip-woonkamer" class="link">woonkamer</a>.
            Je kunt de ledstrips tegen het <a href="/categorie/led-strip-plafond" class="link">plafond</a> installeren, of juist langs de rand van de spiegel in de badkamer. Zelfs als vervanging van de bestaande verlichting in de ruimte!
          </p>
          <p class="text-white font-extralight">
            Steeds meer mensen gebruiken LED strips buiten. En waarom ook niet? We kopen tegenwoordig de mooiste tuinsets om buiten te kunnen zitten, en
            <a href="/blog/alles-over-led-verlichting-als-sfeerverlichting" class="link">sfeervolle verlichting</a> hoort daar uiteraard bij.
          </p>
          <p class="text-white font-extralight">
            LED strips zijn eenvoudig te bevestigen langs de onderkant van het dak, en blijven dankzij een
            <strong>stevige plakrand</strong> altijd op hun plek hangen. Zo creëer je ook buiten een
            <strong>unieke sfeer</strong>, waarmee in de eigen tuin loungen nog leuker wordt. Het gebruik van deze led strips gaat vaak via een
            <strong>afstandsbediening</strong>, en <strong>app</strong>.
          </p>
        </LongParagraph>
      </div>

      <SingleImage :image-src="require('assets/photos/TV-1.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="RGB-IC Led strips"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Net als bij een standaard model vormt de
            <a href="/categorie/rgb-ic-led-strips" class="link">RGB-IC led-strip</a> alle mogelijke kleurtinten, maar dan met schitterende
            <strong>extra lichteffecten</strong>. Deze splinternieuwe vorm van led licht wordt ook wel ‘Dreamcolor Led’ genoemd en is razend populair bij onder Amerikaanse TikTokkers.
            Van <strong>regenboog patronen</strong> tot <strong>schietende leds</strong> of <strong>dromerige kleuren</strong>, met deze gloednieuwe editie is het mogelijk!
          </p>
          <p class="text-white font-extralight">
            Naast deze extra features werkt de RGB-IC uitvoering net als een traditionele led-strip. Zo ben je verzekerd van 2 jaar garantie, IP65-waterproof bescherming en led-lampjes van de hoogste kwaliteit.
          </p>
          <p class="text-white font-extralight">
            Verkrijgbaar in
          </p>
          <ul class="text-white font-extralight no-list-type">
            <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8"
                                                         src="~assets/icon/icons8-checkmark.svg"/><span
                class="tracking-wide text-gray-300 uppercase font-bold">5 meter</span>
            </li>
            <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8"
                                                         src="~assets/icon/icons8-checkmark.svg"/><span
                class="tracking-wide text-gray-300 uppercase font-bold">10 meter</span>
            </li>
          </ul>
          <p>
            <a href="/categorie/led-strip-badkamer" class="link">
              Extra sfeer in de badkamer? Bekijk snel onze specifieke badkamerverlichting
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="TV ledstrip"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Een
            <a href="/categorie/tv-led-strips" class="link">led-strip achter je TV</a> creëert een <strong>stijlvolle lichtgloed</strong> rondom het scherm en geeft jouw huiskamer een echte bioscoop sfeer.
          </p>
          <p class="text-white font-extralight">
            Maar deze handige strips zijn veel meer dan alleen mooi en zorgen ook voor een subtielere overgang tussen licht en donker.
            Zo worden jouw ogen <strong>minder snel moe</strong> en kijk je extra comfortabel naar jouw
            <strong>favoriete films & shows</strong>.
          </p>
          <p class="text-white font-extralight">
            De set wordt bovendien geleverd met <strong>dubbelzijdig tape</strong> en een directe <strong>USB</strong>-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.
          </p>
          <p class="text-white font-extralight">
            Verkrijgbaar in
          </p>
          <ul class="text-white font-extralight no-list-type">
            <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8"
                                                         src="~assets/icon/icons8-checkmark.svg"/><span
                class="tracking-wide text-gray-300 uppercase font-bold">2 meter</span>
            </li>
            <li class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8"
                                                         src="~assets/icon/icons8-checkmark.svg"/><span
                class="tracking-wide text-gray-300 uppercase font-bold">3 meter</span>
            </li>
          </ul>
        </LongParagraph>
      </div>

      <SingleImage :image-src="require('assets/photos/Badkamer-2.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Waterdichte LED strips"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Onze <a href="https://nl.wikipedia.org/wiki/IP-code" class="link">IP65</a> LED strips zijn waterdicht, en daardoor ook geschikt <strong>voor buiten</strong>.
            Lekker als je ’s avonds tot in de late uurtjes buiten wilt genieten van
            zomerse omstandigheden, of juist in de winter, wanneer je buiten bij de warme kachel wilt zitten.
          </p>
          <p class="text-white font-extralight">
            Met onze IP65 bescherming garanderen we dat de LED strips ook in een <strong>vochtige omgeving</strong> optimaal functioneren.
            Op zoek naar LED strips die waterdicht zijn? Maak je keuze uit het ruime assortiment LED strips bij Lideka Home.
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="LED strips monteren: wat heb je nodig?"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Wil je LED strips gebruiken? Montage is erg <strong>eenvoudig</strong>! Je kunt de LED strip naar eigen inzicht op maat
            <strong>afknippen</strong> op de aangegeven markering. Ideaal wanneer je iets van lengte te kort komt.
          </p>
          <p class="text-white font-extralight">
            De plakrand is <strong>extra stevig</strong> en blijft na montage op een glad oppervlak goed zitten. Met een totaal van 50.000 branduren kan je nog jaren genieten van unieke LED verlichting in huis. Welke onderdelen komen nog meer kijken bij de montage van LED strips?
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Smart app Lideka Home of afstandsbediening LED"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Met de <strong>Smart app van Lideka Home</strong> ervaar je het gewenste gebruiksgemak. Je kunt hiermee de LED strip op afstand bedienen en kiezen uit het volledige kleurenpalet.
          </p>
          <p class="text-white font-extralight">
            Heerlijk vanaf je smartphone schakelen tussen <strong>alle kleuren en tinten</strong>; de fijnste manier om de sfeer in huis te bepalen.
            Wil je niet kiezen voor de Smart app? Dan gebruik je onze bijgeleverde LED strip <strong>afstandsbediening.</strong>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Voedingsadapter LED strip"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Zoals we al eerder vertelden, heb je bij de aankoop van LED strips keuze uit <strong>5V, 12V of 24V</strong>.
            Welke keuze je hierin maakt, is eveneens afhankelijk van de voedingsadapter.
            Aangezien de normale stroomvoorziening vanuit het stopcontact vaststaat op 230V, dien je deze voor de LED verlichting nog wel om te zetten.
            We raden je bij voorkeur aan om voor een compleet set te gaan, zo ben je in <strong>één</strong> keer helemaal klaar.
          </p>
        </LongParagraph>
      </div>

      <SingleImage :image-src="require('assets/photos/Woonkamer-2.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Hoe werkt LED?"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Zoals je misschien al wist is LED een <strong>energiezuinige</strong>
            manier om ruimtes van verlichting te voorzien. Binnen LED verlichting wordt <strong>90 tot 95 procent</strong> van de energie gebruikt om licht te produceren.
          </p>
          <p class="text-white font-extralight">
            Bij de traditionele gloeilamp is dit <strong>hooguit 10 procent</strong>, en die besparing in energie merk je. De gloeilamp wordt voelbaar warmer dan LED lampen, waardoor onnodig veel energie verloren gaat.
            Een LED verlichting strip is derhalve een stuk <strong>efficiënter</strong>.
          </p>
          <p class="text-white font-extralight">
            Bij een LED strip worden de lampjes op evenredige afstand van elkaar op het lichtsnoer gesoldeerd, en zorgen daarmee over kleine en grote afstand voor een gelijke afgifte van licht. <strong>Sfeervol en efficiënt.</strong>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="5V, 12V en 24V ledstrips"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Overweeg je LED strips te kopen? Dan is het belangrijk om rekening te houden met het
            <a class="link" href="https://nl.wikipedia.org/wiki/Elektrische_spanning">Voltage</a>. De LED strips zijn beschikbaar in 5 en 12 volt.
          </p>
          <p class="text-white font-extralight">
            Langs de 5V ledstrips en 12V ledstrips loopt minder stroom, waardoor het over het algemeen als veiliger wordt ervaren.
          </p>
          <p class="text-white font-extralight">
            Voor de kortere ledstrips, zoals een LED strip van 3, 5 of 10 meter, is dit voltage ideaal. Voor de grotere lengtematen vanaf 10 meter is 12V de beste optie.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/hoe-werkt-led-verlichting" class="link">
              Lees hier meer over hoe led verlichting werkt
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Voordelen LED strips"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            We hebben de voordelen van LED strips al kort laten doorschemeren. Het is een <strong>moderne vorm</strong> van verlichting voor binnen- en buitenshuis, alsmede voor bedrijfspanden.
          </p>
          <p class="text-white font-extralight">
            Bij Lideka Home willen we iedereen de kans geven om de voordelen van LED strips te ervaren. Bij led denken we snel aan
            <strong>energie zuinig</strong>, maar dat is het niet het enigste voordeel.
          </p>
          <p class="text-white font-extralight">
            Wat zijn de <strong>belangrijkste voordelen</strong> van LED verlichting?
          </p>
          <ul class="text-white font-extralight no-list-type">
            <li v-for="item in [
                'Verkrijgbaar in verschillende lengtematen',
                'LED strips zijn eenvoudig zelf op maat te maken',
                'Ruim kleurenpalet met miljoenen sprekende RGB kleuren en tinten',
                'Waterproof (IP65) en daarmee ook buiten te gebruiken',
                'Extra lange levensduur',
                'Sfeervol wonen, geschikt voor iedere gelegenheid',
                'Weinig ruimte nodig',
                'Ook voor vochtige ruimtes (IP 65)'
            ]" class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8"
                                                         src="~assets/icon/icons8-checkmark.svg"/><span
                class="tracking-wide text-gray-300 uppercase font-bold">{{item}}</span>
            </li>
          </ul>
          <p class="text-white font-extralight">
            Een ander leuk voordeel is dat het licht mooi egaal verdeeld wordt over de ruimte waar je de led strip geplaatst hebt.
          </p>
          <p class="text-white font-extralight">
            <a href="/products/led-strip-10-meter" class="link">
              Bekijk ons meest verkochte product
            </a>
          </p>
        </LongParagraph>
      </div>

      <SingleImage :image-src="require('assets/photos/keuken.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="LED strips met lichteffecten"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Nog meer halen uit je LED strips? Maak kennis met onze <strong>verrassende lichteffecten</strong>, ideaal voor iedere gelegenheid.
          </p>
          <p class="text-white font-extralight">
            Heb je een feestje? Dan kies je voor de <strong>Strobe</strong> stand: flitsende lichten, waarmee je iedereen in beweging krijgt.
          </p>
          <p class="text-white font-extralight">
            Een lounge avond met vrienden of familie? Met onze <strong>Fade</strong> verlichting creëer je een unieke sfeer. Deze verlichting biedt wisselende kleuren met donkere intervallen.
          </p>
          <p class="text-white font-extralight">
            De <strnog>Flash</strnog> verlichting op onze LED strips wisselen doorlopend van kleur en dat geeft een super gaaf effect.
          </p>
          <p class="text-white font-extralight">
            Tot slot kun je nog kiezen voor <strong>Smooth</strong> LED verlichting; gebruikt voor speciale gelegenheden, feestjes of simpelweg voor de optimale lounge experience.
          </p>
          <p class="text-white font-extralight">
            <a href="/categorie/led-strip-gamekamer" class="link">
              Bekijk hier onze speciale gamer Led strips
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Toepassing van Led-strips"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Een Led verlichting strip is toepasbaar in het <strong>gehele huis</strong> en door de waterdichtheid van de strips kun je ze
            <strong>ook buiten</strong> toepassen.
          </p>
          <p class="text-white font-extralight">
            Verlicht jouw schuur met helder wit licht en <strong>creëer sfeer</strong> in de
            <a href="/categorie/woonkamer" class="link">woonkamer</a> met elegante kleuren. De keuze is aan jou!
          </p>
          <p class="text-white font-extralight">
            De <a href="/categorie/rgb-led-strips" class="link">RGB led strips</a> van Lideka bedragen geen wit licht, echter zit er wel een
            kleur bij die heel veel lijkt op wit licht. Als je een vervanger zoekt voor warm licht, dan hebben we ook altijd
            <strong>leuke kleurtjes</strong> bij onze RGB Led producten.
          </p>
          <p class="text-white font-extralight">
            <a href="/categorie/led-strip-gamekamer" class="link">
              Bekijk hier onze speciale gamer Led strips
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Voeding"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Bij Lideka hoef jij je <strong>geen zorgen</strong> te maken over voedingen of aansluitingen, wij leveren alles in een compleet set, en daar zit dus ook een bijpassende voeding bij.
          </p>
          <p class="text-white font-extralight">
            Deze <strong>matcht precies</strong> met de led strip die in het set zit. Let wel op, bij andere aanbieders worden de meeste ledstrips zonder voeding geleverd.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/de-levensduur-van-led-verlichting" class="link">
              Benieuwd naar de levensduur van LED verlichting? Lees onze blog!
            </a>
          </p>
        </LongParagraph>
      </div>

      <SingleImage :image-src="require('assets/photos/slaapkamer-wit.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Led strip profielen"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Onze led strips zijn prima te gebruiken in combinatie met een led strip profielen, het heeft namelijk een <strong>positieve invloed</strong>
            op de led strip, echter is het niet noodzakelijk. De artikelen van Lideka hebben een <strong>goede afvoer</strong> als het gaat
            om warmte en hebben daardoor al een extra lange levensduur.
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Led strip controllers"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Bij al onze complete sets krijg je <strong>standaard</strong> een led strip controller <strong>meegeleverd</strong>, deze is van
            <strong>hoge kwaliteit</strong> en
            gaat zeker nog jaren mee. De led strip controllers zijn gemaak van hoogwaardige kwaliteit kunststof. Je kunt er de volgende drie dingen mee doen:
          </p>
          <ol class="text-white font-extralight">
            <li>De helderheid aanpassen</li>
            <li>Verschillende scènes aanzetten</li>
            <li>Het licht dimmen</li>
          </ol>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Enkelkleurige strips"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Er zijn andere aanbieders op de markt die enkel kleurige strips aanbieden,
            echter vinden wij dit <strong>compleet overbodig</strong>. Aangezien de prijs bijna gelijk is aan een
            RGB strip is het zonde van jouw geld. We raden je dan ook altijd aan om voor een RGB strip te gaan.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/wat-zijn-de-voordelen-van-led-strips" class="link">
              Lees ook onze blog over de voordelen van Led-strips eens
            </a>
          </p>
        </LongParagraph>
      </div>

      <SingleImage :image-src="require('assets/photos/tv-last.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Stroomverbruik"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            De LED strips staan bekend om hun lage stroomverbruik, terwijl ze toch veel licht geven.
            Het benodigde vermogen voor onze RGB Led strips is slechts <strong>3 watt per meter</strong>. Een normale gloeilamp van <strong>40 watt</strong> verbruikt gemiddeld meer dan
            <strong>60 watt</strong>.
          </p>
          <p class="text-white font-extralight">
            Onze goederen zijn in overeenstemming met <strong>CE</strong>, wat betekent dat ze een lange levensduur hebben, en
            <strong>extra veilig</strong> zijn.
          </p>
          <p class="text-white font-extralight">
            Zo kunt u er zeker van zijn dat de LED strip van Lideka u vele jaren van dienst zal zijn.
          </p>
          <p class="text-white font-extralight">
            De levensduur van een RGB LED strip is <strong>meer dan 50.000 uur</strong>, wat betekent dat de lamp meer dan 10 jaar onafgebroken zou moeten werken! De garantie op onze ledstrips is
            <strong>twee jaar</strong>, dus daar hoef je je geen zorgen over te maken.
          </p>
          <p class="text-white font-extralight">
            <a href="/categorie/slaapkamer" class="link">
              Benieuwd hoe jij met één Led-strip jouw hele kamer kan omtoveren? Kijk snel bij onze speciale led strips voor in de slaapkamer
            </a>
          </p>
        </LongParagraph>
      </div>

      <CenterTitle title="Verschillende soorten verlichting" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Indirecte verlichting"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Indirecte verlichting is niet meer zo populair als vroeger. Maar voor wie op zoek is naar een <strong>romantische omgeving</strong>, kan indirecte verlichting de juiste manier zijn.
          </p>
          <p class="text-white font-extralight">
            Indirect licht is vaak zachter, maar kan ook dramatische effecten hebben met kleur en lichtintensiteit. Een goed voorbeeld hiervan zou het gebruik van kaarsen zijn in een kamer die wordt verlicht door lampen aan weerszijden in plaats van bovenlichten of tafellampen in de buurt van waar mensen samenkomen.
          </p>
          <p class="text-white font-extralight">
            Dit type verlichting creëert een sfeer die tegelijkertijd <strong>zacht en levendig</strong> is. Het indirecte licht weerkaatst op muren en andere oppervlakken en voegt diepte en dimensie toe aan voorwerpen in het zicht, zoals schilderijen, beeldhouwwerk, meubels en meer. Indirecte verlichting kan zelfs stemmingen versterken zoals romantiek of intimiteit als u uw verbeelding.
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Directe verlichting"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Directe verlichting is wat u doorgaans ziet als de <strong>meest voorkomende vorm</strong> van verlichting (bv. tafellampen, plafondlampen), die zorgt voor taakverlichting en algemene verlichting van de ruimte. Directe verlichting kan ook dramatisch zijn, afhankelijk van grootte, type en aantal van de gebruikte armaturen.
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Decorative verlichting"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Decoratieve verlichting is een geweldige manier om <strong>warmte en karakter</strong> aan een ruimte toe te voegen. De beste manier om dit te doen is gebruik te maken van indirecte verlichtingsarmaturen, zoals kroonluchters, tafellampen, wandkandelaars of muur kandelaars.
          </p>
          <p class="text-white font-extralight">
            Bij deze armaturen kunnen kappen op verschillende manieren worden gebruikt om <strong>drama of zachtheid</strong> toe te voegen, afhankelijk van waar de inrichter de voorkeur aan geeft. In het algemeen moeten de lampenkappen qua kleur en textuur dicht bij de omringende muren liggen.
          </p>
          <p class="text-white font-extralight">
            Een andere geweldige manier om karakter en warmte toe te voegen is het gebruik van <strong>tafellampen met schaduw.</strong> De kleur van de lampenkappen kan gemakkelijk worden aangepast om de sfeer in de kamer te veranderen. Een warme, amberkleurige tint geeft een ruimte een <strong>intieme sfeer</strong>, terwijl koele blauwe tinten een formele of professionele uitstraling kunnen geven.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/tv-led-strips-decoratief-en-rustig-voor-de-ogen" class="link">
              Benieuwd wat TV led strips voor jou kunnen doen? Lees nu onze blog over TV Led-strips
            </a>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Voor- en nadelen aan elk type verlichting"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            De het belangrijkste voordeel van het gebruik van directe verlichting is dat het een ruime hoeveelheid licht geeft voor
            <strong>praktische doeleinden</strong>, zoals het lezen van een boek of koken. De meeste mensen geven om deze reden de voorkeur aan tafellampen of plafondlampen in hun woonruimte.
          </p>
          <p class="text-white font-extralight">
            Het grootste <strong>nadeel</strong> van directe verlichting is dat het soms <strong>te hard en oncomfortabel</strong> kan zijn. Mensen vinden zichzelf vaak loensen of een hand ophouden om het licht te blokkeren, omdat het recht op hen afkomt.
          </p>
          <p class="text-white font-extralight">
            Het <strong>belangrijkste voordeel</strong> van het gebruik van indirecte verlichting is dat het een sfeer schept die veel mensen als <strong>ontspannend ervaren</strong> en die bevorderlijk is voor overpeinzingen of gesprekken tijdens rustige momenten.
          </p>
          <p class="text-white font-extralight">
            Een <strong>ander voordeel</strong> van indirecte verlichting is dat het een zeer <strong>gelijkmatige verdeling</strong> van het licht geeft, waardoor kleine ruimten ruimer kunnen aanvoelen.
          </p>
          <p class="text-white font-extralight">
            Indirecte verlichting is ook een doeltreffende manier om bepaalde voorwerpen of kunstwerken te belichten zonder er <strong>schaduwen op te werpen</strong>, wat het contrast en de definitie vermindert. Dit is vooral belangrijk bij antiquiteiten die gevoelig zijn voor warmte of extreme temperatuurschommelingen, omdat elk type verlichting (ook indirecte verlichting) warmte aan het object zal toevoegen.
          </p>
          <p class="text-white font-extralight">
            Het <strong>grootste nadeel</strong> van indirecte verlichting is dat het <strong>niet veel
            licht</strong> geeft voor praktische doeleinden, zoals lezen of schrijven. De hoeveelheid licht die
            het geeft is het meest geschikt om een ruimte karakter te geven in plaats van deze volledig te verlichten. Dit kan worden bereikt door tafellampen met gekleurde kappen te gebruiken of licht kandelaars aan de muren.
          </p>
          <p class="text-white font-extralight">
            Decoratieve verlichting heeft vele voor- en nadelen, maar <strong>het belangrijkste voordeel</strong> van decoratieve of indirecte verlichting is dat het een <strong>sfeer in een ruimte kan scheppen</strong> die veel mensen ontspannend vinden.
          </p>
          <p class="text-white font-extralight">
            Dit komt omdat het licht uit alle hoeken van de kamer komt, in plaats van uit één enkele richting, en over het algemeen naar buiten straalt en weerkaatst op muren en andere oppervlakken in plaats van recht op u af te komen zoals direct licht doet.
          </p>
          <p class="text-white font-extralight">
            Een groot nadeel van decoratieve verlichting is dat het niet genoeg lichtsterkte biedt voor praktische doeleinden, zoals het lezen van de krant of het bereiden van een maaltijd. De lampen die bij dit soort verlichting worden gebruikt, bevatten meestal niet veel lumen (lichtintensiteit).
          </p>
          <p class="text-white font-extralight">
            Een goed verlichte kamer die door dit soort verlichting wordt gecreëerd, zou vooral goed zijn om te gebruiken <strong>voor sfeer</strong> of als een aparte ruimte die zo nodig voor andere doeleinden kan worden gebruikt.
          </p>
          <p class="text-white font-extralight">
            Hoewel decoratieve verlichting niet ideaal is voor praktische doeleinden, kan zij <strong>een sfeervolle en romantische achtergrond</strong> bieden voor bijna elke omgeving. De sfeer in de kamer kan gemakkelijk worden aangepast door de kleur of tint van de lampen te veranderen (als er meerdere lampen zijn).
          </p>
          <p class="text-white font-extralight">
            Bijvoorbeeld, warm oranje of amberkleurige tinten worden vaak gebruikt in <strong>woonkamers</strong> om een gezellige of intieme sfeer te creëren. Een <strong>koele blauwe tint</strong> kan worden gebruikt in een formele eetkamer voor een elegante look die perfect is voor diners.
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Aluminium profielen"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Aluminium profielen zijn ideaal voor het bouwen van lichtbakken. Ze zijn <strong>goedkoop</strong>, verkrijgbaar in
            <strong>verschillende maten</strong> en zijn
            <strong>licht van gewicht</strong> zodat je je rug niet breekt bij het vervoeren. Daarom raden wij aan om aluminium profielen te gebruiken.
          </p>
          <p class="text-white font-extralight">
            Het enige probleem is dat het niet altijd gemakkelijk is om specifieke aluminium profiel onderdelen te vinden in de plaatselijke bouwmarkten en je moet ze vaak online bestellen en een week of twee wachten.
          </p>
          <p class="text-white font-extralight">
            Bovendien zijn aluminium profielen verkrijgbaar in een <strong>groot aantal afmetingen</strong>, zodat u nooit problemen zult hebben om er een te vinden die geschikt is.
          </p>
          <p class="text-white font-extralight">
            Mijn favoriete aluminium profiel is een 3 mm "U" kanaal omdat het <strong>zeer veelzijdig</strong> is en <strong>sterk genoeg</strong> om de led strips te ondersteunen.
          </p>
          <p class="text-white font-extralight">
            Ik gebruik dit aluminium profiel voor al mijn projecten waar led strip verlichting bij betrokken is, wat me veel tijd en geld bespaart.
          </p>
          <p class="text-white font-extralight">
            Zeker als u op zoek bent naar een <strong>strakke afwerking</strong> dan is dit een goede optie. Met een <strong>flexibele strip</strong> zoals die van Lideka moet dit geen enkel probleem zijn.
          </p>
          <p class="text-white font-extralight">
            Led ook goed op de <strong>breedte van de strip</strong> zodat deze wel netjes past in het profiel.
          </p>
        </LongParagraph>
      </div>



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
import TextWithImage from "~/components/blocks/TextWithImage.vue";
import {getCollection} from "~/services/ApiService";
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import VideoReviews from "~/components/VideoReviews.vue";

export default Vue.extend({
  components: {
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
        reverse: true
      });

      this.collection2 = await getCollection('tv-led-strips', {
        reverseImages: true,
        sortKey: 'PRICE',
        reverse: true
      });

      this.collection3 = await getCollection('rgb-ic-led-strips', {
        reverseImages: true,
        sortKey: 'PRICE',
        reverse: true
      });

      this.collection4 = await getCollection('led-pakketten', {
        reverseImages: true,
        sortKey: 'PRICE',
        reverse: true
      });
    }
  },
});
</script>
