<template>
    <div class="calendly max-w-7xl mx-auto p-5 md:pl-16 md:py-44 mb-10">
        <div class="relative md:w-2/3 p-5 md:py-16 md:pr-16 md:pl-28 text-white bg-white bg-opacity-10 rounded-3xl backdrop-filter backdrop-blur-sm">
            <img :src="require('assets/calendly-person.svg')" alt="" class="hidden md:block absolute -left-12 top-20">
            <h2 class="font-bold text-xl md:text-3xl">
                Heb je problemen met het kiezen van de juiste LED-verlichting?
            </h2>
            <p class="mt-7">
                Geen probleem… Plan hier een gratis adviesgesprek in met één van onze experts.
            </p>
            <p class="mt-5">
                Kies uit een
                <span class="font-bold">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline ml-1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.9549 1.023C2.82774 -0.198978 4.58225 -0.308742 5.56132 0.881989C5.64388 0.982397 5.7271 1.08371 5.81032 1.18501C6.53768 2.07041 7.26469 2.95539 7.54417 3.23487C7.81456 3.50526 7.86623 3.92497 7.66949 4.25287L6.13855 6.80445C6.23667 6.96501 6.36962 7.15662 6.53971 7.37515C6.84301 7.76487 7.23057 8.19751 7.66277 8.62971C8.39061 9.35755 9.20545 10.0448 9.90685 10.5092L12.4187 9.0021C12.7246 8.81856 13.1134 8.85009 13.3858 9.08053L15.8096 11.1314C16.9377 12.086 16.8654 13.8475 15.6629 14.7065C13.8084 16.0311 11.316 16.3461 9.27391 15.0998C7.86614 14.2406 6.14113 13.0277 4.59789 11.4844C3.20208 10.0886 2.17517 8.643 1.45035 7.42783C0.207309 5.34386 0.641342 2.86197 1.9549 1.023ZM4.27396 1.94051C4.01637 1.62724 3.57003 1.62926 3.31112 1.99173C2.28083 3.43413 2.05904 5.19482 2.88173 6.57405C3.55116 7.69635 4.49688 9.02642 5.7764 10.3059C7.19669 11.7262 8.80474 12.8609 10.1422 13.6772C11.5203 14.5183 13.2881 14.3546 14.6942 13.3503C15.0125 13.1228 15.0317 12.6565 14.733 12.4038L12.7646 10.7382L10.3299 12.199C10.0722 12.3537 9.7511 12.3575 9.4897 12.2091C8.53277 11.6657 7.41429 10.7383 6.48426 9.80822C6.0147 9.33867 5.57894 8.8543 5.22444 8.3988C4.87981 7.95599 4.5748 7.49365 4.4108 7.07327C4.31706 6.83298 4.33987 6.56283 4.47257 6.34166L5.92268 3.9248C5.5337 3.47477 5.01691 2.8453 4.53921 2.26344C4.44902 2.15359 4.36023 2.04544 4.27396 1.94051Z" fill="white"/>
                    </svg>
                    Telefoon
                </span>
                of
                <span class="font-bold">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline ml-1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 1.43478H8.05C8.4366 1.43478 8.75 1.86303 8.75 2.3913V4.43989V7.20188V8.6087C8.75 9.13697 8.4366 9.56522 8.05 9.56522H1.75C1.3634 9.56522 1.05 9.13697 1.05 8.6087V2.3913C1.05 1.86303 1.3634 1.43478 1.75 1.43478ZM9.78874 8.8815C9.68965 10.0737 8.94899 11 8.05 11H1.75C0.783502 11 0 9.92938 0 8.6087V2.3913C0 1.07062 0.783502 0 1.75 0H8.05C9.0165 0 9.8 1.07062 9.8 2.3913V2.70813L12.2646 1.16457C13.076 0.656378 14 1.46657 14 2.68626V8.47724C14 9.61979 13.1808 10.4266 12.3876 10.0653L9.78874 8.8815ZM9.8 7.20188C9.8 7.30481 9.8482 7.39619 9.91966 7.42874L12.7197 8.7041C12.833 8.75572 12.95 8.64047 12.95 8.47724V2.68626C12.95 2.51202 12.818 2.39628 12.7021 2.46888L9.90209 4.2225C9.83988 4.26146 9.8 4.34638 9.8 4.43989V7.20188Z" fill="white"/>
                    </svg>
                    Videogesprek.
                </span>
            </p>
            <div class="mt-7">
                <a href="https://calendly.com/lidekahome/advies-gesprek-led-verlichting" target="_blank" rel="noopener" class="plan-btn p-3 px-6 items-center justify-center border border-transparent rounded-full text-sm font-bold text-white hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Plan een gratis adviesgesprek
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Calendly',
});
</script>

<style lang="scss">
.calendly {
    background: url('~assets/calendly-background.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    .plan-btn {
        background: linear-gradient(91.47deg, #25B2E7 0%, #6366F1 101.33%);
    }
}
</style>