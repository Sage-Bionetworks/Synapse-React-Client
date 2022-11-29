import{D as t}from"./DropdownMenu.5e3a2097.js";import{I as r}from"./IconSvg.562c1909.js";import{j as e}from"./jsx-runtime.25f1da80.js";import"./Button.71735648.js";import"./styled.61c2cdbd.js";import"./ButtonBase.e51b431c.js";import"./emotion-react.browser.esm.de1a23fd.js";import"./TransitionGroupContext.d4abce3c.js";import"./Typography.787f3df0.js";import"./Tooltip.dc683be6.js";import"./createSvgIcon.32db2a88.js";import"./useTheme.50dbca56.js";import"./index.09872124.js";import"./iframe.89c4ca26.js";import"./utils.653016b9.js";import"./Fade.5af2af2d.js";import"./List.2b1a402a.js";import"./MenuList.0d9e2f7a.js";import"./index.f2a06ad4.js";import"./Divider.bc7f3825.js";import"./InfoOutlined.d976b6d4.js";const H={parameters:{storySource:{source:`import React from 'react'
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
