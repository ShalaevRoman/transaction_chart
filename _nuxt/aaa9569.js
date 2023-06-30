(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{601:function(t,e,r){var content=r(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("839eb7f0",content,!0,{sourceMap:!1})},616:function(t,e,r){"use strict";r(601)},617:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".chart__wrapper[data-v-76963dc3]{height:400px;padding:10px;width:100%}",""]),n.locals={},t.exports=n},619:function(t,e,r){"use strict";r.r(e);r(12),r(13),r(9),r(4),r(16),r(11),r(17);var n=r(3),o=(r(59),r(117));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ChartForRegion",data:function(){return{transactionLabels:[],transactionAmountIndicator:[],chartOptions:{responsive:!0,maintainAspectRatio:!1}}},computed:l(l({},Object(o.b)("transactionStore",["top100Transaction"])),{},{bgColor:function(){return this.$vuetify.theme.dark?"#e5e5e5":"#424242"},getChartData:function(){return{labels:this.transactionLabels,datasets:[{backgroundColor:this.bgColor,label:"Amount in hryvnia",data:this.transactionAmountIndicator}]}}}),watch:{top100Transaction:function(){this.transactionLabels=this.top100Transaction.map((function(t){return t.payer_name})),this.transactionAmountIndicator=this.top100Transaction.map((function(t){return t.amount}))}}},f=(r(616),r(97)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"chart__wrapper"},[e("BarChart",{attrs:{options:t.chartOptions,data:t.getChartData}})],1)}),[],!1,null,"76963dc3",null);e.default=component.exports},620:function(t,e,r){"use strict";r.r(e);var n=r(597),o=r(650),c=(r(12),r(13),r(9),r(4),r(16),r(11),r(17),r(3)),l=r(117);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"SelectRegions",data:function(){return{select:"",isAvailableRegion:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("transactionStore",["regionList"])),methods:{getTransaction:function(){1===this.select?this.isAvailableRegion=!0:(this.isAvailableRegion=!1,this.$store.dispatch("transactionStore/getTop100Transaction",this.select))}}},v=f,h=r(97),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e(n.a,[e(o.a,{staticClass:"ma-2",attrs:{items:t.regionList,"item-text":"regionName","item-value":"regionCode",label:"List of regions","background-color":"secondary","hide-details":"",solo:""},on:{change:function(e){return t.getTransaction()}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),t._v(" "),t.isAvailableRegion?e("p",{staticClass:"red--text"},[t._v("\n    Data for this region is not available\n  ")]):t._e()],1)}),[],!1,null,"dadad512",null);e.default=component.exports},628:function(t,e,r){var content=r(629);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("61d1dd60",content,!0,{sourceMap:!1})},629:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{word-wrap:break-word;border-width:thin;display:block;max-width:100%;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),n.locals={},t.exports=n},651:function(t,e,r){"use strict";r.r(e);r(12),r(13),r(9),r(4),r(16),r(11),r(17);var n=r(3),o=(r(24),r(175),r(176),r(628),r(274)),c=r(621),l=r(95),d=r(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),O=r(1),y=(Object(O.h)("v-card__actions"),Object(O.h)("v-card__subtitle"),Object(O.h)("v-card__text"),Object(O.h)("v-card__title")),j=(r(29),r(60),r(602),r(53),r(603),r(604),r(605),r(606),r(607),r(608),r(609),r(610),r(611),r(612),r(613),r(614),r(615),r(54),r(58),r(69),r(431),r(2)),m=r(61);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=["sm","md","lg","xl"],P=w.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),k=w.reduce((function(t,e){return t["offset"+Object(O.w)(e)]={type:[String,Number],default:null},t}),{}),S=w.reduce((function(t,e){return t["order"+Object(O.w)(e)]={type:[String,Number],default:null},t}),{}),C={col:Object.keys(P),offset:Object.keys(k),order:Object.keys(S)};function D(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var E=new Map,R=j.a.extend({name:"v-col",functional:!0,props:x(x(x(x({cols:{type:[Boolean,String,Number],default:!1}},P),{},{offset:{type:[String,Number],default:null}},k),{},{order:{type:[String,Number],default:null}},S),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var l in r)c+=String(r[l]);var d=E.get(c);if(!d){var f,v;for(v in d=[],C)C[v].forEach((function(t){var e=r[t],n=D(v,t,e);n&&d.push(n)}));var h=d.some((function(t){return t.startsWith("col-")}));d.push((f={col:!h||!r.cols},Object(n.a)(f,"col-".concat(r.cols),r.cols),Object(n.a)(f,"offset-".concat(r.offset),r.offset),Object(n.a)(f,"order-".concat(r.order),r.order),Object(n.a)(f,"align-self-".concat(r.alignSelf),r.alignSelf),f)),E.set(c,d)}return t(r.tag,Object(m.a)(data,{class:d}),o)}});r(75),r(35);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=["sm","md","lg","xl"],T=["start","end","center"];function N(t,e){return A.reduce((function(r,n){return r[t+Object(O.w)(n)]=e(),r}),{})}var M=function(t){return[].concat(T,["baseline","stretch"]).includes(t)},z=N("align",(function(){return{type:String,default:null,validator:M}})),I=function(t){return[].concat(T,["space-between","space-around"]).includes(t)},$=N("justify",(function(){return{type:String,default:null,validator:I}})),F=function(t){return[].concat(T,["space-between","space-around","stretch"]).includes(t)},G=N("alignContent",(function(){return{type:String,default:null,validator:F}})),J={align:Object.keys(z),justify:Object.keys($),alignContent:Object.keys(G)},H={align:"align",justify:"justify",alignContent:"align-content"};function W(t,e,r){var n=H[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var K=new Map,Q=j.a.extend({name:"v-row",functional:!0,props:L(L(L({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:M}},z),{},{justify:{type:String,default:null,validator:I}},$),{},{alignContent:{type:String,default:null,validator:F}},G),render:function(t,e){var r=e.props,data=e.data,o=e.children,c="";for(var l in r)c+=String(r[l]);var d=K.get(c);if(!d){var f,v;for(v in d=[],J)J[v].forEach((function(t){var e=r[t],n=W(v,t,e);n&&d.push(n)}));d.push((f={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(f,"align-".concat(r.align),r.align),Object(n.a)(f,"justify-".concat(r.justify),r.justify),Object(n.a)(f,"align-content-".concat(r.alignContent),r.alignContent),f)),K.set(c,d)}return t(r.tag,Object(m.a)(data,{staticClass:"row",class:d}),o)}}),U={name:"IndexPage",data:function(){return{}},methods:{}},V=r(97),component=Object(V.a)(U,(function(){var t=this,e=t._self._c;return e(Q,{attrs:{justify:"center",align:"center"}},[e(R,{attrs:{cols:"12",sm:"12",md:"12"}},[e(h,{staticClass:"py-4 d-flex justify-center flex-column"},[e(y,[t._v("Transaction schedule for the region")]),t._v(" "),e("ChartForRegion"),t._v(" "),e("SelectRegions")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChartForRegion:r(619).default,SelectRegions:r(620).default})}}]);