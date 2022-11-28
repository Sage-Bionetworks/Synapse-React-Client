import{r as l,j as t,a as o,F as h}from"./jsx-runtime.0721b30f.js";import{V as y,cD as g,R as S,cE as w}from"./index.96fee529.js";import{C,a as D}from"./CreatedOnByUserDiv.57d3164a.js";import{W as _}from"./WarningModal.1a2883db.js";import{I as k}from"./IconSvg.69d2b3a3.js";import{R as I}from"./Row.fb3829a8.js";import{C as E}from"./isArray.0e868c61.js";import{B as T}from"./Button.c6170972.js";import{D as r}from"./Dropdown.cda3e88c.js";import"./iframe.d07454b7.js";import"./index.84874f77.js";import"./SynapseConstants.290eab74.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";import"./UserCard.9a1acc17.js";import"./IconCopy.343b69cc.js";import"./SkeletonTable.12d4458e.js";import"./times.938b95b0.js";import"./toInteger.0c46f3eb.js";import"./isSymbol.2a2fd570.js";import"./Skeleton.bcaf6f06.js";import"./ToastMessage.c03bf450.js";import"./FullWidthAlert.f41552e4.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.22a08d1e.js";import"./Overlay.d556696c.js";import"./contains.4df2422e.js";import"./usePopperMarginModifiers.eef01d88.js";import"./useWaitForDOMRef.65459bf1.js";import"./Modal.ffe20d01.js";import"./inheritsLoose.53a219d1.js";import"./usePrevious.7579f6d6.js";import"./InfoOutlined.1d86a385.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:c,onModifyAccess:d,onSubmit:m,onDeleteSuccess:u})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[a,v]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{v(p)}).catch(p=>s(p))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(u).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),a&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:b,onEdit:c,onModifyAccess:d})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:m,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:c,onModifyAccess:d,onDelete:m})=>{const[u,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:u,confirmButtonText:"Delete",onConfirm:()=>{m(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{icon:"verticalEllipsis"})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:d,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"]={docgenInfo:i.__docgenInfo,name:"EvaluationCard",path:"src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"})}catch{}const xe={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{card:{startLoc:{col:56,line:12},endLoc:{col:1,line:14},startBody:{col:56,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationCard",component:i},M=e=>t(i,{...e}),A=M.bind({});A.args={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"}};const Me=["Card"];export{A as Card,Me as __namedExportsOrder,xe as default};
