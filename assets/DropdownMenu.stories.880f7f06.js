import{D as t}from"./DropdownMenu.ec91355f.js";import{I as r}from"./IconSvg.a36fd00f.js";import{j as e}from"./jsx-runtime.edcee20f.js";import"./Button.237100ef.js";import"./styled.57026967.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./TransitionGroupContext.9f30f89b.js";import"./Typography.8ba12270.js";import"./Tooltip.6287427b.js";import"./SvgIcon.cf85a686.js";import"./useTheme.c864c010.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./Fade.e73bdacf.js";import"./Paper.23f56be2.js";import"./MenuList.ef94e275.js";import"./index.f2a06ad4.js";import"./List.c12a10d0.js";import"./Divider.1777a8bb.js";const S={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:66,line:19},endLoc:{col:1,line:21},startBody:{col:66,line:19},endBody:{col:1,line:21}}}}},title:"UI/DropdownMenu",component:t,argTypes:{}},o=n=>()=>{console.log("Item clicked",n)},i=n=>e(t,{...n}),s=i.bind({});s.args={dropdownButtonText:"Dropdown Menu Button",buttonProps:{endIcon:e(r,{icon:"verticalEllipsis",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]};const H=["Demo"];export{s as Demo,H as __namedExportsOrder,S as default};
