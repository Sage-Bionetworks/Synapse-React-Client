import{I as e}from"./IconSvg.4536f7bc.js";import{C as i}from"./ComplexMenu.43aa1961.js";import{j as t}from"./jsx-runtime.7f415a49.js";import"./SvgIcon.67c4bd7a.js";import"./styled.681e07cb.js";import"./Tooltip.532ca871.js";import"./useTheme.93fabebb.js";import"./index.322ef20a.js";import"./iframe.f0eb7e4f.js";import"./TransitionGroupContext.d6cb07c1.js";import"./DropdownMenu.4f7b3320.js";import"./Button.7a13a013.js";import"./ButtonBase.24c8fd98.js";import"./emotion-react.browser.esm.3f795854.js";import"./Typography.b9cf5e4f.js";import"./Fade.91bde074.js";import"./Paper.3e0edda7.js";import"./MenuList.88d7a10a.js";import"./index.f2a06ad4.js";import"./List.fdfe75f7.js";import"./Divider.089fc209.js";import"./Box.57186a61.js";import"./IconButton.f87dde1e.js";const B={parameters:{storySource:{source:`import React from 'react'
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
