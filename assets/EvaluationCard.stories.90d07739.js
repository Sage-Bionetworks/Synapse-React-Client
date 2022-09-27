import{r as l,j as t,a as o,F as h}from"./jsx-runtime.8cf0c657.js";import{h as y,cA as g,E as S,cB as w}from"./index.a6d709ad.js";import{C,a as D}from"./CreatedOnByUserDiv.c7fad003.js";import{W as _}from"./WarningModal.e9fa0d5e.js";import{I as k}from"./IconSvg.894064e3.js";import{R as I}from"./Row.8288bfa5.js";import{C as E}from"./isArray.62d496dc.js";import{B as T}from"./Button.89087c87.js";import{D as r}from"./Dropdown.2b40167c.js";import"./iframe.6f47dcc9.js";import"./index.0d47cfe5.js";import"./withStyles.f22e9c75.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.70f23d9f.js";import"./index.57d09176.js";import"./Transition.2fb6e5a0.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.af962ab3.js";import"./UserCard.06fc45b4.js";import"./IconCopy.27efae90.js";import"./SkeletonTable.42e3c3ac.js";import"./times.8daad405.js";import"./toInteger.b1cd1d84.js";import"./isSymbol.57088814.js";import"./Skeleton.af6ba2d8.js";import"./Tooltip.8bb6ec51.js";import"./createSvgIcon.3db62023.js";import"./slicedToArray.e72f11da.js";import"./useTheme.daa899de.js";import"./makeStyles.14efd907.js";import"./ToastMessage.d368c817.js";import"./FullWidthAlert.c513e3cd.js";import"./Typography.0dca8b10.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ba83e708.js";import"./Overlay.58c30ef0.js";import"./useWaitForDOMRef.501162ab.js";import"./usePopperMarginModifiers.1ab8820d.js";import"./Modal.498d8359.js";import"./useWillUnmount.836b1f97.js";import"./InfoOutlined.7ef1e7fd.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:c,onModifyAccess:d,onSubmit:u,onDeleteSuccess:m})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[a,v]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{v(p)}).catch(p=>s(p))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(m).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),a&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:b,onEdit:c,onModifyAccess:d})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:u,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:c,onModifyAccess:d,onDelete:u})=>{const[m,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:m,confirmButtonText:"Delete",onConfirm:()=>{u(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{options:{icon:"verticalEllipsis"}})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:d,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
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
