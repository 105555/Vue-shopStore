import{m as M,o as z,u as A,R as J,k as K,t as W,B as X,e as Y}from"./VAvatar-6a2b059e.js";import{p as I,P as B,a0 as Z,m as p,g as F,i as g,af as N,b as o,M as ee,a3 as le,d as te,t as i,c as d,s as R,r as ae,ac as ne,k as P,N as oe,O as ue,H as ie,Q as re,a7 as x,a8 as ce,S as se,a5 as de}from"./index-c2b80dfa.js";import{h as ve}from"./VTextField-d992a3b0.js";const O=Symbol.for("vuetify:selection-control-group"),E=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Z},...M(),...z(),...p()},"SelectionControlGroup"),fe=I({...E({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");F()({name:"VSelectionControlGroup",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=g(e,"modelValue"),a=N(),v=o(()=>e.id||`v-selection-control-group-${a}`),r=o(()=>e.name||v.value),t=new Set;return ee(O,{modelValue:l,forceUpdate:()=>{t.forEach(n=>n())},onForceUpdate:n=>{t.add(n),le(()=>{t.delete(n)})}}),te({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),A(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}});const H=I({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...M(),...E()},"VSelectionControl");function me(e){const u=re(O,void 0),{densityClasses:c}=W(e),l=g(e,"modelValue"),a=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=o({get(){const m=u?u.modelValue.value:l.value;return r.value?x(m).some(s=>e.valueComparator(s,a.value)):e.valueComparator(m,a.value)},set(m){if(e.readonly)return;const s=m?a.value:v.value;let y=s;r.value&&(y=m?[...x(l.value),s]:x(l.value).filter(V=>!e.valueComparator(V,a.value))),u?u.modelValue.value=y:l.value=y}}),{textColorClasses:n,textColorStyles:C}=X(o(()=>{if(!(e.error||e.disabled))return t.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:k}=Y(o(()=>t.value&&!e.error&&!e.disabled?e.color:void 0)),h=o(()=>t.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:a,falseValue:v,model:t,textColorClasses:n,textColorStyles:C,backgroundColorClasses:b,backgroundColorStyles:k,icon:h}}const _=F()({name:"VSelectionControl",directives:{Ripple:J},inheritAttrs:!1,props:H(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:a,densityClasses:v,icon:r,model:t,textColorClasses:n,textColorStyles:C,backgroundColorClasses:b,backgroundColorStyles:k,trueValue:h}=me(e),m=N(),s=R(!1),y=R(!1),V=ae(),S=o(()=>e.id||`input-${m}`),G=o(()=>!e.disabled&&!e.readonly);a==null||a.onForceUpdate(()=>{V.value&&(V.value.checked=t.value)});function w(f){G.value&&(s.value=!0,ce(f.target,":focus-visible")!==!1&&(y.value=!0))}function D(){s.value=!1,y.value=!1}function L(f){f.stopPropagation()}function j(f){G.value&&(e.readonly&&a&&se(()=>a.forceUpdate()),t.value=f.target.checked)}return A(()=>{var U,$;const f=l.label?l.label({label:e.label,props:{for:S.value}}):e.label,[q,Q]=ne(c),T=d("input",P({ref:V,checked:t.value,disabled:!!e.disabled,id:S.value,onBlur:D,onFocus:w,onInput:j,"aria-disabled":!!e.disabled,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},Q),null);return d("div",P({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},v.value,e.class]},q,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:C.value},[(U=l.default)==null?void 0:U.call(l,{backgroundColorClasses:b,backgroundColorStyles:k}),oe(d("div",{class:["v-selection-control__input"]},[(($=l.input)==null?void 0:$.call(l,{model:t,textColorClasses:n,textColorStyles:C,backgroundColorClasses:b,backgroundColorStyles:k,inputNode:T,icon:r.value,props:{onFocus:w,onBlur:D,id:S.value}}))??d(ie,null,[r.value&&d(K,{key:"icon",icon:r.value},null),T])]),[[ue("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),f&&d(ve,{for:S.value,onClick:L},{default:()=>[f]})])}),{isFocused:s,input:V}}}),ye=I({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...H({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ke=F()({name:"VCheckboxBtn",props:ye(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=g(e,"indeterminate"),a=g(e,"modelValue");function v(n){l.value&&(l.value=!1)}const r=o(()=>l.value?e.indeterminateIcon:e.falseIcon),t=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return A(()=>{const n=de(_.filterProps(e),["modelValue"]);return d(_,P(n,{modelValue:a.value,"onUpdate:modelValue":[C=>a.value=C,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:t.value,"aria-checked":l.value?"mixed":void 0}),c)}),{}}});export{ke as V,ye as m};
