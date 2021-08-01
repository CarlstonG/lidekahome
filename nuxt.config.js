import { sortRoutes } from '@nuxt/utils'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  server: {
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rocksolid-headless-shopify',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { hid: 'thuiswinkel', src: '//widget.thuiswinkel.org/script.js?id=NTM3NC0x', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-imgix.js', '~/plugins/jsonld', '~/plugins/vuelidate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-shopify',
    'nuxt-ssr-cache'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  shopify: {
    domain: process.env.SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    unoptimized: true
  },

  env: {
    shopifyDomain: process.env.SHOPIFY_DOMAIN,
    shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    shopifyGraphql: process.env.SHOPIFY_GRAPHQL,
    rocksolidApiKey: process.env.ROCKSOLID_API_KEY
  },

  cache: {
    useHostPrefix: false,
    pages: [
      /^\/categorie\/\d+$/,
    ],

    store: {
      type: 'memory',
      max: 100,
      ttl: 3600,
    },
  },

  serverMiddleware: [{
    path: '/',
    handler: (req, res, next) => {
      if(req.url.match("/pages\/")) {
        res.writeHead(301, { Location: req.url.replace("pages/", "") })
        res.end();
      }

      if(req.url.match("/collections\/")) {
        res.writeHead(301, {Location: req.url.replace("collections/", "categorie/")})
        res.end();
      }

      next();
    }
  }],

  router: {
    linkPrefetchedClass: 'preloaded',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'winkelwagen',
        path: '/winkelwagen',
        component: resolve(__dirname, 'pages/cart.vue')
      })

      routes.push({
        name: 'activate',
        path: '/account/activate/:activationToken/:userId',
        component: resolve(__dirname, 'pages/account/activate.vue')
      })

      routes.push({
        name: 'reset',
        path: '/account/reset/:activationToken/:userId',
        component: resolve(__dirname, 'pages/account/reset.vue')
      })

      sortRoutes(routes)
    }
  }
}
