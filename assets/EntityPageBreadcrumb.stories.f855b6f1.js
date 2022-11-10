import{I as W}from"./IconSvg.6f3c0dc5.js";import{j as n,r as m,a as K,F as Y}from"./jsx-runtime.2ff8811e.js";import{s as y,_ as u,E as O,d as X,g as J,e as Q,h as Z,i as ee,j as te}from"./styled.9a92447e.js";import{c as re}from"./createSvgIcon.13613b84.js";import{B as ne}from"./ButtonBase.4576d1dd.js";import{T as z}from"./Typography.58720d37.js";import{T as oe}from"./Tooltip.5bd16401.js";import{L as se}from"./Link.1ad1c99a.js";import"./TransitionGroupContext.ecfa02dc.js";import"./InfoOutlined.419ebcb9.js";import"./iframe.f6116fbf.js";import"./utils.2126a84f.js";import"./index.95124b04.js";var ae={exports:{}},t={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=Symbol.for("react.element"),w=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),B=Symbol.for("react.context"),le=Symbol.for("react.server_context"),k=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),N;N=Symbol.for("react.module.reference");function a(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case $:switch(e=e.type,e){case x:case h:case C:case v:case E:return e;default:switch(e=e&&e.$$typeof,e){case le:case B:case k:case M:case F:case S:return e;default:return r}}case w:return r}}}t.ContextConsumer=B;t.ContextProvider=S;t.Element=$;t.ForwardRef=k;t.Fragment=x;t.Lazy=M;t.Memo=F;t.Portal=w;t.Profiler=h;t.StrictMode=C;t.Suspense=v;t.SuspenseList=E;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return a(e)===B};t.isContextProvider=function(e){return a(e)===S};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$};t.isForwardRef=function(e){return a(e)===k};t.isFragment=function(e){return a(e)===x};t.isLazy=function(e){return a(e)===M};t.isMemo=function(e){return a(e)===F};t.isPortal=function(e){return a(e)===w};t.isProfiler=function(e){return a(e)===h};t.isStrictMode=function(e){return a(e)===C};t.isSuspense=function(e){return a(e)===v};t.isSuspenseList=function(e){return a(e)===E};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===x||e===h||e===C||e===v||e===E||e===ce||typeof e=="object"&&e!==null&&(e.$$typeof===M||e.$$typeof===F||e.$$typeof===S||e.$$typeof===B||e.$$typeof===k||e.$$typeof===N||e.getModuleId!==void 0)};t.typeOf=a;(function(e){e.exports=t})(ae);const ie=re(n("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),pe=y(ne)(({theme:e})=>u({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":u({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":u({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:O(e.palette.grey[200],.12)}:{backgroundColor:O(e.palette.grey[600],.12)})})),ue=y(ie)({width:24,height:16});function de(e){const r=e;return n("li",{children:n(pe,u({focusRipple:!0},e,{ownerState:r,children:n(ue,{ownerState:r})}))})}function me(e){return J("MuiBreadcrumbs",e)}const fe=X("MuiBreadcrumbs",["root","ol","li","separator"]),ye=fe,ge=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],be=e=>{const{classes:r}=e;return te({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},me,r)},xe=y(z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${ye.li}`]:r.li},r.root]})({}),Ce=y("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),he=y("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function Se(e,r,s,i){return e.reduce((l,p,d)=>(d<e.length-1?l=l.concat(p,n(he,{"aria-hidden":!0,className:r,ownerState:i,children:s},`separator-${d}`)):l.push(p),l),[])}const Be=m.exports.forwardRef(function(r,s){const i=Q({props:r,name:"MuiBreadcrumbs"}),{children:l,className:p,component:d="nav",expandText:H="Show path",itemsAfterCollapse:_=1,itemsBeforeCollapse:D=1,maxItems:P=8,separator:A="/"}=i,q=Z(i,ge),[I,G]=m.exports.useState(!1),g=u({},i,{component:d,expanded:I,expandText:H,itemsAfterCollapse:_,itemsBeforeCollapse:D,maxItems:P,separator:A}),b=be(g),L=m.exports.useRef(null),V=c=>{const T=()=>{G(!0);const j=L.current.querySelector("a[href],button,[tabindex]");j&&j.focus()};return D+_>=c.length?c:[...c.slice(0,D),n(de,{"aria-label":H,onClick:T},"ellipsis"),...c.slice(c.length-_,c.length)]},R=m.exports.Children.toArray(l).filter(c=>m.exports.isValidElement(c)).map((c,T)=>n("li",{className:b.li,children:c},`child-${T}`));return n(xe,u({ref:s,component:d,color:"text.secondary",className:ee(b.root,p),ownerState:g},q,{children:n(Ce,{className:b.ol,ref:L,ownerState:g,children:Se(I||P&&R.length<=P?R:V(R),b.separator,A,g)})}))}),ke=Be;function ve(e,r,s="\u2026"){return e.length<=r?e:e.substring(0,r)+s}const Ee=24;function Fe(){return n(W,{icon:"chevronRight",sx:{color:"grey.700"}})}const Me={marginTop:"0px",padding:"10px 20px",backgroundColor:"grey.200"},_e={color:"text.secondary",fontWeight:400,letterSpacing:0};function f(e){const{items:r}=e;return n(ke,{separator:n(Fe,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:Me,children:r.map((s,i)=>{const l=ve(s.text,Ee),p=l!==s.text?s.text:null;return n(oe,{title:p,placement:"top",children:n(z,{variant:"breadcrumb1",children:s.current?l:n(se,{href:s.href,onClick:s.onClick,underline:"hover",sx:_e,children:l},i)})},i)})})}try{f.displayName="EntityPageBreadcrumbs",f.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"]={docgenInfo:f.__docgenInfo,name:"EntityPageBreadcrumbs",path:"src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"})}catch{}const qe={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}},"many-items":{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}}}}},title:"Synapse/EntityPage/Breadcrumb",component:f,argTypes:{}},U=e=>K(Y,{children:[n("br",{}),n("br",{}),n(f,{...e})]}),o=e=>{e.preventDefault()},De=U.bind({});De.args={items:[{onClick:o,text:"Files",href:"#area"},{onClick:o,text:"Root folder",href:"#!Synapse:syn123"},{onClick:o,text:"A very long subfolder name that gets truncated",href:"#!Synapse:syn456"},{onClick:o,text:"The file you are looking at",href:"#!Synapse:syn789",current:!0}]};const Pe=U.bind({});Pe.args={items:[{onClick:o,text:"Files",href:"#area"},{onClick:o,text:"Folder A"},{onClick:o,text:"Folder B"},{onClick:o,text:"Folder C"},{onClick:o,text:"Folder D"},{onClick:o,text:"Folder E"},{onClick:o,text:"Folder F"},{onClick:o,text:"Folder G"},{onClick:o,text:"Folder H"},{onClick:o,text:"Folder I"},{onClick:o,text:"Leaf file",current:!0}]};const Ge=["Demo","ManyItems"];export{De as Demo,Pe as ManyItems,Ge as __namedExportsOrder,qe as default};
