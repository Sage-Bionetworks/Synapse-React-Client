import{u as y}from"./useShowDesktop.2f1921a6.js";import{U as f}from"./UserCardListRotate.4a61df4f.js";import{E as L}from"./ExpandableContent.eb940806.js";import{j as e,a as c,F as C,r as S}from"./jsx-runtime.9b9f5ec2.js";import{B as U}from"./Button.17fde95a.js";import{am as R}from"./index.65b6889e.js";import"./sqlFunctions.02978512.js";import"./ColumnType.744125d2.js";import"./UserCardList.f3856dea.js";import"./UserCard.96e69903.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.fcae01ed.js";import"./SkeletonTable.ec89eee6.js";import"./times.3879e401.js";import"./toInteger.816a2f64.js";import"./isSymbol.29619e0a.js";import"./isArray.88d141d1.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.223a1071.js";import"./withStyles.c4d286cc.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.6dc32b0d.js";import"./createSvgIcon.0c80d9df.js";import"./SvgIcon.59ebdbf7.js";import"./slicedToArray.e72f11da.js";import"./index.9efb4fab.js";import"./iframe.8f6c7ea4.js";import"./useTheme.b4767795.js";import"./Transition.95b45c06.js";import"./makeStyles.3075ce24.js";import"./IconSvg.4c036b55.js";import"./InfoOutlined.1a2adc17.js";import"./ToastMessage.820cec30.js";import"./FullWidthAlert.4632d904.js";import"./Typography.5121ab9c.js";import"./Alert.a1c2894f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f1f42f72.js";import"./Overlay.940ff29e.js";import"./useWaitForDOMRef.6edb2b10.js";import"./usePopperMarginModifiers.e3573a90.js";import"./without.6eda5c4e.js";import"./_cacheHas.66bf6592.js";import"./use-deep-compare-effect.esm.1429f412.js";function l(r){const{columnName:s,facetValues:t,...i}=r;return e("div",{children:t==null?void 0:t.map((a,n)=>{const u=t[n],m=e(f,{...i,selectedFacets:[{columnName:s,facetValues:[u],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]},`UserCardListGroup-Mobile-${n}`);return e(L,{title:c(C,{children:[" ",u," "]}),content:m})})})}try{l.displayName="UserCardListGroupsMobile",l.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.Mobile.tsx#UserCardListGroupsMobile"]={docgenInfo:l.__docgenInfo,name:"UserCardListGroupsMobile",path:"src/lib/containers/home_page/people/UserCardListGroups.Mobile.tsx#UserCardListGroupsMobile"})}catch{}function p(r){const[s,t]=S.exports.useState(0),{columnName:i,facetValues:a,...n}=r,u={columnName:i,facetValues:[a[s]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return c("div",{className:"control-container",children:[c("div",{className:"button-container",children:[a==null?void 0:a.map((d,m)=>e("button",{className:s===m?"isSelected":"",onClick:()=>t(m),children:d},d)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(f,{...n,selectedFacets:[u]},`UserCardListGroup-${s}`)})]})}try{p.displayName="UserCardListGroupsDesktop",p.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.Desktop.tsx#UserCardListGroupsDesktop"]={docgenInfo:p.__docgenInfo,name:"UserCardListGroupsDesktop",path:"src/lib/containers/home_page/people/UserCardListGroups.Desktop.tsx#UserCardListGroupsDesktop"})}catch{}function o(r){const{summaryLink:s,summaryLinkText:t,...i}=r,a=y();return e("div",{className:`bootstrap-4-backport UserCardListGroups${a?"__Desktop":""}`,children:c("div",{children:[a?e(p,{...i}):e(l,{...i}),s&&t&&e("div",{className:"UserCardListGroups__summary",children:e(U,{variant:"secondary",size:"lg",className:"pill",href:s,children:t})})]})})}try{o.displayName="UserCardListGroups",o.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.tsx#UserCardListGroups"]={docgenInfo:o.__docgenInfo,name:"UserCardListGroups",path:"src/lib/containers/home_page/people/UserCardListGroups.tsx#UserCardListGroups"})}catch{}const Ce={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserCardListGroups from './UserCardListGroups'
import { MEDIUM_USER_CARD } from '../../../utils/SynapseConstants'

export default {
  title: 'Home Page/UserCardListGroups',
  component: UserCardListGroups,
} as ComponentMeta<typeof UserCardListGroups>

const Template: ComponentStory<typeof UserCardListGroups> = args => (
  <UserCardListGroups {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  sql: "SELECT * FROM syn21781196 WHERE isFeatured='true'",
  columnName: 'Project Title',
  facetValues: [
    'Somatic Mosaicism in the brain of Tourette syndrome',
    'Somatic Mosaicism in Schizophrenia and Control Brains',
    '1/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
    '2/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
    'Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder',
    'Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease',
    '1/2-Somatic mosaicism and autism spectrum disorder',
    '2/2-Somatic mosaicism and autism spectrum disorder',
    '3/3-Schizophrenia Genetics and Brain Somatic Mosaicism',
  ],
  size: MEDIUM_USER_CARD,
  useQueryResultUserData: false,
  summaryLinkText: 'EXPLORE ALL PEOPLE',
  summaryLink: '/Explore/People',
  count: 6,
}
`,locationsMap:{demo:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}}}}},title:"Home Page/UserCardListGroups",component:o},_=r=>e(o,{...r}),E=_.bind({});E.args={sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:R,useQueryResultUserData:!1,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People",count:6};const Se=["Demo"];export{E as Demo,Se as __namedExportsOrder,Ce as default};
