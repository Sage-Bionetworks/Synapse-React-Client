import{r as s,j as t,a as i}from"./jsx-runtime.1a5a2715.js";import{h as w,E as N,a3 as I,cZ as L}from"./index.ee300637.js";import{S as b}from"./Sort.25a7428d.js";import{D as f}from"./EntityChildren.50133102.js";import{S as k}from"./LoadingScreen.34a4d5c9.js";import{a as O}from"./useFavorites.21f5c045.js";import{I as g}from"./IconSvg.29727645.js";import{c as j,a as M,p as _}from"./EntityIcon.93350fe4.js";import{P as A}from"./getEndpoint.bb7ded34.js";import{T as R}from"./Tooltip.5c94c0fd.js";import{T as G}from"./Table.cfd583a1.js";import"./iframe.cf33b896.js";import"./index.6dbf9fa2.js";import"./Button.47fead8e.js";import"./index.57d09176.js";import"./withStyles.7c3d6aba.js";import"./utils.6069a350.js";import"./Alert.9d12ab40.js";import"./index.35ce73ec.js";import"./isArray.627abb94.js";import"./SvgIcon.43465c61.js";import"./Typography.51984e68.js";import"./makeStyles.bd855ff6.js";import"./Modal.718a01b2.js";import"./useWaitForDOMRef.4377410d.js";import"./inheritsLoose.848d8abd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useInfiniteQuery.142046cf.js";import"./createSvgIcon.d6b9a03c.js";import"./InfoOutlined.9735fa89.js";import"./TypeUtils.a2c41307.js";function C(){const{accessToken:a}=w(),[r,h]=s.exports.useState(void 0),[n,S]=s.exports.useState(""),[p,x]=s.exports.useState(void 0),[v,l]=s.exports.useState(),{data:m,isFetching:T,isError:y,error:d,refetch:E}=O();s.exports.useEffect(()=>{y&&d&&l(d)},[y,d]),s.exports.useEffect(()=>{l(a?void 0:new Error("Please sign in to access your favorites."))},[a]);const F=(e,o)=>{const c=e.toLowerCase();return o.filter(P=>P.name.toLowerCase().indexOf(c)>=0)};s.exports.useEffect(()=>{if(m){let e=[...m.results];r&&e.sort((o,c)=>r.direction=="DESC"?o[r.field].toLowerCase()>c[r.field].toLowerCase()?1:-1:o[r.field].toLowerCase()<c[r.field].toLowerCase()?1:-1),n&&(e=F(n,e)),x(e)}},[m,n,r]);const D=async e=>{try{await L(e.id,a),E()}catch(o){console.error(o)}},u=e=>h&&t(b,{role:"button",style:{height:"20px"},active:(r==null?void 0:r.field)===e,direction:(r==null?void 0:r.field)===e?r.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const o=e===(r==null?void 0:r.field)?r.direction==="ASC"?"DESC":"ASC":"DESC";h({field:e,direction:o})}});return v?t(N,{error:v}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[t(g,{options:{icon:"searchOutlined"}}),t(I.Control,{type:"search",placeholder:"Favorite Name",value:n,onChange:e=>{S(e.target.value)}})]}),p&&p.length>0&&t("div",{className:"bootstrap-4-backport",children:i(G,{striped:!0,responsive:!0,className:"FavoritesTable",children:[t("thead",{children:i("tr",{children:[t("th",{}),i("th",{children:["Name",t("span",{children:u("name")})]}),i("th",{children:["Type",t("span",{children:u("type")})]})]})}),t("tbody",{children:p.map(e=>{if(e){const o=j(e.type);return i("tr",{children:[t("td",{children:t(R,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:t("a",{onClick:()=>{D(e)},className:"ignoreLink",children:t(g,{options:{icon:"fav",color:"#EDC766"}})})})}),t("td",{children:t("a",{rel:"noopener noreferrer",href:`${A.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[t(M,{type:o,style:{marginRight:"5px"}}),_(o)]})]},e.id)}else return!1})})]})}),T&&t("div",{className:"placeholder",children:t(k,{size:30})})]})}const Ce={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:55,line:13},endLoc:{col:80,line:13},startBody:{col:55,line:13},endBody:{col:80,line:13}}}}},title:"Synapse/FavoritesPage",component:C},U=a=>t(C,{}),Se=U.bind({}),xe=["Demo"];export{Se as Demo,xe as __namedExportsOrder,Ce as default};
