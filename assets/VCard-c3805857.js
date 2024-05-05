import{m as g,u as b,U as f,o as S,j as A,k as h,i as k,b as z,y as K,c as Q,K as U,P as $,Q as G,d as J,r as W,a as X,q as Y,R as Z,f as ee,s as ae,t as te,z as ne,g as de,L as ie,S as le,T as se,h as ce,w as re,V as ue,N as ve,x as oe}from"./VAvatar-6a2b059e.js";import{g as I,d as me,c as n,p as x,P as u,H as p,m as ye,a as ke,b as P,N as ge,O as be}from"./index-c2b80dfa.js";const fe=I()({name:"VCardActions",props:g(),setup(e,i){let{slots:t}=i;return me({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=f("v-card-subtitle"),Ce=f("v-card-title"),Ve=x({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...g(),...S()},"VCardItem"),Ae=I()({name:"VCardItem",props:Ve(),setup(e,i){let{slots:t}=i;return b(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),o=!!(l||t.append),m=!!(e.title!=null||t.title),y=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(p,null,[e.prependAvatar&&n(A,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(h,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ce,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),y&&n(Ie,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(p,null,[e.appendIcon&&n(h,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(A,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=f("v-card-text"),pe=x({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...z(),...g(),...S(),...K(),...Q(),...U(),...$(),...G(),...J(),...W(),...X(),...ye(),...Y({variant:"elevated"})},"VCard"),xe=I()({name:"VCard",directives:{Ripple:Z},props:pe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=ke(e),{borderClasses:l}=ee(e),{colorClasses:o,colorStyles:m,variantClasses:y}=ae(e),{densityClasses:s}=te(e),{dimensionStyles:d}=ne(e),{elevationClasses:T}=de(e),{loaderClasses:L}=ie(e),{locationStyles:B}=le(e),{positionClasses:D}=se(e),{roundedClasses:N}=ce(e),c=re(e,t),_=P(()=>e.link!==!1&&c.isLink.value),r=P(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return b(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),O=!!(a.subtitle||e.subtitle!=null),j=F||O,w=!!(a.append||e.appendAvatar||e.appendIcon),E=!!(a.prepend||e.prependAvatar||e.prependIcon),H=!!(a.image||e.image),M=j||E||w,q=!!(a.text||e.text!=null);return ge(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,l.value,o.value,s.value,T.value,L.value,D.value,N.value,y.value,e.class],style:[m.value,d.value,B.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[H&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ue,{key:"image-img",cover:!0,src:e.image},null)]),n(ve,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),M&&n(Ae,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(he,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(fe,null,{default:a.actions}),oe(r.value,"v-card")]}}),[[be("ripple"),r.value&&e.ripple]])}),{}}});export{xe as V,he as a,fe as b,Ce as c,Ie as d};
