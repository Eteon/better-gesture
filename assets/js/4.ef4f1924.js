(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(e,t,s){},316:function(e,t,s){e.exports=s.p+"assets/img/demo.6bbb4061.jpg"},317:function(e,t,s){"use strict";var i=s(298);s.n(i).a},337:function(e,t,s){"use strict";s.r(t);var i={name:"doubleTap",data:function(){return{distanceX:0,distanceY:0,scaleX:1,scaleY:1}},methods:{doubleTap:function(e){if(this.scaleX>1.5)this.scaleX=this.scaleY=1,this.distanceX=this.distanceY=0;else{var t=this.$refs.imgDemo.getBoundingClientRect(),s=0,i=0;e.clientX?(s=e.clientX-t.left,i=e.clientY-t.top):(s=e.changedTouches[0].clientX-t.left,i=e.changedTouches[0].clientY-t.top);var a=t.width-t.width/2-s,c=t.height-t.height/2-i;this.scaleX=this.scaleY=2,this.distanceX=a,this.distanceY=c}}}},a=(s(317),s(44)),c=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"double-tap"},[t("img",{directives:[{name:"gesture",rawName:"v-gesture:doubleTap",value:this.doubleTap,expression:"doubleTap",arg:"doubleTap"}],ref:"imgDemo",staticClass:"img-demo",style:{transform:"translate3d("+this.distanceX+"px,"+this.distanceY+"px,0) scale3d("+this.scaleX+","+this.scaleY+",1)"},attrs:{src:s(316)}})])}),[],!1,null,"91c45516",null);t.default=c.exports}}]);