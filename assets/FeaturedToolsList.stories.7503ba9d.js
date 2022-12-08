import{M as b,al as M}from"./index.a4d7c90b.js";import{u as V,g as u}from"./queryUtils.db44d7f3.js";import{a as A,j as e,r as _}from"./jsx-runtime.e6c7cb0f.js";import{d as B}from"./dayjs.min.b6e54d5f.js";import{f as U}from"./DateFormatter.1327d068.js";import{n as Y,i as $}from"./SynapseConstants.4792b5b5.js";import"./index.2be90583.js";import"./iframe.62902f49.js";import"./Button.55945b82.js";import"./styled.defe1bf4.js";import"./Tooltip.b8c59786.js";import"./SvgIcon.277e4012.js";import"./useTheme.78ea417a.js";import"./TransitionGroupContext.9be55353.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./createWithBsPrefix.d521861c.js";import"./divWithClassName.f3083196.js";import"./index.35ce73ec.js";import"./Fade.43ac51c5.js";import"./isArray.d7f4d705.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.7c6c26ba.js";import"./IconButton.3458b12d.js";import"./ButtonBase.c32891f3.js";import"./emotion-react.browser.esm.0fa712d1.js";import"./Link.f733bec4.js";import"./Typography.491b6426.js";import"./Button.6ec7c4e8.js";import"./useInfiniteQuery.c9325a79.js";import"./queryKeys.e0d3085f.js";import"./QueryFilter.a15418f9.js";import"./cloneDeep.3598e4db.js";import"./_baseClone.d1846d14.js";import"./_Set.b19d8fcb.js";import"./utc.88a72a89.js";const c=({id:t,name:f,description:n,type:s,toolDetailPageURL:i,date:d,...a})=>{var m;return A("div",{...a,className:`cardContainer FeaturedToolCard bootstrap-4-backport ${(m=a.className)!=null?m:""}`,children:[e("div",{className:"FeaturedToolCard__Type",children:e("span",{className:"SRC-tag",children:s})}),e("div",{className:"FeaturedToolCard__Date",children:U(B(parseInt(d)),"MMMM YYYY")}),e("div",{className:"FeaturedToolCard__Name",children:f}),e("div",{className:"FeaturedToolCard__Description",children:n}),e("div",{children:e("a",{className:"FeaturedToolCard__Link",href:`${i}${t}`,children:"View Tool"})})]})};try{c.displayName="FeaturedToolCard",c.__docgenInfo={description:"",displayName:"FeaturedToolCard",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured_tools/FeaturedToolCard.tsx#FeaturedToolCard"]={docgenInfo:c.__docgenInfo,name:"FeaturedToolCard",path:"src/lib/containers/home_page/featured_tools/FeaturedToolCard.tsx#FeaturedToolCard"})}catch{}const y=({entityId:t,toolDetailPageURL:f,idColumnName:n="id",nameColumnName:s="name",descriptionColumnName:i="description",typeColumnName:d="type",dateColumnName:a="date"})=>{const m=`SELECT "${n}", "${s}", "${i}", "${d}", "${a}" FROM ${t} ORDER BY ROW_ID DESC LIMIT 3`,R={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:t,partMask:Y|$,query:{sql:m}},{accessToken:N}=b(),[E,h]=_.exports.useState([]),[g,x]=_.exports.useState(),{data:o,error:T}=V(R);return _.exports.useEffect(()=>{(()=>{var C;try{const p=u(n,o),D=u(s,o),q=u(d,o),I=u(i,o),v=u(a,o),L=(C=o==null?void 0:o.queryResult.queryResults.rows.map(F=>{F.values.some(O=>O===null)&&console.warn("Row has null value(s)");const l=F.values;return{name:l[D],description:l[I],type:l[q],id:l[p],date:l[v]}}))!=null?C:[];if(T)throw T;if(L.length===0)return;h(L)}catch(p){console.error(p),x(p)}})()},[t,N,o,T,n,s,d,i,a]),g?e(M,{error:g}):e("div",{className:"FeaturedToolList",children:E.map(r=>e(c,{name:r.name,type:r.type,description:r.description,id:r.id,date:r.date,toolDetailPageURL:f},r.id))})},S=y;try{y.displayName="FeaturedToolsList",y.__docgenInfo={description:`Display a set of FeaturedToolCards (driven by a Table/View). Driven by the following annotations/column names:
'id', 'name', 'type', and 'description'.`,displayName:"FeaturedToolsList",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},toolDetailPageURL:{defaultValue:null,description:"",name:"toolDetailPageURL",required:!0,type:{name:"string"}},idColumnName:{defaultValue:{value:"id"},description:"",name:"idColumnName",required:!1,type:{name:"string"}},nameColumnName:{defaultValue:{value:"name"},description:"",name:"nameColumnName",required:!1,type:{name:"string"}},descriptionColumnName:{defaultValue:{value:"description"},description:"",name:"descriptionColumnName",required:!1,type:{name:"string"}},typeColumnName:{defaultValue:{value:"type"},description:"",name:"typeColumnName",required:!1,type:{name:"string"}},dateColumnName:{defaultValue:{value:"date"},description:"",name:"dateColumnName",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/featured_tools/FeaturedToolsList.tsx#FeaturedToolsList"]={docgenInfo:y.__docgenInfo,name:"FeaturedToolsList",path:"src/lib/containers/home_page/featured_tools/FeaturedToolsList.tsx#FeaturedToolsList"})}catch{}const Ee={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:59,line:12},endLoc:{col:1,line:14},startBody:{col:59,line:12},endBody:{col:1,line:14}}}}},title:"Home Page/FeaturedToolsList",component:S},w=t=>e(S,{...t}),P=w.bind({});P.args={entityId:"syn26450069",idColumnName:"resourceId",nameColumnName:"resourceName",descriptionColumnName:"description",typeColumnName:"resourceType",dateColumnName:"dateAdded",toolDetailPageURL:"/Explore/Tools/DetailsPage?Resource_id="};const he=["Demo"];export{P as Demo,he as __namedExportsOrder,Ee as default};
