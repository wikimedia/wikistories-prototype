(function(e){function t(t){for(var a,s,c=t[0],o=t[1],l=t[2],m=0,p=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,c=1;c<r.length;c++){var o=r[c];0!==i[o]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},i={app:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"217f":function(e,t,r){"use strict";r("703d")},2480:function(e,t,r){"use strict";r("ef9e")},"2c35":function(e,t,r){"use strict";r("e689")},"561e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],s={name:"App"},c=s,o=(r("034f"),r("2877")),l=Object(o["a"])(c,i,n,!1,null,null,null),u=l.exports,m=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view home"},[r("div",{staticClass:"center"},[r("b",[e._v(e._s(e.$i18n("welcome")))]),r("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))])],1)])},d=[],f={name:"Home"},h=f,b=(r("cccb"),Object(o["a"])(h,p,d,!1,null,null,null)),g=b.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view story"},[r("CurrentFrame"),r("Frames")],1)},y=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.noImage?r("router-link",{staticClass:"btn-search-wiki",attrs:{to:"/searchwikipedia"}},[e._v("Search Wikipedia")]):e._e(),e.currentFrame.text?r("p",[e._v(e._s(e.currentFrame.text))]):e._e()],1)},w=[],k=r("2f62"),x={name:"CurrentFrame",computed:Object(k["c"])(["currentFrame"])},C=x,j=(r("2c35"),Object(o["a"])(C,_,w,!1,null,null,null)),F=j.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return r("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(r){return e.selectFrame(t.id)}}})})),r("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},S=[],T={name:"Frames",computed:Object(k["c"])(["thumbnails"]),methods:Object(k["b"])(["selectFrame","addFrame"])},q=T,A=(r("2480"),Object(o["a"])(q,O,S,!1,null,null,null)),P=A.exports,$={name:"Story",components:{CurrentFrame:F,Frames:P}},W=$,E=(r("217f"),Object(o["a"])(W,v,y,!1,null,null,null)),I=E.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view search-wp"},[r("form",{on:{submit:e.onSubmit}},[r("div",{staticClass:"label"},[e._v(e._s(e.$i18n("search-box")))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"query",attrs:{type:"text",placeholder:[[e.$i18n("search-box")]],required:""},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),r("input",{staticClass:"submit",attrs:{type:"submit"},domProps:{value:[[e.$i18n("search-text")]]}}),r("div",{staticClass:"icon"}),e.query?r("div",{staticClass:"close",on:{click:e.onClear}}):e._e()]),r("ListView",{attrs:{items:e.searchResults}})],1)},M=[],B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"listview"},e._l(e.items,(function(t){return r("div",{key:t.title,staticClass:"item"},[r("router-link",{attrs:{to:t.goto}},[r("div",{staticClass:"img",style:{backgroundImage:"url("+t.thumb+")"}}),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[e._v(e._s(t.title))]),r("div",{staticClass:"description"},[e._v(e._s(t.desc))])])])],1)})),0)},H=[],R={name:"ListView",props:["items"]},V=R,D=(r("f5ca"),Object(o["a"])(V,B,H,!1,null,null,null)),z=D.exports,J={name:"SearchWikipedia",components:{ListView:z},data:()=>({query:""}),methods:{...Object(k["b"])(["search"]),onSubmit:function(e){const t=this.query.trim();e.preventDefault(),this.search(t)},onClear:function(e){e.preventDefault(),this.query=""}},computed:Object(k["c"])(["searchResults"])},N=J,U=(r("884e"),Object(o["a"])(N,L,M,!1,null,null,null)),G=U.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view article",domProps:{innerHTML:e._s(e.currentArticle)},on:{click:e.onClick}})},Q=[],X={name:"BrowseArticle",props:["article"],computed:Object(k["c"])(["currentArticle"]),methods:{...Object(k["b"])(["fetchArticle"]),onClick:({target:e})=>{"P"===e.tagName&&e.classList.toggle("selected-text")}},created:function(){this.fetchArticle(this.article)}},Y=X,Z=(r("adc4"),Object(o["a"])(Y,K,Q,!1,null,null,null)),ee=Z.exports;a["a"].use(m["a"]);const te=[{path:"/",name:"Home",component:g},{path:"/story",name:"Story",component:I},{path:"/searchwikipedia",name:"SearchWikipedia",component:G},{path:"/article/:article",name:"BrowseArticle",component:ee,props:!0}],re=new m["a"]({routes:te});var ae=re;const ie=5,ne=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"};var se={state:{currentFrameId:1,frames:[{id:1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/640px-Bandhavgarh_Tigers.jpg",text:"Bandhavgarh Tigers"},{id:2,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/640px-White_Tiger_in_Touroparc.jpg",text:"White Tiger in Touroparc"},{id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/640px-TigerVector.png",text:"Taken from the Coat of arms of Vladivostok and modified."}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===ie)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")}},getters:{thumbnails:e=>e.frames.map(t=>{const r={...t};return t.id===e.currentFrameId&&(r.selected=!0),r.style=ne(t),r}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:ne(t),noImage:""===t.img}}}},ce={state:{results:[]},mutations:{setSearchResults:(e,t)=>e.results=t},actions:{search:async({commit:e},t)=>{const r="https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch&prop=description|pageimages|pageprops&piprop=thumbnail&ppprop=displaytitle&redirects=false&pithumbsize=64&gpslimit=10&gpsnamespace=0&format=json&formatversion=2&origin=*&gpssearch="+t,a=await(await fetch(r)).json();e("setSearchResults",Object.values(a.query.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.source,goto:{name:"BrowseArticle",params:{article:e.title}}})))}},getters:{searchResults:e=>e.results}},oe={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:r})=>{e.title=t,e.html=r}},actions:{fetchArticle:async({commit:e},t)=>{const r="https://en.wikipedia.org/api/rest_v1/page/mobile-html/"+t,a=await(await fetch(r)).text(),i=(new DOMParser).parseFromString(a,"text/html");for(const s of i.querySelectorAll("table,script"))s.remove();for(const s of i.querySelectorAll("section"))s.style.display="block";for(const s of i.querySelectorAll("p"))s.style.position="unset";let n;for(const s of i.querySelectorAll("a"))n=i.createElement("span"),n.innerHTML=s.innerHTML,s.replaceWith(n);e("setArticle",{title:t,html:i.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};a["a"].use(k["a"]);var le=new k["a"].Store({modules:{story:se,search:ce,article:oe}}),ue=r("5093"),me=r.n(ue),pe={welcome:"Welcome to Wikistories","btn-create":"Create a story","search-box":"Search Wikipedia","search-text":"Search"},de={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire"};const fe=()=>new URL(location.href).searchParams.get("lang")||"en";a["a"].use(me.a,{locale:fe(),messages:{en:pe,fr:de}}),a["a"].config.productionTip=!1,new a["a"]({router:ae,store:le,render:e=>e(u)}).$mount("#app")},"58e4":function(e,t,r){},"5ced":function(e,t,r){},"703d":function(e,t,r){},"85ec":function(e,t,r){},"884e":function(e,t,r){"use strict";r("ba7b")},adc4:function(e,t,r){"use strict";r("561e")},ba7b:function(e,t,r){},cccb:function(e,t,r){"use strict";r("5ced")},e689:function(e,t,r){},ef9e:function(e,t,r){},f5ca:function(e,t,r){"use strict";r("58e4")}});
//# sourceMappingURL=app.20efcecc.js.map