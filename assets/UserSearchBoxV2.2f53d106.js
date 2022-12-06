import{r as n,R as g,j as s}from"./jsx-runtime.076c7567.js";import{S as C}from"./react-select.esm.e1b9a3ee.js";import"./index.53b0413e.js";import{a as E,U as x}from"./UserOrTeamBadge.48c906a7.js";import{u as N}from"./useGetInfoFromIds.1688b736.js";import{S as R}from"./Skeleton.83217f13.js";import{e as S}from"./Select-54ac8379.esm.96245f62.js";const v=(r,a,t)=>{n.exports.useEffect(()=>{const o=setTimeout(()=>r(),t);return()=>clearTimeout(o)},[...a||[],t])},L={Control:r=>{var a;return s(S.Control,{...r,className:`form-control ${(a=r.className)!=null?a:""}`})},SingleValue:r=>{const{data:a}=r;return n.exports.createElement(S.SingleValue,{...r,key:a.id},s(x,{userGroupHeader:a.header,disableHref:!0,showFullName:!0},a.header.ownerId))},Option:r=>{const{data:a}=r;return n.exports.createElement(S.Option,{...r,key:a.id},s(x,{userGroupHeader:a.header,disableHref:!0,showFullName:!0}))}},d=r=>{const{inputId:a,defaultValue:t=null,onChange:o,filterPredicate:c,typeFilter:y,placeholder:U,focusOnSelect:_=!1}=r,[l,I]=n.exports.useState(""),[i,O]=n.exports.useState("");v(()=>{O(l)},[l],500);const[p=void 0]=N({ids:t?[t]:[],type:"USER_PROFILE"}),{data:f,isLoading:u}=E(i,y),m=g.useRef(null);g.useEffect(()=>{_&&m.current&&m.current.focus()});const b=n.exports.useMemo(()=>u||l!==i?()=>"Loading\u2026":void 0,[u,i,l]),B=(f!=null?f:[]).filter(c!=null?c:()=>!0).map(e=>({id:e.ownerId.toString(),value:e.ownerId.toString(),label:e.userName,header:e}));return t&&p==null?s(R,{width:"100%"}):s(C,{className:"bootstrap-4-backport UserSearchBoxV2",ref:m,inputValue:l,onInputChange:I,filterOption:()=>!0,isLoading:u,options:!u&&B||[],noOptionsMessage:b,defaultValue:t?{id:t,value:t,label:p.userName,header:p}:void 0,inputId:a,isClearable:!0,styles:{control:e=>({...e,display:"flex !important"}),input:e=>({...e,input:{gridArea:"1 / 2 / 4 / 4 !important"}})},components:L,onChange:e=>{var h,V;o&&o((h=e==null?void 0:e.id)!=null?h:null,(V=e==null?void 0:e.header)!=null?V:null)},placeholder:U})},k=d;try{d.displayName="UserSearchBoxV2",d.__docgenInfo={description:"",displayName:"UserSearchBoxV2",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((principalId: string | null, header: UserGroupHeader | null) => void)"}},typeFilter:{defaultValue:null,description:"",name:"typeFilter",required:!1,type:{name:"enum",value:[{value:'"USERS_ONLY"'},{value:'"TEAMS_ONLY"'},{value:'"ALL"'}]}},filterPredicate:{defaultValue:null,description:"",name:"filterPredicate",required:!1,type:{name:"((item: UserGroupHeader) => boolean)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},focusOnSelect:{defaultValue:null,description:"",name:"focusOnSelect",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/UserSearchBoxV2.tsx#UserSearchBoxV2"]={docgenInfo:d.__docgenInfo,name:"UserSearchBoxV2",path:"src/lib/containers/UserSearchBoxV2.tsx#UserSearchBoxV2"})}catch{}export{k as U,v as u};
