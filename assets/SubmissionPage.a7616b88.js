import{h as p}from"./moment.a565bb48.js";import{r as F,a as r,j as e,R as I,F as c}from"./jsx-runtime.aa766aaf.js";import{a9 as U,a8 as P,a4 as B}from"./index.0a2c4939.js";import{f as w}from"./DateFormatter.b979f188.js";import{a as E,b as O}from"./useDataAccessSubmission.ead63702.js";import{a as _,c as N,d as k}from"./useGetAccessRequirement.0c595617.js";import{A as L}from"./SynapseConstants.290eab74.js";import{S as C}from"./ManagedACTAccessRequirementStatus.be369a71.js";import{F as K,a as H}from"./CardContainerLogic.fb6258f8.js";import{W as M}from"./WarningModal.25805129.js";import{U as v}from"./UserCard.e95fdc99.js";import{U as T}from"./UserOrTeamBadge.bf49a816.js";import{T as i}from"./Typography.57d7ee2f.js";import{S as d}from"./Skeleton.b9cd2726.js";import{B as D}from"./Button.c2cc208f.js";import{u as V}from"./upperFirst.81cfb7fe.js";import{t as W}from"./toLower.7fd29573.js";function f(o){const{submissionId:n,fileHandleId:l}=o,m=I.useMemo(()=>({fileHandleId:l,associateObjectId:n,associateObjectType:B.DataAccessSubmissionAttachment}),[l,n]);return e(K,{showDownloadIcon:!0,fileHandleAssociation:m},l)}function G(o){return e(M,{show:o.show,title:"Approve Request?",modalBody:r(c,{children:[e(i,{variant:"body1",children:"Approving the request will grant access to controlled data."}),e(i,{variant:"body1",children:"In addition, the user will receive an email notification alerting them that the request has been granted."})]}),onConfirm:o.onConfirm,onConfirmCallbackArgs:[],onCancel:o.onCancel,confirmButtonText:"Approve"})}function z(o){const{data:n}=k(o.accessRequirementId,{useErrorBoundary:!0});return n?e("div",{className:"AccessRequirementWikiContainer",children:r("div",{className:"AccessRequirementWikiContent",children:[e(i,{variant:"headline1",children:"Access Requirement"}),e("hr",{}),e(H,{wikiId:n==null?void 0:n.wikiPageId,ownerId:n==null?void 0:n.ownerObjectId,objectType:n==null?void 0:n.ownerObjectType})]})}):e(d,{width:"100%",height:"600px"})}function S(o){var b,R;const{submissionId:n,onRejectClicked:l}=o,m=U(),{data:a,refetch:g}=E(n,{useErrorBoundary:!0}),{mutateAsync:y}=O(),{data:s}=_(parseInt(a==null?void 0:a.accessRequirementId),{enabled:!!a}),{data:h}=N(a==null?void 0:a.accessRequirementId,{enabled:!!a,useErrorBoundary:!0}),[j,u]=F.exports.useState(!1);function q(){var t;return y({submissionId:(t=a==null?void 0:a.id)!=null?t:"",newState:C.APPROVED})}function x(t){var A;return y({submissionId:(A=a==null?void 0:a.id)!=null?A:"",newState:C.REJECTED,rejectedReason:t})}return r("div",{className:"SubmissionPage",children:[e(G,{show:j,onCancel:()=>{u(!1)},onConfirm:async()=>{try{await q()}catch(t){m(t)}u(!1),g()}}),r("div",{className:"SubmissionSummary",children:[e(i,{variant:"dataFieldKey",children:"Status"}),e(i,{variant:"headline3",children:a?a.state:e(d,{width:100})}),e("br",{}),a?a.state==="SUBMITTED"&&r("div",{className:"bootstrap-4-backport ButtonContainer",children:[e(D,{onClick:()=>{u(!0)},variant:"success",children:"Approve"}),e(D,{onClick:()=>{l(t=>{x(t)})},variant:"danger",children:"Reject"})]}):e(d,{width:200}),e(i,{variant:"dataFieldKey",children:"Access Requirement Name"}),e(i,{variant:"smallText1",children:(b=s==null?void 0:s.name)!=null?b:e(d,{width:100})}),e("br",{}),e(i,{variant:"dataFieldKey",children:"Assigned Reviewer"}),e(i,{variant:"smallText1",children:h!==void 0?h!==null?h.resourceAccess.map(t=>e(T,{principalId:t.principalId},t.principalId)):e(T,{principalId:L}):e(d,{width:100})}),e("br",{}),e(i,{variant:"dataFieldKey",children:"Conditions"}),s?e(i,{variant:"smallText1",children:r("ul",{children:[r("li",{children:["Expiration period:"," ",p.duration(s.expirationPeriod,"milliseconds").asDays()," ","day(s)",s.expirationPeriod===0&&" (no expiration)"]}),s.isCertifiedUserRequired&&e("li",{children:"User must be Certified"}),s.isValidatedProfileRequired&&e("li",{children:"User Profile must be Validated"}),s.isDUCRequired&&e("li",{children:"DUC is required"}),s.isIDURequired&&e("li",{children:"IDU is required"}),s.isIDUPublic&&e("li",{children:"IDU will be made public"}),s.isIRBApprovalRequired&&e("li",{children:"IRB Approval is required"}),s.areOtherAttachmentsRequired&&e("li",{children:"Other attachments are required"})]})}):e(d,{width:100}),e("br",{}),r("div",{className:"SubmissionSummaryGrid",children:[e(i,{variant:"dataFieldKey",children:"Submitted By"}),e(i,{variant:"smallText1",children:a?e(v,{size:"SMALL USER CARD",ownerId:a.submittedBy}):e(d,{width:100})}),e(i,{variant:"dataFieldKey",children:"Submitted On"}),e(i,{variant:"smallText1",children:a?w(p(a.submittedOn)):e(d,{width:100})}),e(i,{variant:"dataFieldKey",children:"Modified By"}),e(i,{variant:"smallText1",children:a?e(v,{size:"SMALL USER CARD",ownerId:a.modifiedBy}):e(d,{width:100})}),e(i,{variant:"dataFieldKey",children:"Modified On"}),e(i,{variant:"smallText1",children:a?w(p(a.modifiedOn)):e(d,{width:100})}),r(i,{className:"Key",variant:"dataFieldKey",children:["Data Requesters",`${a?` (${a.accessorChanges.length})`:""}`]}),a?a.accessorChanges.map(t=>r(I.Fragment,{children:[e(i,{className:"Key DataAccessor",variant:"smallText1",children:e("span",{style:{whiteSpace:"nowrap"},children:e(v,{size:"SMALL USER CARD",ownerId:t.userId},t.userId)})}),e(i,{className:"Value DataAccessor",variant:"smallText1",children:V(W(t.type.substring(0,t.type.indexOf("_"))))})]},t.userId)):e(d,{width:100}),e(i,{className:"Key",variant:"dataFieldKey",children:"Institution"}),e(i,{className:"Value",variant:"smallText1",children:a?a.researchProjectSnapshot.institution:e(d,{width:100})}),e(i,{className:"Key",variant:"dataFieldKey",children:"Project Lead"}),e(i,{className:"Value",variant:"smallText1",children:a?a.researchProjectSnapshot.projectLead:e(d,{width:100})})]})]}),r("div",{className:"SubmissionRightPane",children:[e(P,{children:a?e(z,{accessRequirementId:a.accessRequirementId}):e(c,{})}),r("div",{children:[(a==null?void 0:a.rejectedReason)&&r(c,{children:[e(i,{variant:"headline1",children:"Reason for rejection given by reviewer"}),e("hr",{}),e(i,{variant:"body1",style:{whiteSpace:"pre-line"},children:a.rejectedReason})]}),e(i,{variant:"headline1",children:"Contents of the Access Request"}),e("hr",{}),((R=a==null?void 0:a.researchProjectSnapshot)==null?void 0:R.intendedDataUseStatement)&&r(c,{children:[e(i,{variant:"headline2",children:"Intended Data Use Statement"}),e(i,{variant:"body1",style:{whiteSpace:"pre-line"},children:a.researchProjectSnapshot.intendedDataUseStatement})]}),e(i,{variant:"headline2",children:"Documents"}),(a==null?void 0:a.ducFileHandleId)&&r(c,{children:[e(i,{variant:"smallText2",children:"Data Use Certificate (DUC)"}),e(f,{submissionId:a.id,fileHandleId:a.ducFileHandleId})]}),(a==null?void 0:a.irbFileHandleId)&&r(c,{children:[e(i,{variant:"smallText2",children:"IRB Approval Letter"}),e(f,{submissionId:a.id,fileHandleId:a.irbFileHandleId})]}),(a==null?void 0:a.attachments)&&r(c,{children:[e(i,{variant:"smallText2",children:"Other Attachments"}),a.attachments.map(t=>r(I.Fragment,{children:[e(f,{submissionId:a.id,fileHandleId:t}),e("br",{})]},t))]})]})]})]})}try{S.displayName="SubmissionPage",S.__docgenInfo={description:"Page for a Data Access Submission that a designated reviewer can view, and choose to approve or reject.",displayName:"SubmissionPage",props:{submissionId:{defaultValue:null,description:"The ID of the submission to view",name:"submissionId",required:!0,type:{name:"string | number"}},onRejectClicked:{defaultValue:null,description:'Invoked when a reviewer clicks "Reject". Provides a parameter for an external component to provide a reason for rejection, which will reject the submission when invoked.',name:"onRejectClicked",required:!0,type:{name:"(onReject: (rejectedReason: string) => void) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/dataaccess/SubmissionPage.tsx#SubmissionPage"]={docgenInfo:S.__docgenInfo,name:"SubmissionPage",path:"src/lib/containers/dataaccess/SubmissionPage.tsx#SubmissionPage"})}catch{}export{S};
