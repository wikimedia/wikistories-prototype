(function(e){function t(t){for(var a,s,c=t[0],o=t[1],l=t[2],m=0,p=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,c=1;c<r.length;c++){var o=r[c];0!==n[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"217f":function(e,t,r){"use strict";r("703d")},2480:function(e,t,r){"use strict";r("ef9e")},"2c35":function(e,t,r){"use strict";r("e689")},"561e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],s={name:"App"},c=s,o=(r("034f"),r("2877")),l=Object(o["a"])(c,n,i,!1,null,null,null),u=l.exports,m=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view home"},[r("div",{staticClass:"center"},[r("b",[e._v(e._s(e.$i18n("welcome")))]),r("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[e._v(e._s(e.$i18n("btn-create")))])],1)])},d=[],f={name:"Home"},h=f,g=(r("cccb"),Object(o["a"])(h,p,d,!1,null,null,null)),b=g.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view story"},[r("CurrentFrame"),r("Frames")],1)},y=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"current-frame",style:e.currentFrame.style},[e.currentFrame.noImage?r("router-link",{staticClass:"btn-search-wiki",attrs:{to:"/searchwikipedia"}},[e._v("Search Wikipedia")]):e._e(),e.currentFrame.text?r("p",[e._v(e._s(e.currentFrame.text))]):e._e()],1)},w=[],k=r("2f62"),j={name:"CurrentFrame",computed:Object(k["c"])(["currentFrame"])},x=j,F=(r("2c35"),Object(o["a"])(x,_,w,!1,null,null,null)),O=F.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frames"},[e._l(e.thumbnails,(function(t){return r("div",{key:t.id,staticClass:"frame",class:{"selected-frame":t.selected},style:t.style,on:{click:function(r){return e.selectFrame(t.id)}}})})),r("div",{staticClass:"frame btn-add-frame",on:{click:e.addFrame}},[e._v("+")])],2)},C=[],T={name:"Frames",computed:Object(k["c"])(["thumbnails"]),methods:Object(k["b"])(["selectFrame","addFrame"])},A=T,P=(r("2480"),Object(o["a"])(A,S,C,!1,null,null,null)),q=P.exports,W={name:"Story",components:{CurrentFrame:O,Frames:q}},$=W,M=(r("217f"),Object(o["a"])($,v,y,!1,null,null,null)),E=M.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view search-wp"},[r("form",{on:{submit:function(t){return e.onSubmit(t,e.query)}}},[r("h3",[e._v("Search Wikipedia")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Search Wikipedia"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),r("input",{attrs:{type:"submit"}})]),r("div",{staticClass:"results"},e._l(e.searchResults,(function(t){return r("div",{key:t.title,staticClass:"result"},[r("router-link",{attrs:{to:{name:"BrowseArticle",params:{article:t.title}}}},[r("img",{attrs:{src:t.thumb}}),r("div",[e._v(e._s(t.title))]),r("div",[e._v(e._s(t.desc))])])],1)})),0)])},B=[],H={name:"SearchWikipedia",data:()=>({query:""}),methods:{...Object(k["b"])(["search"]),onSubmit:function(e,t){e.preventDefault(),this.search(t)}},computed:Object(k["c"])(["searchResults"])},L=H,R=(r("884e"),Object(o["a"])(L,I,B,!1,null,null,null)),V=R.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view article",domProps:{innerHTML:e._s(e.currentArticle)},on:{click:e.onClick}})},D=[],J={name:"BrowseArticle",props:["article"],computed:Object(k["c"])(["currentArticle"]),methods:{...Object(k["b"])(["fetchArticle"]),onClick:({target:e})=>{"P"===e.tagName&&e.classList.toggle("selected-text")}},created:function(){this.fetchArticle(this.article)}},N=J,U=(r("adc4"),Object(o["a"])(N,z,D,!1,null,null,null)),G=U.exports;a["a"].use(m["a"]);const K=[{path:"/",name:"Home",component:b},{path:"/story",name:"Story",component:E},{path:"/searchwikipedia",name:"SearchWikipedia",component:V},{path:"/article/:article",name:"BrowseArticle",component:G,props:!0}],Q=new m["a"]({routes:K});var X=Q;const Y=5,Z=e=>e.img?{backgroundImage:"url("+e.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"};var ee={state:{currentFrameId:1,frames:[{id:1,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bandhavgarh_Tigers.jpg/640px-Bandhavgarh_Tigers.jpg",text:"Bandhavgarh Tigers"},{id:2,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/White_Tiger_in_Touroparc.jpg/640px-White_Tiger_in_Touroparc.jpg",text:"White Tiger in Touroparc"},{id:3,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TigerVector.png/640px-TigerVector.png",text:"Taken from the Coat of arms of Vladivostok and modified."}]},mutations:{selectFrame:(e,t)=>e.currentFrameId=t,addFrame:e=>{if(e.frames.length===Y)return;const t=e.frames.length+1;e.frames.push({text:"",img:"",id:t}),e.currentFrameId=t}},actions:{selectFrame:({commit:e},t)=>{e("selectFrame",t)},addFrame:({commit:e})=>{e("addFrame")}},getters:{thumbnails:e=>e.frames.map(t=>{const r={...t};return t.id===e.currentFrameId&&(r.selected=!0),r.style=Z(t),r}),currentFrame:e=>{const t=e.frames.find(t=>t.id===e.currentFrameId);return{text:t.text,style:Z(t),noImage:""===t.img}}}},te={state:{results:[]},mutations:{setSearchResults:(e,t)=>e.results=t},actions:{search:async({commit:e},t)=>{const r="https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch&prop=description|pageimages|pageprops&piprop=thumbnail&ppprop=displaytitle&redirects=false&pithumbsize=64&gpslimit=10&gpsnamespace=0&format=json&formatversion=2&origin=*&gpssearch="+t,a=await(await fetch(r)).json();e("setSearchResults",Object.values(a.query.pages).map(e=>({title:e.title,desc:e.description,thumb:e.thumbnail&&e.thumbnail.source})))}},getters:{searchResults:e=>e.results}},re={state:{article:{title:"",html:""}},mutations:{setArticle:({article:e},{title:t,html:r})=>{e.title=t,e.html=r}},actions:{fetchArticle:async({commit:e},t)=>{const r="https://en.wikipedia.org/api/rest_v1/page/mobile-html/"+t,a=await(await fetch(r)).text(),n=(new DOMParser).parseFromString(a,"text/html");for(const s of n.querySelectorAll("table,script"))s.remove();for(const s of n.querySelectorAll("section"))s.style.display="block";for(const s of n.querySelectorAll("p"))s.style.position="unset";let i;for(const s of n.querySelectorAll("a"))i=n.createElement("span"),i.innerHTML=s.innerHTML,s.replaceWith(i);e("setArticle",{title:t,html:n.body.outerHTML})}},getters:{currentArticle:({article:e})=>e.html}};a["a"].use(k["a"]);var ae=new k["a"].Store({modules:{story:ee,search:te,article:re}}),ne=r("5093"),ie=r.n(ne),se={welcome:"Welcome to Wikistories","btn-create":"Create a story"},ce={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire"};const oe=()=>new URL(location.href).searchParams.get("lang")||"en";a["a"].use(ie.a,{locale:oe(),messages:{en:se,fr:ce}}),a["a"].config.productionTip=!1,new a["a"]({router:X,store:ae,render:e=>e(u)}).$mount("#app")},"5ced":function(e,t,r){},"703d":function(e,t,r){},"85ec":function(e,t,r){},"884e":function(e,t,r){"use strict";r("ba7b")},adc4:function(e,t,r){"use strict";r("561e")},ba7b:function(e,t,r){},cccb:function(e,t,r){"use strict";r("5ced")},e689:function(e,t,r){},ef9e:function(e,t,r){}});
//# sourceMappingURL=app.543bce69.js.map