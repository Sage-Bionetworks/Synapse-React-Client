import{r as f,j as e,a as d,F as q}from"./jsx-runtime.ed0bc2e8.js";import{h as Y,ap as D,aq as M,an as I,C as V}from"./index.444e3572.js";import{a as Q}from"./sqlFunctions.1d7d9843.js";import{u as J,b as H,r as $,s as X,t as z,v as W,p as B,k as L,n as v}from"./FacetNav.244c418d.js";import{c as G,P as Z}from"./factory.ee8ba69d.js";import{r as ee}from"./react-sizeme.22227f3d.js";import{g as te}from"./ColorGradient.16f0e0f2.js";import{u as N,I as ae}from"./ElementWithTooltip.aa21c398.js";import{l as se}from"./LoadingScreen.d5fc7030.js";import{B as re}from"./Button.ead7d59a.js";import"./iframe.1c77586e.js";import"./index.68bd2905.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";import"./queryUtils.b6e7a174.js";import"./useInfiniteQuery.4114925f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c1db8169.js";import"./_baseClone.32511df5.js";import"./_getTag.09032bbf.js";import"./_Set.79ce457d.js";import"./use-deep-compare-effect.esm.63a03aa5.js";import"./useEntity.a73b6a7f.js";import"./useMutation.60a502f5.js";import"./pick.fbb2f290.js";import"./uniqueId.e6e71b68.js";import"./isSymbol.3ae1367c.js";import"./_baseSlice.50189bc5.js";import"./useGetInfoFromIds.fc63d11c.js";import"./uniq.e0b70e96.js";import"./toInteger.c1671d6c.js";import"./_cacheHas.2f01a71b.js";import"./without.ae039a4c.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./IconSvg.af973a0c.js";import"./Tooltip.9455954b.js";import"./createSvgIcon.b88943f5.js";import"./makeStyles.83c340c0.js";import"./InfoOutlined.10c65527.js";import"./Checkbox.fc5ecb82.js";import"./Dropdown.cea6d11d.js";import"./Modal.2df339d5.js";import"./useWaitForDOMRef.2b50b75b.js";import"./inheritsLoose.02c5cdc5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.2ccc8168.js";import"./isRequiredForA11y.20ed4857.js";import"./RadioGroup.0bddc76f.js";import"./moment.a565bb48.js";import"./RangeSlider.e5b4fec2.js";import"./Skeleton.d97a08a6.js";import"./TypeUtils.a2c41307.js";import"./Close.2a111ba4.js";import"./colorPalette.8145e2e2.js";import"./SynapseTableConstants.07ecdebd.js";import"./Typography.935cd23d.js";const ne=G(Z),oe={showlegend:!1,annotations:[],margin:{l:0,r:0,b:0,t:0,pad:0},yaxis:{visible:!1,showgrid:!1},xaxis:{visible:!1,showgrid:!1}},S=({title:t,description:r,facetsToPlot:s,detailsPagePath:l})=>{const{accessToken:c}=Y(),{data:a,isLoadingNewBundle:o}=J(),{facetAliases:g,rgbIndex:u}=H(),[m,_]=f.exports.useState([]),[C,w]=f.exports.useState([]),[O,j]=f.exports.useState(""),{colorPalette:K}=te(u!=null?u:0,2);if(f.exports.useEffect(()=>{var P;if(!(!s||!a)){const T=i=>{var p,y;return(y=(p=a==null?void 0:a.columnModels)==null?void 0:p.find(R=>R.name===i.columnName))==null?void 0:y.columnType},h=$(a,s);w(h),Promise.all(h.map(async(i,p)=>await X(i,T(i),p+1,"PIE",c))).then(i=>_(i));const n=(P=a==null?void 0:a.facets)==null?void 0:P.map(i=>{const p=i.facetValues;if(p){const y=p.filter(R=>R.isSelected);return y.length>0?y[0]:void 0}else return})[0];n&&n.value&&j(n==null?void 0:n.value)}},[s,a]),o||!m||!C||C.length===0)return e("div",{className:"FacetPlotsCard FacetPlotsCard__loading SRC-centerContentColumn",children:se});{let P=e(q,{});l&&O&&(P=e("div",{className:"FacetPlotsCard__link",children:d("a",{href:l,children:["View ",O]})}));const T=m.length>1,h=t!=null?t:T?O:N(C[0].columnName,g);return d("div",{className:"FacetPlotsCard cardContainer",children:[d("div",{className:"FacetPlotsCard__titlebar",style:{backgroundColor:K[0].replace(")",",.05)")},children:[e("span",{className:"FacetPlotsCard__title",children:h}),r&&e("span",{className:"FacetPlotsCard__description",children:r}),P,o&&e("span",{style:{marginLeft:"2px"},className:"spinner"})]}),e("div",{className:"FacetPlotsCard__body",children:m.map((n,i)=>d("div",{children:[i!==0&&e("hr",{}),T&&e("div",{className:"FacetPlotsCard__body__facetname",children:e("span",{children:N(C[i].columnName,g)})}),d("div",{className:"FacetPlotsCard__body__row",children:[e(ee.SizeMe,{monitorHeight:!0,children:({size:p})=>{var y;return e("div",{className:"FacetPlotsCard__body__plot",children:e(ne,{layout:oe,data:(y=n==null?void 0:n.data)!=null?y:[],style:z(p.width,"PIE",150),config:{displayModeBar:!1}},`${s[i]}-${p.width}`)})}}),e(W,{labels:n==null?void 0:n.labels,colors:n==null?void 0:n.colors,isExpanded:!1})]})]},i))})]})}};try{S.displayName="FacetPlotsCard",S.__docgenInfo={description:"",displayName:"FacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"]={docgenInfo:S.__docgenInfo,name:"FacetPlotsCard",path:"src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"})}catch{}function le(t,r,s){return{entityId:Q(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:D|M|I|V,query:{sql:t,offset:0,limit:25,selectedFacets:[{columnName:r,facetValues:[s],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]}}}const F=t=>{const{title:r,description:s,sql:l,facetsToPlot:c,rgbIndex:a,selectFacetColumnName:o,selectFacetColumnValue:g,detailsPagePath:u,...m}=t,_=le(l,o,g);return e("div",{className:"QueryPerFacetPlotsCard",children:e(B,{...m,initQueryRequest:_,children:d(L,{rgbIndex:a,...m,children:[e(v,{}),e(S,{title:r,description:s,facetsToPlot:c,detailsPagePath:u})]})})})};try{F.displayName="QueryPerFacetPlotsCard",F.__docgenInfo={description:"",displayName:"QueryPerFacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},selectFacetColumnName:{defaultValue:null,description:"",name:"selectFacetColumnName",required:!0,type:{name:"string"}},selectFacetColumnValue:{defaultValue:null,description:"",name:"selectFacetColumnValue",required:!0,type:{name:"string"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"]={docgenInfo:F.__docgenInfo,name:"QueryPerFacetPlotsCard",path:"src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"})}catch{}function b(t){return{entityId:Q(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:D|M|I|V,query:{sql:t,offset:0,limit:1}}}const x=t=>{const{sql:r,facetsToPlot:s,rgbIndex:l,facetAliases:c}=t,a=b(r);return e("div",{className:"SingleQueryFacetPlotsCards",children:e(B,{initQueryRequest:a,children:d(L,{rgbIndex:l,facetAliases:c,children:[e(v,{}),s==null?void 0:s.map(o=>e(S,{facetsToPlot:[o]},`FacetPlotCard-${o}`))]})})})};try{b.displayName="getQueryRequest",b.__docgenInfo={description:"",displayName:"getQueryRequest",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"]={docgenInfo:b.__docgenInfo,name:"getQueryRequest",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"})}catch{}try{x.displayName="SingleQueryFacetPlotsCards",x.__docgenInfo={description:"",displayName:"SingleQueryFacetPlotsCards",props:{rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"]={docgenInfo:x.__docgenInfo,name:"SingleQueryFacetPlotsCards",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"})}catch{}const E=t=>{const{configs:r,rgbIndex:s,sql:l}=t,c=r[0].selectFacetColumnName;return e("div",{className:`FeaturedDataPlots${c?"__queryPerCard":"__singleQuery"}`,children:r.map(a=>d(q,{children:[c&&e(F,{...a,rgbIndex:s,sql:l}),!c&&e(x,{...a,rgbIndex:s,sql:l})]}))})};try{E.displayName="FeaturedDataPlots",E.__docgenInfo={description:"",displayName:"FeaturedDataPlots",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"QueryFacetPlotsCardsProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},explorePagePath:{defaultValue:null,description:"",name:"explorePagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"]={docgenInfo:E.__docgenInfo,name:"FeaturedDataPlots",path:"src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"})}catch{}const A=t=>{var g;const[r,s]=f.exports.useState(0),{configs:l,rgbIndex:c,sql:a}=t,o=l[r];return d("div",{className:"FeaturedDataTabs",children:[e("div",{className:"FeaturedDataTabs__tabs",children:l.map((u,m)=>e("div",{className:`FeaturedDataTabs__tabs__tab ${m===r?"FeaturedDataTabs__tabs__tab__selected":""}`,children:d("button",{className:"SRC-centerAndJustifyContent",onClick:()=>s(m),children:[u.icon&&e(ae,{type:u.icon}),e("span",{children:u.title})]})},u.title))}),o&&d(q,{children:[e(E,{...o.plotsConfig,rgbIndex:c,sql:a,explorePagePath:o.explorePagePath},`${a}-${r}`),o.explorePagePath&&e("div",{className:"bootstrap-4-backport FeaturedDataTabs__explore-all",children:d(re,{className:"pill",variant:"secondary",size:"lg",href:o.explorePagePath,children:["EXPLORE ALL ",(g=o.exploreObjectType)==null?void 0:g.toUpperCase()]})})]})]})},U=A;try{A.displayName="FeaturedDataTabs",A.__docgenInfo={description:"",displayName:"FeaturedDataTabs",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"FeatureDataTabProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!0,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"]={docgenInfo:A.__docgenInfo,name:"FeaturedDataTabs",path:"src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"})}catch{}const Ct={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"single-query":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}},"query-per-card":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/FeaturedDataTabs",component:U,argTypes:{}},k=t=>e(U,{...t}),ie=k.bind({});ie.args={rgbIndex:1,sql:"SELECT * FROM syn21994974",configs:[{title:"Studies",icon:"chart2",explorePagePath:"/Explore/Studies",exploreObjectType:"Studies",plotsConfig:{sql:`SELECT * FROM syn21994974 WHERE ( ( "collectionType" = 'Validation Study' OR "collectionType" = 'Interventional Study' OR "collectionType" = 'Observational Study' ) )`,configs:[{facetsToPlot:["dataCollectionMethod","deviceType","devicePlatform","diagnosis","reportedOutcome","digitalAssessmentCategory"]}]}}]};const de=k.bind({});de.args={rgbIndex:1,sql:"select * from syn11346063",configs:[{title:"Human Studies",icon:"PERSON",explorePagePath:"/Explore/HumanStudies",exploreObjectType:"Studies",plotsConfig:{configs:[{title:"The Religious Orders and Memory and Aging Project Study",description:"This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"ROSMAP",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3219045"},{title:"The Mount Sinai Brain Bank Study",description:"This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"MSBB",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3159438"},{title:"The RNAseq Harmonization Study",description:"The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"rnaSeqReprocessing",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn5550404"}]}},{title:"Animal Model Studies",icon:"MOUSE",plotsConfig:{configs:[{title:"The UCI MODEL-AD 5XFAD Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"UCI_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn16798076"},{title:"The IU/Jax/Pitt MODEL-AD Primary Screen Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_PrimaryScreen",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn21595258"},{title:"The IU/Jax/Pit MODEL-AD APOE/TREM2 Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn17095980"}]}}]};const Tt=["SingleQuery","QueryPerCard"];export{de as QueryPerCard,ie as SingleQuery,Tt as __namedExportsOrder,Ct as default};
