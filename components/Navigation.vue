<template>
  <div>
    <div class="h-40 md:h-32 block">&nbsp;</div>
    <div v-bind:class="!isProductPage() && showAnnouncementBarBelow ? 'bottom-0': 'top-0'" class="md:hidden fixed h-10 z-50 py-2 w-full bg-gradient-to-r from-indigo-400 to-purple-500 ">
            <carousel v-if="isMounted" v-bind="options" >
               <slide class="flex-1 flex justify-center align-middle">
                 <div>
                   <!-- <DeliveryTime class="text-xs leading-6 text-white" /> -->
                   <p class="text-xs leading-6 text-white">Op werkdagen voor 23:30 besteld, volgende werkdag in huis</p>
                 </div>
               </slide>
               <slide class="flex-1 flex justify-center">
                 <div>
                    <p class="text-xs leading-6 text-white">Gratis verzending<span class="hidden lg:inline"> in NL en BE</span></p>
                 </div>
               </slide>
               <slide class="flex-1 flex justify-center">
                 <div>
                   <p class="text-xs leading-6 text-white">60 dagen gratis retourneren<span class="hidden lg:inline"> in NL en BE</span></p>
                 </div>
               </slide>
               <slide class="flex-1 flex justify-center">
                 <div>
                    <a href="https://www.kiyoh.com/reviews/1064733/lideka?from=widget&lang=nl" target="_blank" rel="noopener" class="flex items-center mr-4">
                    <svg v-for="i in 5" class="flex-shrink-0 h-6 w-6 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span class="ml-1 text-gray-200 text-md"><span class="text-gray-200 font-medium">9,5</span> (100+)</span>
                  </a>
                </div>
               </slide>
            </carousel>
          </div>
    <div class="md:fixed absolute right-0 top-10 md:top-0 left-0 z-50 shadow-lg">
      <div class="bg-black border-b border-gray-900 hidden md:block">
        <div class="max-w-7xl mx-auto px-2 md:px-2 py-2">
          <dl class="md:grid md:grid-cols-12">
            <div class="relative flex space-x-4 col-span-9">
              <dt class="flex items-center h-full">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="ml-2 text-xs leading-6 text-gray-400 smaller-text"><DeliveryTime/></p>
                
              </dt>
              <dt class="flex items-center h-full">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="ml-2 text-xs leading-6 text-gray-400">Gratis verzending<span class="hidden lg:inline"> in NL en BE</span></p>
              </dt>
              <dt class="flex items-center h-full">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="ml-2 text-xs leading-6 text-gray-400">60 dagen gratis retourneren<span class="hidden lg:inline"> in NL en BE</span></p>
              </dt>
            </div>

            <div class="relative hidden md:block col-span-3">
              <dt class="flex items-center justify-end h-full">
                <a href="https://www.kiyoh.com/reviews/1064733/lideka?from=widget&lang=nl" target="_blank" rel="noopener" class="hidden lg:flex items-center mr-4">
                  <svg v-for="i in 5" class="flex-shrink-0 h-4 w-4 text-yellow-400"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span class="ml-1 text-gray-400 text-xs flex"><span class="text-gray-200 font-medium mr-1">9,5</span> (100+)</span>
                </a>

                <div class="space-x-3 flex items-center">
                  <a href="https://www.thuiswinkel.org/leden/lidekahome-nl/certificaat/" target="_blank" rel="noopener">
                    <img alt="Thuiswinkel waarborg" class="w-20" src="~/assets/thuiswinkel.svg"/>
                  </a>

                  <a href="https://www.webwinkelkeur.nl/webshop/Lideka-Home_1214064" title="Webwinkel Keurmerk en klantbeoordelingen" target="_blank" rel="noopener">
                    <img src="https://dashboard.webwinkelkeur.nl/banners/76/1214064/1632729812.svg" class="w-20" alt="Webwinkel Keurmerk en klantbeoordelingen" />
                  </a>
                </div>
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div  v-bind:class="customNavClass" class="right-0 md:top-10 left-0 z-40 shadow-lg">
      <nav class="bg-black md:bg-black/75 shadow-lg">
        <div class="max-w-7xl mx-auto px-2 px-2 md:px-2">
          <div class="relative flex items-center justify-between h-20">
            <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
              <!-- Mobile menu button-->
              <button @click.prevent="openSidebar()"
                      type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!--
                  Icon when menu is closed.

                  Heroicon name: outline/menu

                  Menu open: "hidden", Menu closed: "block"
                -->
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <!--
                  Icon when menu is open.

                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden"
                -->
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <NuxtLink to="/">
                  <img class="block lg:hidden h-12 w-auto"
                       src="~/assets/lideka-home.svg" alt="Lideka Home">
                  <img class="hidden lg:block h-8 w-auto"
                       src="~/assets/lideka-home-alt.svg"
                       alt="Lideka Home">
                </NuxtLink>
              </div>
              
          <div class=" hidden md:block w-full mx-auto md:ml-6 py-2 px-8 md:px-2">
            <div class="relative flex items-center justify-between -ml-2">
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-grow">
                  <div class="flex space-x-2 min-h-10 relative">
<!--                    <NuxtLink prefetch v-for="collection in collections" :to="`/categorie/${collection.handle}`"-->
<!--                              :key="collection.handle"-->
<!--                              class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">-->
<!--                      {{ collection.title }}-->
<!--                    </NuxtLink>-->

                    <div class="navigation-menu">
                      <div>
                        <button type="button" @click.prevent="goTo('/categorie/led-strips')" class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex space-x-1 items-center">
                          <span>LED-strips</span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div class="navigation-dropdown main-navigation-dropdown origin-top-center absolute top-9  left-0 w-[50vw] right-0 rounded-bl-md shadow-md rounded-tr-md rounded-br-md shadow-lg py-1 bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 py-6">
                          <div>
                            <header class="font-bold text-sm px-4 py-2 tracking-wide uppercase text-uppercase">LED-strips</header>
                            <NuxtLink to="/categorie/led-strips" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-0">Alle LED-strips</NuxtLink>
                            <NuxtLink to="/products/lideka-tv-led-strip-2-meter-usb-rgb-smart-verlichting" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-1">TV LED-strips</NuxtLink>
                            <NuxtLink to="/products/rgb-led-light-strip-3-meter-smart-verlichting" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-2">RGB LED-strips</NuxtLink>
                            <NuxtLink to="/products/rgb-ic-led-light-strip-5-meter-smart-verlichting" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-3">RGB-IC LED-strips</NuxtLink>
                            <NuxtLink to="/products/rgb-led-light-strip-15-meter-tv-strip-3m-combinatie-pakket-1" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-4">LED pakketten</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-met-afstandsbediening" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-4">Met afstandsbediening</NuxtLink>
                            <NuxtLink to="/categorie/led-strips-dimbaar" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-5">Dimbare LED-strips</NuxtLink>
                          </div>
                          <div>
                            <header class="font-bold text-sm px-4 py-2 tracking-wide uppercase text-uppercase">LED-strip toepassingen</header>
                            <NuxtLink to="/categorie/led-strip-woonkamer" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-0">Woonkamer</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-slaapkamer" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-1">Slaapkamer</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-keuken" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-2">Keuken</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-gamekamer" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-3">Game kamer</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-badkamer" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-4">Badkamer</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-plafond" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-4">Plafond</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-bed" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-4">Bed</NuxtLink>
                            <NuxtLink to="/categorie/led-strips" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-4">Overige</NuxtLink>
                          </div>
                          <div>
                            <header class="font-bold text-sm px-4 py-2 tracking-wide uppercase text-uppercase">LED-strip meters</header>
                            <NuxtLink to="/categorie/led-strip-2-meter" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-0">2 meter</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-3-meter" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-1">3 meter</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-5-meter" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-2">5 meter</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-10-meter" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-3">10 meter</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-15-meter" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-4">15 meter</NuxtLink>
                            <NuxtLink to="/categorie/led-strip-20-meter" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md" role="menuitem" tabindex="-1" id="user-menu-item-5">20 meter</NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>

                    <NuxtLink prefetch
                              to="/categorie/solar-powerbank"
                              class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Solar powerbank
                    </NuxtLink>



                    <NuxtLink prefetch
                              to="/categorie/accessoires"
                              class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Accessoires
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
              </div>
              
              <div class="hidden w-full md:block md:w-full lg:w-full md:ml-6 px-2 py-1">
                <Search/>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto sm:ml-6 sm:pr-0">
              <NuxtLink v-if="loggedIn" to="/account/myaccount"
                        class="bg-transparent p-1 flex justify-center items-center rounded-full text-gray-400 hover:text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span class="text-sm ml-2 hidden md:block">{{ customer.firstName }}</span>
              </NuxtLink>
              <a v-else
                 :href="`${shopifyCheckoutDomain}/account`"
                 class="bg-transparent p-1 flex justify-center items-center rounded-full text-gray-400 hover:text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span class="hidden md:block text-sm ml-2">Inloggen</span>
              </a>

              <NuxtLink to="/winkelwagen"
                        class="bg-transparent relative flex justify-center items-center p-1 ml-3 rounded-full text-gray-400 hover:text-white focus:outline-none">

                      <span v-show="count > 0" style="top: -5px; left: 20px;"
                            class="absolute w-5 h-5 rounded-full bg-white text-xs text-black flex items-center justify-center"
                            data-cart-count>{{ count }}</span>

                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span class="hidden md:block text-sm ml-2">Winkelwagen</span>
              </NuxtLink>

              <NuxtLink to="/wishlist"
                        class="bg-transparent relative flex justify-center items-center bg-black p-1 ml-3 rounded-full text-gray-400 hover:text-white focus:outline-none">

                      <span v-show="favoriteCount > 0" style="top: -5px; left: 20px;"
                            class="absolute w-5 h-5 rounded-full bg-white text-xs text-black flex items-center justify-center"
                            data-cart-count>{{ favoriteCount }}</span>

                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </NuxtLink>
            </div>
          </div>
        </div>



        <div class="md:hidden absolute bg-black md:bg-black/75 z-10 left-0 right-0" id="mobile-menu">
          <div class="px-2 pb-2">
            <Search id="search-mobile"/>
          </div>
        </div>
      </nav>
    </div>
    <transition name="fade">
      <Sidebar v-if="sidebarIsOpen" @closeSidebar="closeSidebar()" :collections="collections"/>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from "vuex";
import Search from "~/components/Search.vue";
import Sidebar from "~/components/navigation/Sidebar.vue";
import DeliveryTime from '~/components/DeliveryTime.vue';

export default Vue.extend({
  components: {
    Sidebar,
    Search,
    DeliveryTime,
  },

  props: {
    collections: {
      type: [],
      required: true,
    }
  },

  data() {
    return {
      options: {
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        perPage: 1,
        space: 10,
        slideCount: 1,
        paginationEnabled: false,
        navigationEnabled: false,
      },
      sidebarIsOpen: false,
      isMounted: false,
      showAnnouncementBarBelow: false,
      customNavClass:"absolute top-10",
    };
  },

  methods: {
    closeSidebar() {
      this.sidebarIsOpen = false;
    },

    openSidebar() {
      this.sidebarIsOpen = true;
    },

    goTo(location: string) {
      this.$router.push(location);
    },
    isProductPage() {
      return this.$route.path.includes("/products/");
    },
    stickyNavClass(){
      if(this.isProductPage()) return 'absolute top-10';

      if(this.showAnnouncementBarBelow){
        return "fixed top-0";
      }
      return "fixed top-10";
    },
    isPageScrolled(){
      this.showAnnouncementBarBelow = window.scrollY > 100;
      this.customNavClass = this.stickyNavClass();
    },
  },

  computed: {
    shopifyCheckoutDomain() {
      return `https://${process.env.shopifyCheckoutDomain}`
    },

    ...mapGetters('shop/cart', [
      'count'
    ]),

    ...mapGetters('shop/wishlist', [
      'favoriteCount'
    ]),

    ...mapGetters('shop/customer', [
      'customer',
      'loggedIn'
    ]),

    
  },
  mounted(){
    this.isMounted = true;
    this.isPageScrolled();
    window.addEventListener("scroll", this.isPageScrolled);
  }
});
</script>

<style lang="scss">


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out, transform .25s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
  transform: translateX(-500px);
}

.navigation-menu {
  .navigation-dropdown {
    visibility: hidden;
    opacity: 0;
    //transform: scale(0.9);
    transition: all 0.3s ease-in-out;
  }

  .main-navigation-dropdown {
    visibility: hidden;
    opacity: 0;
    //transform: scale(0.9);
    transition: all 0.3s ease-in-out;
  }

  button {
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out, border-radius 1s ease-in-out;
  }

  &:hover {
    button {
      background: #fff !important;
      color: #000 !important;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .navigation-dropdown, .main-navigation-dropdown {
      //transform: scale(1);
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
