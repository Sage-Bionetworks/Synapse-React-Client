import{r as s,j as t,a as i}from"./jsx-runtime.0721b30f.js";import{V as w,R as N,aw as L,a6 as b,bL as I,cM as k}from"./index.96fee529.js";import{S as O}from"./Sort.41fe01fb.js";import{D as f}from"./EntityChildren.50133102.js";import{S as M}from"./LoadingScreen.596009c1.js";import{a as j}from"./useFavorites.a3d73d53.js";import{I as g}from"./IconSvg.69d2b3a3.js";import{P as R}from"./getEndpoint.bb7ded34.js";import{E as _}from"./EntityIcon.1e92edc0.js";import{T as A}from"./Tooltip.95391ddc.js";import{T as G}from"./Table.88037615.js";import"./iframe.d07454b7.js";import"./index.84874f77.js";import"./SynapseConstants.290eab74.js";import"./Button.c6170972.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";import"./Modal.ffe20d01.js";import"./contains.4df2422e.js";import"./inheritsLoose.53a219d1.js";import"./usePrevious.7579f6d6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.65459bf1.js";import"./useInfiniteQuery.160050ed.js";import"./createSvgIcon.8972a51f.js";import"./InfoOutlined.1d86a385.js";function C(){const{accessToken:a}=w(),[r,h]=s.exports.useState(void 0),[n,S]=s.exports.useState(""),[p,x]=s.exports.useState(void 0),[v,m]=s.exports.useState(),{data:l,isFetching:T,isError:y,error:d,refetch:E}=j();s.exports.useEffect(()=>{y&&d&&m(d)},[y,d]),s.exports.useEffect(()=>{m(a?void 0:new Error("Please sign in to access your favorites."))},[a]);const F=(e,o)=>{const c=e.toLowerCase();return o.filter(P=>P.name.toLowerCase().indexOf(c)>=0)};s.exports.useEffect(()=>{if(l){let e=[...l.results];r&&e.sort((o,c)=>r.direction=="DESC"?o[r.field].toLowerCase()>c[r.field].toLowerCase()?1:-1:o[r.field].toLowerCase()<c[r.field].toLowerCase()?1:-1),n&&(e=F(n,e)),x(e)}},[l,n,r]);const D=async e=>{try{await k(e.id,a),E()}catch(o){console.error(o)}},u=e=>h&&t(O,{role:"button",style:{height:"20px"},active:(r==null?void 0:r.field)===e,direction:(r==null?void 0:r.field)===e?r.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const o=e===(r==null?void 0:r.field)?r.direction==="ASC"?"DESC":"ASC":"DESC";h({field:e,direction:o})}});return v?t(N,{error:v}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[t(g,{icon:"searchOutlined"}),t(L.Control,{type:"search",placeholder:"Favorite Name",value:n,onChange:e=>{S(e.target.value)}})]}),p&&p.length>0&&t("div",{className:"bootstrap-4-backport",children:i(G,{striped:!0,responsive:!0,className:"FavoritesTable",children:[t("thead",{children:i("tr",{children:[t("th",{}),i("th",{children:["Name",t("span",{children:u("name")})]}),i("th",{children:["Type",t("span",{children:u("type")})]})]})}),t("tbody",{children:p.map(e=>{if(e){const o=b(e.type);return i("tr",{children:[t("td",{children:t(A,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:t("a",{onClick:()=>{D(e)},className:"ignoreLink",children:t(g,{icon:"fav",sx:{color:"#EDC766"}})})})}),t("td",{children:t("a",{rel:"noopener noreferrer",href:`${R.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[t(_,{type:o,style:{marginRight:"5px"}}),I(o)]})]},e.id)}else return!1})})]})}),T&&t("div",{className:"placeholder",children:t(M,{size:30})})]})}const Ne={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:55,line:13},endLoc:{col:80,line:13},startBody:{col:55,line:13},endBody:{col:80,line:13}}}}},title:"Synapse/FavoritesPage",component:C},U=a=>t(C,{}),Le=U.bind({}),be=["Demo"];export{Le as Demo,be as __namedExportsOrder,Ne as default};
