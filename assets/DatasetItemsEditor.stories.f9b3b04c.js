import{F as _e,V as we,A as Re,B as Ne,a as Oe,D as Ae,b as Ve,c as ke,C as $e,M as Me,d as Pe,P as Be,e as Le}from"./EntityFinder.17dc8cdf.js";import{p as m}from"./pluralize.ec8e920c.js";import{S as qe}from"./SkeletonTable.bba1da74.js";import{n as Y,E as O,o as te,f as q,e as Fe}from"./EntityTypeUtils.e0226b68.js";import{dC as xe,o as Ye,dD as Ke,dE as ze}from"./index.0378956d.js";import"./assert.75d17e29.js";import{T as F}from"./Typography.868473dc.js";import{E as He}from"./EntityFinderModal.ddae231f.js";import{I as Z}from"./IconSvg.7fcfdfd8.js";import{B as Ue}from"./LoadingScreen.91642215.js";import{W as je}from"./WarningModal.e66d24b4.js";import{d as R}from"./ToastMessage.30a6258e.js";import{C as Ge}from"./Checkbox.c68b07e0.js";import{a as y,j as i,F as J}from"./jsx-runtime.00d70968.js";import{i as We}from"./isEqual.ca906ee0.js";import{S as Ze}from"./Skeleton.99b24529.js";import{B as C}from"./Button.fda23eee.js";import{A as Je}from"./Alert.b74d1cfd.js";import{u as Q}from"./upperFirst.e7e76dd4.js";import"./toConsumableArray.c4898ee4.js";import"./index.35ce73ec.js";import"./iframe.e59a9506.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./react-sizeme.eae4ed16.js";import"./Arrow.c4d06967.js";import"./sqlFunctions.b49ac766.js";import"./use-deep-compare-effect.esm.357a0ad8.js";import"./useGetEntityChildren.e849c4d8.js";import"./EntityChildren.50133102.js";import"./index.57d09176.js";import"./Select-54ac8379.esm.edd779c2.js";import"./slicedToArray.e72f11da.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./useEntityBundle.1997a30b.js";import"./EntityIcon.18eeb1a5.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./SvgIcon.e37b9412.js";import"./useTheme.aaa309f8.js";import"./Transition.8278edb2.js";import"./makeStyles.45e8b79c.js";import"./SynapseTableConstants.07ecdebd.js";import"./moment.a565bb48.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.dacc6d60.js";import"./SchemaDrivenAnnotationEditor.93a1b97c.js";import"./union.2835501c.js";import"./_copyArray.67f22492.js";import"./ajv.7f6c5a00.js";import"./isEmpty.82283194.js";import"./toString.d84aaeca.js";import"./getEndpoint.bb7ded34.js";import"./lodash.d229c6db.js";import"./CalendarWithIconFormGroup.98d5a12f.js";import"./index.8ed07549.js";import"./uniqueId.eba72690.js";import"./FullWidthAlert.e63d41e9.js";import"./Collapse.675410da.js";import"./groupBy.45c6a9ec.js";import"./_baseMap.f49b5851.js";import"./_baseIsEqual.9da102a8.js";import"./_cacheHas.171654b6.js";import"./_setToArray.a82100c8.js";import"./CustomSelectWidget.b1e9ceda.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./EntityModal.bd133a88.js";import"./HelpPopover.18c0233f.js";import"./MarkdownPopover.e69d853b.js";import"./usePopperMarginModifiers.fba68454.js";import"./MarkdownSynapse.903b32df.js";import"./UserCard.20173003.js";import"./IconCopy.095bf867.js";import"./Overlay.66930c7c.js";import"./factory.88dfc2d4.js";import"./SynapseVideo.557b642e.js";import"./index.3011b51e.js";import"./index.3f29013c.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./ExternalFileHandleInterface.fba29bfd.js";import"./LockTwoTone.59b2348f.js";import"./cloneDeep.e606af64.js";import"./Dropdown.65d7027b.js";import"./isRequiredForA11y.20ed4857.js";import"./Sort.7ca9f85f.js";import"./EntityLink.be24c895.js";import"./useFavorites.b8705916.js";import"./times.3e2e5312.js";import"./toInteger.cf1886d1.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";import"./InfoOutlined.60e019a4.js";const Qe=window.React.useState;function Xe(r){const[a,o]=Qe(new Set(r));function u(...E){const l=new Set(a);for(const V of E)l.add(V);o(l)}function f(E){const l=new Set(a);l.delete(E),o(l)}function A(){o(new Set)}return{set:a,add:u,remove:f,clear:A}}const x=window.React.useEffect,X=window.React.useMemo,D=window.React.useState;function et(r){return Y(r)?[O.FILE]:te(r)?[O.DATASET]:(console.error("Cannot determine selectable types for entity type: "+r.concreteType),[])}function N(r){const a=r?q(Fe(r.concreteType)):"Collection";let o="Item",u="Current Version";r&&Y(r)?(o=q(O.FILE),u="Draft"):r&&te(r)&&(o=q(O.DATASET));const f=r&&Y(r)?`Use the left pane to browse projects and folders. Select ${m(o)} from the right pane to add to this ${a}. ${Q(m(o))} in a ${a} can be added from multiple folders. You can also use Search to find and select ${m(o)}.`:`Use the left pane to browse projects. Select ${m(o)} from the right pane to add to this ${a}. ${Q(m(o))} in a ${a} can be added from multiple projects. You can also use Search to find and select ${m(o)}.`;return{ADD_ITEMS:`Add ${m(o)}`,ADD_ITEMS_TO:`Add ${m(o)} to ${a}`,REMOVE_ITEMS:`Remove ${m(o)}`,NO_ITEMS_IN_THIS_DATASET:`No ${m(o)} in this ${a}`,SAVE_TO_CONTINUE:`Save the ${a} to continue`,CREATE_VERSION_TO_FREEZE:`Create a Version of this ${a} to freeze it in its current state`,ENTITY_SAVED:`${a} Saved`,SAVE_CHANGES:`Save changes to ${u}`,ENTITY_FINDER_POPOVER:f,ENTITY_FINDER_PROMPT:`Find ${m(o)} to add to the ${a}.`,PRECONDITION_FAILED_MESSAGE:`Re-retrieve the ${a} to get the latest changes. Your current changes will be lost.`,PRECONDITION_FAILED_TITLE:`${a} updated since last fetched`,PRECONDITION_FAILED_ACTION:`Retrieve ${a}`}}const ee=42,tt=350;function b(r){var G;const{entityId:a,onSave:o,onClose:u,onUnsavedChangesChange:f}=r,A=xe(),[E,l]=D(!1),[V,k]=D(!1),[v,$]=D(!1),[n,ne]=D(),[S,ie]=D(),_=e=>{$(!0),ne(e)},{data:c,refetch:re}=Ye(a,void 0,{enabled:!n}),{ADD_ITEMS:M,ADD_ITEMS_TO:ae,REMOVE_ITEMS:oe,NO_ITEMS_IN_THIS_DATASET:se,SAVE_TO_CONTINUE:de,CREATE_VERSION_TO_FREEZE:le,ENTITY_SAVED:me,SAVE_CHANGES:ce,PRECONDITION_FAILED_TITLE:pe,PRECONDITION_FAILED_MESSAGE:ue,PRECONDITION_FAILED_ACTION:fe,ENTITY_FINDER_POPOVER:he,ENTITY_FINDER_PROMPT:ye}=X(()=>N(c),[c]);x(()=>{!n&&c&&(c.items==null&&(c.items=[]),_(c),$(!1))},[c,n]);const{set:g,add:K,remove:Ie,clear:P}=Xe(),z=!!(n&&n.items.length===g.size);x(()=>{f&&f(v)},[v,f]),x(()=>{if(S&&n&&!We(S,n)){const e=Se();R(de,"info",{title:e,primaryButtonConfig:{text:ce,onClick:()=>L.mutate(n)}})}ie(n)},[n]);const{data:B}=Ke(a),w=(G=B==null?void 0:B.path[1])==null?void 0:G.id,L=ze({onSuccess:()=>{$(!1),o?o():R(le,"success",{title:me})},onError:e=>{e.status===412?R(ue,"warning",{title:pe,primaryButtonConfig:{text:fe,onClick:()=>{re()}}}):R(e.reason,"danger",{title:"An Error Occurred"})}}),Ee=n==null?void 0:n.items.map(e=>({...e,isSelected:g.has(e.entityId),setSelected:t=>t?K(e.entityId):Ie(e.entityId)}));function H(e,t){const s=e.filter(h=>!t.find(p=>p.entityId===h.entityId)),d=[...s],{updatedItems:I,newItems:T}=t.reduce((h,p)=>{const W=e.find(ve=>ve.entityId===p.entityId);return W?p.versionNumber!==W.versionNumber?h.updatedItems.push(p):s.push(p):h.newItems.push(p),h},{updatedItems:[],newItems:[]});return{unchangedItems:s,updatedItems:I,newItems:T,deletedItems:d}}function Se(){const{updatedItems:e,newItems:t,deletedItems:s}=H(S==null?void 0:S.items,n==null?void 0:n.items);let d="";return s.length>0?d+=`${s.length} Item${s.length===1?"":"s"} removed`:(d+=`${t.length} Item${t.length===1?"":"s"} added`,e.length>0&&(d+=` and ${e.length} Item${e.length===1?"":"s"} updated`)),d}function ge(e){_(t=>{if(t){const s=e.map(p=>({entityId:p.targetId,versionNumber:p.targetVersionNumber})),{unchangedItems:d,updatedItems:I,newItems:T}=H(t.items,s),h=[...d,...I,...T];return{...t,items:h}}else return console.warn("Cannot add items to the Collection because it is undefined. The Collection may not have been fetched yet."),t}),P()}function Te(){_(e=>({...e,items:e.items.filter(t=>!g.has(t.entityId))})),P()}function Ce(e,t){_(s=>({...s,items:s.items.map(d=>d.entityId===e?{entityId:e,versionNumber:t}:d)}))}const U=[{key:"errorState",width:30,cellRenderer:Oe},{key:"isSelected",width:40,dataKey:"isSelected",headerRenderer:n?i(e=>{const{datasetToUpdate:t,clearSelectedIds:s,addSelectedId:d}=e,I=z;return t?i("div",{"data-testid":"Select All",style:{cursor:"pointer"},onClick:()=>{I?s():d(...t.items.map(T=>T.entityId))},children:i(Ge,{label:"Select All",hideLabel:!0,className:"SRC-pointer-events-none",checked:I,disabled:t.items.length===0,onChange:()=>{}})}):i(J,{})},{datasetToUpdate:n,selectedIds:g,clearSelectedIds:P,addSelectedId:K,allItemsAreSelected:z}):i(J,{}),cellRenderer:Ae},{key:"name",width:350,dataKey:"entityId",title:"Name",resizable:!0,cellRenderer:Ve},{key:"status",width:80,dataKey:"entityId",resizable:!0,cellRenderer:ke},{key:"id",width:140,title:"ID",dataKey:"entityId",resizable:!0},{key:"version",width:150,title:"Version",dataKey:"entityId",cellRenderer:e=>i(Le,{...e,toggleSelection:t=>{Ce(t.entityId,t.versionNumber)}})},{key:"createdOn",width:200,title:"Created On",dataKey:"entityId",resizable:!0,cellRenderer:$e},{key:"modifiedOn",width:200,title:"Modified On",dataKey:"entityId",resizable:!0,cellRenderer:Me},{key:"modifiedBy",width:250,title:"Modified By",dataKey:"entityId",resizable:!0,cellRenderer:Pe},{key:"projectId",width:300,title:"Project",dataKey:"entityId",resizable:!0,cellRenderer:Be}],j=U.reduce((e,t)=>e+t.width,0);function De(){return y("div",{className:"NoItemsPlaceholder",children:[i(F,{variant:"headline3",children:se}),y(C,{className:"AddItemsButton",variant:"sds-primary",onClick:()=>l(!0),children:[i(Z,{options:{icon:"addCircleTwoTone"}}),i("span",{children:M})]})]})}const be=X(()=>{if(c)return et(c)},[c]);return y("div",{className:"DatasetEditor bootstrap-4-backport",children:[i(He,{configuration:{projectId:w,selectMultiple:!0,initialScope:_e.CURRENT_PROJECT,initialContainer:w!=null?w:null,selectableTypes:be,versionSelection:we.REQUIRED},titlePopoverProps:{markdownText:he,helpUrl:"https://help.synapse.org/docs/Datasets.2611281979.html"},promptCopy:ye,show:E,onClose:()=>{l(!1)},title:ae,confirmButtonCopy:M,onConfirm:e=>{ge(e),l(!1)},onCancel:()=>l(!1)}),i(je,{title:"Unsaved Changes",modalBody:"Any unsaved changes will be lost. Are you sure you want to close the editor?",confirmButtonText:"Close Editor",onConfirm:()=>{u&&(k(!1),f&&f(!1),u())},show:V,onConfirmCallbackArgs:[],onCancel:()=>k(!1)}),y("div",{className:"DatasetEditorTopBottomPanel",children:[i(Ue,{show:L.isLoading}),i("div",{className:"ItemCount",children:n?y(F,{variant:"headline3",children:[n.items.length===0?"No":n.items.length.toLocaleString()," ","File",n.items.length!==1&&"s"]}):i(Ze,{variant:"rect",width:200})}),i(C,{variant:"sds-primary",disabled:n==null,onClick:()=>l(!0),children:M}),i(C,{disabled:g.size===0,variant:"outline",onClick:Te,children:oe})]}),i("div",{className:"DatasetEditorTableContainer",children:n?n.items.length===0?i(De,{}):i(Re,{height:tt,children:({height:e,width:t})=>i(Ne,{classPrefix:"DatasetEditorTable",data:Ee,height:e,width:t>j?t:j,rowHeight:ee,overscanRowCount:5,columns:U,rowClassName:"DatasetEditorRow",rowProps:({rowData:s})=>({"aria-selected":s.isSelected}),headerCellProps:{role:"columnheader"}})}):i(qe,{className:"DatasetItemsEditorSkeleton",numRows:8,numCols:6,rowHeight:`${ee}px`})}),y("div",{className:"DatasetEditorTopBottomPanel",children:[v&&y(Je,{dismissible:!1,show:!0,transition:!1,variant:"warning",children:[i(Z,{options:{icon:"warning",color:A.colors.warning,padding:"right"}}),i(F,{display:"inline",component:"span",variant:"smallText2",children:"You have unsaved changes"})]}),i(C,{variant:"outline",onClick:()=>{v?k(!0):u&&u()},children:"Cancel"}),i(C,{disabled:!n,variant:"sds-primary",onClick:()=>L.mutate(n),children:"Save"})]})]})}try{N.displayName="getCopy",N.__docgenInfo={description:"",displayName:"getCopy",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"EntityRef[]"}},concreteType:{defaultValue:null,description:"Indicates which implementation of Entity this object represents.",name:"concreteType",required:!0,type:{name:"enum",value:[{value:'"org.sagebionetworks.repo.model.table.EntityView"'},{value:'"org.sagebionetworks.repo.model.table.SubmissionView"'},{value:'"org.sagebionetworks.repo.model.table.Dataset"'},{value:'"org.sagebionetworks.repo.model.table.DatasetCollection"'}]}},columnIds:{defaultValue:null,description:"",name:"columnIds",required:!0,type:{name:"string[]"}},isSearchEnabled:{defaultValue:null,description:"",name:"isSearchEnabled",required:!0,type:{name:"boolean"}},versionLabel:{defaultValue:null,description:"",name:"versionLabel",required:!1,type:{name:"string"}},versionComment:{defaultValue:null,description:"",name:"versionComment",required:!1,type:{name:"string"}},isLatestVersion:{defaultValue:null,description:"",name:"isLatestVersion",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The name of this entity?",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"The description of this entity.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The unique immutable ID for this entity. A new ID will be generated for new Entities. Once issued, this ID is guaranteed to never change or be re-issued",name:"id",required:!1,type:{name:"string"}},etag:{defaultValue:null,description:"Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date.",name:"etag",required:!1,type:{name:"string"}},createdOn:{defaultValue:null,description:"The date this entity was created.",name:"createdOn",required:!1,type:{name:"string"}},modifiedOn:{defaultValue:null,description:"The date this entity was last modified.",name:"modifiedOn",required:!1,type:{name:"string"}},createdBy:{defaultValue:null,description:"The ID of the user that created this entity.",name:"createdBy",required:!1,type:{name:"string"}},modifiedBy:{defaultValue:null,description:"The ID of the user that last modified this entity.",name:"modifiedBy",required:!1,type:{name:"string"}},parentId:{defaultValue:null,description:"The ID of the Entity that is the parent of this Entity.",name:"parentId",required:!1,type:{name:"string"}},attachments:{defaultValue:null,description:"@deprecated This field is deprecated and will be removed in future versions of Synapse",name:"attachments",required:!1,type:{name:"AttachmentData[]"}},annotations:{defaultValue:null,description:"@deprecated This field is deprecated and will be removed in future versions of Synapse",name:"annotations",required:!1,type:{name:"string"}},accessControlList:{defaultValue:null,description:"@deprecated This field is deprecated and will be removed in future versions of Synapse",name:"accessControlList",required:!1,type:{name:"string"}},entityType:{defaultValue:null,description:"@deprecated This field is deprecated and will be removed in future versions of Synapse",name:"entityType",required:!1,type:{name:"string"}},uri:{defaultValue:null,description:"@deprecated This field is deprecated and will be removed in future versions of Synapse",name:"uri",required:!1,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/table/datasets/DatasetItemsEditor.tsx#getCopy"]={docgenInfo:N.__docgenInfo,name:"getCopy",path:"src/lib/containers/table/datasets/DatasetItemsEditor.tsx#getCopy"})}catch{}try{b.displayName="DatasetItemsEditor",b.__docgenInfo={description:"",displayName:"DatasetItemsEditor",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},onUnsavedChangesChange:{defaultValue:null,description:"Callback invoked when the editor changes state to contain un/saved changes.",name:"onUnsavedChangesChange",required:!1,type:{name:"((hasUnsavedChanges: boolean) => void)"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/table/datasets/DatasetItemsEditor.tsx#DatasetItemsEditor"]={docgenInfo:b.__docgenInfo,name:"DatasetItemsEditor",path:"src/lib/containers/table/datasets/DatasetItemsEditor.tsx#DatasetItemsEditor"})}catch{}const Qn={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatasetItemsEditor } from './DatasetItemsEditor'

export default {
  title: 'Synapse/DatasetItemsEditor',
  component: DatasetItemsEditor,
} as ComponentMeta<typeof DatasetItemsEditor>

const Template: ComponentStory<typeof DatasetItemsEditor> = args => (
  <DatasetItemsEditor {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn26302617',
}
`,locationsMap:{demo:{startLoc:{col:60,line:10},endLoc:{col:1,line:12},startBody:{col:60,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/DatasetItemsEditor",component:b},nt=r=>i(b,{...r}),it=nt.bind({});it.args={entityId:"syn26302617"};const Xn=["Demo"];export{it as Demo,Xn as __namedExportsOrder,Qn as default};
