import{r as m,a,F as _,j as e}from"./jsx-runtime.e45f5946.js";import{V as T,cx as le,cy as se,a9 as ee,af as ae,a4 as ce,cz as de,Q as pe,cA as me,a8 as ue,cB as ge,ak as he,R as fe,cC as we}from"./index.84caca20.js";import{u as te}from"./useInfiniteQuery.8572f9ef.js";import{u as oe}from"./react-intersection-observer.esm.69fbb5ff.js";import{h as Q}from"./moment.a565bb48.js";import{U as ye}from"./UserCard.8473dff8.js";import{S as Se}from"./Sort.d336acaa.js";import{D as j}from"./EntityChildren.50133102.js";import{P as be}from"./getEndpoint.bb7ded34.js";import{I as y}from"./IconSvg.fd56a75b.js";import{T as I}from"./SynapseTableConstants.07ecdebd.js";import{S as De}from"./SkeletonTable.3b39696e.js";import{f as ie,I as _e,D as Ce,H as J}from"./CardContainerLogic.8a51ae9f.js";import{d as X}from"./ToastMessage.dffa6777.js";import{T as k}from"./Tooltip.2f932cf4.js";import{B as ve}from"./LoadingScreen.2ae08f91.js";import{D as R}from"./Dropdown.6d186adc.js";import{T as ke}from"./Table.0787045e.js";import{u as Ne}from"./useGetDownloadListStatistics.69268546.js";import{L as Ae,M as Te}from"./MeetAccessRequirementCard.281966d6.js";import{R as Pe}from"./RequestDownloadCard.546cb1fe.js";import{F as ne}from"./FullWidthAlert.1145dd98.js";import{B as x}from"./Button.85a360c3.js";import{T as P}from"./Typography.33698c6c.js";import"./iframe.db0e90de.js";import"./index.2f057391.js";import"./SynapseConstants.290eab74.js";import"./styled.11fa6590.js";import"./utils.e1966123.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.35ce73ec.js";import"./isArray.8bc8137e.js";import"./Link.7e8c9dbf.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./emotion-react.browser.esm.1d99b462.js";import"./IconCopy.9bac9114.js";import"./Skeleton.d7dd8f63.js";import"./Overlay.2b8a7b39.js";import"./contains.82fe9acc.js";import"./usePopperMarginModifiers.40113aa3.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.fd0babf1.js";import"./createSvgIcon.25fceae1.js";import"./InfoOutlined.c1b233d2.js";import"./times.dc5c8712.js";import"./toInteger.836ec642.js";import"./isSymbol.564875b4.js";import"./sqlFunctions.cedc0d99.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.68a47eb2.js";import"./useGetInfoFromIds.b7e31f92.js";import"./use-deep-compare-effect.esm.6947367c.js";import"./uniq.1d7ae387.js";import"./_baseSlice.50189bc5.js";import"./_cacheHas.a4903518.js";import"./without.046078f0.js";import"./uniqueId.c6c12783.js";import"./_Set.5d4d075d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.b1ef8918.js";import"./queryUtils.5b9bb8c0.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.53475be9.js";import"./_baseClone.7677870c.js";import"./_getTag.adac27b6.js";import"./NoSearchResults.7acf193a.js";import"./NoData.a9d8f4b7.js";import"./unCamelCase.07e38083.js";import"./useEntity.87d22d65.js";import"./useMutation.33a42727.js";import"./pick.44941d26.js";import"./isEqual.989f48ab.js";import"./ElementWithTooltip.ca2e949f.js";import"./Checkbox.7c7046f9.js";import"./RadioGroup.83968d9b.js";import"./RangeSlider.973fdfc9.js";import"./factory.371506bb.js";import"./react-sizeme.e3a57323.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./Modal.3cf810c4.js";import"./inheritsLoose.01564ab7.js";import"./usePrevious.820aff42.js";import"./removeClass.27874bcb.js";import"./SelectionCriteriaPill.5950976b.js";import"./Close.bd4ed5e0.js";import"./react-select.esm.f2c082aa.js";import"./Select-54ac8379.esm.1506e5bc.js";import"./CustomSelectWidget.afd0ca63.js";import"./index.browser.e3fed4e8.js";import"./WarningModal.b9cdddf8.js";import"./DateFormatter.a9cbfa7c.js";import"./EntityIcon.6b3ffc55.js";import"./core.esm.d3bdc97d.js";import"./isEmpty.c7d7f52e.js";import"./union.7d62ae42.js";import"./isString.b5efd261.js";import"./QueryCount.a23c9445.js";import"./useGetAccessRequirement.0efba7a1.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.3dfa701d.js";import"./UserSearchBox.84eaecbc.js";import"./UserOrTeamBadge.0dc6e448.js";import"./EntityLink.3232d5b6.js";import"./SynapseVideo.b76f842e.js";import"./IconList.7e9376dc.js";import"./UserCardList.45c04af5.js";import"./isRequiredForA11y.20ed4857.js";function Ie(o,i,n){const{accessToken:l}=T(),s={concreteType:"org.sagebionetworks.repo.model.download.AvailableFilesRequest"};return o&&(s.sort=[o]),i&&(s.filter=i),te(["downloadlistv2availablefiles",s],async d=>le({...s,nextPageToken:d.pageParam},l),{...n,getNextPageParam:d=>d.nextPageToken})}function Fe(o){const{accessToken:i}=T(),n={concreteType:"org.sagebionetworks.repo.model.download.ActionRequiredRequest"};return te(["downloadlistv2availablefiles",n],async l=>await se({...n,nextPageToken:l.pageParam},i),{...o,getNextPageParam:l=>l.nextPageToken})}function L({entityId:o,version:i}){const[n,l]=m.exports.useState(!1),s=`library(synapser)
synLogin('username','password')

# Obtain a pointer and download the data
${o} <- synGet(entity='${o}'${i?`, version=${i}`:""} ) `,d=`import synapseclient

syn = synapseclient.Synapse()
syn.login('synapse_username','password')

# Obtain a pointer and download the data
${o} = syn.get(entity='${o}'${i?`, version=${i}`:""} )

# Get the path to the local copy of the data file
filepath = ${o}.path`,u=`synapse get ${o} ${i?`--version ${i}`:""}`;return a(_,{children:[e(k,{title:"Programmatic download options",enterNextDelay:I,placement:"left",children:e("span",{children:e("button",{className:"btn-download-icon",onClick:()=>l(!0),children:e(y,{icon:"code"})})})}),n&&e(ie,{show:!0,onClose:()=>l(!1),title:"Download Programmatically",cliCode:u,rCode:s,pythonCode:d})]})}try{L.displayName="DirectProgrammaticDownload",L.__docgenInfo={description:"",displayName:"DirectProgrammaticDownload",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/DirectProgrammaticDownload.tsx#DirectProgrammaticDownload"]={docgenInfo:L.__docgenInfo,name:"DirectProgrammaticDownload",path:"src/lib/containers/download_list_v2/DirectProgrammaticDownload.tsx#DirectProgrammaticDownload"})}catch{}const Ee="TESTING_TRASH_BTN_CLASS";function B(o){var Z;const{filesStatistics:i,refetchStatistics:n}=o,{accessToken:l}=T(),s=ee(),{ref:d,inView:u}=oe(),[h,b]=m.exports.useState(!1),[c,S]=m.exports.useState(void 0),[D,r]=m.exports.useState(void 0),{data:f,status:g,isFetchingNextPage:p,isLoading:w,hasNextPage:N,fetchNextPage:z,isError:U,error:H,refetch:E}=Ie(c,D);m.exports.useEffect(()=>{E&&E()},[i,E]),m.exports.useEffect(()=>{U&&H&&s(H)},[U,H,s]);const O=(Z=f==null?void 0:f.pages.flatMap(t=>t.page))!=null?Z:[];m.exports.useEffect(()=>{g==="success"&&!p&&N&&z&&(u||h)?z():!N&&h&&(()=>{const v=O.map(A=>`${A.fileEntityId}.${A.versionNumber}`).join(`
`);navigator.clipboard.writeText(v).then(()=>{X("Successfully copied to clipboard")}),b(!1)})()},[g,p,N,z,u,h,O]);const K=t=>t?t=="eligibleForPackaging"?"Only Eligible":"Only Ineligible":"All",W=async(t,v,A)=>{try{await de(t,l),X(`${v} has been removed from your list.`,"success",{title:A}),E(),n()}catch(G){console.error(G)}},C=({columnSortBy:t})=>e("span",{children:S&&e(Se,{role:"button",style:{height:"20px"},active:(c==null?void 0:c.field)===t,direction:(c==null?void 0:c.field)===t?c.direction==="DESC"?j.DESC:j.ASC:j.DESC,onClick:()=>{const v=t===(c==null?void 0:c.field)?c.direction==="ASC"?"DESC":"ASC":"DESC";S({field:t,direction:v})}})}),re=[void 0,"eligibleForPackaging","ineligibleForPackaging"];return a(_,{children:[e(ve,{show:h}),a("div",{className:"filterFilesContainer",children:[e("span",{className:"filterFilesByText",children:"Filter Files By"}),a(R,{children:[e(R.Toggle,{variant:"gray-primary-500",id:"dropdown-basic",children:K(D)}),e(R.Menu,{role:"menu",children:re.map(t=>e(R.Item,{role:"menuitem",onClick:()=>{r(t)},children:K(t)},`${K(t)}-filter-option`))})]})]}),O.length>0&&e(_,{children:a(ke,{striped:!0,responsive:!0,className:"DownloadListTableV2",children:[e("thead",{children:a("tr",{children:[e("th",{}),a("th",{children:["Name",e(C,{columnSortBy:"fileName"})]}),a("th",{children:["Size",e(C,{columnSortBy:"fileSize"})]}),a("th",{children:["SynID",e(_e,{onCopy:()=>{b(!0)}}),e(C,{columnSortBy:"synId"})]}),a("th",{children:["Project",e(C,{columnSortBy:"projectName"})]}),a("th",{children:["Added On",e(C,{columnSortBy:"addedOn"})]}),a("th",{children:["Created By",e(C,{columnSortBy:"createdBy"})]}),a("th",{children:["Created On",e(C,{columnSortBy:"createdOn"})]}),e("th",{className:"stickyColumn",children:"Actions"})]})}),a("tbody",{children:[O.map(t=>{if(t){const v=Q(t.addedOn).format("L LT"),A=Q(t.createdOn).format("L LT");return a("tr",{children:[a("td",{className:t.isEligibleForPackaging?"":"ineligibleForPackagingTd",children:[t.isEligibleForPackaging&&e(k,{title:"Eligible for packaging",enterNextDelay:I,placement:"right",children:e("span",{className:"eligibileIcon",children:e(y,{icon:"packagableFile"})})}),!t.isEligibleForPackaging&&e(k,{title:"This file is ineligible for Web packaging because it is >100MB, or it is an external link, or it is not stored on Synapse native storage",enterNextDelay:I,placement:"right",children:e("span",{className:"ineligibileIcon",children:e(y,{icon:"warningOutlined"})})})]}),e("td",{children:e("a",{target:"_blank",rel:"noopener noreferrer",href:`${be.PORTAL}#!Synapse:${t.fileEntityId}.${t.versionNumber}`,children:t.fileName})}),e("td",{children:t.fileSizeBytes&&ae(t.fileSizeBytes)}),e("td",{children:`${t.fileEntityId}.${t.versionNumber}`}),e("td",{children:t.projectName}),e("td",{children:v}),e("td",{children:e(ye,{size:"SMALL USER CARD",ownerId:t.createdBy})}),e("td",{children:A}),e("td",{className:"stickyColumn",children:a("div",{className:"actionsContainer",children:[e("span",{className:"downloadItem",children:e(Ce,{associatedObjectId:t.fileEntityId,associatedObjectType:ce.FileEntity,entityVersionNumber:t.versionNumber.toString(),displayFileName:!1,onClickCallback:G=>{G||W({fileEntityId:t.fileEntityId,versionNumber:t.versionNumber},t.fileName,"File Downloaded")}})}),e("span",{className:"programmaticAccessItem",children:e(L,{entityId:t.fileEntityId,version:t.versionNumber})}),e(k,{title:"Remove from Download List",placement:"left",enterNextDelay:I,children:e("span",{className:"removeItem",children:e("button",{className:Ee,onClick:()=>{W({fileEntityId:t.fileEntityId,versionNumber:t.versionNumber},t.fileName,"File Removed")},children:e(y,{icon:"removeCircle"})})})})]})})]},t.fileEntityId)}else return!1}),e("tr",{ref:d})]})]})}),w&&e(De,{numCols:5,numRows:3})]})}try{B.displayName="DownloadListTable",B.__docgenInfo={description:"",displayName:"DownloadListTable",props:{filesStatistics:{defaultValue:null,description:"",name:"filesStatistics",required:!0,type:{name:"FilesStatisticsResponse"}},refetchStatistics:{defaultValue:null,description:"",name:"refetchStatistics",required:!0,type:{name:"() => Promise<any>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/DownloadListTable.tsx#DownloadListTable"]={docgenInfo:B.__docgenInfo,name:"DownloadListTable",path:"src/lib/containers/download_list_v2/DownloadListTable.tsx#DownloadListTable"})}catch{}function q(o){const{accessToken:i}=T(),n=new pe({defaultOptions:{queries:{staleTime:50*1e3,retry:!1}}});return i?e(me,{client:n,children:e(ue,{children:o.filesStatistics&&e(B,{...o})})}):e(_,{})}try{q.displayName="AvailableForDownloadTable",q.__docgenInfo={description:`Table of the files added to the Download Cart that are currently available for download.
Note that this creates it's own QueryClient, so it's cache does not persist if you remount.`,displayName:"AvailableForDownloadTable",props:{filesStatistics:{defaultValue:null,description:"",name:"filesStatistics",required:!0,type:{name:"FilesStatisticsResponse"}},refetchStatistics:{defaultValue:null,description:"",name:"refetchStatistics",required:!0,type:{name:"() => Promise<any>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/AvailableForDownloadTable.tsx#AvailableForDownloadTable"]={docgenInfo:q.__docgenInfo,name:"AvailableForDownloadTable",path:"src/lib/containers/download_list_v2/AvailableForDownloadTable.tsx#AvailableForDownloadTable"})}catch{}function V(o){const{numFiles:i,numPackagableFiles:n,numBytes:l}=o,s=i-n,d=i===0;return a("span",{className:"DownloadDetailsV2",children:[e("span",{className:"item",children:!d&&a(_,{children:[" ",i," Files "]})}),a("span",{className:"item",children:[e("span",{className:d?"SRC-inactive":"SRC-primary-text-color",children:e(y,{icon:"packagableFile"})}),!d&&a(_,{children:[" ",n," Files eligible for packaging "]})]}),l>0&&e(k,{title:"This is the total size of all files in the Download Cart that are available to download.",enterNextDelay:I,placement:"top",children:e("span",{className:"item",children:ae(l)})}),s>0&&a("span",{className:"item",children:[e("span",{className:"SRC-warning-color",children:e(y,{icon:"warningOutlined"})}),!d&&a(_,{children:[" ",s," Files ineligible for packaging "]})]})]})}try{V.displayName="DownloadDetails",V.__docgenInfo={description:"",displayName:"DownloadDetails",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numPackagableFiles:{defaultValue:null,description:"",name:"numPackagableFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/DownloadDetails.tsx#DownloadDetails"]={docgenInfo:V.__docgenInfo,name:"DownloadDetails",path:"src/lib/containers/download_list_v2/DownloadDetails.tsx#DownloadDetails"})}catch{}function $(o){const{numFiles:i,numPackagableFiles:n,numBytes:l}=o;return e("div",{children:e(V,{numFiles:i,numPackagableFiles:n,numBytes:l})})}try{$.displayName="DownloadListStats",$.__docgenInfo={description:"",displayName:"DownloadListStats",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numPackagableFiles:{defaultValue:null,description:"",name:"numPackagableFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/DownloadListStats.tsx#DownloadListStats"]={docgenInfo:$.__docgenInfo,name:"DownloadListStats",path:"src/lib/containers/download_list_v2/DownloadListStats.tsx#DownloadListStats"})}catch{}const M=o=>{var g;const i=ee(),{ref:n,inView:l}=oe(),{data:s,status:d,isLoading:u,hasNextPage:h,isFetchingNextPage:b,fetchNextPage:c,isError:S,error:D}=Fe();m.exports.useEffect(()=>{S&&D&&i(D)},[S,D,i]),m.exports.useEffect(()=>{d==="success"&&!b&&h&&c&&l&&c()},[d,h,b,c,l]);const r=(g=s==null?void 0:s.pages.flatMap(p=>p.page))!=null?g:[],f=p=>{switch(p.action.concreteType){case"org.sagebionetworks.repo.model.download.MeetAccessRequirement":{const w=p.action;return e(Te,{accessRequirementId:w.accessRequirementId,count:p.count},w.accessRequirementId)}case"org.sagebionetworks.repo.model.download.RequestDownload":{const w=p.action;return e(Pe,{entityId:`syn${w.benefactorId}`,count:p.count,onViewSharingSettingsClicked:o.onViewSharingSettingsClicked},w.benefactorId)}default:return}};return a(_,{children:[r.length>0&&a("div",{className:"DownloadListActionsRequired",children:[r.map(p=>p?f(p):!1),e("div",{ref:n})]}),u&&e(Ae,{})]})};try{M.displayName="DownloadListActionsRequired",M.__docgenInfo={description:"",displayName:"DownloadListActionsRequired",props:{onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!0,type:{name:"(benefactorId: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/DownloadListActionsRequired.tsx#DownloadListActionsRequired"]={docgenInfo:M.__docgenInfo,name:"DownloadListActionsRequired",path:"src/lib/containers/download_list_v2/DownloadListActionsRequired.tsx#DownloadListActionsRequired"})}catch{}const Oe="Please provide a package file name and try again.",Y=o=>{const{accessToken:i}=T(),[n,l]=m.exports.useState(!1),[s,d]=m.exports.useState(""),[u,h]=m.exports.useState(),[b,c]=m.exports.useState(void 0),{onPackageCreation:S}=o;return a(_,{children:[e("div",{className:"CreatePackageV2 bootstrap-4-backport",children:a("div",{className:"createPackageStep",children:[e("span",{className:"createPackageTitle",children:"Create your Download Package"}),e("span",{className:"createPackageDescription",children:"Name your download package and select Download Package to get started."}),!n&&!b&&a("div",{className:"inputAndCreateButton",children:[e("input",{onChange:f=>{d(f.currentTarget.value)},type:"text",placeholder:"PackageName",style:{width:"233px"}}),e("span",{className:"zipUI",children:".zip"}),e(x,{variant:s?"primary":"dark",onClick:async f=>{if(f.preventDefault(),!s){h({message:Oe,variant:"danger"});return}l(!0);try{const g=`${s}.zip`,p=await ge(g,i);c(p);const{resultFileHandleId:w}=p;try{window.location.href=await he(w,i),d(""),c(void 0),S()}catch(N){console.error("Err on getFileHandleByIdURL = ",N)}}catch(g){h({message:g.reason,variant:"danger"})}finally{l(!1)}},type:"button",style:{marginLeft:20},disabled:!s,children:"Download Package"})]}),n&&a("div",{className:"creatingPackage",children:[e("span",{className:"spinner"}),e("span",{style:{marginLeft:5},children:"Creating package..."})]})]})}),e(ne,{show:!!u,variant:u!=null&&u.variant?u.variant:"success",description:u==null?void 0:u.message,autoCloseAfterDelayInSeconds:10,onClose:()=>{h(void 0)}})]})};try{Y.displayName="CreatePackageV2",Y.__docgenInfo={description:"",displayName:"CreatePackageV2",props:{onPackageCreation:{defaultValue:null,description:"",name:"onPackageCreation",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/CreatePackageV2.tsx#CreatePackageV2"]={docgenInfo:Y.__docgenInfo,name:"CreatePackageV2",path:"src/lib/containers/download_list_v2/CreatePackageV2.tsx#CreatePackageV2"})}catch{}const Re=`import synapseclient
syn = synapseclient.login()
dl_list_file_entities = syn.get_download_list()`,xe="synapse get-download-list",F=o=>{const{accessToken:i}=T(),[n,l]=m.exports.useState(0),[s,d]=m.exports.useState(!1),[u,h]=m.exports.useState(!1),[b,c]=m.exports.useState(!1),[S,D]=m.exports.useState(),{data:r,isLoading:f,isError:g,error:p,refetch:w}=Ne();return m.exports.useEffect(()=>{g&&p&&D(p)},[g,p]),m.exports.useEffect(()=>{r&&r.numberOfFilesRequiringAction==0&&l(1)},[r]),S?e(fe,{error:S}):a("div",{className:"DownloadCartPage bootstrap-4-backport",children:[e("div",{children:a("div",{className:"pageHeader",children:[a("div",{className:"grid",children:[e("h3",{className:"pageHeaderTitle",children:"Your Download Cart"}),e(k,{title:"Immediately removes all items from your download list",enterNextDelay:300,placement:"right",children:a("a",{className:"clearDownloadListLink",onClick:async()=>{await we(i),w()},children:[e("span",{children:e(y,{icon:"delete",sx:{paddingRight:"0.2rem"}})}),"Clear Your Download Cart"]})})]}),e(P,{className:"description",variant:"body1",children:"You may find your added files in the tabs below. Any files which require actions before download can be found in the Access Actions Required tab, while any that can be downloaded now can be found in the Download List tab."})]})}),e("div",{className:"tabs-container",children:e("div",{className:"container",children:a("ul",{className:"nav nav-tabs",children:[e("li",{className:`nav-item ${n==0?"active":""}`,"aria-selected":n==0,children:a("button",{onClick:()=>l(0),children:["Access Actions Required",!g&&!f&&r&&e("span",{className:"fileCount",children:r.totalNumberOfFiles-r.numberOfFilesAvailableForDownload})]})}),e("li",{className:`nav-item ${n==1?"active":""}`,"aria-selected":n==1,children:a("button",{onClick:()=>l(1),children:["Download List",!g&&!f&&r&&e("span",{className:"fileCount",children:r.numberOfFilesAvailableForDownload})]})})]})})}),n==0&&!g&&!f&&r&&a("div",{children:[r.numberOfFilesRequiringAction>0&&e("div",{children:e("div",{className:"actionsRequiredContainer container",children:e(M,{...o})})}),r.numberOfFilesRequiringAction===0&&e("div",{className:"placeholder",children:e("div",{children:"No actions are currently required."})})]}),n==1&&!g&&!f&&r&&a("div",{children:[r.numberOfFilesAvailableForDownload>0&&a("div",{className:"DownloadListTabContent",children:[e("div",{className:"subSectionOverviewContainer",children:a("div",{className:"subSectionOverview container",children:[a("div",{children:[a("div",{className:"headlineWithHelp",children:[a(P,{variant:"headline3",children:[e(y,{icon:"packagableFile"})," Web Download (.ZIP Packages)"]}),e(J,{markdownText:"This will allow you to create a .zip file that contains eligible files. Files greater that 100 MB, external links, or files which are not stored on Synapse native storage are ineligible. In most cases, ineligible files can be downloaded individually. External links will require navigation to an external site, which may require a separate login process.",helpUrl:"https://help.synapse.org/docs/Downloading-Data-From-the-Synapse-UI.2004254837.html"})]}),e(P,{variant:"body1",children:a("ul",{children:[e("li",{children:"Eligible files will be added to .ZIP packages of up to 1GB in size"}),e("li",{children:"If you have more than 1GB, you can create multiple packages"}),e("li",{children:"Will only include files which are hosted on Synapse native storage"}),e("li",{children:"Packages include a CSV manifest that contains file annotations and other information for each file"})]})}),a("span",{children:[r.numberOfFilesAvailableForDownloadAndEligibleForPackaging>0&&a(x,{variant:"sds-primary",onClick:()=>{d(!0)},children:[e(y,{icon:"download"}),"Download As .Zip Packages"]}),r.numberOfFilesAvailableForDownloadAndEligibleForPackaging==0&&e(k,{title:"You cannot create a .zip package because there are no eligible files.",enterNextDelay:300,placement:"top",children:a(x,{variant:"sds-primary",disabled:!0,children:[e(y,{icon:"download"}),"\xA0Download As .Zip Packages"]})})]})]}),a("div",{children:[a("div",{className:"headlineWithHelp",children:[a(P,{variant:"headline3",children:[e(y,{icon:"code"})," Programmatic Download"]}),e(J,{markdownText:"This will provide syntax which you can enter into your programmatic client. It is suitable for large files (>100 MB), for packages > 1GB, and for files which aren\u2019t stored on Synapse native storage (e.g. in a special AWS S3 or Google Cloud bucket).  External links will require navigation to an external site, which may require a separate login process.",helpUrl:"https://help.synapse.org/docs/Downloading-Data-Programmatically.2003796248.html"})]}),e(P,{variant:"body1",children:a("ul",{children:[e("li",{children:"Requires installation of a programmatic client (R, Python, CLI)"}),e("li",{children:"No limit to the file size or the size of the package that can be downloaded"}),e("li",{children:"Will include files which are hosted on and off Synapse native storage"}),e("li",{children:"Packages include a CSV manifest that contains file annotations and other information for each file"})]})}),e("span",{children:a(x,{variant:"sds-primary",onClick:()=>{h(!0)},children:[e(y,{icon:"code"}),"\xA0Create Programmatic Package"]})})]})]})}),a("div",{className:"availableForDownloadTableContainer container",children:[s&&e(Y,{onPackageCreation:()=>{c(!0),w()}}),e($,{numBytes:r.sumOfFileSizesAvailableForDownload,numPackagableFiles:r.numberOfFilesAvailableForDownloadAndEligibleForPackaging,numFiles:r.numberOfFilesAvailableForDownload}),w&&e(q,{filesStatistics:r,refetchStatistics:w})]})]}),r.numberOfFilesAvailableForDownload===0&&e("div",{className:"placeholder",children:e("div",{children:"Your Download List is currently empty."})})]}),e(ne,{show:b,variant:"success",title:"Package Created",description:"A package has been created with eligible files. The items contained in this .zip file have been removed from your list. If your package is over 1GB, you will need to create multiple packages.",autoCloseAfterDelayInSeconds:10,onClose:()=>{c(!1)}}),u&&e(ie,{show:!0,onClose:()=>h(!1),title:"Download Programmatically",pythonCode:Re,cliCode:xe})]})};try{F.displayName="DownloadCartPage",F.__docgenInfo={description:"Show the Download Cart page.",displayName:"DownloadCartPage",props:{onViewSharingSettingsClicked:{defaultValue:null,description:'Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission',name:"onViewSharingSettingsClicked",required:!0,type:{name:"(benefactorId: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/DownloadCartPage.tsx#DownloadCartPage"]={docgenInfo:F.__docgenInfo,name:"DownloadCartPage",path:"src/lib/containers/download_list_v2/DownloadCartPage.tsx#DownloadCartPage"})}catch{}const Kt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DownloadCartPage } from './DownloadCartPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Download/DownloadCartPage',
  component: DownloadCartPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DownloadCartPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DownloadCartPage> = args => (
  <DownloadCartPage {...args} />
)
export const Demo = Template.bind({})
`,locationsMap:{demo:{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}}}}},title:"Download/DownloadCartPage",component:F,argTypes:{}},Le=o=>e(F,{...o}),Gt=Le.bind({}),jt=["Demo"];export{Gt as Demo,jt as __namedExportsOrder,Kt as default};
