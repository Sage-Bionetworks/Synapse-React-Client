import{r as f,a as m,F as y,j as i}from"./jsx-runtime.9b9f5ec2.js";import{h as g,c3 as _}from"./index.65b6889e.js";import{B as F}from"./Button.17fde95a.js";const t=r=>{const{id:o,variant:c,label:d="Browse...",uploadCallback:e,context:p}=r,{accessToken:u}=g(),a=f.exports.useRef(null);return m(y,{children:[i("input",{type:"file",ref:a,onChange:async l=>{if(l.target.files){const s=l.target.files[0];try{const n=await _(u,s.name,s);e==null||e({success:!0,resp:n,context:p})}catch(n){console.log("FileUpload: fail to upload file",n),e==null||e({success:!1,error:n})}}},style:{display:"none"}}),i(F,{id:o,variant:c,onClick:()=>{var l;a!=null&&a.current&&((l=a.current)==null||l.click())},children:d})]})},O=t;try{t.displayName="FileUpload",t.__docgenInfo={description:"",displayName:"FileUpload",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},uploadCallback:{defaultValue:null,description:"",name:"uploadCallback",required:!1,type:{name:"((response: UploadCallbackResp) => void)"}},context:{defaultValue:null,description:"",name:"context",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/FileUpload.tsx#FileUpload"]={docgenInfo:t.__docgenInfo,name:"FileUpload",path:"src/lib/containers/FileUpload.tsx#FileUpload"})}catch{}export{O as F};
