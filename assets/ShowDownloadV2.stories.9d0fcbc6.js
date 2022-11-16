import{r as f,j as o,F as m,a as S}from"./jsx-runtime.ef6dd6ca.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{j as u,B as _}from"./index.dae95658.js";import{u as y}from"./useGetDownloadListStatistics.67ff0062.js";import{I as V}from"./IconSvg.afd54b28.js";import{T as g}from"./Tooltip.3430fa1d.js";import"./iframe.60aac2d9.js";import"./index.0c4c5f34.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.a73b55da.js";import"./styled.e27331e3.js";import"./utils.e96b9b4f.js";import"./TransitionGroupContext.7ee16c7e.js";import"./Alert.ca959f09.js";import"./createWithBsPrefix.fd753f10.js";import"./index.35ce73ec.js";import"./isArray.aa335c2b.js";import"./getEndpoint.bb7ded34.js";import"./Link.3eeff9dd.js";import"./Typography.4e908f90.js";import"./Button.325fe68b.js";import"./ButtonBase.acc32807.js";import"./createSvgIcon.f73758be.js";import"./InfoOutlined.cee1fdf4.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"]={docgenInfo:t.__docgenInfo,name:"ShowDownloadV2",path:"src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"})}catch{}const $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Download/ShowDownloadV2",component:t},C=e=>o(t,{...e}),T=C.bind({});T.args={to:"/#/Other%20Components?id=downloadcartpage"};const J=["Demo"];export{T as Demo,J as __namedExportsOrder,$ as default};
