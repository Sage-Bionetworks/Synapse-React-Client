import{r as l,j as t,a as o,F as h}from"./jsx-runtime.f4a5fef7.js";import{V as y,cD as g,R as S,cE as w}from"./index.78005489.js";import{C,a as D}from"./CreatedOnByUserDiv.fa9dcf91.js";import{W as _}from"./WarningModal.688d0f1c.js";import{I as k}from"./IconSvg.d54f7f38.js";import{R as I}from"./Row.7d44646f.js";import{C as E}from"./isArray.c85c7bf8.js";import{B as T}from"./Button.6c384231.js";import{D as r}from"./Dropdown.ba5311c1.js";import"./iframe.1c2d6841.js";import"./index.ee4c3b55.js";import"./SynapseConstants.290eab74.js";import"./styled.02bbe28b.js";import"./utils.c51ff475.js";import"./TransitionGroupContext.bc250134.js";import"./useTheme.cb95caa9.js";import"./Alert.4753fb70.js";import"./hook.82a0cc8c.js";import"./createWithBsPrefix.54f05b7e.js";import"./divWithClassName.967bfcd9.js";import"./index.35ce73ec.js";import"./Fade.f600cb07.js";import"./getEndpoint.bb7ded34.js";import"./Link.880594dd.js";import"./Typography.839bb703.js";import"./Button.4567776a.js";import"./ButtonBase.380fb064.js";import"./emotion-react.browser.esm.e2223364.js";import"./UserCard.759836bb.js";import"./IconCopy.bde4919e.js";import"./SkeletonTable.0785797a.js";import"./times.2d68f6f5.js";import"./toInteger.7b500fdb.js";import"./isSymbol.f04221fe.js";import"./Skeleton.c4f2e78a.js";import"./ToastMessage.715b02dd.js";import"./FullWidthAlert.dfc3d6c6.js";import"./Tooltip.8a367305.js";import"./createSvgIcon.5d1f0251.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f0e21060.js";import"./Overlay.c82b84a8.js";import"./contains.9e492dba.js";import"./usePopperMarginModifiers.c2cb8c2e.js";import"./useWaitForDOMRef.a74f5535.js";import"./Modal.99d56cea.js";import"./inheritsLoose.6b8ca8e2.js";import"./usePrevious.7d29e7c5.js";import"./InfoOutlined.b6a78282.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:c,onModifyAccess:d,onSubmit:m,onDeleteSuccess:u})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[a,v]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{v(p)}).catch(p=>s(p))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(u).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),a&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:b,onEdit:c,onModifyAccess:d})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:m,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:c,onModifyAccess:d,onDelete:m})=>{const[u,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:u,confirmButtonText:"Delete",onConfirm:()=>{m(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{icon:"verticalEllipsis"})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:d,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
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
