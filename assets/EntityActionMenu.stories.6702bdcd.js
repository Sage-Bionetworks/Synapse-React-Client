import{C as m}from"./ComplexMenu.3cadd37d.js";import{I as E}from"./IconSvg.1982fde5.js";import{j as u}from"./jsx-runtime.23bcdc09.js";import"./DropdownMenu.b121fda9.js";import"./Button.d27fd09d.js";import"./styled.8da6873c.js";import"./ButtonBase.94c8520a.js";import"./emotion-react.browser.esm.599684c1.js";import"./TransitionGroupContext.b9a824ce.js";import"./Typography.17940352.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./useTheme.26e47b20.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./utils.2eab32fe.js";import"./Fade.5c08504a.js";import"./List.5628ecd7.js";import"./MenuList.9e6fb1fd.js";import"./index.f2a06ad4.js";import"./Divider.301bb23e.js";import"./IconButton.7eaa6d5c.js";import"./InfoOutlined.61048ddd.js";function D(o,i){return Object.fromEntries(Object.entries(o).filter(([a,n])=>!n||!n.visible?!1:![...i.buttonActions,...i.primaryMenuActions.flat(),...i.downloadMenuActions.flat()].some(l=>l.action===a)))}function O(o,i){return o.reduce((a,n)=>{var l;const t=i[n.action];return t&&t.visible&&a.push({text:(l=t.text)!=null?l:n.action,onClick:t.onClick,href:t.href,tooltipText:t.tooltipText,disabled:t.disabled,icon:n.icon,textSx:n.textSx,iconSx:n.iconSx}),a},[])}function A(o,i){return o.reduce((a,n)=>{const t=O(n,i);return t.length>0&&a.push(t),a},[])}function s(o){const{actionConfiguration:i,menuConfiguration:a,layout:n}=o,t=D(i,n);Object.entries(t).length>0&&(console.warn("Actions are visible but have not been configured in the layout:",Object.entries(t).map(r=>r[0])),n.primaryMenuActions.unshift(Object.entries(t).map(r=>({action:r[0]}))));const l=n.buttonActions.reduce((r,c)=>{const d=i[c.action];if(d&&d.visible){let T=d.onClick;T==null&&(console.warn(`No handler registered for ${c.action}`),T=()=>{console.warn(`No handler registered for ${c.action}`)}),r.push({icon:c.icon,onClick:T,tooltipText:d.text})}return r},[]),p={dropdownButtonText:"Download Options",convertSingleItemToButton:!1,renderMenuIfNoItems:!1,buttonTooltip:a.DOWNLOAD.tooltipText,buttonProps:{disabled:a.DOWNLOAD.disabled,endIcon:u(E,{icon:"download",wrap:!1})},items:A(n.downloadMenuActions,i)},I={dropdownButtonText:n.primaryMenuText,convertSingleItemToButton:!0,renderMenuIfNoItems:!1,buttonProps:{endIcon:u(E,{icon:n.primaryMenuEndIcon,wrap:!1})},items:A(n.primaryMenuActions,i)};return u(m,{iconButtons:l,dropdownMenus:[p,I]})}try{s.displayName="EntityActionMenu",s.__docgenInfo={description:"The EntityActionMenu renders a menu that displays the actions that can be invoked on an Entity page.",displayName:"EntityActionMenu",props:{actionConfiguration:{defaultValue:null,description:"",name:"actionConfiguration",required:!0,type:{name:"ActionConfigurationMap"}},menuConfiguration:{defaultValue:null,description:"",name:"menuConfiguration",required:!0,type:{name:"MenuConfigurationMap"}},layout:{defaultValue:null,description:"",name:"layout",required:!0,type:{name:"EntityActionMenuLayout"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/page/action_menu/EntityActionMenu.tsx#EntityActionMenu"]={docgenInfo:s.__docgenInfo,name:"EntityActionMenu",path:"src/lib/containers/entity/page/action_menu/EntityActionMenu.tsx#EntityActionMenu"})}catch{}const q={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:68,line:18},endLoc:{col:1,line:20},startBody:{col:68,line:18},endBody:{col:1,line:20}},"disabled-download-menu":{startLoc:{col:68,line:18},endLoc:{col:1,line:20},startBody:{col:68,line:18},endBody:{col:1,line:20}}}}},title:"Synapse/EntityPage/ActionMenu",component:s,argTypes:{}},e=o=>()=>{console.log("Action clicked: "+o)},_=o=>u(s,{...o}),b=_.bind({});b.args={actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:e("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:e("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:e("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:e("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:e("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:e("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:e("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}};const f=_.bind({});f.args={actionConfiguration:{ADD_TO_DOWNLOAD_CART:{text:"Add to Download Cart",onClick:e("ADD_TO_DOWNLOAD_CART"),disabled:!0,tooltipText:"You must have some permission to download this thing.",visible:!0},VIEW_SHARING_SETTINGS:{text:"View sharing settings",onClick:e("VIEW_SHARING_SETTINGS"),disabled:!1,visible:!0},MOVE_ENTITY:{text:"Move File",onClick:e("MOVE_ENTITY"),disabled:!1,visible:!0},DELETE_ENTITY:{text:"Delete File",onClick:e("DELETE_ENTITY"),disabled:!1,visible:!0},UPLOAD_FILE:{text:"Upload a file",onClick:e("UPLOAD_FILE"),disabled:!1,visible:!0},EDIT_FILE_METADATA:{text:"Edit some metadata",onClick:e("EDIT_FILE_METADATA"),disabled:!1,visible:!0},REPORT_VIOLATION:{text:"Report Violation",onClick:e("REPORT_VIOLATION"),disabled:!1,visible:!0}},menuConfiguration:{DOWNLOAD:{visible:!0,disabled:!1,tooltipText:"All download actions are blocked for some reason."},PRIMARY:{visible:!0}},layout:{buttonActions:[{action:"UPLOAD_FILE",icon:"upload"},{action:"EDIT_FILE_METADATA",icon:"edit"}],downloadMenuActions:[[{action:"ADD_TO_DOWNLOAD_CART"}]],primaryMenuActions:[[{action:"VIEW_SHARING_SETTINGS"}],[{action:"MOVE_ENTITY"},{action:"DELETE_ENTITY",textSx:{color:"error.main"}}],[{action:"REPORT_VIOLATION",icon:"flag",iconSx:{color:"error.main"}}]],primaryMenuText:"Tools Menu Text is Configurable",primaryMenuEndIcon:"verticalEllipsis"}};const K=["Demo","DisabledDownloadMenu"];export{b as Demo,f as DisabledDownloadMenu,K as __namedExportsOrder,q as default};
