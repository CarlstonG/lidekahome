import {sortRoutes} from '@nuxt/utils'
import axios from "axios";

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',

    server: {
        host: '0.0.0.0'
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Lideka Home - Kwaliteit Led-en Solar artikelen',
        htmlAttrs: {
            lang: 'nl'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap'
            },
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/jsonld', '~/plugins/vuelidate.js', {
        src: '~/plugins/vue-nl2br.js',
        mode: 'client'
    }, {src: '~/plugins/vue-carousel.js', mode: 'client'}],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        'nuxt-use-motion',
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/pwa',
        '@aceforth/nuxt-optimized-images',
        '@/plugins/generator'
    ],

    motion: {
        directives: {
            'fade-up': {
                initial: {
                    opacity: 0,
                    y: 50
                },
                visible: {
                    opacity: 1,
                    y: 0
                },
            }
        }
    },

    sitemap: {
        hostname: 'https://lidekahome.nl',
        gzip: true,
        exclude: [
            '/winkelwagen',
            '/sso'
        ],
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        }
    },

    optimizedImages: {
        optimizeImages: true
    },

    tailwindcss: {
        configPath: 'tailwind.config.js',
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/gtm',
        '@nuxtjs/robots',
        '@nuxt/image',
        'nuxt-shopify',
        '@luxdamore/nuxt-prune-html',
        'nuxt-precompress',
        '@nuxtjs/sitemap',
        ['@nuxtjs/component-cache', {maxAge: 1000 * 60 * 60}],
    ],

    gtm: {
        id: process.env.GTM
    },

    image: {
        domains: ['https://cdn.shopify.com', 'https://lidekahome.nl'],
        provider: 'ipx',
        imgix: {
            baseURL: 'https://lideka-home.imgix.net'
        },
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
    },

    nuxtPrecompress: {
        enabled: true, // Enable in production
        report: false, // set true to turn one console messages during module init
        test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
        // Serving options
        middleware: {
            // You can disable middleware if you serve static files using nginx...
            enabled: true,
            // Enable if you have .gz or .br files in /static/ folder
            enabledStatic: true,
            // Priority of content-encodings, first matched with request Accept-Encoding will me served
            encodingsPriority: ['br', 'gzip'],
        },

        // build time compression settings
        gzip: {
            // should compress to gzip?
            enabled: true,
            // compression config
            // https://www.npmjs.com/package/compression-webpack-plugin
            filename: '[path].gz[query]', // middleware will look for this filename
            threshold: 10240,
            minRatio: 0.8,
            compressionOptions: {level: 9},
        },
        brotli: {
            // should compress to brotli?
            enabled: true,
            // compression config
            // https://www.npmjs.com/package/compression-webpack-plugin
            filename: '[path].br[query]', // middleware will look for this filename
            compressionOptions: {level: 11},
            threshold: 10240,
            minRatio: 0.8,
        },
    },

    pruneHtml: {
        enabled: true, // `true` in production
        hideGenericMessagesInConsole: false, // `false` in production
        hideErrorsInConsole: false, // deactivate the `console.error` method
        hookRenderRoute: true, // activate `hook:render:route`
        hookGeneratePage: true, // activate `hook:generate:page`
        selectors: [
            // CSS selectors to prune
            'link[rel="preload"][as="script"]',
            'script:not([type="application/ld+json"])',
        ],
        classesSelectorsToKeep: [], // disallow pruning of scripts with this classes, n.b.: each `classesSelectorsToKeep` is appended to every `selectors`, ex.: `link[rel="preload"][as="script"]:not(__classesSelectorsToKeep__)`
        link: [], // inject custom links, only if pruned
        script: [], // inject custom scripts, only if pruned
        htmlElementClass: null, // a string added as a class to the <html> element if pruned
        cheerio: {
            // the config passed to the `cheerio.load(__config__)` method
            xmlMode: false,
        },
        types: [
            // it's possibile to add different rules for pruning
            'default-detect',
        ],

        // 👇🏻 Type: `default-detect`
        headerNameForDefaultDetection: 'user-agent', // The `header-key` base for `MobileDetection`, usage `request.headers[ headerNameForDefaultDetection ]`
        auditUserAgent: 'lighthouse', // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings
        isAudit: true, // remove selectors if match with `auditUserAgent`
        isBot: true, // remove selectors if is a bot
        ignoreBotOrAudit: false, // remove selectors in any case, not depending on Bot or Audit
        matchUserAgent: null, // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings

        // 👇🏻 Type: 'query-parameters'
        queryParametersToPrune: [
            // array of objects (key-value)
            // trigger the pruning if 'query-parameters' is present in `types` and at least one value is matched, ex. `/?prune=true`
            {
                key: 'prune',
                value: 'true',
            },
        ],
        queryParametersToExcludePrune: [], // same as `queryParametersToPrune`, exclude the pruning if 'query-parameters' is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`

        // 👇🏻 Type: 'headers-exist'
        headersToPrune: [], // same as `queryParametersToPrune`, but it checks `request.headers`
        headersToExcludePrune: [], // same as `queryParamToExcludePrune`, but it checks `request.headers`, this priority is over than `headersToPrune`

        // Emitted events for callbacks methods
        onBeforePrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
        onAfterPrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        cache: true
    },

    shopify: {
        domain: process.env.SHOPIFY_DOMAIN,
        storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        unoptimized: false
    },

    env: {
        shopifyDomain: process.env.SHOPIFY_DOMAIN,
        shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        shopifyGraphql: process.env.SHOPIFY_GRAPHQL,
        rocksolidApiKey: process.env.ROCKSOLID_API_KEY,
        rocksolidApiUrl: process.env.ROCKSOLID_API_URL,
        shopifyCheckoutDomain: process.env.SHOPIFY_CHECKOUT_DOMAIN
    },

    serverMiddleware: [{
        path: '/',
        handler: async (req, res, next) => {
            if (req.url.match("/shop")) {
                res.writeHead(301, {Location: req.url.replace("/shop", "/")})
                res.end();
            }

            if (req.url.match("/categorie/plafond")) {
                res.writeHead(301, {Location: req.url.replace("/plafond", "/led-strip-plafond")})
                res.end();
            }

            if (req.url.match("/categorie/woonkamer")) {
                res.writeHead(301, {Location: req.url.replace("/woonkamer", "/led-strip-woonkamer")})
                res.end();
            }

            if (req.url.match("/categorie/slaapkamer")) {
                res.writeHead(301, {Location: req.url.replace("/slaapkamer", "/led-strip-woonkamer")})
                res.end();
            }

            if (req.url.match("/categorie/keuken")) {
                res.writeHead(301, {Location: req.url.replace("/keuken", "/led-strip-keuken")})
                res.end();
            }

            if (req.url.match("/categorie/gamekamer")) {
                res.writeHead(301, {Location: req.url.replace("/gamekamer", "/led-strip-gamekamer")})
                res.end();
            }

            if (req.url.match("/categorie/badkamer")) {
                res.writeHead(301, {Location: req.url.replace("/badkamer", "/led-strip-badkamer")})
                res.end();
            }

            if (req.url.match("/categorie/bed")) {
                res.writeHead(301, {Location: req.url.replace("/bed", "/led-strip-bed")})
                res.end();
            }

            if (req.url.match("/solar-fonteinen")) {
                res.writeHead(301, {Location: req.url.replace("/solar-fonteinen", "/categorie/solar-tuinverlichting")})
                res.end();
            }

            if (req.url.startsWith('/account/login')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/login${(req.url.replace('/account/login', ''))}`)});
                res.end();
            }

            if (req.url.match('/checkouts')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}${req.url}`)});
                res.end();
            }

            if (req.url.match('/orders')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}${req.url}`)});
                res.end();
            }

            if (req.url.startsWith('/account/register')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/register${(req.url.replace('/account/register', ''))}`)});
                res.end();
            }

            if (req.url.startsWith('/account/activate')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/activate${(req.url.replace('/account/activate', ''))}`)});
                res.end();
            }

            if (req.url.startsWith('/account/logout')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/logout${(req.url.replace('/account/logout', ''))}`)});
                res.end();
            }

            if (req.url.startsWith('/account/reset')) {
                res.writeHead(301, {Location: (`https://${process.env.SHOPIFY_CHECKOUT_DOMAIN}/account/reset${(req.url.replace('/account/reset', ''))}`)});
                res.end();
            }

            if (req.url.match("/pages\/")) {
                res.writeHead(301, {Location: req.url.replace("pages/", "")})
                res.end();
            }

            if (req.url.match("/collections\/")) {
                res.writeHead(301, {Location: req.url.replace("collections/", "categorie/")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-smart-tv-led-light-strip-2-meter-met-smart-app")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-smart-tv-led-light-strip-2-meter-met-smart-app", "lideka-tv-led-strip-2-meter-usb-rgb-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-smart-tv-led-light-strip-3-meter-met-smart-app", "lideka-tv-led-strip-3-meter-usb-rgb-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-3-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-3-meter", "rgb-led-light-strip-3-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/led-strip-5-meter")) {
                res.writeHead(301, {Location: req.url.replace("led-strip-5-meter", "rgb-led-light-strip-5-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/led-strip-10-meter")) {
                res.writeHead(301, {Location: req.url.replace("led-strip-10-meter", "rgb-led-light-strip-10-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-15-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-15-meter", "rgb-led-light-strip-15-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-20-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-20-meter", "rgb-led-light-strip-20-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-led-strip-3-meter-tv-strip-2m-compleet-pakket-incl-app")) {
                res.writeHead(301, {Location: req.url.replace("lideka-led-strip-3-meter-tv-strip-2m-compleet-pakket-incl-app", "rgb-led-light-strip-15-meter-tv-strip-3m-combinatie-pakket-1")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-6-meter-tv-led-strip-2-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-6-meter-tv-led-strip-2-meter", "rgb-led-light-strip-5-meter-tv-strip-2m-combinatie-pakket")})
                res.end();
            }

            if (req.url.match("/products/lideka-rgb-led-light-strip-12-meter-2x6-tv-led-strip-3-meter")) {
                res.writeHead(301, {Location: req.url.replace("lideka-rgb-led-light-strip-12-meter-2x6-tv-led-strip-3-meter", "rgb-led-light-strip-10-meter-tv-strip-3m-combinatie-pakket")})
                res.end();
            }

            if (req.url.match("/products/copy-of-lideka-led-strip-15-3x5-meter-tv-strip-3m-compleet-pakket-incl-app")) {
                res.writeHead(301, {Location: req.url.replace("copy-of-lideka-led-strip-15-3x5-meter-tv-strip-3m-compleet-pakket-incl-app", "rgb-led-light-strip-15-meter-tv-strip-3m-combinatie-pakket")})
                res.end();
            }

            if (req.url.match("/products/lideka-led-strip-20-4x5-meter-tv-strip-3m-compleet-pakket-incl-app")) {
                res.writeHead(301, {Location: req.url.replace("lideka-led-strip-20-4x5-meter-tv-strip-3m-compleet-pakket-incl-app", "rgb-led-light-strip-20-meter-tv-strip-3m-combinatie-pakket")})
                res.end();
            }

            if (req.url.match("/products/led-strip-5-meter-1-meter-van-lideka-rgb")) {
                res.writeHead(301, {Location: req.url.replace("led-strip-5-meter-1-meter-van-lideka-rgb", "rgb-ic-led-light-strip-5-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/led-strip-10-meter-2-meter-van-lideka®-rgb")) {
                res.writeHead(301, {Location: req.url.replace("led-strip-5-meter-1-meter-van-lideka-rgb", "rgb-ic-led-light-strip-10-meter-smart-verlichting")})
                res.end();
            }

            if (req.url.match("/products/lideka-solar-powerbank-30-000-mah-usb-c-waterdicht-4-usb-poorten-zonneenergie")) {
                res.writeHead(301, {Location: req.url.replace("lideka-solar-powerbank-30-000-mah-usb-c-waterdicht-4-usb-poorten-zonneenergie", "solar-powerbank-30000-mah-4x-usb-usb-c-wireless-charge")})
                res.end();
            }

            /*
            if (req.url.match('sitemap.xml')) {
              await axios.get(`${process.env.ROCKSOLID_API_URL}/sitemap?api_key=${process.env.ROCKSOLID_API_KEY}`).then((response) => {
                res.end(response.data);
              }).catch((err) => {
                res.end(err);
              })
            }
             */

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
                path: `/account/reset/:activationToken/:userId`,
                component: resolve(__dirname, 'pages/account/reset.vue')
            })

            sortRoutes(routes)
        }
    }
}
