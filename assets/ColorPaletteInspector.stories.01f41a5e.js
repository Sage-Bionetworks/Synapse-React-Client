import{a as n,j as r,r as c}from"./jsx-runtime.ed0bc2e8.js";import{C as i,a as d}from"./colorPalette.8145e2e2.js";import"./iframe.1c77586e.js";const a=({initialColor:e})=>{const[t,o]=c.exports.useState(e);return n("div",{children:[r("input",{value:t,style:{width:"135px"},onChange:s=>o(s.target.value)}),r("div",{style:{background:t,width:"135px",height:"135px",borderRadius:"150px"}})]})},l=()=>n("div",{children:[r("h2",{children:"Color Palette Odd"}),r("div",{style:{display:"flex",flexWrap:"wrap"},children:i.reduce((e,t,o)=>(o%5===0?e.push([t]):e[e.length-1].push(t))&&e,[]).map((e,t)=>n("div",{style:{margin:"5px"},children:[n("h4",{children:["Odd palette ",t]}),e.map(o=>r(a,{initialColor:o},o))]},"odd"+t))}),r("hr",{}),r("h2",{children:"Color Palette Even"}),r("div",{style:{display:"flex",flexWrap:"wrap"},children:d.reduce((e,t,o)=>(o%5===0?e.push([t]):e[e.length-1].push(t))&&e,[]).map((e,t)=>n("div",{style:{margin:"5px"},children:[n("h4",{children:["Even palette ",t]}),e.map(o=>r(a,{initialColor:o},o))]},"even"+t))})," "]}),p=l;try{l.displayName="ColorPaletteInspector",l.__docgenInfo={description:"",displayName:"ColorPaletteInspector",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/demo/containers/playground/ColorPaletteInspector.tsx#ColorPaletteInspector"]={docgenInfo:l.__docgenInfo,name:"ColorPaletteInspector",path:"src/demo/containers/playground/ColorPaletteInspector.tsx#ColorPaletteInspector"})}catch{}const I={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ColorPaletteInspector from './ColorPaletteInspector'

export default {
  title: 'UI/ColorPaletteInspector',
  component: ColorPaletteInspector,
} as ComponentMeta<typeof ColorPaletteInspector>

const Template: ComponentStory<typeof ColorPaletteInspector> = args => (
  <ColorPaletteInspector {...args} />
)

export const Demo = Template.bind({})
`,locationsMap:{demo:{startLoc:{col:63,line:10},endLoc:{col:1,line:12},startBody:{col:63,line:10},endBody:{col:1,line:12}}}}},title:"UI/ColorPaletteInspector",component:p},m=e=>r(p,{...e}),P=m.bind({}),y=["Demo"];export{P as Demo,y as __namedExportsOrder,I as default};
