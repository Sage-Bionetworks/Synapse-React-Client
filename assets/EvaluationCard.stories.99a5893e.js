import{r as l,j as t,a as o,F as h}from"./jsx-runtime.32974a61.js";import{a4 as y,dd as g,aA as S,de as w}from"./index.ffb97e36.js";import{C,a as D}from"./CreatedOnByUserDiv.b61d9f9c.js";import{W as _}from"./WarningModal.e45800ea.js";import{I as k}from"./IconSvg.13ae9a2f.js";import{R as I}from"./Row.e544e419.js";import{C as E}from"./isArray.c8bb4df8.js";import{B as T}from"./Button.335f67c9.js";import{D as r}from"./Dropdown.076e64ad.js";import"./iframe.1b774001.js";import"./index.3765caa7.js";import"./SynapseConstants.aef18750.js";import"./styled.d39d5dc5.js";import"./Tooltip.86d343dc.js";import"./SvgIcon.85beeea7.js";import"./useTheme.6433d807.js";import"./TransitionGroupContext.a684d657.js";import"./FullWidthAlert.1407f383.js";import"./hook.b7735453.js";import"./createWithBsPrefix.9bd79cbf.js";import"./divWithClassName.5dac844d.js";import"./index.35ce73ec.js";import"./Typography.c2c9dd4b.js";import"./Fade.40b5902b.js";import"./getEndpoint.f1f195f5.js";import"./IconButton.adda85b8.js";import"./ButtonBase.38f61443.js";import"./emotion-react.browser.esm.34fe7ce7.js";import"./Link.7609fc67.js";import"./Button.a71922e0.js";import"./UserCard.e7305117.js";import"./IconCopy.ef0119b7.js";import"./SkeletonTable.46544d69.js";import"./times.2bf5fee2.js";import"./toInteger.79c7525f.js";import"./isSymbol.99aea655.js";import"./Skeleton.391d7134.js";import"./ToastMessage.65ccc322.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.74860187.js";import"./toString.77379481.js";import"./Overlay.506fb03e.js";import"./contains.bd6ce983.js";import"./usePopperMarginModifiers.c268b183.js";import"./useWaitForDOMRef.8d2f766c.js";import"./Modal.a001dbc2.js";import"./inheritsLoose.3e2b8649.js";import"./usePrevious.ac877c6e.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:d,onModifyAccess:c,onSubmit:m,onDeleteSuccess:u})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[a,v]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{v(p)}).catch(p=>s(p))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(u).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),a&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:b,onEdit:d,onModifyAccess:c})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:m,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:d,onModifyAccess:c,onDelete:m})=>{const[u,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:u,confirmButtonText:"Delete",onConfirm:()=>{m(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{icon:"verticalEllipsis"})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:d,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:c,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
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
