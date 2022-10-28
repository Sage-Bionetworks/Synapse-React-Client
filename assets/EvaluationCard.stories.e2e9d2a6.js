import{r as l,j as t,a as o,F as h}from"./jsx-runtime.f2f98a5a.js";import{f as y,bN as g,E as S,bO as w}from"./index.3643f9f4.js";import{C,a as D}from"./CreatedOnByUserDiv.50c94fdd.js";import{W as _}from"./WarningModal.1a9379eb.js";import{I as k}from"./IconSvg.9332b201.js";import{R as I}from"./Row.f4923a38.js";import{C as E}from"./isArray.7423227f.js";import{B as T}from"./Button.498cd291.js";import{D as r}from"./Dropdown.2aef55d7.js";import"./iframe.3db3203a.js";import"./index.9f26ffd6.js";import"./SynapseConstants.b6aa8bf5.js";import"./withStyles.c893a568.js";import"./utils.b0185ad4.js";import"./Alert.df9cc8b6.js";import"./index.57d09176.js";import"./createWithBsPrefix.859b1c88.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.aef32627.js";import"./UserCard.0ebe4f67.js";import"./IconCopy.31ff040b.js";import"./SkeletonTable.ca71276a.js";import"./times.408344a9.js";import"./toInteger.61038943.js";import"./isSymbol.b0b5d283.js";import"./Skeleton.756bfafa.js";import"./Tooltip.1481a07d.js";import"./createSvgIcon.6b81a395.js";import"./makeStyles.b901d8a5.js";import"./ToastMessage.75433d78.js";import"./FullWidthAlert.007c198f.js";import"./Typography.32e9e32f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.cb398276.js";import"./Overlay.792e9294.js";import"./contains.afe7b6ba.js";import"./usePopperMarginModifiers.4a57f45c.js";import"./useWaitForDOMRef.0d0b5d6b.js";import"./Modal.c41c729a.js";import"./inheritsLoose.ec71a7aa.js";import"./usePrevious.9b92c2d2.js";import"./InfoOutlined.23b933db.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:c,onModifyAccess:d,onSubmit:u,onDeleteSuccess:m})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[a,b]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{b(p)}).catch(p=>s(p))},[e,n]);const v=()=>{s(void 0),w(e.id,n).then(m).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),a&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:v,onEdit:c,onModifyAccess:d})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:u,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:c,onModifyAccess:d,onDelete:u})=>{const[m,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:m,confirmButtonText:"Delete",onConfirm:()=>{u(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{options:{icon:"verticalEllipsis"}})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:d,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"]={docgenInfo:i.__docgenInfo,name:"EvaluationCard",path:"src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"})}catch{}const we={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{card:{startLoc:{col:56,line:12},endLoc:{col:1,line:14},startBody:{col:56,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationCard",component:i},M=e=>t(i,{...e}),A=M.bind({});A.args={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"}};const De=["Card"];export{A as Card,De as __namedExportsOrder,we as default};
