import{_ as p,r as m,o as n,L as f,g as a,f as o,h as g,e as i,w,c as x,t as d,d as V,b as v}from"./index-19afddfb.js";import{c as C,a as b}from"./firebase-c87023ff.js";import{V as S}from"./VForm-22b13136.js";import{V as k}from"./VRow-bbd300a0.js";import{V as y}from"./VTextField-7361a743.js";import{V as c}from"./VBtn-cf7fa0a2.js";import{V as u,b as E}from"./VCard-404c198d.js";import{V as F}from"./VDialog-5b83e5a7.js";import{V as M}from"./VContainer-4627115c.js";import"./VAvatar-b3e1e968.js";import"./forwardRefs-e658ad70.js";/* empty css              */import"./index-045f131f.js";import"./group-28cdc81c.js";import"./VOverlay-1e69d6fc.js";import"./lazy-0b2c4299.js";const B={name:"ForgotpwdMain",data(){return{form:!1,loading:!1,emailError:"",user:{email:""},isShow:!1,dialogtext:""}},methods:{resend(){C(b,this.user.email).then(()=>{this.dialogtext="已寄送信件,請查看您的信箱以重設密碼",this.loading=!0,this.isShow=!0,this.user={email:""},setTimeout(()=>{m.push({name:"Login"})},500)}).catch(r=>{switch(r.code){case"auth/missing-email":this.dialogtext="請輸入電子郵件",this.isShow=!0,this.loading=!1;break;case"auth/invalid-email":this.dialogtext="請輸入正確的電子郵件格式",this.isShow=!0,this.loading=!1;break}})},Cancle(){m.push({name:"Login"})}},watch:{"user.email":function(r){/^\S+@\S+\.\S+$/.test(r)?this.emailError="":this.emailError="請輸入有效的Email格式"}}},N=i("div",{class:"mb-8 text-h4"},"重設密碼",-1),L=i("div",{class:"text-caption"},"我們會寄信給您，讓您重新設定密碼。",-1),P={key:0,class:"text-red text-h7 my-n5"},T={class:"text-center"},D={class:"mt-7 mb-3"};function R(r,e,h,_,t,l){return n(),f(M,{class:"bg-teal-lighten-5 fill-height pa-12",fluid:""},{default:a(()=>[o(u,{"max-width":"500",class:"ma-auto px-6 py-8 w-100"},{default:a(()=>[o(S,{ref:"form"},{default:a(()=>[N,L,o(k,{class:"align-center mb-1 mt-5"},{default:a(()=>[o(y,{label:"Email...",class:"mr-2",modelValue:t.user.email,"onUpdate:modelValue":e[0]||(e[0]=s=>t.user.email=s)},null,8,["modelValue"]),o(c,{type:"submit",loading:t.loading,onClick:l.resend},{default:a(()=>[g("提交")]),_:1},8,["loading","onClick"])]),_:1}),i("div",{class:"text-h10 fw-4",style:{cursor:"pointer"},onClick:e[1]||(e[1]=w((...s)=>l.Cancle&&l.Cancle(...s),["prevent"]))},"取消"),t.emailError?(n(),x("div",P,d(t.emailError),1)):V("",!0)]),_:1},512)]),_:1}),o(F,{modelValue:t.isShow,"onUpdate:modelValue":e[3]||(e[3]=s=>t.isShow=s),"max-width":"350px",transition:"dialog-top-transition",class:"mt-n16"},{default:a(()=>[i("div",T,[o(u,null,{default:a(()=>[i("div",D,[i("div",null,d(t.dialogtext),1)]),o(E,{class:"mb-3 d-flex justify-center tonal"},{default:a(()=>[o(c,{text:"確認",onClick:e[2]||(e[2]=s=>t.isShow=!1),color:"#5865f2",variant:"flat"})]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),_:1})}const U=p(B,[["render",R]]),j={name:"ForgotPwd",components:{ForgotpwdMain:U}};function A(r,e,h,_,t,l){const s=v("Forgotpwd-Main");return n(),f(s)}const oe=p(j,[["render",A]]);export{oe as default};