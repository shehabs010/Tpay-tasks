(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Tpay-task/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.b4cfa758.svg"},"1f68":function(t,e,a){},"29db":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"search-list"}},[a("header-items"),a("div",{staticClass:"container"},[a("div",{staticClass:"most__recommend--list mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 d-flex flex-wrap "},t._l(this.$store.state.SearchResultData.results,(function(t){return a("game-item",{key:t.id,attrs:{game:t,classy:"col-xl-20 col-md-4 col-sm-6 col-12"}})})),1)])])]),a("scroll-loader",{attrs:{"loader-method":t.getNextPage,"loader-enable":t.loading}})],1)},r=[],i={data:function(){return{term:""}},methods:{getNextPage:function(){this.$store.commit("gotoNextPage")}},mounted:function(){this.getNextPage()},created:function(){null!=this.term&&this.$store.commit("getSearchResult"),this.term=window.localStorage.searchTerm},watch:{$route:function(t){this.term=t.query.query,this.term=window.localStorage.searchTerm,this.$store.commit("getSearchResult")}}},n=i,c=a("2877"),o=Object(c["a"])(n,s,r,!1,null,null,null);e["default"]=o.exports},"2a97":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"most__recommend mt-5",attrs:{id:"game-list"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 white__bg"},[this.$store.state.SearchResultData.results&&this.$store.state.SearchResultData.results.length>0?a("div",{staticClass:"most__recommend--title d-flex align-items-center"},[a("h4",{staticClass:"mr-auto"},[t._v(" "+t._s(t.listName)+" ")]),a("router-link",{staticClass:"d-flex align-items-center",attrs:{to:{path:"/search"}}},[t._v("See all "),a("i",{staticClass:"icon icon-arrow"})])],1):t._e(),t.catFilterFlag?a("div",{staticClass:"most__recommend--list d-flex flex-wrap"},t._l(t.recentGames[0].slice(t.start,t.end),(function(e,s){return a("game-item",{key:s,attrs:{flag:!0,"bg-image":t.tagBgImg,game:e,classy:"col-xl-20 col-md-4 col-sm-6 col-12"}})})),1):a("div",{staticClass:"most__recommend--list d-flex flex-wrap"},t._l(t.recentGames.slice(t.start,t.end),(function(t,e){return a("game-item",{key:e,attrs:{game:t,classy:"col-xl-20 col-md-4 col-sm-6 col-12"}})})),1)])])])])},r=[],i={name:"game-list",data:function(){return{}},props:["recentGames","start","end","listName","catFilterFlag","tagBgImg"]},n=i,c=a("2877"),o=Object(c["a"])(n,s,r,!1,null,null,null);e["default"]=o.exports},5454:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return u}));var s=a("bc3a"),r=a.n(s),i={get:r.a.get,put:r.a.put,post:r.a.post,delete:r.a.delete,patch:r.a.patch},n="https://api.rawg.io/api",c=function(){return i.get("".concat(n,"/games"))},o=function(){return i.get("".concat(n,"/tags"))},l=function(t){return i.get("".concat(t))},u=function(t){return i.get("".concat(n,"/games/").concat(t))}},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"bus",(function(){return P}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],n={name:"App"},c=n,o=a("2877"),l=Object(o["a"])(c,r,i,!1,null,null,null),u=l.exports,d=a("bc3a"),m=a.n(d),g=a("2909"),f=a("2f62"),p=a("5454");s["a"].use(f["a"]);var h=window.localStorage.getItem("searchValue"),_=new f["a"].Store({state:{SearchResultData:{results:[],next:null},filters:{sortby:"relevance",type:"video"},searchInput:h},mutations:{SearchQuery:function(t,e){t.searchInput=e,window.localStorage.setItem("searchTerm",t.searchInput),this.commit("getSearchResult")},getSearchResult:function(t){t.SearchResultData.nextPageToken=null,Object(p["b"])(t.searchInput).then((function(e){t.SearchResultData=[],t.term="",t.SearchResultData=e.data})).catch((function(t){console.log(t)}))},gotoNextPage:function(t){Object(p["d"])(t.SearchResultData.next).then((function(e){var a;e.data.results.length>0&&((a=t.SearchResultData.results).push.apply(a,Object(g["a"])(e.data.results)),t.SearchResultData.next=e.data.next)}))}}}),v=a("1157"),b=a.n(v),C=a("87f4"),w=a.n(C),x=(a("f9e3"),a("1f68"),a("8c4f")),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"game-details"}},[s("header-items"),s("section",{staticClass:"category"},[t.tags&&t.tags.results&&t.tags.results.length>0?s("div",{staticClass:"category__cat--slider"},[s("carousel",{attrs:{autoWidth:!0,margin:10,autoplay:!0,nav:!1,loop:!0,dots:!1,center:!0,autoplayHoverPause:!0}},t._l(t.tags.results,(function(e,a){return s("div",{key:e.id,staticClass:"item",class:{active:t.index==a},on:{click:function(s){s.preventDefault(),t.filterByTag(e),t.addActive(a)}}},[t._v(t._s(e.name)+" "),s("i",{staticClass:"icon icon-checked",class:{active:t.index==a}})])})),0)],1):t._e()]),s("section",{staticClass:"features__games mt-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"features__games--bg"},[s("div",{staticClass:"col-12 d-flex flex-wrap px-0"},[s("div",{staticClass:"col-xl-9 col-lg-9 col-md-12 col-12 px-0"},[s("div",{staticClass:"features__games--bg-img"},[t.feature&&t.feature.background_image?s("img",{staticClass:"img-fluid",attrs:{src:t.feature.background_image,alt:""}}):s("img",{staticClass:"img-fluid",attrs:{src:a("d256"),alt:""}})])]),s("div",{staticClass:"col-xl-3 col-lg-3 col-md-12 col-12 white__bg"},[t.feature?s("div",{staticClass:"features__games--description"},[s("h2",[t._v(" "+t._s(t.feature.name)+" "),s("span",{staticClass:"slug"},[t._v(t._s(t.feature.slug))])]),t._m(0),s("span",{staticClass:"features__games--description-downloads"},[t._v(" "+t._s(t.feature.added)+"K downloads ")]),s("router-link",{staticClass:"btn btn-block features__games--description-more",attrs:{to:{path:"/game-details/"+t.feature.id}}},[t._v(" More Info ")])],1):s("div",{staticClass:"features__games--description"},[t._m(1),t._m(2),s("span",{staticClass:"features__games--description-downloads"},[t._v(" 300K downloads ")]),s("button",{staticClass:"btn btn-block features__games--description-more"},[t._v(" More Info ")])])])])])])])]),this.tagGames&&this.tagGames.length>0?s("game-list",{attrs:{tagBgImg:t.tagBgImg,catFilterFlag:!0,"recent-games":this.tagGames,start:"0",end:"5",listName:"Category Filter"}}):t._e(),s("game-list",{attrs:{"recent-games":this.$store.state.SearchResultData.results,start:"13",end:"18",listName:"Most Recommendation"}}),s("game-list",{attrs:{"recent-games":this.$store.state.SearchResultData.results,start:"15",end:"20",listName:"Most Popular"}})],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"features__games--description-text"},[a("p",[t._v("SURF the urban wave! DODGE the oncoming trains!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v(" subway surfers "),a("span",{staticClass:"slug"},[t._v(" sybo games ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"features__games--description-text"},[a("p",[t._v("SURF the urban wave! DODGE the oncoming trains!")])])}],D=(a("7db0"),a("d81d"),a("7ec7")),$=a.n(D),k={name:"home",data:function(){return{feature:{},tags:{},tagGames:[],tagBgImg:"",index:null}},components:{carousel:$.a},methods:{getFeatureData:function(){this.getAllfilterTags();var t=this.$store.state.SearchResultData.results.length;this.feature=this.$store.state.SearchResultData.results[Math.floor(Math.random()*t)]},getAllfilterTags:function(){var t=this;Object(p["c"])().then((function(e){t.tags=e.data}))},filterByTag:function(t){var e=this;if(this.tags){var a=this.tags.results.find((function(e){return e.id==t.id}));a&&(this.tagActive=!1,this.tagGames=[],this.tags.results.map((function(a){e.tagGames.push(a.games),e.tagBgImg=t.image_background,e.tagActive=!0})))}},addActive:function(t){this.index=t}},computed:{},mounted:function(){},created:function(){this.getFeatureData()},watch:{feature:function(){var t=this;window.setTimeout((function(){t.getFeatureData()}),8e3)},getAllfilterTags:function(){this.getAllfilterTags()}}},j=k,O=Object(o["a"])(j,y,S,!1,null,null,null),R=O.exports,T=a("29db"),M=a("7f20");s["a"].use(x["a"]);var G=new x["a"]({mode:"hash",base:"/Tpay-task/",routes:[{path:"",name:"search-result",component:R},{path:"/search",name:"search-result",component:T["default"]},{path:"/game-details/:id",name:"game",component:M["default"]},{path:"*",redirect:"/"}]}),I=G;window.$=window.jQuery=b.a,s["a"].use(x["a"]),s["a"].use(m.a),s["a"].use(w.a),s["a"].config.productionTip=!1;var P=new s["a"];s["a"].component("header-items",a("bd61").default),s["a"].component("game-item",a("b5b1").default),s["a"].component("game-list",a("2a97").default),s["a"].component("game-details",a("7f20").default),s["a"].component("search-result",a("29db").default),new s["a"]({router:I,store:_,render:function(t){return t(u)}}).$mount("#app")},"7f20":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"game-detials"}},[a("header-items"),a("section",{staticClass:"detail__games mt-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"detail__games--bg"},[a("div",{staticClass:"col-12 d-flex flex-wrap px-0"},[a("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-12 px-0 mb-4"},[a("div",{staticClass:"detail__games--image-wrap"},[a("img",{staticClass:"img-fluid",attrs:{src:t.pageData.background_image,alt:""}})])]),a("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-12 white__bg"},[a("div",{staticClass:"detail__games--description",class:t.read?"":"read-more"},[a("h2",[t._v(" "+t._s(t.pageData.name_original)+" "),a("span",{staticClass:"slug"},[t._v(" "+t._s(t.pageData.slug)+" ")])]),a("span",{staticClass:"detail__games--description-downloads mb-4"},[t._v(" "+t._s(t.pageData.twitch_count)+" downloads ")]),a("div",{staticClass:"detail__games--description-text"},[a("div",{domProps:{innerHTML:t._s(t.pageData.description)}})]),t.pageData&&t.pageData.clip&&t.pageData.clip.preview?a("video",{attrs:{width:"100%",poster:t.pageData.clip.preview,controls:""}},[a("source",{attrs:{src:t.pageData.clip.clips.full,type:"video/mp4"}}),a("source",{attrs:{src:t.pageData.clip.clips.full,type:"video/ogg"}})]):t._e()]),a("button",{staticClass:"btn detail__games--description-more",on:{click:function(e){return t.readMore()}}},[t._v(" "+t._s(t.readMoreText)+" ")])])])])])])]),a("game-list",{attrs:{listName:"Most Recommended","recent-games":this.$store.state.SearchResultData.results,start:"12",end:"17"}})],1)},r=[],i=a("2a97"),n=a("5454"),c={components:{GameList:i["default"]},name:"game-details",data:function(){return{id:this.$route.params.id,pageData:{},read:!0,readMoreText:"See More",recentGames:[]}},methods:{getGameDetail:function(){var t=this;Object(n["a"])(this.id).then((function(e){t.pageData=e.data,t.$store.commit("getSearchResult")}))},readMore:function(){this.read=!this.read,this.read?this.readMoreText="See More":this.readMoreText="See Less"}},created:function(){this.getGameDetail()},watch:{$route:function(t){this.id=t.params.id,window.location.reload(),this.getGameDetail()}}},o=c,l=a("2877"),u=Object(l["a"])(o,s,r,!1,null,null,null);e["default"]=u.exports},b5b1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.classy},[a("div",{staticClass:"most__recommend--list-item"},[a("div",{staticClass:"most__recommend--list-item_image"},[t.flag?a("img",{attrs:{src:t.bgImage,alt:""}}):a("img",{attrs:{src:t.game.background_image,alt:""}}),t.game.rating?a("div",{staticClass:"list-item_image--rating"},[a("i",{staticClass:"icon icon-star-rating"}),a("span",[t._v(t._s(t.game.rating))])]):t._e()]),a("div",{staticClass:"most__recommend--list-item_desc"},[a("p",[t._v(t._s(t.game.name)+" ")])]),a("router-link",{staticClass:"btn btn-block button-more",attrs:{to:{path:"/game-details/"+t.game.id}}},[t._v(" More Info ")])],1)])},r=[],i={data:function(){return{}},props:["classy","game","flag","bgImage"]},n=i,c=a("2877"),o=Object(c["a"])(n,s,r,!1,null,null,null);e["default"]=o.exports},bd61:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header__section",attrs:{id:"header-items"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-5 col-6 mr-auto"},[s("div",{staticClass:"header__section--logo d-flex"},[s("router-link",{staticClass:"d-block",attrs:{to:"/"}},[s("img",{staticClass:"img-fluid",attrs:{src:a("1ae4"),alt:""}})])],1)]),s("div",{staticClass:"col-xl-2 col-lg-2 col-md-2 col-sm-5 col-6"},[s("div",{staticClass:"header__section--search d-flex justify-content-end"},[s("a",{staticClass:"mr-4",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.show()}}},[s("i",{staticClass:"icon icon-search"})]),s("Search",{attrs:{open:t.open},on:{"update:open":function(e){t.open=e}}}),t._m(0)],1)])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[a("i",{staticClass:"icon icon-points"})])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header__section--search-popup",class:t.open?"active":""},[a("form",{staticClass:"d-flex",on:{submit:function(e){return e.preventDefault(),t.saveTermToStore()}}},[a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.closeSearch(e)}}},[a("i",{staticClass:"fas fa-times"})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t.query?a("div",{staticClass:"d-flex flex-wrap px-5 auto-complete-list justify-content-center"},t._l(t.autoCompletes,(function(t){return a("card-game",{key:t.id,attrs:{game:t}})})),1):t._e()])])},n=[],c=(a("4de4"),a("1276"),a("ac1f"),a("caad"),a("2532"),a("b0c0"),a("b5b1")),o={components:{cardGame:c["default"]},name:"search-input",data:function(){return{query:""}},props:["open"],methods:{closeSearch:function(){this.query="",this.$emit("update:open",!1)}},computed:{searchLoactStorage:function(){return this.$store.state.searchTerm},autoCompletes:function(){var t=this,e=this.$store.state.SearchResultData.results;if(this.query)var a=e.filter((function(e){return t.query.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))}));return a}},created:function(){this.$store.commit("SearchQuery")}},l=o,u=a("2877"),d=Object(u["a"])(l,i,n,!1,null,null,null),m=d.exports,g={name:"header-items",data:function(){return{open:!1}},props:[],components:{Search:m},methods:{show:function(){this.open=!0}},computed:{},watch:{},created:function(){}},f=g,p=Object(u["a"])(f,s,r,!1,null,null,null);e["default"]=p.exports},d256:function(t,e,a){t.exports=a.p+"img/feature.cba5ce9f.jpg"}});
//# sourceMappingURL=app.4e5eb195.js.map