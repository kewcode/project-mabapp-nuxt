(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{248:function(t,e,o){"use strict";o.r(e);o(52),o(21),o(22),o(12),o(107);var l=o(2),r=o(246),n=o.n(r);o(247);l.default.use(n.a);var d={scrollToTop:!0,layout:"no-header",middleware:"auth",props:["showModalDefault","group","hiddenbottom","umum"],data:function(){return{modal_quest:!1,showModal:"",d:{},img:{width:320,height:320},imgTemp:null}},created:function(){this.$props.showModalDefault&&(this.modal_quest=!0)},methods:{cropImg:function(){var t=this;this.imgTemp&&(this.d.img=this.imgTemp.generateDataUrl(),console.log(this.d.img),this.showModal="",this.$nextTick((function(){return t.$refs.inputTextArea.focus()})))},showModalQuest:function(source){var t=this;"img"==source?this.showModal="img":"sp"==source&&(this.showModal="sp",this.$nextTick((function(){return t.$refs.inputSP.focus()}))),"yt"==source&&(this.showModal="yt",this.$nextTick((function(){return t.$refs.inputYT.focus()})))},createNew:function(){var t=this;this.modal_quest=!0,this.$nextTick((function(){return t.$refs.inputTextArea.focus()}))},cekSumber:function(t){if(t){if(t.search("spotify")>0)return"spotify";if(t.search("youtu.be")>0)return"youtube"}},textToArray:function(text){return text.toString().split(" ")},getUrl:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),o="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t))o="https://www.youtube.com/embed/"+t.split("/")[3];else o="";return o}return""},kirim:function(){var t=this;this.group&&(this.d.group_id=this.group.id),this.d.embed=this.getUrl(this.d.embed),this.$axios.$post("/quest",this.d).then((function(e){t.$router.push("/quest/"+e.id)}))}}},c=o(11),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full p-2"},[o("div",{class:t.$store.state.topMenu?"":"hidden"},[t.hiddenbottom?t._e():o("button",{staticClass:" bg-primary text-secondary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 ",on:{click:t.createNew}},[o("svg",{staticClass:"bi bi-plus-circle",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v(" "),o("span",{staticClass:"hidden lg:block px-2"},[t._v(" Buat Quest")])])]),t._v(" "),t.modal_quest?o("section",{staticClass:"mx-auto flex flex-wrap  z-30 fixed top-0"},[t.hiddenbottom?t._e():o("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){t.modal_quest=!1}}}),t._v(" "),o("div",{staticClass:"w-full content-start max-w-xl flex flex-wrap justify-center z-50 overflow-y-scroll bg-theme_primary rounded-xl p-4",staticStyle:{height:"90vh"}},[t.d.video?o("div",{staticClass:"rounded-xl w-full"},[o("video",{attrs:{width:"100%",controls:"",autoplay:""}},[o("source",{attrs:{src:t.d.video,type:"video/mp4"}}),t._v("\n          Your browser does not support the video tag.\n        ")])]):t._e(),t._v(" "),t.d.img?o("div",{staticClass:"w-full"},[o("img",{staticClass:"w-full rounded-xl",attrs:{src:t.d.img}})]):t._e(),t._v(" "),t.d.embed?o("div",{staticClass:"w-full pb-4 videoWrapper"},["spotify"==t.cekSumber(t.d.embed)?o("iframe",{attrs:{src:t.getUrl(t.d.embed),width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}):t._e(),t._v(" "),"youtube"==t.cekSumber(t.d.embed)?o("iframe",{attrs:{width:"560",height:"315",src:t.getUrl(t.d.embed),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),t.group?o("h1",{staticClass:"p-2 font-bold"},[t._v("\n      Kirim Ke Group : #"+t._s(t.group.username)+"\n    ")]):t._e(),t._v(" "),t.umum?t._e():o("div",{staticClass:"w-full flex"},[o("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"type"}},[t._v("Type")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.d.type,expression:"d.type"}],staticClass:"w-full\n      shadow-sm bg-theme_primary_light\n      py-2 px-4 \n      rounded-lg mb-3\n      ",attrs:{placeholder:"Type"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.d,"type",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",selected:""}},[t._v("Umum")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("Pertanyaan ")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("Event")]),t._v(" "),o("option",{attrs:{value:"3"}},[t._v("Donasi")]),t._v(" "),o("option",{attrs:{value:"4"}},[t._v("Katalog")]),t._v(" "),o("option",{attrs:{value:"5"}},[t._v("Loker")])])]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.d.text,expression:"d.text"}],ref:"inputTextArea",staticClass:"bg-theme_primary_dark w-full rounded-lg p-4 mt-3 h-48",attrs:{placeholder:"Katakan sesuatu ..."},domProps:{value:t.d.text},on:{click:function(e){t.showModal=""},input:function(e){e.target.composing||t.$set(t.d,"text",e.target.value)}}}),t._v(" "),o("div",{staticClass:"flex w-full my-5 "},[o("span",{staticClass:"px-2"},[t._v("Upload Dari :")]),t._v(" "),o("div",{staticClass:"ml-8 cursor-pointer text-primary",on:{click:function(e){return t.showModalQuest("img")}}},[o("svg",{staticClass:"w-7 h-8 bi bi-card-image",attrs:{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}})])]),t._v(" "),o("img",{staticClass:"ml-8 cursor-pointer w-8 h-8",attrs:{src:"/youtube.png"},on:{click:function(e){return t.showModalQuest("yt")}}}),t._v(" "),o("img",{staticClass:"ml-8 cursor-pointer w-8 h-8",attrs:{src:"/spotify.png"},on:{click:function(e){return t.showModalQuest("sp")}}})]),t._v(" "),o("button",{staticClass:" py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n      Kirim\n    ")]),t._v(" "),t.hiddenbottom?o("button",{staticClass:" py-2 w-full rounded-lg mt-2 bg-secondary text-primary shadow-sm",on:{click:function(e){return t.$router.back()}}},[t._v("\n      Batalkan\n    ")]):o("button",{staticClass:" py-2 w-full rounded-lg mt-2 bg-secondary text-primary shadow-sm",on:{click:function(e){t.modal_quest=!1}}},[t._v("\n      Batalkan\n    ")]),t._v(" "),t.showModal?o("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-end lg:content-conter z-30 right-0 "},[o("div",{staticClass:"w-full  flex flex-wrap justify-center content-end lg:content-conter bg-theme_primary_dark opacity-50 z-40 right-0 h-screen ",on:{click:function(e){t.showModal=""}}}),t._v(" "),o("div",{staticClass:"w-full  justify-center flex flex-wrap z-50 content-end lg:content-conter bg-theme_primary rounded-xl p-5 mx-auto absolute bottom-0 mb-32",staticStyle:{"z-index":"1000000"}},["yt"==t.showModal?o("div",{staticClass:"w-full flex flex-wrap"},[o("h1",{staticClass:"font-bold p-2"},[t._v("Paste Youtube Share Link")]),t._v(" "),o("span",{staticClass:"text-danger ml-auto",on:{click:function(e){t.showModal=""}}},[t._v("Tutup")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.embed,expression:"d.embed"}],ref:"inputYT",staticClass:"  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Link Youtube contoh: 'https://youtu.be/hH6hI5grCms'",type:"text"},domProps:{value:t.d.embed},on:{input:function(e){e.target.composing||t.$set(t.d,"embed",e.target.value)}}})]):t._e(),t._v(" "),"sp"==t.showModal?o("div",{staticClass:"w-full flex flex-wrap"},[o("h1",{staticClass:"font-bold p-2"},[t._v("Paste Spotify Podcast Link")]),t._v(" "),o("span",{staticClass:"text-danger ml-auto",on:{click:function(e){t.showModal=""}}},[t._v("Tutup")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.embed,expression:"d.embed"}],ref:"inputSP",staticClass:"  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Spotify Podcast Link contoh: 'https://open.spotify.com/episode/1IJCl8993xjDNdIKR5EVVE?si=K4XrGBSrS12Kcjh3ZHOMZA'",type:"text"},domProps:{value:t.d.embed},on:{input:function(e){e.target.composing||t.$set(t.d,"embed",e.target.value)}}})]):t._e(),t._v(" "),"img"==t.showModal?o("div",{staticClass:"w-full flex flex-wrap"},[o("h1",{staticClass:"font-bold p-2"},[t._v("Coming Soon")]),t._v(" "),o("span",{staticClass:"text-danger ml-auto",on:{click:function(e){t.showModal=""}}},[t._v("Tutup")]),t._v(" "),o("div",{staticClass:"w-full text-center"},[o("croppa",{staticClass:"shadow-sm rounded-lg bg-primary",attrs:{"prevent-white-space":"",width:t.img.width,height:t.img.height,quality:1,placeholder:"Upload Foto"},model:{value:t.imgTemp,callback:function(e){t.imgTemp=e},expression:"imgTemp"}}),t._v(" "),o("br"),t._v(" "),t.imgTemp?o("button",{staticClass:"bg-primary px-4 py-2 rounded-lg text-secondary",on:{click:t.cropImg}},[t._v("\n                Crop & Simpan\n              ")]):t._e()],1)]):t._e()])]):t._e()])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,o){"use strict";o.r(e);var l={scrollToTop:!0,layout:"no-header",middleware:"auth"},r=o(11),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("new-quest",{attrs:{showModalDefault:"true",hiddenbottom:"true"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NewQuest:o(248).default})}}]);