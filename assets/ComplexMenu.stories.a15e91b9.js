import{I as c}from"./IconSvg.d54f7f38.js";import{D as T}from"./DropdownMenu.5e5301c0.js";import{r as k,j as t,a as g}from"./jsx-runtime.f4a5fef7.js";import{S as b,U as M,a as w,v as y,x as S,i as B,k as _,V as I}from"./styled.02bbe28b.js";import{e as H}from"./Typography.839bb703.js";import{T as v}from"./Tooltip.8a367305.js";import{I as Y}from"./IconButton.6058557b.js";import"./TransitionGroupContext.bc250134.js";import"./createSvgIcon.5d1f0251.js";import"./InfoOutlined.b6a78282.js";import"./Button.4567776a.js";import"./ButtonBase.380fb064.js";import"./emotion-react.browser.esm.e2223364.js";import"./Fade.f600cb07.js";import"./useTheme.cb95caa9.js";import"./utils.c51ff475.js";import"./index.ee4c3b55.js";import"./iframe.1c2d6841.js";import"./List.c1ec7321.js";import"./MenuList.9d658c3c.js";import"./index.f2a06ad4.js";import"./Divider.ad8c7fd0.js";const D=["className","component"];function N(e={}){const{defaultTheme:a,defaultClassName:s="MuiBox-root",generateClassName:n,styleFunctionSx:l=M}=e,d=b("div",{shouldForwardProp:r=>r!=="theme"&&r!=="sx"&&r!=="as"})(l);return k.exports.forwardRef(function(m,u){const x=w(a),p=H(m),{className:C,component:h="div"}=p,f=y(p,D);return t(d,S({as:h,ref:u,className:B(C,n?n(s):s),theme:x},f))})}const P=_(),V=N({defaultTheme:P,defaultClassName:"MuiBox-root",generateClassName:I.generate}),j=V;function i(e){const{iconButtons:a=[],dropdownMenus:s=[]}=e;return g(j,{sx:{display:"flex",gap:"10px"},children:[a.map(n=>t(v,{title:n.tooltipText,children:t(Y,{color:"primary",onClick:n.onClick,children:t(c,{icon:n.icon,wrap:!1})})},n.tooltipText)),s.map((n,l)=>t(T,{...n},l))]})}try{i.displayName="ComplexMenu",i.__docgenInfo={description:`The ComplexMenu component allows you to create a generic menu with
icon buttons and multiple dropdown menus that contain groups of items.`,displayName:"ComplexMenu",props:{iconButtons:{defaultValue:null,description:"",name:"iconButtons",required:!1,type:{name:"IconButtonConfiguration[]"}},dropdownMenus:{defaultValue:null,description:"",name:"dropdownMenus",required:!1,type:{name:"DropdownMenuProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/menu/ComplexMenu.tsx#ComplexMenu"]={docgenInfo:i.__docgenInfo,name:"ComplexMenu",path:"src/lib/containers/menu/ComplexMenu.tsx#ComplexMenu"})}catch{}const lo={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconSvg from '../IconSvg'
import { ComplexMenu } from './ComplexMenu'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/ComplexMenu',
  component: ComplexMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ComplexMenu>

const onClickHandler = (item: any) => () => {
  console.log('Item clicked', item)
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ComplexMenuTemplate: ComponentStory<typeof ComplexMenu> = args => (
  <ComplexMenu {...args} />
)

export const Demo = ComplexMenuTemplate.bind({})

Demo.args = {
  iconButtons: [
    {
      icon: 'edit',
      tooltipText: 'This is an icon button',
      onClick: onClickHandler('edit icon'),
    },
    {
      icon: 'label',
      tooltipText: 'View annotations',
      onClick: onClickHandler('label icon'),
    },
    {
      icon: 'createVersion',
      tooltipText: 'Create new version',
      onClick: onClickHandler('createVersion icon'),
    },
  ],
  dropdownMenus: [
    {
      dropdownButtonText: 'You can have...',
      buttonProps: {
        endIcon: <IconSvg icon="upload" wrap={false} />,
      },
      items: [
        [
          {
            text: 'Do something cool',
            onClick: onClickHandler(0),
          },
          {
            text: 'This one has a tooltip',
            tooltipText: 'Some more info',
            onClick: onClickHandler(1),
          },
          {
            text: 'This one is disabled',
            disabled: true,
            onClick: onClickHandler(3),
          },
          {
            text: 'This one has both',
            disabled: true,
            tooltipText: "You can't do this for reasons",
            onClick: onClickHandler(4),
          },
        ],
        [
          {
            text: 'You can organize actions into groups',
            onClick: onClickHandler(5),
          },
        ],
      ],
    },
    {
      dropdownButtonText: '...multiple dropdown menus!',
      buttonProps: {
        endIcon: <IconSvg icon="download" wrap={false} />,
      },
      items: [
        [
          {
            text: 'Do something cool',
            onClick: onClickHandler(0),
          },
          {
            text: 'This one has a tooltip',
            tooltipText: 'Some more info',
            onClick: onClickHandler(1),
          },
          {
            text: 'This one is disabled',
            disabled: true,
            onClick: onClickHandler(3),
          },
          {
            text: 'This one has both',
            disabled: true,
            tooltipText: "You can't do this for reasons",
            onClick: onClickHandler(4),
          },
        ],
        [
          {
            text: 'You can organize actions into groups',
            onClick: onClickHandler(5),
          },
        ],
      ],
    },
  ],
}
`,locationsMap:{demo:{startLoc:{col:64,line:19},endLoc:{col:1,line:21},startBody:{col:64,line:19},endBody:{col:1,line:21}}}}},title:"UI/ComplexMenu",component:i,argTypes:{}},o=e=>()=>{console.log("Item clicked",e)},O=e=>t(i,{...e}),R=O.bind({});R.args={iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:t(c,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:t(c,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]};const co=["Demo"];export{R as Demo,co as __namedExportsOrder,lo as default};
