<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="border-t bg-black border-b border-gray-900">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <dl class="md:grid md:grid-cols-3">
          <div class="relative hidden md:block">
            <dt class="flex justify-center items-center">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <DeliveryTime class="ml-2 text-xs leading-6 font-medium text-gray-400" />
            </dt>
          </div>

          <div class="relative hidden md:block">
            <dt class="flex justify-center items-center">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p class="ml-2 text-xs leading-6 font-medium text-gray-400">Gratis verzending in NL en BE</p>
            </dt>
          </div>

          <div class="relative hidden md:block">
            <dt class="flex justify-center items-center">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p class="ml-2 text-xs leading-6 font-medium text-gray-400">60 dagen gratis retourneren in NL en BE</p>
            </dt>
          </div>
        </dl>
      </div>
    </div>


    <footer class="bg-black" aria-labelledby="footerHeading">
      <h2 id="footerHeading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Pagina's
            </h3>
            <ul class="mt-4 space-y-2">
              <li>
                <a href="https://klantenservice.lidekahome.nl/nl-NL" target="_blank" rel="noopener" class="text-sm text-gray-300 hover:text-white">
                  Help center
                </a>
              </li>

              <li>
                <NuxtLink to="/over-ons" class="text-sm text-gray-300 hover:text-white">
                  Over ons
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/blog" class="text-sm text-gray-300 hover:text-white">
                  Blog
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/partners" class="text-sm text-gray-300 hover:text-white">
                  Partners
                </NuxtLink>
              </li>

              <li>
                <a href="https://klantenservice.lidekahome.nl/nl-NL/articles/algemene-voorwaarden-5283" target="_blank" class="text-sm text-gray-300 hover:text-white">
                  Algemene voorwaarden
                </a>
              </li>
              <li>
                <a href="https://klantenservice.lidekahome.nl/nl-NL/retourneren-22835" target="_blank" class="text-sm text-gray-300 hover:text-white">
                  Retourneren
                </a>
              </li>

              <li>
                <NuxtLink to="/sitemap" class="text-sm text-gray-300 hover:text-white">
                  Sitemap
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Klantenservice
            </h3>
            <ul class="space-y-2 mt-4">
              <li class="text-gray-300">
                <a href="mailto:klantenservice@lidekahome.nl" class="flex text-sm">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="https://klantenservice.lidekahome.nl/nl-NL" target="_blank" rel="noopener" class="text-sm text-gray-300 hover:text-white">
                    Neem contact op
                  </a>
                </a>
              </li>
              <li class="text-gray-300">
                <a href="tel:+31 (0)85 - 06 01 297" class="flex text-sm">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +31 (0)85 - 06 01 297
                </a>
              </li>
              <li class="text-gray-300 flex text-sm">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Koningsdreef 9<br/>3261 NJ Oud-beijerland
              </li>
              <li class="text-gray-300 text-sm">
                <a href="https://klantenservice.lidekahome.nl/nl-NL" class="flex">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                  Contact opnemen
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-8">
          <div class="mb-4 flex space-x-6">
            <a href="https://www.thuiswinkel.org/leden/lidekahome-nl/certificaat/" target="_blank" rel="noopener">
              <img loading="lazy" class="w-40" alt="Thuiswinkel" src="~/assets/thuiswinkel.svg" />
            </a>

            <a href="https://www.webwinkelkeur.nl/webshop/Lideka-Home_1214064" title="Webwinkel Keurmerk en klantbeoordelingen" target="_blank" rel="noopener">
              <img loading="lazy" src="https://dashboard.webwinkelkeur.nl/banners/76/1214064/1632729812.svg" class="w-40" alt="Webwinkel Keurmerk en klantbeoordelingen" />
            </a>
          </div>

          <p class="text-gray-500 text-sm">
            - Alle prijzen op deze website zijn inclusief 21% BTW.
          </p>
          <p class="text-gray-500 text-sm mt-4">
            - Voor alle artikelen die je bij ons koopt, geldt de wettelijke garantie. Wettelijke garantie wil zeggen dat
            een product datgene is of moet doen wat de consument er in alle redelijkheid van mag verwachten. Voor
            sommige
            producten geldt ook een fabrieksgarantie. Deze garantie doet niets af aan de wettelijke garantie.
          </p>
          <div class="flex mt-4 items-center">
            <span class="text-gray-500 text-sm mr-2 mb-2">Veilig betalen: </span>
            <PaymentMethodes />
          </div>
        </div>

        <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div class="flex space-x-6 md:order-2">
            <a href="https://www.facebook.com/lidekahome" target="_blank" rel="noopener" class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/lidekahome.nl/" target="_blank" rel="noopener"
               class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/company/lideka" target="_blank" rel="noopener"
               class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">LinkedIn</span>
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>

            <a href="https://www.youtube.com/channel/UCM6KUMoinLVJZUIOx3Mm2Tw" target="_blank" rel="noopener"
               class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">YouTube</span>
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>

            <a href="https://pin.it/7w89n1e" target="_blank" rel="noopener"
               class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">Pinterest</span>
              <svg role="img" class="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Pinterest</title>
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
              </svg>
            </a>
          </div>
          <p class="mt-8 text-sm text-gray-400 md:mt-0 md:order-1">
            &copy; 2022 Lideka Home - All rights reserved.
          </p>
        </div>
        <p class="mt-8 text-xs text-gray-400 md:mt-0 md:order-1">
          Website by <a href="https://rocksolid.dev" rel="noopener" target="_blank">Rocksolid Development</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import PaymentMethodes from "~/components/PaymentMethodes";
import Newsletter from "~/components/Newsletter";
import DeliveryTime from '~/components/DeliveryTime.vue';

export default {
  components: {
    PaymentMethodes,
    Newsletter,
    DeliveryTime,
  },
}
</script>
