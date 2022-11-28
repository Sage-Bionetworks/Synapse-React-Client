import{D as t}from"./DropdownMenu.5e5301c0.js";import{I as r}from"./IconSvg.d54f7f38.js";import{j as e}from"./jsx-runtime.f4a5fef7.js";import"./Button.4567776a.js";import"./styled.02bbe28b.js";import"./ButtonBase.380fb064.js";import"./emotion-react.browser.esm.e2223364.js";import"./TransitionGroupContext.bc250134.js";import"./Typography.839bb703.js";import"./Tooltip.8a367305.js";import"./createSvgIcon.5d1f0251.js";import"./useTheme.cb95caa9.js";import"./index.ee4c3b55.js";import"./iframe.1c2d6841.js";import"./utils.c51ff475.js";import"./Fade.f600cb07.js";import"./List.c1ec7321.js";import"./MenuList.9d658c3c.js";import"./index.f2a06ad4.js";import"./Divider.ad8c7fd0.js";import"./InfoOutlined.b6a78282.js";const H={parameters:{storySource:{source:`import React from 'react'
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
