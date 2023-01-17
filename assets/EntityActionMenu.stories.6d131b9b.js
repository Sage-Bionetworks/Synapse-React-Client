import{E as i}from"./EntityActionMenu.8e2bc359.js";import{j as e}from"./jsx-runtime.d6be66a9.js";import"./ComplexMenu.21c89f82.js";import"./IconSvg.67904b39.js";import"./SvgIcon.b9658c5d.js";import"./styled.f07e33c6.js";import"./Tooltip.c89a275a.js";import"./useTheme.0cbb662e.js";import"./index.3b7d1b21.js";import"./iframe.78dc3b5d.js";import"./TransitionGroupContext.27368eb3.js";import"./DropdownMenu.42a545d9.js";import"./Button.bef5272a.js";import"./ButtonBase.250c511d.js";import"./emotion-react.browser.esm.8203c469.js";import"./Typography.079c4f38.js";import"./Fade.c734522e.js";import"./Paper.57bfbc43.js";import"./MenuList.58fb38a5.js";import"./index.f2a06ad4.js";import"./List.ea77900f.js";import"./Divider.f9886d03.js";import"./Box.4987088c.js";import"./IconButton.3b892d3a.js";const y={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import EntityActionMenu from './EntityActionMenu'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/EntityPage/ActionMenu',
  component: EntityActionMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EntityActionMenu>

const onClickHandler = (action: string) => () => {
  console.log('Action clicked: ' + action)
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const EntityPageTemplate: ComponentStory<typeof EntityActionMenu> = args => (
  <EntityActionMenu {...args} />
)

export const Demo = EntityPageTemplate.bind({})

Demo.args = {
  actionConfiguration: {
    ['ADD_TO_DOWNLOAD_CART']: {
      text: 'Add to Download Cart',
      onClick: onClickHandler('ADD_TO_DOWNLOAD_CART'),
      disabled: true,
      tooltipText: 'You must have some permission to download this thing.',
      visible: true,
    },
    ['VIEW_SHARING_SETTINGS']: {
      text: 'View sharing settings',
      onClick: onClickHandler('VIEW_SHARING_SETTINGS'),
      disabled: false,
      visible: true,
    },
    ['MOVE_ENTITY']: {
      text: 'Move File',
      onClick: onClickHandler('MOVE_ENTITY'),
      disabled: false,
      visible: true,
    },
    ['DELETE_ENTITY']: {
      text: 'Delete File',
      onClick: onClickHandler('DELETE_ENTITY'),
      disabled: false,
      visible: true,
    },
    ['UPLOAD_FILE']: {
      text: 'Upload a file',
      onClick: onClickHandler('UPLOAD_FILE'),
      disabled: false,
      visible: true,
    },
    ['EDIT_FILE_METADATA']: {
      text: 'Edit some metadata',
      onClick: onClickHandler('EDIT_FILE_METADATA'),
      disabled: false,
      visible: true,
    },
    ['REPORT_VIOLATION']: {
      text: 'Report Violation',
      onClick: onClickHandler('REPORT_VIOLATION'),
      disabled: false,
      visible: true,
    },
  },
  menuConfiguration: {
    DOWNLOAD: {
      visible: true,
    },
    PRIMARY: {
      visible: true,
    },
  },
  layout: {
    buttonActions: [
      { action: 'UPLOAD_FILE', icon: 'upload' },
      { action: 'EDIT_FILE_METADATA', icon: 'edit' },
    ],
    downloadMenuActions: [[{ action: 'ADD_TO_DOWNLOAD_CART' }]],
    primaryMenuActions: [
      [{ action: 'VIEW_SHARING_SETTINGS' }],
      [
        { action: 'MOVE_ENTITY' },
        { action: 'DELETE_ENTITY', textSx: { color: 'error.main' } },
      ],
      [
        {
          action: 'REPORT_VIOLATION',
          icon: 'flag',
          iconSx: { color: 'error.main' },
        },
      ],
    ],
    primaryMenuText: 'Tools Menu Text is Configurable',
    primaryMenuEndIcon: 'verticalEllipsis',
  },
}

export const DisabledDownloadMenu = EntityPageTemplate.bind({})

DisabledDownloadMenu.args = {
  actionConfiguration: {
    ['ADD_TO_DOWNLOAD_CART']: {
      text: 'Add to Download Cart',
      onClick: onClickHandler('ADD_TO_DOWNLOAD_CART'),
      disabled: true,
      tooltipText: 'You must have some permission to download this thing.',
      visible: true,
    },
    ['VIEW_SHARING_SETTINGS']: {
      text: 'View sharing settings',
      onClick: onClickHandler('VIEW_SHARING_SETTINGS'),
      disabled: false,
      visible: true,
    },
    ['MOVE_ENTITY']: {
      text: 'Move File',
      onClick: onClickHandler('MOVE_ENTITY'),
      disabled: false,
      visible: true,
    },
    ['DELETE_ENTITY']: {
      text: 'Delete File',
      onClick: onClickHandler('DELETE_ENTITY'),
      disabled: false,
      visible: true,
    },
    ['UPLOAD_FILE']: {
      text: 'Upload a file',
      onClick: onClickHandler('UPLOAD_FILE'),
      disabled: false,
      visible: true,
    },
    ['EDIT_FILE_METADATA']: {
      text: 'Edit some metadata',
      onClick: onClickHandler('EDIT_FILE_METADATA'),
      disabled: false,
      visible: true,
    },
    ['REPORT_VIOLATION']: {
      text: 'Report Violation',
      onClick: onClickHandler('REPORT_VIOLATION'),
      disabled: false,
      visible: true,
    },
  },
  menuConfiguration: {
    DOWNLOAD: {
      visible: true,
      disabled: false,
      tooltipText: 'All download actions are blocked for some reason.',
    },
    PRIMARY: {
      visible: true,
    },
  },
  layout: {
    buttonActions: [
      { action: 'UPLOAD_FILE', icon: 'upload' },
      { action: 'EDIT_FILE_METADATA', icon: 'edit' },
    ],
    downloadMenuActions: [[{ action: 'ADD_TO_DOWNLOAD_CART' }]],
    primaryMenuActions: [
      [{ action: 'VIEW_SHARING_SETTINGS' }],
      [
        { action: 'MOVE_ENTITY' },
        { action: 'DELETE_ENTITY', textSx: { color: 'error.main' } },
      ],
      [
        {
          action: 'REPORT_VIOLATION',
          icon: 'flag',
          iconSx: { color: 'error.main' },
        },
      ],
    ],
    primaryMenuText: 'Tools Menu Text is Configurable',
    primaryMenuEndIcon: 'verticalEllipsis',
  },
}
`,locationsMap:{demo:{startLoc:{col:68,line:18},endLoc:{col:1,line:20},startBody:{col:68,line:18},endBody:{col:1,line:20}},"disabled-download-menu":{startLoc:{col:68,line:18},endLoc:{col:1,line:20},startBody:{col:68,line:18},endBody:{col:1,line:20}}}}},title:"Synapse/EntityPage/ActionMenu",component:i,argTypes:{}},n=o=>()=>{console.log("Action clicked: "+o)},t=o=>e(i,{...o}),l=t.bind({});l.args={actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}};const a=t.bind({});a.args={actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:n("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:n("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:n("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:n("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:n("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:n("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:n("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0,disabled:!1,tooltipText:"All download actions are blocked for some reason."},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}};const S=["Demo","DisabledDownloadMenu"];export{l as Demo,a as DisabledDownloadMenu,S as __namedExportsOrder,y as default};
