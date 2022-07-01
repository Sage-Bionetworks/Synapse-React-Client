import{bs as y,bt as g}from"./index.cdf98c81.js";import{a as S,E as w}from"./useUserBundle.1e187889.js";import{C,a as D}from"./CreatedOnByUserDiv.804ef28c.js";import{W as _}from"./WarningModal.14601faa.js";import{I as k}from"./IconSvg.d5022c82.js";import{j as t,a as o,F as p}from"./jsx-runtime.2e925369.js";import{R as I}from"./Row.df385a60.js";import{C as E}from"./FormLabel.a635baa2.js";import{B as T}from"./Button.77571428.js";import{D as r}from"./Dropdown.edf6576c.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./toConsumableArray.5f669646.js";import"./withStyles.4f64abe1.js";import"./index.f252d424.js";import"./createWithBsPrefix.f7715523.js";import"./assert.45ccb9fa.js";import"./iframe.dedbd728.js";import"./index.8cde812d.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./index.06f4a415.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./UserCard.07b3e3b1.js";import"./index.es.82d55a6a.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.874b8571.js";import"./times.0a9ef28a.js";import"./toInteger.9c26e41e.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./Skeleton.bf1489f0.js";import"./ToastMessage.574c0fe0.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./makeStyles.5f6bad01.js";import"./debounce.6a99f8f3.js";import"./Clear.53a62cf5.js";import"./createSvgIcon.53013205.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4eca3697.js";import"./Overlay.5ce67f19.js";import"./useWaitForDOMRef.088a2ede.js";import"./usePopperMarginModifiers.09a60569.js";import"./Modal.739750b1.js";import"./useWillUnmount.4a16e5cd.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./InfoOutlined.748401db.js";import"./isRequiredForA11y.61bbc671.js";const M=window.React.useEffect,h=window.React.useState,i=({evaluation:e,onEdit:l,onModifyAccess:c,onSubmit:d,onDeleteSuccess:m})=>{const{accessToken:n}=S(),[f,s]=h(),[a,v]=h();M(()=>{s(void 0),y(e.id,n).then(u=>{v(u)}).catch(u=>s(u))},[e,n]);const b=()=>{s(void 0),g(e.id,n).then(m).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(w,{error:f}),a&&o(p,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(A,{permissions:a,onDelete:b,onEdit:l,onModifyAccess:c})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:d,children:"Submit"})]})]})})})},A=({permissions:e,onEdit:l,onModifyAccess:c,onDelete:d})=>{const[m,n]=h(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(p,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:m,confirmButtonText:"Delete",onConfirm:()=>{d(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{variant:"link",className:"dropdown-no-caret",children:t(k,{options:{icon:"verticalEllipsis"}})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{onClick:l,children:"Edit"}),e.canChangePermissions&&t(r.Item,{onClick:c,children:"Modify Access"}),e.canDelete&&o(p,{children:[t(r.Divider,{}),t(r.Item,{onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
For this reason, the dropdown menu items are unimplemented as no components
in this project implement their behavior. The dropdown options are also
not shown if the current user does not have permissions for the action

All Evaluation metadata must be provided to this component; it will not
retrieve an Evaluation via a REST API call`,displayName:"EvaluationCard",props:{evaluation:{defaultValue:null,description:"properties of the Evaluation to show",name:"evaluation",required:!0,type:{name:"ExistingEvaluation"}},onEdit:{defaultValue:null,description:"Callback when the Edit option in the dropdown is clicked",name:"onEdit",required:!0,type:{name:"() => void"}},onModifyAccess:{defaultValue:null,description:"Callback when the Modify Access option in the dropdown is clicked",name:"onModifyAccess",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"Callback when the Submit button is clicked",name:"onSubmit",required:!0,type:{name:"() => void"}},onDeleteSuccess:{defaultValue:null,description:"Callback when the Delete option is successful",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"]={docgenInfo:i.__docgenInfo,name:"EvaluationCard",path:"src/lib/containers/evaluation_queues/EvaluationCard.tsx#EvaluationCard"})}catch{}var Oe={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{card:{startLoc:{col:56,line:12},endLoc:{col:1,line:14},startBody:{col:56,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationCard",component:i};const x=e=>t(i,{...e}),R=x.bind({});R.args={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"}};const qe=["Card"];export{R as Card,qe as __namedExportsOrder,Oe as default};
//# sourceMappingURL=EvaluationCard.stories.0327b06d.js.map
