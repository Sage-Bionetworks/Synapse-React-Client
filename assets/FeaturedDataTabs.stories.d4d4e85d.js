import{r as f,j as e,a as d,F as q}from"./jsx-runtime.f7cf66fc.js";import{h as Y,ao as D,ap as M,am as I,C as V}from"./index.a7b4e4df.js";import{a as Q}from"./sqlFunctions.1d7d9843.js";import{u as J,b as H,r as $,s as X,t as z,v as W,p as B,k as L,n as v}from"./FacetNav.15d72b7c.js";import{c as G,P as Z}from"./factory.bc323c03.js";import{r as ee}from"./react-sizeme.bf3eb88d.js";import{g as te}from"./ColorGradient.16f0e0f2.js";import{u as N,I as ae}from"./ElementWithTooltip.acf8538e.js";import{l as re}from"./LoadingScreen.ce5011dc.js";import{B as se}from"./Button.8c8504e0.js";import"./iframe.7a93df40.js";import"./index.1e38edd3.js";import"./Alert.a83e08c9.js";import"./index.57d09176.js";import"./Transition.9d380883.js";import"./index.35ce73ec.js";import"./isArray.a5837af6.js";import"./withStyles.ddbf8a64.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d61a6d98.js";import"./queryUtils.336cf5e5.js";import"./useInfiniteQuery.9ecf2d2e.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.8f25a5be.js";import"./_baseClone.1ffdc33c.js";import"./_getTag.44672c3a.js";import"./_Set.30f40b38.js";import"./use-deep-compare-effect.esm.2af231c9.js";import"./useEntity.28ef4d9d.js";import"./useMutation.d27d3a67.js";import"./pick.193b483e.js";import"./uniqueId.bff82890.js";import"./isSymbol.c2dfe727.js";import"./_baseSlice.50189bc5.js";import"./useGetInfoFromIds.46d82302.js";import"./uniq.da1993f7.js";import"./toInteger.2ba4f663.js";import"./_cacheHas.3bd942cd.js";import"./without.f66365c3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./IconSvg.09883cec.js";import"./Tooltip.7bec90df.js";import"./createSvgIcon.fe8b3870.js";import"./useTheme.af842711.js";import"./makeStyles.c3ae2cc2.js";import"./InfoOutlined.a5d342c6.js";import"./Checkbox.2fa6725f.js";import"./Dropdown.a23c4d18.js";import"./Modal.d2d919b5.js";import"./useWaitForDOMRef.58e2d194.js";import"./inheritsLoose.70012080.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.206050ec.js";import"./isRequiredForA11y.20ed4857.js";import"./Collapse.062dd5ab.js";import"./RadioGroup.e5383a0b.js";import"./moment.a565bb48.js";import"./RangeSlider.42d419bd.js";import"./Skeleton.76391d30.js";import"./TypeUtils.a2c41307.js";import"./colorPalette.8145e2e2.js";import"./SynapseTableConstants.07ecdebd.js";import"./Typography.dfe40719.js";const ne=G(Z),oe={showlegend:!1,annotations:[],margin:{l:0,r:0,b:0,t:0,pad:0},yaxis:{visible:!1,showgrid:!1},xaxis:{visible:!1,showgrid:!1}},S=({title:t,description:s,facetsToPlot:r,detailsPagePath:l})=>{const{accessToken:c}=Y(),{data:a,isLoadingNewBundle:o}=J(),{facetAliases:g,rgbIndex:u}=H(),[m,_]=f.exports.useState([]),[C,w]=f.exports.useState([]),[O,j]=f.exports.useState(""),{colorPalette:K}=te(u!=null?u:0,2);if(f.exports.useEffect(()=>{var P;if(!(!r||!a)){const T=i=>{var p,y;return(y=(p=a==null?void 0:a.columnModels)==null?void 0:p.find(R=>R.name===i.columnName))==null?void 0:y.columnType},h=$(a,r);w(h),Promise.all(h.map(async(i,p)=>await X(i,T(i),p+1,"PIE",c))).then(i=>_(i));const n=(P=a==null?void 0:a.facets)==null?void 0:P.map(i=>{const p=i.facetValues;if(p){const y=p.filter(R=>R.isSelected);return y.length>0?y[0]:void 0}else return})[0];n&&n.value&&j(n==null?void 0:n.value)}},[r,a]),o||!m||!C||C.length===0)return e("div",{className:"FacetPlotsCard FacetPlotsCard__loading SRC-centerContentColumn",children:re});{let P=e(q,{});l&&O&&(P=e("div",{className:"FacetPlotsCard__link",children:d("a",{href:l,children:["View ",O]})}));const T=m.length>1,h=t!=null?t:T?O:N(C[0].columnName,g);return d("div",{className:"FacetPlotsCard cardContainer",children:[d("div",{className:"FacetPlotsCard__titlebar",style:{backgroundColor:K[0].replace(")",",.05)")},children:[e("span",{className:"FacetPlotsCard__title",children:h}),s&&e("span",{className:"FacetPlotsCard__description",children:s}),P,o&&e("span",{style:{marginLeft:"2px"},className:"spinner"})]}),e("div",{className:"FacetPlotsCard__body",children:m.map((n,i)=>d("div",{children:[i!==0&&e("hr",{}),T&&e("div",{className:"FacetPlotsCard__body__facetname",children:e("span",{children:N(C[i].columnName,g)})}),d("div",{className:"FacetPlotsCard__body__row",children:[e(ee.SizeMe,{monitorHeight:!0,children:({size:p})=>{var y;return e("div",{className:"FacetPlotsCard__body__plot",children:e(ne,{layout:oe,data:(y=n==null?void 0:n.data)!=null?y:[],style:z(p.width,"PIE",150),config:{displayModeBar:!1}},`${r[i]}-${p.width}`)})}}),e(W,{labels:n==null?void 0:n.labels,colors:n==null?void 0:n.colors,isExpanded:!1})]})]},i))})]})}};try{S.displayName="FacetPlotsCard",S.__docgenInfo={description:"",displayName:"FacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"]={docgenInfo:S.__docgenInfo,name:"FacetPlotsCard",path:"src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"})}catch{}function le(t,s,r){return{entityId:Q(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:D|M|I|V,query:{sql:t,offset:0,limit:25,selectedFacets:[{columnName:s,facetValues:[r],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]}}}const F=t=>{const{title:s,description:r,sql:l,facetsToPlot:c,rgbIndex:a,selectFacetColumnName:o,selectFacetColumnValue:g,detailsPagePath:u,...m}=t,_=le(l,o,g);return e("div",{className:"QueryPerFacetPlotsCard",children:e(B,{...m,initQueryRequest:_,children:d(L,{rgbIndex:a,...m,children:[e(v,{}),e(S,{title:s,description:r,facetsToPlot:c,detailsPagePath:u})]})})})};try{F.displayName="QueryPerFacetPlotsCard",F.__docgenInfo={description:"",displayName:"QueryPerFacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},selectFacetColumnName:{defaultValue:null,description:"",name:"selectFacetColumnName",required:!0,type:{name:"string"}},selectFacetColumnValue:{defaultValue:null,description:"",name:"selectFacetColumnValue",required:!0,type:{name:"string"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"]={docgenInfo:F.__docgenInfo,name:"QueryPerFacetPlotsCard",path:"src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"})}catch{}function b(t){return{entityId:Q(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:D|M|I|V,query:{sql:t,offset:0,limit:1}}}const x=t=>{const{sql:s,facetsToPlot:r,rgbIndex:l,facetAliases:c}=t,a=b(s);return e("div",{className:"SingleQueryFacetPlotsCards",children:e(B,{initQueryRequest:a,children:d(L,{rgbIndex:l,facetAliases:c,children:[e(v,{}),r==null?void 0:r.map(o=>e(S,{facetsToPlot:[o]},`FacetPlotCard-${o}`))]})})})};try{b.displayName="getQueryRequest",b.__docgenInfo={description:"",displayName:"getQueryRequest",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"]={docgenInfo:b.__docgenInfo,name:"getQueryRequest",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"})}catch{}try{x.displayName="SingleQueryFacetPlotsCards",x.__docgenInfo={description:"",displayName:"SingleQueryFacetPlotsCards",props:{rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"]={docgenInfo:x.__docgenInfo,name:"SingleQueryFacetPlotsCards",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"})}catch{}const E=t=>{const{configs:s,rgbIndex:r,sql:l}=t,c=s[0].selectFacetColumnName;return e("div",{className:`FeaturedDataPlots${c?"__queryPerCard":"__singleQuery"}`,children:s.map(a=>d(q,{children:[c&&e(F,{...a,rgbIndex:r,sql:l}),!c&&e(x,{...a,rgbIndex:r,sql:l})]}))})};try{E.displayName="FeaturedDataPlots",E.__docgenInfo={description:"",displayName:"FeaturedDataPlots",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"QueryFacetPlotsCardsProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},explorePagePath:{defaultValue:null,description:"",name:"explorePagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"]={docgenInfo:E.__docgenInfo,name:"FeaturedDataPlots",path:"src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"})}catch{}const A=t=>{var g;const[s,r]=f.exports.useState(0),{configs:l,rgbIndex:c,sql:a}=t,o=l[s];return d("div",{className:"FeaturedDataTabs",children:[e("div",{className:"FeaturedDataTabs__tabs",children:l.map((u,m)=>e("div",{className:`FeaturedDataTabs__tabs__tab ${m===s?"FeaturedDataTabs__tabs__tab__selected":""}`,children:d("button",{className:"SRC-centerAndJustifyContent",onClick:()=>r(m),children:[u.icon&&e(ae,{type:u.icon}),e("span",{children:u.title})]})},u.title))}),o&&d(q,{children:[e(E,{...o.plotsConfig,rgbIndex:c,sql:a,explorePagePath:o.explorePagePath},`${a}-${s}`),o.explorePagePath&&e("div",{className:"bootstrap-4-backport FeaturedDataTabs__explore-all",children:d(se,{className:"pill",variant:"secondary",size:"lg",href:o.explorePagePath,children:["EXPLORE ALL ",(g=o.exploreObjectType)==null?void 0:g.toUpperCase()]})})]})]})},U=A;try{A.displayName="FeaturedDataTabs",A.__docgenInfo={description:"",displayName:"FeaturedDataTabs",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"FeatureDataTabProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!0,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"]={docgenInfo:A.__docgenInfo,name:"FeaturedDataTabs",path:"src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"})}catch{}const Tt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"single-query":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}},"query-per-card":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/FeaturedDataTabs",component:U,argTypes:{}},k=t=>e(U,{...t}),ie=k.bind({});ie.args={rgbIndex:1,sql:"SELECT * FROM syn21994974",configs:[{title:"Studies",icon:"chart2",explorePagePath:"/Explore/Studies",exploreObjectType:"Studies",plotsConfig:{sql:`SELECT * FROM syn21994974 WHERE ( ( "collectionType" = 'Validation Study' OR "collectionType" = 'Interventional Study' OR "collectionType" = 'Observational Study' ) )`,configs:[{facetsToPlot:["dataCollectionMethod","deviceType","devicePlatform","diagnosis","reportedOutcome","digitalAssessmentCategory"]}]}}]};const de=k.bind({});de.args={rgbIndex:1,sql:"select * from syn11346063",configs:[{title:"Human Studies",icon:"PERSON",explorePagePath:"/Explore/HumanStudies",exploreObjectType:"Studies",plotsConfig:{configs:[{title:"The Religious Orders and Memory and Aging Project Study",description:"This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"ROSMAP",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3219045"},{title:"The Mount Sinai Brain Bank Study",description:"This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"MSBB",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3159438"},{title:"The RNAseq Harmonization Study",description:"The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"rnaSeqReprocessing",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn5550404"}]}},{title:"Animal Model Studies",icon:"MOUSE",plotsConfig:{configs:[{title:"The UCI MODEL-AD 5XFAD Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"UCI_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn16798076"},{title:"The IU/Jax/Pitt MODEL-AD Primary Screen Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_PrimaryScreen",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn21595258"},{title:"The IU/Jax/Pit MODEL-AD APOE/TREM2 Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn17095980"}]}}]};const ht=["SingleQuery","QueryPerCard"];export{de as QueryPerCard,ie as SingleQuery,ht as __namedExportsOrder,Tt as default};
