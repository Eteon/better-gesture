(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{314:function(t,n,i){},362:function(t,n,i){"use strict";var a=i(314);i.n(a).a},381:function(t,n,i){"use strict";i.r(n);var a={name:"adSwiper",data:function(){return{distanceY:0,timer:0,data:["女生真的会拧不开瓶盖吗？","双缝干涉实验恐怖吗？恐怖在哪？","明星现实中真的很漂亮吗?"],transition:!1}},watch:{},mounted:function(){this.init()},methods:{init:function(){var t=this;setInterval((function(){t.data.push(t.data[0]),t.transition=!0,t.distanceY=-50,t.$refs.wrap.addEventListener("transitionend",t.animation)}),2e3)},animation:function(){this.$refs.wrap.removeEventListener("transitionend",this.animation),this.transition=!1,this.data.shift(),this.distanceY=0}}},s=(i(362),i(44)),e=Object(s.a)(a,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("section",{staticClass:"adSwiper"},[i("div",{ref:"wrap",staticClass:"wrap",class:{transition:t.transition},style:{transform:"translate3d(0px,"+t.distanceY+"px,0)"}},t._l(t.data,(function(n,a){return i("p",{key:a},[t._v(t._s(n))])})),0)])}),[],!1,null,"ef11b2d4",null);n.default=e.exports}}]);