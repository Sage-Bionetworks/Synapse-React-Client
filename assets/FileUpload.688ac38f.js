import{f,c9 as m}from"./index.059e0d20.js";import{a as y,F as g,j as o}from"./jsx-runtime.00d70968.js";import{B as _}from"./Button.fda23eee.js";const F=window.React,t=s=>{const{id:r,variant:c,label:d="Browse...",uploadCallback:e,context:p}=s,{accessToken:u}=f(),a=F.useRef(null);return y(g,{children:[o("input",{type:"file",ref:a,onChange:async l=>{if(l.target.files){const i=l.target.files[0];try{const n=await m(u,i.name,i);e==null||e({success:!0,resp:n,context:p})}catch(n){console.log("FileUpload: fail to upload file",n),e==null||e({success:!1,error:n})}}},style:{display:"none"}}),o(_,{id:r,variant:c,onClick:()=>{var l;a!=null&&a.current&&((l=a.current)==null||l.click())},children:d})]})},C=t;try{t.displayName="FileUpload",t.__docgenInfo={description:"",displayName:"FileUpload",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},uploadCallback:{defaultValue:null,description:"",name:"uploadCallback",required:!1,type:{name:"((response: UploadCallbackResp) => void)"}},context:{defaultValue:null,description:"",name:"context",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/FileUpload.tsx#FileUpload"]={docgenInfo:t.__docgenInfo,name:"FileUpload",path:"src/lib/containers/FileUpload.tsx#FileUpload"})}catch{}export{C as F};
