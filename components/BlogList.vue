<template>
  <div class="max-w-5xl mx-auto">
    <LongParagraph
        title="Ook interssant om te lezen"
        :bg-color="true"
    >
      <ul class="text-white font-extralight">
        <li>
          <NuxtLink to="/blog/hoe-werkt-led-verlichting" class="link">Hoe werkt onze verlichting?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/wat-is-led" class="link">Wat is LED?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/welke-kleuren-led-strips-zijn-er" class="link">Welke kleuren strips zijn er?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/hoe-sluit-ik-mijn-led-strips-aan" class="link">Hoe sluit ik mijn strips aan?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/de-levensduur-van-led-verlichting" class="link">Wat is de levensduur van onze verlichting?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/tv-led-strips-een-nieuwe-vorm-van-televisie-kijken" class="link">Benieuwd naar het positieve effect van TV strips?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/kan-je-de-kleur-van-led-verlichting-wijzigen" class="link">Kan je de kleur van onze verlichting wijzigen? - Lideka Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/led-verlichting-in-de-badkamer" class="link">Verlichting in de badkamer - Lideka Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/led-verlichting-in-de-slaapkamer" class="link">Verlichting in de slaapkamer - Lideka Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/alles-over-led-verlichting-als-sfeerverlichting" class="link">Alles over onze verlichting als sfeerverlichting - Lideka Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/welke-functies-kun-je-led-verlichting-meegeven" class="link">Welke functies kun je onze verlichting meegeven? - Lideka Home</NuxtLink>
        </li>
      </ul>
    </LongParagraph>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import LongParagraph from "~/components/blocks/LongParagraph.vue";

export default Vue.extend({
  components: {LongParagraph},
});
</script>
