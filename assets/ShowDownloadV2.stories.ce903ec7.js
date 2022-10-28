import{r as f,j as o,F as m,a as S}from"./jsx-runtime.4eaffca0.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{f as u,w as _}from"./index.e08ca228.js";import{u as y}from"./useGetDownloadListStatistics.2dd86e99.js";import{I as V}from"./IconSvg.9da8b4b8.js";import{T as g}from"./Tooltip.baf92203.js";import"./iframe.f6ed0eb4.js";import"./index.48154df0.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.9f15dabf.js";import"./index.57d09176.js";import"./withStyles.21c7e80a.js";import"./utils.2281a9d6.js";import"./Alert.27b9a701.js";import"./createWithBsPrefix.735cbed5.js";import"./index.35ce73ec.js";import"./isArray.33858a1d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4d40d0c3.js";import"./createSvgIcon.d152a531.js";import"./InfoOutlined.489c1b42.js";import"./makeStyles.c1994d74.js";function e({to:t,className:p=""}){var d;const{accessToken:n}=u(),s=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:i,error:a}=y();if(f.exports.useEffect(()=>{i&&a&&n&&s(a)},[i,a,s,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{options:{icon:"cart"}})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:t,rel:"noopener noreferrer",children:h})}try{e.displayName="ShowDownloadV2",e.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"]={docgenInfo:e.__docgenInfo,name:"ShowDownloadV2",path:"src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"})}catch{}const U={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Download/ShowDownloadV2",component:e},C=t=>o(e,{...t}),T=C.bind({});T.args={to:"/#/Other%20Components?id=downloadcartpage"};const W=["Demo"];export{T as Demo,W as __namedExportsOrder,U as default};
