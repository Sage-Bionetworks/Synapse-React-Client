import{r as l,j as t,a as o,F as h}from"./jsx-runtime.30b0b063.js";import{a4 as y,dd as g,az as S,de as w}from"./index.004e53d6.js";import{C,a as D}from"./CreatedOnByUserDiv.eda54ed8.js";import{W as _}from"./WarningModal.2fe34102.js";import{I as k}from"./IconSvg.9b38face.js";import{R as I}from"./Row.e770f4d3.js";import{C as E}from"./isArray.1ceec0fc.js";import{B as T}from"./Button.4f0daaa4.js";import{D as r}from"./Dropdown.eeff7c4d.js";import"./iframe.7f20f630.js";import"./index.a3b83451.js";import"./SynapseConstants.aef18750.js";import"./styled.4350a8f3.js";import"./Tooltip.f326ea8a.js";import"./SvgIcon.a1d78dff.js";import"./useTheme.bbb702a0.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./FullWidthAlert.12957b45.js";import"./hook.82358120.js";import"./createWithBsPrefix.67525ed1.js";import"./divWithClassName.fc6b9e1a.js";import"./index.35ce73ec.js";import"./Typography.e0f3806f.js";import"./Fade.13693e7f.js";import"./getEndpoint.f1f195f5.js";import"./IconButton.32d1d9ea.js";import"./ButtonBase.32a6d369.js";import"./emotion-react.browser.esm.f592d4ba.js";import"./Link.671fdc30.js";import"./Button.9f139960.js";import"./UserCard.8f93d708.js";import"./IconCopy.b0b77e27.js";import"./SkeletonTable.d4ad4639.js";import"./times.9e428882.js";import"./toInteger.ac8d0258.js";import"./isSymbol.a68e106b.js";import"./Skeleton.12921ce3.js";import"./ToastMessage.0ad637d7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.11b542f1.js";import"./toString.0784e7f5.js";import"./Overlay.6a310082.js";import"./contains.4aff3092.js";import"./usePopperMarginModifiers.ff236d51.js";import"./useWaitForDOMRef.0fac0f63.js";import"./Modal.4b6f87a4.js";import"./inheritsLoose.acddc658.js";import"./usePrevious.407c8514.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:d,onModifyAccess:c,onSubmit:m,onDeleteSuccess:u})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[a,v]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{v(p)}).catch(p=>s(p))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(u).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),a&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:b,onEdit:d,onModifyAccess:c})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:m,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:d,onModifyAccess:c,onDelete:m})=>{const[u,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:u,confirmButtonText:"Delete",onConfirm:()=>{m(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{icon:"verticalEllipsis"})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:d,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:c,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"]={docgenInfo:i.__docgenInfo,name:"EvaluationCard",path:"src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"})}catch{}const Te={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{card:{startLoc:{col:56,line:12},endLoc:{col:1,line:14},startBody:{col:56,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationCard",component:i},M=e=>t(i,{...e}),A=M.bind({});A.args={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"}};const xe=["Card"];export{A as Card,xe as __namedExportsOrder,Te as default};
