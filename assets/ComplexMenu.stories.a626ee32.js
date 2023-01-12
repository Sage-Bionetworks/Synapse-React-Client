import{I as e}from"./IconSvg.175e5b3e.js";import{C as i}from"./ComplexMenu.866f1002.js";import{j as t}from"./jsx-runtime.76b41102.js";import"./SvgIcon.7ad855dc.js";import"./styled.0442482c.js";import"./Tooltip.40200d96.js";import"./useTheme.6368534f.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./TransitionGroupContext.e619b501.js";import"./DropdownMenu.076fda6b.js";import"./Button.09259ba0.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./Paper.8f149634.js";import"./MenuList.bd0e19ec.js";import"./index.f2a06ad4.js";import"./List.ea8ad988.js";import"./Divider.948b1472.js";import"./Box.ccf631ab.js";import"./IconButton.6adff82e.js";const B={parameters:{storySource:{source:`import React from 'react'
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
