(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{629:function(e,t,r){"use strict";r(29),r(20),r(21),r(42),r(26),r(34);var n=r(10),l=r(3),o=(r(27),r(211)),c=r(150),d=r(4),f=r(32);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w=d.default.extend({components:{FormField:o.a},data:function(){return{loading:!1,fields:{email:"",firstName:"",lastName:"",message:"Nieuwsbrief inschrijving",name:"Nieuwsbrief inschrijving"}}},methods:{submit:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:if(e.loading=!0,e.$v.$touch(),!e.$v.$invalid){t.next=8;break}e.$root.$emit("addNotification","Niet gelukt!","Vul alle velden correct in","error"),t.next=20;break;case 8:return t.prev=8,t.next=11,Object(f.v)("/newsletter/klaviyo",v({},e.fields));case 11:e.$v.$reset(),e.fields.email="",e.$root.$emit("addNotification","Gelukt!","Je bent geabonneerd, bedankt!","",5e3),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(8),e.$root.$emit("addNotification","Oops.","Er is iets fout gegaan.","error");case 19:e.loading=!1;case 20:case"end":return t.stop()}}),t,null,[[8,16]])})))()}},validations:{fields:{email:{required:c.required,email:c.email}}}}),h=(r(660),r(11)),component=Object(h.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full bg-white py-8 px-3"},[n("div",{staticClass:"newsletter-block max-w-7xl mx-auto  p-4 bg-white md:px-32 md:py-24 rounded-xl border-2 border-indigo-400"},[n("form",{staticClass:"flex flex-col text-center justify-center",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("img",{staticClass:"h-8 w-auto mb-8",attrs:{src:r(213),alt:"Lideka Home"}}),e._v(" "),n("h2",{staticClass:"text-3xl font-bold uppercase text-white"},[e._v("\n      Ontvang gratis ebooks en exclusieve deals van Lideka\n    ")]),e._v(" "),n("p",{staticClass:"mt-6 px-4 text-white"},[e._v("\n      Meld je aan voor de nieuwsbrief en ontvang gratis e-boeken en speciaal nieuws en aanbiedingen van de lideka.\n    ")]),e._v(" "),n("div",{staticClass:"md:flex md:w-1/2 my-6 mx-auto space-y-4 md:space-y-0"},[n("FormField",{staticClass:"flex-1",attrs:{"hide-label":!0,name:"Voer je e-mailadres in",errors:e.$v.fields.email,"model-value":e.fields.email,"input-type":"email"},on:{"update:modelValue":function(t){return e.$set(e.fields,"email",t)},"update:model-value":function(t){return e.$set(e.fields,"email",t)}}}),e._v(" "),n("button",{staticClass:"ml-4 uppercase tracking-wide shadow-md py-1 px-6 border border-transparent rounded text-md text-white hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",attrs:{type:"submit"}},[e._v("\n        Aanmelden\n      ")])],1),e._v(" "),n("p",{staticClass:"text-white"},[e._v("\n      Door je aan te melden, ga je akkoord met het\n      "),n("NuxtLink",{staticClass:"underline",attrs:{to:"/privacy-statement",target:"_blank",rel:"noopener"}},[e._v("privacybeleid")]),e._v("\n      en de\n      "),n("NuxtLink",{staticClass:"underline",attrs:{to:"/algemene-voorwaarden",target:"_blank",rel:"noopener"}},[e._v("gebruiksvoorwaarden")])],1)])])])}),[],!1,null,null,null);t.a=component.exports},634:function(e,t,r){e.exports=r.p+"img/e8baa36.svg"},642:function(e,t,r){e.exports=r.p+"img/dd696d4.svg"},652:function(e,t,r){var content=r(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(77).default)("657d4765",content,!0,{sourceMap:!1})},653:function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},657:function(e,t,r){e.exports=r.p+"img/58ac301.svg"},660:function(e,t,r){"use strict";r(652)},661:function(e,t,r){var n=r(76),l=r(653),o=r(662),c=n((function(i){return i[1]})),d=l(o);c.push([e.i,".newsletter-block{background:url("+d+") no-repeat;background-position:50%}.newsletter-block button{background:linear-gradient(100.91deg,#5ab6e7 -6.75%,#8560cd 111.47%)}",""]),c.locals={},e.exports=c},662:function(e,t,r){e.exports=r.p+"img/a09d36d.png"},675:function(e,t,r){"use strict";var n=r(11),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center space-x-6 md:order-2"},[r("a",{staticClass:"hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2",attrs:{href:"https://www.instagram.com/lidekahome.nl/",target:"_blank",rel:"noopener"}},[r("span",{staticClass:"sr-only"},[e._v("Instagram")]),e._v(" "),r("svg",{staticClass:"h-8 w-8",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"}})])]),e._v(" "),r("a",{staticClass:"hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2",attrs:{href:"https://www.linkedin.com/company/lideka",target:"_blank",rel:"noopener"}},[r("span",{staticClass:"sr-only"},[e._v("LinkedIn")]),e._v(" "),r("svg",{staticClass:"h-8 w-8",attrs:{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}})])]),e._v(" "),r("a",{staticClass:"hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2",attrs:{href:"https://www.youtube.com/channel/UCM6KUMoinLVJZUIOx3Mm2Tw",target:"_blank",rel:"noopener"}},[r("span",{staticClass:"sr-only"},[e._v("YouTube")]),e._v(" "),r("svg",{staticClass:"h-8 w-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"}})])]),e._v(" "),r("a",{staticClass:"hover:opacity-50 bg-gradient-to-br from-blue-500 to-purple-400 block rounded-full p-2",attrs:{href:"https://pin.it/7w89n1e",target:"_blank",rel:"noopener"}},[r("span",{staticClass:"sr-only"},[e._v("Pinterest")]),e._v(" "),r("svg",{staticClass:"h-8 w-8",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("title",[e._v("Pinterest")]),e._v(" "),r("path",{attrs:{d:"M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"}})])])])}),[],!1,null,null,null);t.a=component.exports},676:function(e,t,r){var content=r(709);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(77).default)("004ab5c2",content,!0,{sourceMap:!1})},708:function(e,t,r){"use strict";r(676)},709:function(e,t,r){var n=r(76)((function(i){return i[1]}));n.push([e.i,"button.claim-btn{background:linear-gradient(100.91deg,#5ab6e7 -6.75%,#8560cd 111.47%)}",""]),n.locals={},e.exports=n},840:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-white text-sm"},[e._v("\n                    Door je aan te melden, ga je akkoord met het\n                    "),r("a",{staticClass:"underline",attrs:{href:"https://klantenservice.lidekahome.nl/nl-NL/privacy-statement-22829",target:"_blank",rel:"noopener"}},[e._v("privacybeleid")]),e._v("\n                    en de\n                    "),r("a",{staticClass:"underline",attrs:{href:"https://klantenservice.lidekahome.nl/nl-NL/articles/algemene-voorwaarden-5283",target:"_blank",rel:"noopener"}},[e._v("gebruiksvoorwaarden")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-6 lg:px-0 my-10"},[n("div",{staticClass:"mx-auto max-w-7xl py-10 px-8 default-gradient",staticStyle:{"border-radius":"20px"}},[n("h2",[n("div",{staticClass:"flex items-center justify-center mb-4 lg:mb-0"},[n("h2",{staticClass:"text-3xl text-white font-bold tracking-wide uppercase"},[e._v("Wij geloven in...")])])]),e._v(" "),n("div",{staticClass:"grid grid-cols-1 lg:grid-cols-3 p-0 lg:p-10 gap-6 lg:gap-0"},[n("div",{staticClass:"flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4",staticStyle:{"border-color":"rgba(255, 255, 255, 0.1)"}},[n("div",{staticClass:"flex-grow items-center flex"},[n("img",{staticClass:"w-32",attrs:{src:r(634),alt:"Service icon"}})]),e._v(" "),n("h3",{staticClass:"text-gray-100 tracking-wide font-bold uppercase mt-4"},[e._v("Service")])]),e._v(" "),n("div",{staticClass:"flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4",staticStyle:{"border-color":"rgba(255, 255, 255, 0.1)"}},[n("div",{staticClass:"flex-grow items-center flex"},[n("img",{staticClass:"w-32",attrs:{src:r(642),alt:"Kwaliteit vinkje"}})]),e._v(" "),n("h3",{staticClass:"text-gray-100 tracking-wide font-bold uppercase mt-4"},[e._v("Kwaliteit")])]),e._v(" "),n("div",{staticClass:"flex flex-col w-full lg:w-auto items-center justify-center rounded-lg lg:mx-10 mx-0 py-4",staticStyle:{"border-color":"rgba(255, 255, 255, 0.1)"}},[n("div",{staticClass:"flex-grow items-center flex h-40 lg:h-auto"},[n("img",{staticClass:"w-32",attrs:{src:r(657),alt:"Icon voor prijs naar beneden"}})]),e._v(" "),n("h3",{staticClass:"text-gray-100 tracking-wide font-bold uppercase mt-4"},[e._v("Betaalbaarheid")])])])])])}],l=(r(29),r(20),r(21),r(42),r(26),r(34),r(10)),o=r(3),c=(r(27),r(38),r(4)),d=r(150),f=r(211),m=r(629),v=r(675),w=r(32);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=c.default.extend({components:{FormField:f.a,NewsletterBlock:m.a,SocialIcons:v.a},data:function(){return{loading:!1,fields:{name:"",email:"",order:""}}},methods:{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:if(e.loading=!0,e.$v.$touch(),!e.$v.$invalid){t.next=8;break}e.$root.$emit("addNotification","Niet gelukt!","Vul alle velden correct in","error"),t.next=22;break;case 8:return t.prev=8,t.next=11,Object(w.v)("/claim",x({},e.fields));case 11:e.$v.$reset(),e.fields.email="",e.fields.name="",e.fields.order="",e.$root.$emit("addNotification","Gelukt!","Je garantie claim is ingediend!","",5e3),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(8),e.$root.$emit("addNotification","Oops.","Er is iets fout gegaan.","error");case 21:e.loading=!1;case 22:case"end":return t.stop()}}),t,null,[[8,18]])})))()}},head:function(){return{title:"Ontvang 2 jaar garantie op jouw artikel van Lideka®"}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"path_tracking",path:e.$route.path});case 2:case"end":return t.stop()}}),t)})))()},validations:{fields:{email:{required:d.required,email:d.email},name:{required:d.required},order:{required:d.required}}}}),_=(r(708),r(11)),component=Object(_.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-7xl mx-auto py-20"},[r("div",{staticClass:"_living-room px-8 py-20 mb-10"},[r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-10"},[r("h1",{staticClass:"text-white text-4xl font-bold text-center"},[e._v("Vul je gegevens in, en ontvang 2 jaar garantie op jouw artikel van Lideka®")]),e._v(" "),r("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("FormField",{staticClass:"flex-1",attrs:{"hide-label":!0,name:"Voer je e-mailadres in","input-type":"email",errors:e.$v.fields.email,"model-value":e.fields.email},on:{"update:modelValue":function(t){return e.$set(e.fields,"email",t)},"update:model-value":function(t){return e.$set(e.fields,"email",t)}}}),e._v(" "),r("FormField",{staticClass:"flex-1",attrs:{"hide-label":!0,name:"Voer je naam in",errors:e.$v.fields.name,"model-value":e.fields.name},on:{"update:modelValue":function(t){return e.$set(e.fields,"name",t)},"update:model-value":function(t){return e.$set(e.fields,"name",t)}}}),e._v(" "),r("FormField",{staticClass:"flex-1",attrs:{"hide-label":!0,name:"Voer je bestelnummer in",errors:e.$v.fields.order,"model-value":e.fields.order},on:{"update:modelValue":function(t){return e.$set(e.fields,"order",t)},"update:model-value":function(t){return e.$set(e.fields,"order",t)}}}),e._v(" "),r("button",{staticClass:"block claim-btn w-full uppercase tracking-wide shadow-md py-1 px-6 border border-transparent rounded text-md text-white hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",attrs:{type:"submit"}},[e._v("\n                    Claim je garantie\n                ")]),e._v(" "),e._m(0)],1)])]),e._v(" "),e._m(1),e._v(" "),r("div",{staticClass:"mt-16"},[r("SocialIcons")],1)])}),n,!1,null,null,null);t.default=component.exports}}]);