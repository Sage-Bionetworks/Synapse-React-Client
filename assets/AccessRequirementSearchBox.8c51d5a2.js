import{r as n,j as A}from"./jsx-runtime.e6c7cb0f.js";import{_ as de,f as u,h as le,b as C,i as fe,u as Se,S as me,e as he}from"./Select-54ac8379.esm.1e9a4ed4.js";import"./index.2be90583.js";import{M as Oe,aP as ge,aS as ve}from"./index.a4d7c90b.js";import{a as _e}from"./useAccessRequirements.b54ba1ba.js";import{S as xe}from"./Skeleton.fe2a8391.js";var Ie=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function ye(t){var a=t.defaultOptions,e=a===void 0?!1:a,d=t.cacheOptions,l=d===void 0?!1:d,f=t.loadOptions;t.options;var i=t.isLoading,R=i===void 0?!1:i,_=t.onInputChange,m=t.filterOption,x=m===void 0?null:m,s=de(t,Ie),h=s.inputValue,o=n.exports.useRef(void 0),p=n.exports.useRef(!1),I=n.exports.useState(Array.isArray(e)?e:void 0),c=u(I,2),z=c[0],T=c[1],F=n.exports.useState(typeof h<"u"?h:""),N=u(F,2),j=N[0],L=N[1],H=n.exports.useState(e===!0),w=u(H,2),J=w[0],O=w[1],Q=n.exports.useState(void 0),D=u(Q,2),q=D[0],b=D[1],U=n.exports.useState([]),M=u(U,2),X=M[0],B=M[1],Z=n.exports.useState(!1),k=u(Z,2),ee=k[0],y=k[1],te=n.exports.useState({}),K=u(te,2),g=K[0],Y=K[1],ne=n.exports.useState(void 0),G=u(ne,2),ae=G[0],se=G[1],re=n.exports.useState(void 0),W=u(re,2),oe=W[0],ie=W[1];l!==oe&&(Y({}),ie(l)),e!==ae&&(T(Array.isArray(e)?e:void 0),se(e)),n.exports.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var V=n.exports.useCallback(function(v,S){if(!f)return S();var r=f(v,S);r&&typeof r.then=="function"&&r.then(S,function(){return S()})},[f]);n.exports.useEffect(function(){e===!0&&V(j,function(v){!p.current||(T(v||[]),O(!!o.current))})},[]);var ue=n.exports.useCallback(function(v,S){var r=le(v,S,_);if(!r){o.current=void 0,L(""),b(""),B([]),O(!1),y(!1);return}if(l&&g[r])L(r),b(r),B(g[r]),O(!1),y(!1);else{var ce=o.current={};L(r),O(!0),y(!q),V(r,function(P){!p||ce===o.current&&(o.current=void 0,O(!1),b(r),B(P||[]),y(!1),Y(P?C(C({},g),{},fe({},r,P)):g))})}},[l,V,q,g,_]),pe=ee?[]:j&&q?X:z||[];return C(C({},s),{},{options:pe,isLoading:J||R,onInputChange:ue,filterOption:x})}var Ce=n.exports.forwardRef(function(t,a){var e=ye(t),d=Se(e);return A(me,{ref:a,...d})});const Ae=Ce;function E(t,a){return t.toString()===a?a:`${a} (${t})`}const Re={Control:t=>{var a;return A(he.Control,{...t,className:`form-control ${(a=t.className)!=null?a:""}`})}};function $(t){var m,x;const{inputId:a,initialId:e,onChange:d,placeholder:l}=t,{accessToken:f}=Oe(),{data:i,isLoading:R}=_e(e,{enabled:!!e});async function _(s){var p,I;const h=parseInt(s);let o;return h&&(o=[await ge(f,h)]),o||(o=(p=await ve(f,{nameContains:s}))==null?void 0:p.results),(I=o==null?void 0:o.map(c=>({id:c.id.toString(),value:c.id.toString(),label:E(c.id,c.name)})))!=null?I:[]}return e&&R?A(xe,{width:"100%"}):A(Ae,{className:"bootstrap-4-backport",defaultInputValue:e?E(e,(m=i==null?void 0:i.name)!=null?m:e.toString()):void 0,defaultOptions:e?[{id:e,value:e,label:E(e,(x=i==null?void 0:i.name)!=null?x:e.toString())}]:!0,inputId:a,cacheOptions:!0,isClearable:!0,styles:{control:s=>({...s,display:"flex !important"}),input:s=>({...s,input:{gridArea:"1 / 2 / 4 / 4 !important"}})},components:Re,loadOptions:_,onChange:s=>{d(s==null?void 0:s.id.toString())},placeholder:l})}try{$.displayName="AccessRequirementSearchBox",$.__docgenInfo={description:"",displayName:"AccessRequirementSearchBox",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},initialId:{defaultValue:null,description:"",name:"initialId",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(accessRequirementId?: string | undefined) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/dataaccess/AccessRequirementSearchBox.tsx#AccessRequirementSearchBox"]={docgenInfo:$.__docgenInfo,name:"AccessRequirementSearchBox",path:"src/lib/containers/dataaccess/AccessRequirementSearchBox.tsx#AccessRequirementSearchBox"})}catch{}export{$ as A};
