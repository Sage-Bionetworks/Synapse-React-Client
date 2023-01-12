import{I as H}from"./IconSvg.9b38face.js";import{t as P}from"./StringUtils.118132c9.js";import{j as t,r as p,a as w,F as A}from"./jsx-runtime.30b0b063.js";import{s as m,_ as i,Y as D,d as I,g as L,e as j,h as N,i as O,j as $}from"./styled.4350a8f3.js";import"./index.f2a06ad4.js";import{c as z,a as U}from"./Tooltip.f326ea8a.js";import{B as G}from"./ButtonBase.32a6d369.js";import{T as F}from"./Typography.e0f3806f.js";import{L as Y}from"./Link.671fdc30.js";import"./SvgIcon.a1d78dff.js";import"./iframe.7f20f630.js";import"./useTheme.bbb702a0.js";import"./index.a3b83451.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./emotion-react.browser.esm.f592d4ba.js";const q=z(t("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),K=m(G)(({theme:e})=>i({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":i({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":i({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:D(e.palette.grey[200],.12)}:{backgroundColor:D(e.palette.grey[600],.12)})})),V=m(q)({width:24,height:16});function W(e){const r=e;return t("li",{children:t(K,i({focusRipple:!0},e,{ownerState:r,children:t(V,{ownerState:r})}))})}function X(e){return L("MuiBreadcrumbs",e)}const J=I("MuiBreadcrumbs",["root","ol","li","separator"]),Q=J,Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],ee=e=>{const{classes:r}=e;return $({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},X,r)},te=m(F,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Q.li}`]:r.li},r.root]})({}),re=m("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ne=m("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function oe(e,r,o,l){return e.reduce((a,c,d)=>(d<e.length-1?a=a.concat(c,t(ne,{"aria-hidden":!0,className:r,ownerState:l,children:o},`separator-${d}`)):a.push(c),a),[])}const ae=p.exports.forwardRef(function(r,o){const l=j({props:r,name:"MuiBreadcrumbs"}),{children:a,className:c,component:d="nav",expandText:B="Show path",itemsAfterCollapse:y=1,itemsBeforeCollapse:b=1,maxItems:x=8,separator:k="/"}=l,R=N(l,Z),[S,T]=p.exports.useState(!1),g=i({},l,{component:d,expanded:S,expandText:B,itemsAfterCollapse:y,itemsBeforeCollapse:b,maxItems:x,separator:k}),f=ee(g),v=p.exports.useRef(null),_=s=>{const h=()=>{T(!0);const E=v.current.querySelector("a[href],button,[tabindex]");E&&E.focus()};return b+y>=s.length?s:[...s.slice(0,b),t(W,{"aria-label":B,onClick:h},"ellipsis"),...s.slice(s.length-y,s.length)]},C=p.exports.Children.toArray(a).filter(s=>p.exports.isValidElement(s)).map((s,h)=>t("li",{className:f.li,children:s},`child-${h}`));return t(te,i({ref:o,component:d,color:"text.secondary",className:O(f.root,c),ownerState:g},R,{children:t(re,{className:f.ol,ref:v,ownerState:g,children:oe(S||x&&C.length<=x?C:_(C),f.separator,k,g)})}))}),se=ae,le=32;function ce(){return t(H,{icon:"chevronRight",sx:{color:"grey.500"}})}const ie={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},de={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function u(e){const{items:r}=e;return t(se,{separator:t(ce,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:ie,children:r.map((o,l)=>{const a=P(o.text,le),c=a!==o.text?o.text:null;return t(U,{title:c,placement:"top",children:t(F,{variant:"breadcrumb1",children:o.current?a:t(Y,{href:o.href,onClick:o.onClick,underline:"hover",sx:de,children:a},l)})},l)})})}try{u.displayName="EntityPageBreadcrumbs",u.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"]={docgenInfo:u.__docgenInfo,name:"EntityPageBreadcrumbs",path:"src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"})}catch{}const Me={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}},"many-items":{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}}}}},title:"Synapse/EntityPage/Breadcrumb",component:u,argTypes:{}},M=e=>w(A,{children:[t("br",{}),t("br",{}),t(u,{...e})]}),n=e=>{e.preventDefault()},pe=M.bind({});pe.args={items:[{onClick:n,text:"Files",href:"#area"},{onClick:n,text:"Root folder",href:"#!Synapse:syn123"},{onClick:n,text:"A very long subfolder name that gets truncated",href:"#!Synapse:syn456"},{onClick:n,text:"The file you are looking at",href:"#!Synapse:syn789",current:!0}]};const ue=M.bind({});ue.args={items:[{onClick:n,text:"Files",href:"#area"},{onClick:n,text:"Folder A"},{onClick:n,text:"Folder B"},{onClick:n,text:"Folder C"},{onClick:n,text:"Folder D"},{onClick:n,text:"Folder E"},{onClick:n,text:"Folder F"},{onClick:n,text:"Folder G"},{onClick:n,text:"Folder H"},{onClick:n,text:"Folder I"},{onClick:n,text:"Leaf file",current:!0}]};const Re=["Demo","ManyItems"];export{pe as Demo,ue as ManyItems,Re as __namedExportsOrder,Me as default};
