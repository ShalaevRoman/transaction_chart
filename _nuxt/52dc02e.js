(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{620:function(e,t,n){"use strict";n.r(t);var r=n(597),o=n(650),c=(n(12),n(13),n(9),n(4),n(16),n(11),n(17),n(3)),l=n(117);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var O={name:"SelectRegions",data:function(){return{select:"",isAvailableRegion:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)("transactionStore",["regionList"])),methods:{getTransaction:function(){1===this.select?this.isAvailableRegion=!0:(this.isAvailableRegion=!1,this.$store.dispatch("transactionStore/getTop100Transaction",this.select))}}},d=O,h=n(97),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t(r.a,[t(o.a,{staticClass:"ma-2",attrs:{items:e.regionList,"item-text":"regionName","item-value":"regionCode",label:"List of regions","background-color":"secondary","hide-details":"",solo:""},on:{change:function(t){return e.getTransaction()}},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e._v(" "),e.isAvailableRegion?t("p",{staticClass:"red--text"},[e._v("\n    Data for this region is not available\n  ")]):e._e()],1)}),[],!1,null,"dadad512",null);t.default=component.exports}}]);