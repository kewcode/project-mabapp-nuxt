(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{716:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),l={middleware:"noauth",data:function(){return{showModal:!1,loginWithUsername:!0,login:{username:"",password:""}}},fetch:function(){var t,s,e,n,r;window.fbAsyncInit=function(){FB.init({appId:"303728384144081",cookie:!0,xfbml:!0,version:"v7.0"}),FB.AppEvents.logPageView()},t=document,s="script",e="facebook-jssdk",r=t.getElementsByTagName(s)[0],t.getElementById(e)||((n=t.createElement(s)).id=e,n.src="https://connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(n,r))},computed:{settings:function(){return this.$store.state.theme+" "+this.$store.state.primaryColor}},methods:{cekLoginFb:function(){var t=this;FB.getLoginStatus((function(e){e.authResponse?t.$store.commit("loginfb",e.authResponse):t.loginFb()}))},loginFb:function(){var t=this;FB.login((function(e){t.$store.commit("loginfb",e.authResponse)}),{scope:"email",return_scopes:!0})},loginAct:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("login",t.login);case 2:case"end":return e.stop()}}),e)})))()}}},o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full min-h-screen flex flex-wrap justify-start  content-center ",class:t.settings},[n("loading"),t._v(" "),n("main",{staticClass:"w-full  mx-auto flex flex-wrap   px-10 pt-10",staticStyle:{"max-width":"400px"}},[t._m(0),t._v(" "),t.loginWithUsername?n("div",{staticClass:"flex w-full flex-wrap justify-start"},[t.$store.state.errorMessages?n("div",{staticClass:"bg-danger text-white w-full py-1 my-3 px-3 text-center rounded-full"},[t._v("\n         "+t._s(t.$store.state.errorMessages)+"\n       ")]):t._e(),t._v(" "),n("label",{staticClass:"w-full py-3 px-2"},[t._v("Username / Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],staticClass:" \n                       bg-theme_primary_dark\n                       py-2 px-8 \n                       rounded-full mb-3\n                       w-full\n                       ",attrs:{type:"text",placeholder:"Username / Email"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),n("label",{staticClass:"w-full py-3 px-2"},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:" \n                        bg-theme_primary_dark\n                       py-2 px-8 \n                       rounded-full mb-3\n                       w-full\n                       \n                       ",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginAct(e)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),n("button",{staticClass:"w-full  py-2 px-4 bg-primary hover:bg-primary_dark  rounded-full mt-5 text-white font-bold",on:{click:t.loginAct}},[t._v("\n         Login\n       ")])]):t._e(),t._v(" "),n("div",{staticClass:"w-full p-2 flex justify-center primary-blue bg-primary_dark rounded-full mt-2 text-white cursor-pointer",on:{click:t.cekLoginFb}},[n("img",{staticClass:"w-6 h-6",attrs:{src:"/fb-login.png",alt:"Login Fb"}}),t._v(" "),n("span",{staticClass:"px-2"},[t._v(" Login With Facebook    ")])]),t._v(" "),n("button",{staticClass:"text-theme_secondary h-12 w-full p-2 rounded-full bg-theme_primary_light mt-5",on:{click:function(e){t.showModal=!0}}},[t._v("\n       Daftar Akun Baru\n     ")]),t._v(" "),n("p",{staticClass:"w-full text-center p-2 pt-10 text-sm"},[n("a",{staticClass:"text-primary",attrs:{href:"/privacy-policy.html"}},[t._v(t._s(t.$t("tos")))])]),t._v(" "),n("nuxt-link",{staticClass:"text-center w-full  text-xs text-primary ",attrs:{to:t.localePath("/")}},[t._v("\n\n     Tentang Kami\n     ")])],1),t._v(" "),t.showModal?n("div",{staticClass:"font-bold w-screen text-center h-screen fixed top-0 right-0 p-3 rounded-lg flex justify-center items-center flex-wrap",staticStyle:{overflow:"scroll"}},[n("div",{staticClass:" opacity-75 bg-theme_primary_light absolute top-0 right-0 h-screen w-screen z-10",on:{click:function(e){t.showModal=!1}}}),t._v(" "),n("div",{staticClass:"z-20 w-full bg-theme_primary p-5 shadow-lg rounded-xl neu-out flex flex-wrap",staticStyle:{"max-width":"600px"}},[t._v("\n   Daftar Akun :\n\n   \n     "),n("button",{staticClass:"text-white font-bold h-12 w-full p-2 rounded-full bg-blue-600 hover:bg-blue-700 mt-5",on:{click:t.cekLoginFb}},[t._v("\n       Daftar dengan Facebook\n     ")]),t._v(" "),n("a",{staticClass:"text-theme_secondary h-12 w-full p-2 rounded-full bg-theme_primary_light mt-5",attrs:{href:"https://api.maba.my.id/register",target:"_BLANK"}},[t._v("\n        Daftar dengan Email\n     ")])])]):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"mx-auto bg-primary rounded-full p-1 mb-4"},[e("img",{staticClass:"w-16 h-16",attrs:{src:"/logo.png",alt:"Logo Aplikasi Maba"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:n(115).default})}}]);