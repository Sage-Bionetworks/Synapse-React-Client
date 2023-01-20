import{I as d}from"./IconSvg.88997e16.js";import{t as p}from"./StringUtils.118132c9.js";import{j as t,a as m,F as u}from"./jsx-runtime.590681cd.js";import{B as y}from"./Breadcrumbs.cddb6ad4.js";import{a as f}from"./Tooltip.0f7aeb46.js";import{T as g}from"./Typography.62f204bb.js";import{L as x}from"./Link.3f8a0a55.js";import"./SvgIcon.01f2428a.js";import"./styled.1c864c13.js";import"./iframe.d3c6f1d5.js";import"./index.f2a06ad4.js";import"./ButtonBase.c831f7af.js";import"./emotion-react.browser.esm.a07d05d9.js";import"./TransitionGroupContext.e7de7ea1.js";import"./useTheme.fa81c060.js";import"./index.220fbbb9.js";const b=32;function C(){return t(d,{icon:"chevronRight",sx:{color:"grey.500"}})}const k={marginTop:"0px",padding:"10px 40px",backgroundColor:"grey.200"},h={color:"text.secondary",letterSpacing:0,"&:visited":{color:"text.secondary"}};function o(n){const{items:l}=n;return t(y,{separator:t(C,{}),itemsBeforeCollapse:2,itemsAfterCollapse:2,sx:k,children:l.map((r,s)=>{const a=p(r.text,b),c=a!==r.text?r.text:null;return t(f,{title:c,placement:"top",children:t(g,{variant:"breadcrumb1",children:r.current?a:t(x,{href:r.href,onClick:r.onClick,underline:"hover",sx:h,children:a},s)})},s)})})}try{o.displayName="EntityPageBreadcrumbs",o.__docgenInfo={description:"",displayName:"EntityPageBreadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"]={docgenInfo:o.__docgenInfo,name:"EntityPageBreadcrumbs",path:"src/lib/containers/entity/page/breadcrumbs/EntityPageBreadcrumbs.tsx#EntityPageBreadcrumbs"})}catch{}const G={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}},"many-items":{startLoc:{col:63,line:15},endLoc:{col:1,line:22},startBody:{col:63,line:15},endBody:{col:1,line:22}}}}},title:"Synapse/EntityPage/Breadcrumb",component:o,argTypes:{}},i=n=>m(u,{children:[t("br",{}),t("br",{}),t(o,{...n})]}),e=n=>{n.preventDefault()},B=i.bind({});B.args={items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Root folder",href:"#!Synapse:syn123"},{onClick:e,text:"A very long subfolder name that gets truncated",href:"#!Synapse:syn456"},{onClick:e,text:"The file you are looking at",href:"#!Synapse:syn789",current:!0}]};const v=i.bind({});v.args={items:[{onClick:e,text:"Files",href:"#area"},{onClick:e,text:"Folder A"},{onClick:e,text:"Folder B"},{onClick:e,text:"Folder C"},{onClick:e,text:"Folder D"},{onClick:e,text:"Folder E"},{onClick:e,text:"Folder F"},{onClick:e,text:"Folder G"},{onClick:e,text:"Folder H"},{onClick:e,text:"Folder I"},{onClick:e,text:"Leaf file",current:!0}]};const N=["Demo","ManyItems"];export{B as Demo,v as ManyItems,N as __namedExportsOrder,G as default};
