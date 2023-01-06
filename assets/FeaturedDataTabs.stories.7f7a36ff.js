import{r as f,j as e,a as d,F as N}from"./jsx-runtime.7f415a49.js";import{W as K}from"./EntityTypeUtils.a88da157.js";import{p as q}from"./sqlFunctions.317acf55.js";import{u as Y,b as J,o as H,p as $,q as X,r as z,n as D,e as M,l as I}from"./FacetNav.4f7cb853.js";import{c as W,P as G}from"./factory.29902721.js";import{r as Z}from"./react-sizeme.aa998ef5.js";import{g as ee}from"./ColorGradient.16f0e0f2.js";import{l as te}from"./LoadingScreen.993b2e3f.js";import{o as V,p as Q,n as B,i as L}from"./SynapseConstants.d6ba6a96.js";import{I as ae}from"./ElementWithTooltip.500e59a6.js";import{B as re}from"./Button.03e30a54.js";import"./iframe.f0eb7e4f.js";import"./index.322ef20a.js";import"./Fade.91bde074.js";import"./styled.681e07cb.js";import"./useTheme.93fabebb.js";import"./Tooltip.532ca871.js";import"./SvgIcon.67c4bd7a.js";import"./TransitionGroupContext.d6cb07c1.js";import"./isArray.22a05d29.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.4536f7bc.js";import"./createWithBsPrefix.1ec397ad.js";import"./IconButton.f87dde1e.js";import"./ButtonBase.24c8fd98.js";import"./emotion-react.browser.esm.3f795854.js";import"./Link.962b4b54.js";import"./Typography.b9cf5e4f.js";import"./Button.7a13a013.js";import"./Alert.41cbd6e8.js";import"./hook.926e9335.js";import"./divWithClassName.4f7ac618.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.98e21063.js";import"./queryUtils.d40da240.js";import"./useInfiniteQuery.e949b068.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.b6d34995.js";import"./_baseClone.12caf01d.js";import"./_Set.ec3b2e10.js";import"./use-deep-compare-effect.esm.a50fe12d.js";import"./NoSearchResults.47339e1b.js";import"./NoData.f6f90db5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./useEntity.87b43ab4.js";import"./useMutation.7bebd2d5.js";import"./pick.e08076aa.js";import"./uniqueId.706d73bf.js";import"./isSymbol.9047c28e.js";import"./_baseSlice.50189bc5.js";import"./isEqual.309ab92d.js";import"./_cacheHas.6bb37714.js";import"./_setToArray.a82100c8.js";import"./useGetInfoFromIds.da2e88a2.js";import"./uniq.c00c44c0.js";import"./toInteger.d64e3f97.js";import"./without.0cb61de1.js";import"./Checkbox.d15514ef.js";import"./Dropdown.d617d4af.js";import"./usePrevious.9195f9b8.js";import"./contains.12125dea.js";import"./usePopperMarginModifiers.1e19fcd3.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./RadioGroup.63fe795a.js";import"./dayjs.min.4b01dff6.js";import"./RangeSlider.870cef18.js";import"./Skeleton.cf05128e.js";import"./Modal.20d66332.js";import"./inheritsLoose.d3989491.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.96d00667.js";import"./SelectionCriteriaPill.19e6487c.js";import"./Close.d7f6c298.js";import"./colorPalette.8145e2e2.js";import"./SynapseTableConstants.07ecdebd.js";const ne=W(G),se={showlegend:!1,annotations:[],margin:{l:0,r:0,b:0,t:0,pad:0},yaxis:{visible:!1,showgrid:!1},xaxis:{visible:!1,showgrid:!1}},S=({title:t,description:n,facetsToPlot:r,detailsPagePath:i})=>{const{accessToken:c}=K(),{data:a,isLoadingNewBundle:o}=Y(),{getColumnDisplayName:g,rgbIndex:u}=J(),[m,_]=f.exports.useState([]),[C,k]=f.exports.useState([]),[A,w]=f.exports.useState(""),{colorPalette:j}=ee(u!=null?u:0,2);if(f.exports.useEffect(()=>{var P;if(!(!r||!a)){const T=l=>{var p,y;return(y=(p=a==null?void 0:a.columnModels)==null?void 0:p.find(R=>R.name===l.columnName))==null?void 0:y.columnType},h=H(a,r);k(h),Promise.all(h.map(async(l,p)=>await $(l,T(l),p+1,"PIE",c))).then(l=>_(l));const s=(P=a==null?void 0:a.facets)==null?void 0:P.map(l=>{const p=l.facetValues;if(p){const y=p.filter(R=>R.isSelected);return y.length>0?y[0]:void 0}else return})[0];s&&s.value&&w(s==null?void 0:s.value)}},[r,a]),o||!m||!C||C.length===0)return e("div",{className:"FacetPlotsCard FacetPlotsCard__loading SRC-centerContentColumn",children:te});{let P=e(N,{});i&&A&&(P=e("div",{className:"FacetPlotsCard__link",children:d("a",{href:i,children:["View ",A]})}));const T=m.length>1,h=t!=null?t:T?A:g(C[0].columnName);return d("div",{className:"FacetPlotsCard cardContainer",children:[d("div",{className:"FacetPlotsCard__titlebar",style:{backgroundColor:j[0].replace(")",",.05)")},children:[e("span",{className:"FacetPlotsCard__title",children:h}),n&&e("span",{className:"FacetPlotsCard__description",children:n}),P,o&&e("span",{style:{marginLeft:"2px"},className:"spinner"})]}),e("div",{className:"FacetPlotsCard__body",children:m.map((s,l)=>d("div",{children:[l!==0&&e("hr",{}),T&&e("div",{className:"FacetPlotsCard__body__facetname",children:e("span",{children:g(C[l].columnName)})}),d("div",{className:"FacetPlotsCard__body__row",children:[e(Z.SizeMe,{monitorHeight:!0,children:({size:p})=>{var y;return e("div",{className:"FacetPlotsCard__body__plot",children:e(ne,{layout:se,data:(y=s==null?void 0:s.data)!=null?y:[],style:X(p.width,"PIE",150),config:{displayModeBar:!1}},`${r[l]}-${p.width}`)})}}),e(z,{labels:s==null?void 0:s.labels,colors:s==null?void 0:s.colors,isExpanded:!1})]})]},l))})]})}};try{S.displayName="FacetPlotsCard",S.__docgenInfo={description:"",displayName:"FacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"]={docgenInfo:S.__docgenInfo,name:"FacetPlotsCard",path:"src/lib/containers/home_page/featured-data/FacetPlotsCard.tsx#FacetPlotsCard"})}catch{}function oe(t,n,r){return{entityId:q(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:V|Q|B|L,query:{sql:t,offset:0,limit:25,selectedFacets:[{columnName:n,facetValues:[r],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]}}}const F=t=>{const{title:n,description:r,sql:i,facetsToPlot:c,rgbIndex:a,selectFacetColumnName:o,selectFacetColumnValue:g,detailsPagePath:u,...m}=t,_=oe(i,o,g);return e("div",{className:"QueryPerFacetPlotsCard",children:e(D,{...m,initQueryRequest:_,children:d(M,{rgbIndex:a,...m,children:[e(I,{}),e(S,{title:n,description:r,facetsToPlot:c,detailsPagePath:u})]})})})};try{F.displayName="QueryPerFacetPlotsCard",F.__docgenInfo={description:"",displayName:"QueryPerFacetPlotsCard",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},selectFacetColumnName:{defaultValue:null,description:"",name:"selectFacetColumnName",required:!0,type:{name:"string"}},selectFacetColumnValue:{defaultValue:null,description:"",name:"selectFacetColumnValue",required:!0,type:{name:"string"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},detailsPagePath:{defaultValue:null,description:"",name:"detailsPagePath",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"]={docgenInfo:F.__docgenInfo,name:"QueryPerFacetPlotsCard",path:"src/lib/containers/home_page/featured-data/QueryPerFacetPlotsCard.tsx#QueryPerFacetPlotsCard"})}catch{}function b(t){return{entityId:q(t),concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",partMask:V|Q|B|L,query:{sql:t,offset:0,limit:1}}}const x=t=>{const{sql:n,facetsToPlot:r,rgbIndex:i,columnAliases:c}=t,a=b(n);return e("div",{className:"SingleQueryFacetPlotsCards",children:e(D,{initQueryRequest:a,children:d(M,{rgbIndex:i,columnAliases:c,children:[e(I,{}),r==null?void 0:r.map(o=>e(S,{facetsToPlot:[o]},`FacetPlotCard-${o}`))]})})})};try{b.displayName="getQueryRequest",b.__docgenInfo={description:"",displayName:"getQueryRequest",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"]={docgenInfo:b.__docgenInfo,name:"getQueryRequest",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#getQueryRequest"})}catch{}try{x.displayName="SingleQueryFacetPlotsCards",x.__docgenInfo={description:"",displayName:"SingleQueryFacetPlotsCards",props:{rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},facetsToPlot:{defaultValue:null,description:"",name:"facetsToPlot",required:!1,type:{name:"string[]"}},columnAliases:{defaultValue:null,description:"",name:"columnAliases",required:!1,type:{name:"Record<string, string>"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"]={docgenInfo:x.__docgenInfo,name:"SingleQueryFacetPlotsCards",path:"src/lib/containers/home_page/featured-data/SingleQueryFacetPlotsCards.tsx#SingleQueryFacetPlotsCards"})}catch{}const E=t=>{const{configs:n,rgbIndex:r,sql:i}=t,c=n[0].selectFacetColumnName;return e("div",{className:`FeaturedDataPlots${c?"__queryPerCard":"__singleQuery"}`,children:n.map(a=>d(N,{children:[c&&e(F,{...a,rgbIndex:r,sql:i}),!c&&e(x,{...a,rgbIndex:r,sql:i})]}))})};try{E.displayName="FeaturedDataPlots",E.__docgenInfo={description:"",displayName:"FeaturedDataPlots",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"QueryFacetPlotsCardsProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!1,type:{name:"string"}},explorePagePath:{defaultValue:null,description:"",name:"explorePagePath",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"]={docgenInfo:E.__docgenInfo,name:"FeaturedDataPlots",path:"src/lib/containers/home_page/featured-data/FeaturedDataPlots.tsx#FeaturedDataPlots"})}catch{}const O=t=>{var g;const[n,r]=f.exports.useState(0),{configs:i,rgbIndex:c,sql:a}=t,o=i[n];return d("div",{className:"FeaturedDataTabs",children:[e("div",{className:"FeaturedDataTabs__tabs",children:i.map((u,m)=>e("div",{className:`FeaturedDataTabs__tabs__tab ${m===n?"FeaturedDataTabs__tabs__tab__selected":""}`,children:d("button",{className:"SRC-centerAndJustifyContent",onClick:()=>r(m),children:[u.icon&&e(ae,{type:u.icon}),e("span",{children:u.title})]})},u.title))}),o&&d(N,{children:[e(E,{...o.plotsConfig,rgbIndex:c,sql:a,explorePagePath:o.explorePagePath},`${a}-${n}`),o.explorePagePath&&e("div",{className:"bootstrap-4-backport FeaturedDataTabs__explore-all",children:d(re,{className:"pill",variant:"secondary",size:"lg",href:o.explorePagePath,children:["EXPLORE ALL ",(g=o.exploreObjectType)==null?void 0:g.toUpperCase()]})})]})]})},v=O;try{O.displayName="FeaturedDataTabs",O.__docgenInfo={description:"",displayName:"FeaturedDataTabs",props:{configs:{defaultValue:null,description:"",name:"configs",required:!0,type:{name:"FeatureDataTabProps[]"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!0,type:{name:"number"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"]={docgenInfo:O.__docgenInfo,name:"FeaturedDataTabs",path:"src/lib/containers/home_page/featured-data/FeaturedDataTabs.tsx#FeaturedDataTabs"})}catch{}const Mt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"single-query":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}},"query-per-card":{startLoc:{col:58,line:15},endLoc:{col:1,line:17},startBody:{col:58,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/FeaturedDataTabs",component:v,argTypes:{}},U=t=>e(v,{...t}),ie=U.bind({});ie.args={rgbIndex:1,sql:"SELECT * FROM syn21994974",configs:[{title:"Studies",icon:"chart2",explorePagePath:"/Explore/Studies",exploreObjectType:"Studies",plotsConfig:{sql:`SELECT * FROM syn21994974 WHERE ( ( "collectionType" = 'Validation Study' OR "collectionType" = 'Interventional Study' OR "collectionType" = 'Observational Study' ) )`,configs:[{facetsToPlot:["dataCollectionMethod","deviceType","devicePlatform","diagnosis","reportedOutcome","digitalAssessmentCategory"]}]}}]};const le=U.bind({});le.args={rgbIndex:1,sql:"select * from syn11346063",configs:[{title:"Human Studies",icon:"PERSON",explorePagePath:"/Explore/HumanStudies",exploreObjectType:"Studies",plotsConfig:{configs:[{title:"The Religious Orders and Memory and Aging Project Study",description:"This study generated genomic variants, gene expression, epigenetic, proteomics, and metabolomics data on two human cohorts: the Religious Orders Study (ROS) and the Memory and Aging Project (MAP).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"ROSMAP",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3219045"},{title:"The Mount Sinai Brain Bank Study",description:"This study generated gene expression, genomic variant and proteomic data from brain specimens obtained from the Mount Sinai/JJ Peters VA Medical Center Brain Bank (MSBB).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"MSBB",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn3159438"},{title:"The RNAseq Harmonization Study",description:"The goal of this project was to create a uniformly processed RNAseq dataset across the three largest AMP-AD contributed studies (ROSMAP/MSBB/MayoRNAseq).",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"rnaSeqReprocessing",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn5550404"}]}},{title:"Animal Model Studies",icon:"MOUSE",plotsConfig:{configs:[{title:"The UCI MODEL-AD 5XFAD Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"UCI_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn16798076"},{title:"The IU/Jax/Pitt MODEL-AD Primary Screen Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_PrimaryScreen",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn21595258"},{title:"The IU/Jax/Pit MODEL-AD APOE/TREM2 Study",facetsToPlot:["dataType","assay"],selectFacetColumnName:"study",selectFacetColumnValue:"Jax.IU.Pitt_5XFAD",detailsPagePath:"/Explore/Studies/DetailsPage?Study=syn17095980"}]}}]};const It=["SingleQuery","QueryPerCard"];export{le as QueryPerCard,ie as SingleQuery,It as __namedExportsOrder,Mt as default};
