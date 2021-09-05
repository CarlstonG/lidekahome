<template>
  <div>
    <nav class="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
      <ol class="max-w-7xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"
          vocab="http://schema.org/"
          typeof="BreadcrumbList"
      >
        <li class="flex">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-gray-400 hover:text-gray-500">
              <!-- Heroicon name: solid/home -->
              <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span class="sr-only" property="name">Home</span>
            </NuxtLink>
          </div>
          <meta property="position" content="1"/>
        </li>

        <li class="flex"
            v-for="(crumb, index) in crumbs"
            :key="index"
            property="itemListElement"
            typeof="ListItem"
        >
          <div class="flex items-center">
            <svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg>
            <NuxtLink v-if="crumb.path" property="item" typeof="WebPage" :to="crumb.path" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              <span property="name">{{ $route.fullPath === crumb.path && title !== null ? title : crumb.title }}</span>
            </NuxtLink>
          </div>
          <meta property="position" :content="index + 2"/>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import {capitalizeFirstLetter} from "../services/Helpers";

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    path: {
      type: [],
      default: () => []
    }
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)

        /* Inject. */
        if (path === '/products') {
          if (this.path.length > 0) {
            for (let i = 0; i < this.path.length; i++) {
              crumbs.push(this.path[i]);
            }
          }
          return;
        }

        if (match.name !== null) {
          crumbs.push({
            title: capitalizeFirstLetter(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })

      return crumbs
    },
  },
}
</script>
