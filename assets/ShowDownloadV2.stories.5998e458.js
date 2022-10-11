import{r as f,j as o,F as m,a as S}from"./jsx-runtime.f6e67d69.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{h as u,y as _}from"./index.399b1ebb.js";import{u as y}from"./useGetDownloadListStatistics.098c2be3.js";import{I as V}from"./IconSvg.76f9c9ad.js";import{T as g}from"./Tooltip.e69703f2.js";import"./iframe.0155d3d5.js";import"./index.5aa44f42.js";import"./Alert.161bc8be.js";import"./Button.bb6df31f.js";import"./index.57d09176.js";import"./Transition.45107636.js";import"./index.35ce73ec.js";import"./isArray.bbc3389f.js";import"./withStyles.e9153c6c.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b9f91416.js";import"./createSvgIcon.1bc5e790.js";import"./InfoOutlined.6b0ecc0d.js";import"./useTheme.b5d1a103.js";import"./makeStyles.b3ebb6fc.js";function e({to:t,className:p=""}){var d;const{accessToken:n}=u(),s=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:i,error:a}=y();if(f.exports.useEffect(()=>{i&&a&&n&&s(a)},[i,a,s,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{options:{icon:"cart"}})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:t,rel:"noopener noreferrer",children:h})}try{e.displayName="ShowDownloadV2",e.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"]={docgenInfo:e.__docgenInfo,name:"ShowDownloadV2",path:"src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"})}catch{}const P={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Download/ShowDownloadV2",component:e},C=t=>o(e,{...t}),T=C.bind({});T.args={to:"/#/Other%20Components?id=downloadcartpage"};const U=["Demo"];export{T as Demo,U as __namedExportsOrder,P as default};
