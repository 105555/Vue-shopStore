import{aJ as F,p as h,g as L,aD as Fe,aI as Me,aE as Se,a5 as U,aK as Ue,d as qe,b as m,e as g,c as o,aL as B,ao as _e,aM as ce,aN as Xe,aO as Ye,aP as Ke,av as P,k as Ce,an as ke,aQ as Z,t as ee,s as V,r as te,w as j,ax as Je,U as we,h as xe,F as de,A as Qe,J as Te,T as Ge,aa as ve,R as $e,m as ne,a as ae,aR as Ze,aS as et,aT as tt,u as Ee,i as nt,aU as at,aV as me,a1 as st,$ as rt,a4 as it,aW as ot,aX as fe}from"./index-7c7db64b.js";const Le=["top","bottom"],lt=["start","end","left","right"];function ut(e,t){let[n,a]=e.split(" ");return a||(a=F(Le,n)?"start":F(lt,n)?"top":"center"),{side:ge(n,t),align:ge(a,t)}}function ge(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Ut(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function qt(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Xt(e){return{side:e.align,align:e.side}}function Yt(e){return F(Le,e.side)?"y":"x"}const z=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return L()({name:n??Fe(Me(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...z()},setup(a,r){let{slots:s}=r;return()=>{var i;return Se(a.tag,{class:[e,a.class],style:a.style},(i=s.default)==null?void 0:i.call(s))}}})}function O(e){const t=U("useRender");t.render=e}const se=h({tag:{type:String,default:"div"}},"tag"),ct=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),dt=L(!1)({name:"VDefaultsProvider",props:ct(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:i,scoped:l}=Ue(e);return qe(a,{reset:s,root:i,scoped:l,disabled:r}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});const vt=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function mt(e){return{dimensionStyles:m(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}function ft(e){return{aspectStyles:m(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Pe=h({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...z(),...vt()},"VResponsive"),he=L()({name:"VResponsive",props:Pe(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=ft(e),{dimensionStyles:r}=mt(e);return O(()=>{var s;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[o("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&o("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function re(e){return _e(()=>{const t=[],n={};if(e.value.background)if(ce(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Xe(e.value.background)){const a=Ye(e.value.background);if(a.a==null||a.a===1){const r=Ke(a);n.color=r,n.caretColor=r}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ce(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Re(e,t){const n=m(()=>({text:B(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=re(n);return{textColorClasses:a,textColorStyles:r}}function J(e,t){const n=m(()=>({background:B(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=re(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const ie=h({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:m(()=>{const a=B(e)?e.value:e.rounded,r=B(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`rounded-${i}`);else r&&s.push("rounded-0");return s})}}const gt=h({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),W=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,...s}=e,{component:i=ke,...l}=typeof a=="object"?a:{};return Se(i,Ce(typeof a=="string"?{name:r?"":a}:l,s,{disabled:r}),n)};function ht(e,t){if(!Z)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var y;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(y=e._observe)==null?void 0:y[t.instance.$.uid];if(!c)return;const d=l.some(b=>b.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||d||c.init)&&r(d,l,u),d&&n.once?Ve(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Ve(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const yt={mounted:ht,unmounted:Ve},bt=yt,pt=h({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Pe(),...z(),...ie(),...gt()},"VImg"),St=L()({name:"VImg",directives:{intersect:bt},props:pt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:r,backgroundColorStyles:s}=J(ee(e,"color")),{roundedClasses:i}=oe(e),l=U("VImg"),u=V(""),c=te(),d=V(e.eager?"loading":"idle"),y=V(),b=V(),f=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),w=m(()=>f.value.aspect||y.value/b.value||0);j(()=>e.src,()=>{x(d.value!=="idle")}),j(w,(v,p)=>{!v&&p&&c.value&&C(c.value)}),Je(()=>x());function x(v){if(!(e.eager&&v)&&!(Z&&!v&&!e.eager)){if(d.value="loading",f.value.lazySrc){const p=new Image;p.src=f.value.lazySrc,C(p,null)}f.value.src&&we(()=>{var p;n("loadstart",((p=c.value)==null?void 0:p.currentSrc)||f.value.src),setTimeout(()=>{var k;if(!l.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||R(),d.value==="error")return;w.value||C(c.value,null),d.value==="loading"&&A()}else w.value||C(c.value),_()})})}}function A(){var v;l.isUnmounted||(_(),C(c.value),d.value="loaded",n("load",((v=c.value)==null?void 0:v.currentSrc)||f.value.src))}function R(){var v;l.isUnmounted||(d.value="error",n("error",((v=c.value)==null?void 0:v.currentSrc)||f.value.src))}function _(){const v=c.value;v&&(u.value=v.currentSrc||v.src)}let T=-1;xe(()=>{clearTimeout(T)});function C(v){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(T),l.isUnmounted)return;const{naturalHeight:le,naturalWidth:ue}=v;le||ue?(y.value=ue,b.value=le):!v.complete&&d.value==="loading"&&p!=null?T=window.setTimeout(k,p):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(y.value=1,b.value=1)};k()}const $=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),q=()=>{var k;if(!f.value.src||d.value==="idle")return null;const v=o("img",{class:["v-img__img",$.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:A,onError:R},null),p=(k=a.sources)==null?void 0:k.call(a);return o(W,{transition:e.transition,appear:!0},{default:()=>[de(p?o("picture",{class:"v-img__picture"},[p,v]):v,[[Ge,d.value==="loaded"]])]})},D=()=>o(W,{transition:e.transition},{default:()=>[f.value.lazySrc&&d.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",$.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),X=()=>a.placeholder?o(W,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,E=()=>a.error?o(W,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,Y=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=V(!1);{const v=j(w,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),v())})}return O(()=>{const v=he.filterProps(e);return de(o(he,Ce({class:["v-img",{"v-img--booting":!H.value},r.value,i.value,e.class],style:[{width:g(e.width==="auto"?y.value:e.width)},s.value,e.style]},v,{aspectRatio:w.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(Te,null,[o(q,null,null),o(D,null,null),o(Y,null,null),o(X,null,null),o(E,null,null)]),default:a.default}),[[Qe("intersect"),{handler:x,options:e.options},null,{once:!0}]])}),{currentSrc:u,image:c,state:d,naturalWidth:y,naturalHeight:b}}}),Jt=h({border:[Boolean,Number,String]},"border");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:m(()=>{const a=B(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const Gt=h({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Zt(e){return{elevationClasses:m(()=>{const n=B(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const _t=[null,"default","comfortable","compact"],Ct=h({density:{type:String,default:"default",validator:e=>_t.includes(e)}},"density");function kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:m(()=>`${t}--density-${e.density}`)}}const wt=["elevated","flat","tonal","outlined","text","plain"];function xt(e,t){return o(Te,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const Tt=h({color:String,variant:{type:String,default:"elevated",validator:e=>wt.includes(e)}},"variant");function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const n=m(()=>{const{variant:s}=ve(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=re(m(()=>{const{variant:s,color:i}=ve(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const Et=["x-small","small","default","large","x-large"],Be=h({size:{type:[String,Number],default:"default"}},"size");function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return _e(()=>{let n,a;return F(Et,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:g(e.size),height:g(e.size)}),{sizeClasses:n,sizeStyles:a}})}const Lt=h({color:String,start:Boolean,end:Boolean,icon:$e,...z(),...Be(),...se({tag:"i"}),...ne()},"VIcon"),Pt=L()({name:"VIcon",props:Lt(),setup(e,t){let{attrs:n,slots:a}=t;const r=te(),{themeClasses:s}=ae(e),{iconData:i}=Ze(m(()=>r.value||e.icon)),{sizeClasses:l}=ze(e),{textColorClasses:u,textColorStyles:c}=Re(ee(e,"color"));return O(()=>{var y,b;const d=(y=a.default)==null?void 0:y.call(a);return d&&(r.value=(b=et(d).filter(f=>f.type===tt&&f.children&&typeof f.children=="string")[0])==null?void 0:b.children),o(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,l.value,u.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},c.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[d]})}),{}}});function Rt(e,t){const n=te(),a=V(!1);if(Z){const r=new IntersectionObserver(s=>{e==null||e(s,r),a.value=!!s.find(i=>i.isIntersecting)},t);xe(()=>{r.disconnect()}),j(n,(s,i)=>{i&&(r.unobserve(i),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const ye={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Vt=h({location:String},"location");function Bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Ee();return{locationStyles:m(()=>{if(!e.location)return{};const{side:s,align:i}=ut(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function l(c){return n?n(c):0}const u={};return s!=="center"&&(t?u[ye[s]]=`calc(100% - ${l(s)}px)`:u[s]=0),i!=="center"?t?u[ye[i]]=`calc(100% - ${l(i)}px)`:u[i]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const zt=h({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...z(),...Vt({location:"top"}),...ie(),...se(),...ne()},"VProgressLinear"),It=L()({name:"VProgressLinear",props:zt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=nt(e,"modelValue"),{isRtl:r,rtlClasses:s}=Ee(),{themeClasses:i}=ae(e),{locationStyles:l}=Bt(e),{textColorClasses:u,textColorStyles:c}=Re(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:y}=J(m(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:f}=J(e,"color"),{roundedClasses:w}=oe(e),{intersectionRef:x,isIntersecting:A}=Rt(),R=m(()=>parseInt(e.max,10)),_=m(()=>parseInt(e.height,10)),T=m(()=>parseFloat(e.bufferValue)/R.value*100),C=m(()=>parseFloat(a.value)/R.value*100),$=m(()=>r.value!==e.reverse),q=m(()=>e.indeterminate?"fade-transition":"slide-x-transition"),D=m(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function X(E){if(!x.value)return;const{left:Y,right:H,width:v}=x.value.getBoundingClientRect(),p=$.value?v-E.clientX+(H-v):E.clientX-Y;a.value=Math.round(p/v*R.value)}return O(()=>o(e.tag,{ref:x,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&A.value,"v-progress-linear--reverse":$.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},w.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?g(_.value):0,"--v-progress-linear-height":g(_.value),...l.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:C.value,onClick:e.clickable&&X},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...c.value,[$.value?"left":"right"]:g(-_.value),borderTop:`${g(_.value/2)} dotted`,opacity:D.value,top:`calc(50% - ${g(_.value/4)})`,width:g(100-T.value,"%"),"--v-progress-linear-stream-to":g(_.value*($.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",d.value],style:[y.value,{opacity:D.value,width:g(e.stream?T.value:100,"%")}]},null),o(ke,{name:q.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(E=>o("div",{key:E,class:["v-progress-linear__indeterminate",E,b.value],style:f.value},null))]):o("div",{class:["v-progress-linear__determinate",b.value],style:[f.value,{width:g(C.value,"%")}]},null)]}),n.default&&o("div",{class:"v-progress-linear__content"},[n.default({value:C.value,buffer:T.value})])]})),{}}}),en=h({loading:[Boolean,String]},"loader");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:m(()=>({[`${t}--loading`]:e.loading}))}}function nn(e,t){var a;let{slots:n}=t;return o("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||o(It,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Nt=["static","relative","fixed","absolute","sticky"],an=h({position:{type:String,validator:e=>Nt.includes(e)}},"position");function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:m(()=>e.position?`${t}--${e.position}`:void 0)}}function Ot(){const e=U("useRoute");return m(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function rn(){var e,t;return(t=(e=U("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function on(e,t){const n=at("RouterLink"),a=m(()=>!!(e.href||e.to)),r=m(()=>(a==null?void 0:a.value)||me(t,"click")||me(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:r,href:ee(e,"href")};const s=e.to?n.useLink(e):void 0,i=Ot();return{isLink:a,isClickable:r,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&m(()=>{var l,u,c;return e.exact?i.value?((c=s.isExactActive)==null?void 0:c.value)&&st(s.route.value.query,i.value.query):(u=s.isExactActive)==null?void 0:u.value:(l=s.isActive)==null?void 0:l.value}),href:m(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const ln=h({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let K=!1;function un(e,t){let n=!1,a,r;rt&&(we(()=>{window.addEventListener("popstate",s),a=e==null?void 0:e.beforeEach((i,l,u)=>{K?n?t(u):u():setTimeout(()=>n?t(u):u()),K=!0}),r=e==null?void 0:e.afterEach(()=>{K=!1})}),it(()=>{window.removeEventListener("popstate",s),a==null||a(),r==null||r()}));function s(i){var l;(l=i.state)!=null&&l.replaced||(n=!0,setTimeout(()=>n=!1))}}const Q=Symbol("rippleStop"),At=80;function be(e,t){e.style.transform=t,e.style.webkitTransform=t}function G(e){return e.constructor.name==="TouchEvent"}function Ie(e){return e.constructor.name==="KeyboardEvent"}const Dt=function(e,t){var y;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!Ie(e)){const b=t.getBoundingClientRect(),f=G(e)?e.touches[e.touches.length-1]:e;a=f.clientX-b.left,r=f.clientY-b.top}let s=0,i=.3;(y=t._ripple)!=null&&y.circle?(i=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const l=`${(t.clientWidth-s*2)/2}px`,u=`${(t.clientHeight-s*2)/2}px`,c=n.center?l:`${a-s}px`,d=n.center?u:`${r-s}px`;return{radius:s,scale:i,x:c,y:d,centerX:l,centerY:u}},M={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:i,x:l,y:u,centerX:c,centerY:d}=Dt(e,t,n),y=`${s*2}px`;r.className="v-ripple__animation",r.style.width=y,r.style.height=y,t.appendChild(a);const b=window.getComputedStyle(t);b&&b.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),be(r,`translate(${l}, ${u}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),be(r,`translate(${c}, ${d}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=n.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function Ne(e){return typeof e>"u"||!!e}function I(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Q])){if(e[Q]=!0,G(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Ie(e),n._ripple.class&&(t.class=n._ripple.class),G(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{M.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},At)}else M.show(e,n,t)}}function pe(e){e[Q]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),M.hide(t)}}function Oe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let N=!1;function Ae(e){!N&&(e.keyCode===fe.enter||e.keyCode===fe.space)&&(N=!0,I(e))}function De(e){N=!1,S(e)}function He(e){N&&(N=!1,S(e))}function We(e,t,n){const{value:a,modifiers:r}=t,s=Ne(a);if(s||M.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,ot(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",pe,{passive:!0}),e.addEventListener("mousedown",pe);return}e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",Oe,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",I),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",Ae),e.addEventListener("keyup",De),e.addEventListener("blur",He),e.addEventListener("dragstart",S,{passive:!0})}else!s&&n&&je(e)}function je(e){e.removeEventListener("mousedown",I),e.removeEventListener("touchstart",I),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",Oe),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",Ae),e.removeEventListener("keyup",De),e.removeEventListener("dragstart",S),e.removeEventListener("blur",He)}function Ht(e,t){We(e,t,!1)}function Wt(e){delete e._ripple,je(e)}function jt(e,t){if(t.value===t.oldValue)return;const n=Ne(t.oldValue);We(e,t,n)}const cn={mounted:Ht,unmounted:Wt,updated:jt};const Ft=h({start:Boolean,end:Boolean,icon:$e,image:String,text:String,...z(),...Ct(),...ie(),...Be(),...se(),...ne(),...Tt({variant:"flat"})},"VAvatar"),dn=L()({name:"VAvatar",props:Ft(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=ae(e),{colorClasses:r,colorStyles:s,variantClasses:i}=$t(e),{densityClasses:l}=kt(e),{roundedClasses:u}=oe(e),{sizeClasses:c,sizeStyles:d}=ze(e);return O(()=>o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,l.value,u.value,c.value,i.value,e.class],style:[s.value,d.value,e.style]},{default:()=>[n.default?o(dt,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?o(St,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(Pt,{key:"icon",icon:e.icon},null):e.text,xt(!1,"v-avatar")]})),{}}});export{gt as A,Re as B,ut as C,Ut as D,qt as E,Xt as F,Yt as G,rn as H,bt as I,un as J,en as K,tn as L,W as M,nn as N,Rt as O,Vt as P,an as Q,cn as R,Bt as S,sn as T,Kt as U,St as V,se as a,Jt as b,Gt as c,ie as d,J as e,Qt as f,Zt as g,oe as h,dt as i,Pt as j,dn as k,It as l,z as m,pt as n,Ct as o,Be as p,Tt as q,ln as r,$t as s,kt as t,O as u,ze as v,on as w,xt as x,vt as y,mt as z};