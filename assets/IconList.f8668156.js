import{I as a}from"./IconSvg.e72d865a.js";import{a as p,j as o,F as f}from"./jsx-runtime.6cb91464.js";const e=s=>{const{iconConfigs:n,iconNames:u,useTheme:l,useBackground:d}=s;let t=!1;const i=l?"icon-list themed":"icon-list",m=d?`${i} bg-circle`:i;return p("span",{className:m,children:[(()=>Array.from(new Set(u)).map(c=>{const r=n[c];if(r)return o(a,{...r},c);t=!0}))(),t&&n.other?o(a,{...n.other}):o(f,{})]})},S=e;try{e.displayName="IconList",e.__docgenInfo={description:"",displayName:"IconList",props:{iconConfigs:{defaultValue:null,description:"",name:"iconConfigs",required:!0,type:{name:"{ [index: string]: IconSvgProps; }"}},iconNames:{defaultValue:null,description:"",name:"iconNames",required:!0,type:{name:"string[]"}},useTheme:{defaultValue:null,description:"",name:"useTheme",required:!1,type:{name:"boolean"}},useBackground:{defaultValue:null,description:"",name:"useBackground",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/IconList.tsx#IconList"]={docgenInfo:e.__docgenInfo,name:"IconList",path:"src/lib/containers/IconList.tsx#IconList"})}catch{}export{S as I};
