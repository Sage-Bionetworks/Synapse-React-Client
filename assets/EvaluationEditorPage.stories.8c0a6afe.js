import{r as s,j as t,a as d,F as J,R as ce}from"./jsx-runtime.416d8946.js";import{h as ne,ag as _e,cN as xe,a2 as E,E as ae,cO as Ce,cP as we,ch as Z,cQ as Te,cR as Oe,cS as Ie,cT as Ne}from"./index.68699958.js";import{a as Ae,C as se}from"./CreatedOnByUserDiv.d9a9877a.js";import{W as me}from"./WarningModal.5a5ec7e8.js";import{I as oe}from"./IconSvg.e25d1511.js";import{R as g}from"./Row.bd730d45.js";import{C as f,b as X}from"./isArray.48d04961.js";import{A as ie}from"./Alert.a75301f2.js";import{B as x}from"./Button.34feb441.js";import{D as S}from"./Dropdown.37234235.js";import{u as pe,C as le}from"./CalendarWithIconFormGroup.7492589a.js";import{h as _}from"./moment.a565bb48.js";import{g as De}from"./iframe.51e9009e.js";import"./index.9d682600.js";import"./withStyles.c595751b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.95ef1484.js";import"./index.57d09176.js";import"./UserCard.3e52a486.js";import"./IconCopy.30c66d8a.js";import"./SkeletonTable.83d9d8ad.js";import"./times.e2ae8ec1.js";import"./toInteger.e9d9a3f9.js";import"./isSymbol.110be719.js";import"./Skeleton.102fc0c3.js";import"./Tooltip.032eb6cc.js";import"./createSvgIcon.55245163.js";import"./slicedToArray.e72f11da.js";import"./useTheme.512d0ce3.js";import"./Transition.b4776308.js";import"./makeStyles.c2ff9465.js";import"./ToastMessage.644c1427.js";import"./FullWidthAlert.a1bdb9b5.js";import"./Typography.5433f83a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.89dba59c.js";import"./Overlay.651ab348.js";import"./index.35ce73ec.js";import"./useWaitForDOMRef.b3b34f09.js";import"./usePopperMarginModifiers.71f755a4.js";import"./Modal.ed9c7214.js";import"./useWillUnmount.996d585d.js";import"./InfoOutlined.a31d8d84.js";import"./isRequiredForA11y.20ed4857.js";const Y=({evaluationId:e,entityId:n,onDeleteSuccess:o,onSaveSuccess:a})=>{if(e&&n)throw new Error("please use either evaluationId or entityId but not both");const{accessToken:i}=ne(),[r,l]=s.exports.useState(),[u,v]=s.exports.useState(!1);s.exports.useEffect(()=>{r&&v(!1)},[r]);const[p,L]=s.exports.useState(""),[D,w]=s.exports.useState(""),[k,T]=s.exports.useState(""),[O,C]=s.exports.useState(""),[m,B]=s.exports.useState({contentSource:n});s.exports.useEffect(()=>{var c,I,y,h;L((c=m.name)!=null?c:""),w((I=m.description)!=null?I:""),T((y=m.submissionInstructionsMessage)!=null?y:""),C((h=m.submissionReceiptMessage)!=null?h:"")},[m]),s.exports.useEffect(()=>{e&&(l(void 0),_e(e,i).then(c=>{B(c)}).catch(c=>l(c)))},[e,i]);const V=()=>{l(void 0),v(!1);const c={...m,name:p,description:D,submissionInstructionsMessage:k,submissionReceiptMessage:O};(c.id?Ce(c,i):we(c,i)).then(y=>{B(y),v(!0),a&&a(y.id)}).catch(y=>l(y))},$=m!=null&&m.id?()=>{l(void 0),xe(m.id,i).then(o).catch(c=>l(c))}:void 0;return t("div",{className:"bootstrap-4-backport",children:d("div",{className:"evaluation-editor",children:[d(g,{children:[t(f,{children:d("h4",{children:[m.id?"Edit":"Create"," Evaluation Queue"]})}),t(f,{children:t(ke,{onClick:V,onDelete:$})})]}),d(E,{children:[d(E.Group,{children:[t(E.Label,{htmlFor:"evaluation-name",children:"Name"}),t(E.Control,{id:"evaluation-name",type:"text",value:p,onChange:c=>L(c.target.value)})]}),d(E.Group,{children:[t(E.Label,{htmlFor:"evaluation-description",children:"Description"}),t(E.Control,{id:"evaluation-description",as:"textarea",value:D,rows:2,onChange:c=>w(c.target.value)})]}),d(E.Group,{children:[t(E.Label,{htmlFor:"evaluation-submissioninstructions",children:"Submission Instructions"}),t(E.Control,{as:"textarea",id:"evaluation-submissioninstructions",value:k,rows:2,onChange:c=>T(c.target.value)})]}),d(E.Group,{children:[t(E.Label,{htmlFor:"evaluation-receiptmessage",children:"Submission Receipt Message"}),t(E.Control,{id:"evaluation-receiptmessage",type:"text",value:O,onChange:c=>C(c.target.value)})]}),(m==null?void 0:m.createdOn)&&t(Ae,{userId:m.ownerId,date:new Date(m.createdOn)}),r&&t(ae,{error:r}),u&&t(ie,{className:"save-success-alert",dismissible:!0,variant:"success",transition:!1,onClose:()=>v(!1),children:"Successfully saved."}),t("div",{className:"d-flex justify-content-end",children:t(x,{className:"save-button",onClick:V,children:"Save"})})]})]})})},ke=({onClick:e,onDelete:n})=>{const[o,a]=s.exports.useState(!1);return d(J,{children:[n&&t(me,{title:"Delete Evaluation Queue",modalBody:"Are you sure you want to delete this Evaluation Queue?",show:o,confirmButtonText:"Delete",onConfirm:()=>{n(),a(!1)},onConfirmCallbackArgs:[],onCancel:()=>{a(!1)},confirmButtonVariant:"danger"}),d(S,{className:"float-right",children:[t(S.Toggle,{variant:"link",className:"dropdown-no-caret",children:t(oe,{options:{icon:"verticalEllipsis"}})}),d(S.Menu,{alignRight:!0,children:[t(S.Item,{role:"menuitem",onClick:e,children:"Save"}),n&&d(J,{children:[t(S.Divider,{}),t(S.Item,{role:"menuitem",onClick:()=>a(!0),children:"Delete"})]})]})]})]})};try{Y.displayName="EvaluationEditor",Y.__docgenInfo={description:"Edits basic properties of an Evaluation",displayName:"EvaluationEditor",props:{evaluationId:{defaultValue:null,description:"Use if UPDATING an existing Evaluation. Id of the evaluation to edit",name:"evaluationId",required:!1,type:{name:"string"}},entityId:{defaultValue:null,description:"Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation",name:"entityId",required:!1,type:{name:"string"}},onDeleteSuccess:{defaultValue:null,description:"Callback after successful deletion of the Evaluation",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}},onSaveSuccess:{defaultValue:null,description:"Callback after successful save of the Evaluation",name:"onSaveSuccess",required:!1,type:{name:"((evaluationId: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationEditor.tsx#EvaluationEditor"]={docgenInfo:Y.__docgenInfo,name:"EvaluationEditor",path:"src/lib/containers/evaluation_queues/EvaluationEditor.tsx#EvaluationEditor"})}catch{}const Be=e=>s.exports.createElement("svg",{width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},s.exports.createElement("rect",{width:26,height:26}),s.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.1996 11.8004V7H11.7996V11.8004H7V14.2004H11.7996V19H14.1996V14.2004H19V11.8004H14.1996Z",fill:"white"})),Ve=e=>s.exports.createElement("svg",{width:27,height:26,viewBox:"0 0 27 26",xmlns:"http://www.w3.org/2000/svg",...e},s.exports.createElement("path",{d:"M18.7729 8.10786L17.6651 7L13.2729 11.3921L8.88081 7L7.77295 8.10786L12.1651 12.5L7.77295 16.8921L8.88081 18L13.2729 13.6079L17.6651 18L18.7729 16.8921L14.3808 12.5L18.7729 8.10786Z",fill:"inherit"})),ve={DAILY:"Daily Limit",WEEKLY:"Weekly Limit",MONTHLY:"Monthly Limit"},F=({limitInput:e,allSelectedTypes:n,onChange:o})=>d(ce.Fragment,{children:[d(Z,{className:"limit-type",children:[t("label",{children:"Limit Type"}),t(X,{as:"select",custom:!0,value:e.type,onChange:a=>{o({type:a.target.value,maxSubmissionString:e.maxSubmissionString})},children:Object.entries(ve).map(([a,i])=>t("option",{value:a,disabled:n.has(a)&&a!==e.type,children:i},a))})]}),d(Z,{className:"limit-input",children:[t("label",{children:"Maximum Submissions"}),t(X,{type:"text",pattern:"[0-9]*",value:e.maxSubmissionString,onChange:a=>{o({type:e.type,maxSubmissionString:a.target.value})}})]})]});try{F.displayName="EvaluationRoundLimitOptions",F.__docgenInfo={description:"",displayName:"EvaluationRoundLimitOptions",props:{limitInput:{defaultValue:null,description:"",name:"limitInput",required:!0,type:{name:"EvaluationRoundLimitInput"}},allSelectedTypes:{defaultValue:null,description:"",name:"allSelectedTypes",required:!0,type:{name:"Set<EvaluationRoundLimitType>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(limitInput: EvaluationRoundLimitInput) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptions.tsx#EvaluationRoundLimitOptions"]={docgenInfo:F.__docgenInfo,name:"EvaluationRoundLimitOptions",path:"src/lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptions.tsx#EvaluationRoundLimitOptions"})}catch{}const he=Object.keys(ve),qe=e=>he.find(n=>!e.has(n)),K=({limitInputs:e,handleChange:n,handleDeleteLimit:o,onAddNewLimit:a})=>{const i=new Set(e.map(l=>l.type)),r=s.exports.useCallback(()=>{a({type:qe(i),maxSubmissionString:""})},[a,i]);return s.exports.useEffect(()=>{e.length===0&&r()},[e,r]),t("div",{"data-testid":"EvaluationRoundLimitOptionsList",className:"advanced-limits-grid",children:e.map((l,u)=>d(ce.Fragment,{children:[t(F,{limitInput:l,allSelectedTypes:i,onChange:n(u)}),t(x,{variant:"","aria-label":"Remove",className:"remove-button",onClick:o(u),children:t(Ve,{className:"SRC-icon-fill"})}),u===e.length-1&&e.length<he.length&&t(x,{variant:"","aria-label":"Add",onClick:r,className:"add-button",children:t(Be,{className:"SRC-icon-fill"})})]},l.type))})};try{K.displayName="EvaluationRoundLimitOptionsList",K.__docgenInfo={description:"",displayName:"EvaluationRoundLimitOptionsList",props:{limitInputs:{defaultValue:null,description:"",name:"limitInputs",required:!0,type:{name:"EvaluationRoundLimitInput[]"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!0,type:{name:"(index: number) => (limitInput: EvaluationRoundLimitInput) => void"}},handleDeleteLimit:{defaultValue:null,description:"",name:"handleDeleteLimit",required:!0,type:{name:"(index: number) => () => void"}},onAddNewLimit:{defaultValue:null,description:"",name:"onAddNewLimit",required:!0,type:{name:"(limit: EvaluationRoundLimitInput) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptionsList.tsx#EvaluationRoundLimitOptionsList"]={docgenInfo:K.__docgenInfo,name:"EvaluationRoundLimitOptionsList",path:"src/lib/containers/evaluation_queues/round_limits/EvaluationRoundLimitOptionsList.tsx#EvaluationRoundLimitOptionsList"})}catch{}var Ee={exports:{}},fe={exports:{}},U=1;function Me(){return U=(U*9301+49297)%233280,U/233280}function Pe(e){U=e}var Ye={nextValue:Me,seed:Pe},z=Ye,R="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",b,de,N;function ee(){N=!1}function Se(e){if(!e){b!==R&&(b=R,ee());return}if(e!==b){if(e.length!==R.length)throw new Error("Custom alphabet for shortid must be "+R.length+" unique characters. You submitted "+e.length+" characters: "+e);var n=e.split("").filter(function(o,a,i){return a!==i.lastIndexOf(o)});if(n.length)throw new Error("Custom alphabet for shortid must be "+R.length+" unique characters. These characters were not unique: "+n.join(", "));b=e,ee()}}function Fe(e){return Se(e),b}function Ke(e){z.seed(e),de!==e&&(ee(),de=e)}function Ue(){b||Se(R);for(var e=b.split(""),n=[],o=z.nextValue(),a;e.length>0;)o=z.nextValue(),a=Math.floor(o*e.length),n.push(e.splice(a,1)[0]);return n.join("")}function ge(){return N||(N=Ue(),N)}function je(e){var n=ge();return n[e]}function Ge(){return b||R}var re={get:Ge,characters:Fe,seed:Ke,lookup:je,shuffled:ge},Q=typeof window=="object"&&(window.crypto||window.msCrypto),te;!Q||!Q.getRandomValues?te=function(e){for(var n=[],o=0;o<e;o++)n.push(Math.floor(Math.random()*256));return n}:te=function(e){return Q.getRandomValues(new Uint8Array(e))};var We=te,$e=function(e,n,o){for(var a=(2<<Math.log(n.length-1)/Math.LN2)-1,i=-~(1.6*a*o/n.length),r="";;)for(var l=e(i),u=i;u--;)if(r+=n[l[u]&a]||"",r.length===+o)return r},He=re,Qe=We,Je=$e;function Ze(e){for(var n=0,o,a="";!o;)a=a+Je(Qe,He.get(),1),o=e<Math.pow(16,n+1),n++;return a}var Xe=Ze,M=Xe,ze=1567752802062,et=7,P,ue;function tt(e){var n="",o=Math.floor((Date.now()-ze)*.001);return o===ue?P++:(P=0,ue=o),n=n+M(et),n=n+M(e),P>0&&(n=n+M(P)),n=n+M(o),n}var nt=tt,at=re;function ot(e){if(!e||typeof e!="string"||e.length<6)return!1;var n=new RegExp("[^"+at.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!n.test(e)}var it=ot;(function(e){var n=re,o=nt,a=it,i=0;function r(p){return n.seed(p),e.exports}function l(p){return i=p,e.exports}function u(p){return p!==void 0&&n.characters(p),n.shuffled()}function v(){return o(i)}e.exports=v,e.exports.generate=v,e.exports.seed=r,e.exports.worker=l,e.exports.characters=u,e.exports.isValid=a})(fe);(function(e){e.exports=fe.exports})(Ee);const ye=De(Ee.exports),Le=(e,n)=>({reactListKey:n!=null?n:ye.generate(),evaluationId:e.evaluationId,id:e.id,etag:e.etag,roundStart:e.roundStart,roundEnd:e.roundEnd,totalSubmissionLimit:rt(e.limits),otherLimits:st(e.limits)}),rt=e=>(e||[]).filter(n=>n.limitType==="TOTAL").reduce((n,o)=>o.maximumSubmissions.toString(),""),st=e=>(e||[]).filter(n=>n.limitType!=="TOTAL").reduce((n,o)=>(n.push({type:o.limitType,maxSubmissionString:o.maximumSubmissions.toString()}),n),[]),j=({onSave:e,onDelete:n})=>{const[o,a]=s.exports.useState(!1);return d(J,{children:[t(me,{title:"Delete Evaluation Round",modalBody:"Are you sure you want to delete this Evaluation Round?",show:o,confirmButtonText:"Delete",onConfirm:()=>{n(),a(!1)},onConfirmCallbackArgs:[],onCancel:()=>{a(!1)},confirmButtonVariant:"danger"}),d(S,{className:"float-right",children:[t(S.Toggle,{"aria-label":"Round Options",variant:"link",className:"dropdown-no-caret evaluation-round-editor-dropdown",children:t(oe,{options:{icon:"verticalEllipsis"}})}),d(S.Menu,{alignRight:!0,children:[t(S.Item,{onClick:e,children:"Save"}),t(S.Divider,{}),t(S.Item,{onClick:()=>a(!0),children:"Delete"})]})]})]})};try{j.displayName="EvaluationRoundEditorDropdown",j.__docgenInfo={description:"",displayName:"EvaluationRoundEditorDropdown",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationRoundEditorDropdown.tsx#EvaluationRoundEditorDropdown"]={docgenInfo:j.__docgenInfo,name:"EvaluationRoundEditorDropdown",path:"src/lib/containers/evaluation_queues/EvaluationRoundEditorDropdown.tsx#EvaluationRoundEditorDropdown"})}catch{}const lt=e=>{const n=e.startOf("day");return o=>o.isSameOrAfter(n)},dt=(e,n)=>{let o,a,i;const r=_();return r.isSameOrAfter(e)?r.isBefore(n)?(o="status-in-progress",a={icon:"sync"},i="IN PROGRESS"):(o="status-completed",a={icon:"clipboardCheck"},i="COMPLETED"):(o="status-not-yet-started",a=void 0,i="NOT YET STARTED"),t("div",{className:o,children:d("div",{className:"status",children:[a&&t(oe,{options:a}),t("span",{children:i})]})})},ut=(e,n,o,a,i)=>{const r=[];if(a){const l=Number(a);if(Number.isNaN(l))throw TypeError("Total Submission is not an integer");r.push({limitType:"TOTAL",maximumSubmissions:l})}return i.forEach(l=>{if(l.maxSubmissionString){const u=Number(l.maxSubmissionString);if(Number.isNaN(u))throw TypeError(l.type+" Limit is not an integer");r.push({limitType:l.type,maximumSubmissions:u})}}),{id:e.id,etag:e.etag,evaluationId:e.evaluationId,roundStart:_.utc(n).toJSON(),roundEnd:_.utc(o).toJSON(),limits:r}},G=({evaluationRoundInput:e,onSave:n,onDelete:o})=>{const{accessToken:a}=ne(),[i,r]=s.exports.useState(),[l,u]=s.exports.useState(!1);s.exports.useEffect(()=>{i&&u(!1)},[i]);const[v,p]=s.exports.useState(_(e.roundStart)),[L,D]=s.exports.useState(_(e.roundEnd)),[w,k]=s.exports.useState(e.totalSubmissionLimit),[T,O]=s.exports.useState(!1),{list:C,handleListRemove:m,handleListChange:B,appendToList:V}=pe(e.otherLimits),$=h=>{const q=m(h);return()=>{q(),C.length===1&&O(!1)}},c=()=>{u(!1);let h;try{h=ut(e,v,L,w,C)}catch(q){r(q)}h&&(h.id?Te(h,a):Oe(h,a)).then(H=>{const Re=Le(H,e.reactListKey);r(void 0),u(!0),n(Re)}).catch(H=>r(H))},I=()=>{e.id?Ie(e.evaluationId,e.id,a).then(()=>o()).catch(h=>r(h)):o()},y=lt(_());return t("div",{className:"evaluation-round-editor",children:t(se,{children:t(se.Body,{children:d(E,{role:"form",children:[d(g,{children:[t(f,{children:d("h5",{children:["ROUND STATUS",e.id&&" ("+e.id+")"]})}),t(f,{children:t(j,{onDelete:I,onSave:c})})]}),t(g,{className:"mb-3",children:t(f,{children:t("div",{className:"round-status",children:dt(e.roundStart,e.roundEnd)})})}),t(g,{children:t(f,{children:t("h5",{children:"DURATION"})})}),d(g,{children:[t(f,{children:t(le,{value:v,setterCallback:p,label:"Round Start",isValidDate:y,disabled:_().isSameOrAfter(e.roundStart)})}),t(f,{children:t(le,{value:L,label:"Round End",setterCallback:D,isValidDate:y})})]}),t(g,{children:t(f,{children:t("h5",{children:"SUBMISSION LIMITS"})})}),t(g,{children:t(f,{children:d(Z,{children:[t("label",{children:"Total Submissions / Round"}),t(X,{value:w,type:"text",pattern:"[0-9]*",onChange:h=>k(h.target.value),autoComplete:"new-password"})]})})}),t(g,{className:"mb-3",children:t(f,{children:t(x,{variant:"link",className:"advanced-limits-link font-weight-bold",onClick:()=>O(!T),children:"Advanced Limits"})})}),T&&t(K,{limitInputs:C,handleChange:B,handleDeleteLimit:$,onAddNewLimit:V}),i&&t(g,{className:"my-3",children:t(f,{children:t(ae,{error:i})})}),l&&t(g,{className:"my-3",children:t(f,{children:t(ie,{className:"save-success-alert",dismissible:!0,variant:"success",transition:!1,onClose:()=>u(!1),children:"Successfully saved."})})}),t(g,{className:"mt-3",children:t(f,{children:t(x,{className:"save-button float-right border-0",onClick:c,children:"Save"})})})]})})})})};try{G.displayName="EvaluationRoundEditor",G.__docgenInfo={description:"",displayName:"EvaluationRoundEditor",props:{evaluationRoundInput:{defaultValue:null,description:"",name:"evaluationRoundInput",required:!0,type:{name:"EvaluationRoundInput"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(evaluationRound: EvaluationRoundInput) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationRoundEditor.tsx#EvaluationRoundEditor"]={docgenInfo:G.__docgenInfo,name:"EvaluationRoundEditor",path:"src/lib/containers/evaluation_queues/EvaluationRoundEditor.tsx#EvaluationRoundEditor"})}catch{}const ct=(e,n,o,a)=>{const i=[],r=l=>{Ne(e,{nextPageToken:l},n).then(u=>{const v=u.page.map(p=>Le(p));i.push(...v),a(void 0),u.nextPageToken?r(u.nextPageToken):o(i)}).catch(u=>{a(u)})};r(void 0)},W=({evaluationId:e})=>{const{accessToken:n}=ne(),[o,a]=s.exports.useState(),{list:i,appendToList:r,handleListChange:l,handleListRemove:u,setList:v}=pe([]);return s.exports.useEffect(()=>{ct(e,n,v,a)},[n,e]),o?t(ae,{error:o}):d("div",{className:"evaluation-round-editor-list bootstrap-4-backport",children:[t("div",{className:"evaluation-rounds",children:i.map((p,L)=>t(G,{evaluationRoundInput:p,onSave:l(L),onDelete:u(L)},p.reactListKey))}),t("div",{children:t(x,{className:"add-round-button",variant:"primary",onClick:()=>{r({reactListKey:ye(),evaluationId:e,roundStart:"",roundEnd:"",totalSubmissionLimit:"",otherLimits:[]})},children:"Add Round"})})]})};try{W.displayName="EvaluationRoundEditorList",W.__docgenInfo={description:"Edits EvaluationsRounds for an Evaluation.",displayName:"EvaluationRoundEditorList",props:{evaluationId:{defaultValue:null,description:"id of the Evaluation containing EvaluationRounds to edit",name:"evaluationId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationRoundEditorList.tsx#EvaluationRoundEditorList"]={docgenInfo:W.__docgenInfo,name:"EvaluationRoundEditorList",path:"src/lib/containers/evaluation_queues/EvaluationRoundEditorList.tsx#EvaluationRoundEditorList"})}catch{}const A=({evaluationId:e,entityId:n,onDeleteSuccess:o})=>{const[a,i]=s.exports.useState(e);return d("div",{className:"bootstrap-4-backport",children:[t(Y,{evaluationId:a,entityId:a?void 0:n,onDeleteSuccess:o,onSaveSuccess:i}),t("div",{className:"mt-4",children:a?t(W,{evaluationId:a}):t(mt,{})})]})},mt=()=>{const[e,n]=s.exports.useState(!1);return t("div",{"data-testid":"FakeEvaluationRoundEditorList",children:e?t(ie,{dismissible:!1,show:!0,variant:"info",transition:!1,children:"Evaluation Rounds can be edited once the Evaluation has been created."}):t(x,{className:"add-round-button",variant:"primary",onClick:()=>{n(!0)},children:"Add Round"})})};try{A.displayName="EvaluationEditorPage",A.__docgenInfo={description:"Combined editor that allows editing an Evaluation's data and also it's associated rounds (once the Evaluation exists on Synapse)",displayName:"EvaluationEditorPage",props:{evaluationId:{defaultValue:null,description:"Use if UPDATING an existing Evaluation. Id of the evaluation to edit",name:"evaluationId",required:!1,type:{name:"string"}},entityId:{defaultValue:null,description:"Use if CREATING a new Evaluation. Id of the Entity that will be associated with the Evaluation",name:"entityId",required:!1,type:{name:"string"}},onDeleteSuccess:{defaultValue:null,description:"Callback after successful deletion of the Evaluation",name:"onDeleteSuccess",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/evaluation_queues/EvaluationEditorPage.tsx#EvaluationEditorPage"]={docgenInfo:A.__docgenInfo,name:"EvaluationEditorPage",path:"src/lib/containers/evaluation_queues/EvaluationEditorPage.tsx#EvaluationEditorPage"})}catch{}const dn={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{entity:{startLoc:{col:62,line:12},endLoc:{col:1,line:14},startBody:{col:62,line:12},endBody:{col:1,line:14}},evaluation:{startLoc:{col:62,line:12},endLoc:{col:1,line:14},startBody:{col:62,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/Challenge/EvaluationEditorPage",component:A},be=e=>t(A,{...e}),pt=be.bind({});pt.args={entityId:"syn5585645"};const vt=be.bind({});vt.args={evaluationId:"9614712"};const un=["Entity","Evaluation"];export{pt as Entity,vt as Evaluation,un as __namedExportsOrder,dn as default};
