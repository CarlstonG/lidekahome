<template>
  <div class="bg-black">

    <div class="mx-auto max-w-7xl mt-8 relative px-6 lg:px-0 lg:mb-0">
      <Banner :imageSrc="require('assets/powerbank/top.jpg')"/>

      <div class="mt-4">
        <CenterTitle
            tag="h1"
            title="Solar powerbank"
        />
      </div>
    </div>

    <div class="mx-auto max-w-7xl mt-10 mb-10">
      <LongParagraph>
        <p class="text-white font-extralight">
          Ben je vaak onderweg of hou je van een goede hike? Daar is een solar powerbank natuurlijk enorm handig bij. Ook als je graag onafhankelijk wilt zijn van stroom dan is een solar powerbank een geweldig oplossing.
          Heb je vaak op ongewenste momenten te maken met een lege batterij van je smartphone of tablet? Heel vervelend. Gelukkig is er een oplossing in de vorm van solar powerbanks. Deze zijn on-the-go mee te nemen en garanderen een volle batterij, de hele dag door. Een lege batterij van je device zorgt ervoor dat je tijdelijk niet of minder goed bereikbaar bent. Voorkom dat je hiermee te maken krijgt en kies voor de solar powerbanks van LIDEKA.
        </p>
      </LongParagraph>
    </div>

    <div class="max-w-7xl mx-auto space-y-10 mb-10 px-6 lg:px-0">
      <ProductsWithBackground
          v-if="collection"
          title="Solar powerbank producten"
          :collection="collection"
      />

      <VideoReviews />

      <SingleImage
        :image-src="require('~/assets/powerbank/powerbank.jpg')"
      />

      <LongParagraph
        title="Wat is een solar powerbank?"
      >
        <p class="text-white font-extralight">
          <a href="https://nl.wikipedia.org/wiki/Externe_oplaadbare_batterij" target="_blank" class="link" rel="noopener">Powerbanks</a> zijn enorm populair, en voor een goede reden. Met de powerbank laad je eenvoudig en snel je smartphone of tablet op, wanneer de batterij dreigt leeg te raken. Het is extra voorraad stroom die je effectief met je meedraagt. Een echte uitkomst op die momenten dat je écht je smartphone nodig hebt, zoals op je werk of onderweg in het openbaar vervoer. Solar staat voor zonne-energie, en dat is precies waar de powerbank op draait. Als het ware is de solar powerbank
          een externe batterij, waarbij de powerbank zichzelf ook weer kan opladen op basis van zonlicht.
        </p>
        <p class="text-white font-extralight">
          De solar powerbank beschikt over verschillende usb-poorten, waardoor je meer dan één device kunt opladen. Superhandig als je bijvoorbeeld een laptop wilt opladen in de trein en tegelijk wilt appen met je vrienden of familie. De powerbank beschikt over zonnecellen, welke dankzij de aanraking met zonlicht energie omzetten. Zo is niet alleen je device doorlopend verzekerd van voldoende energie,
          maar ook de solar powerbank die je met je meedraagt.
        </p>
      </LongParagraph>

      <LongParagraph
          title="Voordelen powerbank"
      >
        <p class="text-white font-extralight">
          Het grootste voordeel van de solar <a href="https://nl.wikipedia.org/wiki/Externe_oplaadbare_batterij" target="_blank" class="link" rel="noopener">powerbank</a> is zonder twijfel dat je nooit meer last hebt van de melding ‘energiebesparing’ of ‘lege batterij’; je device heeft altijd voldoende energie om de dag door te komen. Daarnaast is het design van de solar powerbank zodanig vormgegeven, dat deze gemakkelijk onderweg mee te nemen is. Ideaal voor alledaags gebruik. Met 4 USB-poorten kan je meerdere devices tegelijk aan de powerbank koppelen. De Quick Charge module zorgt ervoor dat je device in korte tijd volledig wordt opgeladen.
        </p>
      </LongParagraph>

      <SingleImage
          :image-src="require('~/assets/powerbank/solar.jpg')"
      />

      <CTA
          to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge"
      >
        Bekijk de solar powerbank
      </CTA>

      <LongParagraph
          title="Goed om te weten"
      >
        <p class="text-white font-extralight">
          De solar powerbank kan opgeladen worden middels zonne-energie, maar de accessoire opladen via het elektriciteitsnet werkt efficiënter. Mocht je al onderweg zijn en blijkt de powerbank geen energie meer te hebben, dan is het uiteraard mogelijk gebruik te maken van zonne-energie. De solar powerbank van LIDEKA beschikt over een geoptimaliseerde laadcapaciteit, een uniek design en de
          hoogste oplaadsnelheid. Ontdek het gemak van een to-go power punt terwijl je onderweg bent.
        </p>
      </LongParagraph>

      <LongParagraph
          title="Hoogwaardige kwaliteit"
      >
        <p class="text-white font-extralight">
          Ben je op zoek naar een stevige en functionele solar powerbank? De LIDEKA Solar Charger Powerbank is speciaal ontworpen om jou, waar je ook bent, te voorzien van een device met volle batterij. Je blijft altijd bereikbaar en maakt volop gebruik van je iPad, tablet, smartphone en zelfs je laptop. En het mooiste: de solar powerbank past gewoon in je jas- of broekzak. Voorkom een lege batterij en ontdek de efficiëntie van de Solar Charger Powerbank bij LIDEKA.
        </p>
      </LongParagraph>

      <LongParagraph
          title="Wat doe ik op de minder zonnige dagen?"
      >
        <p class="text-white font-extralight">
          Gebruik maken van de zon is natuurlijk geweldig, het is vrijwel gratis, duurzaam en je helpt onze planeet daarbij, maar wat doe je als er mindere zonnige dagen zijn? Vooral in Nederland wil de zon nog wel eens een tijdje weg blijven.
        </p>
        <h3 class="uppercase !text-white font-bold text-2xl">Daarom is het belangrijk dat je 2 opties hebt:</h3>
        <ol class="text-white font-extralight">
          <li>Snel laden als de zon verschijnt</li>
          <li>De mogelijkheid om energie op te slaan</li>
        </ol>
        <p class="text-white font-extralight">
          Je kunt onze powerbank vergelijken met een villa, en op een villa leg je ook meerdere panelen als je de volledige villa wilt laten werken op zonne-energie. Daarom is het aan te raden een extern solar paneel te nemen als je voortdurend via de zon wilt gaan laden. 
        </p>
        <h3 class="uppercase !text-white font-bold text-2xl">Waarom worden deze Solar panelen niet standaard aan de powerbank vastgemaakt?</h3>
        <p class="text-white font-extralight">
          Niet iedereen wilt voortdurend via de zon laden, veel mensen gebruiken de zon als ondersteuning en laden de powerbank verder op via netstroom. Vandaar dat we besloten hebben 2 aparte apparaten aan te bieden, we geven je dan ook de mogelijkheid deze als een set aan te kopen met extra korting. 
        </p>
      </LongParagraph>

      <LongParagraph
        title="Hoe werkt een solar powerbank op zonne-energie?"
      >
        <p class="font-extralight text-white">
          Solar powerbanks kunnen op twee manieren worden opgeladen. Hetzij door zonne-energie of via een stopcontact. Om de solar powerbank met zonne-energie op te laden, moet je het zonnepaneel van het apparaat uitspreiden zodat het zonne-energie kan verzamelen. Als uw powerbank op zonne-energie volledig is opgeladen, zal dit de zonne-energie op te slaan voor later gebruik. Als u geen zonnepaneel hebt, kun  powerbank op zonne-energie ook opladen met een USB-kabel of via het lichtnet.
        </p>
        <p class="font-extralight text-white">
          Als jouw solar powerbank op zonne-energie volledig is opgeladen, kunt u er - afhankelijk van de capaciteit - meerdere keren mobiele apparaten mee opladen. De zonnepanelen van zonne-energie banken zijn meestal tussen 1 en 4 watt. Als de solar powerbank leeg is kun je deze dus mooi met de zon weer opladen.
        </p>
      </LongParagraph>

      <SingleImage
          :image-src="require('~/assets/powerbank/mah.jpg')"
      />

      <CTA
          to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge"
      >
        Bekijk de solar powerbank
      </CTA>

      <div class="md:grid grid-cols-2 gap-10">
        <LongParagraph
          title="Volle batterij"
          :bg-color="true"
        >
          <p class="font-extralight text-white">
            Met deze geweldige solar Powerbank van Lideka heb jij altijd een volle batterij, je wilt natuurlijk niet midden in het bos met een lege batterij komen te zitten. Daarom raden we je altijd aan goed na te denken over het aantal tijd dat je weg gaat, zodat je altijd voldoende stroom hebt.
          </p>
        </LongParagraph>

        <LongParagraph
          title="Externe batterij"
          :bg-color="true"
        >
          <p class="font-extralight text-white">
            Een solar powerbank als deze kan prima gezien worden als een externe batterij, als je een lege accu hebt dan komt een externe batterij uitstekend van pas. Zeker in de tijd van smartphones komt een lege accu steeds vaker voor. 
          </p>
        </LongParagraph>
      </div>

      <LongParagraph
        title="Outdoor powerbanks"
        :bg-color="true"
      >
        <p class="font-extralight text-white">
          Er zit nog een groot verschil tussen normale en outdoor solar powerbanks, degene die wij verkopen is volledig outdoor, en kan voor alle doeleinden gebruikt worden.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Snel je mobiele telefoon opladen met deze solar powerbank"
        :bg-color="true"
      >
        <p class="font-extralight text-white">
          Deze solar powerbank is meer dan geschikt om jouw mobiele telefoon mee op te laden, er zit ook een speciale blauwe poort bij die jouw telefoon nog sneller oplaad, dit wordt de quick charge genoemd.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Micro USB"
        :bg-color="true"
      >
        <p class="font-extralight text-white">
          Bij deze geweldig powerbank word een mooie micro USB kabel geleverd, dit is erg handig om het apparaat zelf via het netstroom mee op te laden.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Grote capaciteit powerbank 30.000 Mah"
        :bg-color="true"
      >
        <p class="font-extralight text-white">
          Deze Solar powerbank heeft een uitzonderlijk grote capaciteit van maar liefst 30.000 <a href="https://nl.wikipedia.org/wiki/Milliamp%C3%A8re" target="_blank" class="link" rel="noopener">mAh.</a> 
          Er zijn veel verschillende powerbanks op de markt die zeggen dat ze deze capaciteit hebben, maar let goed op!! Dit is vaak niet waar. Wij controleren dat altijd aan het gewicht van het apparaat.
        </p>
      </LongParagraph>

      <SingleImage
          :image-src="require('~/assets/powerbank/multi.jpg')"
      />

      <LongParagraph
          title="Hoe Vaak kun je jouw apparaten laden?"
          :bg-color="true"
      >
        <p class="text-white font-extralight">
          Je kunt jouw iphone 8-12 keer volledig opladen, een ipad gemiddeld 5x en een galaxy 8 kun je zelfs 8x opladen. Let hierbij wel op dat dit altijd schattingen zijn en dit soms kan variëren. Zo kun je met een volle powerbank al jouw apparaten van stroom voorzien.
        </p>
        <h3 class="uppercase !text-white font-bold text-2xl">De Powerbank van Lideka heeft vele voordelen:</h3>
        <ul class="text-white font-extralight no-list-type">
          <li v-for="item in [
              '4 USB Poorten',
              'Quick charge functie',
              'USB-C Poort',
              'Wireless charging',
              'Super felle zaklamp',
              '30.000 mAh',
              'Tot 15 keer je telefoon opladen',
              'Speciale valbescherming',
              'Waterbestendig'
          ]" class="flex items-center space-x-4"><img alt="Checkmark" class="w-8 h-8"
                                                        src="~assets/icon/icons8-checkmark.svg"/><span
              class="tracking-wide text-gray-300 uppercase font-bold">{{item}}</span>
          </li>
        </ul>
      </LongParagraph>

      <LongParagraph
        title="Voor wie is het raadzaam om een powerbank te kopen?"
      >
        <p class="font-extralight text-white">
          Is het raadzaam voor jou om een powerbank te kopen? Wie weet! Eigenlijk is er geen enkele reden te verzinnen om geen solar powerbank te kopen, want deze accessoire brengt ontzettend veel gemak met zich mee. Heb je wel eens in de situatie gezeten dat je mobiele telefoon of tablet op het laatste streepje batterij balanceerde? Je bent zeker niet de enige. Het is een verschrikkelijk gevoel, en tegenwoordig dankzij de solar powerbank zelfs een onnodig gevoel. Je devices hoeven nooit meer leeg te raken zodra je de powerbank met je meedraagt. 
          <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">De Lideka Solar Powerbank heeft een uitzonderlijke capaciteit van 30000 mAH.</NuxtLink>
        </p>
      </LongParagraph>

      <CTA
          to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge"
      >
        Bekijk de solar powerbank
      </CTA>

      <LongParagraph
        title="Voor wie is een powerbank interessant?"
      >
        <p class="font-extralight text-white">
          Kan jij je verschrikkelijk irriteren om een lege batterij? Dan is de powerbank dé oplossing voor jou. Deze accessoire draag je eenvoudig mee in je broekzak, dan wel in een tasje dat je bij je draagt. Nooit meer last van een lege batterij. Je bent de hele dag bereikbaar voor je vrienden en familie, terwijl je ook nog eens het laatste nieuws kunt volgen. Wil je ook zonder stress door het leven? Wij begrijpen dat maar al te goed.
        </p>
        <p class="font-extralight text-white">
          Ook voor zakelijk gebruik is de powerbank onmisbaar. Veel mensen moeten bijvoorbeeld elke dag bereikbaar zijn voor klanten of hun baas. Dat vind je misschien niet altijd even prettig, maar het is wel een essentieel goed. En als je mobiele telefoon dan nog één streepje batterij over heeft, dan wil je toch wel graag beschikken over een powerbank, zeker wanneer je niet in de buurt bent van een oplaadpunt. 
          Een <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">powerbank</NuxtLink> voor zakelijke gebruikers? Wij kunnen het aanbevelen.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Hoe werkt de powerbank?"
      >
        <p class="font-extralight text-white">
          Een powerbank is als het ware een portable oplaadstation, waar je meerdere devices op hetzelfde moment kunt koppelen. De powerbank draait op solar, hetgeen betekent dat (zonlicht ervoor zorgt dat de powerbank óók zichzelf oplaadt. Powerbanks beschikken eveneens over een quick charge poort, waarmee je sneller dan verwacht weer beschikt over een volle batterij. Ideaal wanneer je even snel wilt opladen tijdens een autorit naar je volgende klant of gezellig een terrasje pakt. De powerbank draag je altijd bij je en biedt altijd precies wat je zoekt: een accessoire om al je devices aan te koppelen.
          De <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">powerbank</NuxtLink> van Lideka heeft dan zelfs 4 USB poorten, ook handig als je met vrienden op stap gaat.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Dus, voor wie?"
      >
        <p class="font-extralight text-white">
          De powerbank is voor iedereen die zonder stress onderweg wil zijn en bereikbaar wil óf moet blijven. Dat kunnen zakelijke gebruikers zijn, maar ook vriendinnen die de stad in gaan en terrasjes willen pakken. De batterij van je mobiele telefoon of tablet kan naarmate de dag vordert, zomaar leeg raken. Om dat te voorkomen sluit je snel je device aan op de solar powerbank, waardoor je binnen een uur weer up-and-running bent. Een moderne oplossing voor hedendaagse devices.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Wat zijn de nadelen van solar powerbanks?"
      >
        <p class="font-extralight text-white">
          Surf je over het internet, dan kom je ontzettend veel websites tegen waarop de voordelen van solar powerbanks worden beschreven. Logisch, want deze accessoire kan je op ieder moment van de dag helpen aan een volle batterij voor je device en is eenvoudig mee te dragen. Daarnaast kan je er meerdere devices tegelijkertijd op aansluiten, en de powerbank kan zichzelf ook nog eens opladen op basis van (zon)licht! Genoeg voordelen te benoemen, maar wij vroegen ons af: wat zijn de nadelen van de solar powerbank?
        </p>
      </LongParagraph>

      <LongParagraph
        title="Nadelen van de solar powerbank"
      >
        <p class="font-extralight text-white">
          Het lijkt misschien een beetje vreemd om de nadelen van een powerbank te benoemen, en dat is het ook als je kritische gaat kijken naar de eigenschappen van deze accessoire. Solar powerbanks kunnen zichzelf opladen op basis van (zonlicht, en zorgen er op hun beurt weer voor dat al jouw devices de hele dag opgeladen zijn. Nooit meer stress om dat laatste streepje batterij dus, eindelijk! Mogen we dan ook een klein minpuntje noemen van de solar powerbank? Dat mag, maar makkelijk is het niet. Wil je toch nog iets noemen, dan is het dat er een aardige tijd overheen gaat voordat een solar powerbank volledig is opgeladen door (zonlicht. Je beschikt dus vrijwel nooit over een compleet volle powerbank, maar is dat erg?
        </p>
        <p class="font-extralight text-white">
          De capaciteit van een <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">solar powerbank</NuxtLink> is enorm. Dat wil zeggen dat je dagenlang met de powerbank kunt rondlopen, volop je devices kunt opladen en toch nog beschikt over een werkzame accessoire. Dat de powerbank niet altijd beschikt over een 100% volle batterij, dat zien we graag door de vingers.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Handig mee te nemen?"
      >
        <p class="font-extralight text-white">
          Het is een vraag die we vaak gesteld krijgen: is de solar powerbank eenvoudig mee te dragen? Wij hebben hier altijd een eenduidig antwoord op: ja! De powerbank kent ongeveer de grootte van je handpalm, en is daardoor eenvoudig mee te dragen in je broekzak of heuptasje. Ideaal als je met je vrienden of vriendinnen de stad in wilt. De hele dag elke winkel binnenstappen of urenlang op het terras borrelen? Geen enkel probleem. 
          Met de <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">solar powerbank</NuxtLink> is de batterij van je device altijd goed gevuld en blijf je bereikbaar voor iedereen in je directe omgeving.
        </p>
        <p class="font-extralight text-white">
          Dat de solar powerbank te groot zou zijn, en dat dit eventueel een nadeel kan zijn, is dan ook niet op waarheid berust. De solar powerbank is een superhandige accessoire.
        </p>
      </LongParagraph>

      <CTA
          to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge"
      >
        Bekijk de solar powerbank
      </CTA>

      <LongParagraph
        title="Wat zijn de voordelen van een Solar powerbank?"
      >
        <p class="font-extralight text-white">
          Wil je ook profiteren van de voordelen van een Solar powerbank of charger? We maken dagelijks gebruik van onze smartphone of tablet, en altijd bereikbaar zijn is dan ook belangrijk. Daar hoort een volle accu bij, en met een <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">solar powerbank</NuxtLink> ben je daarvan verzekerd. Je wilt berichten kunnen sturen naar je vrienden en familie, foto’s maken van speciale plekken en opzoeken wat de sluitingstijd is van je favoriete eetcafé. Is je batterij echter al op 15% midden op de dag en heb je geen powerbank, dan moet je de rest van de dag extreem zuinig aan doen. Onnodig! We zijn de voordelen van de Solar powerbank?
        </p>
      </LongParagraph>

      <div class="md:grid grid-cols-2 gap-10">
        <LongParagraph
          title="Opladen zonder elektrische input"
          :bg-color="true"
        >
          <p class="font-extralight text-white">
            We begrijpen goed dat je geen stekkers mee wilt nemen als je naar buiten gaat, terwijl je afhankelijk bent van een stopcontact om je device op te laden. Juist daarom is de <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">solar powerbank</NuxtLink> zo ideaal. Dit is een portable formaat oplaadpunt, waar je op ieder moment van de dag je device kunt opladen. Daar komt nog bij dat je de powerbank eenvoudig bij je draagt, evenals bijvoorbeeld je smartphone, waardoor je eigenlijk niks merkt van de aanwezigheid ervan. Pas wanneer je de Solar charger écht nodig hebt, dan merk je het én ervaar je de voordelen van deze technologie.
          </p>
        </LongParagraph>

        <LongParagraph
          title="Charger met meerdere USB poorten"
          :bg-color="true"
        >
          <p class="font-extralight text-white">
            Heb je niet één, maar meerdere devices bij je? Ook als je wel een fysieke oplader bij je hebt, kan je ‘gewoon’ gebruik maken van de Solar powerbank.
            <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">Deze beschikt namelijk over vier USB poorten</NuxtLink>, waardoor je altijd meerdere apparaten tegelijk kunt opladen. Denk aan je mobiel en tablet, opgeladen op hetzelfde moment en daarom altijd voorzien van een volle accu! Dat wil je toch ook?
          </p>
        </LongParagraph>

        <LongParagraph
          title="Zonnecel: powerbank laadt op bij licht"
          :bg-color="true"
        >
          <p class="font-extralight text-white">
            Wist je dat een Solar powerbank zichzelf kan opladen? Dit gebeurt bij de aanraking met lichtstralen. Het hoeft niet eens per se zon te zijn, als er maar licht op de powerbank valt. Dat is ideaal, want je hoeft de powerbank dus niet zelf op te laden. Deze is, evenals al je mobiele devices, altijd voorzien van een volle accu. Ook de Solar powerbanks van Lideka Home zijn voorzien van een zonnecel, zodat je altijd verzekerd bent van een functionele portable charger.
          </p>
          <p class="font-extralight text-white">
            Milieuvriendelijk? Ja! Dankzij de zonnecel en de functionaliteit op zonne-energie, is de Solar powerbank een milieuvriendelijke oplossing voor opladen. Je verspilt geen energie bij het opladen van je smartphone of tablet, en profiteert optimaal van een volle accu.
          </p>
        </LongParagraph>

        <LongParagraph
          title="Laag gewicht"
          :bg-color="true"
        >
          <p class="font-extralight text-white">
            Tot slot is de Solar powerbank een lichtgewicht gadget. Deze portable charger met je meedragen is dus geen enkel probleem. De Solar powerbank neem je eenvoudig mee in een rugzak of heuptasje. Je zult pas merken dat je de powerbank bij je hebt, op het moment dat de accu leeg begint te raken. Tijd om op te laden! Solar powerbanks zijn een unieke en moderne oplossing om dat voor elkaar te krijgen.
          </p>
        </LongParagraph>
      </div>

      <LongParagraph
        title="In welke situaties heb je een Solar powerbank nodig?"
      >
        <p class="font-extralight text-white">
          De Solar powerbank is enorm in opkomst. Dit is een relatief nieuwe, maar zeer functionele accessoire om de hele dag bij je te kunnen dragen. Heb je devices die snel leeg gaan, simpelweg omdat je deze vaak gebruikt? Dan is het prettig om je portable oplader altijd bij de hand te hebben. Zie je hier op dit moment nog niks in? Ontdek dan maar eens in welke situaties de Solar powerbank een verrassende uitkomst is.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Voordelen Solar powerbank"
      >
        <p class="font-extralight text-white">
          Voordat we de situaties voor een Solar powerbank met je gaan bespreken, is het goed om stil te staan bij de belangrijkste voordelen van deze accessoire. Een Solar powerbank functioneert op basis van zonne-energie, en kan zichzelf zodoende opladen. De laatste jaren worden de prestaties van de Solar powerbank steeds verder verbeterd, waardoor ook de powerbank zelf vrijwel altijd over een volle of semi-volle batterij beschikt. Via de Solar powerbank kan je al je devices eenvoudig opladen, en hebt dus nooit meer last van een lege batterij. Omdat de Solar powerbank portable is, kan je deze gewoon meedragen in je jaszak of een tasje. Niks is zo prettig!
        </p>
        <p class="font-extralight text-white">
          Tijd om je meer te vertellen over de situaties waarin een Solar powerbank onmisbaar is geworden.
        </p>
      </LongParagraph>

      <div class="md:grid grid-cols-2 gap-10">
        <LongParagraph
          title="Een lange autorit richting vakantie"
          :bg-color="true"
        >
          <p class="font-extralight text-white">
            Hoewel steeds meer auto’s tegenwoordig de beschikking hebben over oplaadpunten, is dit in lang niet alle auto’s het geval. Ga je binnenkort op vakantie, of ben je dat net geweest, en heb je tot 10 uur non-stop in de auto gezeten? Dan kan de batterij van je mobiel zomaar leeg raken. Zonde, want nu heb je geen plek meer om de batterij op te laden. 
            Heb je een <NuxtLink to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge" class="link">solar powerbank</NuxtLink> bij de hand, dan hoef je je daar geen zorgen over te maken.
          </p>
        </LongParagraph>

        <LongParagraph
          title="Een dagje stad"
          :bg-color="true"
        >
          <p class="font-extralight text-white">
            Heb je met je vrienden of vriendinnen afgesproken in de stad? Helemaal leuk natuurlijk, maar je weet van te voren nooit hoe lang je blijft. Stel dat het zo leuk is dat je blijft eten en ’s avonds nog een drankje pakt. Je bent al gauw een uur of 9 in de stad; genoeg tijd om je batterij naar 0% te zien lopen. Geen oplaadpunt in de buurt of zelfs geen oplader mee? Dan ben je onbereikbaar. Met een Solar powerbank beschik je echter direct weer over capaciteit op je mobiel, zonder dat je lastige capriolen hoeft uit te halen. Ideaal!
          </p>
        </LongParagraph>
      </div>

      <CTA
          to="/products/solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge"
      >
        Bekijk de solar powerbank
      </CTA>

      <LongParagraph
        title="De reguliere oplader is kapot"
      >
        <p class="font-extralight text-white">
          Opladers van de mobiel of tablet zijn gebruiksvoorwerpen, wat betekent dat deze ook kapot kunnen gaan. Je moet dan, ondanks dat je hier geen zin hebt, weer naar de winkel of online shoppen voor een nieuwe oplader. Maar is dat wel nodig? De Solar powerbank is een duurzaam product en gaat erg lang mee. Je hoeft je dan ook nooit meer zorgen te maken over een lege batterij.
        </p>
        <p class="font-extralight text-white">
          Ook profiteren van de voordelen van een Solar powerbank. Waar je ook bent en welke situaties je ook tegenkomt, je hoeft je nooit meer zorgen te maken over een lege batterij. Je mobiel beschikt altijd over een volle batterij.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Waar is het gebruik van een Solar powerbank ideaal voor?"
      >
        <p class="font-extralight text-white">
          We kennen allemaal de frustratie van een lege accu, waar je uitsluitend last van lijkt te hebben op momenten dat je het echt niet kunt gebruiken. Je bent natuurlijk ook net op een plek zonder oplaadpunten. Zonde, en vooral onnodig. Je hoeft namelijk nooit meer stress te hebben over een lege accu met de Solar powerbank. Zelfs als je in de middle-of-nowhere te vinden bent, heb je met de Solar charger altijd een accessoire bij je die je uit de brand helpt bij een lege accu. Dat betekent dat je altijd bereikbaar bent en jouw device zorgeloos kunt gebruiken.
        </p>
      </LongParagraph>

      <SingleImage
          :image-src="require('~/assets/powerbank/charge.jpg')"
      />

      <LongParagraph
        title="De accu van je device leeg?"
      >
        <p class="font-extralight text-white">
          Dat hoeft niet! Sterker nog, de Solar powerbank zorgt ervoor dat de accu van je smartphone nooit meer leeg hoeft te zijn. Solar staat voor ‘zonne’, hetgeen verwijst naar zonne-energie. De charger laadt dus op, op het moment dat deze in aanraking komt met (zonlicht. Ideaal, want zo hoef je de Solar charger niet zelf op te laden. Deze koop je in een portable formaat, en draag je eenvoudig met je mee. Dreigt je accu leeg te geraken en heb je nog maar één streepje over? Geen stress! Sluit je device aan op de Solar powerbank en profiteer van de quick charge functie, waarmee je device binnen afzienbare tijd weer volledig is opgeladen.
        </p>
        <p class="font-extralight text-white">
          Een lange dag in de buitenlucht? Dan is de Solar powerbank een ideale accessoire om bij je te dragen. Laat je niet verrassen door een lege accu. Zeker als je op vakantie bent en veel foto’s wilt maken van de omgeving, dan kan je accu snel leeg zijn. Je wilt niet het risico lopen dat je de beste foto van de dag moet missen, omdat de batterij van je smartphone het heeft begeven. Sluit je oplader aan op de Solar charger en beschikt snel over een volle batterij.
        </p>
      </LongParagraph>

      <LongParagraph
        title="Overal waar geen stopcontact is"
      >
        <p class="font-extralight text-white">
          Loop je in de stad en is de accu van je device bijna leeg? Dan kan je gelukkig gewoon een café in lopen en je device opladen. Maar als je buiten de stad loopt of fietst en zit je batterij op 5%? Dan is de kans groot dat je nergens meer naar binnen kunt stappen, en dus tijdelijk niet bereikbaar bent. Wil je dat absoluut niet? Dan is het verstandig om je goed voor te bereiden, en dat doe je met de juiste accessoires; de Solar powerbank is misschien wel de fijnste accessoire om dan achter de hand te hebben. Je blijft ‘gewoon’ bereikbaar voor vrienden en familie, kunt de snelste route naar een bestemming vinden en alles functies van je smartphone of tablet blijven gebruiken.
        </p>
        <p class="font-extralight text-white">
          Ga zorgeloos op pad met de Solar powerbank. Bij Lideka Home met 4 USB poorten en een quick charge functie. Zo ben je binnen no-time weer up and running.
        </p>
      </LongParagraph>

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

      <BlogList />

      <SmallCenterTitle
        title="Lideka staat 24/7 klaar om al jouw vragen te beantwoorden"
      />

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
import TextWithImage from "~/components/blocks/TextWithImage.vue";
import LongParagraph from "~/components/blocks/LongParagraph.vue";
import VideoReviews from "~/components/VideoReviews.vue";
import CTA from "~/components/CTA.vue";
import BlogList from "~/components/BlogList.vue";
import NewsletterBlock from '~/components/NewsletterBlock.vue';

export default Vue.extend({
  components: {
    BlogList,
    CTA,
    VideoReviews,
    LongParagraph,
    TextWithImage,
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
