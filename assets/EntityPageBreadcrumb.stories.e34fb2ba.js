import{I as se}from"./IconSvg.b4c3e826.js";import{j as o,r as f,a as ae,F as ie}from"./jsx-runtime.189701ee.js";import{s as x,_ as p,A as q,d as K,g as Y,e as X,h as J,i as Q,j as Z,B as G,r as le,o as ee}from"./styled.6dbd55b6.js";import{c as ce}from"./createSvgIcon.4942519b.js";import{B as ue}from"./ButtonBase.37b064e9.js";import{T as z}from"./Typography.98c54a5a.js";import{b as pe,T as de}from"./Tooltip.23ad89d7.js";import{a as fe}from"./utils.7f7b7d48.js";import"./SvgIcon.2c64a678.js";import"./InfoOutlined.b271da40.js";import"./iframe.d1747881.js";import"./emotion-react.browser.esm.3ce94781.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./index.1acdd9cd.js";var me={exports:{}},r={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=Symbol.for("react.element"),U=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),w=Symbol.for("react.context"),ye=Symbol.for("react.server_context"),H=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),te;te=Symbol.for("react.module.reference");function u(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case O:switch(e=e.type,e){case T:case P:case _:case L:case I:return e;default:switch(e=e&&e.$$typeof,e){case ye:case w:case H:case V:case j:case A:return e;default:return t}}case U:return t}}}r.ContextConsumer=w;r.ContextProvider=A;r.Element=O;r.ForwardRef=H;r.Fragment=T;r.Lazy=V;r.Memo=j;r.Portal=U;r.Profiler=P;r.StrictMode=_;r.Suspense=L;r.SuspenseList=I;r.isAsyncMode=function(){return!1};r.isConcurrentMode=function(){return!1};r.isContextConsumer=function(e){return u(e)===w};r.isContextProvider=function(e){return u(e)===A};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===O};r.isForwardRef=function(e){return u(e)===H};r.isFragment=function(e){return u(e)===T};r.isLazy=function(e){return u(e)===V};r.isMemo=function(e){return u(e)===j};r.isPortal=function(e){return u(e)===U};r.isProfiler=function(e){return u(e)===P};r.isStrictMode=function(e){return u(e)===_};r.isSuspense=function(e){return u(e)===L};r.isSuspenseList=function(e){return u(e)===I};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===T||e===P||e===_||e===L||e===I||e===be||typeof e=="object"&&e!==null&&(e.$$typeof===V||e.$$typeof===j||e.$$typeof===A||e.$$typeof===w||e.$$typeof===H||e.$$typeof===te||e.getModuleId!==void 0)};r.typeOf=u;(function(e){e.exports=r})(me);const ge=ce(o("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),xe=x(ue)(({theme:e})=>p({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":p({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":p({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:q(e.palette.grey[200],.12)}:{backgroundColor:q(e.palette.grey[600],.12)})})),Ce=x(ge)({width:24,height:16});function he(e){const t=e;return o("li",{children:o(xe,p({focusRipple:!0},e,{ownerState:t,children:o(Ce,{ownerState:t})}))})}function ke(e){return Y("MuiBreadcrumbs",e)}const Se=K("MuiBreadcrumbs",["root","ol","li","separator"]),Be=Se,ve=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Fe=e=>{const{classes:t}=e;return Z({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ke,t)},$e=x(z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${Be.li}`]:t.li},t.root]})({}),De=x("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),Me=x("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function Re(e,t,n,a){return e.reduce((s,l,d)=>(d<e.length-1?s=s.concat(l,o(Me,{"aria-hidden":!0,className:t,ownerState:a,children:n},`separator-${d}`)):s.push(l),s),[])}const Ee=f.exports.forwardRef(function(t,n){const a=X({props:t,name:"MuiBreadcrumbs"}),{children:s,className:l,component:d="nav",expandText:C="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:h=1,maxItems:k=8,separator:S="/"}=a,B=J(a,ve),[D,M]=f.exports.useState(!1),y=p({},a,{component:d,expanded:D,expandText:C,itemsAfterCollapse:m,itemsBeforeCollapse:h,maxItems:k,separator:S}),b=Fe(y),R=f.exports.useRef(null),N=c=>{const v=()=>{M(!0);const E=R.current.querySelector("a[href],button,[tabindex]");E&&E.focus()};return h+m>=c.length?c:[...c.slice(0,h),o(he,{"aria-label":C,onClick:v},"ellipsis"),...c.slice(c.length-m,c.length)]},g=f.exports.Children.toArray(s).filter(c=>f.exports.isValidElement(c)).map((c,v)=>o("li",{className:b.li,children:c},`child-${v}`));return o($e,p({ref:n,component:d,color:"text.secondary",className:Q(b.root,l),ownerState:y},B,{children:o(De,{className:b.ol,ref:R,ownerState:y,children:Re(D||k&&g.length<=k?g:N(g),b.separator,S,y)})}))}),Te=Ee;function _e(e){return Y("MuiLink",e)}const Pe=K("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Ae=Pe,re={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},we=e=>re[e]||e,He=({theme:e,ownerState:t})=>{const n=we(t.color),a=G(e,`palette.${n}`,!1)||t.color,s=G(e,`palette.${n}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:le(a,.4)},Le=He,Ie=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],je=e=>{const{classes:t,component:n,focusVisible:a,underline:s}=e,l={root:["root",`underline${ee(s)}`,n==="button"&&"button",a&&"focusVisible"]};return Z(l,_e,t)},Ve=x(z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${ee(n.underline)}`],n.component==="button"&&t.button]}})(({theme:e,ownerState:t})=>p({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&p({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:Le({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ae.focusVisible}`]:{outline:"auto"}})),Ne=f.exports.forwardRef(function(t,n){const a=X({props:t,name:"MuiLink"}),{className:s,color:l="primary",component:d="a",onBlur:C,onFocus:m,TypographyClasses:h,underline:k="always",variant:S="inherit",sx:B}=a,D=J(a,Ie),{isFocusVisibleRef:M,onBlur:y,onFocus:b,ref:R}=pe(),[N,g]=f.exports.useState(!1),c=fe(n,R),v=F=>{y(F),M.current===!1&&g(!1),C&&C(F)},E=F=>{b(F),M.current===!0&&g(!0),m&&m(F)},W=p({},a,{color:l,component:d,focusVisible:N,underline:k,variant:S}),oe=je(W);return o(Ve,p({color:l,className:Q(oe.root,s),classes:h,component:d,onBlur:v,onFocus:E,ref:c,ownerState:W,variant:S,sx:[...Object.keys(re).includes(l)?[]:[{color:l}],...Array.isArray(B)?B:[B]]},D))}),ze=Ne;function Oe(e,t,n="\u2026"){return e.length<=t?e:e.substring(0,t)+n}const Ue=24;function We(){return o(se,{icon:"chevronRight",sx:{color:"grey.700"}})}const qe={marginTop:"0px",padding:"10px 20px",backgroundColor:"grey.200"},Ge={color:"text.secondary",fontWeight:400,letterSpacing:0};function $(e){const{items:t}=e;return o(Te,{separator:o(We,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:qe,children:t.map((n,a)=>{const s=Oe(n.text,Ue),l=s!==n.text?n.text:null;return o(de,{title:l,placement:"top",children:o(z,{variant:"breadcrumb1",children:n.current?s:o(ze,{href:n.href,onClick:n.onClick,underline:"hover",sx:Ge,children:s},a)})},a)})})}try{$.displayName="EntityPageBreadcrumbs",$.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"]={docgenInfo:$.__docgenInfo,name:"EntityPageBreadcrumbs",path:"src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"})}catch{}const ut={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EntityPageBreadcrumbs from './EntityPageBreadcrumbs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityPage/Breadcrumb',
  component: EntityPageBreadcrumbs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EntityPageBreadcrumbs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntityPageBreadcrumbs> = args => (
  <>
    {/* Add some space above the component so the tooltip positioning is more accurate */}
    <br />
    <br />
    <EntityPageBreadcrumbs {...args} />
  </>
)

const preventDefaultHandler = (e: React.SyntheticEvent) => {
  e.preventDefault()
}

export const Demo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Demo.args = {
  items: [
    { onClick: preventDefaultHandler, text: 'Files', href: '#area' },
    {
      onClick: preventDefaultHandler,
      text: 'Root folder',
      href: '#!Synapse:syn123',
    },
    {
      onClick: preventDefaultHandler,
      text: 'A very long subfolder name that gets truncated',
      href: '#!Synapse:syn456',
    },
    {
      onClick: preventDefaultHandler,
      text: 'The file you are looking at',
      href: '#!Synapse:syn789',
      current: true,
    },
  ],
}

export const ManyItems = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ManyItems.args = {
  items: [
    { onClick: preventDefaultHandler, text: 'Files', href: '#area' },
    {
      onClick: preventDefaultHandler,
      text: 'Folder A',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Folder B',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Folder C',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Folder D',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Folder E',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Folder F',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Folder G',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Folder H',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Folder I',
    },
    {
      onClick: preventDefaultHandler,
      text: 'Leaf file',
      current: true,
    },
  ],
}
`,locationsMap:{demo:{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}},"many-items":{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}}}}},title:"Synapse/EntityPage/Breadcrumb",component:$,argTypes:{}},ne=e=>ae(ie,{children:[o("br",{}),o("br",{}),o($,{...e})]}),i=e=>{e.preventDefault()},Ke=ne.bind({});Ke.args={items:[{onClick:i,text:"Files",href:"#area"},{onClick:i,text:"Root folder",href:"#!Synapse:syn123"},{onClick:i,text:"A very long subfolder name that gets truncated",href:"#!Synapse:syn456"},{onClick:i,text:"The file you are looking at",href:"#!Synapse:syn789",current:!0}]};const Ye=ne.bind({});Ye.args={items:[{onClick:i,text:"Files",href:"#area"},{onClick:i,text:"Folder A"},{onClick:i,text:"Folder B"},{onClick:i,text:"Folder C"},{onClick:i,text:"Folder D"},{onClick:i,text:"Folder E"},{onClick:i,text:"Folder F"},{onClick:i,text:"Folder G"},{onClick:i,text:"Folder H"},{onClick:i,text:"Folder I"},{onClick:i,text:"Leaf file",current:!0}]};const pt=["Demo","ManyItems"];export{Ke as Demo,Ye as ManyItems,pt as __namedExportsOrder,ut as default};
