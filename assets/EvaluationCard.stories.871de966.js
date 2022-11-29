import{r as l,j as t,a as o,F as h}from"./jsx-runtime.25f1da80.js";import{V as y,cD as g,R as S,cE as w}from"./index.69555c85.js";import{C,a as D}from"./CreatedOnByUserDiv.f80aee32.js";import{W as _}from"./WarningModal.a2a8f9cb.js";import{I as k}from"./IconSvg.562c1909.js";import{R as I}from"./Row.7dc09288.js";import{C as E}from"./isArray.63a07037.js";import{B as T}from"./Button.03ce126b.js";import{D as r}from"./Dropdown.b0e1788b.js";import"./iframe.89c4ca26.js";import"./index.09872124.js";import"./SynapseConstants.290eab74.js";import"./styled.61c2cdbd.js";import"./utils.653016b9.js";import"./TransitionGroupContext.d4abce3c.js";import"./useTheme.50dbca56.js";import"./Alert.c8ecdb26.js";import"./hook.865145d2.js";import"./createWithBsPrefix.2ba1d399.js";import"./divWithClassName.8bbfe55a.js";import"./index.35ce73ec.js";import"./Fade.5af2af2d.js";import"./getEndpoint.bb7ded34.js";import"./Link.7320b292.js";import"./Typography.787f3df0.js";import"./Button.71735648.js";import"./ButtonBase.e51b431c.js";import"./emotion-react.browser.esm.de1a23fd.js";import"./UserCard.e6c2a584.js";import"./IconCopy.64748781.js";import"./SkeletonTable.1d27d75d.js";import"./times.f808a242.js";import"./toInteger.374f3d90.js";import"./isSymbol.8bb90a01.js";import"./Skeleton.264ae24e.js";import"./ToastMessage.679431d9.js";import"./FullWidthAlert.ce239055.js";import"./Tooltip.dc683be6.js";import"./createSvgIcon.32db2a88.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b035a11c.js";import"./Overlay.f9384c09.js";import"./contains.b82313ef.js";import"./usePopperMarginModifiers.6c0d1965.js";import"./useWaitForDOMRef.e68dcf6e.js";import"./Modal.4b7d9dca.js";import"./inheritsLoose.b1a489b6.js";import"./usePrevious.8c5acee9.js";import"./InfoOutlined.d976b6d4.js";import"./isRequiredForA11y.20ed4857.js";const i=({evaluation:e,onEdit:c,onModifyAccess:d,onSubmit:m,onDeleteSuccess:u})=>{const{accessToken:n}=y(),[f,s]=l.exports.useState(),[a,v]=l.exports.useState();l.exports.useEffect(()=>{s(void 0),g(e.id,n).then(p=>{v(p)}).catch(p=>s(p))},[e,n]);const b=()=>{s(void 0),w(e.id,n).then(u).catch(s)};return t("div",{className:"bootstrap-4-backport evaluation-card",children:t(C,{children:o(C.Body,{children:[f&&t(S,{error:f}),a&&o(h,{children:[o(I,{children:[t(E,{children:t("label",{children:"EVALUATION QUEUE"})}),t(E,{children:t(x,{permissions:a,onDelete:b,onEdit:c,onModifyAccess:d})})]}),o("h4",{children:[e.name," (",e.id,")"]}),t("label",{children:"Description"}),t("p",{children:e.description}),t("label",{children:"Instructions"}),t("p",{children:e.submissionInstructionsMessage}),t(D,{userId:e.ownerId,date:new Date(e.createdOn)}),(a==null?void 0:a.canSubmit)&&t(T,{className:"submit-button",type:"primary",onClick:m,children:"Submit"})]})]})})})},x=({permissions:e,onEdit:c,onModifyAccess:d,onDelete:m})=>{const[u,n]=l.exports.useState(!1);return e.canEdit||e.canChangePermissions||e.canDelete?o(h,{children:[(e==null?void 0:e.canDelete)&&t(_,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete the Evaluation Queue?",show:u,confirmButtonText:"Delete",onConfirm:()=>{m(),n(!1)},onConfirmCallbackArgs:[],onCancel:()=>{n(!1)},confirmButtonVariant:"danger"}),o(r,{className:"float-right",children:[t(r.Toggle,{role:"menu","aria-label":"Options",variant:"link",className:"dropdown-no-caret",children:t(k,{icon:"verticalEllipsis"})}),o(r.Menu,{alignRight:!0,children:[e.canEdit&&t(r.Item,{role:"menuitem",onClick:c,children:"Edit"}),e.canChangePermissions&&t(r.Item,{role:"menuitem",onClick:d,children:"Modify Access"}),e.canDelete&&o(h,{children:[t(r.Divider,{}),t(r.Item,{role:"menuitem",onClick:()=>n(!0),children:"Delete"})," "]})]})]})]}):null};try{i.displayName="EvaluationCard",i.__docgenInfo={description:`This component is currently only intended to be used in Synapse.org.
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
