(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{262:function(t,e,l){var r=l(6),o=l(163)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},271:function(t,e,l){"use strict";l.r(e);var r={props:["name"],data:function(){return{activeClass:"mx-1 pr-3 py-2  text-primary rounded-full font-bold",nonActiveClass:"pr-3 mx-1 py-2  border-primary  font-bold"}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mb-10 w-full"},[l("div",{staticClass:"text-sm flex fixed top-0 z-10 bg-theme_primary w-full mx-auto pt-2 px-3",staticStyle:{"max-width":"600px"}},[l("nuxt-link",{class:t.$route.path.includes(t.name)&&!t.$route.path.includes(t.name+"-explore")?t.activeClass:t.nonActiveClass,attrs:{to:t.localePath("/profile")}},[l("img",{staticClass:"w-6 h-6 rounded-full",attrs:{src:t.$store.state.user.avatar,alt:"Avatar"}})]),t._v(" "),l("nuxt-link",{class:t.$route.path.includes(t.name)&&!t.$route.path.includes(t.name+"-explore")?t.activeClass:t.nonActiveClass,attrs:{to:t.localePath("/"+t.name)}},[t._v("\r\n            "+t._s(t.$t("Followed"))+"\r\n            ")]),t._v(" "),l("nuxt-link",{class:t.$route.path.includes(t.name+"-explore")?t.activeClass:t.nonActiveClass,attrs:{to:t.localePath("/"+t.name+"-explore")}},[t._v("\r\n            "+t._s(t.$t("Explore"))+"\r\n            ")]),t._v(" "),l("nuxt-link",{staticClass:" mx-1 ml-auto py-2 font-bold mt-1",attrs:{to:t.localePath("/msg")}},[l("svg",{staticClass:"bi bi-chat-dots",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"}}),t._v(" "),l("path",{attrs:{d:"M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,l){"use strict";l.r(e);var r={props:["group","follow","totalFollower"],data:function(){return{followTemp:!1}},methods:{followGroup:function(t){var e=this;this.$axios.get("/group/follow/"+t).then((function(t){e.followTemp=!0}))}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.group?l("div",{staticClass:"w-full"},[l("nuxt-link",{staticClass:"w-full p-2 relative flex  border-b border-theme_primary_light",attrs:{to:t.localePath("/"+t.group.username)}},[l("div",{staticClass:"w-full flex flex-wrap shadow-sm bg-theme_primary hover:bg-theme_primary_dark rounded-xl px-2 lg:py-2 "},[l("div",{staticClass:"w-full font-bold flex px-2 pt-4 "},[l("img",{staticClass:"w-12 h-12  rounded-full",attrs:{src:t.group.avatar,alt:t.group.name}}),t._v(" "),l("div",{staticClass:"w-full pl-3 mt-1 flex flex-wrap items-start"},[l("div",{staticClass:"w-full lg:text-lg"},[t._v("\n        "+t._s(t.group.name)+"\n          "),l("br"),t._v(" "),l("div",{staticClass:" flex w-full justify-between"},[l("small",{staticClass:"text-xs"},[t._v("#"+t._s(t.group.username))]),t._v(" "),t.follow?l("div",{staticClass:"text-xs"},[t.group.followed?l("span",{staticClass:"cursor-pointer bg-theme_primary_light text-primary px-4 py-1 rounded-full"},[t._v("\n                          Diikuti\n                      ")]):l("div",[t.followTemp?t._e():l("span",{staticClass:"cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary",on:{click:function(e){return t.followGroup(t.group.id)}}},[t._v("\n                            Ikuti\n                        ")]),t._v(" "),t.followTemp?l("span",{staticClass:"fursor-pointer bg-theme_primary_light text-primary px-4 py-1 rounded-full"},[t._v("\n                          Diikuti\n                      ")]):t._e()])]):t._e(),t._v(" "),t.totalFollower?l("div",{staticClass:"text-xs"},[l("span",{staticClass:"cursor-pointer bg-theme_primary_light text-primary px-4 py-1 rounded-full"},[t._v("\n                          "+t._s(t.group.follow_total)+" Pengikut\n                      ")])]):t._e()])])])]),t._v(" "),l("small",{staticClass:"w-full font-semibold px-4 text-xs py-3 flex"},[l("span",{staticClass:"text-primary"},[t._v(" "+t._s(t.group.type))]),t._v(" "),l("span",{staticClass:"text-primary px-2"},[t._v(" ( "+t._s(t.group.university)+" ) ")]),t._v(" "),l("nuxt-link",{staticClass:"ml-auto text-primary text-xs mt-1 px-3 rounded-full",attrs:{to:t.localePath("/"+t.group.username)}},[t._v("\n        Lihat "+t._s(t.group.total_qna)+" Quest\n      ")])],1)])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports},707:function(t,e,l){"use strict";l.r(e);var r={props:["link","name"]},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{class:t.$store.state.topMenu?"":"hidden"},[l("nuxt-link",{staticClass:"bg-theme_primary_dark text-primary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 ",attrs:{to:t.localePath("/new/group")}},[l("svg",{staticClass:"bi bi-plus-circle",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v(" "),l("span",{staticClass:"hidden lg:block text-xs px-2"},[t._v(" "+t._s(t.name))])])],1)}),[],!1,null,null,null);e.default=component.exports},715:function(t,e,l){"use strict";l.r(e);l(22),l(12),l(262);var r={layout:"no-header",middleware:"auth",data:function(){return{listGroup:""}},created:function(){var t=this;this.$axios.$get("/mygroup").then((function(e){t.listGroup=t.sortByKey(Object.values(e),"last_active").reverse(),0==t.listGroup.length&&t.$router.push(t.localePath("/groups-explore"))}))},methods:{swipeHandler:function(t){"right"==t?this.$router.push("/feed"):"left"==t&&this.$router.push("/groups-explore")},sortByKey:function(t,e){return t.sort((function(a,b){var t=a[e],l=b[e];return t<l?-1:t>l?1:0}))},to:function(t){"left"==t&&this.$router.push(this.localePath("/groups-explore"))}}},o=l(11),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:this.swipeHandler,expression:"swipeHandler",arg:"swipe"}],staticClass:"w-full min-h-screen"},[e("subheader",{attrs:{name:"groups"}}),this._v(" "),e("section",{staticClass:"w-full rounded-xl pb-20"},this._l(this.listGroup,(function(t){return e("card-group",{key:t.id,attrs:{group:t,totalFollower:"true"}})})),1),this._v(" "),e("btn-create",{attrs:{link:"/new/group",name:"Buat Group"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Subheader:l(271).default,CardGroup:l(286).default,BtnCreate:l(707).default})}}]);