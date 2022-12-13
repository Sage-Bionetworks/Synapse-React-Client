import{r as l,j as t,a as o,F as h}from"./jsx-runtime.d04151d1.js";import{V as y,cV as g,an as S,cW as w}from"./EntityTypeUtils.9c2483b3.js";import{C,a as D}from"./CreatedOnByUserDiv.756e2b42.js";import{W as _}from"./WarningModal.d2b7e88b.js";import{I as k}from"./IconSvg.23552105.js";import{R as I}from"./Row.d23e8e35.js";import{C as E}from"./isArray.88add67b.js";import{B as T}from"./Button.a12385d6.js";import{D as r}from"./Dropdown.67b8871d.js";import"./iframe.d32e0f35.js";import"./index.8319c373.js";import"./Fade.f21ee508.js";import"./styled.1efff5b8.js";import"./useTheme.175bd669.js";import"./Tooltip.4974d54a.js";import"./SvgIcon.d3ec47f0.js";import"./TransitionGroupContext.1ef7d36b.js";import"./getEndpoint.f1f195f5.js";import"./createWithBsPrefix.f5521544.js";import"./IconButton.f2c2856c.js";import"./ButtonBase.3d334067.js";import"./emotion-react.browser.esm.b7b35e3a.js";import"./Link.45362a72.js";import"./Typography.73bd7049.js";import"./Button.09b7bba7.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.770d73de.js";import"./hook.ba873afd.js";import"./divWithClassName.2e38eee3.js";import"./index.35ce73ec.js";import"./UserCard.85628e7b.js";import"./IconCopy.f2a5ff5c.js";import"./SkeletonTable.9b156a16.js";import"./times.f1a57eab.js";import"./toInteger.ae0f3fd8.js";import"./isSymbol.4d2b99f3.js";import"./Skeleton.b0e23dcf.js";import"./ToastMessage.7ece14e4.js";import"./FullWidthAlert.8d2b5601.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.55896be5.js";import"./Overlay.68ebd8b3.js";import"./contains.5d34513a.js";import"./usePopperMarginModifiers.eac9bbda.js";import"./useWaitForDOMRef.3ce690e8.js";import"./Modal.e9042f62.js";import"./inheritsLoose.60fa261c.js";import"./usePrevious.17fca189.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:c,onModifyAccess:d,onSubmit:m,onDeleteSuccess:u})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[a,v]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{v(p)}).catch(p=>s(p))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(u).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),a&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:b,onEdit:c,onModifyAccess:d})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:m,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:c,onModifyAccess:d,onDelete:m})=>{const[u,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:u,confirmButtonText:"Delete",onConfirm:()=>{m(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{icon:"verticalEllipsis"})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:d,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
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
