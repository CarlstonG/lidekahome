<template>
    <div class="max-w-7xl mx-auto">
        <client-only v-if="$device.isMobile">
            <div class="my-5 px-5">
                <carousel v-bind="options" :perPageCustom="[[480, 1], [768, 1], [1022, 2]]" :navigation-enabled="true"
                :navigation-prev-label="prevLabel" :navigation-next-label="nextLabel">
                    <slide class="pl-1 pr-1 flex justify-center">
                        <img alt="PostNL" src="~/assets/postnl.png" class="w-48"/>
                    </slide>

                    <slide class="pl-1 pr-1 flex justify-center">
                        <a href="https://www.thuiswinkel.org/leden/lidekahome-nl/certificaat/" target="_blank" rel="noopener">
                            <img alt="Thuiswinkel waarborg" src="~/assets/thuiswinkel.svg" class="w-48"/>
                        </a>
                    </slide>

                    <slide class="pl-1 pr-1 flex justify-center">
                        <a href="https://www.webwinkelkeur.nl/webshop/Lideka-Home_1214064" title="Webwinkel Keurmerk en klantbeoordelingen" target="_blank" rel="noopener">
                            <img src="https://dashboard.webwinkelkeur.nl/banners/72/1214064/1632729776.svg" alt="Keurmerk webwinkel" class="w-48">
                        </a>
                    </slide>

                    <slide class="pl-1 pr-1 flex justify-center">
                        <img alt="PostNL" src="~/assets/bekend-tv.png" class="w-48"/>
                    </slide>
                </carousel>
            </div>
        </client-only>
        <div v-else class="flex flex-col md:flex-row justify-center md:justify-between items-center my-10 space-y-6 md:space-y-0">
            <img alt="PostNL" src="~/assets/postnl.png" class="w-48"/>

            <a href="https://www.thuiswinkel.org/leden/lidekahome-nl/certificaat/" target="_blank" rel="noopener">
                <img alt="Thuiswinkel waarborg" src="~/assets/thuiswinkel.svg" class="w-48"/>
            </a>

            <a href="https://www.webwinkelkeur.nl/webshop/Lideka-Home_1214064" title="Webwinkel Keurmerk en klantbeoordelingen" target="_blank" rel="noopener">
                <img src="https://dashboard.webwinkelkeur.nl/banners/72/1214064/1632729776.svg" alt="Keurmerk webwinkel" class="w-48">
            </a>

            <img alt="PostNL" src="~/assets/bekend-tv.png" class="w-48"/>
        </div>
    </div>
</template>

<script>
import vue from 'vue';

export default vue.extend({
    data() {
        return {
        options: {
            loop: true,
            perPage: 1,
            slideCount: 1,
            paginationEnabled: false,
            autoplay: true,
            autoplayTimeout: 5000,
        },
        nextLabel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" style=\"color: white;\" class=\"bi bi-caret-right\" viewBox=\"0 0 16 16\">\n" +
            "<path d=\"M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z\"/>\n" +
            "</svg>",
        prevLabel: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\" style=\"color: white;\" class=\"bi bi-caret-left\" viewBox=\"0 0 16 16\">\n" +
            "<path d=\"M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z\"/>\n" +
            "</svg>"
        }
    },
});
</script>