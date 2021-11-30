<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-20">
      <div class="grid grid-cols-3">
        <div v-for="block in blocks">
          <header class="font-bold text-black mb-2">{{ block.title }}</header>
          <ul v-for="link in block.links" class="space-y-4">
            <li>
              <NuxtLink :to="link.href">
                - {{link.name}}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import {mapGetters} from "vuex";

export default Vue.extend({
  data() {
    return {
      loading: false,
      page: {},
      blocks: [
        {
          title: 'Pagina\'s',
          links: [
            {
              name: 'Klantenservice',
              href: 'klantenservice'
            },
            {
              name: 'Bestellen en betalen',
              href: '/bestellen-en-betalen',
            },
            {
              name: 'Verzending',
              href: '/verzending',
            },
            {
              name: 'Over ons',
              href: '/over-ons',
            },
            {
              name: 'Algemene voorwaarden',
              href: '/algemene-voorwaarden',
            },
            {
              name: 'Privacy statement',
              href: '/privacy-statement',
            },
            {
              name: 'Veelgestelde vragen',
              href: '/veelgestelde-vragen',
            },
            {
              name: 'Blog',
              href: '/blog',
            },
            {
              name: 'Contact',
              href: '/contact'
            }
          ]
        },
        {
          title: 'Producten',
          links: []
        }
      ]
    };
  },

  computed: {
    ...mapGetters('shop/products', [
      'getCollections',
      'getMainCollections',
    ]),
  },

  async fetch() {
    const collections = await this.$shopify.collection.fetchAll();

    this.blocks.push({
      title: 'Categorieën',
      links: [
        {
          href: '#',
          links: collections.map((collection) => {
            return {
              title: collection.title,
              href: `/categorie/${collection.handle}`
            }
          }),
        }
      ]
    })
  }
})
</script>
