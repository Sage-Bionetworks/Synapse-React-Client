import{w as y,c8 as g,E as S,c9 as w}from"./index.29a7f152.js";import{C,a as D}from"./CreatedOnByUserDiv.e78354a5.js";import{W as _}from"./WarningModal.db1d2b8d.js";import{I as k}from"./IconSvg.3d20df6f.js";import{j as t,a as o,F as p}from"./jsx-runtime.2e925369.js";import{R as I}from"./Row.3a6bf0e2.js";import{C as E}from"./toString.8ef640ae.js";import{B as T}from"./Button.c582ea4c.js";import{D as a}from"./Dropdown.c29f5884.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./assert.f243583f.js";import"./iframe.e1b191de.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./UserCard.97189984.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.ce1a5abf.js";import"./times.f924a064.js";import"./toInteger.990bd17d.js";import"./Skeleton.8dd0668e.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./ToastMessage.f82ed562.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.88992b99.js";import"./useWaitForDOMRef.c89dbc64.js";import"./usePopperMarginModifiers.31225551.js";import"./Modal.58357e58.js";import"./useWillUnmount.4a16e5cd.js";import"./InfoOutlined.22a371fd.js";import"./isRequiredForA11y.61bbc671.js";const M=window.React.useEffect,h=window.React.useState,i=({evaluation:e,onEdit:l,onModifyAccess:c,onSubmit:d,onDeleteSuccess:u})=>{const{accessToken:n}=y(),[f,s]=h(),[r,v]=h();M(()=>{s(void 0),g(e.id,n).then(m=>{v(m)}).catch(m=>s(m))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(u).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),r&&o(p,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(A,{permissions:r,onDelete:b,onEdit:l,onModifyAccess:c})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(r==null?void 0:r.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:d,children:"Submit"})]})]})})})},A=({permissions:e,onEdit:l,onModifyAccess:c,onDelete:d})=>{const[u,n]=h(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(p,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:u,confirmButtonText:"Delete",onConfirm:()=>{d(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(a,{className:"float-right",children:[t(a.Toggle,{variant:"link",className:"dropdown-no-caret",children:t(k,{options:{icon:"verticalEllipsis"}})}),o(a.Menu,{alignRight:!0,children:[e.canEdit&&t(a.Item,{onClick:l,children:"Edit"}),e.canChangePermissions&&t(a.Item,{onClick:c,children:"Modify Access"}),e.canDelete&&o(p,{children:[t(a.Divider,{}),t(a.Item,{onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"]={docgenInfo:i.__docgenInfo,name:"EvaluationCard",path:"src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"})}catch{}var we={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{card:{startLoc:{col:56,line:12},endLoc:{col:1,line:14},startBody:{col:56,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationCard",component:i};const x=e=>t(i,{...e}),R=x.bind({});R.args={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"}};const De=["Card"];export{R as Card,De as __namedExportsOrder,we as default};
//# sourceMappingURL=EvaluationCard.stories.2e86711b.js.map
