import{p as F,a6 as M,g as L,i as D,ag as N,b as q,ad as T,c as o,k as c,_ as g,q as p,B as y,C as x,D as a,G as i,H as z,E as V,L as G,z as H}from"./index-7c7db64b.js";import{d as W,a as Z,u as j}from"./firebase-c87023ff.js";import{V as f}from"./VContainer-c72e344e.js";import{a as J,c as K,d as h,V as u}from"./VTextField-553e4953.js";import{m as O,V as b}from"./VCheckboxBtn-4ec53851.js";import{u as Q}from"./VAvatar-04a00f10.js";import{b as X,V as Y}from"./VCard-10989986.js";import{V as $}from"./VBtn-1a376f6a.js";import{V as ee}from"./VForm-2b5cbe9b.js";import{V as se}from"./VDialog-c29b2826.js";/* empty css              */import"./index-53c4966a.js";import"./forwardRefs-e658ad70.js";import"./group-059c7191.js";import"./VOverlay-a2d7cb61.js";import"./lazy-4eee2d09.js";const te=F({...J(),...M(O(),["inline"])},"VCheckbox"),le=L()({name:"VCheckbox",inheritAttrs:!1,props:te(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,s){let{attrs:d,slots:n}=s;const t=D(e,"modelValue"),{isFocused:r,focus:l,blur:v}=K(e),k=N(),w=q(()=>e.id||`checkbox-${k}`);return Q(()=>{const[C,_]=T(d),R=h.filterProps(e),P=b.filterProps(e);return o(h,c({class:["v-checkbox",e.class]},C,R,{modelValue:t.value,"onUpdate:modelValue":m=>t.value=m,id:w.value,focused:r.value,style:e.style}),{...n,default:m=>{let{id:U,messagesId:I,isDisabled:B,isReadonly:A,isValid:E}=m;return o(b,c(P,{id:U.value,"aria-describedby":I.value,disabled:B.value,readonly:A.value},_,{error:E.value===!1,modelValue:t.value,"onUpdate:modelValue":S=>t.value=S,onFocus:l,onBlur:v}),n)}})}),{}}}),oe={data(){return{user:{name:"",email:"",pwd:"",confirm:""},terms:!1,visible:!0,isShow:!1,dialogtext:""}},methods:{register(){W(Z,this.user.email,this.user.pwd).then(e=>{const s=e.user;j(s,{displayName:this.user.name}),this.dialogtext="註冊成功",this.isShow=!0,setTimeout(()=>{p.push({name:"Login"})},500)}).catch(e=>{const s=e.code;switch(console.log(s),s){case"auth/invalid-email":this.dialogtext="Email格式不正確",this.isShow=!0;break;case"auth/email-already-in-use":this.dialogtext="Email已存在",this.isShow=!0;break}})},toggleVisibility(){this.visible=!this.visible},Login(){p.push({name:"Login"})}},computed:{required(e){return!!e||"必填項目"},emailRules(){return[e=>!!e||"Email必須填寫",e=>/.+@.+\..+/.test(e)||"請輸入有效格式"]},passwordRules(){return[e=>!!e||"密碼必須填寫",e=>e&&e.length>=8||"密碼須至少包含8個字符",e=>/[A-Z]/.test(e)||"密碼須包含至少一個大寫字母",e=>/[a-z]/.test(e)||"密碼須包含至少一個小寫字母",e=>/\d/.test(e)||"密碼須包含至少一個數字",e=>/[@#$%^&+=]/.test(e)||"密碼須包含至少一個特殊字符 (@#$%^&+=)"]},confirmRules(){return[e=>!!e||"必須填寫",e=>e===this.user.pwd||"密碼不匹配"]},formValid(){return!!this.user.name&&!!this.user.email&&!!this.user.pwd&&!!this.user.confirm&&!!this.terms}}},re=i("div",{class:"text-h4 text-center mb-5"},"註冊會員",-1),ie={class:"text-center mb-8"},ae=i("span",{style:{color:"red","text-decoration":"underline"}},"登入",-1),ne=i("hr",null,null,-1),ue={class:"text-center"},de={class:"mt-7 mb-5"};function me(e,s,d,n,t,r){return y(),x(f,{class:"fill-height",style:{background:"linear-gradient(to right, #e2e2e2, #d7f0e5)"},fluid:""},{default:a(()=>[o(ee,{modelValue:e.form,"onUpdate:modelValue":s[6]||(s[6]=l=>e.form=l),class:"mx-auto bg-white rounded-lg pa-10 mb-16 mt-16","max-width":"800",title:"註冊","data-aos":"flip-right","data-aos-duration":"1000"},{default:a(()=>[o(f,null,{default:a(()=>[re,i("div",ie,[i("a",{href:"#",onClick:s[0]||(s[0]=z(l=>r.Login(),["prevent"])),class:"text-caption"},[V("已經是會員？ "),ae])]),o(u,{modelValue:t.user.name,"onUpdate:modelValue":s[1]||(s[1]=l=>t.user.name=l),color:"primary",label:"暱稱...",variant:"underlined",style:{"caret-color":"pink"},placeholder:"your username",rules:[r.required]},null,8,["modelValue","rules"]),o(u,{modelValue:t.user.email,"onUpdate:modelValue":s[2]||(s[2]=l=>t.user.email=l),color:"primary",label:"Email...",variant:"underlined",style:{"caret-color":"pink"},placeholder:"your email",rules:r.emailRules},null,8,["modelValue","rules"]),o(u,{modelValue:t.user.pwd,"onUpdate:modelValue":s[3]||(s[3]=l=>t.user.pwd=l),color:"primary",label:"密碼...",variant:"underlined",style:{"caret-color":"pink"},placeholder:"your password",rules:r.passwordRules,"append-inner-icon":t.visible?"mdi-eye-off":"mdi-eye",type:t.visible?"password":"text","onClick:appendInner":r.toggleVisibility},null,8,["modelValue","rules","append-inner-icon","type","onClick:appendInner"]),o(u,{modelValue:t.user.confirm,"onUpdate:modelValue":s[4]||(s[4]=l=>t.user.confirm=l),color:"primary",label:"密碼確認...",rules:r.confirmRules,style:{"caret-color":"pink"},"append-inner-icon":t.visible?"mdi-eye-off":"mdi-eye",type:t.visible?"password":"text",placeholder:"Re-Enter your password",variant:"underlined","onClick:appendInner":r.toggleVisibility},null,8,["modelValue","rules","append-inner-icon","type","onClick:appendInner"]),o(le,{modelValue:t.terms,"onUpdate:modelValue":s[5]||(s[5]=l=>t.terms=l),color:"secondary",label:"I agree to site terms and conditions",class:"ml-n5 text-caption"},null,8,["modelValue"])]),_:1}),ne,o(X,{class:"mt-5"},{default:a(()=>[o($,{block:"",class:"bg-success",disabled:!r.formValid,onClick:r.register},{default:a(()=>[V(" 註冊 ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1},8,["modelValue"]),o(se,{modelValue:t.isShow,"onUpdate:modelValue":s[7]||(s[7]=l=>t.isShow=l),"max-width":"350px",transition:"dialog-top-transition",class:"mt-n16"},{default:a(()=>[i("div",ue,[o(Y,null,{default:a(()=>[i("div",de,[i("div",null,G(t.dialogtext),1)])]),_:1})])]),_:1},8,["modelValue"])]),_:1})}const ce=g(oe,[["render",me]]),pe={name:"Register",components:{RegisterMain:ce}};function Ve(e,s,d,n,t,r){const l=H("Register-Main");return y(),x(l)}const Ae=g(pe,[["render",Ve]]);export{Ae as default};