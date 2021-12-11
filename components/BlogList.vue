<template>
  <div class="max-w-5xl mx-auto">
    <LongParagraph
        title="Ook interssant om te lezen"
        :bg-color="true"
    >
      <ul class="text-white font-extralight">
        <li>
          <NuxtLink to="/blog/hoe-werkt-led-verlichting" class="link">Hoe werkt led verlichting?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/wat-is-led" class="link">Wat is led?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/welke-kleuren-led-strips-zijn-er" class="link">Welke kleuren led strips zijn er?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/hoe-sluit-ik-mijn-led-strips-aan" class="link">Hoe sluit ik mijn led strips aan?</NuxtLink>
        </li>
        <li>
          Lees onze blog als je meer wilt weten over <NuxtLink to="/blog/de-levensduur-van-led-verlichting" class="link">de levensduur van Led verlichting?</NuxtLink>
        </li>
        <li>
          Benieuwd naar het positieve effect van <NuxtLink to="/blog/tv-led-strips-een-nieuwe-vorm-van-televisie-kijken" class="link">TV Led-strips</NuxtLink>? Lees hier onze blog.
        </li>
        <li>
          <NuxtLink to="/blog/kan-je-de-kleur-van-led-verlichting-wijzigen" class="link">Kan je de kleur van led verlichting wijzigen? - Lideka Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/led-verlichting-in-de-badkamer" class="link">Led verlichting in de badkamer - Lideka Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/led-verlichting-in-de-slaapkamer" class="link">LED verlichting in de slaapkamer - Lideka Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/alles-over-led-verlichting-als-sfeerverlichting" class="link">Alles over LED verlichting als sfeerverlichting - Lideka Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog/welke-functies-kun-je-led-verlichting-meegeven" class="link">Welke functies kun je LED verlichting meegeven? - Lideka Home</NuxtLink>
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
