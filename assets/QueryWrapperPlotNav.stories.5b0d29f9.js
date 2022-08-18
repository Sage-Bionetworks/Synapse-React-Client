import{X as oe,H as ae,Y as ie,cF as re,w as W,cq as se,cG as le,f as $,m as X,cH as de,p as ue,t as ce,B as me,h as pe,j as fe,k as ye,l as he,n as Ce,G as Se,a5 as we}from"./index.4dca6b75.js";import{E as ge,i as Te}from"./EntityTypeUtils.3bc60a52.js";import{i as Ee,p as _e}from"./sqlFunctions.b49ac766.js";import"./assert.f4f45be2.js";import{c as De}from"./calculateFriendlyFileSize.9c20c573.js";import{h as Le}from"./moment.53181859.js";import{T as Y}from"./SynapseTableConstants.07ecdebd.js";import{S as U,j as J,k as Z,d as be,e as Fe,Q as Ne,a as Re,l as Oe,m as Ae,f as Ie}from"./TotalQueryResults.0b176e13.js";import{I as B}from"./IconSvg.c485205d.js";import{T as z}from"./Tooltip.6c95fe7b.js";import{a as c,j as e,F as p}from"./jsx-runtime.2e925369.js";import{u as K}from"./use-deep-compare-effect.esm.76673280.js";import{u as qe}from"./useGetDownloadListStatistics.1cb3ce61.js";import{a as Qe}from"./useGetEntityChildren.74ef6799.js";import{d as H}from"./ToastMessage.f82ed562.js";import{A as ve}from"./Alert.eafe86e9.js";import{S as Pe,L as xe,F as Me,a as ke,b as Ve,T as Ue,M as Be}from"./LastUpdatedOn.7b5d3701.js";import{C as We,I as Ye}from"./InfiniteQueryWrapper.aa68d2b3.js";import{Q as ze,b as Ke}from"./FacetNav.988dc93d.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Button.c582ea4c.js";import"./index.f252d424.js";import"./toString.8ef640ae.js";import"./index.06f4a415.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";import"./iframe.6d5bed29.js";import"./index.8cde812d.js";import"./Skeleton.8dd0668e.js";import"./ColumnType.744125d2.js";import"./queryUtils.c5c5b28e.js";import"./cloneDeep.81de84c9.js";import"./unCamelCase.d070537b.js";import"./ElementWithTooltip.5b1c9332.js";import"./index.2943906d.js";import"./index.5ef2ed87.js";import"./Dropdown.c29f5884.js";import"./Modal.58357e58.js";import"./useWaitForDOMRef.c89dbc64.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.31225551.js";import"./isRequiredForA11y.61bbc671.js";import"./Collapse.fe074047.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./Transition.d42a873e.js";import"./useGetInfoFromIds.6134a39b.js";import"./uniq.887d5fe7.js";import"./toInteger.2a70f33f.js";import"./_cacheHas.46d3b554.js";import"./_baseDifference.eb59a0c7.js";import"./_setToArray.a82100c8.js";import"./without.9feed738.js";import"./Checkbox.85bb9cd4.js";import"./uniqueId.fa0dadf5.js";import"./IconMinus.f135ad99.js";import"./RadioGroup.16868f96.js";import"./classCallCheck.8304ed06.js";import"./inherits.98d6a15d.js";import"./InfoOutlined.22a371fd.js";import"./makeStyles.9dfaa099.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./HelpPopover.4bea62bf.js";import"./MarkdownPopover.5bb2f1c4.js";import"./MarkdownSynapse.0e6a638d.js";import"./UserCard.1d43ea17.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.a764e383.js";import"./times.1f85fcee.js";import"./Overlay.88992b99.js";import"./factory.cc04b62f.js";import"./SynapseVideo.3aa23748.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.7de0a756.js";import"./HelpOutlineTwoTone.5e2fed5c.js";import"./ProgrammaticInstructionsModal.4f45cf1c.js";import"./QueryCount.5468ea3c.js";import"./NoData.928742eb.js";import"./InteractiveCopyIdsIcon.6d824920.js";import"./ExternalFileHandleInterface.57bf02b4.js";import"./HasAccessV2.3577c15f.js";import"./useGetAccessRequirement.1100f982.js";import"./useEntityBundle.49328021.js";import"./AccessRequirementList.997fbb4d.js";import"./LockTwoTone.32ff1570.js";import"./AccessApproval.493867d3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.034146a6.js";import"./UserSearchBox.98ef540d.js";import"./UserOrTeamBadge.733edf0d.js";import"./sortBy.36617ce2.js";import"./_baseMap.76aa89d5.js";import"./_baseIsEqual.93f513da.js";import"./LoadingScreen.56f18e4f.js";import"./EntityLink.845aeb35.js";import"./EntityIcon.ceb6996a.js";import"./GenericCard.3692a31c.js";import"./IconList.61c80547.js";import"./FileHandleLink.65557af8.js";import"./isEmpty.095d28d1.js";import"./SearchResultsNotFound.263a233e.js";import"./NoSearchResults.19ed4ed4.js";import"./ButtonBase.6f38967c.js";import"./UserCardList.dbf82621.js";import"./react-sizeme.2b791317.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";const He=200,j="ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME",G="ESTIMATED_DOWNLOAD_SPEED",je="syn12600511",Ge=t=>new Promise((a,n)=>{const l=localStorage.getItem(j),r=localStorage.getItem(G);if(l&&r&&new Date().getTime()<Number(l)){a(Number(r));return}oe(t,je).then(s=>{const i=s,C=[{associateObjectId:i.id,associateObjectType:ae.FileEntity,fileHandleId:i.dataFileHandleId}];ie({includeFileHandles:!0,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:C},t).then(u=>{const S=u.requestedFiles[0].preSignedURL,f=u.requestedFiles[0].fileHandle,w=new Date().getTime();return re(f,S).then(()=>{const y=f.contentSize/((new Date().getTime()-w-He)/1e3),d=new Date().getTime();localStorage.setItem(j,(d+1e3*60*5).toString()),localStorage.setItem(G,y.toString()),a(y)})})}).catch(s=>n(s))}),$e=window.React.useState,Xe=window.React.useEffect;function q(t){const{numFiles:a,numBytes:n}=t,{accessToken:l}=W(),[r,s]=$e({isLoading:!!n,downloadSpeed:0}),{isLoading:i,downloadSpeed:C}=r;Xe(()=>{l&&Ge(l).then(d=>{s({isLoading:!1,downloadSpeed:d})})},[l]);const m=i||C===0||!n?0:n/C,u=m===0,S=u?"":Le.duration(m,"seconds").humanize(),f=a===0,w=f?"SRC-inactive":"SRC-primary-text-color",y=u?"SRC-inactive":"SRC-primary-text-color";return c("span",{className:"download-details-container",children:[c("span",{children:[e("span",{className:w,children:e(B,{options:{icon:"file"}})}),f?e(U,{width:50}):c(p,{children:[" ",a,"\xA0files "]})]}),n&&e(z,{title:"This is the total size of all files. Zipped package(s) will likely be smaller.",enterNextDelay:Y,placement:"top",children:c("span",{"data-testid":"numBytesUI",children:[e("span",{className:y,children:e(B,{options:{icon:"database"}})}),u?e(U,{width:50}):De(n)]})}),n&&e(z,{title:"This is an estimate of how long package download will take.",enterNextDelay:Y,placement:"top",children:c("span",{"data-testid":"downloadTimeEstimateUI",children:[e("span",{className:y,children:e(B,{options:{icon:"clock"}})}),i&&a>0?e(U,{width:50}):S]})})]})}try{q.displayName="DownloadDetails",q.__docgenInfo={description:`Displays download information including number of files, size of download, and time to download.
Prefer to use {@link download_list_v2 /DownloadDetails} instead, particularly when you have information about file packaging in/eligibility`,displayName:"DownloadDetails",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list/DownloadDetails.tsx#DownloadDetails"]={docgenInfo:q.__docgenInfo,name:"DownloadDetails",path:"src/lib/containers/download_list/DownloadDetails.tsx#DownloadDetails"})}catch{}const Je=window.React.useCallback,I=window.React.useState;async function Ze(t,a,n,l,r){try{const s={query:n==null?void 0:n.query,concreteType:"org.sagebionetworks.repo.model.download.AddToDownloadListRequest",parentId:l};return await de(s,t),H("File(s) were successfully added to your Download Cart.","success",{primaryButtonConfig:{text:"View Download Cart",onClick:r}}),a(),[0,""]}catch(s){return H("danger",void 0,s.reason),a(),[0,""]}}const R={[2]:{className:"alert-info",infoText:"Would you like to add all files to the download cart?",closeText:"Cancel"},[3]:{className:"alert-info",infoText:c(p,{children:["Note: Files that you add will be mixed in with the files already in your download cart.",e("br",{}),"If you don\u2019t want to mix these files, clear your download cart before continuing."]}),closeText:"Cancel"},[1]:{className:"alert-info",infoText:"Adding Files To List",closeText:"Cancel"},[0]:{className:"alert-info",infoText:"Calculating File Size",closeText:"Cancel"},[4]:{className:"alert-danger",closeText:"Close",infoText:c(p,{children:["Please ",e(le,{style:{color:"#337ab7"}})," to add files to your download cart."]})}},et=t=>{switch(t.status){case 0:case 1:return c("div",{children:[e("span",{className:"spinner white"}),e("span",{className:"spinner__text",children:R[t.status].infoText})]});case 4:return e(p,{children:R[t.status].infoText});case 2:case 3:return c(p,{children:[e(q,{numFiles:t.fileCount,numBytes:t.fileSize}),e("span",{className:"download-confirmation-infoText",children:R[t.status].infoText})]});default:return e(p,{})}},Q=({getLastQueryRequest:t,folderId:a,fnClose:n,setTopLevelControlsState:l,topLevelControlsState:r,downloadCartPageUrl:s="/DownloadCart"})=>{const{accessToken:i}=W(),{showDownloadConfirmation:C=!0}=r!=null?r:{},[m,u]=I(i?0:4),[S,f]=I(0),[w,y]=I(),{data:d,refetch:M}=qe(),L=t(),[O,k]=I(!1),_=Je((o,E,D)=>{if(i&&D){const te=D.totalNumberOfFiles>0,ne=o!=null?o:0;u(te?3:2),f(ne),y(E)}},[i]),{data:g,isSuccess:b}=Qe({parentId:a,includeSumFileSizes:!0,includeTotalChildCount:!0,includeTypes:[ge.FILE]});K(()=>{b&&g&&d&&_(g.totalChildCount,g.sumFileSizesBytes,d)},[_,a,b,g,d]);const F=$|X,A={...L,partMask:F},{data:T}=se(A);K(()=>{var o,E;if(T&&d){const D=(o=T.sumFileSizes)==null?void 0:o.greaterThan;_(T.queryCount,D||(E=T.sumFileSizes)==null?void 0:E.sumFileSizesBytes,d)}},[_,L,T,d]);const V=n?()=>n():()=>{l&&l(o=>({...o,showDownloadConfirmation:!1}))},h=async()=>{if(!i)u(4);else{u(1);const D=(await Ze(i,V,L,a,()=>k(!0)))[0];u(D),M()}};O&&(s?window.location.href=s:console.error("Missing the Download Cart Page URL in the component configuration."));const N=r==null?void 0:r.showFacetFilter;return e(p,{children:c(ve,{dismissible:!1,show:!0,variant:"info",transition:!1,className:`download-confirmation ${R[m].className} ${C?"":"hidden"}
          ${N?J:Z}
        `,children:[e(et,{status:m,fileCount:S,fileSize:w}),c("div",{className:"download-confirmation-action",children:[m!==1&&e("button",{className:"btn btn-link",onClick:V,children:R[m].closeText}),(m===2||m===3)&&e("button",{type:"button",className:"btn btn-primary",onClick:h,children:"Add"})]})]})})};try{Q.displayName="DownloadConfirmation",Q.__docgenInfo={description:"",displayName:"DownloadConfirmation",props:{fnClose:{defaultValue:null,description:"",name:"fnClose",required:!1,type:{name:"(() => void)"}},getLastQueryRequest:{defaultValue:null,description:"",name:"getLastQueryRequest",required:!1,type:{name:"(() => QueryBundleRequest)"}},folderId:{defaultValue:null,description:"",name:"folderId",required:!1,type:{name:"string"}},topLevelControlsState:{defaultValue:null,description:"",name:"topLevelControlsState",required:!1,type:{name:"TopLevelControlsState"}},setTopLevelControlsState:{defaultValue:null,description:"",name:"setTopLevelControlsState",required:!1,type:{name:"Dispatch<SetStateAction<TopLevelControlsState>>"}},downloadCartPageUrl:{defaultValue:{value:"/DownloadCart"},description:"",name:"downloadCartPageUrl",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list/DownloadConfirmation.tsx#DownloadConfirmation"]={docgenInfo:Q.__docgenInfo,name:"DownloadConfirmation",path:"src/lib/containers/download_list/DownloadConfirmation.tsx#DownloadConfirmation"})}catch{}const v=t=>{const{tableConfiguration:a,cardConfiguration:n,hideDownload:l}=t,r=W(),s=be(),i=Fe();return c("div",{className:`FilterAndView ${i.topLevelControlsState.showFacetFilter?J:Z}`,children:[a?e(Pe,{...a,synapseContext:r,queryContext:s,queryVisualizationContext:i,hideDownload:l}):e(p,{}),n?e(We,{...n}):e(p,{}),e(xe,{})]})};try{v.displayName="FilterAndView",v.__docgenInfo={description:"",displayName:"FilterAndView",props:{tableConfiguration:{defaultValue:null,description:"",name:"tableConfiguration",required:!0,type:{name:'Omit<SynapseTableProps, "synapseContext" | "queryContext" | "queryVisualizationContext"> | undefined'}},cardConfiguration:{defaultValue:null,description:"",name:"cardConfiguration",required:!0,type:{name:"CardConfiguration | undefined"}},hideDownload:{defaultValue:null,description:"",name:"hideDownload",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/query_wrapper_plot_nav/FilterAndView.tsx#FilterAndView"]={docgenInfo:v.__docgenInfo,name:"FilterAndView",path:"src/lib/containers/query_wrapper_plot_nav/FilterAndView.tsx#FilterAndView"})}catch{}const tt=window.React,nt="isShowingFacetFilters",ot="isHidingFacetFilters",P=t=>{const[a,n]=tt.useState(!1),{searchParams:l,sql:r,sqlOperator:s,tableConfiguration:i,name:C,cardConfiguration:m,facetsToPlot:u,facetsToFilter:S,hideDownload:f,hideQueryCount:w,hideSqlEditorControl:y,searchConfiguration:d,limit:M=ce,downloadCartPageUrl:L,initQueryJson:O,showLastUpdatedOn:k}=t,_=Ee(r,l,s),g=O?JSON.parse(O):{sql:_,limit:M,offset:0},b=_e(g.sql),{data:F}=ue(b),A=F&&Te(F)&&F.isSearchEnabled,T={entityId:b,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:me|$|pe|fe|ye|he|X|Ce,query:g};return e("div",{className:"QueryWrapperPlotNav",children:e(i?Ie:Ye,{...t,initQueryRequest:T,children:e(Ne,{unitDescription:"results",rgbIndex:t.rgbIndex,facetAliases:t.facetAliases,visibleColumnCount:t.visibleColumnCount,defaultShowFacetVisualization:t.defaultShowFacetVisualization,defaultShowSearchBar:t.defaultShowSearchBox||A,showLastUpdatedOn:k,children:e(Re,{children:h=>{if(h===void 0)throw new Error("No queryContext found when using QueryContextConsumer");const N=h==null?void 0:h.isFacetsAvailable;return e(Oe,{children:o=>{if(o===void 0)throw new Error("No queryVisualizationContext found when using QueryVisualizationContextConsumer");const E=(o==null?void 0:o.topLevelControlsState.showFacetFilter)||(o==null?void 0:o.topLevelControlsState.showFacetFilter)===void 0;return c(p,{children:[e("div",{className:`ErrorBannerWrapper ${E?nt:ot}`,children:e(ze,{})}),A?e(Me,{helpUrl:d==null?void 0:d.fullTextSearchHelpURL}):e(ke,{...d,queryContext:h,queryVisualizationContext:o}),e(Ve,{}),e(Q,{getLastQueryRequest:h.getLastQueryRequest,topLevelControlsState:o.topLevelControlsState,setTopLevelControlsState:o.setTopLevelControlsState,downloadCartPageUrl:L}),e(Ue,{showColumnSelection:i!==void 0,name:C,hideDownload:f,hideQueryCount:w,hideFacetFilterControl:!N,hideVisualizationsControl:!N,hideSqlEditorControl:y}),N&&e(p,{children:e(Ae,{facetsToFilter:S})}),e(Ke,{facetsToPlot:u}),e(v,{tableConfiguration:i,hideDownload:f,cardConfiguration:m}),a&&e(Be,{getLastQueryRequest:h.getLastQueryRequest,onClose:()=>n(!1)})]})}})}})})})})};var ee=P;try{P.displayName="QueryWrapperPlotNav",P.__docgenInfo={description:"",displayName:"QueryWrapperPlotNav",props:{searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"{ facetValue: string; }"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},shouldDeepLink:{defaultValue:null,description:"",name:"shouldDeepLink",required:!1,type:{name:"boolean"}},onQueryChange:{defaultValue:null,description:"If onQueryChange is set, the callback will be invoked when the Query changes",name:"onQueryChange",required:!1,type:{name:"((newQueryJson: string) => void)"}},onQueryResultBundleChange:{defaultValue:null,description:"If onQueryResultBundleChange is set, the callback will be invoked when the QueryResultBundle changes",name:"onQueryResultBundleChange",required:!1,type:{name:"((newQueryResultBundleJson: string) => void)"}},initQueryJson:{defaultValue:null,description:"If initQueryJson is set, it will be the Query used in the initial QueryBundleRequest",name:"initQueryJson",required:!1,type:{name:"string"}},tableConfiguration:{defaultValue:null,description:"",name:"tableConfiguration",required:!1,type:{name:'Omit<SynapseTableProps, "synapseContext" | "queryContext" | "queryVisualizationContext">'}},cardConfiguration:{defaultValue:null,description:"",name:"cardConfiguration",required:!1,type:{name:"CardConfiguration"}},searchConfiguration:{defaultValue:null,description:"",name:"searchConfiguration",required:!1,type:{name:'Omit<SearchV2Props, "queryContext" | "queryVisualizationContext">'}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToFilter:{defaultValue:null,description:"",name:"facetsToFilter",required:!1,type:{name:"string[]"}},visibleColumnCount:{defaultValue:null,description:"",name:"visibleColumnCount",required:!1,type:{name:"number"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},hideDownload:{defaultValue:null,description:"",name:"hideDownload",required:!1,type:{name:"boolean"}},hideQueryCount:{defaultValue:null,description:"",name:"hideQueryCount",required:!1,type:{name:"boolean"}},hideSqlEditorControl:{defaultValue:null,description:"",name:"hideSqlEditorControl",required:!1,type:{name:"boolean"}},defaultColumn:{defaultValue:null,description:"",name:"defaultColumn",required:!1,type:{name:"string"}},defaultShowFacetVisualization:{defaultValue:null,description:"",name:"defaultShowFacetVisualization",required:!1,type:{name:"boolean"}},defaultShowSearchBox:{defaultValue:null,description:"",name:"defaultShowSearchBox",required:!1,type:{name:"boolean"}},downloadCartPageUrl:{defaultValue:null,description:"",name:"downloadCartPageUrl",required:!1,type:{name:"string"}},showLastUpdatedOn:{defaultValue:null,description:"",name:"showLastUpdatedOn",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},hideVisualizationsControl:{defaultValue:null,description:"",name:"hideVisualizationsControl",required:!1,type:{name:"boolean"}},hideFacetFilterControl:{defaultValue:null,description:"",name:"hideFacetFilterControl",required:!1,type:{name:"boolean"}},showColumnSelection:{defaultValue:null,description:"",name:"showColumnSelection",required:!1,type:{name:"boolean"}},customControls:{defaultValue:null,description:"",name:"customControls",required:!1,type:{name:"CustomControl[]"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/query_wrapper_plot_nav/QueryWrapperPlotNav.tsx#QueryWrapperPlotNav"]={docgenInfo:P.__docgenInfo,name:"QueryWrapperPlotNav",path:"src/lib/containers/query_wrapper_plot_nav/QueryWrapperPlotNav.tsx#QueryWrapperPlotNav"})}catch{}var ho={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import QueryWrapperPlotNav from './QueryWrapperPlotNav'
import { EXPERIMENTAL_TOOL, GENERIC_CARD } from '../../utils/SynapseConstants'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Explore/QueryWrapperPlotNav',
  component: QueryWrapperPlotNav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof QueryWrapperPlotNav>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QueryWrapperPlotNav> = args => (
  <QueryWrapperPlotNav {...args} />
)

export const Cards = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cards.args = {
  name: 'Tools',
  sql: 'SELECT * FROM syn26438037',
  limit: 5,
  defaultShowFacetVisualization: false,
  defaultShowSearchBox: true,
  shouldDeepLink: true,
  searchConfiguration: {
    fullTextSearchHelpURL:
      'https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html',
  },
  cardConfiguration: {
    type: GENERIC_CARD,
    titleLinkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/Tools/DetailsPage',
      URLColumnName: 'resourceId',
      matchColumnName: 'resourceId',
      overrideLinkURLColumnName: 'biobankURL',
    },
    secondaryLabelLimit: 4,
    genericCardSchema: {
      type: EXPERIMENTAL_TOOL,
      title: 'resourceName',
      subTitle: 'resourceType',
      description: 'description',
      secondaryLabels: [
        'rrid',
        'synonyms',
        'cellLineCategory',
        'cellLineDisease',
        'modelofManifestation',
        'backgroundStrain',
        'backgroundSubstrain',
        'animalModelDisease',
        'animalModelOfManifestation',
        'targetAntigen',
        'reactiveSpecies',
        'hostOrganism',
        'specimenTissueType',
        'specimenPreparationMethod',
        'diseaseType',
        'tumorType',
        'specimenFormat',
        'specimenType',
      ],
    },
    labelLinkConfig: [
      {
        isMarkdown: true,
        matchColumnName: 'rrid',
        tooltipText:
          'This is to demo a custom tooltip that describes column data',
      },
    ],
  },
}

export const FileView = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FileView.args = {
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
    columnLinks: [
      {
        matchColumnName: 'study',
        isMarkdown: false,
        baseURL: 'Explore/Studies/DetailsPage',
        URLColumnName: 'Study_Name',
        wrapValueWithParens: true,
      },
    ],
  },
  searchConfiguration: {
    searchable: [
      'study',
      'dataType',
      'assay',
      'organ',
      'tissue',
      'species',
      'diagnosis',
      'sex',
      'consortium',
      'grant',
      'modelSystemName',
      'treatmentType',
      'specimenID',
      'individualID',
      'individualIdSource',
      'specimenIdSource',
      'resourceType',
      'dataSubtype',
      'metadataType',
      'assayTarget',
      'analysisType',
      'cellType',
      'nucleicAcidSource',
      'fileFormat',
      'group',
      'name',
      'isModelSystem',
      'isConsortiumAnalysis',
      'isMultiSpecimen',
      'metaboliteType',
      'chromosome',
    ],
  },
  shouldDeepLink: true,
  visibleColumnCount: 10,
  rgbIndex: 1,
  name: 'Data',
  sqlOperator: '=',
  sql: 'SELECT * FROM syn11346063.28',
  downloadCartPageUrl: '#/Other%20Components?id=downloadcartpage',
  hideSqlEditorControl: false,
}

export const Dataset = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dataset.args = {
  sql: 'SELECT * FROM syn26302617',
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
  },
  name: 'Dataset Demo',
  sqlOperator: '=',
  downloadCartPageUrl: '#/Other%20Components?id=downloadcartpage',
  hideSqlEditorControl: false,
  shouldDeepLink: false,
}

export const DatasetCollection = Template.bind({})
DatasetCollection.args = {
  sql: 'SELECT * FROM syn33199585',
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
  },
  name: 'Dataset Collection Demo',
  sqlOperator: '=',
  downloadCartPageUrl: '#/Other%20Components?id=downloadcartpage',
  hideSqlEditorControl: false,
  shouldDeepLink: false,
}
`,locationsMap:{cards:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"file-view":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},dataset:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"dataset-collection":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"Explore/QueryWrapperPlotNav",component:ee,argTypes:{}};const x=t=>e(ee,{...t}),at=x.bind({});at.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:Se,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:we,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const it=x.bind({});it.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",downloadCartPageUrl:"#/Other%20Components?id=downloadcartpage",hideSqlEditorControl:!1};const rt=x.bind({});rt.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",downloadCartPageUrl:"#/Other%20Components?id=downloadcartpage",hideSqlEditorControl:!1,shouldDeepLink:!1};const st=x.bind({});st.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",downloadCartPageUrl:"#/Other%20Components?id=downloadcartpage",hideSqlEditorControl:!1,shouldDeepLink:!1};const Co=["Cards","FileView","Dataset","DatasetCollection"];export{at as Cards,rt as Dataset,st as DatasetCollection,it as FileView,Co as __namedExportsOrder,ho as default};
//# sourceMappingURL=QueryWrapperPlotNav.stories.5b0d29f9.js.map
