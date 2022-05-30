<template>
  <div class="bg-white">
    <div v-if="!product || !product.title">
      <div
        class="max-w-7xl mx-auto pb-20 pt-6 md:pt-10 relative"
        style="min-height: 500px"
      >
        <Loading v-show="loading" />
        <NotFound v-if="!loading" />
      </div>
    </div>
    <div v-else>
      <div
        v-show="showFixedOrderBar"
        class="fixed-order-bar fixed z-40 md:bottom-auto bottom-0 w-full bg-white border-b border-gray-200 "
      >
        <div
          class="max-w-7xl mx-auto py-3 flex flex-col md:flex-row items-start justify-center md:justify-end"
        >
          <dl v-if="product.deliveryDate" class="relative mr-6">
            <dt class="block md:flex items-center">
              <div
                class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500"
              >
                uit voorraad
              </div>
              <p
                class="block text-green-500 ml-2 text-sm leading-6 font-medium"
              >
                {{ deliveryDate }}
              </p>
            </dt>
          </dl>
          <dl v-else class="relative -mt-6 md:mt-auto ml-2">
            <dt class="block md:flex items-center">
              <div
                class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-2 md:px-4 py-1 text-xs text-green-500 bg-white"
              >
                op voorraad
              </div>
              <DeliveryTime
                class="block text-green-500 mx-2 text-sm leading-6 font-medium"
              />
            </dt>
          </dl>

          <div
            class="flex flex-row w-full justify-evenly md:justify-end md:w-auto"
          >
            <button
              @click.prevent="addToCart(product.firstVariantId, quantity)"
              type="submit"
              name="add"
              class="w-11/12 md:w-56 relative flex items-center justify-center p-2 border border-transparent rounded-full cta-shadow text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <svg
                class="w-5 h-5 -mt-1 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              {{ product.isPreOrder ? "Pre-order" : "In winkelmandje" }}
            </button>
          </div>
        </div>
      </div>
      <Breadcrumbs
        class="hidden md:block"
        :path="[
          { title: product.collection.title, path: product.collection.url },
        ]"
        :title="product.title"
      />
      <div class="max-w-7xl mx-auto pb-2 pt-6 md:pt-10">
        <div class="grid grid-cols-1 md:grid-cols-12 mx-6 lg:mx-0 relative">
          <div class="px-0 md:px-6 mb-8 md:mb-0 col-span-1 md:col-span-6">
            <div
              v-if="isMounted"
              style="--swiper-navigation-color: #2563eb; --swiper-pagination-color: #2563eb; --swiper-navigation-size: 40px"
              class="swiper-container mySwiper2 mb-2"
            >
              <div class="swiper-wrapper items-center">
                <div
                  v-for="media in product.media"
                  class="swiper-slide flex cursor-pointer justify-center items-center h-full w-full rounded-lg"
                >
                  <a
                    v-if="media.type === 'IMAGE'"
                    data-fancybox="gallery"
                    :data-src="`${media.src}`"
                  >
                    <img
                      class="rounded-lg swiper-lazy"
                      loading="lazy"
                      width="800px"
                      height="800px"
                      :src="media.src"
                      :alt="media.alt"
                    />
                    <div class="swiper-lazy-preloader"></div>
                  </a>
                  <a
                    v-if="media.type === 'VIDEO'"
                    data-fancybox="gallery"
                    data-type="video"
                    :data-src="
                      `${media.sources[Object.keys(media.sources)[1]].url}`
                    "
                  >
                    <video
                      width="100%"
                      height="480px"
                      controls
                      playsinline
                      autoplay
                      muted
                      :poster="media.preview"
                      class="rounded-lg border-5 border-color-black shadow-lg"
                    >
                      <source
                        v-for="source in media.sources"
                        :src="source.url"
                        :type="source.mimeType"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
            <div
              thumbsSlider
              class="swiper-container mySwiper"
              style="--swiper-navigation-color: #2563eb; --swiper-pagination-color: #2563eb; --swiper-navigation-size: 24px"
            >
              <div class="swiper-wrapper items-center relative">
                <div
                  v-for="media in product.media"
                  class="swiper-slide flex cursor-pointer justify-center items-center h-20 w-20 rounded-lg bg-center bg-cover"
                >
                  <img
                    class="rounded-lg swiper-lazy"
                    loading="lazy"
                    width="100px"
                    height="100px"
                    :src="media.preview"
                    :alt="media.alt"
                  />
                  <div class="swiper-lazy-preloader"></div>
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
            <div
              v-show="!isSolarPage"
              class="flex flex-col justify-center pt-4 pb-2 items-center"
            >
              <h2
                class="text-md font-bold uppercase text-center py-2 text-gray-500 w-full"
              >
                Wat maakt Lideka uniek?
              </h2>
              <div class="border-b-2 border-gray-300  w-6/12" />
            </div>

            <SellingIconPoints v-show="!isSolarPage" :slug="slug" />
          </div>
          <div class="lg:px-4 col-span-1 md:col-span-6">
            <h1 class="font-extrabold text-4xl">
              {{ product.title }}
              <button
                @click="addToWishlist"
                :title="
                  isInWishlist
                    ? 'Verwijder uit verlanglijstje'
                    : 'Voeg toe aan verlanglijstje'
                "
              >
                <svg
                  class="w-6 h-6"
                  :class="{ 'text-red-600': isInWishlist }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </h1>

            <a
              href="#reviews"
              v-if="product.stars > 0"
              class="flex items-center mt-2"
            >
              <svg
                v-for="star in product.stars"
                :key="star"
                class="flex-shrink-0 h-6 w-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="ml-2 text-sm text-blue-800"
                >({{ finalStars }}/5)</span
              >
              <span class="ml-2 text-sm text-blue-800"
                >({{ product.totalReviews }} reviews)</span
              >
            </a>
            <h2
              v-if="isSolarPage"
              class="text-xl mt1 mb-2 italic font-bold gradient-text"
            >
              10,000+ tevreden klanten!
            </h2>
            <h2 v-else class="text-base mt1 mb-2 font-bold gradient-text">
              Meer dan 10,000+ kleurrijke klanten!
            </h2>
            <div class="flex"></div>
            <div class="flex mb-2 mt-2 items-end ">
              <h2
                v-if="product.price"
                class="text-2xl inline-block font-bold text-red-500 rounded-md"
              >
                <del
                  v-if="product.priceCompare"
                  class="text-xl text-gray-600 mr-2"
                  >{{ formatMoney(product.priceCompare) }}</del
                >
                <span class="ml-2">{{ formatMoney(product.price) }}</span>
                <span class="text-xl mr-2">EUR</span>
              </h2>
              <div>
                <div v-if="product.priceCompare" class="flex">
                  <div class="text-sm ml-2 text-gray-600 font-bold mb-1 px-2">
                    {{ savePercentage(product.priceCompare, product.price) }}
                  </div>
                </div>
              </div>
            </div>
            <div v-if="product.related">
              <span class="text-sm text-gray-500">Kies aantal meters:</span>
              <div class="pb-4 mt-1 flex flex-row items-start">
                <div
                  v-for="related in product.related"
                  :key="related.id"
                  class="flex flex-col mx-1 mb-1"
                >
                  <NuxtLink
                    :to="`/products/${related.handle}`"
                    :class="
                      !related.selected
                        ? 'py-1 text-sm px-4 inline-block bg-white border border-gray-500 transition-opacity hover:opacity-50 rounded-md mb-1'
                        : 'py-1 px-4 text-sm inline-block bg-indigo-400 text-white border border-indigo-400\n' +
                          '            rounded-md mb-1'
                    "
                  >
                    {{ related.name }}
                  </NuxtLink>
                  <span
                    v-show="related.popular"
                    class="text-xs text-center uppercase font-bold text-red-500"
                    >Populair</span
                  >
                </div>
              </div>
            </div>

            <div v-if="product.families.length > 0">
              <span class="text-sm text-gray-500">Kies je soort:</span>
              <div class="flex space-x-4 pb-4 mt-1">
                <NuxtLink
                  v-for="item in product.families"
                  :key="item.handle"
                  :to="`/products/${item.handle}`"
                  :title="item.name"
                  class="bg-white border rounded-md overflow-hidden p-0.5"
                  :class="
                    item.selected
                      ? 'border-indigo-400'
                      : 'border-gray-500 transition-opacity hover:opacity-50'
                  "
                >
                  <img
                    v-if="item.picture.length > 0"
                    :src="item.picture[0].src"
                    :alt="item.name"
                    class="w-20 h-20"
                  />
                </NuxtLink>
              </div>
            </div>

            <dl v-if="product.deliveryDate" class="relative pb-4">
              <dt class="block md:flex items-center">
                <div
                  class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500"
                >
                  uit voorraad
                </div>
                <p
                  class="block text-green-500 ml-2 text-sm leading-6 font-medium"
                >
                  {{ deliveryDate }}
                </p>
              </dt>
            </dl>
            <dl v-else class="relative pb-4">
              <dt class="block md:flex items-center">
                <div
                  class="inline-block border-2 border-green-500 rounded-md uppercase font-bold px-4 py-1 text-xs text-green-500"
                >
                  op voorraad
                </div>
                <DeliveryTime
                  class="block text-green-500 ml-2 text-sm leading-6 font-medium"
                />
              </dt>
            </dl>

            <div class="md:flex items-center">
              <!-- if available -->
              <div class="md:mr-2 mb-2 md:mb-0">
                <select
                  id="Quantity"
                  name="quantity"
                  v-model="quantity"
                  class="focus:ring-blue-500 px-5 py-3 border focus:border-blue-500 relative block w-full rounded-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                >
                  <option selected>1</option>
                  <option v-for="index in 20" :value="index + 1">{{
                    index + 1
                  }}</option>
                </select>
              </div>

              <button
                @click.prevent="addToCart(product.firstVariantId, quantity)"
                ref="addToCartButton"
                type="submit"
                name="add"
                id="AddToCart"
                class="w-52 relative flex items-center justify-center py-2 border border-transparent rounded-full cta-shadow text-md font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ml-2"
              >
                <svg
                  class="w-5 h-5 -mt-1 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>

                {{ product.isPreOrder ? "Pre-order" : "In winkelmandje" }}
              </button>

              <OneClickCheckout
                v-if="!deliveryDate"
                :product="product"
                :direct-to-checkout="true"
                class="mt-2 md:mt-0 md:ml-2 one-click-checkout-link"
              />
            </div>

            <p class="text-sm text-gray-500 mt-2">
              Betaal in 4 termijnen met Klarna
            </p>

            <div
              class="flex flex-col justify-center pt-4 pb-2 items-center md:items-start"
            >
              <h2
                class="text-md font-bold uppercase text-center md:text-left py-2 text-gray-500 w-full"
              >
                Wij garanderen u een veilige checkout
              </h2>
              <div class="border-b-2 border-gray-300 w-7/12" />
              <img
                src="~/assets/icons/trust-badge.png"
                class="md:w-7/12 mt-2"
              />
            </div>

            <NuxtLink
              to="/contact"
              class="text-sm text-gray-500 inline-flex mt-2 hover:text-gray-700"
            >
              Zakelijke aankoop nodig? Contacteer sales
              <svg
                class="h-5 w-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </NuxtLink>

            <div
              v-show="isSolarPage"
              class="flex flex-col justify-center pt-4 pb-2 items-center md:items-start"
            >
              <h2
                class="text-md font-bold uppercase text-center md:text-left py-2 text-gray-500 w-full"
              >
                Wat maakt Lideka uniek?
              </h2>
              <div class="border-b-2 border-gray-300  w-4/12" />
            </div>
            <SellingIconPoints
              v-show="isSolarPage"
              :slug="slug"
              class="md:w-3/4 ml-0 md:-ml-4"
            />
            <div
              v-if="
                product.title.includes('led') ||
                  product.title.includes('Led') ||
                  product.title.includes('LED')
              "
            >
              <VideoReviewsSmall />
            </div>
          </div>
        </div>
      </div>

      <div
        ref="ledMappedTicker"
        class="w-full mx-auto p-8 my-4 animated-bg flex flex-col md:flex-row items-center"
      >
        <div class="w-auto md:max-w-7xl mx-auto">
          <img
            v-if="!isSolarPage"
            src="~/assets/products/customer_satisfaction_led.png"
            class="rounded-xl"
          />
          <img
            v-if="isSolarPage"
            src="~/assets/products/customer_satisfaction_solar.png"
            class="rounded-xl"
          />
          <div class="relative md:bottom-40 md:h-0  md:px-6 shadow-text">
            <div class="text-white flex flex-col md:flex-row justify-start ">
              <img src="~/assets/icons/WEBicons-01.png" class="h-auto hidden md:block w-1/6" />
              <div class="flex flex-col items-start justify-center w-full md:w-4/6 my-2 md:my-0">
                <h2 class="font-bold text-xl md:text-3xl">100% tevredenheidsgarantie</h2>
                <p class="text-sm md:text-md">
                  Wij staan volledig achter de kwaliteit van onze producten en
                  bieden jou een onvoorwaardelijke garantie van 24 maanden.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center mt-4 md:mt-0">
          <img src="~/assets/lideka-white.png" class="mx-auto w-3/4 md:w-2/4" />
          <h2 class="text-xl font-bold text-white text-center uppercase mt-6">
            {{isSolarPage ? 'Meer dan' : ''}}
          </h2>
          <h2
            class="text-8xl font-bold text-white mt-4"
            v-html="ledMappedFinal"
          ></h2>
          <h2 class="text-xl font-bold text-white text-center uppercase mt-6">
            {{isSolarPage ? 'tevreden klanten' : 'versierde huizen'}}
          </h2>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-0 pb-10 pt-6">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="px-0 md:px-6 mb-6 ">
            <div v-if="productDescription">
              <h2 class="font-extrabold text-3xl mb-4">Productbeschrijving</h2>
              <div class="relative">
                <div
                  class="product-des"
                  v-bind:class="{ fadeHidden: !expandProductDescription }"
                  v-html="productDescription"
                ></div>
                <div
                  v-show="!expandProductDescription"
                  class="w-full flex justify-center absolute bottom-6 z-10 left-0 right-0"
                >
                  <button
                    @click.prevent="expandProductDescription = true"
                    type="button"
                    class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Toon meer
                  </button>
                </div>
              </div>
            </div>

            <div
              v-if="!isSolarPage"
              class="flex flex-col justify-center items-center my-4 pt-4 pb-2"
            >
              <h2
                class="text-xl font-bold uppercase text-gray-500 text-center w-full"
              >
                Hoe LED-strips te installeren
              </h2>
              <div class="border-b-2 border-gray-300 mt-2 w-6/12" />
              <img
                src="~/assets/products/how_to_use.webp"
                class="md:w-9/12 mt-4 rounded-2xl"
              />
            </div>

            <div v-if="product.specifications">
              <h2 class="font-extrabold text-3xl mb-4">Specificaties</h2>
              <div class="relative">
                <div
                  class="product-specs"
                  v-bind:class="{ fadeHidden: !expandSpecifications }"
                  v-html="cleanSpecifications"
                ></div>
                <div
                  v-show="!expandSpecifications"
                  class="w-full flex justify-center absolute bottom-6 z-10 left-0 right-0"
                >
                  <button
                    @click.prevent="expandSpecifications = true"
                    type="button"
                    class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Toon meer
                  </button>
                </div>
              </div>
            </div>

            <div
              v-if="product.downloads.manual || product.downloads.brochure"
              class="mb-6"
            >
              <h2 class="font-extrabold text-3xl mb-4">Downloads</h2>
              <div class="divide-y">
                <a
                  v-if="product.downloads.brochure"
                  :href="product.downloads.brochure"
                  target="_blank"
                  rel="noopener"
                  class="block py-2 text-gray-900 hover:text-gray-700 flex items-center"
                >
                  <svg
                    class="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>

                  Brochure
                </a>
                <a
                  v-if="product.downloads.manual"
                  :href="product.downloads.manual"
                  target="_blank"
                  rel="noopener"
                  class="block py-2 text-gray-900 hover:text-gray-700 flex items-center"
                >
                  <svg
                    class="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>

                  Handleiding
                </a>
              </div>
            </div>

            <div v-if="product.faq.length > 0">
              <h2 class="font-extrabold text-3xl mb-4">Veelgestelde vragen</h2>
              <div class="space-y-2">
                <div
                  v-for="(item, index) in product.faq"
                  :key="`faq-${index}`"
                  class="border border-gray-200 rounded"
                >
                  <button
                    class="p-2 text-md font-bold text-gray-900 hover:bg-gray-100 block w-full flex items-center justify-between"
                    :class="{
                      'border-b border-gray-200': openFaqItems.includes(index),
                    }"
                    @click="toggleFaqItem(index)"
                  >
                    {{ item.question }}

                    <svg
                      class="w-6 h-6 text-gray-600"
                      :class="
                        openFaqItems.includes(index)
                          ? 'transform rotate-180'
                          : ''
                      "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 15l7-7 7 7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    v-if="openFaqItems.includes(index)"
                    class="text-sm text-gray-600 p-2"
                  >
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="product" class="px-0 md:px-6 mb-6" id="reviews">
            <Reviews
              v-if="reviews.reviews"
              :product="product"
              :reviews="reviews.reviews"
              :ldata="reviews.ldata"
            />
          </div>
        </div>
      </div>

      <div
        v-show="!isSolarPage"
        class="max-w-7xl mx-auto px-6 lg:px-0 pb-10 pt-6"
      >
        <img src="~/assets/happy_customers.png" class="mx-auto rounded-xl" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "~/components/products/ProductItem.vue";
import Vue from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import Loading from "~/components/Loading";
import { mapActions, mapGetters } from "vuex";
import SellingPoints from "~/components/SellingPoints";
import SellingIconPoints from "~/components/SellingIconPoints";
import { safeGet } from "~/services/Helpers";
import NotFound from "~/components/NotFound";
import Breadcrumbs from "../../components/Breadcrumbs";
import "@fancyapps/ui/dist/fancybox.css";
import _ from "lodash";
import { getProduct, getReviews } from "../../services/ApiService";
import {
  formatMoney,
  savePercentage,
  getRatingStars,
  pricePerMeter,
  addCustomerImages,
  handleMostPopularBadge,
} from "../../services/Helpers";
import Reviews from "../../components/reviews/Reviews";
import Stars from "../../components/reviews/Stars";
import VideoReviewsSmall from "../../components/VideoReviewsSmall";
import DeliveryTime from "~/components/DeliveryTime.vue";
import OneClickCheckout from "~/components/cart/OnClickCheckout.vue";
import CenterTitle from "~/components/blocks/CenterTitle.vue";
import Benefits from "~/components/blocks/Benefits.vue";
import BenefitsThreeCols from "~/components/blocks/BenefitsThreeCols.vue";

export default Vue.extend({
  components: {
    Stars,
    Reviews,
    Breadcrumbs,
    NotFound,
    SellingPoints,
    SellingIconPoints,
    Loading,
    ProductItem,
    VideoReviewsSmall,
    DeliveryTime,
    OneClickCheckout,
    BenefitsThreeCols,
    Benefits,
    CenterTitle,
  },

  head() {
    const head = {
      title:
        safeGet(this.product, "seo.title") ?? safeGet(this.product, "title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: safeGet(this.product, "seo.description"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: safeGet(this.product, "seo.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: safeGet(this.product, "seo.description"),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: safeGet(this.product, "product.altMediaSrc"),
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: safeGet(this.product, "product.title"),
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "product",
        },
      ],
      link: [],
    };

    if (safeGet(this.product, "canonicalUrls", [])) {
      const urls = safeGet(this.product, "canonicalUrls", []);

      for (const url of urls) {
        head.link.push({
          rel: "canonical",
          href: url,
        });
      }
    }

    return head;
  },

  computed: {
    ...mapGetters("shop/wishlist", ["favoriteProducts"]),

    isInWishlist() {
      return this.favoriteProducts.some((p) => p.slug === this.slug);
    },

    productDescription() {
      return this.product.description;
    },

    cleanSpecifications() {
      if (!this.product.specifications) {
        return null;
      }

      return this.product.specifications.replace(/style="[^"]*"/gm, "");
    },

    deliveryDate() {
      if (!this.product.deliveryDate) {
        return null;
      }

      try {
        return JSON.parse(this.product.deliveryDate)[0];
      } catch (e) {
        return this.product.deliveryDate;
      }
    },
    isSolarPage() {
      const slugs = [
        "solar-charger-2400-mah-5v-346-5-g",
        "solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge",
      ];
      return slugs.includes(this.slug);
    },
  },

  jsonld() {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Product",
        sku: safeGet(this.product, "sku"),
        name: safeGet(this.product, "title"),
        brand: {
          "@type": "Organization",
          name: safeGet(this.product, "brand"),
        },
        description: safeGet(this.product, "description"),
        image: safeGet(this.product, "altMediaSrc"),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: safeGet(this.product, "stars", 0),
          bestRating: "5",
          ratingCount: safeGet(this.product, "totalReviews", 0),
        },
      },
      ...safeGet(this.reviews, "ldata", {}),
    ];
  },

  data() {
    return {
      formatMoney,
      savePercentage,
      finalStars: 0,
      pricePerMeter,
      showLightbox: false,
      loading: false,
      product: {},
      slug: null,
      quantity: 1,
      productImages: [],
      expandProductDescription: false,
      expandSpecifications: false,
      showFixedOrderBar: false,
      openFaqItems: [],
      ledMappedFinal: "0",
      tickerDone: false,
      isMounted: false,
    };
  },

  methods: {
    ...mapActions("shop/cart", ["addLine"]),

    ...mapActions("shop/products", ["addProductToRecentlyVisited"]),

    ...mapActions("shop/wishlist", ["addItem", "deleteItem"]),

    toggleFaqItem(index) {
      this.openFaqItems.includes(index)
        ? this.openFaqItems.splice(this.openFaqItems.indexOf(index), 1)
        : this.openFaqItems.push(index);
    },

    async addToCart(variantId, quantity = 1) {
      this.$nuxt.$loading.start();
      await this.addLine({
        variantId: variantId,
        quantity: quantity,
      });

      window._learnq = window._learnq || [];
      window._learnq.push(["track", "Added to Cart", this.product]);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "AddToCart",
        ecommerce: {
          items: [
            {
              ...this.product,
              quantity,
            },
          ],
        },
      });

      //@ts-ignore
      this.$root.$emit("productAddedToCart", this.product, quantity);

      this.product = await getProduct(this.slug);
      this.$nuxt.$loading.finish();
    },

    initializeSwiper() {
      const thumbSwiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: false,
        freeMode: true,
        touchRatio: 0.1,
        threshold: 5,
        lazy: true,
        allowTouchMove: true,
        speed: 100,
        centeredSlides: false,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1500: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 5,
          },
          800: {
            slidesPerView: 4,
            threshold: 5,
          },
          600: {
            slidesPerView: 4,
            threshold: 1,
          },
        },
      });

      new Swiper(".mySwiper2", {
        spaceBetween: 10,
        threshold: 10,
        centeredSlides: true,
        loop: false,
        lazy: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: thumbSwiper,
        },
      });
    },

    isScrolledPastAddToCartButton() {
      const ticker = this.$refs.ledMappedTicker;
      let startTicker = window.scrollY > ticker.offsetTop - 200;
      if (startTicker && !this.tickerDone) {
        this.handleLedTicker();
        this.tickerDone = true;
      }

      const button = this.$refs.addToCartButton;
      this.showFixedOrderBar =
        window.scrollY > button.offsetTop + button.offsetHeight;
    },

    getProductUpsells() {
      const upsells = this.product.metafields.find(
        (field) => field.key === "product_upsell"
      )?.value;
      let handles = null;

      if (!upsells) {
        return;
      }

      try {
        handles = JSON.parse(upsells);
      } catch (e) {
        return;
      }
    },

    async addToWishlist() {
      if (this.isInWishlist) {
        const item = this.favoriteProducts.find((p) => p.slug === this.slug);
        await this.deleteItem(item.id);

        this.$root.$emit(
          "addNotification",
          "Gelukt!",
          "Het product is verwijderd uit jou verlanglijstje",
          "",
          10000
        );
        return;
      }

      await this.addItem({
        ...this.product,
        slug: this.slug,
      });

      this.$root.$emit(
        "addNotification",
        "Gelukt!",
        "Het product is toegevoegd aan jou verlanglijstje",
        "",
        10000
      );
    },

    handleLedTicker() {
    this.ledMapped = this.isSolarPage ? 7013 : 50513;
    const incrementVal = this.isSolarPage ? 150 : 1000;
    let t1 = new Date();
    let t2 = new Date("3/9/2022");

    let timeDiff = Math.abs(t1 - t2);
    let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    this.ledMapped = this.ledMapped + parseInt(Math.random() * 3 * dayDiff);

      let tempLedMapped = 0;
      let loop = setInterval(() => {
        tempLedMapped = tempLedMapped + parseInt(Math.random() * incrementVal);
        this.ledMappedFinal = tempLedMapped
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (tempLedMapped >= this.ledMapped - incrementVal) {
          this.ledMappedFinal = this.ledMapped
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          clearInterval(loop);
        }
      }, 2);
    },
  },

  async mounted() {
    this.$nextTick(() => {
      this.initializeSwiper();

      if (this.productDescription.length < 500) {
        this.expandProductDescription = true;
      }
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "path_tracking", path: this.$route.path });
    window.dataLayer.push({
      event: "view_item",
      ecommerce: {
        items: [this.product],
      },
    });

    (function() {
      window.dataLayer.push(arguments);
    })("event", "conversion", {
      send_to: "AW-123456789/AbC-D_efG-h12_34-567",
      value: this.product.price,
      currency: "EUR",
    });

    this.addProductToRecentlyVisited({
      slug: this.slug,
      title: this.product.title,
      image: this.productImages[0],
      deliveryDate: this.product.deliveryDate,
      price: this.product.price,
    });

    this.isScrolledPastAddToCartButton();
    window.addEventListener("scroll", this.isScrolledPastAddToCartButton);

    this.getProductUpsells();
    this.isMounted = true;
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.isScrolledPastAddToCartButton);
  },

  async asyncData(ctx) {
    const slug = ctx.params.slug;
    const product = await getProduct(slug);

    const reviews = await getReviews(safeGet(product, "id"));

    const x = _.map(product.media, (item) => {
      return item.fullSrc !== null ? item.fullSrc : false;
    });

    const productImages = _.reject(x, (item) => {
      return !item;
    });
    product.media.push(...addCustomerImages());
    handleMostPopularBadge(product.related);

    let ledMapped = 0;
    // let t1 = new Date();
    // let t2 = new Date("3/9/2022");

    // let timeDiff = Math.abs(t1 - t2);
    // let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // ledMapped = ledMapped + parseInt(Math.random() * 3 * dayDiff);

    const finalStars = getRatingStars(product.stars);

    return { product, reviews, slug, productImages, ledMapped, finalStars };
  },
});
</script>

<style lang="scss">
.mySwiper {
  .swiper-slide {
    opacity: 0.4;
    height: 100px;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}

.swiper-button-prev,
.swiper-button-next {
  font-size: 30px;
}

.fadeHidden {
  position: relative;
  max-height: 500px;
  overflow: hidden;

  &:after {
    background: transparent;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    display: block;
    opacity: 1;
    content: " ";
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.fixed-order-bar {
  top: 2.6rem;

  @media screen and (max-width: 423px) {
    top: unset;
    padding: 0 1rem;
  }
}

.product-des {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.3rem;
  }
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 1rem solid #fbbf24;
}

.animated-bg {
  background: linear-gradient(-45deg, #e25344, #5ab9ea, #7389dc, #8860d0);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  // height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
/* remove display hidden if want to use */
.one-click-checkout-link button {
  background: transparent;
  color: green;
  border: none;
  text-decoration: underline;
  display: hidden;
}

.one-click-checkout-link button:hover {
  background: transparent;
  color: rgb(0, 59, 0);
  border: none;
  text-decoration: underline;
}

.gradient-text {
  background: linear-gradient(to right, #5ab9ea, #8860d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-shadow {
  box-shadow: 5px 5px 10px rgba(22, 163, 74, 0.8);
}

.popular-shadow {
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
}
.shadow-text {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.6);
}
</style>
