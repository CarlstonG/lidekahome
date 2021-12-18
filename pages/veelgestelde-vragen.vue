<template>
  <div class="bg-white">
    <Breadcrumbs/>
    <div v-if="!page.id">
      <div class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10 relative" style="min-height: 500px">
        <Loading v-show="loading"/>
        <NotFound v-if="!loading"/>
      </div>
    </div>
    <div v-else>
      <div class="relative py-16 bg-white overflow-hidden">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="text-lg max-w-prose mx-auto">
            <h1>
              <span
                class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{
                  page.title
                }}</span>
            </h1>
          </div>
          <div
            class="mt-6 max-w-6xl text-gray-500 mx-auto page-content shadow-lg p-4 md:p-12 rounded-lg default-page-content">
            <dl class="mt-6 divide-y divide-gray-200">
              <div v-for="question in questions" :key="question.question">
                <div class="pt-2 pb-2">
                  <dt class="text-lg">
                    <!-- Expand/collapse question button -->
                    <button @click.prevent="question.isOpen = !question.isOpen"
                            type="button"
                            class="text-left w-full flex justify-between items-start text-gray-400">
                      <span class="font-medium text-gray-900">{{ question.question }}</span>
                      <span class="ml-6 h-7 flex items-center">
                                    <svg class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </span>
                    </button>
                  </dt>
                  <transition name="fade">
                    <dd class="mt-2 pr-12 overflow-hidden" v-if="question.isOpen">
                      <p class="text-base text-gray-500">
                        {{ question.answer }}
                      </p>
                    </dd>
                  </transition>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Loading from "~/components/Loading";
import {safeGet} from "~/services/Helpers";
import NotFound from "~/components/NotFound";
import {getPage} from "../services/ApiService";
import Breadcrumbs from "~/components/Breadcrumbs";

export default Vue.extend({
  components: {
    Breadcrumbs,
    NotFound,
    Loading,
  },

  data() {
    return {
      loading: false,
      page: {},
      questions: [
        {
          question: 'Mijn afstandsbediening werkt niet, wat nu?',
          answer: 'Controleer eerst of het plastic beschermlaagje op de batterij is verwijderd. Controleer ook of de LED-strip zelf goed is aangesloten. Ga alle verbindingen na en probeer het daarna nog een keer. Werkt de afstandsbediening nog steeds niet? Neem contact op met een van onze experts, ze staan 24/7 voor je klaar!',
          isOpen: false,
        },
        {
          question: 'Kan ik de LED-strip verlengen?',
          answer: 'Helaas niet. Wij raden het ten strengste af om onze LED-strips te verlengen!',
          isOpen: false,
        },
        {
          question: 'Ik heb de hoek connectors gebruikt en het verlengde stuk werkt niet meer. Wat moet ik doen?',
          answer: 'Het probleem zit ‘m hier waarschijnlijk in de installatie. Verbind de hoek connector opnieuw aan de hand van onze YouTube video en probeer het nog een keer. Wil het niet lukken? Neem gerust contact op met een van onze experts.',
          isOpen: false,
        },
        {
          question: 'Hoe bevestig ik een LED-strip?',
          answer: 'Onze Led-strips zijn voorzien van een stevige plakrand aan de achterzijde en zijn op elk gewenst oppervlak te bevestigen. Verwijder simpelweg de rode beschermlaag, kies de juiste plek en druk de strip zachtjes aan. Led-strips kunnen breken wanneer je ze te hard indrukt, dus ga altijd voorzichtig met de strips om!',
          isOpen: false,
        },
        {
          question: 'Hoe sluit ik een LED-strip aan?',
          answer: 'Koppel de adapter aan de wifi controller en verbind deze met de LED-strip. Plaats de adapter in het stopcontact en je bent klaar.',
          isOpen: false,
        },
        {
          question: 'Hoe dim je een LED-strip?',
          answer: 'Je kunt de LED-strip gemakkelijk dimmen met behulp van de Lideka app of de bijgeleverde afstandsbediening.',
          isOpen: false,
        },
        {
          question: 'Kan ik de LED-strip inkorten?',
          answer: 'Dat kan zeker. De strip is voorzien van een kniprand, aangegeven met een schaartje. Snijd de strip precies op de kniprand door om jouw verlichting in te korten.',
          isOpen: false,
        },

        {
          question: 'Mijn strip (dus alleen de strip, daarmee bedoelen we de ledjes) is kapot, wat nu?',
          answer: 'Geen zorgen Lideka®️ lost het op voor je, stuur een foto van jouw strip naar klantenservice@lidekahome.nl , met jouw ordernummer, en dan gaan we het regelen.',
          isOpen: false,
        },
        {
          question: 'Ik mis een onderdeel in de verpakking van mijn led-strip, wat nu?',
          answer: 'Onze oprechte excuus daarvoor, graag een duidelijke mail met het onderdeel dat u mist naar klantenservice@lidekahome.nl + Bestelnummer + adres, en dan gaan we dezelfde of de volgende dag het onderdeel voor u verzenden.',
          isOpen: false,
        },
        {
          question: 'Mijn LED-strip komt net uit de verpakking en doet het niet, wat nu?',
          answer: 'Wat vervelend, mijn oprechte excuses daarvoor, maar geen zorgen we gaan dit direct voor jou oplossen. Het is nu belangrijk dat we exact weten wat er niet werkt, zodat we dit snel en efficiënt kunnen oplossen. Als je niet exact weet wat er niet werkt, dan kun je beter alles retourneren, en direct een nieuwe bestellen, dat is dan de beste en snelste oplossing. Als je het wel weet graag een email sturen en duidelijk vermelden welk onderdeel je nodig hebt + bestelnummer + adres.',
          isOpen: false,
        },
        {
          question: 'Kan ik de led-strips aan elkaar verbinden?',
          answer: 'Dit ‘KAN’ wel, maar dit mogen wij niet aanraden. In 60% van de gevallen gaat het goed, en in 40% van de gevallen niet, je kunt het dus doen, maar dat is op jouw eigen risico.',
          isOpen: false,
        },
        {
          question: 'Verkopen jullie ook verlengkabels?',
          answer: 'Helaas niet… dit doen wij bewust omdat een verlengkabel de kwaliteit, en helderheid van de verlichting aantast.',
          isOpen: false,
        },
        {
          question: 'Hebben jullie een led profiel?',
          answer: 'Helaas niet… we focussen ons puur op de led-strips, echter zijn er genoeg te koop op het internet. We zouden je graag iets aanraden, maar omdat wij deze niet zelf verkopen is dat niet mogelijk. We bieden je daarvoor onze excuus aan.',
          isOpen: false,
        },
        {
          question: 'Mijn LED-strip blijft branden als hij uitstaat, wat nu, en is dit gevaarlijk?',
          answer: 'Maak je je vooral geen zorgen dit is vrij normaal, en we zullen je uitleggen hoe dat komt. Het wordt reststroom genoemd, dat is hetzelfde als wanneer jij je telefoon uit de oplader haalt, en hij dan nog even door blijft branden. Ik adviseer hem even een paar dagen van het stroom te halen als je hem niet gebruikt, en dan moet het opgelost zijn, anders kun je altijd weer contact met ons opnemen.',
          isOpen: false,
        },
        {
          question: 'Is jullie LED-strip ook waterdicht?',
          answer: 'De led-strip zelf is waterdicht, maar de adapter niet, hou daar dus rekening mee.',
          isOpen: false,
        },
        {
          question: 'Zijn er losse onderdelen verkrijgbaar?',
          answer: 'Ja zeker, bekijk onze pagina met accessoires.',
          isOpen: false,
        },
        {
          question: 'Hebben jullie ook connectoren voor de LED-strips?',
          answer: 'Helaas niet, omdat wij alle connectoren uitvoerig hebben getest, en deze vrijwel allemaal problemen opleverde wilden we ze niet in het assortiment brengen. Als je een hoek wilt maken, dan kun je beter simpelweg de LED-strip ‘voorzichtig buigen’, en dan een hoek van 90 graden maken. Zorg wel dat je de strip eerst warm maakt met een föhn',
          isOpen: false,
        },
      ]

    };
  },

  head() {
    return {
      title: safeGet(this.page, 'seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: safeGet(this.page, 'seo.description'),
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: safeGet(this.page, 'seo.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: safeGet(this.page, 'seo.description')
        },
      ]
    }
  },

  async fetch() {
    this.loading = true;
    this.page = await getPage('veelgestelde-vragen');
    this.loading = false;
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  max-height: 100px;
  transition: all .25s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  max-height: 0;
}
</style>
