(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{835:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(3),l=(n(27),n(211)),c=n(150),m=n(32),d=r.default.extend({components:{FormField:l.a},data:function(){return{email:""}},validations:{email:{required:c.required,email:c.email}},methods:{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$v.$touch(),!e.$v.$invalid){t.next=5;break}e.$root.$emit("addNotification","Niet gelukt!","Vul alle velden correct in","error"),t.next=16;break;case 5:return t.prev=5,t.next=8,Object(m.w)({email:e.email});case 8:return e.$root.$emit("addNotification","E-mail verstuurd!","Als we je account konden vinden, sturen wij je een e-mail om jouw account te herstellen.","",5e3),t.next=11,e.$router.push("/account/login");case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e.$root.$emit("addNotification","Oops.","Er is iets fout gegaan.","error");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})))()}}}),f=n(11),v=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("div",{staticClass:"space-y-6"},[n("FormField",{attrs:{errors:e.$v.email,"model-value":e.email,name:"E-mailadres","input-type":"email"},on:{"update:modelValue":function(t){e.email=t},"update:model-value":function(t){e.email=t}}}),e._v(" "),e._m(0)],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",attrs:{type:"submit"}},[e._v("\n        Account herstellen\n      ")])])}],!1,null,null,null).exports,x=r.default.extend({components:{Recover:v}}),w=Object(f.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-black py-16 pb-32"},[n("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md mb-8"},[n("h2",{staticClass:"mt-6 text-center text-3xl font-extrabold text-white"},[e._v("\n      Account herstellen\n    ")]),e._v(" "),n("p",{staticClass:"mt-2 text-center text-sm text-gray-600"},[e._v("\n      Of\n      "),n("NuxtLink",{staticClass:"font-medium text-indigo-400 hover:text-indigo-300",attrs:{to:"/account/login"}},[e._v("\n        inloggen\n      ")])],1)]),e._v(" "),n("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md"},[n("div",{staticClass:"bg-white py-16 px-4 shadow rounded-lg sm:px-10"},[n("Recover")],1)])])}),[],!1,null,null,null);t.default=w.exports}}]);