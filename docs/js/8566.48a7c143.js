"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[8566],{42172:function(t,e,l){l.r(e),l.d(e,{default:function(){return w}});var r=function(){var t=this,e=t._self._c;return e("section",{staticClass:"links mb-4"},[t.title?e("h2",[t._v(t._s(t.title))]):t._e(),t.hasGroups?t._l(t.groups,(function(l){return e("div",{key:l.rel,staticClass:"group"},[l.rel?e("h4",[t._v(t._s(l.label))]):t._e(),e("ul",t._l(l.links,(function(l,r){return e("Link",{key:r,attrs:{link:l,context:t.context,fallbackTitle:()=>t.fallbackTitle(l)}})})),1)])})):e("ul",t._l(t.links,(function(l,r){return e("Link",{key:r,attrs:{link:l,context:t.context,fallbackTitle:()=>t.fallbackTitle(l)}})})),1)],2)},n=[],i=(l(44114),function(){var t=this,e=t._self._c;return e("li",{staticClass:"link"},[e("StacLink",{staticClass:"pr-1",attrs:{id:t.popoverId,data:t.link,fallbackTitle:t.fallbackTitle}}),e("b-popover",{attrs:{target:t.popoverId,triggers:"hover",placement:"right",container:"#stac-browser","custom-class":"link-more"}},[t.link.description?e("Description",{attrs:{description:t.link.description,compact:""}}):t._e(),e("section",{staticClass:"link-actions"},[e("h3",{staticClass:"first"},[t._v(t._s(t.$t("additionalActions")))]),e("HrefActions",{attrs:{vertical:"",data:t.link,size:"sm"}})],1),e("Metadata",{attrs:{data:t.link,type:"Link",headerTag:"h3",ignoreFields:t.ignore}})],1)],1)}),s=[],a=l(52775),o=l(56894),c=l(30278);let u=0;var p={name:"Link",components:{BPopover:c.u,HrefActions:a.A,StacLink:o["default"],Description:()=>Promise.resolve().then(l.bind(l,37047)),Metadata:()=>l.e(2287).then(l.bind(l,94668))},props:{link:{type:Object,required:!0},fallbackTitle:{type:Function,required:!0},context:{type:Object,default:null}},data(){return{ignore:["href","type","rel","title","description"]}},computed:{popoverId(){return"popover-link-"+u}},beforeCreate(){u++}},k=p,d=l(81656),f=(0,d.A)(k,i,s,!1,null,null,null),h=f.exports,b=l(74870),g=l(55288),_=l(42379),m=l(56526),v=l(64147),y=l(95353),L={name:"Links",components:{Link:h},props:{title:{type:String,default:null},links:{type:Array,default:()=>[]},context:{type:Object,default:null}},computed:{...(0,y.aH)(["uiLanguage"]),groups(){let t=this.links.reduce(((t,e)=>{let l="string"===typeof e.rel?e.rel.toLowerCase():"";return l in t?t[l].links.push(e):t[l]={rel:l,label:this.formatRel(l),links:[e]},t}),{});const e=new Intl.Collator(this.uiLanguage);return Object.values(t).sort(((t,l)=>e.compare(t.label,l.label)))},hasGroups(){return this.groups.some((t=>t.rel.length>0&&t.links.length>=2))}},methods:{formatRel(t){let e="string"===typeof t?t.toLowerCase():"";return e in b.Fields.links.rel.mapping?(0,v._)(b.Fields.links.rel.mapping[e]):(t.startsWith(_.dL)&&(t=t.substr(_.dL.length)),(0,g.formatKey)(t))},fallbackTitle(t){let e=m.Ay.titleForHref(t.href);if(this.hasGroups)return e;{let l=this.formatRel(t.rel);return`${l}: ${e}`}}}},C=L,T=(0,d.A)(C,r,n,!1,null,null,null),w=T.exports}}]);
//# sourceMappingURL=8566.48a7c143.js.map