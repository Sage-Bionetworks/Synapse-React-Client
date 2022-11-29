import{r as A,a as h,j as n,F as $}from"./jsx-runtime.31268528.js";import{M as E}from"./Modal.befa9583.js";import{T as C}from"./Typography.7deb443e.js";import{B as K}from"./Button.3eb9449f.js";import{g as V,d as j,s as v,A as t,_ as l,e as D,h as U,i as w,j as Y,J as F,K as X}from"./styled.0bfd4c69.js";import{u as H}from"./useTheme.910eaec3.js";import{k as L,c as k}from"./emotion-react.browser.esm.d60ec8ed.js";function J(r){return V("MuiLinearProgress",r)}j("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const W=["className","color","value","valueBuffer","variant"];let c=r=>r,T,I,N,R,O,q;const S=4,G=L(T||(T=c`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),Q=L(I||(I=c`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Z=L(N||(N=c`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),rr=r=>{const{classes:e,variant:a,color:o}=r,d={root:["root",`color${t(o)}`,a],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${t(o)}`,a==="buffer"&&`color${t(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return Y(d,J,e)},x=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?F(r.palette[e].main,.62):X(r.palette[e].main,.5),er=v("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${t(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),ar=v("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${t(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=x(e,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},k(R||(R=c`
    animation: ${0} 3s infinite linear;
  `),Z)),nr=v("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${S}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${S}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&k(O||(O=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),G)),or=v("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(e,r.color),transition:`transform .${S}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&k(q||(q=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Q)),tr=A.exports.forwardRef(function(e,a){const o=D({props:e,name:"MuiLinearProgress"}),{className:d,color:m="primary",value:u,valueBuffer:P,variant:s="indeterminate"}=o,z=U(o,W),f=l({},o,{color:m,variant:s}),p=rr(f),B=H(),b={},g={bar1:{},bar2:{}};if((s==="determinate"||s==="buffer")&&u!==void 0){b["aria-valuenow"]=Math.round(u),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let i=u-100;B.direction==="rtl"&&(i=-i),g.bar1.transform=`translateX(${i}%)`}if(s==="buffer"&&P!==void 0){let i=(P||0)-100;B.direction==="rtl"&&(i=-i),g.bar2.transform=`translateX(${i}%)`}return h(er,l({className:w(p.root,d),ownerState:f,role:"progressbar"},b,{ref:a},z,{children:[s==="buffer"?n(ar,{className:p.dashed,ownerState:f}):null,n(nr,{className:p.bar1,ownerState:f,style:g.bar1}),s==="determinate"?null:n(or,{className:p.bar2,ownerState:f,style:g.bar2})]}))}),M=tr;const mr=n("div",{className:"bar-loader",children:n(M,{classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"}})}),y=({size:r=20})=>n("div",{className:"spinner",style:{height:`${r}px`,width:`${r}px`,backgroundSize:`${r}px`}}),_=({show:r,currentProgress:e,onCancel:a,totalProgress:o,headlineText:d,hintText:m})=>{A.exports.useEffect(()=>(document.body.style.cursor=r?"wait":"default",()=>{document.body.style.cursor="default"}),[r]);const u=h($,{children:[n("div",{className:"bar-loader",children:n(M,{"data-testid":"progress-bar",variant:"determinate",classes:{colorPrimary:"bar-background-color",barColorPrimary:"bar-color"},value:e/o*100})}),n(C,{variant:"headline3",children:d}),n(C,{variant:"hintText",children:m})]});return n(E,{className:"bootstrap-4-backport BlockingLoader",backdrop:!1,animation:!1,show:r,size:"sm",centered:!0,onHide:()=>{},children:h("div",{className:"SpinnerContainer","data-testid":"spinner-container",children:[o?u:h($,{children:[n(y,{size:40}),n(C,{variant:"headline3","data-testid":"spinner-hint-text",children:m})]}),a&&n(K,{variant:"default",onClick:a,children:"Cancel"})]})})};try{y.displayName="SynapseSpinner",y.__docgenInfo={description:"",displayName:"SynapseSpinner",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoadingScreen.tsx#SynapseSpinner"]={docgenInfo:y.__docgenInfo,name:"SynapseSpinner",path:"src/lib/containers/LoadingScreen.tsx#SynapseSpinner"})}catch{}try{_.displayName="BlockingLoader",_.__docgenInfo={description:"",displayName:"BlockingLoader",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},currentProgress:{defaultValue:null,description:"",name:"currentProgress",required:!1,type:{name:"number"}},totalProgress:{defaultValue:null,description:"",name:"totalProgress",required:!1,type:{name:"number"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},hintText:{defaultValue:null,description:"",name:"hintText",required:!1,type:{name:"string"}},headlineText:{defaultValue:null,description:"",name:"headlineText",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoadingScreen.tsx#BlockingLoader"]={docgenInfo:_.__docgenInfo,name:"BlockingLoader",path:"src/lib/containers/LoadingScreen.tsx#BlockingLoader"})}catch{}export{_ as B,y as S,mr as l};
