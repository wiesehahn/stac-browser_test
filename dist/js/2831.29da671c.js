"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[2831],{12831:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var l=function(){var t=this,e=t._self._c;return t.collection?e("section",{staticClass:"parent-collection card-list mb-4"},[e("h2",[t._v(t._s(t.$tc("stacCollection")))]),e("Catalog",{attrs:{catalog:t.collection,showThumbnail:t.showThumbnail}})],1):t._e()},n=[],c=a(6105),o=a(95353),i=a(56526),s={name:"CollectionLink",components:{Catalog:c.A},props:{link:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!1}},computed:{...(0,o.L8)(["getStac"]),collection(){return this.getStac(this.link)}},watch:{link:{immediate:!0,handler(t){i.Ay.isObject(t)&&this.$store.dispatch("load",{url:t.href})}}}},r=s,u=a(81656),h=(0,u.A)(r,l,n,!1,null,null,null),d=h.exports}}]);
//# sourceMappingURL=2831.29da671c.js.map