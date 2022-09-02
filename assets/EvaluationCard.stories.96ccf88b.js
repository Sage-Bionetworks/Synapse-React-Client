import{w as y,ca as g,E as S,cb as w}from"./index.83cd4268.js";import{C as E,a as D}from"./CreatedOnByUserDiv.56ad20d5.js";import{W as _}from"./WarningModal.ca99a4a6.js";import{I as k}from"./IconSvg.45071707.js";import{j as t,a as n,F as p}from"./jsx-runtime.00d70968.js";import{R as I}from"./Row.f2388f00.js";import{o as C}from"./ToastMessage.0ffd35ff.js";import{B as T}from"./Button.fda23eee.js";import{D as a}from"./Dropdown.2144a55d.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./index.35ce73ec.js";import"./assert.fe14baa7.js";import"./iframe.809c86e7.js";import"./getEndpoint.bb7ded34.js";import"./UserCard.c7556a91.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.a5be41ff.js";import"./times.49810acf.js";import"./toInteger.0eadce58.js";import"./Skeleton.88496afb.js";import"./Overlay.3297046e.js";import"./useWaitForDOMRef.d07b3a07.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./Modal.8f4b0da5.js";import"./useWillUnmount.4a16e5cd.js";import"./InfoOutlined.303a7ed9.js";import"./isRequiredForA11y.20ed4857.js";const M=window.React.useEffect,h=window.React.useState,i=({evaluation:e,onEdit:l,onModifyAccess:c,onSubmit:d,onDeleteSuccess:u})=>{const{accessToken:o}=y(),[f,s]=h(),[r,v]=h();M(()=>{s(void 0),g(e.id,o).then(m=>{v(m)}).catch(m=>s(m))},[e,o]);const b=()=>{s(void 0),w(e.id,o).then(u).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(E,{children:n(E.Body,{children:[f&&t(S,{error:f}),r&&n(p,{children:[n(I,{children:[t(C,{children:t("label",{children:"EVALUATION QUEUE"})}),t(C,{children:t(A,{permissions:r,onDelete:b,onEdit:l,onModifyAccess:c})})]}),n("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(r==null?void 0:r.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:d,children:"Submit"})]})]})})})},A=({permissions:e,onEdit:l,onModifyAccess:c,onDelete:d})=>{const[u,o]=h(!1);return e.canEdit||e.canChangePermissions||e.canDelete?n(p,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:u,confirmButtonText:"Delete",onConfirm:()=>{d(),o(!1)},onConfirmCallbackArgs:[],onCancel:()=>{o(!1)},confirmButtonVariant:"danger"}),n(a,{className:"float-right",children:[t(a.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{options:{icon:"verticalEllipsis"}})}),n(a.Menu,{alignRight:!0,children:[e.canEdit&&t(a.Item,{role:"menuitem",onClick:l,children:"Edit"}),e.canChangePermissions&&t(a.Item,{role:"menuitem",onClick:c,children:"Modify Access"}),e.canDelete&&n(p,{children:[t(a.Divider,{}),t(a.Item,{role:"menuitem",onClick:()=>o(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"]={docgenInfo:i.__docgenInfo,name:"EvaluationCard",path:"src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"})}catch{}const Ce={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EvaluationCard } from './EvaluationCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/Challenge/EvaluationCard',
  component: EvaluationCard,
} as ComponentMeta<typeof EvaluationCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EvaluationCard> = args => (
  <EvaluationCard {...args} />
)

export const Card = Template.bind({})
Card.args = {
  evaluation: {
    id: '9614690',
    etag: '6f8aa977-527e-4b2f-9d87-beab2db99503',
    name: 'Sample Evaluation Queue',
    description: 'This is a sample Evaluation Queue',
    ownerId: '3345868',
    createdOn: '2021-01-05T00:41:11.670Z',
    contentSource: 'syn23679309',
    submissionInstructionsMessage: 'Do a barrel roll',
    submissionReceiptMessage: 'We received your submission',
  },
}
`,locationsMap:{card:{startLoc:{col:56,line:12},endLoc:{col:1,line:14},startBody:{col:56,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationCard",component:i},x=e=>t(i,{...e}),O=x.bind({});O.args={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"}};const ve=["Card"];export{O as Card,ve as __namedExportsOrder,Ce as default};
