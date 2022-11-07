import{r as s,j as t,a as i}from"./jsx-runtime.6cb91464.js";import{h as w,E as N,_ as b,w as I,bq as L,cj as k}from"./index.253aaada.js";import{S as O}from"./Sort.14d5feba.js";import{D as f}from"./EntityChildren.50133102.js";import{S as j}from"./LoadingScreen.5bb8c5fe.js";import{a as _}from"./useFavorites.521c050a.js";import{I as g}from"./IconSvg.e72d865a.js";import{P as M}from"./getEndpoint.bb7ded34.js";import{E as A}from"./EntityIcon.973857d5.js";import{T as R}from"./Tooltip.9b073f35.js";import{T as G}from"./Table.d9e33fc4.js";import"./iframe.77de7a8b.js";import"./index.13becb40.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.719dc857.js";import"./styled.9d49d23e.js";import"./utils.11d89a6f.js";import"./Alert.f130f9d6.js";import"./createWithBsPrefix.c2eb45fa.js";import"./index.35ce73ec.js";import"./isArray.c85446b1.js";import"./SvgIcon.7bbcd48d.js";import"./emotion-react.browser.esm.63b80b77.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./Modal.79aadbe2.js";import"./contains.6a52d65a.js";import"./inheritsLoose.1e598ca9.js";import"./usePrevious.05e36544.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.8c62de15.js";import"./Typography.c072ef4f.js";import"./useInfiniteQuery.62a8c625.js";import"./createSvgIcon.c493b6c9.js";import"./InfoOutlined.04f2d1df.js";function C(){const{accessToken:a}=w(),[r,h]=s.exports.useState(void 0),[n,S]=s.exports.useState(""),[p,x]=s.exports.useState(void 0),[v,l]=s.exports.useState(),{data:m,isFetching:E,isError:y,error:d,refetch:T}=_();s.exports.useEffect(()=>{y&&d&&l(d)},[y,d]),s.exports.useEffect(()=>{l(a?void 0:new Error("Please sign in to access your favorites."))},[a]);const F=(e,o)=>{const c=e.toLowerCase();return o.filter(P=>P.name.toLowerCase().indexOf(c)>=0)};s.exports.useEffect(()=>{if(m){let e=[...m.results];r&&e.sort((o,c)=>r.direction=="DESC"?o[r.field].toLowerCase()>c[r.field].toLowerCase()?1:-1:o[r.field].toLowerCase()<c[r.field].toLowerCase()?1:-1),n&&(e=F(n,e)),x(e)}},[m,n,r]);const D=async e=>{try{await k(e.id,a),T()}catch(o){console.error(o)}},u=e=>h&&t(O,{role:"button",style:{height:"20px"},active:(r==null?void 0:r.field)===e,direction:(r==null?void 0:r.field)===e?r.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const o=e===(r==null?void 0:r.field)?r.direction==="ASC"?"DESC":"ASC":"DESC";h({field:e,direction:o})}});return v?t(N,{error:v}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[t(g,{icon:"searchOutlined"}),t(b.Control,{type:"search",placeholder:"Favorite Name",value:n,onChange:e=>{S(e.target.value)}})]}),p&&p.length>0&&t("div",{className:"bootstrap-4-backport",children:i(G,{striped:!0,responsive:!0,className:"FavoritesTable",children:[t("thead",{children:i("tr",{children:[t("th",{}),i("th",{children:["Name",t("span",{children:u("name")})]}),i("th",{children:["Type",t("span",{children:u("type")})]})]})}),t("tbody",{children:p.map(e=>{if(e){const o=I(e.type);return i("tr",{children:[t("td",{children:t(R,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:t("a",{onClick:()=>{D(e)},className:"ignoreLink",children:t(g,{icon:"fav",sx:{color:"#EDC766"}})})})}),t("td",{children:t("a",{rel:"noopener noreferrer",href:`${M.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[t(A,{type:o,style:{marginRight:"5px"}}),L(o)]})]},e.id)}else return!1})})]})}),E&&t("div",{className:"placeholder",children:t(j,{size:30})})]})}const Ee={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:55,line:13},endLoc:{col:80,line:13},startBody:{col:55,line:13},endBody:{col:80,line:13}}}}},title:"Synapse/FavoritesPage",component:C},U=a=>t(C,{}),Te=U.bind({}),Fe=["Demo"];export{Te as Demo,Fe as __namedExportsOrder,Ee as default};
