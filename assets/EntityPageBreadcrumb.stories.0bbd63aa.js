import{I as H}from"./IconSvg.f20d6379.js";import{j as r,r as p,a as P,F as w}from"./jsx-runtime.254b3176.js";import{s as m,_ as i,Y as D,d as A,g as I,e as L,h as j,i as N,j as O}from"./styled.0b0d8b8c.js";import"./index.f2a06ad4.js";import{c as $,a as z}from"./Tooltip.8deb04e4.js";import{B as U}from"./ButtonBase.373062e6.js";import{T as F}from"./Typography.770de0a7.js";import{L as G}from"./Link.a0ec5041.js";import"./SvgIcon.3abc547b.js";import"./iframe.75dade87.js";import"./useTheme.c977df4e.js";import"./index.0a919fcb.js";import"./TransitionGroupContext.8e2c28aa.js";import"./emotion-react.browser.esm.2f156512.js";const Y=$(r("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),q=m(U)(({theme:e})=>i({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":i({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":i({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:D(e.palette.grey[200],.12)}:{backgroundColor:D(e.palette.grey[600],.12)})})),K=m(Y)({width:24,height:16});function V(e){const t=e;return r("li",{children:r(q,i({focusRipple:!0},e,{ownerState:t,children:r(K,{ownerState:t})}))})}function W(e){return I("MuiBreadcrumbs",e)}const X=A("MuiBreadcrumbs",["root","ol","li","separator"]),J=X,Q=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Z=e=>{const{classes:t}=e;return O({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},W,t)},ee=m(F,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${J.li}`]:t.li},t.root]})({}),te=m("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=m("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ne(e,t,o,l){return e.reduce((a,c,d)=>(d<e.length-1?a=a.concat(c,r(re,{"aria-hidden":!0,className:t,ownerState:l,children:o},`separator-${d}`)):a.push(c),a),[])}const oe=p.exports.forwardRef(function(t,o){const l=L({props:t,name:"MuiBreadcrumbs"}),{children:a,className:c,component:d="nav",expandText:B="Show path",itemsAfterCollapse:y=1,itemsBeforeCollapse:b=1,maxItems:x=8,separator:k="/"}=l,R=j(l,Q),[S,T]=p.exports.useState(!1),g=i({},l,{component:d,expanded:S,expandText:B,itemsAfterCollapse:y,itemsBeforeCollapse:b,maxItems:x,separator:k}),f=Z(g),v=p.exports.useRef(null),_=s=>{const h=()=>{T(!0);const E=v.current.querySelector("a[href],button,[tabindex]");E&&E.focus()};return b+y>=s.length?s:[...s.slice(0,b),r(V,{"aria-label":B,onClick:h},"ellipsis"),...s.slice(s.length-y,s.length)]},C=p.exports.Children.toArray(a).filter(s=>p.exports.isValidElement(s)).map((s,h)=>r("li",{className:f.li,children:s},`child-${h}`));return r(ee,i({ref:o,component:d,color:"text.secondary",className:N(f.root,c),ownerState:g},R,{children:r(te,{className:f.ol,ref:v,ownerState:g,children:ne(S||x&&C.length<=x?C:_(C),f.separator,k,g)})}))}),ae=oe;function se(e,t,o="\u2026"){return e.length<=t?e:e.substring(0,t)+o}const le=32;function ce(){return r(H,{icon:"chevronRight",sx:{color:"grey.500"}})}const ie={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},de={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function u(e){const{items:t}=e;return r(ae,{separator:r(ce,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:ie,children:t.map((o,l)=>{const a=se(o.text,le),c=a!==o.text?o.text:null;return r(z,{title:c,placement:"top",children:r(F,{variant:"breadcrumb1",children:o.current?a:r(G,{href:o.href,onClick:o.onClick,underline:"hover",sx:de,children:a},l)})},l)})})}try{u.displayName="EntityPageBreadcrumbs",u.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"]={docgenInfo:u.__docgenInfo,name:"EntityPageBreadcrumbs",path:"src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"})}catch{}const Fe={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}},"many-items":{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}}}}},title:"Synapse/EntityPage/Breadcrumb",component:u,argTypes:{}},M=e=>P(w,{children:[r("br",{}),r("br",{}),r(u,{...e})]}),n=e=>{e.preventDefault()},pe=M.bind({});pe.args={items:[{onClick:n,text:"Files",href:"#area"},{onClick:n,text:"Root folder",href:"#!Synapse:syn123"},{onClick:n,text:"A very long subfolder name that gets truncated",href:"#!Synapse:syn456"},{onClick:n,text:"The file you are looking at",href:"#!Synapse:syn789",current:!0}]};const ue=M.bind({});ue.args={items:[{onClick:n,text:"Files",href:"#area"},{onClick:n,text:"Folder A"},{onClick:n,text:"Folder B"},{onClick:n,text:"Folder C"},{onClick:n,text:"Folder D"},{onClick:n,text:"Folder E"},{onClick:n,text:"Folder F"},{onClick:n,text:"Folder G"},{onClick:n,text:"Folder H"},{onClick:n,text:"Folder I"},{onClick:n,text:"Leaf file",current:!0}]};const Me=["Demo","ManyItems"];export{pe as Demo,ue as ManyItems,Me as __namedExportsOrder,Fe as default};
