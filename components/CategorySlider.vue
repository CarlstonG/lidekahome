<template>
  <div>
    <h2
      v-if="title"
      class="text-center text-white max-w-4xl mx-auto font-bold text-3xl uppercase tracking-wide"
    >
      {{ title }}
    </h2>
    <client-only>
      <carousel
        v-bind="options"
        :perPageCustom="[
          [480, 1],
          [768, 1],
          [1022, 5],
        ]"
        :navigation-enabled="true"
        :navigation-prev-label="prevLabel"
        :navigation-next-label="nextLabel"
      >
        <slide class="relative">
          <div
            @mouseover="slideHovered1 = true" @mouseleave="slideHovered1 = false"
            class="default-gradient mx-2 relative h-full lg:pb-20 "
            style="border-radius: 20px"
          >
            <NuxtLink to="/products/rgb-led-light-strip-3-meter-smart-verlichting">
              <div class="p-6">
                <div class="flex items-center flex-col">
                  <h2
                    class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex justify-center items-center z-50"
                  >
                    <span>RGB LED-strips</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h2>
                  <img
                    src="~assets/products/14.png"
                    class="rounded-lg w-full max-w-xs"
                  />
                  <div class="flex space-x-8 items-center justify-center">
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-verified-account-50.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Kwaliteit 100%</span
                      >
                    </div>
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-forest.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Duurzaam</span
                      >
                    </div>
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-shade-selected-faces-50.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Helder</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="md:flex md:justify-center md:items-center w-full left-0 md:absolute bottom-5 z-50"
                >
                  <div class="space-y-4 md:hidden lg:hidden">
                    <p class="text-white font-extralight p-2">
                      Lideka biedt een geweldig assortiment RGB aan, je kunt ze
                      voor enorm veel verschillende doeleinden gebruiken.
                    </p>
                    <p class="text-white font-extralight p-2">
                      De voordelen zijn:
                    </p>
                    <ul
                      class="text-white grid grid-cols-1 gap-4 font-extralight no-list-type py-2"
                    >
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-sm text-gray-300 uppercase font-bold"
                          >Bijzonder veel kleuren</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Makkelijk te installeren</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Zelfklevende strip</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Duurzaam</span
                        >
                      </li>
                    </ul>
                  </div>
                  <button
                    class="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 z-50 rounded-full text-white space-x-4 flex items-center"
                  >
                    <span>Koop nu RGB LED-strips!</span>
                  </button>
                </div>
              </div>
              <div
                v-show="slideHovered1"
                class="bg-black/90 absolute  top-0 w-full h-full z-40 p-6"
              >
                <div class="space-y-4">
                  <h2
                    class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex justify-center items-center"
                  >
                    <span>RGB LED-strips</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h2>
                  <p class="text-white font-extralight p-2">
                    Lideka biedt een geweldig assortiment RGB aan, je kunt ze
                    voor enorm veel verschillende doeleinden gebruiken.
                  </p>
                  <p class="text-white font-extralight p-2">
                    De voordelen zijn:
                  </p>
                  <ul
                    class="text-white grid grid-cols-1 gap-4 font-extralight no-list-type py-2"
                  >
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-sm text-gray-300 uppercase font-bold"
                        >Bijzonder veel kleuren</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Makkelijk te installeren</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Zelfklevende strip</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Duurzaam</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </NuxtLink>
          </div>
        </slide>

        <slide class="relative">
          <div
            @mouseover="slideHovered2 = true"
            @mouseleave="slideHovered2 = false"
            class="default-gradient mx-2 relative h-full lg:pb-20"
            style="border-radius: 20px"
          >
            <NuxtLink to="/products/rgb-ic-led-light-strip-5-meter-smart-verlichting">
              <div class="p-6">
                <div class="flex items-center flex-col">
                  <h2
                    class="text-xl text-white font-bold uppercase tracking-wide space-x-4 flex justify-center items-center z-50"
                  >
                    <span>RGB-IC LED-strips</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h2>
                  <img
                    src="~assets/products/16.png"
                    class="rounded-lg w-full max-w-xs"
                  />
                  <div class="flex space-x-8 items-center justify-center">
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-verified-account-50.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Kwaliteit 100%</span
                      >
                    </div>
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-forest.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Duurzaam</span
                      >
                    </div>
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-shade-selected-faces-50.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Helder</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="md:flex md:justify-center md:items-center w-full left-0 md:absolute bottom-5 z-50"
                >
                  <div class="space-y-4 md:hidden lg:hidden">
                    <p class="text-white font-extralight p-2">
                      Bekijk hier één van de nieuwste rassen, ook wel de genaamd
                      "droomkleur" strip.
                    </p>
                    <p class="text-white font-extralight p-2">
                      De voordelen zijn:
                    </p>
                    <ul
                      class="text-white grid grid-cols-1 gap-4 font-extralight no-list-type py-4"
                    >
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-sm text-gray-300 uppercase font-bold"
                          >De nieuwste kleureffecten</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Zelfklevend</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Scherpe prijs</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Duurzaam</span
                        >
                      </li>
                    </ul>
                  </div>
                  <button
                    class="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 z-50 rounded-full text-white space-x-4 flex items-center"
                  >
                    <span>Koop nu RGB-IC LED-Strips!</span>
                  </button>
                </div>
              </div>
              <div
                v-show="slideHovered2"
                class="bg-black/90 absolute top-0 w-full h-full z-40 p-6"
              >
                <div class="space-y-4">
                  <h2
                    class="text-xl text-white font-bold uppercase tracking-wide space-x-4 flex justify-center items-center"
                  >
                    <span>RGB-IC LED-strips</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h2>
                  <p class="text-white font-extralight p-2">
                    Bekijk hier één van de nieuwste rassen, ook wel de genaamd
                    "droomkleur" strip.
                  </p>
                  <p class="text-white font-extralight p-2">
                    De voordelen zijn:
                  </p>
                  <ul
                    class="text-white grid grid-cols-1 gap-4 font-extralight no-list-type py-4"
                  >
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-sm text-gray-300 uppercase font-bold"
                        >De nieuwste kleureffecten</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Zelfklevend</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Scherpe prijs</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Duurzaam</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </NuxtLink>
          </div>
        </slide>

        <slide class="relative">
          <div
            @mouseover="slideHovered3 = true"
            @mouseleave="slideHovered3 = false"
            class="default-gradient mx-2 relative h-full lg:pb-20"
            style="border-radius: 20px"
          >
            <NuxtLink to="/products/lideka-tv-led-strip-2-meter-usb-rgb-smart-verlichting">
              <div class="p-6">
                <div class="flex items-center flex-col">
                  <h2
                    class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex justify-center items-center z-50"
                  >
                    <span>TV LED-strips</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h2>
                  <img
                    src="~assets/products/5.png"
                    class="rounded-lg w-full max-w-xs"
                  />
                  <div class="flex space-x-8 items-center justify-center">
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-verified-account-50.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Kwaliteit 100%</span
                      >
                    </div>
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-forest.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Duurzaam</span
                      >
                    </div>
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-shade-selected-faces-50.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Helder</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="md:flex md:justify-center md:items-center w-full left-0 md:absolute bottom-5 z-50"
                >
                  <div class="space-y-4 md:hidden lg:hidden">
                    <p class="text-white font-extralight px-2">
                      Hou je gave special effects bij jouw TV of Computer? Deze
                      USB uitvoering is meer dan geschikt. Ook voor een mooie
                      game kamer.
                    </p>
                    <p class="text-white font-extralight px-2">
                      De voordelen zijn:
                    </p>
                    <ul
                      class="text-white grid grid-cols-1 gap-4 font-extralight no-list-type py-2"
                    >
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Extra effecten bij de TV</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Achter de computer</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >In een game kamer</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Achter een bureau</span
                        >
                      </li>
                    </ul>
                  </div>
                  <button
                    class="px-6 py-2 mx-auto mt-4 bg-green-600 hover:bg-green-700 z-50 rounded-full text-white space-x-4 flex items-center"
                  >
                    <span>Koop nu TV LED-Strips!</span>
                  </button>
                </div>
              </div>
              <div
                v-show="slideHovered3"
                class="bg-black/90 absolute top-0 w-full h-full z-40 p-6"
              >
                <div class="space-y-4">
                  <h2
                    class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex justify-center items-center"
                  >
                    <span>TV LED-strips</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h2>
                  <p class="text-white font-extralight px-2">
                    Hou je gave special effects bij jouw TV of Computer? Deze
                    USB uitvoering is meer dan geschikt. Ook voor een mooie game
                    kamer.
                  </p>
                  <p class="text-white font-extralight px-2">
                    De voordelen zijn:
                  </p>
                  <ul
                    class="text-white grid grid-cols-1 gap-4 font-extralight no-list-type py-2"
                  >
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Extra effecten bij de TV</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Achter de computer</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >In een game kamer</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Achter een bureau</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </NuxtLink>
          </div>
        </slide>

        <slide class="relative">
          <div
            @mouseover="slideHovered4 = true"
            @mouseleave="slideHovered4 = false"
            class="default-gradient mx-2 relative h-full lg:pb-20"
            style="border-radius: 20px"
          >
            <NuxtLink to="/products/rgb-led-light-strip-15-meter-tv-strip-3m-combinatie-pakket-1">
              <div class="p-6">
                <div class="flex items-center flex-col">
                  <h2
                    class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex justify-center items-center z-50"
                  >
                    <span>LED pakketten</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h2>
                  <img
                    src="~assets/products/18.png"
                    class="rounded-lg w-full max-w-xs"
                  />
                  <div class="flex space-x-8 items-center justify-center">
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-verified-account-50.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Kwaliteit 100%</span
                      >
                    </div>
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-forest.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Duurzaam</span
                      >
                    </div>
                    <div class="text-center flex flex-col">
                      <div class="flex-grow flex items-center justify-center">
                        <img
                          class="w-10"
                          src="~assets/icon/icons8-shade-selected-faces-50.svg"
                        />
                      </div>
                      <span
                        class="text-white font-bold text-xs tracking-wide uppercase mt-2"
                        >Helder</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="md:flex md:justify-center md:items-center w-full left-0 md:absolute bottom-5 z-50"
                >
                  <div class="space-y-4 md:hidden lg:hidden">
                    <p class="text-white font-extralight p-2">
                      Deze LED pakketten bestaan ​​uit TV en RGB strips. Beide
                      typen bestaan ​​uit complete sets.
                    </p>
                    <p class="text-white font-extralight p-2">
                      De voordelen zijn:
                    </p>
                    <ul
                      class="text-white grid grid-cols-1 gap-4 font-extralight no-list-type py-4"
                    >
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Compleet</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Zelfklevend</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Scherpe prijs</span
                        >
                      </li>
                      <li class="flex items-center space-x-2">
                        <img
                          alt="Checkmark"
                          class="w-6 h-6"
                          src="~assets/icon/icons8-checkmark.svg"
                        /><span
                          class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                          >Duurzaam</span
                        >
                      </li>
                    </ul>
                  </div>
                  <button
                    class="px-6 py-2 mt-4 bg-green-600 hover:bg-green-700 z-50 rounded-full text-white space-x-4 flex items-center"
                  >
                    <span>Ontvang nu LED-pakketten!</span>
                  </button>
                </div>
              </div>
              <div
                v-show="slideHovered4"
                class="bg-black/90 absolute top-0 w-full h-full z-40 p-6"
              >
                <div class="space-y-4">
                  <h2
                    class="text-2xl text-white font-bold uppercase tracking-wide space-x-4 flex justify-center items-center"
                  >
                    <span>LED pakketten</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </h2>
                  <p class="text-white font-extralight p-2">
                    Deze LED pakketten bestaan ​​uit TV en RGB strips. Beide
                    typen bestaan ​​uit complete sets.
                  </p>
                  <p class="text-white font-extralight p-2">
                    De voordelen zijn:
                  </p>
                  <ul
                    class="text-white grid grid-cols-1 gap-4 font-extralight no-list-type py-4"
                  >
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Compleet</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Zelfklevend</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Scherpe prijs</span
                      >
                    </li>
                    <li class="flex items-center space-x-2">
                      <img
                        alt="Checkmark"
                        class="w-6 h-6"
                        src="~assets/icon/icons8-checkmark.svg"
                      /><span
                        class="tracking-wide text-gray-300 text-sm uppercase font-bold"
                        >Duurzaam</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </NuxtLink>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductItem from "~/components/products/ProductItem.vue";
import ProductItemGradient from "~/components/products/ProductItemGradient.vue";

export default Vue.extend({
  components: {
    ProductItem,
    ProductItemGradient,
  },

  props: {
    title: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      slideHovered1: false,
      slideHovered2: false,
      slideHovered3: false,
      slideHovered4: false,
      options: {
        loop: true,
        perPage: 1,
        space: 10,
        slideCount: 1,
        paginationEnabled: false,
      },
      nextLabel:
        '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" style="color: white;" class="bi bi-caret-right" viewBox="0 0 16 16">\n' +
        '<path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>\n' +
        "</svg>",
      prevLabel:
        '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" style="color: white;" class="bi bi-caret-left" viewBox="0 0 16 16">\n' +
        '<path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>\n' +
        "</svg>",
    };
  },
});
</script>
<style>
@media (max-width: 1400px) {
  .VueCarousel-navigation-button {
    /*display: none;*/
  }
}

.VueCarousel-navigation-button.VueCarousel-navigation-next {
  right: 20px !important;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.75);
}

.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  left: 20px !important;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.75);
}

@media (max-width: 800px) {
  .VueCarousel-navigation-button.VueCarousel-navigation-prev {
    left: 30px !important;
  }

  .VueCarousel-navigation-button.VueCarousel-navigation-next {
    right: 30px !important;
  }
}
</style>
