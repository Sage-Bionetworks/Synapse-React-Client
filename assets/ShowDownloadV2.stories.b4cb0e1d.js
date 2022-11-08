import{r as f,j as o,F as c,a as S}from"./jsx-runtime.e755df9d.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{j as u,B as _}from"./index.f37f3b8f.js";import{u as y}from"./useGetDownloadListStatistics.1930ac0b.js";import{I as V}from"./IconSvg.0451ffde.js";import{T as g}from"./Tooltip.68fb53f0.js";import"./iframe.2151c0e3.js";import"./index.46e2a3d6.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.ce5d2622.js";import"./styled.134e90bd.js";import"./utils.61686747.js";import"./Alert.7ac348fd.js";import"./createWithBsPrefix.c5475a12.js";import"./index.35ce73ec.js";import"./isArray.32035835.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.26fd4209.js";import"./createSvgIcon.4e7dae8f.js";import"./InfoOutlined.f6c28811.js";function e({to:t,className:m=""}){var d;const{accessToken:n}=u(),s=_(),p="Click to view items in your download cart.",{data:r,isLoading:w,isError:i,error:a}=y();if(f.exports.useEffect(()=>{i&&a&&n&&s(a)},[i,a,s,n]),!n||w)return o(c,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(c,{});const h=o(g,{title:p,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${m}`,href:t,rel:"noopener noreferrer",children:h})}try{e.displayName="ShowDownloadV2",e.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"]={docgenInfo:e.__docgenInfo,name:"ShowDownloadV2",path:"src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"})}catch{}const G={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShowDownloadV2 from './ShowDownloadV2'

export default {
  title: 'Download/ShowDownloadV2',
  component: ShowDownloadV2,
} as ComponentMeta<typeof ShowDownloadV2>

const Template: ComponentStory<typeof ShowDownloadV2> = args => (
  <ShowDownloadV2 {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  to: '/#/Other%20Components?id=downloadcartpage',
}
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Download/ShowDownloadV2",component:e},C=t=>o(e,{...t}),T=C.bind({});T.args={to:"/#/Other%20Components?id=downloadcartpage"};const P=["Demo"];export{T as Demo,P as __namedExportsOrder,G as default};
