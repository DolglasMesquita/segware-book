"use strict";(self["webpackChunksegware_book"]=self["webpackChunksegware_book"]||[]).push([[593],{3238:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var l=a(3673),n=a(2323);const o=(0,l.Uk)(" Segware Book "),r=(0,l.Uk)(" Sair "),i={class:"absolute-bottom bg-transparent"},u=(0,l._)("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),s={class:"text-weight-bold"};function p(e,t,a,p,d,m){const c=(0,l.up)("q-btn"),w=(0,l.up)("q-toolbar-title"),g=(0,l.up)("q-toolbar"),f=(0,l.up)("q-header"),b=(0,l.up)("q-icon"),k=(0,l.up)("q-item-section"),_=(0,l.up)("q-item"),Z=(0,l.up)("q-list"),q=(0,l.up)("q-scroll-area"),h=(0,l.up)("q-avatar"),v=(0,l.up)("q-img"),Q=(0,l.up)("q-drawer"),W=(0,l.up)("router-view"),y=(0,l.up)("q-page-container"),S=(0,l.up)("q-layout"),I=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(S,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{class:"bg-green"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[o])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Q,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=t=>e.leftDrawerOpen=t),"show-if-above":"",width:250,breakpoint:500},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{style:{height:"calc(100% - 150px)","margin-top":"130px","border-right":"1px solid #ddd"}},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{padding:""},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(_,{clickable:"",onClick:t[0]||(t[0]=t=>e.deslogar())},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{right:"",name:"logout"})])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[r])),_:1})])),_:1},512),[[I]])])),_:1})])),_:1}),(0,l.Wm)(v,{class:"absolute-top bg-green-10 text-center",style:{height:"130px"}},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(h,{size:"56px",class:"q-mb-sm"},{default:(0,l.w5)((()=>[u])),_:1}),(0,l._)("div",s,(0,n.zw)(e.nome),1)])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W)])),_:1})])),_:1})}function d(e,t,a,o,r,i){const u=(0,l.up)("q-icon"),s=(0,l.up)("q-item-section"),p=(0,l.up)("q-item-label"),d=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(d,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:(0,l.w5)((()=>[e.icon?((0,l.wg)(),(0,l.j4)(s,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.title),1)])),_:1}),(0,l.Wm)(p,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const m=(0,l.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var c=a(4260),w=a(3414),g=a(2035),f=a(4554),b=a(2350),k=a(7518),_=a.n(k);const Z=(0,c.Z)(m,[["render",d]]),q=Z;_()(m,"components",{QItem:w.Z,QItemSection:g.Z,QIcon:f.Z,QItemLabel:b.Z});var h=a(1959);const v=(0,l.aZ)({name:"MainLayout",components:{EssentialLink:q},data(){return{nome:""}},setup(){const e=(0,h.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},methods:{deslogar(){sessionStorage.clear(),window.location.href="/#/login"}},mounted(){this.nome=sessionStorage.getItem("name")}});var Q=a(9214),W=a(3812),y=a(9570),S=a(4607),I=a(3747),L=a(2901),x=a(7704),C=a(7011),D=a(4027),U=a(5096),z=a(2652),j=a(6489);const H=(0,c.Z)(v,[["render",p]]),O=H;_()(v,"components",{QLayout:Q.Z,QHeader:W.Z,QToolbar:y.Z,QBtn:S.Z,QToolbarTitle:I.Z,QDrawer:L.Z,QScrollArea:x.Z,QList:C.Z,QItem:w.Z,QItemSection:g.Z,QIcon:f.Z,QImg:D.Z,QAvatar:U.Z,QPageContainer:z.Z}),_()(v,"directives",{Ripple:j.Z})}}]);