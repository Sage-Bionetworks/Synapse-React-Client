import{X as oe,H as ae,Y as ie,cH as re,w as W,cs as se,cI as le,f as $,m as X,cJ as de,p as ue,t as ce,B as me,h as pe,j as fe,k as ye,l as he,n as Ce,G as Se,a5 as we}from"./index.b510e4be.js";import{E as ge,k as Te}from"./EntityTypeUtils.f3b8443e.js";import{i as Ee,p as _e}from"./sqlFunctions.b49ac766.js";import"./assert.50ccfc45.js";import{c as De}from"./calculateFriendlyFileSize.9c20c573.js";import{h as Le}from"./moment.53181859.js";import{T as Y}from"./SynapseTableConstants.07ecdebd.js";import{S as U,j as J,k as Z,d as be,e as Fe,Q as Ne,a as Re,l as Oe,m as Ae,f as Ie}from"./TotalQueryResults.138ae1c1.js";import{I as B}from"./IconSvg.05ece234.js";import{d as z}from"./Tooltip.3e761ad5.js";import{a as c,j as e,F as p}from"./jsx-runtime.2e925369.js";import{u as K}from"./use-deep-compare-effect.esm.76673280.js";import{u as qe}from"./useGetDownloadListStatistics.8b79b097.js";import{a as Qe}from"./useGetEntityChildren.3bffafcc.js";import{k as H}from"./ToastMessage.093903bc.js";import{A as ve}from"./FullWidthAlert.4dd40e61.js";import{S as Pe,L as xe,F as Me,a as ke,b as Ve,T as Ue,M as Be}from"./LastUpdatedOn.dbea2cd3.js";import{C as We,I as Ye}from"./InfiniteQueryWrapper.4dccebc7.js";import{Q as ze,b as Ke}from"./FacetNav.545aa253.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Button.c582ea4c.js";import"./index.f252d424.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.6d10a3ac.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";import"./iframe.2d80f44f.js";import"./index.8cde812d.js";import"./Skeleton.3d9d9757.js";import"./ColumnType.744125d2.js";import"./queryUtils.66a7f9eb.js";import"./cloneDeep.4d6fd81b.js";import"./unCamelCase.d070537b.js";import"./ElementWithTooltip.b37e0a18.js";import"./index.a1a2bd54.js";import"./index.5ef2ed87.js";import"./Dropdown.c5bbe35b.js";import"./Modal.50036a73.js";import"./useWaitForDOMRef.679b0e64.js";import"./useWillUnmount.4a16e5cd.js";import"./index.06f4a415.js";import"./usePopperMarginModifiers.fc55270a.js";import"./isRequiredForA11y.61bbc671.js";import"./Collapse.ccf7adfd.js";import"./slicedToArray.e9a7fa03.js";import"./useGetInfoFromIds.fe41ec76.js";import"./uniq.d043cd79.js";import"./toInteger.7636b6c4.js";import"./_cacheHas.e2d6df43.js";import"./_baseDifference.7085c2fb.js";import"./_setToArray.a82100c8.js";import"./without.7c26e8e7.js";import"./Checkbox.ced79741.js";import"./IconMinus.f135ad99.js";import"./RadioGroup.3f583c0c.js";import"./RangeSlider.19d66a3c.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./InfoOutlined.a7449f61.js";import"./makeStyles.38be5a7f.js";import"./Typography.5a45efab.js";import"./HelpPopover.c8cb02e5.js";import"./MarkdownPopover.f812c8a4.js";import"./MarkdownSynapse.d3fd8f03.js";import"./UserCard.1503cd11.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.cd96bfa1.js";import"./times.6bcb1021.js";import"./Overlay.7f5ddc31.js";import"./factory.bb1af4eb.js";import"./SynapseVideo.a715bf18.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.7bd939ea.js";import"./ProgrammaticInstructionsModal.7d08869e.js";import"./QueryCount.03194904.js";import"./NoData.928742eb.js";import"./InteractiveCopyIdsIcon.e9ccba2d.js";import"./ExternalFileHandleInterface.78a248c5.js";import"./HasAccessV2.547b7bf3.js";import"./useGetAccessRequirement.ddebd46d.js";import"./useEntityBundle.579345ce.js";import"./AccessRequirementList.d2e68780.js";import"./LockTwoTone.30ff49a7.js";import"./AccessApproval.493867d3.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.19233c58.js";import"./UserSearchBox.766674cc.js";import"./UserOrTeamBadge.e74b468a.js";import"./sortBy.92baede1.js";import"./_baseMap.eef3a549.js";import"./_baseIsEqual.9ca65ee0.js";import"./LoadingScreen.3ecba03a.js";import"./EntityLink.91a84fbb.js";import"./EntityIcon.e62ef0e1.js";import"./GenericCard.ef072d13.js";import"./IconList.3ac1ac2d.js";import"./FileHandleLink.fb78bdc0.js";import"./isEmpty.84a2bdff.js";import"./SearchResultsNotFound.263a233e.js";import"./NoSearchResults.19ed4ed4.js";import"./ButtonBase.3794374e.js";import"./UserCardList.cf966340.js";import"./react-sizeme.3e98de26.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";const He=200,j="ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME",G="ESTIMATED_DOWNLOAD_SPEED",je="syn12600511",Ge=t=>new Promise((a,n)=>{const l=localStorage.getItem(j),r=localStorage.getItem(G);if(l&&r&&new Date().getTime()<Number(l)){a(Number(r));return}oe(t,je).then(s=>{const i=s,C=[{associateObjectId:i.id,associateObjectType:ae.FileEntity,fileHandleId:i.dataFileHandleId}];ie({includeFileHandles:!0,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:C},t).then(u=>{const S=u.requestedFiles[0].preSignedURL,f=u.requestedFiles[0].fileHandle,w=new Date().getTime();return re(f,S).then(()=>{const y=f.contentSize/((new Date().getTime()-w-He)/1e3),d=new Date().getTime();localStorage.setItem(j,(d+1e3*60*5).toString()),localStorage.setItem(G,y.toString()),a(y)})})}).catch(s=>n(s))}),$e=window.React.useState,Xe=window.React.useEffect;function q(t){const{numFiles:a,numBytes:n}=t,{accessToken:l}=W(),[r,s]=$e({isLoading:!!n,downloadSpeed:0}),{isLoading:i,downloadSpeed:C}=r;Xe(()=>{l&&Ge(l).then(d=>{s({isLoading:!1,downloadSpeed:d})})},[l]);const m=i||C===0||!n?0:n/C,u=m===0,S=u?"":Le.duration(m,"seconds").humanize(),f=a===0,w=f?"SRC-inactive":"SRC-primary-text-color",y=u?"SRC-inactive":"SRC-primary-text-color";return c("span",{className:"download-details-container",children:[c("span",{children:[e("span",{className:w,children:e(B,{options:{icon:"file"}})}),f?e(U,{width:50}):c(p,{children:[" ",a,"\xA0files "]})]}),n&&e(z,{title:"This is the total size of all files. Zipped package(s) will likely be smaller.",enterNextDelay:Y,placement:"top",children:c("span",{"data-testid":"numBytesUI",children:[e("span",{className:y,children:e(B,{options:{icon:"database"}})}),u?e(U,{width:50}):De(n)]})}),n&&e(z,{title:"This is an estimate of how long package download will take.",enterNextDelay:Y,placement:"top",children:c("span",{"data-testid":"downloadTimeEstimateUI",children:[e("span",{className:y,children:e(B,{options:{icon:"clock"}})}),i&&a>0?e(U,{width:50}):S]})})]})}try{q.displayName="DownloadDetails",q.__docgenInfo={description:`Displays download information including number of files, size of download, and time to download.
Prefer to use {@link download_list_v2 /DownloadDetails} instead, particularly when you have information about file packaging in/eligibility`,displayName:"DownloadDetails",props:{numFiles:{defaultValue:null,description:"",name:"numFiles",required:!0,type:{name:"number"}},numBytes:{defaultValue:null,description:"",name:"numBytes",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list/DownloadDetails.tsx#DownloadDetails"]={docgenInfo:q.__docgenInfo,name:"DownloadDetails",path:"src/lib/containers/download_list/DownloadDetails.tsx#DownloadDetails"})}catch{}const Je=window.React.useCallback,I=window.React.useState;async function Ze(t,a,n,l,r){try{const s={query:n==null?void 0:n.query,concreteType:"org.sagebionetworks.repo.model.download.AddToDownloadListRequest",parentId:l};return await de(s,t),H("File(s) were successfully added to your Download Cart.","success",{primaryButtonConfig:{text:"View Download Cart",onClick:r}}),a(),[0,""]}catch(s){return H("danger",void 0,s.reason),a(),[0,""]}}const R={[2]:{className:"alert-info",infoText:"Would you like to add all files to the download cart?",closeText:"Cancel"},[3]:{className:"alert-info",infoText:c(p,{children:["Note: Files that you add will be mixed in with the files already in your download cart.",e("br",{}),"If you don\u2019t want to mix these files, clear your download cart before continuing."]}),closeText:"Cancel"},[1]:{className:"alert-info",infoText:"Adding Files To List",closeText:"Cancel"},[0]:{className:"alert-info",infoText:"Calculating File Size",closeText:"Cancel"},[4]:{className:"alert-danger",closeText:"Close",infoText:c(p,{children:["Please ",e(le,{style:{color:"#337ab7"}})," to add files to your download cart."]})}},et=t=>{switch(t.status){case 0:case 1:return c("div",{children:[e("span",{className:"spinner white"}),e("span",{className:"spinner__text",children:R[t.status].infoText})]});case 4:return e(p,{children:R[t.status].infoText});case 2:case 3:return c(p,{children:[e(q,{numFiles:t.fileCount,numBytes:t.fileSize}),e("span",{className:"download-confirmation-infoText",children:R[t.status].infoText})]});default:return e(p,{})}},Q=({getLastQueryRequest:t,folderId:a,fnClose:n,setTopLevelControlsState:l,topLevelControlsState:r,downloadCartPageUrl:s="/DownloadCart"})=>{const{accessToken:i}=W(),{showDownloadConfirmation:C=!0}=r!=null?r:{},[m,u]=I(i?0:4),[S,f]=I(0),[w,y]=I(),{data:d,refetch:M}=qe(),L=t(),[O,k]=I(!1),_=Je((o,E,D)=>{if(i&&D){const te=D.totalNumberOfFiles>0,ne=o!=null?o:0;u(te?3:2),f(ne),y(E)}},[i]),{data:g,isSuccess:b}=Qe({parentId:a,includeSumFileSizes:!0,includeTotalChildCount:!0,includeTypes:[ge.FILE]});K(()=>{b&&g&&d&&_(g.totalChildCount,g.sumFileSizesBytes,d)},[_,a,b,g,d]);const F=$|X,A={...L,partMask:F},{data:T}=se(A);K(()=>{var o,E;if(T&&d){const D=(o=T.sumFileSizes)==null?void 0:o.greaterThan;_(T.queryCount,D||(E=T.sumFileSizes)==null?void 0:E.sumFileSizesBytes,d)}},[_,L,T,d]);const V=n?()=>n():()=>{l&&l(o=>({...o,showDownloadConfirmation:!1}))},h=async()=>{if(!i)u(4);else{u(1);const D=(await Ze(i,V,L,a,()=>k(!0)))[0];u(D),M()}};O&&(s?window.location.href=s:console.error("Missing the Download Cart Page URL in the component configuration."));const N=r==null?void 0:r.showFacetFilter;return e(p,{children:c(ve,{dismissible:!1,show:!0,variant:"info",transition:!1,className:`download-confirmation ${R[m].className} ${C?"":"hidden"}
          ${N?J:Z}
        `,children:[e(et,{status:m,fileCount:S,fileSize:w}),c("div",{className:"download-confirmation-action",children:[m!==1&&e("button",{className:"btn btn-link",onClick:V,children:R[m].closeText}),(m===2||m===3)&&e("button",{type:"button",className:"btn btn-primary",onClick:h,children:"Add"})]})]})})};try{Q.displayName="DownloadConfirmation",Q.__docgenInfo={description:"",displayName:"DownloadConfirmation",props:{fnClose:{defaultValue:null,description:"",name:"fnClose",required:!1,type:{name:"(() => void)"}},getLastQueryRequest:{defaultValue:null,description:"",name:"getLastQueryRequest",required:!1,type:{name:"(() => QueryBundleRequest)"}},folderId:{defaultValue:null,description:"",name:"folderId",required:!1,type:{name:"string"}},topLevelControlsState:{defaultValue:null,description:"",name:"topLevelControlsState",required:!1,type:{name:"TopLevelControlsState"}},setTopLevelControlsState:{defaultValue:null,description:"",name:"setTopLevelControlsState",required:!1,type:{name:"Dispatch<SetStateAction<TopLevelControlsState>>"}},downloadCartPageUrl:{defaultValue:{value:"/DownloadCart"},description:"",name:"downloadCartPageUrl",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list/DownloadConfirmation.tsx#DownloadConfirmation"]={docgenInfo:Q.__docgenInfo,name:"DownloadConfirmation",path:"src/lib/containers/download_list/DownloadConfirmation.tsx#DownloadConfirmation"})}catch{}const v=t=>{const{tableConfiguration:a,cardConfiguration:n,hideDownload:l}=t,r=W(),s=be(),i=Fe();return c("div",{className:`FilterAndView ${i.topLevelControlsState.showFacetFilter?J:Z}`,children:[a?e(Pe,{...a,synapseContext:r,queryContext:s,queryVisualizationContext:i,hideDownload:l}):e(p,{}),n?e(We,{...n}):e(p,{}),e(xe,{})]})};try{v.displayName="FilterAndView",v.__docgenInfo={description:"",displayName:"FilterAndView",props:{tableConfiguration:{defaultValue:null,description:"",name:"tableConfiguration",required:!0,type:{name:'Omit<SynapseTableProps, "synapseContext" | "queryContext" | "queryVisualizationContext"> | undefined'}},cardConfiguration:{defaultValue:null,description:"",name:"cardConfiguration",required:!0,type:{name:"CardConfiguration | undefined"}},hideDownload:{defaultValue:null,description:"",name:"hideDownload",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/query_wrapper_plot_nav/FilterAndView.tsx#FilterAndView"]={docgenInfo:v.__docgenInfo,name:"FilterAndView",path:"src/lib/containers/query_wrapper_plot_nav/FilterAndView.tsx#FilterAndView"})}catch{}const tt=window.React,nt="isShowingFacetFilters",ot="isHidingFacetFilters",P=t=>{const[a,n]=tt.useState(!1),{searchParams:l,sql:r,sqlOperator:s,tableConfiguration:i,name:C,cardConfiguration:m,facetsToPlot:u,facetsToFilter:S,hideDownload:f,hideQueryCount:w,hideSqlEditorControl:y,searchConfiguration:d,limit:M=ce,downloadCartPageUrl:L,initQueryJson:O,showLastUpdatedOn:k}=t,_=Ee(r,l,s),g=O?JSON.parse(O):{sql:_,limit:M,offset:0},b=_e(g.sql),{data:F}=ue(b),A=F&&Te(F)&&F.isSearchEnabled,T={entityId:b,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:me|$|pe|fe|ye|he|X|Ce,query:g};return e("div",{className:"QueryWrapperPlotNav",children:e(i?Ie:Ye,{...t,initQueryRequest:T,children:e(Ne,{unitDescription:"results",rgbIndex:t.rgbIndex,facetAliases:t.facetAliases,visibleColumnCount:t.visibleColumnCount,defaultShowFacetVisualization:t.defaultShowFacetVisualization,defaultShowSearchBar:t.defaultShowSearchBox||A,showLastUpdatedOn:k,children:e(Re,{children:h=>{if(h===void 0)throw new Error("No queryContext found when using QueryContextConsumer");const N=h==null?void 0:h.isFacetsAvailable;return e(Oe,{children:o=>{if(o===void 0)throw new Error("No queryVisualizationContext found when using QueryVisualizationContextConsumer");const E=(o==null?void 0:o.topLevelControlsState.showFacetFilter)||(o==null?void 0:o.topLevelControlsState.showFacetFilter)===void 0;return c(p,{children:[e("div",{className:`ErrorBannerWrapper ${E?nt:ot}`,children:e(ze,{})}),A?e(Me,{helpUrl:d==null?void 0:d.fullTextSearchHelpURL}):e(ke,{...d,queryContext:h,queryVisualizationContext:o}),e(Ve,{}),e(Q,{getLastQueryRequest:h.getLastQueryRequest,topLevelControlsState:o.topLevelControlsState,setTopLevelControlsState:o.setTopLevelControlsState,downloadCartPageUrl:L}),e(Ue,{showColumnSelection:i!==void 0,name:C,hideDownload:f,hideQueryCount:w,hideFacetFilterControl:!N,hideVisualizationsControl:!N,hideSqlEditorControl:y}),N&&e(p,{children:e(Ae,{facetsToFilter:S})}),e(Ke,{facetsToPlot:u}),e(v,{tableConfiguration:i,hideDownload:f,cardConfiguration:m}),a&&e(Be,{getLastQueryRequest:h.getLastQueryRequest,onClose:()=>n(!1)})]})}})}})})})})};var ee=P;try{P.displayName="QueryWrapperPlotNav",P.__docgenInfo={description:"",displayName:"QueryWrapperPlotNav",props:{searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"{ facetValue: string; }"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},shouldDeepLink:{defaultValue:null,description:"",name:"shouldDeepLink",required:!1,type:{name:"boolean"}},onQueryChange:{defaultValue:null,description:"If onQueryChange is set, the callback will be invoked when the Query changes",name:"onQueryChange",required:!1,type:{name:"((newQueryJson: string) => void)"}},onQueryResultBundleChange:{defaultValue:null,description:"If onQueryResultBundleChange is set, the callback will be invoked when the QueryResultBundle changes",name:"onQueryResultBundleChange",required:!1,type:{name:"((newQueryResultBundleJson: string) => void)"}},initQueryJson:{defaultValue:null,description:"If initQueryJson is set, it will be the Query used in the initial QueryBundleRequest",name:"initQueryJson",required:!1,type:{name:"string"}},tableConfiguration:{defaultValue:null,description:"",name:"tableConfiguration",required:!1,type:{name:'Omit<SynapseTableProps, "synapseContext" | "queryContext" | "queryVisualizationContext">'}},cardConfiguration:{defaultValue:null,description:"",name:"cardConfiguration",required:!1,type:{name:"CardConfiguration"}},searchConfiguration:{defaultValue:null,description:"",name:"searchConfiguration",required:!1,type:{name:'Omit<SearchV2Props, "queryContext" | "queryVisualizationContext">'}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToFilter:{defaultValue:null,description:"",name:"facetsToFilter",required:!1,type:{name:"string[]"}},visibleColumnCount:{defaultValue:null,description:"",name:"visibleColumnCount",required:!1,type:{name:"number"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},hideDownload:{defaultValue:null,description:"",name:"hideDownload",required:!1,type:{name:"boolean"}},hideQueryCount:{defaultValue:null,description:"",name:"hideQueryCount",required:!1,type:{name:"boolean"}},hideSqlEditorControl:{defaultValue:null,description:"",name:"hideSqlEditorControl",required:!1,type:{name:"boolean"}},defaultColumn:{defaultValue:null,description:"",name:"defaultColumn",required:!1,type:{name:"string"}},defaultShowFacetVisualization:{defaultValue:null,description:"",name:"defaultShowFacetVisualization",required:!1,type:{name:"boolean"}},defaultShowSearchBox:{defaultValue:null,description:"",name:"defaultShowSearchBox",required:!1,type:{name:"boolean"}},downloadCartPageUrl:{defaultValue:null,description:"",name:"downloadCartPageUrl",required:!1,type:{name:"string"}},showLastUpdatedOn:{defaultValue:null,description:"",name:"showLastUpdatedOn",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},hideVisualizationsControl:{defaultValue:null,description:"",name:"hideVisualizationsControl",required:!1,type:{name:"boolean"}},hideFacetFilterControl:{defaultValue:null,description:"",name:"hideFacetFilterControl",required:!1,type:{name:"boolean"}},showColumnSelection:{defaultValue:null,description:"",name:"showColumnSelection",required:!1,type:{name:"boolean"}},customControls:{defaultValue:null,description:"",name:"customControls",required:!1,type:{name:"CustomControl[]"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/query_wrapper_plot_nav/QueryWrapperPlotNav.tsx#QueryWrapperPlotNav"]={docgenInfo:P.__docgenInfo,name:"QueryWrapperPlotNav",path:"src/lib/containers/query_wrapper_plot_nav/QueryWrapperPlotNav.tsx#QueryWrapperPlotNav"})}catch{}var co={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"file-view":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},dataset:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"dataset-collection":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"Explore/QueryWrapperPlotNav",component:ee,argTypes:{}};const x=t=>e(ee,{...t}),at=x.bind({});at.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:Se,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:we,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const it=x.bind({});it.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",downloadCartPageUrl:"#/Other%20Components?id=downloadcartpage",hideSqlEditorControl:!1};const rt=x.bind({});rt.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",downloadCartPageUrl:"#/Other%20Components?id=downloadcartpage",hideSqlEditorControl:!1,shouldDeepLink:!1};const st=x.bind({});st.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",downloadCartPageUrl:"#/Other%20Components?id=downloadcartpage",hideSqlEditorControl:!1,shouldDeepLink:!1};const mo=["Cards","FileView","Dataset","DatasetCollection"];export{at as Cards,rt as Dataset,st as DatasetCollection,it as FileView,mo as __namedExportsOrder,co as default};
//# sourceMappingURL=QueryWrapperPlotNav.stories.c3840798.js.map
