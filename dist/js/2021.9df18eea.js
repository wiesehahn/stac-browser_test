"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[2021],{32021:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=function(){var t=this,e=t._self._c;return e("main",{staticClass:"select-data-source"},[e("b-form",{on:{submit:t.go}},[e("b-form-group",{attrs:{id:"select",label:t.$t("index.specifyCatalog"),"label-for":"url","invalid-feedback":t.error,state:t.valid}},[e("b-form-input",{attrs:{id:"url",type:"url",value:t.url,placeholder:"https://..."},on:{input:t.setUrl}})],1),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("index.load")))])],1),t.stacIndex.length>0?e("hr"):t._e(),t.stacIndex.length>0?e("b-form-group",{staticClass:"stac-index",scopedSlots:t._u([{key:"label",fn:function(){return[e("i18n",{attrs:{path:"index.selectStacIndex"},scopedSlots:t._u([{key:"stacIndex",fn:function(){return[e("a",{attrs:{href:"https://stacindex.org",target:"_blank"}},[t._v("STAC Index")])]},proxy:!0}],null,!1,4016002706)})]},proxy:!0}],null,!1,2418002653)},[e("b-list-group",[t._l(t.stacIndex,(function(r){return[t.show(r)?e("b-list-group-item",{key:r.id,attrs:{button:"",active:t.url===r.url},on:{click:function(e){return t.open(r.url)}}},[e("div",{staticClass:"d-flex justify-content-between align-items-baseline mb-1"},[e("strong",[t._v(t._s(r.title))]),r.isApi?e("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.$t("index.api")))]):e("b-badge",{attrs:{variant:"success"}},[t._v(t._s(t.$t("index.catalog")))])],1),e("Description",{attrs:{description:r.summary,compact:""}})],1):t._e()]}))],2)],1):t._e()],1)},a=[],i=(r(44114),r(14603),r(47566),r(98721),r(66704)),o=r(69771),s=r(19115),u=r(43580),l=r(55038),c=r(95353),d=r(37047),p=r(56526),f=r(94335),h={name:"SelectDataSource",components:{BForm:i.Z,BFormGroup:o.a,BFormInput:s.b,BListGroup:u.M,BListGroupItem:l.d,Description:d["default"]},data(){return{url:"",stacIndex:[]}},computed:{...(0,c.L8)(["toBrowserPath"]),valid(){return!this.error},error(){if(!this.url)return null;try{let t=new URL(this.url);return t.protocol?t.host?null:this.$t("index.urlMissingHost"):this.$t("index.urlMissingProtocol")}catch(t){return this.$t("index.urlInvalid")}}},async created(){this.$store.commit("resetCatalog",!0);try{let t=await f.A.get("https://stacindex.org/api/catalogs");Array.isArray(t.data)&&(this.stacIndex=t.data)}catch(t){console.error(t)}},methods:{show(t){return"private"!==t.access&&(!this.url||p.Ay.search(this.url,[t.title,t.url]))},setUrl(t){this.url=t},open(t){this.url=t,this.go()},go(){this.$router.push(this.toBrowserPath(this.url))}}},g=h,v=r(81656),b=(0,v.A)(g,n,a,!1,null,null,null),m=b.exports},66704:function(t,e,r){r.d(e,{Z:function(){return l}});var n=r(2448),a=r(58722),i=r(49800),o=r(80072),s=r(1340),u=(0,s.sC)({id:(0,s.Yg)(o.vq),inline:(0,s.Yg)(o.Ye,!1),novalidate:(0,s.Yg)(o.Ye,!1),validated:(0,s.Yg)(o.Ye,!1)},i.PR),l=(0,n.X$)({name:i.PR,functional:!0,props:u,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t("form",(0,a.L)(n,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),i)}})},55038:function(t,e,r){r.d(e,{d:function(){return y}});var n=r(2448),a=r(58722),i=r(49800),o=r(80072),s=r(17079),u=r(71402),l=r(91671),c=r(1340),d=r(37097),p=r(66344);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=["a","router-link","button","b-link"],b=(0,l.cJ)(p.xk,["event","routerTag"]);delete b.href.default,delete b.to.default;var m=(0,c.sC)((0,l.di)(h(h({},b),{},{action:(0,c.Yg)(o.Ye,!1),button:(0,c.Yg)(o.Ye,!1),tag:(0,c.Yg)(o.vq,"div"),variant:(0,c.Yg)(o.vq)})),i.jA),y=(0,n.X$)({name:i.jA,functional:!0,props:m,render:function(t,e){var r,n=e.props,i=e.data,o=e.children,l=n.button,f=n.variant,h=n.active,m=n.disabled,y=(0,d.PJ)(n),w=l?"button":y?p.zJ:n.tag,x=!!(n.action||y||l||(0,s.Xk)(v,n.tag)),_={},O={};return(0,u.dz)(w,"button")?(i.attrs&&i.attrs.type||(_.type="button"),n.disabled&&(_.disabled=!0)):O=(0,c.YL)(b,n),t(w,(0,a.L)(i,{attrs:_,props:O,staticClass:"list-group-item",class:(r={},g(r,"list-group-item-".concat(f),f),g(r,"list-group-item-action",x),g(r,"active",h),g(r,"disabled",m),r)}),o)}})},43580:function(t,e,r){r.d(e,{M:function(){return d}});var n=r(2448),a=r(58722),i=r(49800),o=r(80072),s=r(46710),u=r(1340);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=(0,u.sC)({flush:(0,u.Yg)(o.Ye,!1),horizontal:(0,u.Yg)(o.iF,!1),tag:(0,u.Yg)(o.vq,"div")},i.l$),d=(0,n.X$)({name:i.l$,functional:!0,props:c,render:function(t,e){var r=e.props,n=e.data,i=e.children,o=""===r.horizontal||r.horizontal;o=!r.flush&&o;var u={staticClass:"list-group",class:l({"list-group-flush":r.flush,"list-group-horizontal":!0===o},"list-group-horizontal-".concat(o),(0,s.Kg)(o))};return t(r.tag,(0,a.L)(n,u),i)}})},36955:function(t,e,r){var n=r(92140),a=r(94901),i=r(44576),o=r(78227),s=o("toStringTag"),u=Object,l="Arguments"===i(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(r){}};t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=c(e=u(t),s))?r:l?i(e):"Object"===(n=i(e))&&a(e.callee)?"Arguments":n}},62106:function(t,e,r){var n=r(50283),a=r(24913);t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),a.f(t,e,r)}},92140:function(t,e,r){var n=r(78227),a=n("toStringTag"),i={};i[a]="z",t.exports="[object z]"===String(i)},655:function(t,e,r){var n=r(36955),a=String;t.exports=function(t){if("Symbol"===n(t))throw new TypeError("Cannot convert a Symbol value to a string");return a(t)}},22812:function(t){var e=TypeError;t.exports=function(t,r){if(t<r)throw new e("Not enough arguments");return t}},14603:function(t,e,r){var n=r(36840),a=r(79504),i=r(655),o=r(22812),s=URLSearchParams,u=s.prototype,l=a(u.append),c=a(u["delete"]),d=a(u.forEach),p=a([].push),f=new s("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&n(u,"delete",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return c(this,t);var n=[];d(this,(function(t,e){p(n,{key:e,value:t})})),o(e,1);var a,s=i(t),u=i(r),f=0,h=0,g=!1,v=n.length;while(f<v)a=n[f++],g||a.key===s?(g=!0,c(this,a.key)):h++;while(h<v)a=n[h++],a.key===s&&a.value===u||l(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},47566:function(t,e,r){var n=r(36840),a=r(79504),i=r(655),o=r(22812),s=URLSearchParams,u=s.prototype,l=a(u.getAll),c=a(u.has),d=new s("a=1");!d.has("a",2)&&d.has("a",void 0)||n(u,"has",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return c(this,t);var n=l(this,t);o(e,1);var a=i(r),s=0;while(s<n.length)if(n[s++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},98721:function(t,e,r){var n=r(43724),a=r(79504),i=r(62106),o=URLSearchParams.prototype,s=a(o.forEach);n&&!("size"in o)&&i(o,"size",{get:function(){var t=0;return s(this,(function(){t++})),t},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=2021.9df18eea.js.map