(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var l=i[o];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"023c":function(t,e,i){},"034f":function(t,e,i){"use strict";i("85ec")},"04a9":function(t,e,i){},"121f":function(t,e,i){},"217f":function(t,e,i){"use strict";i("703d")},2480:function(t,e,i){"use strict";i("ef9e")},"29d4":function(t,e,i){"use strict";i("2f620")},"2f620":function(t,e,i){},"2f7e":function(t,e,i){},4150:function(t,e,i){},4935:function(t,e,i){"use strict";i("04a9")},"49ed":function(t,e,i){"use strict";i("4150")},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],r={name:"App",methods:{setStylePropertyVh(){const t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",t+"px")}},mounted(){this.setStylePropertyVh(),window.addEventListener("resize",this.setStylePropertyVh)},beforeUnmount(){window.removeEventListener("resize",this.setStylePropertyVh)}},o=r,l=(i("034f"),i("2877")),c=Object(l["a"])(o,a,n,!1,null,null,null),u=c.exports,m=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view home"},[i("div",{staticClass:"center"},[i("b",[t._v(t._s(t.$i18n("welcome")))]),i("router-link",{staticClass:"create-story",attrs:{to:"/story"}},[t._v(t._s(t.$i18n("btn-create")))])],1)])},h=[],p={name:"Home"},f=p,g=(i("cccb"),Object(l["a"])(f,d,h,!1,null,null,null)),b=g.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view story"},[t.canPublish?i("PrimaryButton",{staticClass:"publish-button",attrs:{text:t.$i18n("btn-next"),onClick:t.onPublish}}):t._e(),i("CurrentFrame"),i("Frames"),i("SearchToolbar")],1)},y=[],C=i("2f62"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"current-frame",style:t.currentFrame.style},[t.currentFrame.text?i("p",{domProps:{innerHTML:t._s(t.currentFrame.text)}}):t._e(),i("ImageAttribution")],1)},_=[],S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.attributionReady?i("div",{staticClass:"image-attribution"},[i("div",{staticClass:"image-attribution-info"},[t._l(t.presentLicenses,(function(t){return i("div",{key:t,class:"image-attribution-info-"+t.toLowerCase()})})),i("bdi",{staticClass:"image-attribution-info-author",domProps:{innerHTML:t._s(t.currentFrame.imgAttribution.author||t.$i18n("unknown-author"))}})],2),i("div",{staticClass:"image-attribution-more-info"},[i("a",{staticClass:"image-attribution-more-info-link",attrs:{href:t.currentFrame.imgAttribution.url,target:"_blank"}})])]):t._e()},k=[],x={name:"ImageAttribution",data:()=>({licenseTypes:["CC","BY","SA","Fair","Public"]}),computed:{...Object(C["c"])(["currentFrame"]),presentLicenses:function(){return this.licenseTypes.filter(t=>-1!==this.currentFrame.imgAttribution.license.indexOf(t))},attributionReady:function(){return this.currentFrame.imgAttribution}}},I=x,F=(i("9c37"),Object(l["a"])(I,S,k,!1,null,"4c8f6900",null)),T=F.exports,P={name:"CurrentFrame",components:{ImageAttribution:T},computed:Object(C["c"])(["currentFrame"])},$=P,A=(i("a2f2"),Object(l["a"])($,w,_,!1,null,"667bdeb8",null)),L=A.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"frames"},[t._l(t.thumbnails,(function(e){return i("div",{key:e.id,staticClass:"frame",class:{"selected-frame":e.selected},style:e.style,on:{click:function(i){return t.selectFrame(e.id)}}})})),i("div",{staticClass:"frame btn-add-frame",on:{click:t.addFrame}},[t._v("+")])],2)},j=[],D={name:"Frames",computed:Object(C["c"])(["thumbnails"]),methods:Object(C["b"])(["selectFrame","addFrame"])},E=D,q=(i("2480"),Object(l["a"])(E,O,j,!1,null,null,null)),B=q.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-toolbar"},[i("router-link",{staticClass:"commons logo",attrs:{to:"/searchcommons"}},[t._v(t._s(t.$i18n("wikimedia-commons")))]),i("div",{staticClass:"border"}),i("router-link",{staticClass:"wikipedia logo",attrs:{to:"/searchwikipedia"}},[t._v(t._s(t.$i18n("wikipedia")))])],1)},N=[],R={name:"SearchToolbar"},M=R,V=(i("29d4"),Object(l["a"])(M,W,N,!1,null,"d23ff7cc",null)),H=V.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"primary-button",attrs:{name:"button"},on:{click:t.onClick}},[t._v(t._s(t.text))])},z=[],Q={name:"PrimaryButton",props:["text","onClick"]},J=Q,G=(i("9131"),Object(l["a"])(J,U,z,!1,null,"fa2cd3ac",null)),X=G.exports,Y={name:"Story",components:{CurrentFrame:L,Frames:B,SearchToolbar:H,PrimaryButton:X},methods:{...Object(C["b"])(["setCreationDate","fetchImgAttribution"]),onPublish:function(){this.setCreationDate(),this.$router.push({name:"Publish"})}},computed:{...Object(C["c"])(["currentFrame","storyLength","valid","attributionData"]),canPublish:function(){return this.valid&&this.currentFrame.id===this.storyLength}},mounted:function(){const t=this.attributionData.find(t=>""!==t.title&&!t.attribution);t&&this.fetchImgAttribution({id:t.id,title:t.title})}},K=Y,Z=(i("217f"),i("a51b"),Object(l["a"])(K,v,y,!1,null,"358dc198",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"viewer",style:t.currentFrame.style,on:{mousedown:t.togglePause,touchstart:t.beginPause,touchend:t.endPause}},[i("ProgressBar",{attrs:{isPaused:t.isPaused,frameDuration:t.frameDuration}}),t.currentFrame.text?i("div",{class:{"story-text":!0,cover:0===t.currentFrame.id},domProps:{innerHTML:t._s(t.currentFrame.text)}}):t._e(),i("ImageAttribution"),t.storyEnd?i("div",{staticClass:"restart-btn",on:{click:t.restartStory}},[t._v(t._s(t.$i18n("btn-restart-story")))]):t._e()],1)},it=[],st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"progress-container"},t._l(t.storyViewerLength,(function(e){return i("div",{key:e,staticClass:"progress"},[i("div",{class:{loading:t.currentFrame.id===e-1,paused:t.isPaused,loaded:t.currentFrame.id>e-1},style:{animationDuration:t.animationDuration}})])})),0)},at=[],nt={name:"ProgressBar",props:["frameDuration","isPaused"],computed:{...Object(C["c"])(["currentFrame","storyLength","storyViewerLength"]),animationDuration:function(){return this.frameDuration/1e3+"s"}}},rt=nt,ot=(i("d041"),Object(l["a"])(rt,st,at,!1,null,"45544df0",null)),lt=ot.exports,ct={name:"StoryViewer",data:()=>({frameDuration:6e3,frameStarting:null,frameRemaining:null,storyEnd:!1,currentTimeout:null,isPaused:!1}),components:{ImageAttribution:T,ProgressBar:lt},computed:Object(C["c"])(["currentFrame","storyLength"]),methods:{...Object(C["b"])(["selectFrame"]),setFrameTimeout:function(t){const e=this.frameRemaining?this.frameRemaining:this.frameDuration;this.frameStarting=Date.now(),this.currentTimeout=setTimeout(()=>{t(),this.frameRemaining=null,this.frameStarting=null},e)},playNextFrame:function(){const t=()=>this.selectFrame(this.currentFrame.id+1);this.setFrameTimeout(t)},restartStory:function(){this.storyEnd=!1,this.selectFrame(0),this.frameRemaining=null,this.frameStarting=null},endStory:function(){const t=()=>this.storyEnd=!0;this.setFrameTimeout(t)},isPauseAction:function(t){const e="restart-btn"===t.target.className;return!e&&!this.storyEnd},beginPause:function(t){this.frameRemaining=this.frameDuration-Math.abs(this.frameStarting-Date.now()),this.isPauseAction(t)&&(t.preventDefault(),t.stopPropagation(),clearTimeout(this.currentTimeout),this.isPaused=!0)},endPause:function(t){this.isPauseAction(t)&&(t.preventDefault(),t.stopPropagation(),this.isPaused=!1)},togglePause:function(t){this.isPauseAction(t)&&(this.isPaused?this.endPause(t):this.beginPause(t))}},beforeMount:function(){this.currentFrame.id>0&&this.restartStory()},mounted:function(){this.currentFrame.id<this.storyLength&&this.playNextFrame()},updated:function(){this.currentFrame.id<this.storyLength&&!this.isPaused?this.playNextFrame():this.storyEnd||this.isPaused||this.endStory()}},ut=ct,mt=(i("be89"),Object(l["a"])(ut,et,it,!1,null,"5fe02e6c",null)),dt=mt.exports,ht=function(){var t=this,e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"view search-wp"},[s("Navigator",{attrs:{onBack:function(){return t.$router.push({name:"Story"})}}}),s("SearchForm",{attrs:{label:e.$i18n("search-box"),placeholder:e.$i18n("search-box"),query:e.query,loading:e.loading,onInput:e.onInput,onClear:e.onClear}}),s("ListView",{attrs:{items:e.results}})],1)},pt=[],ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"listview"},t._l(t.items,(function(e){return i("div",{key:e.title,staticClass:"item"},[i("router-link",{attrs:{to:e.goto}},[i("div",{staticClass:"img",style:{backgroundImage:"url("+e.thumb+")"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v(t._s(e.title))]),i("div",{staticClass:"description"},[t._v(t._s(e.desc))])])])],1)})),0)},gt=[],bt={name:"ListView",props:["items"]},vt=bt,yt=(i("6675"),Object(l["a"])(vt,ft,gt,!1,null,"7d4bd75e",null)),Ct=yt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(e){return t.onSubmit(e)}}},[i("div",{staticClass:"label"},[t._v(t._s(t.label))]),i("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"query",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.query},on:{input:t.onInput}}),i("div",{staticClass:"icon"}),t.query?i("div",{staticClass:"close",on:{click:t.onClear}}):t._e(),t.loading?i("div",{staticClass:"loading-bar"}):t._e()])},_t=[],St={name:"SearchForm",props:["label","placeholder","query","loading","onInput","onClear"],methods:{onSubmit:t=>t.preventDefault()}},kt=St,xt=(i("750c"),Object(l["a"])(kt,wt,_t,!1,null,"1f210da8",null)),It=xt.exports,Ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navigator"},[t.onBack?i("div",{staticClass:"back",on:{click:t.onBack}}):t._e(),t.onNext?i("div",{staticClass:"next",on:{click:t.onNext}},[t._v(t._s(t.$i18n("btn-next")))]):t._e(),t.info?i("span",{staticClass:"info"},[t._v(t._s(t.info))]):t._e()])},Tt=[],Pt={name:"Navigator",props:["onBack","onNext","info"]},$t=Pt,At=(i("49ed"),Object(l["a"])($t,Ft,Tt,!1,null,"880b1412",null)),Lt=At.exports,Ot={name:"SearchWikipedia",components:{ListView:Ct,SearchForm:It,Navigator:Lt},methods:{...Object(C["b"])("search",["search","clear"]),onInput:function(t){t.preventDefault(),this.search(t.target.value)},onClear:function(t){t.preventDefault(),this.clear()}},computed:Object(C["c"])("search",["loading","results","query"])},jt=Ot,Dt=(i("884e"),Object(l["a"])(jt,ht,pt,!1,null,null,null)),Et=Dt.exports,qt=function(){var t=this,e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"view search-cm"},[s("Navigator",{attrs:{onBack:function(){return t.$router.push({name:"Story"})},onNext:e.selection.length&&e.editStory,info:e.selection.length&&e.$i18n("search-media-info",e.selection.length)}}),s("SearchForm",{attrs:{label:e.$i18n("search-media"),placeholder:e.$i18n("search-media"),query:e.query,loading:e.loading,onInput:e.onInput,onClear:e.onClear}}),s("ImageListView",{attrs:{items:e.results,onItemSelect:e.onItemSelect,selected:e.selection}})],1)},Bt=[],Wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"imagelistview"},[i("div",{staticClass:"imagelistview__list-wrapper"},[i("div",{staticClass:"imagelistview__list"},t._l(t.items,(function(e){return i("div",{key:e.id,staticClass:"imagelistview__list-image",style:{width:e.width+"px"},attrs:{"data-id":e.id},on:{click:t.onSelect}},[i("img",{attrs:{src:e.thumb,alt:e.title,loading:"lazy"}}),i("div",{class:{checkbox:!0,selected:t.selected.includes(e.id)}})])})),0)])])},Nt=[],Rt={name:"ImageListView",props:["items","onItemSelect","selected"],methods:{onSelect(t){const e=t.target.getAttribute("data-id")||t.target.parentElement.getAttribute("data-id");this.selected.includes(e)?this.selected.splice(this.selected.indexOf(e),1):this.selected.push(e),this.onItemSelect(this.selected)}}},Mt=Rt,Vt=(i("b78b"),Object(l["a"])(Mt,Wt,Nt,!1,null,"0bcf1f81",null)),Ht=Vt.exports,Ut={name:"SearchWikipedia",components:{ImageListView:Ht,SearchForm:It,Navigator:Lt},methods:{...Object(C["b"])("commons",["select","search","clear"]),...Object(C["b"])(["resetFrame"]),onInput:function(t){t.preventDefault(),this.search(t.target.value)},onClear:function(t){t.preventDefault(),this.clear()},onItemSelect:function(t){this.select(t)},editStory:function(){const t=this.selection.map((t,e)=>{const i=this.results.find(e=>e.id===t);return{id:e+1,img:i.thumb,text:i.desc,imgTitle:i.title,attribution:i.attribution}});this.resetFrame(t),this.$router.push({name:"Story"})}},computed:Object(C["c"])("commons",["selection","loading","results","query"])},zt=Ut,Qt=(i("f207"),Object(l["a"])(zt,qt,Bt,!1,null,null,null)),Jt=Qt.exports,Gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view"},[i("Back"),i("div",{staticClass:"article",domProps:{innerHTML:t._s(t.currentArticle.html)}}),i("div",{staticClass:"toolbar",style:t.selectionToolbarStyle},[i("div",{on:{touchstart:t.onUseText,mousedown:t.onUseText}},[t._v(t._s(t.$i18n("btn-highlight")))]),i("div",{on:{click:t.onDismiss}},[t._v(t._s(t.$i18n("btn-clear")))])]),t.showImages?i("div",{staticClass:"article-overlay",on:{click:t.dismissImages}}):t._e(),t.showImages?i("ArticleImages",{staticClass:"images",attrs:{images:t.articleImages,onSubmit:t.onUseImage}}):t._e()],1)},Xt=[],Yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back",on:{click:function(e){return t.$router.go(-1)}}})},Kt=[],Zt={name:"Back"},te=Zt,ee=(i("8637"),Object(l["a"])(te,Yt,Kt,!1,null,"9a398128",null)),ie=ee.exports,se=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article-images"},[i("div",{staticClass:"article-images-header"},[i("span",[t._v(t._s(t.$i18n("btn-select-image")))]),t.selectedImage?i("a",{on:{click:function(e){return t.onSubmit(t.selectedImage)}}},[t._v(t._s(t.$i18n("btn-next")))]):t._e()]),i("div",{staticClass:"article-images-thumbs"},t._l(t.images,(function(e){return i("img",{key:e.id,staticClass:"article-image-thumb",class:{selected:t.selectedImage===e},attrs:{src:e.src},on:{click:function(i){return t.selectImage(e)}}})})),0)])},ae=[],ne={name:"ArticleImages",props:["images","onSubmit"],data:()=>({selectedImage:null}),methods:{selectImage:function(t){this.selectedImage=t}}},re=ne,oe=(i("c452"),Object(l["a"])(re,se,ae,!1,null,null,null)),le=oe.exports,ce={name:"Article",props:["article"],components:{Back:ie,ArticleImages:le},data:()=>({selectionToolbarStyle:{display:"none",position:"absolute"},selectedText:null,showImages:!1,images:[]}),computed:{...Object(C["c"])(["currentArticle"]),articleImages:function(){return this.currentArticle.media.map((t,e)=>({src:t.srcset[0].src,id:e}))}},methods:{...Object(C["b"])(["fetchArticle","fetchArticleMedia","setText","setImg","setImgTitle"]),setToolbarDisplay:function(t){this.selectionToolbarStyle.display!==t&&(this.selectionToolbarStyle.display=t)},showSelectionToolbar:function(){this.setToolbarDisplay("flex")},hideSelectionToolbar:function(){this.setToolbarDisplay("none")},onSelectionChange:function(){const t=document.getSelection();t.isCollapsed?this.hideSelectionToolbar():(this.selectedText=t.toString(),this.showSelectionToolbar())},onUseText:function(t){t.preventDefault(),t.stopPropagation(),this.hideSelectionToolbar(),this.showImages=!0},onUseImage:function(t){const e=this.currentArticle.media[t.id].title;this.setImgTitle(e),this.setText(this.selectedText),this.setImg(t.src),this.$router.push({name:"Story"})},dismissImages:function(){this.showImages=!1},onDismiss:function(){this.hideSelectionToolbar()}},created:function(){this.fetchArticle(this.article),this.fetchArticleMedia(this.article)},mounted(){document.addEventListener("selectionchange",this.onSelectionChange)},beforeUnmount(){document.removeEventListener("selectionchange",this.onSelectionChange)}},ue=ce,me=(i("4935"),Object(l["a"])(ue,Gt,Xt,!1,null,null,null)),de=me.exports,he=function(){var t=this,e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"view publish"},[s("Navigator",{attrs:{onBack:function(){return t.$router.push({name:"Story"})}}}),s("div",{class:{header:!0,error:e.isFormError}},[s("h2",{ref:"title",staticClass:"title",attrs:{contenteditable:"true",placeholder:e.$i18n("publish-edit-title-placeholder"),autofocus:""},on:{input:e.onInput}}),s("div",{staticClass:"img-preview",style:e.imgSyle}),e.isFormError?s("p",{staticClass:"msg"},[e._v(e._s(e.$i18n("publish-edit-error-msg")))]):e._e()]),s("div",{staticClass:"main"},[s("div",{staticClass:"item"},[s("label",{staticClass:"label"},[e._v(e._s(e.$i18n("publish-date")))]),s("p",{staticClass:"info"},[e._v(e._s(e._f("formatDate")(e.storyInfo.creationDate)))])]),s("div",{staticClass:"item"},[s("label",{staticClass:"tags"},[e._v(e._s(e.$i18n("publish-tags")))]),s("p",{staticClass:"info"},[e._v(e._s(e.$i18n("tags-not-set")))])]),s("div",{staticClass:"item"},[s("label",{staticClass:"Language"},[e._v(e._s(e.$i18n("publish-language")))]),s("p",{staticClass:"info"},[e._v("English")])])]),s("PrimaryButton",{staticClass:"confirm-publish",attrs:{text:e.$i18n("btn-publish-wikistory"),onClick:e.onPublish}})],1)},pe=[],fe={name:"Publish",components:{Navigator:Lt,PrimaryButton:X},data:()=>({title:"",isFormError:null}),methods:{...Object(C["b"])(["updateStoryTitle"]),onPublish:function(){this.title.trim()?(this.updateStoryTitle(this.title.trim()),this.$router.push({name:"StoryViewer"})):(this.$refs.title.focus(),this.isFormError=!0)},onInput(t){this.title=t.target.innerText,null!==this.isFormError&&(this.isFormError=!this.title.trim())}},computed:{...Object(C["c"])(["thumbnails","storyInfo"]),imgSyle:function(){return this.thumbnails[0].style}}},ge=fe,be=(i("dfdd"),Object(l["a"])(ge,he,pe,!1,null,"3d201b98",null)),ve=be.exports;s["a"].use(m["a"]);const ye=[{path:"/",name:"Home",component:b},{path:"/story",name:"Story",component:tt},{path:"/searchwikipedia",name:"SearchWikipedia",component:Et},{path:"/searchcommons",name:"SearchCommons",component:Jt},{path:"/article/:article",name:"Article",component:de,props:!0},{path:"/publish",name:"Publish",component:ve},{path:"/viewer",name:"StoryViewer",component:dt}],Ce=new m["a"]({routes:ye});var we=Ce;const _e=new URL(location.href).searchParams.get("lang")||"en",Se=_e,ke=t=>{const e=(new window.DOMParser).parseFromString(t,"text/html");for(const i of e.querySelectorAll("span"))"none"===i.style.display&&i.remove();return e.body.textContent||""},xe=t=>t.replace(/https:\/\/(.*?)\./,t=>t+"m."),Ie=5,Fe=t=>t.img?{backgroundImage:"url("+t.img+")",backgroundPosition:"center",backgroundSize:"cover"}:{background:"linear-gradient(338.27deg, #0BD564 -70.53%, #3366CC 71.84%)"};var Te={state:{storyTitle:null,creationDate:null,currentFrameId:1,frames:[{id:1,img:null,text:"",imgTitle:"",attribution:null}]},mutations:{selectFrame:(t,e)=>t.currentFrameId=e,addFrame:t=>{if(t.frames.length===Ie)return;const e=t.frames.length+1;t.frames.push({text:"",img:"",imgTitle:"",id:e,attribution:null}),t.currentFrameId=e},resetFrame:(t,e)=>{t.currentFrameId=e.length,t.frames=e},setText:(t,e)=>{const i=t.frames.find(e=>e.id===t.currentFrameId);i.text=e},setImg:(t,e)=>{const i=t.frames.find(e=>e.id===t.currentFrameId);i.img=e},setImgTitle:(t,e)=>{const i=t.frames.find(e=>e.id===t.currentFrameId);i.imgTitle=e},setImgAttribution:(t,e)=>{const i=t.frames.find(t=>t.id===e.id);i.attribution=e},setCreationDate:(t,e)=>{t.creationDate=e},updateStoryTitle:(t,e)=>{t.storyTitle=e}},actions:{selectFrame:({commit:t},e)=>{t("selectFrame",e)},addFrame:({commit:t})=>{t("addFrame")},resetFrame:({commit:t},e)=>{t("resetFrame",e)},setText:({commit:t},e)=>{t("setText",e)},setImg:({commit:t},e)=>{t("setImg",e)},setImgTitle:({commit:t},e)=>{t("setImgTitle",e)},updateStoryTitle:({commit:t},e)=>{t("updateStoryTitle",e)},fetchImgAttribution:async({commit:t},e)=>{const i=`https://${Se}.wikipedia.org/w/api.php?format=json&formatversion=2&origin=*&action=query&prop=imageinfo&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist&iiextmetadatalanguage=en&iiextmetadatamultilang=1&iiprop=url%7Cextmetadata&titles=${encodeURIComponent(e.title)}`,s=await(await fetch(i)).text(),a=JSON.parse(s),n=a.query.pages[0].imageinfo[0];if(n){const{Artist:i,LicenseShortName:s}=n.extmetadata,a={author:i?ke(i.value):"",url:xe(n.descriptionshorturl),license:s&&s.value,id:e.id};t("setImgAttribution",a)}},setCreationDate:({commit:t})=>{t("setCreationDate",(new Date).getTime())}},getters:{thumbnails:t=>t.frames.map(e=>{const i={...e};return e.id===t.currentFrameId&&(i.selected=!0),i.style=Fe(e),i}),currentFrame:t=>{const e=0===t.currentFrameId,i=e?t.frames[0]:t.frames.find(e=>e.id===t.currentFrameId);return{text:e?t.storyTitle:i.text,style:Fe(i),noImage:""===i.img,id:t.currentFrameId,imgAttribution:i.attribution,imgTitle:e?t.storyTitle:i.imgTitle}},storyLength:t=>t.frames.length,storyViewerLength:t=>t.frames.length+1,storyInfo:t=>({title:t.storyTitle,creationDate:t.creationDate}),valid:t=>t.frames.length>=2&&t.frames.every(t=>t.img&&t.text),attributionData:t=>t.frames.map(t=>({id:t.id,title:t.imgTitle,attribution:t.attribution}))}};let Pe=[];const $e=()=>{Pe.forEach(t=>t&&t.abort()),Pe=[]},Ae=(t,e)=>{$e();const i=new XMLHttpRequest;i.open("GET",t),i.send(),i.addEventListener("load",()=>{e(JSON.parse(i.responseText))}),i.addEventListener("error",()=>{e(null,i.status)}),Pe.push(i)};var Le={namespaced:!0,state:{loading:!1,results:[],query:""},mutations:{setLoading:(t,e)=>t.loading=e,setQuery:(t,e)=>t.query=e,setResults:(t,e)=>t.results=e},actions:{search:({commit:t},e)=>{const i=e.trim(),s=`https://${Se}.wikipedia.org/w/rest.php/v1/search/title?q=${i}&limit=10`;if(t("setQuery",e),!i)return $e(),t("setLoading",!1),void t("setResults",[]);t("setLoading",!0),Ae(s,e=>{e.pages&&t("setResults",Object.values(e.pages).map(t=>({title:t.title,desc:t.description,thumb:t.thumbnail&&t.thumbnail.url,goto:{name:"Article",params:{article:t.title}}}))),t("setLoading",!1)})},clear:({commit:t})=>{$e(),t("setLoading",!1),t("setResults",[]),t("setQuery","")}},getters:{loading:t=>t.loading,results:t=>t.results,query:t=>t.query}},Oe={namespaced:!0,state:{selection:[],loading:!1,results:[],query:""},mutations:{setSelection:(t,e)=>t.selection=e,setLoading:(t,e)=>t.loading=e,setQuery:(t,e)=>t.query=e,setResults:(t,e)=>t.results=e},actions:{search:({commit:t},e)=>{const i=e.trim(),s=`https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&uselang=${_e}&generator=search&gsrsearch=filetype%3Abitmap%7Cdrawing%20${i}&gsrlimit=40&gsroffset=0&gsrinfo=totalhits%7Csuggestion&gsrprop=snippet&prop=imageinfo&gsrnamespace=6&iiprop=url%7Cextmetadata&iiurlheight=180&iiextmetadatafilter=License%7CLicenseShortName%7CImageDescription%7CArtist&iiextmetadatalanguage=${_e}`;if(t("setQuery",e),!i)return $e(),t("setSelection",[]),t("setLoading",!1),void t("setResults",[]);t("setLoading",!0),Ae(s,e=>{if(e.query&&e.query.pages){const i=Object.values(e.query.pages).sort((t,e)=>t.index-e.index);t("setResults",i.map(t=>{const e=t.imageinfo[0],i=e.responsiveUrls&&Object.values(e.responsiveUrls)[0],s=e.extmetadata,a=s&&s.ImageDescription&&s.ImageDescription.value,{Artist:n,LicenseShortName:r}=e.extmetadata;return{id:t.pageid.toString(),title:t.title,desc:a||t.snippet,thumb:i||e.url,width:e.thumbwidth,attribution:{author:n?ke(n.value):"",url:xe(e.descriptionshorturl),license:r&&r.value}}}))}t("setSelection",[]),t("setLoading",!1)})},clear:({commit:t})=>{$e(),t("setSelection",[]),t("setLoading",!1),t("setResults",[]),t("setQuery","")},select:({commit:t},e)=>{t("setSelection",e)}},getters:{selection:t=>t.selection,loading:t=>t.loading,results:t=>t.results,query:t=>t.query}};const je={"put styles in body":t=>{for(const e of t.head.querySelectorAll('link[rel="stylesheet"]'))t.body.prepend(e)},"remove stuff":t=>{const e=["table",".pcs-collapse-table-container","script","sup"];for(const i of t.querySelectorAll(e.join(",")))i.remove()},"unhide sections":t=>{for(const e of t.querySelectorAll("section"))e.style.display="block"},"remove links":t=>{let e;for(const i of t.querySelectorAll("a"))e=t.createElement("span"),e.innerHTML=i.innerHTML,i.replaceWith(e)},"load images":t=>{for(const e of t.querySelectorAll("span[data-src]"))if(e){let i=t.createElement("img");i.src=e.getAttribute("data-src"),i.classList.add("pcs-widen-image-override"),i.classList.add("pcs-lazy-load-image-loaded"),e.replaceChildren(i)}else e.remove()}};var De={state:{article:{title:"",html:""}},mutations:{setArticle:({article:t},{title:e,html:i})=>{t.title=e,t.html=i},setArticleMedia:({article:t},{media:e})=>{t.media=e}},actions:{fetchArticle:async({commit:t},e)=>{const i=`https://${Se}.wikipedia.org/api/rest_v1/page/mobile-html/${e}`,s=await(await fetch(i)).text(),a=(new DOMParser).parseFromString(s,"text/html");Object.values(je).forEach(t=>t(a)),t("setArticle",{title:e,html:a.body.outerHTML})},fetchArticleMedia:({commit:t},e)=>{const i=`https://${Se}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(e)}`;Ae(i,e=>{const i=e.items.reduce((t,e)=>e.showInGallery&&"image"===e.type?t.concat(e):t,[]);i&&t("setArticleMedia",{media:i})})}},getters:{currentArticle:({article:t})=>t}};s["a"].use(C["a"]);var Ee=new C["a"].Store({modules:{story:Te,search:Le,article:De,commons:Oe}});s["a"].directive("focus",{inserted:function(t){t.focus()}}),s["a"].filter("formatDate",(function(t){if(t)return new Date(t).toLocaleString()}));var qe=i("5093"),Be=i.n(qe),We={welcome:"Welcome to Wikistories","btn-create":"Create a story","btn-restart-story":"Start again","search-box":"Search Wikipedia","search-media":"Search Media","search-media-info":"$1 selected","wikimedia-commons":"Commons",wikipedia:"Wikipedia","btn-publish-wikistory":"Publish Wikistory","btn-highlight":"Highlight","btn-clear":"Clear","btn-select-image":"Select an image","btn-next":"Next","publish-edit-title-placeholder":"Give your story a title","publish-edit-error-msg":"Enter story title","publish-date":"Date","publish-tags":"Tags","publish-language":"Language","tags-not-set":"Not set yet","unknown-author":"Author unknown"},Ne={welcome:"Bienvenue sur les Wikistoires","btn-create":"Creer une histoire","btn-restart-story":"Recommencer","search-box":"Recherche dans Wikipédia","search-media":"Recherche de Média","search-media-info":"$1 {{PLURAL:$1|selectionné|selectionnés}}","wikimedia-commons":"Commons",wikipedia:"Wikipédia","btn-publish-wikistory":"Publier la Wikistoire","btn-highlight":"Surligner","btn-clear":"Annuler","btn-select-image":"Selectionnez une image","btn-next":"Suivant","publish-edit-title-placeholder":"Donnez un title à votre histoire","publish-edit-error-msg":"Veuillez entrer un title pour votre histoire","publish-date":"Date","publish-tags":"Mots clés","publish-language":"Langue","tags-not-set":"Non definies"},Re={welcome:"Welcome to Wikistories","btn-create":"Buat cerita","btn-restart-story":"mulai dari awal","search-box":"Cari di wikipedia","search-media":"Cari media","search-media-info":"$1 dipilih","wikimedia-commons":"Commons",wikipedia:"Wikipedia","btn-publish-wikistory":"Publikasikan Wikistory","btn-highlight":"Sorot teks","btn-clear":"Hapus pilihan","btn-select-image":"Pilih gambar","btn-next":"Lanjut","publish-edit-title-placeholder":"Beri judul ceritamu","publish-edit-error-msg":"Masukkan judul cerita","publish-date":"Tanggal","publish-tags":"Tags","publish-language":"Bahasa","tags-not-set":"Belum disetel"},Me={welcome:"歡迎光臨 Wikistories","btn-create":"創建故事","btn-restart-story":"重新開始","search-box":"搜尋維基百科","search-media":"搜尋媒體","search-media-info":"$1 選擇","wikimedia-commons":"維基共享資源",wikipedia:"維基百科","btn-publish-wikistory":"發佈 Wikistory","btn-highlight":"Highlight","btn-clear":"移除","btn-select-image":"選擇圖片","btn-next":"下一步","publish-edit-title-placeholder":"為你的 Story 取一個標題","publish-edit-error-msg":"輸入 Story 標題","publish-date":"日期","publish-tags":"標簽","publish-language":"語言","tags-not-set":"尚未設定"},Ve={welcome:"Bienvenido a Wikistories","btn-create":"Crea una historia","btn-restart-story":"Empezar de nuevo","search-box":"Buscar en Wikipedia","search-media":"Buscar en Commons","search-media-info":"$1 seleccionado","wikimedia-commons":"Commons",wikipedia:"Wikipedia","btn-publish-wikistory":"Publica tu Wikistory","btn-highlight":"Resaltar","btn-clear":"Cancelar","btn-select-image":"Selecciona una imagen","btn-next":"Sigue","publish-edit-title-placeholder":"Ponle un titulo a tu historia","publish-edit-error-msg":"Agregar titulo","publish-date":"Fecha","publish-tags":"Etiquetas","publish-language":"Idioma","tags-not-set":"Todavia no disponible"},He={welcome:"Bemvindo a Wikistories","btn-create":"Crie uma historia","btn-restart-story":"Começar de novo","search-box":"Pesquisar Wikipedia","search-media":"Pesquisar Commons","search-media-info":"$1 selecionado","wikimedia-commons":"Commons",wikipedia:"Wikipedia","btn-publish-wikistory":"Poste a sua Wikistory","btn-highlight":"Realçar","btn-clear":"Cancerlar","btn-select-image":"Selecione uma imagem","btn-next":"Segue","publish-edit-title-placeholder":"Dê um título à sua história","publish-edit-error-msg":"Insira o título da história","publish-date":"Data","publish-tags":"Etiquetas","publish-language":"Idioma","tags-not-set":"Não disponivel ainda"};s["a"].use(Be.a,{locale:_e,messages:{en:We,fr:Ne,id:Re,zh:Me,es:Ve,pt:He}}),s["a"].config.productionTip=!1,new s["a"]({router:we,store:Ee,render:t=>t(u)}).$mount("#app")},5801:function(t,e,i){},"5ced":function(t,e,i){},6675:function(t,e,i){"use strict";i("023c")},"703d":function(t,e,i){},"750c":function(t,e,i){"use strict";i("7581")},7581:function(t,e,i){},"77fa":function(t,e,i){},"7be0":function(t,e,i){},"85ec":function(t,e,i){},8637:function(t,e,i){"use strict";i("5801")},"884e":function(t,e,i){"use strict";i("ba7b")},8855:function(t,e,i){},9131:function(t,e,i){"use strict";i("2f7e")},"9c37":function(t,e,i){"use strict";i("f31b")},a048:function(t,e,i){},a2f2:function(t,e,i){"use strict";i("b1f0")},a51b:function(t,e,i){"use strict";i("8855")},a8b7:function(t,e,i){},b1f0:function(t,e,i){},b78b:function(t,e,i){"use strict";i("a048")},b9c8:function(t,e,i){},ba7b:function(t,e,i){},be89:function(t,e,i){"use strict";i("77fa")},c452:function(t,e,i){"use strict";i("a8b7")},cccb:function(t,e,i){"use strict";i("5ced")},d041:function(t,e,i){"use strict";i("121f")},dfdd:function(t,e,i){"use strict";i("b9c8")},ef9e:function(t,e,i){},f207:function(t,e,i){"use strict";i("7be0")},f31b:function(t,e,i){}});
//# sourceMappingURL=app.b69e74aa.js.map