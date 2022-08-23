import{w as Y,k as D,l as M,h as I,B as Q}from"./index.b1bae600.js";import{p as V}from"./sqlFunctions.b49ac766.js";import{d as J,e as H,f as B,Q as L}from"./TotalQueryResults.b705f50d.js";import{g as $,e as X,a as z,F as W,Q as v}from"./FacetNav.d117b3b9.js";import{c as G,P as Z}from"./factory.a4dafec8.js";import{r as ee}from"./react-sizeme.256c83c2.js";import{g as te}from"./ColorGradient.16f0e0f2.js";import{u as N}from"./unCamelCase.d070537b.js";import{l as ae}from"./LoadingScreen.efad5b29.js";import{j as e,a as d,F as q}from"./jsx-runtime.2e925369.js";import{I as ne}from"./index.82ed59e1.js";import{B as re}from"./Button.c582ea4c.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.670aaa99.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Alert.5f67d407.js";import"./index.f252d424.js";import"./Transition.8d049b2f.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.024abc98.js";import"./iframe.c68e29f3.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.2998c199.js";import"./Skeleton.3847d4da.js";import"./ColumnType.744125d2.js";import"./TypeUtils.a2c41307.js";import"./use-deep-compare-effect.esm.76673280.js";import"./queryUtils.557bd3ea.js";import"./cloneDeep.4fcc1814.js";import"./ElementWithTooltip.ee55d79e.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.4a41f208.js";import"./Tooltip.8a506c05.js";import"./createSvgIcon.0bfcb8f8.js";import"./slicedToArray.e9a7fa03.js";import"./useTheme.05af6e65.js";import"./makeStyles.72aedf90.js";import"./InfoOutlined.d201fe9f.js";import"./Dropdown.b16d4176.js";import"./Modal.9056450d.js";import"./useWaitForDOMRef.37941199.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.4ced5867.js";import"./isRequiredForA11y.61bbc671.js";import"./Collapse.8d0a3062.js";import"./useGetInfoFromIds.c4ab08f9.js";import"./uniq.dbc5099d.js";import"./toInteger.17f7c8af.js";import"./_cacheHas.6e058e6d.js";import"./_baseDifference.d4e44352.js";import"./_setToArray.a82100c8.js";import"./without.57218429.js";import"./Checkbox.85bb9cd4.js";import"./uniqueId.fa0dadf5.js";import"./IconMinus.f135ad99.js";import"./RadioGroup.16868f96.js";import"./moment.53181859.js";import"./RangeSlider.19d66a3c.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./colorPalette.8145e2e2.js";import"./Typography.3a9e45b6.js";import"./index.5ef2ed87.js";const se=window.React.useEffect,O=window.React.useState,oe=G(Z),ie={showlegend:!1,annotations:[],margin:{l:0,r:0,b:0,t:0,pad:0},yaxis:{visible:!1,showgrid:!1},xaxis:{visible:!1,showgrid:!1}},f=({title:t,description:r,facetsToPlot:n,detailsPagePath:i})=>{const{accessToken:c}=Y(),{data:a,isLoadingNewBundle:o}=J(),{facetAliases:g,rgbIndex:u}=H(),[m,S]=O([]),[_,k]=O([]),[A,j]=O(""),{colorPalette:K}=te(u!=null?u:0,2);if(se(()=>{var P;if(!(!n||!a)){const C=l=>{var p,y;return(y=(p=a==null?void 0:a.columnModels)==null?void 0:p.find(R=>R.name===l.columnName))==null?void 0:y.columnType},T=$(a,n);k(T),Promise.all(T.map(async(l,p)=>await X(l,C(l),p+1,"PIE",c))).then(l=>S(l));const s=(P=a==null?void 0:a.facets)==null?void 0:P.map(l=>{const p=l.facetValues;if(p){const y=p.filter(R=>R.isSelected);return y.length>0?y[0]:void 0}else return})[0];s&&s.value&&j(s==null?void 0:s.value)}},[n,a]),o||!m||!_||_.length===0)return e("div",{className:"FacetPlotsCard FacetPlotsCard__loading SRC-centerContentColumn",children:ae});{let P=e(q,{});i&&A&&(P=e("div",{className:"FacetPlotsCard__link",children:d("a",{href:i,children:["View ",A]})}));const C=m.length>1,T=t!=null?t:C?A:N(_[0].columnName,g);return d("div",{className:"FacetPlotsCard cardContainer",children:[d("div",{className:"FacetPlotsCard__titlebar",style:{backgroundColor:K[0].replace(")",",.05)")},children:[e("span",{className:"FacetPlotsCard__title",children:T}),r&&e("span",{className:"FacetPlotsCard__description",children:r}),P,o&&e("span",{style:{marginLeft:"2px"},className:"spinner"})]}),e("div",{className:"FacetPlotsCard__body",children:m.map((s,l)=>d("div",{children:[l!==0&&e("hr",{}),C&&e("div",{className:"FacetPlotsCard__body__facetname",children:e("span",{children:N(_[l].columnName,g)})}),d("div",{className:"FacetPlotsCard__body__row",children:[e(ee.SizeMe,{monitorHeight:!0,children:({size:p})=>{var y;return e("div",{className:"FacetPlotsCard__body__plot",children:e(oe,{layout:ie,data:(y=s==null?void 0:s.data)!=null?y:[],style:z(p.width,"PIE",150),config:{displayModeBar:!1}},`${n[l]}-${p.width}`)})}}),e(W,{labels:s==null?void 0:s.labels,colors:s==null?void 0:s.colors,isExpanded:!1})]})]},l))})]})}};try{f.displayName="FacetPlotsCard",f.__docgenInfo={description:"",displayName:"FacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"]={docgenInfo:f.__docgenInfo,name:"FacetPlotsCard",path:"src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"})}catch{}function le(t,r,n){return{entityId:V(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:D|M|I|Q,query:{sql:t,offset:0,limit:25,selectedFacets:[{columnName:r,facetValues:[n],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]}}}const h=t=>{const{title:r,description:n,sql:i,facetsToPlot:c,rgbIndex:a,selectFacetColumnName:o,selectFacetColumnValue:g,detailsPagePath:u,...m}=t,S=le(i,o,g);return e("div",{className:"QueryPerFacetPlotsCard",children:e(B,{...m,initQueryRequest:S,children:d(L,{rgbIndex:a,...m,children:[e(v,{}),e(f,{title:r,description:n,facetsToPlot:c,detailsPagePath:u})]})})})};try{h.displayName="QueryPerFacetPlotsCard",h.__docgenInfo={description:"",displayName:"QueryPerFacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},selectFacetColumnName:{defaultValue:null,description:"",name:"selectFacetColumnName",required:!0,type:{name:"string"}},selectFacetColumnValue:{defaultValue:null,description:"",name:"selectFacetColumnValue",required:!0,type:{name:"string"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"]={docgenInfo:h.__docgenInfo,name:"QueryPerFacetPlotsCard",path:"src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"})}catch{}function F(t){return{entityId:V(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:D|M|I|Q,query:{sql:t,offset:0,limit:1}}}const b=t=>{const{sql:r,facetsToPlot:n,rgbIndex:i,facetAliases:c}=t,a=F(r);return e("div",{className:"SingleQueryFacetPlotsCards",children:e(B,{initQueryRequest:a,children:d(L,{rgbIndex:i,facetAliases:c,children:[e(v,{}),n==null?void 0:n.map(o=>e(f,{facetsToPlot:[o]},`FacetPlotCard-${o}`))]})})})};try{F.displayName="getQueryRequest",F.__docgenInfo={description:"",displayName:"getQueryRequest",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"]={docgenInfo:F.__docgenInfo,name:"getQueryRequest",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"})}catch{}try{b.displayName="SingleQueryFacetPlotsCards",b.__docgenInfo={description:"",displayName:"SingleQueryFacetPlotsCards",props:{rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"]={docgenInfo:b.__docgenInfo,name:"SingleQueryFacetPlotsCards",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"})}catch{}const x=t=>{const{configs:r,rgbIndex:n,sql:i}=t,c=r[0].selectFacetColumnName;return e("div",{className:`FeaturedDataPlots${c?"__queryPerCard":"__singleQuery"}`,children:r.map(a=>d(q,{children:[c&&e(h,{...a,rgbIndex:n,sql:i}),!c&&e(b,{...a,rgbIndex:n,sql:i})]}))})};try{x.displayName="FeaturedDataPlots",x.__docgenInfo={description:"",displayName:"FeaturedDataPlots",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"QueryFacetPlotsCardsProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},explorePagePath:{defaultValue:null,description:"",name:"explorePagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"]={docgenInfo:x.__docgenInfo,name:"FeaturedDataPlots",path:"src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"})}catch{}const de=window.React.useState,E=t=>{var g;const[r,n]=de(0),{configs:i,rgbIndex:c,sql:a}=t,o=i[r];return d("div",{className:"FeaturedDataTabs",children:[e("div",{className:"FeaturedDataTabs__tabs",children:i.map((u,m)=>e("div",{className:`FeaturedDataTabs__tabs__tab ${m===r?"FeaturedDataTabs__tabs__tab__selected":""}`,children:d("button",{className:"SRC-centerAndJustifyContent",onClick:()=>n(m),children:[u.icon&&e(ne,{type:u.icon}),e("span",{children:u.title})]})},u.title))}),o&&d(q,{children:[e(x,{...o.plotsConfig,rgbIndex:c,sql:a,explorePagePath:o.explorePagePath},`${a}-${r}`),o.explorePagePath&&e("div",{className:"bootstrap-4-backport FeaturedDataTabs__explore-all",children:d(re,{className:"pill",variant:"secondary",size:"lg",href:o.explorePagePath,children:["EXPLORE ALL ",(g=o.exploreObjectType)==null?void 0:g.toUpperCase()]})})]})]})};var w=E;try{E.displayName="FeaturedDataTabs",E.__docgenInfo={description:"",displayName:"FeaturedDataTabs",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"FeatureDataTabProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!0,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"]={docgenInfo:E.__docgenInfo,name:"FeaturedDataTabs",path:"src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"})}catch{}var At={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FeaturedDataTabs from './FeaturedDataTabs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home Page/FeaturedDataTabs',
  component: FeaturedDataTabs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeaturedDataTabs>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeaturedDataTabs> = args => (
  <FeaturedDataTabs {...args} />
)

export const SingleQuery = Template.bind({})
SingleQuery.args = {
  rgbIndex: 1,
  sql: 'SELECT * FROM syn21994974',
  configs: [
    {
      title: 'Studies',
      icon: 'chart2',
      explorePagePath: '/Explore/Studies',
      exploreObjectType: 'Studies',
      plotsConfig: {
        sql: 'SELECT * FROM syn21994974 WHERE ( ( "collectionType" = \\'Validation Study\\' OR "collectionType" = \\'Interventional Study\\' OR "collectionType" = \\'Observational Study\\' ) )',
        configs: [
          {
            facetsToPlot: [
              'dataCollectionMethod',
              'deviceType',
              'devicePlatform',
              'diagnosis',
              'reportedOutcome',
              'digitalAssessmentCategory',
            ],
          },
        ],
      },
    },
  ],
}

export const QueryPerCard = Template.bind({})
QueryPerCard.args = {
  rgbIndex: 1,
  sql: 'select * from syn11346063',
  configs: [
    {
      title: 'Human Studies',
      icon: 'PERSON',
      explorePagePath: '/Explore/HumanStudies',
      exploreObjectType: 'Studies',
      plotsConfig: {
        configs: [
          {
            title: 'The Religious Orders and Memory and Aging Project Study',
            description:
              'This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).',
            facetsToPlot: ['dataType', 'assay'],
            selectFacetColumnName: 'study',
            selectFacetColumnValue: 'ROSMAP',
            detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3219045',
          },
          {
            title: 'The Mount Sinai Brain Bank Study',
            description:
              'This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).',
            facetsToPlot: ['dataType', 'assay'],
            selectFacetColumnName: 'study',
            selectFacetColumnValue: 'MSBB',
            detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn3159438',
          },
          {
            title: 'The RNAseq Harmonization Study',
            description:
              'The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).',
            facetsToPlot: ['dataType', 'assay'],
            selectFacetColumnName: 'study',
            selectFacetColumnValue: 'rnaSeqReprocessing',
            detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn5550404',
          },
        ],
      },
    },
    {
      title: 'Animal Model Studies',
      icon: 'MOUSE',
      // explorePagePath:'/Explore/AnimalStudies',
      // exploreObjectType:'Studies',
      plotsConfig: {
        configs: [
          {
            title: 'The UCI MODEL-AD 5XFAD Study',
            facetsToPlot: ['dataType', 'assay'],
            selectFacetColumnName: 'study',
            selectFacetColumnValue: 'UCI_5XFAD',
            detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn16798076',
          },
          {
            title: 'The IU/Jax/Pitt MODEL-AD Primary Screen Study',
            facetsToPlot: ['dataType', 'assay'],
            selectFacetColumnName: 'study',
            selectFacetColumnValue: 'Jax.IU.Pitt_PrimaryScreen',
            detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn21595258',
          },
          {
            title: 'The IU/Jax/Pit MODEL-AD APOE/TREM2 Study',
            facetsToPlot: ['dataType', 'assay'],
            selectFacetColumnName: 'study',
            selectFacetColumnValue: 'Jax.IU.Pitt_5XFAD',
            detailsPagePath: '/Explore/Studies/DetailsPage?Study=syn17095980',
          },
        ],
      },
    },
  ],
}
`,locationsMap:{"single-query":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}},"query-per-card":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/FeaturedDataTabs",component:w,argTypes:{}};const U=t=>e(w,{...t}),ce=U.bind({});ce.args={rgbIndex:1,sql:"SELECT * FROM syn21994974",configs:[{title:"Studies",icon:"chart2",explorePagePath:"/Explore/Studies",exploreObjectType:"Studies",plotsConfig:{sql:`SELECT * FROM syn21994974 WHERE ( ( "collectionType" = 'Validation Study' OR "collectionType" = 'Interventional Study' OR "collectionType" = 'Observational Study' ) )`,configs:[{facetsToPlot:["dataCollectionMethod","deviceType","devicePlatform","diagnosis","reportedOutcome","digitalAssessmentCategory"]}]}}]};const ue=U.bind({});ue.args={rgbIndex:1,sql:"select * from syn11346063",configs:[{title:"Human Studies",icon:"PERSON",explorePagePath:"/Explore/HumanStudies",exploreObjectType:"Studies",plotsConfig:{configs:[{title:"The Religious Orders and Memory and Aging Project Study",description:"This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"ROSMAP",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3219045"},{title:"The Mount Sinai Brain Bank Study",description:"This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"MSBB",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3159438"},{title:"The RNAseq Harmonization Study",description:"The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"rnaSeqReprocessing",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn5550404"}]}},{title:"Animal Model Studies",icon:"MOUSE",plotsConfig:{configs:[{title:"The UCI MODEL-AD 5XFAD Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"UCI_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn16798076"},{title:"The IU/Jax/Pitt MODEL-AD Primary Screen Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_PrimaryScreen",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn21595258"},{title:"The IU/Jax/Pit MODEL-AD APOE/TREM2 Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn17095980"}]}}]};const Rt=["SingleQuery","QueryPerCard"];export{ue as QueryPerCard,ce as SingleQuery,Rt as __namedExportsOrder,At as default};
//# sourceMappingURL=FeaturedDataTabs.stories.7200125e.js.map
