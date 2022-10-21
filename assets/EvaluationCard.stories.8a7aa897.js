import{r as l,j as t,a as o,F as h}from"./jsx-runtime.a232804d.js";import{h as y,cW as g,E as S,cX as w}from"./index.df4d7189.js";import{C,a as D}from"./CreatedOnByUserDiv.1c64d72b.js";import{W as _}from"./WarningModal.a66e9200.js";import{I as k}from"./IconSvg.7d220ad3.js";import{R as I}from"./Row.75a71adc.js";import{C as E}from"./isArray.a5a56f48.js";import{B as T}from"./Button.6d51f091.js";import{D as a}from"./Dropdown.026e24f0.js";import"./iframe.10584503.js";import"./index.ba62157d.js";import"./withStyles.1db4abc8.js";import"./utils.428c4b7a.js";import"./Alert.05377b39.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.885aee5a.js";import"./UserCard.7296873e.js";import"./IconCopy.5c84b271.js";import"./SkeletonTable.42b69551.js";import"./times.94f8f16d.js";import"./toInteger.99850a56.js";import"./isSymbol.af0f15b0.js";import"./Skeleton.e3b72fa9.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./makeStyles.403aaa55.js";import"./ToastMessage.b42768ca.js";import"./FullWidthAlert.5abd6e7a.js";import"./Typography.9247f57a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.42db352a.js";import"./Overlay.2735c2ff.js";import"./useWaitForDOMRef.b691e8e9.js";import"./usePopperMarginModifiers.2b01b6ad.js";import"./Modal.487f443a.js";import"./inheritsLoose.5977b5ad.js";import"./InfoOutlined.d81a19b2.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:c,onModifyAccess:d,onSubmit:u,onDeleteSuccess:m})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[r,v]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{v(p)}).catch(p=>s(p))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(m).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),r&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:r,onDelete:b,onEdit:c,onModifyAccess:d})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(r==null?void 0:r.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:u,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:c,onModifyAccess:d,onDelete:u})=>{const[m,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:m,confirmButtonText:"Delete",onConfirm:()=>{u(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(a,{className:"float-right",children:[t(a.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{options:{icon:"verticalEllipsis"}})}),o(a.Menu,{alignRight:!0,children:[e.canEdit&&t(a.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(a.Item,{role:"menuitem",onClick:d,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(a.Divider,{}),t(a.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"]={docgenInfo:i.__docgenInfo,name:"EvaluationCard",path:"src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"})}catch{}const be={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{card:{startLoc:{col:56,line:12},endLoc:{col:1,line:14},startBody:{col:56,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationCard",component:i},M=e=>t(i,{...e}),A=M.bind({});A.args={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"}};const ye=["Card"];export{A as Card,ye as __namedExportsOrder,be as default};
