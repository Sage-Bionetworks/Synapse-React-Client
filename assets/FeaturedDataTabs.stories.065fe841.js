import{u as D,v as M,s as I,B as Q}from"./index.cdf98c81.js";import{p as V}from"./sqlFunctions.9bad0aa7.js";import{d as Y,e as J,f as B,Q as L}from"./TotalQueryResults.bc51fd5c.js";import{g as H,e as $,a as X,F as z,Q as v}from"./FacetNav.0622ee74.js";import{c as W,P as G}from"./factory.0d7085b4.js";import{r as Z}from"./react-sizeme.e9c8cb65.js";import{g as ee}from"./ColorGradient.16f0e0f2.js";import{u as N}from"./ElementWithTooltip.666d9e93.js";import{l as te}from"./LoadingScreen.85210ad1.js";import{a as ae}from"./useUserBundle.1e187889.js";import{j as e,a as d,F as q}from"./jsx-runtime.2e925369.js";import{I as re}from"./index.eef83e87.js";import{B as ne}from"./Button.77571428.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./toConsumableArray.5f669646.js";import"./withStyles.4f64abe1.js";import"./index.f252d424.js";import"./FormLabel.a635baa2.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./assert.45ccb9fa.js";import"./iframe.dedbd728.js";import"./index.8cde812d.js";import"./RegularExpressions.b87376bf.js";import"./Skeleton.bf1489f0.js";import"./ColumnType.744125d2.js";import"./TypeUtils.a2c41307.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./useGetQueryResultBundle.9714e9f9.js";import"./useInfiniteQuery.29c04cdc.js";import"./queryKeys.e0d3085f.js";import"./useEntity.c29d3474.js";import"./createSvgIcon.53013205.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./Transition.f54f11c8.js";import"./pick.85350d17.js";import"./uniqueId.4eca3697.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./isSymbol.a6e5b306.js";import"./_Uint8Array.692793fe.js";import"./_getTag.260cb500.js";import"./_setToArray.78d992a5.js";import"./hasIn.d2b152d7.js";import"./_baseSlice.50189bc5.js";import"./cloneDeep.14fe87ca.js";import"./useGetInfoFromIds.32ce6c9f.js";import"./uniq.8580a5da.js";import"./toInteger.9c26e41e.js";import"./toNumber.81238efb.js";import"./_cacheHas.e524ea96.js";import"./without.3d8723b5.js";import"./IconSvg.d5022c82.js";import"./makeStyles.5f6bad01.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./Checkbox.995e1545.js";import"./IconMinus.f135ad99.js";import"./Dropdown.edf6576c.js";import"./Modal.739750b1.js";import"./Fade.7bfbed49.js";import"./useWaitForDOMRef.088a2ede.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./Alert.ad748791.js";import"./usePopperMarginModifiers.09a60569.js";import"./isRequiredForA11y.61bbc671.js";import"./RadioGroup.ff23c1de.js";import"./moment.81704e1d.js";import"./classCallCheck.8304ed06.js";import"./inherits.428c75c6.js";import"./index.es.82d55a6a.js";import"./colorPalette.8145e2e2.js";import"./SynapseTableConstants.07ecdebd.js";import"./Typography.e08e7569.js";import"./index.5ef2ed87.js";const se=window.React.useEffect,O=window.React.useState,oe=W(G),ie={showlegend:!1,annotations:[],margin:{l:0,r:0,b:0,t:0,pad:0},yaxis:{visible:!1,showgrid:!1},xaxis:{visible:!1,showgrid:!1}},P=({title:t,description:n,facetsToPlot:r,detailsPagePath:i})=>{const{accessToken:c}=ae(),{data:a,isLoadingNewBundle:o}=Y(),{facetAliases:g,rgbIndex:u}=J(),[m,S]=O([]),[_,k]=O([]),[A,j]=O(""),{colorPalette:K}=ee(u!=null?u:0,2);if(se(()=>{var f;if(!(!r||!a)){const C=l=>{var p,y;return(y=(p=a==null?void 0:a.columnModels)==null?void 0:p.find(R=>R.name===l.columnName))==null?void 0:y.columnType},T=H(a,r);k(T),Promise.all(T.map(async(l,p)=>await $(l,C(l),p+1,"PIE",c))).then(l=>S(l));const s=(f=a==null?void 0:a.facets)==null?void 0:f.map(l=>{const p=l.facetValues;if(p){const y=p.filter(R=>R.isSelected);return y.length>0?y[0]:void 0}else return})[0];s&&s.value&&j(s==null?void 0:s.value)}},[r,a]),o||!m||!_||_.length===0)return e("div",{className:"FacetPlotsCard FacetPlotsCard__loading SRC-centerContentColumn",children:te});{let f=e(q,{});i&&A&&(f=e("div",{className:"FacetPlotsCard__link",children:d("a",{href:i,children:["View ",A]})}));const C=m.length>1,T=t!=null?t:C?A:N(_[0].columnName,g);return d("div",{className:"FacetPlotsCard cardContainer",children:[d("div",{className:"FacetPlotsCard__titlebar",style:{backgroundColor:K[0].replace(")",",.05)")},children:[e("span",{className:"FacetPlotsCard__title",children:T}),n&&e("span",{className:"FacetPlotsCard__description",children:n}),f,o&&e("span",{style:{marginLeft:"2px"},className:"spinner"})]}),e("div",{className:"FacetPlotsCard__body",children:m.map((s,l)=>d("div",{children:[l!==0&&e("hr",{}),C&&e("div",{className:"FacetPlotsCard__body__facetname",children:e("span",{children:N(_[l].columnName,g)})}),d("div",{className:"FacetPlotsCard__body__row",children:[e(Z.SizeMe,{monitorHeight:!0,children:({size:p})=>{var y;return e("div",{className:"FacetPlotsCard__body__plot",children:e(oe,{layout:ie,data:(y=s==null?void 0:s.data)!=null?y:[],style:X(p.width,"PIE",150),config:{displayModeBar:!1}},`${r[l]}-${p.width}`)})}}),e(z,{labels:s==null?void 0:s.labels,colors:s==null?void 0:s.colors,isExpanded:!1})]})]},l))})]})}};try{P.displayName="FacetPlotsCard",P.__docgenInfo={description:"",displayName:"FacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"]={docgenInfo:P.__docgenInfo,name:"FacetPlotsCard",path:"src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"})}catch{}function le(t,n,r){return{entityId:V(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:D|M|I|Q,query:{sql:t,offset:0,limit:25,selectedFacets:[{columnName:n,facetValues:[r],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]}}}const h=t=>{const{title:n,description:r,sql:i,facetsToPlot:c,rgbIndex:a,selectFacetColumnName:o,selectFacetColumnValue:g,detailsPagePath:u,...m}=t,S=le(i,o,g);return e("div",{className:"QueryPerFacetPlotsCard",children:e(B,{...m,initQueryRequest:S,children:d(L,{rgbIndex:a,...m,children:[e(v,{}),e(P,{title:n,description:r,facetsToPlot:c,detailsPagePath:u})]})})})};try{h.displayName="QueryPerFacetPlotsCard",h.__docgenInfo={description:"",displayName:"QueryPerFacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},selectFacetColumnName:{defaultValue:null,description:"",name:"selectFacetColumnName",required:!0,type:{name:"string"}},selectFacetColumnValue:{defaultValue:null,description:"",name:"selectFacetColumnValue",required:!0,type:{name:"string"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"]={docgenInfo:h.__docgenInfo,name:"QueryPerFacetPlotsCard",path:"src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"})}catch{}function F(t){return{entityId:V(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:D|M|I|Q,query:{sql:t,offset:0,limit:1}}}const b=t=>{const{sql:n,facetsToPlot:r,rgbIndex:i,facetAliases:c}=t,a=F(n);return e("div",{className:"SingleQueryFacetPlotsCards",children:e(B,{initQueryRequest:a,children:d(L,{rgbIndex:i,facetAliases:c,children:[e(v,{}),r==null?void 0:r.map(o=>e(P,{facetsToPlot:[o]},`FacetPlotCard-${o}`))]})})})};try{F.displayName="getQueryRequest",F.__docgenInfo={description:"",displayName:"getQueryRequest",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"]={docgenInfo:F.__docgenInfo,name:"getQueryRequest",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"})}catch{}try{b.displayName="SingleQueryFacetPlotsCards",b.__docgenInfo={description:"",displayName:"SingleQueryFacetPlotsCards",props:{rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"]={docgenInfo:b.__docgenInfo,name:"SingleQueryFacetPlotsCards",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"})}catch{}const x=t=>{const{configs:n,rgbIndex:r,sql:i}=t,c=n[0].selectFacetColumnName;return e("div",{className:`FeaturedDataPlots${c?"__queryPerCard":"__singleQuery"}`,children:n.map(a=>d(q,{children:[c&&e(h,{...a,rgbIndex:r,sql:i}),!c&&e(b,{...a,rgbIndex:r,sql:i})]}))})};try{x.displayName="FeaturedDataPlots",x.__docgenInfo={description:"",displayName:"FeaturedDataPlots",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"QueryFacetPlotsCardsProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},explorePagePath:{defaultValue:null,description:"",name:"explorePagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"]={docgenInfo:x.__docgenInfo,name:"FeaturedDataPlots",path:"src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"})}catch{}const de=window.React.useState,E=t=>{var g;const[n,r]=de(0),{configs:i,rgbIndex:c,sql:a}=t,o=i[n];return d("div",{className:"FeaturedDataTabs",children:[e("div",{className:"FeaturedDataTabs__tabs",children:i.map((u,m)=>e("div",{className:`FeaturedDataTabs__tabs__tab ${m===n?"FeaturedDataTabs__tabs__tab__selected":""}`,children:d("button",{className:"SRC-centerAndJustifyContent",onClick:()=>r(m),children:[u.icon&&e(re,{type:u.icon}),e("span",{children:u.title})]})},u.title))}),o&&d(q,{children:[e(x,{...o.plotsConfig,rgbIndex:c,sql:a,explorePagePath:o.explorePagePath},`${a}-${n}`),o.explorePagePath&&e("div",{className:"bootstrap-4-backport FeaturedDataTabs__explore-all",children:d(ne,{className:"pill",variant:"secondary",size:"lg",href:o.explorePagePath,children:["EXPLORE ALL ",(g=o.exploreObjectType)==null?void 0:g.toUpperCase()]})})]})]})};var U=E;try{E.displayName="FeaturedDataTabs",E.__docgenInfo={description:"",displayName:"FeaturedDataTabs",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"FeatureDataTabProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!0,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"]={docgenInfo:E.__docgenInfo,name:"FeaturedDataTabs",path:"src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"})}catch{}var Lt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"single-query":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}},"query-per-card":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/FeaturedDataTabs",component:U,argTypes:{}};const w=t=>e(U,{...t}),ce=w.bind({});ce.args={rgbIndex:1,sql:"SELECT * FROM syn21994974",configs:[{title:"Studies",icon:"chart2",explorePagePath:"/Explore/Studies",exploreObjectType:"Studies",plotsConfig:{sql:`SELECT * FROM syn21994974 WHERE ( ( "collectionType" = 'Validation Study' OR "collectionType" = 'Interventional Study' OR "collectionType" = 'Observational Study' ) )`,configs:[{facetsToPlot:["dataCollectionMethod","deviceType","devicePlatform","diagnosis","reportedOutcome","digitalAssessmentCategory"]}]}}]};const ue=w.bind({});ue.args={rgbIndex:1,sql:"select * from syn11346063",configs:[{title:"Human Studies",icon:"PERSON",explorePagePath:"/Explore/HumanStudies",exploreObjectType:"Studies",plotsConfig:{configs:[{title:"The Religious Orders and Memory and Aging Project Study",description:"This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"ROSMAP",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3219045"},{title:"The Mount Sinai Brain Bank Study",description:"This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"MSBB",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3159438"},{title:"The RNAseq Harmonization Study",description:"The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"rnaSeqReprocessing",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn5550404"}]}},{title:"Animal Model Studies",icon:"MOUSE",plotsConfig:{configs:[{title:"The UCI MODEL-AD 5XFAD Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"UCI_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn16798076"},{title:"The IU/Jax/Pitt MODEL-AD Primary Screen Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_PrimaryScreen",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn21595258"},{title:"The IU/Jax/Pit MODEL-AD APOE/TREM2 Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn17095980"}]}}]};const vt=["SingleQuery","QueryPerCard"];export{ue as QueryPerCard,ce as SingleQuery,vt as __namedExportsOrder,Lt as default};
//# sourceMappingURL=FeaturedDataTabs.stories.065fe841.js.map
