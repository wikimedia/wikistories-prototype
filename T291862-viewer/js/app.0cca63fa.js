(function(e){function t(t){for(var s,i,c=t[0],o=t[1],l=t[2],m=0,p=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={app:0},n=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"217f":function(e,t,r){"use strict";r("703d")},2480:function(e,t,r){"use strict";r("ef9e")},"2c35":function(e,t,r){"use strict";r("e689")},"561e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],i={name:"App"},c=i,o=(r("034f"),r("2877")),l=Object(o["a"])(c,a,n,!1,null,null,null),u=l.exports,m=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view home"},[r("div",{staticClass:"center"},[r("b",[e._v(e._s(e.$i18n("welcome")))]),r("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))]),r("router-link",{staticClass:"view-story",attrs:{to:"/viewer"}},[e._v(e._s(e.$i18n("btn-view")))])],1)])},d=[],f={name:"Home"},h=f,g=(r("cccb"),Object(o["a"])(h,p,d,!1,null,null,null)),b=g.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view story"},[r("CurrentFrame"),r("Frames")],1)},y=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.noImage?r("router-link",{staticClass:"btn-search-wiki",attrs:{to:"/searchwikipedia"}},[e._v("Search Wikipedia")]):e._e(),e.currentFrame.text?r("p",[e._v(e._s(e.currentFrame.text))]):e._e()],1)},w=[],k=r("2f62"),x={name:"CurrentFrame",computed:Object(k["c"])(["currentFrame"])},F=x,C=(r("2c35"),Object(o["a"])(F,_,w,!1,null,null,null)),j=C.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return r("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(r){return e.selectFrame(t.id)}}})})),r("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},S=[],T={name:"Frames",computed:Object(k["c"])(["thumbnails"]),methods:Object(k["b"])(["selectFrame","addFrame"])},$=T,q=(r("2480"),Object(o["a"])($,O,S,!1,null,null,null)),A=q.exports,I={name:"Story",components:{CurrentFrame:j,Frames:A}},L=I,E=(r("217f"),Object(o["a"])(L,v,y,!1,null,null,null)),P=E.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view search-wp"},[r("form",[r("router-link",{attrs:{to:"Story"}},[r("div",{staticClass:"back"})]),r("div",{staticClass:"label"},[e._v(e._s(e.$i18n("search-box")))]),r("input",{staticClass:"query",attrs:{type:"text",placeholder:[[e.$i18n("search-box")]]},domProps:{value:e.query},on:{input:e.onInput}}),r("div",{staticClass:"icon"}),e.query?r("div",{staticClass:"close",on:{click:e.onClear}}):e._e()],1),r("ListView",{attrs:{items:e.searchResults}})],1)},M=[],V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"listview"},e._l(e.items,(function(t){return r("div",{key:t.title,staticClass:"item"},[r("router-link",{attrs:{to:t.goto}},[r("div",{staticClass:"img",style:{backgroundImage:"url("+t.thumb+")"}}),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[e._v(e._s(t.title))]),r("div",{staticClass:"description"},[e._v(e._s(t.desc))])])])],1)})),0)},R=[],B={name:"ListView",props:["items"]},H=B,N=(r("f5ca"),Object(o["a"])(H,V,R,!1,null,null,null)),D=N.exports,J={name:"SearchWikipedia",components:{ListView:D},methods:{...Object(k["b"])(["search","clear"]),onInput:function(e){e.preventDefault(),this.search(e.target.value)},onClear:function(e){e.preventDefault(),this.clear()}},computed:Object(k["c"])(["searchResults","query"])},Q=J,z=(r("884e"),Object(o["a"])(Q,W,M,!1,null,null,null)),G=z.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view article",domProps:{innerHTML:e._s(e.currentArticle)},on:{click:e.onClick}})},X=[],K={name:"BrowseArticle",props:["article"],computed:Object(k["c"])(["currentArticle"]),methods:{...Object(k["b"])(["fetchArticle"]),onClick:({target:e})=>{"P"===e.tagName&&e.classList.toggle("selected-text")}},created:function(){this.fetchArticle(this.article)}},Y=K,Z=(r("adc4"),Object(o["a"])(Y,U,X,!1,null,null,null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"viewer",style:e.currentFrame.style},[e.currentFrame.text?r("p",[e._v(e._s(e.currentFrame.text))]):e._e()])},re=[],se={name:"StoryViewer",computed:Object(k["c"])(["currentFrame"]),methods:{...Object(k["b"])(["selectFrame"]),playNextFrame:(e,t)=>{const r=setTimeout(()=>{t(e+1),clearTimeout(r)},2e3)}},mounted:function(){const e=this.$store.getters.currentFrame.frameId,t=this.$store.getters.framesLength;e<t&&this.playNextFrame(e,this.selectFrame)},updated:function(){const e=this.$store.getters.currentFrame.frameId,t=this.$store.getters.framesLength;e<t&&this.playNextFrame(e,this.selectFrame)}},ae=se,ne=(r("78b2"),Object(o["a"])(ae,te,re,!1,null,null,null)),ie=ne.exports;s["a"].use(m["a"]);const ce=[{path:"/",name:"Home",component:b},{path:"/story",name:"Story",component:P},{path:"/searchwikipedia",name:"SearchWikipedia",component:G},{path:"/article/:article",name:"BrowseArticle",component:ee,props:!0},{path:"/viewer",name:"StoryViewer",component:ie}],oe=new m["a"]({routes:ce});var le=oe;const ue=5,me=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"};var pe={state:{currentFrameId:1,frames:[{id:1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/640px-Bandhavgarh_Tigers.jpg",text:"Bandhavgarh Tigers"},{id:2,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/640px-White_Tiger_in_Touroparc.jpg",text:"White Tiger in Touroparc"},{id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/640px-TigerVector.png",text:"Taken from the Coat of arms of Vladivostok and modified."}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===ue)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")}},getters:{thumbnails:e=>e.frames.map(t=>{const r={...t};return t.id===e.currentFrameId&&(r.selected=!0),r.style=me(t),r}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:me(t),noImage:""===t.img,frameId:e.currentFrameId}},framesLength:e=>e.frames.length}};let de=[];const fe=()=>{de.forEach(e=>e&&e.abort()),de=[]},he=(e,t)=>{fe();const r=new XMLHttpRequest;r.open("GET",e),r.send(),r.addEventListener("load",()=>{t(JSON.parse(r.responseText))}),r.addEventListener("error",()=>{t(null,r.status)}),de.push(r)};var ge={state:{results:[],query:""},mutations:{setQuery:(e,t)=>e.query=t,setSearchResults:(e,t)=>e.results=t},actions:{search:({commit:e},t)=>{const r=t.trim(),s="https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch&prop=description|pageimages|pageprops&piprop=thumbnail&ppprop=displaytitle&redirects=false&pithumbsize=64&gpslimit=10&gpsnamespace=0&format=json&formatversion=2&origin=*&gpssearch="+r;if(e("setQuery",t),!r)return fe(),void e("setSearchResults",[]);he(s,t=>{t.query&&t.query.pages&&(t.query.pages.sort((e,t)=>e.index-t.index),e("setSearchResults",Object.values(t.query.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.source,goto:{name:"BrowseArticle",params:{article:e.title}}}))))})},clear:({commit:e})=>{fe(),e("setSearchResults",[]),e("setQuery","")}},getters:{searchResults:e=>e.results,query:e=>e.query}},be={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:r})=>{e.title=t,e.html=r}},actions:{fetchArticle:async({commit:e},t)=>{const r="https://en.wikipedia.org/api/rest_v1/page/mobile-html/"+t,s=await(await fetch(r)).text(),a=(new DOMParser).parseFromString(s,"text/html");for(const i of a.querySelectorAll("table,script"))i.remove();for(const i of a.querySelectorAll("section"))i.style.display="block";for(const i of a.querySelectorAll("p"))i.style.position="unset";let n;for(const i of a.querySelectorAll("a"))n=a.createElement("span"),n.innerHTML=i.innerHTML,i.replaceWith(n);e("setArticle",{title:t,html:a.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};s["a"].use(k["a"]);var ve=new k["a"].Store({modules:{story:pe,search:ge,article:be}}),ye=r("5093"),_e=r.n(ye),we={welcome:"Welcome to Wikistories","btn-create":"Create a story","btn-view":"View a story","search-box":"Search Wikipedia"},ke={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire","view-create":"Voir une histoire"};const xe=()=>new URL(location.href).searchParams.get("lang")||"en";s["a"].use(_e.a,{locale:xe(),messages:{en:we,fr:ke}}),s["a"].config.productionTip=!1,new s["a"]({router:le,store:ve,render:e=>e(u)}).$mount("#app")},"58e4":function(e,t,r){},"5ced":function(e,t,r){},"703d":function(e,t,r){},"78b2":function(e,t,r){"use strict";r("da3a")},"85ec":function(e,t,r){},"884e":function(e,t,r){"use strict";r("ba7b")},adc4:function(e,t,r){"use strict";r("561e")},ba7b:function(e,t,r){},cccb:function(e,t,r){"use strict";r("5ced")},da3a:function(e,t,r){},e689:function(e,t,r){},ef9e:function(e,t,r){},f5ca:function(e,t,r){"use strict";r("58e4")}});
//# sourceMappingURL=app.0cca63fa.js.map