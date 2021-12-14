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

      <div class="hidden md:block md:absolute mt-10 lg:mt-0 bottom-2 left-2 md:bottom-20 md:left-20 md:right-20">
        <h1 class="mx-auto text-3xl text-white font-bold tracking-wide text-center">
          LED strips
        </h1>
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10 px-6 lg:px-0">
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

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Wat zijn LED strips"
            :bg-color="false"
        >
          <p class="text-white font-extralight">
            Het zijn lichtsnoeren met lichtcomponenten. LED staat voor Light Emitting Diode, vrij vertaald als lichtgevende lampjes. Het kenmerkende element is de
            <strong>veelzijdigheid</strong>. Wist je bijvoorbeeld dat je binnen het kleurenpalet keuze hebt uit meer dan
            <strong>16 miljoen kleuren</strong> en tinten? Het zorgt ervoor dat LED verlichting in vrijwel elke ruimte een sfeervolle toepassing kent.
          </p>
          <p class="text-white font-extralight">
            Voorbeelden zijn LED-strips in de
            <a href="/categorie/led-strip-badkamer" class="link">badkamer</a>,
            <a href="/categorie/led-strip-slaapkamer" class="link">slaapkamer</a> of
            <a href="/categorie/led-strip-woonkamer" class="link">woonkamer</a>.
            Je kunt de ze tegen het <a href="/categorie/led-strip-plafond" class="link">plafond</a> installeren, of juist langs de rand van de spiegel in de badkamer. Zelfs als vervanging van de bestaande verlichting in de ruimte!
          </p>
          <p class="text-white font-extralight">
            Steeds meer mensen gebruiken LED-strips buiten. En waarom ook niet? We kopen tegenwoordig de mooiste tuinsets om buiten te kunnen zitten, en
            <a href="/blog/alles-over-led-verlichting-als-sfeerverlichting" class="link">sfeervolle verlichting</a> hoort daar uiteraard bij.
          </p>
          <p class="text-white font-extralight">
            LED strips zijn eenvoudig te bevestigen langs de onderkant van het dak, en blijven dankzij een
            <strong>stevige plakrand</strong> altijd op hun plek hangen. Zo creëer je ook buiten een
            <strong>unieke sfeer</strong>, waarmee in de eigen tuin loungen nog leuker wordt. Het gebruik van deze strips gaat vaak via een
            <strong>afstandsbediening</strong>, en <strong>app</strong>.
          </p>
        </LongParagraph>
      </div>

      <CTA to="/products/rgb-led-light-strip-15-meter-smart-verlichting">
        Bekijk best verkochte strip
      </CTA>

      <SingleImage :image-src="require('assets/photos/Woonkamer-3.jpg')" />

      <div class="mx-auto max-w-7xl">
        <h2 class="mx-auto text-3xl text-center text-white font-bold">
          De 4 meest populaire soorten
        </h2>
        <p class="text-white text-2xl text-center mt-2">
          welke kies jij?
        </p>
      </div>

      <CategorySlider />

      <CTA to="/products/rgb-led-light-strip-15-meter-smart-verlichting">
        Bekijk meest verkochte LED-strip
      </CTA>

<!--      <Highlights :highlights="[-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-best-seller-50.svg'),-->
<!--            description: 'Door zijn bijzondere stevige dubbelzijge 3M tape ben jij verzekerd van een LED-strip die nooit meer loslaat. Zorg voor een schone ondergrond.'-->
<!--          },-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-usb-on-50.svg'),-->
<!--            description: 'Dit set wordt bovendien geleverd met  een directe USB-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.'-->
<!--          },-->
<!--          {-->
<!--            imageSrc: require('assets/icon/icons8-warranty-50.svg'),-->
<!--            description: 'Naast deze slimme functies wordt ook dit Lideka® model geleverd met led-lampjes van de hoogste kwaliteit en een onvoorwaardelijke garantie van 2 jaar.'-->
<!--          }-->
<!--      ]" />-->

      <SingleImage :image-src="require('assets/photos/Woonkamer-2.jpg')" />

      <CenterTitle
        title="De voordelen van jouw nieuwe LED-strips"
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

      <SingleImage :image-src="require('assets/photos/TV3.jpg')"
                   description="<div class='font-bold text-2xl'>100% tevredenheidsgarantie.</div> Wij staan volledig achter de kwaliteit van onze producten en bieden jou een onvoorwaardelijke garantie van 24 maanden."
      />

      <div class="mx-auto max-w-4xl lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-6 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-24 mx-auto" src="~assets/icon/icons8-return-purchase-50.svg" />
              </div>
              <h2 class="text-white font-bold text-left md:text-center text-sm uppercase tracking-wide pt-6 px-6 lg:px-20">
                60 dagen gratis retourneren
              </h2>
              <p class="text-white font-extralight text-left md:text-center pt-2 px-6 lg:px-20 text-sm">
                Omdat wij geloven in service, en jou willen voorzien van een risicoloze aankoop geven we in eerste instantie 60 dagen gratis retourneren.
              </p>
            </div>
          </div>
          <div class="relative flex justify-center default-gradient" style="border-radius: 20px;"
          >
            <div class="h-full py-6 flex flex-col" style="z-index: 1">
              <div class="flex items-center">
                <img class="w-24 mx-auto" src="~assets/icon/icons8-technical-support-50.svg" />
              </div>
              <h2 class="text-white font-bold text-left md:text-center text-sm uppercase tracking-wide pt-6 px-6 lg:px-20">
                24/7 ondersteuning beschikbaar
              </h2>
              <p class="text-white font-extralight text-left md:text-center pt-2 px-6 lg:px-20 text-sm">
                Lideka staat overigens 24/7 klaar om al jouw vragen te beantwoorden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CenterTitle title="Kies jou specifieke lengte" />
      <Lenghts />

<!--      <CenterTitle-->
<!--        title="Bekijk ook eens onze andere soorten LED-strips:"-->
<!--      />-->

<!--      <OtherCollections-->
<!--        :collections="[-->
<!--            'led-pakketten',-->
<!--            'rgb-led-strips',-->
<!--            'tv-led-strips'-->
<!--        ]"-->
<!--      />-->

      <SingleImage :image-src="require('assets/photos/TV-1.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="RGB"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            RGB-led verlichting combineert rode, groene en blauwe led-lampjes in één behuizing en vormt honderden verschillende lichttinten door deze drie kleuren te mengen. Zo stel jij jouw favoriete kleuren samen wanneer je maar wilt en geniet je iedere keer weer van een unieke sfeer.
          </p>
          <p class="text-white font-extralight">
            Deze stijlvolle led set wordt geleverd inclusief installatiemateriaal, IP65-waterproof bescherming en led lampjes van de hoogste kwaliteit zodat je jouw aankoop nog jarenlang kunt gebruiken. Toch niet tevreden? Lideka® garandeert jou van een 2-jarige garantie.
          </p>
          <p class="text-white font-bold">
            Verkrijgbaar in:
          </p>
          <ul class="text-white font-extralight">
            <li>
              <NuxtLink to="/products/rgb-led-light-strip-3-meter-smart-verlichting" class="link">3 meter: 90 Leds</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/rgb-led-light-strip-5-meter-smart-verlichting" class="link">5 meter: 300 Leds</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/rgb-led-light-strip-10-meter-smart-verlichting" class="link">10 meter: 300 Leds</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/rgb-led-light-strip-15-meter-smart-verlichting" class="link">15 meter: 270 Leds</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/rgb-led-light-strip-20-meter-smart-verlichting" class="link">20 meter: 270 Leds</NuxtLink>
            </li>
          </ul>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="RGB-IC"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Net als bij een standaard model vormt de
            <NuxtLink class="link" to="/categorie/rgb-ic-led-strips">RGB-IC</NuxtLink> alle mogelijke kleurtinten, maar dan met schitterende <strong>extra lichteffecten</strong>. Deze splinternieuwe vorm van led licht wordt ook wel ‘Dreamcolor Led’ genoemd en is razend populair bij onder Amerikaanse TikTokkers. Van regenboog patronen tot schietende leds of dromerige kleuren, met deze gloednieuwe editie is het mogelijk!
          </p>
          <p class="text-white font-extralight">
            Naast deze extra features werkt de RGB-IC uitvoering net als een traditionele LED-strip. Zo ben je verzekerd van 2 jaar garantie, IP65-waterproof bescherming en led-lampjes van de hoogste kwaliteit.
          </p>
          <p class="text-white font-bold">
            RGBIC
          </p>
          <ul class="text-white font-extralight">
            <li>
              <NuxtLink to="/products/rgb-ic-led-light-strip-5-meter-smart-verlichting" class="link">5 meter: 150 Leds</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/rgb-ic-led-light-strip-10-meter-smart-verlichting" class="link">10 meter: 300 Leds</NuxtLink>
            </li>
          </ul>
        </LongParagraph>
      </div>

      <CTA to="/products/rgb-ic-led-light-strip-5-meter-smart-verlichting">
        Bekijk RGB-IC uitvoering
      </CTA>


      <SingleImage :image-src="require('assets/photos/Slaapkamer-indirect.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="TV"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Een
            <a href="/categorie/tv-led-strips" class="link">LED-strip achter je TV</a> creëert een <strong>stijlvolle lichtgloed</strong> rondom het scherm en geeft jouw huiskamer een echte bioscoop sfeer.
          </p>
          <p class="text-white font-extralight">
            Maar deze handige strips zijn veel meer dan alleen mooi en zorgen ook voor een subtielere overgang tussen licht en donker.
            Zo worden jouw ogen <strong>minder snel moe</strong> en kijk je extra comfortabel naar jouw
            <strong>favoriete films & shows</strong>.
          </p>
          <p class="text-white font-extralight">
            De set wordt bovendien geleverd met <strong>dubbelzijdig tape</strong> en een directe <strong>USB</strong>-aansluiting zodat je de strip razendsnel en zonder kabels, adapters of extra schroeven aan jouw tv kunt koppelen.
          </p>
          <p class="text-white font-bold">
            USB
          </p>
          <ul class="text-white font-extralight">
            <li>
              <NuxtLink to="/products/lideka-tv-led-strip-2-meter-usb-rgb-smart-verlichting" class="link">2 meter: 60 Leds</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/lideka-tv-led-strip-3-meter-usb-rgb-smart-verlichting" class="link">3 meter: 90 Leds</NuxtLink>
            </li>
          </ul>
        </LongParagraph>
      </div>

      <CTA to="/categorie/tv-led-strips">
        Bekijk TV LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/photos/Badkamer-2.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Waterdicht"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Onze <a href="https://nl.wikipedia.org/wiki/IP-code" class="link">IP65</a> producten zijn waterdicht, en daardoor ook geschikt <strong>voor buiten</strong>.
            Lekker als je ’s avonds tot in de late uurtjes buiten wilt genieten van
            zomerse omstandigheden, of juist in de winter, wanneer je buiten bij de warme kachel wilt zitten.
          </p>
          <p class="text-white font-extralight">
            Met onze IP65 bescherming garanderen we dat de producten ook in een <strong>vochtige omgeving</strong> optimaal functioneren.
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Smart app Lideka Home of afstandsbediening"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Met de <strong>Smart app van Lideka Home</strong> ervaar je het gewenste gebruiksgemak. Je kunt hiermee de LED-strip op afstand bedienen en kiezen uit het volledige kleurenpalet.
          </p>
          <p class="text-white font-extralight">
            Heerlijk vanaf je smartphone schakelen tussen <strong>alle kleuren en tinten</strong>; de fijnste manier om de sfeer in huis te bepalen.
            Wil je niet kiezen voor de Smart app? Dan gebruik je onze bijgeleverde <strong>afstandsbediening.</strong>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Voedingsadapter"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Zoals we al eerder vertelden, heb je bij de aankoop keuze uit <strong>5V, 12V of 24V</strong>.
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
            Bij een LED-strip worden de lampjes op evenredige afstand van elkaar op het lichtsnoer gesoldeerd, en zorgen daarmee over kleine en grote afstand voor een gelijke afgifte van licht. <strong>Sfeervol en efficiënt.</strong>
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="5V, 12V en 24V"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Het belangrijk om rekening te houden met het
            <a class="link" href="https://nl.wikipedia.org/wiki/Elektrische_spanning">Voltage</a>. Onze LED strips zijn beschikbaar in 5 en 12 volt.
          </p>
          <p class="text-white font-extralight">
            Langs de 5V en 12V loopt minder stroom, waardoor het over het algemeen als veiliger wordt ervaren.
          </p>
          <p class="text-white font-extralight">
            Voor de kortere LED-strips, zoals van 3, 5 of 10 meter, is dit voltage ideaal. Voor de grotere lengtematen vanaf 10 meter is 12V de beste optie.
          </p>
          <p class="text-white font-extralight">
            <a href="/blog/hoe-werkt-led-verlichting" class="link">
              Lees hier meer over hoe led verlichting werkt
            </a>
          </p>
        </LongParagraph>
      </div>

      <CTA to="/product/led-strip-10-meter">
        Bekijk best verkochte LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/photos/keuken.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Voordelen"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Het is een <strong>moderne vorm</strong> van verlichting voor binnen- en buitenshuis, alsmede voor bedrijfspanden.
          </p>
          <p class="text-white font-extralight">
            Bij Lideka Home willen we iedereen de kans geven om de voordelen te ervaren. Bij led denken we snel aan
            <strong>energie zuinig</strong>, maar dat is niet het enigste voordeel.
          </p>
          <p class="text-white font-extralight">
            Wat zijn de <strong>belangrijkste voordelen</strong> van LED verlichting?
          </p>
          <ul class="text-white font-extralight no-list-type">
            <li v-for="item in [
                'Verkrijgbaar in verschillende lengtematen',
                'Eenvoudig zelf op maat te maken',
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
            Een ander leuk voordeel is dat het licht mooi egaal verdeeld wordt over de ruimte waar je het geplaatst hebt.
          </p>
        </LongParagraph>
      </div>

      <CTA to="/product/led-strip-10-meter">
        Bekijk best verkochte LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/photos/keuken.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="LED-strips"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Maak kennis met onze <strong>verrassende lichteffecten</strong>, ideaal voor iedere gelegenheid.
          </p>
          <p class="text-white font-extralight">
            Heb je een feestje? Dan kies je voor de <strong>Strobe</strong> stand: flitsende lichten, waarmee je iedereen in beweging krijgt.
          </p>
          <p class="text-white font-extralight">
            Een lounge avond met vrienden of familie? Met onze <strong>Fade</strong> verlichting creëer je een unieke sfeer. Deze verlichting biedt wisselende kleuren met donkere intervallen.
          </p>
          <p class="text-white font-extralight">
            De <strnog>Flash</strnog> verlichting wisselen doorlopend van kleur en dat geeft een super gaaf effect.
          </p>
          <p class="text-white font-extralight">
            Tot slot kun je nog kiezen voor <strong>Smooth</strong> LED verlichting; gebruikt voor speciale gelegenheden, feestjes of simpelweg voor de optimale lounge experience.
          </p>
        </LongParagraph>
      </div>

      <CTA to="/product/led-strip-10-meter">
        Bekijk best verkochte LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/photos/Badkamer-4.jpg')" />

      <CTA to="/product/led-strip-10-meter">
        Bekijk best verkochte LED-strips
      </CTA>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Profielen"
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
            title="Controllers"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Bij al onze complete sets krijg je <strong>standaard</strong> een controller <strong>meegeleverd</strong>, deze is van
            <strong>hoge kwaliteit</strong> en
            gaat zeker nog jaren mee. De controllers zijn gemaak van hoogwaardige kwaliteit kunststof. Je kunt er de volgende drie dingen mee doen:
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
        </LongParagraph>
      </div>

      <CTA to="/product/led-strip-10-meter">
        Bekijk best verkochte LED-strips
      </CTA>

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

      <CTA to="/product/led-strip-10-meter">
        Bekijk best verkochte LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/photos/Woonkamer-1.jpg')" />

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

      <CTA to="/product/led-strip-10-meter">
        Bekijk best verkochte LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/photos/rgb-slaapkamer.jpg')" />

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Strip lights"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            In landen zoals amerika hoor je vaak de term ''strip lights'' vallen, dat is een andere benaming voor 'led strips'. Er wordt eigenlijk precies hetzelfde bedoeld, het wordt alleen iets anders uitgedrukt.
          </p>
          <p class="text-white font-extralight">
            Er zijn wel verschillende soorten strip lights, maar dat valt ook weer onder led strips. Zo zijn er ook nog andere synoniemen voor strip lights, zoals: light strip. Het komt uiteindelijk allemaal op hetzelfde neer.
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Digitale ledstrips"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Je ziet soms de term digitaal voorbij komen, we leggen je graag uit wat dat precies inhoudt zodat je precies waar je op moet letten als aan het shoppen bent.
          </p>
          <p class="text-white font-extralight">
            Digitaal betekent heel simpel dat de verlichting te besturen is via een app, dat kan dan via verschillende apparaten zijn. In dit geval gaat het dan om digitale WS2812b ledstrips. Jouw nieuwe artikel heeft een built-in RGBIC chip.
          </p>
        </LongParagraph>
      </div>

      <div class="max-w-5xl mx-auto">
        <LongParagraph
            title="Ledstrip voor bar"
            :bg-color="true"
        >
          <p class="text-white font-extralight">
            Ook is dit artikel meer dan geschikt voor een bar, vanwege het <strong>ijzersterke 3M tape</strong> en zijn hoge helderheid is hij prima geschikt.
          </p>
        </LongParagraph>
      </div>

      <CTA to="/product/led-strip-10-meter">
        Bekijk best verkochte LED-strips
      </CTA>

      <SingleImage :image-src="require('assets/photos/Bed-2.jpg')" />

     <BlogList />

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
import CTA from "~/components/CTA.vue";
import CategorySlider from "~/components/CategorySlider.vue";
import Lenghts from '~/components/Lenghts.vue';
import BlogList from "~/components/BlogList.vue";

export default Vue.extend({
  components: {
    BlogList,
    CategorySlider,
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
    Lenghts
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
      const [
          col1,
          col2,
          col3,
          col4
      ] = await Promise.all([
        await getCollection('rgb-led-strips', {
          reverseImages: true,
          sortKey: 'PRICE',
          reverse: true
        }),
        await getCollection('tv-led-strips', {
          reverseImages: true,
          sortKey: 'PRICE',
          reverse: true
        }),
        await getCollection('rgb-ic-led-strips', {
          reverseImages: true,
          sortKey: 'PRICE',
          reverse: true
        }),
        await getCollection('led-pakketten', {
          reverseImages: true,
          sortKey: 'PRICE',
          reverse: true
        })
      ])

      this.collection1 = col1;
      this.collection2 = col2;
      this.collection3 = col3;
      this.collection4 = col4;
    }
  },
});
</script>
