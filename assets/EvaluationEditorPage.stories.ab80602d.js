import{r as s,j as t,a as d,F as J,R as ce}from"./jsx-runtime.76b41102.js";import{a4 as ne,aF as xe,db as Ce,aT as f,az as oe,dc as we,dd as Te,cm as Z,de as Oe,df as Ie,dg as Ne,dh as Ae}from"./index.0297a0cb.js";import{a as De,C as se}from"./CreatedOnByUserDiv.7a1b5aa1.js";import{W as me}from"./WarningModal.bcdb4e70.js";import{I as ae}from"./IconSvg.175e5b3e.js";import{R as g}from"./Row.f2d5d5f4.js";import{C as E,b as z}from"./isArray.8642b77d.js";import{A as ie}from"./FullWidthAlert.fa5db810.js";import{B as x}from"./Button.83b95483.js";import{D as S}from"./Dropdown.f708dbe5.js";import{u as pe,C as le}from"./CalendarWithIconFormGroup.88a2109f.js";import{d as L}from"./dayjs.min.a3177bfa.js";import{g as ke,c as Be}from"./iframe.4ac8fc26.js";import{u as Ve}from"./utc.57c73dc3.js";import"./index.bc4e6645.js";import"./SynapseConstants.71946a35.js";import"./styled.0442482c.js";import"./Tooltip.40200d96.js";import"./SvgIcon.7ad855dc.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./Fade.e47b19bb.js";import"./getEndpoint.f1f195f5.js";import"./createWithBsPrefix.ec0f4954.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./Link.dc8bd0fa.js";import"./Typography.6181771e.js";import"./Button.09259ba0.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./UserCard.29055287.js";import"./IconCopy.ae28a5e2.js";import"./SkeletonTable.4585cee0.js";import"./times.5539d7c0.js";import"./toInteger.e94666c7.js";import"./isSymbol.945d9b60.js";import"./Skeleton.439e65be.js";import"./ToastMessage.a7db9b8d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.db618dfa.js";import"./toString.30e0c932.js";import"./Overlay.e607fdf1.js";import"./contains.015a7c6d.js";import"./usePopperMarginModifiers.f84a16be.js";import"./useWaitForDOMRef.ad8cb22c.js";import"./Modal.907a4a1e.js";import"./inheritsLoose.9c2697f4.js";import"./usePrevious.4c8906d5.js";import"./hook.9a8069f4.js";import"./isRequiredForA11y.20ed4857.js";import"./localizedFormat.7028769f.js";import"./Paper.8f149634.js";import"./DialogContent.572f4640.js";import"./Modal.3a55c5b5.js";import"./FormLabel.ac782187.js";import"./isMuiElement.c4f2fced.js";import"./index.f2a06ad4.js";import"./debounce.5d31b54e.js";import"./MenuList.bd0e19ec.js";import"./List.ea8ad988.js";const Y=({evaluationId:e,entityId:n,onDeleteSuccess:a,onSaveSuccess:o})=>{if(e&&n)throw new Error("please use either evaluationId or entityId but not both");const{accessToken:i}=ne(),[r,l]=s.exports.useState(),[u,v]=s.exports.useState(!1);s.exports.useEffect(()=>{r&&v(!1)},[r]);const[p,b]=s.exports.useState(""),[D,w]=s.exports.useState(""),[k,T]=s.exports.useState(""),[O,C]=s.exports.useState(""),[m,B]=s.exports.useState({contentSource:n});s.exports.useEffect(()=>{var c,I,y,h;b((c=m.name)!=null?c:""),w((I=m.description)!=null?I:""),T((y=m.submissionInstructionsMessage)!=null?y:""),C((h=m.submissionReceiptMessage)!=null?h:"")},[m]),s.exports.useEffect(()=>{e&&(l(void 0),xe(e,i).then(c=>{B(c)}).catch(c=>l(c)))},[e,i]);const V=()=>{l(void 0),v(!1);const c={...m,name:p,description:D,submissionInstructionsMessage:k,submissionReceiptMessage:O};(c.id?we(c,i):Te(c,i)).then(y=>{B(y),v(!0),o&&o(y.id)}).catch(y=>l(y))},$=m!=null&&m.id?()=>{l(void 0),Ce(m.id,i).then(a).catch(c=>l(c))}:void 0;return t("div",{className:"bootstrap-4-backport",children:d("div",{className:"evaluation-editor",children:[d(g,{children:[t(E,{children:d("h4",{children:[m.id?"Edit":"Create"," Evaluation Queue"]})}),t(E,{children:t(qe,{onClick:V,onDelete:$})})]}),d(f,{children:[d(f.Group,{children:[t(f.Label,{htmlFor:"evaluation-name",children:"Name"}),t(f.Control,{id:"evaluation-name",type:"text",value:p,onChange:c=>b(c.target.value)})]}),d(f.Group,{children:[t(f.Label,{htmlFor:"evaluation-description",children:"Description"}),t(f.Control,{id:"evaluation-description",as:"textarea",value:D,rows:2,onChange:c=>w(c.target.value)})]}),d(f.Group,{children:[t(f.Label,{htmlFor:"evaluation-submissioninstructions",children:"Submission Instructions"}),t(f.Control,{as:"textarea",id:"evaluation-submissioninstructions",value:k,rows:2,onChange:c=>T(c.target.value)})]}),d(f.Group,{children:[t(f.Label,{htmlFor:"evaluation-receiptmessage",children:"Submission Receipt Message"}),t(f.Control,{id:"evaluation-receiptmessage",type:"text",value:O,onChange:c=>C(c.target.value)})]}),(m==null?void 0:m.createdOn)&&t(De,{userId:m.ownerId,date:new Date(m.createdOn)}),r&&t(oe,{error:r}),u&&t(ie,{className:"save-success-alert",dismissible:!0,variant:"success",transition:!1,onClose:()=>v(!1),children:"Successfully saved."}),t("div",{className:"d-flex justify-content-end",children:t(x,{className:"save-button",onClick:V,children:"Save"})})]})]})})},qe=({onClick:e,onDelete:n})=>{const[a,o]=s.exports.useState(!1);return d(J,{children:[n&&t(me,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete this Evaluation Queue?",show:a,confirmButtonText:"Delete",onConfirm:()=>{n(),o(!1)},onConfirmCallbackArgs:[],onCancel:()=>{o(!1)},confirmButtonVariant:"danger"}),d(S,{className:"float-right",children:[t(S.Toggle,{variant:"link",className:"dropdown-no-caret",children:t(ae,{icon:"verticalEllipsis"})}),d(S.Menu,{alignRight:!0,children:[t(S.Item,{role:"menuitem",onClick:e,children:"Save"}),n&&d(J,{children:[t(S.Divider,{}),t(S.Item,{role:"menuitem",onClick:()=>o(!0),children:"Delete"})]})]})]})]})};try{Y.displayName="EvaluationEditor",Y.__docgenInfo={description:"Edits basic properties of an Evaluation",displayName:"EvaluationEditor",props:{evaluationId:{defaultValue:null,description:"Use if UPDATING an existing Evaluation. Id of the evaluation to edit",name:"evaluationId",required:!1,type:{name:"string"}},entityId:{defaultValue:null,description:"Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation",name:"entityId",required:!1,type:{name:"string"}},onDeleteSuccess:{defaultValue:null,description:"Callback after successful deletion of the Evaluation",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}},onSaveSuccess:{defaultValue:null,description:"Callback after successful save of the Evaluation",name:"onSaveSuccess",required:!1,type:{name:"((evaluationId: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationEditor.tsx#EvaluationEditor"]={docgenInfo:Y.__docgenInfo,name:"EvaluationEditor",path:"src/lib/containers/evaluation_queues/EvaluationEditor.tsx#EvaluationEditor"})}catch{}const Me=e=>s.exports.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.exports.createElement("rect",{width:26,height:26}),s.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.1996 11.8004V7H11.7996V11.8004H7V14.2004H11.7996V19H14.1996V14.2004H19V11.8004H14.1996Z",fill:"white"})),Pe=e=>s.exports.createElement("svg",{width:27,height:26,viewBox:"0 0 27 26",xmlns:"http://www.w3.org/2000/svg",...e},s.exports.createElement("path",{d:"M18.7729 8.10786L17.6651 7L13.2729 11.3921L8.88081 7L7.77295 8.10786L12.1651 12.5L7.77295 16.8921L8.88081 18L13.2729 13.6079L17.6651 18L18.7729 16.8921L14.3808 12.5L18.7729 8.10786Z",fill:"inherit"})),ve={DAILY:"Daily Limit",WEEKLY:"Weekly Limit",MONTHLY:"Monthly Limit"},F=({limitInput:e,allSelectedTypes:n,onChange:a})=>d(ce.Fragment,{children:[d(Z,{className:"limit-type",children:[t("label",{children:"Limit Type"}),t(z,{as:"select",custom:!0,value:e.type,onChange:o=>{a({type:o.target.value,maxSubmissionString:e.maxSubmissionString})},children:Object.entries(ve).map(([o,i])=>t("option",{value:o,disabled:n.has(o)&&o!==e.type,children:i},o))})]}),d(Z,{className:"limit-input",children:[t("label",{children:"Maximum Submissions"}),t(z,{type:"text",pattern:"[0-9]*",value:e.maxSubmissionString,onChange:o=>{a({type:e.type,maxSubmissionString:o.target.value})}})]})]});try{F.displayName="EvaluationRoundLimitOptions",F.__docgenInfo={description:"",displayName:"EvaluationRoundLimitOptions",props:{limitInput:{defaultValue:null,description:"",name:"limitInput",required:!0,type:{name:"EvaluationRoundLimitInput"}},allSelectedTypes:{defaultValue:null,description:"",name:"allSelectedTypes",required:!0,type:{name:"Set<EvaluationRoundLimitType>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(limitInput: EvaluationRoundLimitInput) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptions.tsx#EvaluationRoundLimitOptions"]={docgenInfo:F.__docgenInfo,name:"EvaluationRoundLimitOptions",path:"src/lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptions.tsx#EvaluationRoundLimitOptions"})}catch{}const he=Object.keys(ve),Ye=e=>he.find(n=>!e.has(n)),K=({limitInputs:e,handleChange:n,handleDeleteLimit:a,onAddNewLimit:o})=>{const i=new Set(e.map(l=>l.type)),r=s.exports.useCallback(()=>{o({type:Ye(i),maxSubmissionString:""})},[o,i]);return s.exports.useEffect(()=>{e.length===0&&r()},[e,r]),t("div",{"data-testid":"EvaluationRoundLimitOptionsList",className:"advanced-limits-grid",children:e.map((l,u)=>d(ce.Fragment,{children:[t(F,{limitInput:l,allSelectedTypes:i,onChange:n(u)}),t(x,{variant:"","aria-label":"Remove",className:"remove-button",onClick:a(u),children:t(Pe,{className:"SRC-icon-fill"})}),u===e.length-1&&e.length<he.length&&t(x,{variant:"","aria-label":"Add",onClick:r,className:"add-button",children:t(Me,{className:"SRC-icon-fill"})})]},l.type))})};try{K.displayName="EvaluationRoundLimitOptionsList",K.__docgenInfo={description:"",displayName:"EvaluationRoundLimitOptionsList",props:{limitInputs:{defaultValue:null,description:"",name:"limitInputs",required:!0,type:{name:"EvaluationRoundLimitInput[]"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(index: number) => (limitInput: EvaluationRoundLimitInput) => void"}},handleDeleteLimit:{defaultValue:null,description:"",name:"handleDeleteLimit",required:!0,type:{name:"(index: number) => () => void"}},onAddNewLimit:{defaultValue:null,description:"",name:"onAddNewLimit",required:!0,type:{name:"(limit: EvaluationRoundLimitInput) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptionsList.tsx#EvaluationRoundLimitOptionsList"]={docgenInfo:K.__docgenInfo,name:"EvaluationRoundLimitOptionsList",path:"src/lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptionsList.tsx#EvaluationRoundLimitOptionsList"})}catch{}var fe={exports:{}},Ee={exports:{}},U=1;function Fe(){return U=(U*9301+49297)%233280,U/233280}function Ke(e){U=e}var Ue={nextValue:Fe,seed:Ke},X=Ue,_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",R,de,N;function ee(){N=!1}function Se(e){if(!e){R!==_&&(R=_,ee());return}if(e!==R){if(e.length!==_.length)throw new Error("Custom alphabet for shortid must be "+_.length+" unique characters. You submitted "+e.length+" characters: "+e);var n=e.split("").filter(function(a,o,i){return o!==i.lastIndexOf(a)});if(n.length)throw new Error("Custom alphabet for shortid must be "+_.length+" unique characters. These characters were not unique: "+n.join(", "));R=e,ee()}}function je(e){return Se(e),R}function Ge(e){X.seed(e),de!==e&&(ee(),de=e)}function We(){R||Se(_);for(var e=R.split(""),n=[],a=X.nextValue(),o;e.length>0;)a=X.nextValue(),o=Math.floor(a*e.length),n.push(e.splice(o,1)[0]);return n.join("")}function ge(){return N||(N=We(),N)}function $e(e){var n=ge();return n[e]}function He(){return R||_}var re={get:He,characters:je,seed:Ge,lookup:$e,shuffled:ge},Q=typeof window=="object"&&(window.crypto||window.msCrypto),te;!Q||!Q.getRandomValues?te=function(e){for(var n=[],a=0;a<e;a++)n.push(Math.floor(Math.random()*256));return n}:te=function(e){return Q.getRandomValues(new Uint8Array(e))};var Qe=te,Je=function(e,n,a){for(var o=(2<<Math.log(n.length-1)/Math.LN2)-1,i=-~(1.6*o*a/n.length),r="";;)for(var l=e(i),u=i;u--;)if(r+=n[l[u]&o]||"",r.length===+a)return r},Ze=re,ze=Qe,Xe=Je;function et(e){for(var n=0,a,o="";!a;)o=o+Xe(ze,Ze.get(),1),a=e<Math.pow(16,n+1),n++;return o}var tt=et,M=tt,nt=1567752802062,ot=7,P,ue;function at(e){var n="",a=Math.floor((Date.now()-nt)*.001);return a===ue?P++:(P=0,ue=a),n=n+M(ot),n=n+M(e),P>0&&(n=n+M(P)),n=n+M(a),n}var it=at,rt=re;function st(e){if(!e||typeof e!="string"||e.length<6)return!1;var n=new RegExp("[^"+rt.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!n.test(e)}var lt=st;(function(e){var n=re,a=it,o=lt,i=0;function r(p){return n.seed(p),e.exports}function l(p){return i=p,e.exports}function u(p){return p!==void 0&&n.characters(p),n.shuffled()}function v(){return a(i)}e.exports=v,e.exports.generate=v,e.exports.seed=r,e.exports.worker=l,e.exports.characters=u,e.exports.isValid=o})(Ee);(function(e){e.exports=Ee.exports})(fe);const ye=ke(fe.exports),Le=(e,n)=>({reactListKey:n!=null?n:ye.generate(),evaluationId:e.evaluationId,id:e.id,etag:e.etag,roundStart:e.roundStart,roundEnd:e.roundEnd,totalSubmissionLimit:dt(e.limits),otherLimits:ut(e.limits)}),dt=e=>(e||[]).filter(n=>n.limitType==="TOTAL").reduce((n,a)=>a.maximumSubmissions.toString(),""),ut=e=>(e||[]).filter(n=>n.limitType!=="TOTAL").reduce((n,a)=>(n.push({type:a.limitType,maxSubmissionString:a.maximumSubmissions.toString()}),n),[]),j=({onSave:e,onDelete:n})=>{const[a,o]=s.exports.useState(!1);return d(J,{children:[t(me,{title:"Delete Evaluation Round",modalBody:"Are you sure you want to delete this Evaluation Round?",show:a,confirmButtonText:"Delete",onConfirm:()=>{n(),o(!1)},onConfirmCallbackArgs:[],onCancel:()=>{o(!1)},confirmButtonVariant:"danger"}),d(S,{className:"float-right",children:[t(S.Toggle,{"aria-label":"Round Options",variant:"link",className:"dropdown-no-caret evaluation-round-editor-dropdown",children:t(ae,{icon:"verticalEllipsis"})}),d(S.Menu,{alignRight:!0,children:[t(S.Item,{onClick:e,children:"Save"}),t(S.Divider,{}),t(S.Item,{onClick:()=>o(!0),children:"Delete"})]})]})]})};try{j.displayName="EvaluationRoundEditorDropdown",j.__docgenInfo={description:"",displayName:"EvaluationRoundEditorDropdown",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationRoundEditorDropdown.tsx#EvaluationRoundEditorDropdown"]={docgenInfo:j.__docgenInfo,name:"EvaluationRoundEditorDropdown",path:"src/lib/containers/evaluation_queues/EvaluationRoundEditorDropdown.tsx#EvaluationRoundEditorDropdown"})}catch{}var be={exports:{}};(function(e,n){(function(a,o){e.exports=o()})(Be,function(){return function(a,o){o.prototype.isSameOrAfter=function(i,r){return this.isSame(i,r)||this.isAfter(i,r)}}})})(be);const ct=be.exports;L.extend(Ve);L.extend(ct);const mt=e=>{const n=e.startOf("day");return a=>a.isSameOrAfter(n)},pt=(e,n)=>{let a,o,i;const r=L();return r.isSameOrAfter(e)?r.isBefore(n)?(a="status-in-progress",o={icon:"sync"},i="IN PROGRESS"):(a="status-completed",o={icon:"clipboardCheck"},i="COMPLETED"):(a="status-not-yet-started",o=void 0,i="NOT YET STARTED"),t("div",{className:a,children:d("div",{className:"status",children:[o&&t(ae,{...o}),t("span",{children:i})]})})},vt=(e,n,a,o,i)=>{const r=[];if(o){const l=Number(o);if(Number.isNaN(l))throw TypeError("Total Submission is not an integer");r.push({limitType:"TOTAL",maximumSubmissions:l})}return i.forEach(l=>{if(l.maxSubmissionString){const u=Number(l.maxSubmissionString);if(Number.isNaN(u))throw TypeError(l.type+" Limit is not an integer");r.push({limitType:l.type,maximumSubmissions:u})}}),{id:e.id,etag:e.etag,evaluationId:e.evaluationId,roundStart:L.utc(n).toJSON(),roundEnd:L.utc(a).toJSON(),limits:r}},G=({evaluationRoundInput:e,onSave:n,onDelete:a})=>{const{accessToken:o}=ne(),[i,r]=s.exports.useState(),[l,u]=s.exports.useState(!1);s.exports.useEffect(()=>{i&&u(!1)},[i]);const[v,p]=s.exports.useState(L(e.roundStart)),[b,D]=s.exports.useState(L(e.roundEnd)),[w,k]=s.exports.useState(e.totalSubmissionLimit),[T,O]=s.exports.useState(!1),{list:C,handleListRemove:m,handleListChange:B,appendToList:V}=pe(e.otherLimits),$=h=>{const q=m(h);return()=>{q(),C.length===1&&O(!1)}},c=()=>{u(!1);let h;try{h=vt(e,v,b,w,C)}catch(q){r(q)}h&&(h.id?Oe(h,o):Ie(h,o)).then(H=>{const _e=Le(H,e.reactListKey);r(void 0),u(!0),n(_e)}).catch(H=>r(H))},I=()=>{e.id?Ne(e.evaluationId,e.id,o).then(()=>a()).catch(h=>r(h)):a()},y=mt(L());return t("div",{className:"evaluation-round-editor",children:t(se,{children:t(se.Body,{children:d(f,{role:"form",children:[d(g,{children:[t(E,{children:d("h5",{children:["ROUND STATUS",e.id&&" ("+e.id+")"]})}),t(E,{children:t(j,{onDelete:I,onSave:c})})]}),t(g,{className:"mb-3",children:t(E,{children:t("div",{className:"round-status",children:pt(e.roundStart,e.roundEnd)})})}),t(g,{children:t(E,{children:t("h5",{children:"DURATION"})})}),d(g,{children:[t(E,{children:t(le,{value:v,setterCallback:p,label:"Round Start",isValidDate:y,disabled:L().isSameOrAfter(e.roundStart)})}),t(E,{children:t(le,{value:b,label:"Round End",setterCallback:D,isValidDate:y})})]}),t(g,{children:t(E,{children:t("h5",{children:"SUBMISSION LIMITS"})})}),t(g,{children:t(E,{children:d(Z,{children:[t("label",{children:"Total Submissions / Round"}),t(z,{value:w,type:"text",pattern:"[0-9]*",onChange:h=>k(h.target.value),autoComplete:"new-password"})]})})}),t(g,{className:"mb-3",children:t(E,{children:t(x,{variant:"link",className:"advanced-limits-link font-weight-bold",onClick:()=>O(!T),children:"Advanced Limits"})})}),T&&t(K,{limitInputs:C,handleChange:B,handleDeleteLimit:$,onAddNewLimit:V}),i&&t(g,{className:"my-3",children:t(E,{children:t(oe,{error:i})})}),l&&t(g,{className:"my-3",children:t(E,{children:t(ie,{className:"save-success-alert",dismissible:!0,variant:"success",transition:!1,onClose:()=>u(!1),children:"Successfully saved."})})}),t(g,{className:"mt-3",children:t(E,{children:t(x,{className:"save-button float-right border-0",onClick:c,children:"Save"})})})]})})})})};try{G.displayName="EvaluationRoundEditor",G.__docgenInfo={description:"",displayName:"EvaluationRoundEditor",props:{evaluationRoundInput:{defaultValue:null,description:"",name:"evaluationRoundInput",required:!0,type:{name:"EvaluationRoundInput"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(evaluationRound: EvaluationRoundInput) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationRoundEditor.tsx#EvaluationRoundEditor"]={docgenInfo:G.__docgenInfo,name:"EvaluationRoundEditor",path:"src/lib/containers/evaluation_queues/EvaluationRoundEditor.tsx#EvaluationRoundEditor"})}catch{}const ht=(e,n,a,o)=>{const i=[],r=l=>{Ae(e,{nextPageToken:l},n).then(u=>{const v=u.page.map(p=>Le(p));i.push(...v),o(void 0),u.nextPageToken?r(u.nextPageToken):a(i)}).catch(u=>{o(u)})};r(void 0)},W=({evaluationId:e})=>{const{accessToken:n}=ne(),[a,o]=s.exports.useState(),{list:i,appendToList:r,handleListChange:l,handleListRemove:u,setList:v}=pe([]);return s.exports.useEffect(()=>{ht(e,n,v,o)},[n,e]),a?t(oe,{error:a}):d("div",{className:"evaluation-round-editor-list bootstrap-4-backport",children:[t("div",{className:"evaluation-rounds",children:i.map((p,b)=>t(G,{evaluationRoundInput:p,onSave:l(b),onDelete:u(b)},p.reactListKey))}),t("div",{children:t(x,{className:"add-round-button",variant:"primary",onClick:()=>{r({reactListKey:ye(),evaluationId:e,roundStart:"",roundEnd:"",totalSubmissionLimit:"",otherLimits:[]})},children:"Add Round"})})]})};try{W.displayName="EvaluationRoundEditorList",W.__docgenInfo={description:"Edits EvaluationsRounds for an Evaluation.",displayName:"EvaluationRoundEditorList",props:{evaluationId:{defaultValue:null,description:"id of the Evaluation containing EvaluationRounds to edit",name:"evaluationId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationRoundEditorList.tsx#EvaluationRoundEditorList"]={docgenInfo:W.__docgenInfo,name:"EvaluationRoundEditorList",path:"src/lib/containers/evaluation_queues/EvaluationRoundEditorList.tsx#EvaluationRoundEditorList"})}catch{}const A=({evaluationId:e,entityId:n,onDeleteSuccess:a})=>{const[o,i]=s.exports.useState(e);return d("div",{className:"bootstrap-4-backport",children:[t(Y,{evaluationId:o,entityId:o?void 0:n,onDeleteSuccess:a,onSaveSuccess:i}),t("div",{className:"mt-4",children:o?t(W,{evaluationId:o}):t(ft,{})})]})},ft=()=>{const[e,n]=s.exports.useState(!1);return t("div",{"data-testid":"FakeEvaluationRoundEditorList",children:e?t(ie,{dismissible:!1,show:!0,variant:"info",transition:!1,children:"Evaluation Rounds can be edited once the Evaluation has been created."}):t(x,{className:"add-round-button",variant:"primary",onClick:()=>{n(!0)},children:"Add Round"})})};try{A.displayName="EvaluationEditorPage",A.__docgenInfo={description:"Combined editor that allows editing an Evaluation's data and also it's associated rounds (once the Evaluation exists on Synapse)",displayName:"EvaluationEditorPage",props:{evaluationId:{defaultValue:null,description:"Use if UPDATING an existing Evaluation. Id of the evaluation to edit",name:"evaluationId",required:!1,type:{name:"string"}},entityId:{defaultValue:null,description:"Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation",name:"entityId",required:!1,type:{name:"string"}},onDeleteSuccess:{defaultValue:null,description:"Callback after successful deletion of the Evaluation",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationEditorPage.tsx#EvaluationEditorPage"]={docgenInfo:A.__docgenInfo,name:"EvaluationEditorPage",path:"src/lib/containers/evaluation_queues/EvaluationEditorPage.tsx#EvaluationEditorPage"})}catch{}const On={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EvaluationEditorPage } from './EvaluationEditorPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/Challenge/EvaluationEditorPage',
  component: EvaluationEditorPage,
} as ComponentMeta<typeof EvaluationEditorPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EvaluationEditorPage> = args => (
  <EvaluationEditorPage {...args} />
)

export const Entity = Template.bind({})
Entity.args = {
  entityId: 'syn5585645',
}

export const Evaluation = Template.bind({})
Evaluation.args = {
  evaluationId: '9614712',
}
`,locationsMap:{entity:{startLoc:{col:62,line:12},endLoc:{col:1,line:14},startBody:{col:62,line:12},endBody:{col:1,line:14}},evaluation:{startLoc:{col:62,line:12},endLoc:{col:1,line:14},startBody:{col:62,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationEditorPage",component:A},Re=e=>t(A,{...e}),Et=Re.bind({});Et.args={entityId:"syn5585645"};const St=Re.bind({});St.args={evaluationId:"9614712"};const In=["Entity","Evaluation"];export{Et as Entity,St as Evaluation,In as __namedExportsOrder,On as default};
