(function(e){function t(t){for(var o,r,l=t[0],i=t[1],u=t[2],c=0,p=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},s=[];function l(e){return i.p+"js/"+({donations:"donations",events:"events","explore-groups":"explore-groups","explore-qna":"explore-qna",groups:"groups",index:"index",layout:"layout",login:"login","new-donation":"new-donation","new-event":"new-event","new-group~new-qna":"new-group~new-qna","new-group":"new-group","new-qna":"new-qna",profile:"profile",qna:"qna",users:"users"}[e]||e)+"."+{donations:"8b13849b",events:"d762a703","explore-groups":"376b69de","explore-qna":"a7241f22",groups:"91517d3b",index:"cdf1c52b",layout:"49fb19e6",login:"828d9f5a","new-donation":"3a549ec5","new-event":"0bf6013f","new-group~new-qna":"4f3a1059","new-group":"d0f8c936","new-qna":"9bde092b",profile:"7252ed82",qna:"51dd5eec",users:"6b49c86a"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={layout:1,"new-group~new-qna":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({donations:"donations",events:"events","explore-groups":"explore-groups","explore-qna":"explore-qna",groups:"groups",index:"index",layout:"layout",login:"login","new-donation":"new-donation","new-event":"new-event","new-group~new-qna":"new-group~new-qna","new-group":"new-group","new-qna":"new-qna",profile:"profile",qna:"qna",users:"users"}[e]||e)+"."+{donations:"31d6cfe0",events:"31d6cfe0","explore-groups":"31d6cfe0","explore-qna":"31d6cfe0",groups:"31d6cfe0",index:"31d6cfe0",layout:"777d04b9",login:"31d6cfe0","new-donation":"31d6cfe0","new-event":"31d6cfe0","new-group~new-qna":"b9470b6f","new-group":"31d6cfe0","new-qna":"31d6cfe0",profile:"31d6cfe0",qna:"31d6cfe0",users:"31d6cfe0"}[e]+".css",a=i.p+o,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var u=s[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===a))return t()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){u=p[l],c=u.getAttribute("data-href");if(c===o||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0842":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s={watch:{$route(e,t){this.$store.commit("toggleLeftMenu","")}}},l=s,i=n("2877"),u=Object(i["a"])(l,r,a,!1,null,null,null),c=u.exports,p=n("9483");Object(p["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n("8c4f");const m=[{path:"/login",name:"Welcom to ICollege",meta:{title:"Welcom to ICollege"},component:function(){return n.e("login").then(n.bind(null,"6ecd"))}},{path:"/",component:function(){return n.e("layout").then(n.bind(null,"ed3a"))},children:[{path:"",name:"Home",meta:{title:"Home "},component:function(){return n.e("index").then(n.bind(null,"1e4b"))}},{path:"users",name:"Users",meta:{title:"Users ",auth:!0,admin:!0},component:function(){return n.e("users").then(n.bind(null,"b987"))}},{path:"profile",name:"Profile",meta:{title:"My Profile "},component:function(){return n.e("profile").then(n.bind(null,"fab5"))}},{path:"events",name:"Events",meta:{title:"Events - Conference"},component:function(){return n.e("events").then(n.bind(null,"03f6"))}},{path:"new/event",name:"New Event",meta:{title:"New Event - Registration"},component:function(){return n.e("new-event").then(n.bind(null,"b565"))}},{path:"donations",name:"Donations",meta:{title:"Donations"},component:function(){return n.e("donations").then(n.bind(null,"664d"))}},{path:"new/donation",name:"New Donation",meta:{title:"New Donation - Registration"},component:function(){return n.e("new-donation").then(n.bind(null,"85f9"))}},{path:"groups",name:"Groups",meta:{title:"Groups"},component:function(){return n.e("groups").then(n.bind(null,"eefb"))}},{path:"groups/explore",name:"Explore Groups",meta:{title:"Explore Groups"},component:function(){return n.e("explore-groups").then(n.bind(null,"80cf"))}},{path:"new/group",name:"New Group",meta:{title:"New Group - Registration"},component:function(){return Promise.all([n.e("new-group~new-qna"),n.e("new-group")]).then(n.bind(null,"0214"))}},{path:"Q&A",name:"Q&A",meta:{title:"Q&A"},component:function(){return n.e("qna").then(n.bind(null,"a233"))}},{path:"Q&A/explore",name:"Explore Q&A",meta:{title:"Explore Qna"},component:function(){return n.e("explore-qna").then(n.bind(null,"90fd"))}},{path:"new/qna",name:"New qna",meta:{title:"New qna - Registration"},component:function(){return Promise.all([n.e("new-group~new-qna"),n.e("new-qna")]).then(n.bind(null,"26a1"))}}]}];var g=n("2f62"),f=n("bc3a"),h=n.n(f);o["a"].use(g["a"]);var w=new g["a"].Store({state:{api:"http://192.168.1.100:8000/api/",auth:localStorage.getItem("auth")||!1,user:JSON.parse(localStorage.getItem("user"))||"",access_token:localStorage.getItem("access_token")||"",errorMessages:"",leftMenu:"",showAuth:!1,settings:!1,theme:localStorage.getItem("theme")||"theme-dark-blue",primaryColor:localStorage.getItem("primary-color")||"primary-green",topMenu:"my",listMenu:[{name:"Dashboards",admin:!0,path:"/"},{name:"Controls",path:"",admin:!0,sub:[{name:"Users",path:"/users"},{name:"Groups",path:"/groups"},{name:"Events",path:"/events"},{name:"Donations",path:"/doncations"}]},{name:"Transactions",path:"",admin:!0,sub:[{name:"Events",path:"/transactions/events"},{name:"Donations",path:"/transactions/donations"}]}]},mutations:{setTopMenuTo(e,t){e.topMenu=t},setErrorMessages(e,t){e.errorMessages=t},toggleLeftMenu(e,t){e.leftMenu=t},setTheme(e,t){e.theme=t,localStorage.setItem("theme",t)},setPrimaryColor(e,t){e.primaryColor=t,localStorage.setItem("primary-color",t)},toggleSetting(e,t){e.settings?e.settings=!1:e.settings=!0},toggleShowAuth(e,t){e.showAuth?e.showAuth=!1:e.showAuth=!0},login(e,t){h.a.post(e.api+"login",t).then(t=>{console.log(t.data),t.data.user?(localStorage.setItem("auth",!0),localStorage.setItem("user",JSON.stringify(t.data.user)),localStorage.setItem("access_token",t.data.access_token),e.auth=!0,e.user=t.data.user,e.access_token=t.data.access_token,e.showAuth=!1,e.errorMessages="",location.href="/"):e.errorMessages=t.data.message}).catch(t=>{console.log(t.response.data.message),e.errorMessages=t.response.data.message})},loginfb(e,t){h.a.post(e.api+"loginfb",t).then(t=>{t.data.user?(localStorage.setItem("auth",!0),localStorage.setItem("user",JSON.stringify(t.data.user)),localStorage.setItem("access_token",t.data.access_token),e.auth=!0,e.user=t.data.user,e.access_token=t.data.access_token,e.showAuth=!1,e.errorMessages="",location.href="/"):e.errorMessages=t.data.message}).catch(e=>{})},logout(){localStorage.clear(),location.href="/login"}},actions:{},modules:{}});o["a"].use(d["a"]);const v=new d["a"]({routes:m,scrollBehavior(e,t,n){return n||{x:0,y:0}}});v.beforeEach((e,t,n)=>{e.meta.auth&&(w.state.auth?e.meta.admin&&(w.state.user.admin?n():n("/")):n("/"));const o=e.matched.slice().reverse().find(e=>e.meta&&e.meta.title),r=e.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);t.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);if(o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(e=>e.parentNode.removeChild(e)),!r)return n();r.meta.metaTags.map(e=>{const t=document.createElement("meta");return Object.keys(e).forEach(n=>{t.setAttribute(n,e[n])}),t.setAttribute("data-vue-router-controlled",""),t}).forEach(e=>document.head.appendChild(e)),n()});var b=v,y=(n("0842"),n("0086")),q=n.n(y);o["a"].use(q.a),o["a"].config.productionTip=!1,new o["a"]({router:b,store:w,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.7b01bbf3.js.map