(this["webpackJsonpreact-single-page-smooth-scroll"]=this["webpackJsonpreact-single-page-smooth-scroll"]||[]).push([[0],{40:function(e){e.exports=JSON.parse('{"language":"en","welcome":"Welcome"}')},41:function(e){e.exports=JSON.parse('{"language":"fr","welcome":"Bienvenue"}')},56:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(32),i=t.n(r),c=t(29),s=t(71),l=t(49),d={en:{translation:t(40)},fr:{translation:t(41)}};c.a.use(l.a).use(s.e).init({resources:d,fallbackLng:"en",detection:{order:["cookie","localStorage","navigator","htmlTag"],caches:["cookie"]}});c.a,t(56);var f=t(17),u=t(82),g=t(27),h=t(48),b={breakpoints:{values:{xs:0,sm:700,md:960,lg:1320,xl:1920}},navbarHeight:"70px",mobileNavbarHeight:"55px",typography:{fontFamily:["Cairo","Roboto",'"Helvetica Neue"',"sans-serif"].join(","),h1:{fontWeight:500,fontSize:60},h2:{fontWeight:500,fontSize:50},h3:{fontWeight:500,fontSize:40},h4:{fontWeight:500,fontSize:30},h5:{fontWeight:500,fontSize:25},h6:{fontWeight:500,fontSize:20},overline:{fontWeight:500},body1:{fontWeight:300,fontSize:18},body2:{fontWeight:300,fontSize:18}}},j=Object(h.a)(Object(g.a)({palette:{background:{default:"#1A1A1A "},primary:{main:"#FF4C29",contrastText:"#fff"},secondary:{main:"#2C394B",contrastText:"#fff"},text:{primary:"#FFF",secondary:"rgb(200,200,200)"},action:{disabled:"rgb(70,70,70)",disabledBackground:"rgb(150,150,150)"}},logoColor:"#fff"},b)),p=Object(h.a)(Object(g.a)({palette:{background:{default:"#DEBA9D"},primary:{main:"#9E7777",contrastText:"#000"},secondary:{main:"#6F4C5B",contrastText:"rgb(230,230,230)"},text:{primary:"#000",secondary:"rgb(30,30,30)"},action:{disabled:"rgb(70,70,70)",disabledBackground:"rgb(150,150,150)"}},backgroundSecondary:{bg:"#6F4C5B",text:"rgb(230,230,230) "},logoColor:"#6F4C5B"},b)),m=t(83),v=t(3),w=function(){var e=Object(v.f)().pathname;return Object(o.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},x=t(23),O=t(2),k=Object(o.lazy)((function(){return Promise.all([t.e(4),t.e(7)]).then(t.bind(null,209))})),y=Object(o.lazy)((function(){return t.e(6).then(t.bind(null,217))})),S=Object(o.lazy)((function(){return Promise.all([t.e(2),t.e(9)]).then(t.bind(null,211))})),W=Object(o.lazy)((function(){return Promise.all([t.e(5),t.e(8)]).then(t.bind(null,218))})),F=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{}),Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{exact:!0,path:"/",component:k}),Object(O.jsx)(v.a,{path:"*",component:y})]}),Object(O.jsx)(W,{})]})},C=a.a.createContext({isDarkMode:!0,setIsDarkMode:function(){}});var z=function(){var e=Object(o.useState)(!1),n=Object(f.a)(e,2),t=n[0],a=n[1];return Object(o.useEffect)((function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?a(!0):a(!1)}),[]),Object(O.jsx)(x.a,{children:Object(O.jsx)(o.Suspense,{fallback:Object(O.jsx)("div",{children:"laoding..."}),children:Object(O.jsx)(C.Provider,{value:{isDarkMode:t,setIsDarkMode:a},children:Object(O.jsxs)(u.a,{theme:t?j:p,children:[Object(O.jsx)(m.a,{}),Object(O.jsx)(w,{}),Object(O.jsx)(F,{})]})})})})},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=function(e){e&&e instanceof Function&&t.e(10).then(t.bind(null,206)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),o(e),a(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-single-page-smooth-scroll",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/React-single-page-smooth-scroll","/service-worker.js");B?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(n,e)}))}}(),P()}},[[65,1,3]]]);
//# sourceMappingURL=main.e3da9ec3.chunk.js.map