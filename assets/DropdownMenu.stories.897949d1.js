import{D as t}from"./DropdownMenu.4f7b3320.js";import{I as r}from"./IconSvg.4536f7bc.js";import{j as e}from"./jsx-runtime.7f415a49.js";import"./Button.7a13a013.js";import"./styled.681e07cb.js";import"./ButtonBase.24c8fd98.js";import"./emotion-react.browser.esm.3f795854.js";import"./TransitionGroupContext.d6cb07c1.js";import"./Typography.b9cf5e4f.js";import"./Tooltip.532ca871.js";import"./SvgIcon.67c4bd7a.js";import"./useTheme.93fabebb.js";import"./index.322ef20a.js";import"./iframe.f0eb7e4f.js";import"./Fade.91bde074.js";import"./Paper.3e0edda7.js";import"./MenuList.88d7a10a.js";import"./index.f2a06ad4.js";import"./List.fdfe75f7.js";import"./Divider.089fc209.js";const S={parameters:{storySource:{source:`import React from 'react'
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
