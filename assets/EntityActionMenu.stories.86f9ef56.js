import{E as i}from"./EntityActionMenu.cb1427a9.js";import{j as e}from"./jsx-runtime.8ee42ca4.js";import"./ComplexMenu.c0cf1a65.js";import"./IconSvg.9744025b.js";import"./SvgIcon.e7d9e8d5.js";import"./styled.cab085b6.js";import"./Tooltip.53b3d1bd.js";import"./useTheme.a650b60c.js";import"./index.c68764fa.js";import"./iframe.57558d86.js";import"./TransitionGroupContext.d40bca5e.js";import"./DropdownMenu.38a2578f.js";import"./Button.73b6fb95.js";import"./ButtonBase.442ee4f8.js";import"./emotion-react.browser.esm.755544ae.js";import"./Typography.dc67c84b.js";import"./Fade.8d5d2209.js";import"./Paper.04a73655.js";import"./MenuList.f69bb166.js";import"./index.f2a06ad4.js";import"./List.029a73d5.js";import"./Divider.898185d7.js";import"./Box.1cb884d4.js";import"./IconButton.0dfca4e0.js";const y={parameters:{storySource:{source:`import React from 'react'
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
