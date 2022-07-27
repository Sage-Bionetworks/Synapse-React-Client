import{f as c}from"./DateFormatter.eb5b4bbf.js";import{h as s}from"./moment.53181859.js";import{W as h,cv as p,w as l}from"./index.985eae18.js";import{a as i,j as t}from"./jsx-runtime.2e925369.js";import{T as u}from"./Table.9806fafe.js";import{B as g}from"./Button.c582ea4c.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.fd56d773.js";import"./iframe.180659ea.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";function A(e){const{accessToken:r}=l();return h(["oAuthClient",r],async a=>await p(r,a.pageParam),{...e,getNextPageParam:a=>a.nextPageToken})}const o=()=>{var m;const{data:e,hasNextPage:r,fetchNextPage:a}=A(),d=(m=e==null?void 0:e.pages.flatMap(n=>n.results))!=null?m:[];return i("div",{className:"bootstrap-4-backport",children:[i(u,{striped:!0,children:[t("thead",{children:i("tr",{children:[t("th",{children:"Created"}),t("th",{children:"Modified"}),t("th",{children:"Client"}),t("th",{children:"Verified"}),t("th",{children:"App Secret"}),t("th",{children:"Actions"})]})}),t("tbody",{children:d.map(n=>i("tr",{children:[t("td",{children:c(s(n.createdOn))}),t("td",{children:c(s(n.modifiedOn))}),t("td",{children:n.client_name}),t("td",{children:n.verified?"Yes":"SUBMIT_VERIFICATION_PLACE_HOLDER"}),t("td",{children:"GENERATE_PLACEHOLDER"}),t("td",{children:"ACTIONS_PLACEHOLDER"})]},n.client_id))})]}),r&&t("div",{className:"text-center",children:t(g,{variant:"primary",onClick:()=>a(),children:"Load more"})})]})};try{o.displayName="OAuthManagement",o.__docgenInfo={description:"",displayName:"OAuthManagement",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/oauth/OAuthManagement.tsx#OAuthManagement"]={docgenInfo:o.__docgenInfo,name:"OAuthManagement",path:"src/lib/containers/oauth/OAuthManagement.tsx#OAuthManagement"})}catch{}var H={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { OAuthManagement } from './OAuthManagement'

export default {
  title: 'OAuth Management',
  component: OAuthManagement,
  argTypes: {},
} as ComponentMeta<typeof OAuthManagement>

const Template: ComponentStory<typeof OAuthManagement> = args => (
  <OAuthManagement {...args} />
)

export const OAuthManagementDemo = Template.bind({})
OAuthManagementDemo.args = {}
`,locationsMap:{"o-auth-management-demo":{startLoc:{col:57,line:12},endLoc:{col:1,line:14},startBody:{col:57,line:12},endBody:{col:1,line:14}}}}},title:"OAuth Management",component:o,argTypes:{}};const O=e=>t(o,{...e}),f=O.bind({});f.args={};const Y=["OAuthManagementDemo"];export{f as OAuthManagementDemo,Y as __namedExportsOrder,H as default};
//# sourceMappingURL=OAuthManagement.stories.c7f8167a.js.map
