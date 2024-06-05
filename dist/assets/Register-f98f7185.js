import{p as E,a5 as S,g as F,i as M,af as D,b as N,ac as T,c as o,k as c,n as q,x as h,y as b,z as i,A as z,B as a,D as L,E as W}from"./index-c2b80dfa.js";import{d as Z,a as j,u as G}from"./firebase-c87023ff.js";import{u as H,_ as g,k as J}from"./VAvatar-6a2b059e.js";import{V as p}from"./VContainer-3bdba5f4.js";import{a as K,c as O,d as V,V as u}from"./VTextField-d992a3b0.js";import{m as Q,V as f}from"./VCheckboxBtn-af3804a4.js";import{b as X,V as Y}from"./VCard-c3805857.js";import{V as $}from"./VBtn-c49c062c.js";import{V as ee}from"./VForm-a049f5d6.js";import{V as se}from"./VDialog-d9d7ca22.js";/* empty css              */import"./index-36ffb4e1.js";import"./forwardRefs-e658ad70.js";import"./group-b9b90c12.js";import"./VOverlay-c76fb81e.js";import"./lazy-70d760db.js";const le=E({...K(),...S(Q(),["inline"])},"VCheckbox"),re=F()({name:"VCheckbox",inheritAttrs:!1,props:le(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,l){let{attrs:d,slots:n}=l;const s=M(e,"modelValue"),{isFocused:t,focus:r,blur:x}=O(e),v=D(),y=N(()=>e.id||`checkbox-${v}`);return H(()=>{const[k,w]=T(d),C=V.filterProps(e),_=f.filterProps(e);return o(V,c({class:["v-checkbox",e.class]},k,C,{modelValue:s.value,"onUpdate:modelValue":m=>s.value=m,id:y.value,focused:t.value,style:e.style}),{...n,default:m=>{let{id:R,messagesId:P,isDisabled:U,isReadonly:I,isValid:A}=m;return o(f,c(_,{id:R.value,"aria-describedby":P.value,disabled:U.value,readonly:I.value},w,{error:A.value===!1,modelValue:s.value,"onUpdate:modelValue":B=>s.value=B,onFocus:r,onBlur:x}),n)}})}),{}}}),oe={data(){return{user:{name:"",email:"",pwd:"",confirm:""},terms:!1,visible:!0,isShow:!1,dialogtext:""}},methods:{register(){Z(j,this.user.email,this.user.pwd).then(e=>{const l=e.user;G(l,{displayName:this.user.name}),this.dialogtext="註冊成功",this.isShow=!0,setTimeout(()=>{q.push({name:"Login"})},500)}).catch(e=>{const l=e.code;switch(console.log(l),l){case"auth/invalid-email":this.dialogtext="Email格式不正確",this.isShow=!0;break;case"auth/email-already-in-use":this.dialogtext="Email已存在",this.isShow=!0;break}})},toggleVisibility(){this.visible=!this.visible}},computed:{required(e){return!!e||"必填項目"},emailRules(){return[e=>!!e||"Email必須填寫",e=>/.+@.+\..+/.test(e)||"請輸入有效格式"]},passwordRules(){return[e=>!!e||"密碼必須填寫",e=>e&&e.length>=8||"密碼須至少包含8個字符",e=>/[A-Z]/.test(e)||"密碼須包含至少一個大寫字母",e=>/[a-z]/.test(e)||"密碼須包含至少一個小寫字母",e=>/\d/.test(e)||"密碼須包含至少一個數字",e=>/[@#$%^&+=]/.test(e)||"密碼須包含至少一個特殊字符 (@#$%^&+=)"]},confirmRules(){return[e=>!!e||"必須填寫",e=>e===this.user.pwd||"密碼不匹配"]},formValid(){return!!this.user.name&&!!this.user.email&&!!this.user.pwd&&!!this.user.confirm&&!!this.terms}}},te=a("div",{class:"text-h4 text-center mb-5"},"會員註冊",-1),ie=a("hr",null,null,-1),ae={class:"text-center"},ne={class:"mt-7 mb-5"};function ue(e,l,d,n,s,t){return h(),b(p,{class:"bg-teal-lighten-5 fill-height",fluid:""},{default:i(()=>[o(ee,{modelValue:e.form,"onUpdate:modelValue":l[5]||(l[5]=r=>e.form=r),class:"mx-auto bg-white rounded-lg pa-5","max-width":"344",title:"註冊"},{default:i(()=>[o(p,null,{default:i(()=>[te,o(u,{modelValue:s.user.name,"onUpdate:modelValue":l[0]||(l[0]=r=>s.user.name=r),color:"primary",label:"User name...",variant:"underlined",placeholder:"your username",rules:[t.required]},null,8,["modelValue","rules"]),o(u,{modelValue:s.user.email,"onUpdate:modelValue":l[1]||(l[1]=r=>s.user.email=r),color:"primary",label:"Email...",variant:"underlined",placeholder:"your email",rules:t.emailRules},null,8,["modelValue","rules"]),o(u,{modelValue:s.user.pwd,"onUpdate:modelValue":l[2]||(l[2]=r=>s.user.pwd=r),color:"primary",label:"Password...",variant:"underlined",placeholder:"your password",rules:t.passwordRules,"append-inner-icon":s.visible?"mdi-eye-off":"mdi-eye",type:s.visible?"password":"text","onClick:appendInner":t.toggleVisibility},null,8,["modelValue","rules","append-inner-icon","type","onClick:appendInner"]),o(u,{modelValue:s.user.confirm,"onUpdate:modelValue":l[3]||(l[3]=r=>s.user.confirm=r),color:"primary",label:"Confirm Password...",rules:t.confirmRules,"append-inner-icon":s.visible?"mdi-eye-off":"mdi-eye",type:s.visible?"password":"text",placeholder:"Re-Enter your password",variant:"underlined","onClick:appendInner":t.toggleVisibility},null,8,["modelValue","rules","append-inner-icon","type","onClick:appendInner"]),o(re,{modelValue:s.terms,"onUpdate:modelValue":l[4]||(l[4]=r=>s.terms=r),color:"secondary",label:"I agree to site terms and conditions",class:"ml-n5"},null,8,["modelValue"])]),_:1}),ie,o(X,null,{default:i(()=>[o($,{block:"",class:"bg-success",disabled:!t.formValid,onClick:t.register},{default:i(()=>[z(" 註冊 "),o(J,{icon:"mdi-chevron-right",end:""})]),_:1},8,["disabled","onClick"])]),_:1})]),_:1},8,["modelValue"]),o(se,{modelValue:s.isShow,"onUpdate:modelValue":l[6]||(l[6]=r=>s.isShow=r),"max-width":"350px",transition:"dialog-top-transition",class:"mt-n16"},{default:i(()=>[a("div",ae,[o(Y,null,{default:i(()=>[a("div",ne,[a("div",null,L(s.dialogtext),1)])]),_:1})])]),_:1},8,["modelValue"])]),_:1})}const de=g(oe,[["render",ue]]),me={name:"Register",components:{RegisterMain:de}};function ce(e,l,d,n,s,t){const r=W("Register-Main");return h(),b(r)}const Ie=g(me,[["render",ce]]);export{Ie as default};