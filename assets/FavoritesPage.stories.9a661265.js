import{f as N,E as b,bj as I,cl as L}from"./index.0378956d.js";import{S as k}from"./Sort.7ca9f85f.js";import{D as f}from"./EntityChildren.50133102.js";import"./assert.75d17e29.js";import{S as O}from"./LoadingScreen.91642215.js";import{a as j}from"./useFavorites.b8705916.js";import{I as C}from"./IconSvg.7fcfdfd8.js";import{e as R,f as M}from"./EntityTypeUtils.e0226b68.js";import{P as _}from"./getEndpoint.bb7ded34.js";import{E as A}from"./EntityIcon.18eeb1a5.js";import{T as G}from"./Tooltip.b1e63f93.js";import{j as t,a as i}from"./jsx-runtime.00d70968.js";import{T as U}from"./Table.7797426d.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./SvgIcon.e37b9412.js";import"./iframe.e59a9506.js";import"./Typography.868473dc.js";import"./makeStyles.45e8b79c.js";import"./useTheme.aaa309f8.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./createSvgIcon.99e72c0f.js";import"./InfoOutlined.60e019a4.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";import"./slicedToArray.e72f11da.js";const c=window.React.useState,h=window.React.useEffect;function S(){const{accessToken:n}=N(),[o,v]=c(void 0),[a,T]=c(""),[p,E]=c(void 0),[y,m]=c(),{data:l,isFetching:F,isError:u,error:d,refetch:w}=j();h(()=>{u&&d&&m(d)},[u,d]),h(()=>{m(n?void 0:new Error("Please sign in to access your favorites."))},[n]);const D=(e,r)=>{const s=e.toLowerCase();return r.filter(x=>x.name.toLowerCase().indexOf(s)>=0)};h(()=>{if(l){let e=[...l.results];o&&e.sort((r,s)=>o.direction=="DESC"?r[o.field].toLowerCase()>s[o.field].toLowerCase()?1:-1:r[o.field].toLowerCase()<s[o.field].toLowerCase()?1:-1),a&&(e=D(a,e)),E(e)}},[l,a,o]);const P=async e=>{try{await L(e.id,n),w()}catch(r){console.error(r)}},g=e=>v&&t(k,{role:"button",style:{height:"20px"},active:(o==null?void 0:o.field)===e,direction:(o==null?void 0:o.field)===e?o.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const r=e===(o==null?void 0:o.field)?o.direction==="ASC"?"DESC":"ASC":"DESC";v({field:e,direction:r})}});return y?t(b,{error:y}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[t(C,{options:{icon:"searchOutlined"}}),t(I.Control,{type:"search",placeholder:"Favorite Name",value:a,onChange:e=>{T(e.target.value)}})]}),p&&p.length>0&&t("div",{className:"bootstrap-4-backport",children:i(U,{striped:!0,responsive:!0,className:"FavoritesTable",children:[t("thead",{children:i("tr",{children:[t("th",{}),i("th",{children:["Name",t("span",{children:g("name")})]}),i("th",{children:["Type",t("span",{children:g("type")})]})]})}),t("tbody",{children:p.map(e=>{if(e){const r=R(e.type);return i("tr",{children:[t("td",{children:t(G,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:t("a",{onClick:()=>{P(e)},className:"ignoreLink",children:t(C,{options:{icon:"fav",color:"#EDC766"}})})})}),t("td",{children:t("a",{rel:"noopener noreferrer",href:`${_.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[t(A,{type:r,style:{marginRight:"5px"}}),M(r)]})]},e.id)}else return!1})})]})}),F&&t("div",{className:"placeholder",children:t(O,{size:30})})]})}const De={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FavoritesPage from './FavoritesPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/FavoritesPage',
  component: FavoritesPage,
} as ComponentMeta<typeof FavoritesPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FavoritesPage> = args => <FavoritesPage />

export const Demo = Template.bind({})
`,locationsMap:{demo:{startLoc:{col:55,line:13},endLoc:{col:80,line:13},startBody:{col:55,line:13},endBody:{col:80,line:13}}}}},title:"Synapse/FavoritesPage",component:S},$=n=>t(S,{}),Pe=$.bind({}),xe=["Demo"];export{Pe as Demo,xe as __namedExportsOrder,De as default};
