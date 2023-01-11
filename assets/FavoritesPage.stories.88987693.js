import{r as a,j as t,a as i}from"./jsx-runtime.8deabff4.js";import{S as P}from"./Sort.3e9a39d7.js";import{D as f}from"./EntityChildren.50133102.js";import{a4 as N,az as w,aT as I,ah as L,cf as b}from"./index.7e720d98.js";import{S as k}from"./LoadingScreen.d8050d22.js";import{d as O,c as j}from"./useFavorites.c0f3fd2c.js";import{I as g}from"./IconSvg.c37effa3.js";import{P as M}from"./getEndpoint.f1f195f5.js";import{E as R}from"./EntityIcon.1c3aa2c3.js";import{a as _}from"./Tooltip.1a090672.js";import{T as A}from"./Table.66fad971.js";import"./iframe.9a9f3456.js";import"./index.57c4b3f6.js";import"./SynapseConstants.71946a35.js";import"./Button.7f145214.js";import"./styled.4ed13d54.js";import"./useTheme.4dbd8795.js";import"./TransitionGroupContext.f0e5bdf3.js";import"./FullWidthAlert.5c7c6876.js";import"./hook.1ef6fcec.js";import"./createWithBsPrefix.10b29307.js";import"./divWithClassName.17daa550.js";import"./index.35ce73ec.js";import"./Typography.d2c075af.js";import"./Fade.5eff05c6.js";import"./isArray.60ef1f80.js";import"./SvgIcon.68c0612f.js";import"./IconButton.88d7d90d.js";import"./ButtonBase.f183321e.js";import"./emotion-react.browser.esm.3c5e03a0.js";import"./Link.150a4582.js";import"./Button.eb6e2031.js";import"./Modal.8812f470.js";import"./contains.28185ff5.js";import"./inheritsLoose.1bd8d1a6.js";import"./usePrevious.1aaea82b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.c2404935.js";import"./useMutation.1145132d.js";import"./useInfiniteQuery.7899d034.js";function C(){const{accessToken:c}=N(),[r,h]=a.exports.useState(void 0),[s,S]=a.exports.useState(""),[p,x]=a.exports.useState(void 0),[u,m]=a.exports.useState(),{data:l,isFetching:T,isError:v,error:d}=O();a.exports.useEffect(()=>{v&&d&&m(d)},[v,d]),a.exports.useEffect(()=>{m(c?void 0:new Error("Please sign in to access your favorites."))},[c]);const E=(e,o)=>{const n=e.toLowerCase();return o.filter(D=>D.name.toLowerCase().indexOf(n)>=0)};a.exports.useEffect(()=>{if(l){let e=[...l.results];r&&e.sort((o,n)=>r.direction=="DESC"?o[r.field].toLowerCase()>n[r.field].toLowerCase()?1:-1:o[r.field].toLowerCase()<n[r.field].toLowerCase()?1:-1),s&&(e=E(s,e)),x(e)}},[l,s,r]);const{mutate:F}=j(),y=e=>h&&t(P,{role:"button",style:{height:"20px"},active:(r==null?void 0:r.field)===e,direction:(r==null?void 0:r.field)===e?r.direction==="DESC"?f.DESC:f.ASC:f.DESC,onClick:()=>{const o=e===(r==null?void 0:r.field)?r.direction==="ASC"?"DESC":"ASC":"DESC";h({field:e,direction:o})}});return u?t(w,{error:u}):i("div",{className:"FavoritesPage",children:[i("div",{className:"searchInputWithIcon",children:[t(g,{icon:"searchOutlined"}),t(I.Control,{type:"search",placeholder:"Favorite Name",value:s,onChange:e=>{S(e.target.value)}})]}),p&&p.length>0&&t("div",{className:"bootstrap-4-backport",children:i(A,{striped:!0,responsive:!0,className:"FavoritesTable",children:[t("thead",{children:i("tr",{children:[t("th",{}),i("th",{children:["Name",t("span",{children:y("name")})]}),i("th",{children:["Type",t("span",{children:y("type")})]})]})}),t("tbody",{children:p.map(e=>{if(e){const o=L(e.type);return i("tr",{children:[t("td",{children:t(_,{title:"Click the star to remove this item from your favorites",enterNextDelay:300,placement:"right",children:t("a",{onClick:()=>{F(e.id)},className:"ignoreLink",children:t(g,{icon:"fav",sx:{color:"#EDC766"}})})})}),t("td",{children:t("a",{rel:"noopener noreferrer",href:`${M.PORTAL}#!Synapse:${e.id}`,children:e.name})}),i("td",{children:[t(R,{type:o,style:{marginRight:"5px"}}),b(o)]})]},e.id)}else return!1})})]})}),T&&t("div",{className:"placeholder",children:t(k,{size:30})})]})}const Ne={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:55,line:13},endLoc:{col:80,line:13},startBody:{col:55,line:13},endBody:{col:80,line:13}}}}},title:"Synapse/FavoritesPage",component:C},z=c=>t(C,{}),we=z.bind({}),Ie=["Demo"];export{we as Demo,Ie as __namedExportsOrder,Ne as default};
