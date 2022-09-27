import{h as b,E as M,ac as V,B}from"./index.65b6889e.js";import{u as A,g as u}from"./queryUtils.d630e895.js";import{a as U,j as e,r as _}from"./jsx-runtime.9b9f5ec2.js";import{h as Y}from"./moment.a565bb48.js";import{f as $}from"./DateFormatter.e6e193e6.js";import"./index.9efb4fab.js";import"./iframe.8f6c7ea4.js";import"./withStyles.c4d286cc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a1c2894f.js";import"./index.57d09176.js";import"./Button.17fde95a.js";import"./Transition.95b45c06.js";import"./index.35ce73ec.js";import"./isArray.88d141d1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.59ebdbf7.js";import"./useInfiniteQuery.63a858a4.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ed3f4363.js";import"./_baseClone.801a028e.js";import"./_getTag.491e79d0.js";import"./_Set.ee8a3840.js";const c=({id:t,name:f,description:n,type:s,toolDetailPageURL:i,date:d,...a})=>{var m;return U("div",{...a,className:`cardContainer FeaturedToolCard bootstrap-4-backport ${(m=a.className)!=null?m:""}`,children:[e("div",{className:"FeaturedToolCard__Type",children:e("span",{className:"SRC-tag",children:s})}),e("div",{className:"FeaturedToolCard__Date",children:$(Y(parseInt(d)),"MMMM YYYY")}),e("div",{className:"FeaturedToolCard__Name",children:f}),e("div",{className:"FeaturedToolCard__Description",children:n}),e("div",{children:e("a",{className:"FeaturedToolCard__Link",href:`${i}${t}`,children:"View Tool"})})]})};try{c.displayName="FeaturedToolCard",c.__docgenInfo={description:"",displayName:"FeaturedToolCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured_tools/FeaturedToolCard.tsx#FeaturedToolCard"]={docgenInfo:c.__docgenInfo,name:"FeaturedToolCard",path:"src/lib/containers/home_page/featured_tools/FeaturedToolCard.tsx#FeaturedToolCard"})}catch{}const y=({entityId:t,toolDetailPageURL:f,idColumnName:n="id",nameColumnName:s="name",descriptionColumnName:i="description",typeColumnName:d="type",dateColumnName:a="date"})=>{const m=`SELECT "${n}", "${s}", "${i}", "${d}", "${a}" FROM ${t} ORDER BY ROW_ID DESC LIMIT 3`,R={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:t,partMask:V|B,query:{sql:m}},{accessToken:N}=b(),[h,E]=_.exports.useState([]),[g,x]=_.exports.useState(),{data:o,error:T}=A(R);return _.exports.useEffect(()=>{(()=>{var C;try{const p=u(n,o),D=u(s,o),q=u(d,o),I=u(i,o),v=u(a,o),L=(C=o==null?void 0:o.queryResult.queryResults.rows.map(F=>{F.values.some(O=>O===null)&&console.warn("Row has null value(s)");const l=F.values;return{name:l[D],description:l[I],type:l[q],id:l[p],date:l[v]}}))!=null?C:[];if(T)throw T;if(L.length===0)return;E(L)}catch(p){console.error(p),x(p)}})()},[t,N,o,T,n,s,d,i,a]),g?e(M,{error:g}):e("div",{className:"FeaturedToolList",children:h.map(r=>e(c,{name:r.name,type:r.type,description:r.description,id:r.id,date:r.date,toolDetailPageURL:f},r.id))})},S=y;try{y.displayName="FeaturedToolsList",y.__docgenInfo={description:`Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
'id', 'name', 'type', and 'description'.`,displayName:"FeaturedToolsList",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},idColumnName:{defaultValue:{value:"id"},description:"",name:"idColumnName",required:!1,type:{name:"string"}},nameColumnName:{defaultValue:{value:"name"},description:"",name:"nameColumnName",required:!1,type:{name:"string"}},descriptionColumnName:{defaultValue:{value:"description"},description:"",name:"descriptionColumnName",required:!1,type:{name:"string"}},typeColumnName:{defaultValue:{value:"type"},description:"",name:"typeColumnName",required:!1,type:{name:"string"}},dateColumnName:{defaultValue:{value:"date"},description:"",name:"dateColumnName",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured_tools/FeaturedToolsList.tsx#FeaturedToolsList"]={docgenInfo:y.__docgenInfo,name:"FeaturedToolsList",path:"src/lib/containers/home_page/featured_tools/FeaturedToolsList.tsx#FeaturedToolsList"})}catch{}const ce={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FeaturedToolsList from './FeaturedToolsList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home Page/FeaturedToolsList',
  component: FeaturedToolsList,
} as ComponentMeta<typeof FeaturedToolsList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeaturedToolsList> = args => (
  <FeaturedToolsList {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn26450069',
  idColumnName: 'resourceId',
  nameColumnName: 'resourceName',
  descriptionColumnName: 'description',
  typeColumnName: 'resourceType',
  dateColumnName: 'dateAdded',
  toolDetailPageURL: '/Explore/Tools/DetailsPage?Resource_id=',
}
`,locationsMap:{demo:{startLoc:{col:59,line:12},endLoc:{col:1,line:14},startBody:{col:59,line:12},endBody:{col:1,line:14}}}}},title:"Home Page/FeaturedToolsList",component:S},k=t=>e(S,{...t}),w=k.bind({});w.args={entityId:"syn26450069",idColumnName:"resourceId",nameColumnName:"resourceName",descriptionColumnName:"description",typeColumnName:"resourceType",dateColumnName:"dateAdded",toolDetailPageURL:"/Explore/Tools/DetailsPage?Resource_id="};const ye=["Demo"];export{w as Demo,ye as __namedExportsOrder,ce as default};
