import{D as t}from"./DropdownMenu.2e71c75c.js";import{I as r}from"./IconSvg.26b6f898.js";import{j as e}from"./jsx-runtime.9272ed69.js";import"./Button.0c0c729f.js";import"./styled.0de421fa.js";import"./ButtonBase.3405045f.js";import"./emotion-react.browser.esm.1c97b976.js";import"./TransitionGroupContext.54f3d5ea.js";import"./Typography.1f221702.js";import"./Tooltip.d2aa8c40.js";import"./createSvgIcon.1c5ae5be.js";import"./useTheme.75529918.js";import"./index.dc51ea0b.js";import"./iframe.e4b610a3.js";import"./utils.6e1717b5.js";import"./Fade.cc51c470.js";import"./List.d01ab908.js";import"./MenuList.8f13070b.js";import"./index.f2a06ad4.js";import"./Divider.9766b354.js";import"./InfoOutlined.cadfca07.js";const H={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DropdownMenu } from './DropdownMenu'
import IconSvg from '../IconSvg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DropdownMenu>

const onClickHandler = (item: any) => () => {
  console.log('Item clicked', item)
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DropdownMenuTemplate: ComponentStory<typeof DropdownMenu> = args => (
  <DropdownMenu {...args} />
)

export const Demo = DropdownMenuTemplate.bind({})

Demo.args = {
  dropdownButtonText: 'Dropdown Menu Button',
  buttonProps: {
    endIcon: <IconSvg icon="verticalEllipsis" wrap={false} />,
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
}
`,locationsMap:{demo:{startLoc:{col:66,line:19},endLoc:{col:1,line:21},startBody:{col:66,line:19},endBody:{col:1,line:21}}}}},title:"UI/DropdownMenu",component:t,argTypes:{}},o=n=>()=>{console.log("Item clicked",n)},i=n=>e(t,{...n}),s=i.bind({});s.args={dropdownButtonText:"Dropdown Menu Button",buttonProps:{endIcon:e(r,{icon:"verticalEllipsis",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]};const v=["Demo"];export{s as Demo,v as __namedExportsOrder,H as default};
