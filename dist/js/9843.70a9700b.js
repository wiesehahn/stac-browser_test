"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[9843],{69843:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"stac-browser-auth-modal"}},[e("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.submit.apply(null,arguments)},reset:t.reset}},[e("b-card",{attrs:{"no-body":"",header:t.t("authentication.title")}},[e("b-card-body",[e("p",[t._v(t._s(t.t("authentication.description")))]),t.promptText?e("Description",{attrs:{description:t.promptText}}):t._e(),e("b-form-group",{attrs:{label:t.t("authentication.user"),"label-for":"basicUser"}},[e("b-form-input",{attrs:{id:"basicUser",type:"text",autofocus:"",required:t.required},model:{value:t.username,callback:function(e){t.username="string"===typeof e?e.trim():e},expression:"username"}})],1),e("b-form-group",{attrs:{label:t.t("authentication.password"),"label-for":"basicPassword"}},[e("b-form-input",{attrs:{id:"basicPassword",type:"password",required:t.required},model:{value:t.password,callback:function(e){t.password="string"===typeof e?e.trim():e},expression:"password"}})],1)],1),e("b-card-footer",[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.t("submit")))]),e("b-button",{staticClass:"ml-3",attrs:{type:"reset",variant:"danger"}},[t._v(t._s(t.t("cancel")))])],1)],1)],1)],1)},i=[],a=r(37047),n=r(66704),o=r(19115),u=r(69771),d=r(64147),l=r(56526),p=r(95353),c={name:"Basic",components:{BForm:n.Z,BFormInput:o.b,BFormGroup:u.a,Description:a["default"]},props:{description:{type:String,default:null},credentials:{type:String,default:null}},data(){return{username:"",password:"",required:!0}},computed:{...(0,p.L8)("auth",["isLoggedIn"]),promptText(){return this.description?this.description:this.t("authConfig.description")}},created(){if(this.isLoggedIn&&this.$emit("submit",null),l.Ay.hasText(this.credentials)&&this.credentials.includes(":")){let t=this.credentials.split(":",2);this.username=t[0],this.password=t[1],this.required=!1}},methods:{t(t){return d.Ay.t(t)},reset(){this.$emit("reset")},async submit(){this.$emit("submit",`${this.username}:${this.password}`)}}},m=c,b=r(81656),f=(0,b.A)(m,s,i,!1,null,null,null),h=f.exports},66704:function(t,e,r){r.d(e,{Z:function(){return d}});var s=r(2448),i=r(58722),a=r(49800),n=r(80072),o=r(1340),u=(0,o.sC)({id:(0,o.Yg)(n.vq),inline:(0,o.Yg)(n.Ye,!1),novalidate:(0,o.Yg)(n.Ye,!1),validated:(0,o.Yg)(n.Ye,!1)},a.PR),d=(0,s.X$)({name:a.PR,functional:!0,props:u,render:function(t,e){var r=e.props,s=e.data,a=e.children;return t("form",(0,i.L)(s,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),a)}})}}]);
//# sourceMappingURL=9843.70a9700b.js.map