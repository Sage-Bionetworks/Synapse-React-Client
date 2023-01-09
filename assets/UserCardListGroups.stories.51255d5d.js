import{u as y}from"./useShowDesktop.d52e2d2d.js";import{U as f}from"./UserCardListRotate.2f87094e.js";import{E as L}from"./ExpandableContent.33064ba4.js";import{j as e,a as c,F as C,r as S}from"./jsx-runtime.8ee42ca4.js";import{B as U}from"./Button.32185a3f.js";import{t as R}from"./SynapseConstants.4792b5b5.js";import"./sqlFunctions.e821b8e9.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.78bffa27.js";import"./index.6e226ad1.js";import"./index.c68764fa.js";import"./iframe.57558d86.js";import"./styled.cab085b6.js";import"./Tooltip.53b3d1bd.js";import"./SvgIcon.e7d9e8d5.js";import"./useTheme.a650b60c.js";import"./TransitionGroupContext.d40bca5e.js";import"./Alert.4adbe9cb.js";import"./hook.b75ee742.js";import"./createWithBsPrefix.1fcef933.js";import"./divWithClassName.4fa3ddf0.js";import"./index.35ce73ec.js";import"./Fade.8d5d2209.js";import"./isArray.649754a9.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9744025b.js";import"./IconButton.0dfca4e0.js";import"./ButtonBase.442ee4f8.js";import"./emotion-react.browser.esm.755544ae.js";import"./Link.f5b0fcd9.js";import"./Typography.dc67c84b.js";import"./Button.73b6fb95.js";import"./ColumnType.744125d2.js";import"./UserCardList.a770fc3f.js";import"./UserCard.0ebf5c75.js";import"./IconCopy.fedbd76c.js";import"./SkeletonTable.7edc5c07.js";import"./times.2c182ff5.js";import"./toInteger.c3531c4d.js";import"./isSymbol.4962e9a9.js";import"./Skeleton.3af709e7.js";import"./ToastMessage.43b52073.js";import"./FullWidthAlert.a54f59d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d7153eca.js";import"./Overlay.0bda75db.js";import"./contains.3c554215.js";import"./usePopperMarginModifiers.78486f26.js";import"./useWaitForDOMRef.b0e44e89.js";import"./without.4399bd14.js";import"./_cacheHas.81596850.js";import"./use-deep-compare-effect.esm.9021590c.js";function l(r){const{columnName:s,facetValues:t,...i}=r;return e("div",{children:t==null?void 0:t.map((a,n)=>{const u=t[n],m=e(f,{...i,selectedFacets:[{columnName:s,facetValues:[u],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"}]},`UserCardListGroup-Mobile-${n}`);return e(L,{title:c(C,{children:[" ",u," "]}),content:m})})})}try{l.displayName="UserCardListGroupsMobile",l.__docgenInfo={description:"",displayName:"UserCardListGroupsMobile",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.Mobile.tsx#UserCardListGroupsMobile"]={docgenInfo:l.__docgenInfo,name:"UserCardListGroupsMobile",path:"src/lib/containers/home_page/people/UserCardListGroups.Mobile.tsx#UserCardListGroupsMobile"})}catch{}function p(r){const[s,t]=S.exports.useState(0),{columnName:i,facetValues:a,...n}=r,u={columnName:i,facetValues:[a[s]],concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"};return c("div",{className:"control-container",children:[c("div",{className:"button-container",children:[a==null?void 0:a.map((d,m)=>e("button",{className:s===m?"isSelected":"",onClick:()=>t(m),children:d},d)),e("button",{className:"gap-fill"})]}),e("div",{className:"content-container",children:e(f,{...n,selectedFacets:[u]},`UserCardListGroup-${s}`)})]})}try{p.displayName="UserCardListGroupsDesktop",p.__docgenInfo={description:"",displayName:"UserCardListGroupsDesktop",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.Desktop.tsx#UserCardListGroupsDesktop"]={docgenInfo:p.__docgenInfo,name:"UserCardListGroupsDesktop",path:"src/lib/containers/home_page/people/UserCardListGroups.Desktop.tsx#UserCardListGroupsDesktop"})}catch{}function o(r){const{summaryLink:s,summaryLinkText:t,...i}=r,a=y();return e("div",{className:`bootstrap-4-backport UserCardListGroups${a?"__Desktop":""}`,children:c("div",{children:[a?e(p,{...i}):e(l,{...i}),s&&t&&e("div",{className:"UserCardListGroups__summary",children:e(U,{variant:"secondary",size:"lg",className:"pill",href:s,children:t})})]})})}try{o.displayName="UserCardListGroups",o.__docgenInfo={description:"",displayName:"UserCardListGroups",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},columnName:{defaultValue:null,description:"",name:"columnName",required:!0,type:{name:"string"}},facetValues:{defaultValue:null,description:"",name:"facetValues",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:null,description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/people/UserCardListGroups.tsx#UserCardListGroups"]={docgenInfo:o.__docgenInfo,name:"UserCardListGroups",path:"src/lib/containers/home_page/people/UserCardListGroups.tsx#UserCardListGroups"})}catch{}const he={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:11},endLoc:{col:1,line:13},startBody:{col:60,line:11},endBody:{col:1,line:13}}}}},title:"Home Page/UserCardListGroups",component:o},_=r=>e(o,{...r}),E=_.bind({});E.args={sql:"SELECT * FROM syn21781196 WHERE isFeatured='true'",columnName:"Project Title",facetValues:["Somatic Mosaicism in the brain of Tourette syndrome","Somatic Mosaicism in Schizophrenia and Control Brains","1/3-Schizophrenia Genetics and Brain Somatic Mosaicism","2/3-Schizophrenia Genetics and Brain Somatic Mosaicism","Role of brain somatic mosaicism in autism, schizophrenia, and bipolar disorder","Mosaicism in focal cortical dysplasias spectrum seen in neuropsychiatric disease","1/2-Somatic mosaicism and autism spectrum disorder","2/2-Somatic mosaicism and autism spectrum disorder","3/3-Schizophrenia Genetics and Brain Somatic Mosaicism"],size:R,useQueryResultUserData:!1,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People",count:6};const Ge=["Demo"];export{E as Demo,Ge as __namedExportsOrder,he as default};
