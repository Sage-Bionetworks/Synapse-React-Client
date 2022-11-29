import{I as e}from"./IconSvg.1a319e23.js";import{C as i}from"./ComplexMenu.1163a9b9.js";import{j as t}from"./jsx-runtime.31268528.js";import"./TransitionGroupContext.43d26755.js";import"./styled.0bfd4c69.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./useTheme.910eaec3.js";import"./index.d5f32449.js";import"./iframe.c7567c2d.js";import"./utils.033d23ab.js";import"./InfoOutlined.1c97ae19.js";import"./DropdownMenu.3dd7e19d.js";import"./Button.5756842c.js";import"./ButtonBase.34890086.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./Typography.7deb443e.js";import"./Fade.4ca82ca8.js";import"./List.36978e17.js";import"./MenuList.07fec125.js";import"./index.f2a06ad4.js";import"./Divider.ced7c7fd.js";import"./IconButton.916ffe0f.js";const B={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:64,line:19},endLoc:{col:1,line:21},startBody:{col:64,line:19},endBody:{col:1,line:21}}}}},title:"UI/ComplexMenu",component:i,argTypes:{}},o=n=>()=>{console.log("Item clicked",n)},r=n=>t(i,{...n}),l=r.bind({});l.args={iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:t(e,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:t(e,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]};const D=["Demo"];export{l as Demo,D as __namedExportsOrder,B as default};
