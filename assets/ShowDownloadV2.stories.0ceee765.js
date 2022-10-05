import{r as f,j as o,F as m,a as S}from"./jsx-runtime.b98719ac.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{h as u,r as _}from"./index.aa213b73.js";import{u as y}from"./useGetDownloadListStatistics.c0cafcda.js";import{I as V}from"./IconSvg.3b0efcae.js";import{T as g}from"./Tooltip.5964f419.js";import"./iframe.1e793943.js";import"./index.f0bb0570.js";import"./withStyles.79d10ad6.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.cf52bce4.js";import"./index.57d09176.js";import"./Button.ed04e3a1.js";import"./Transition.ac6e0624.js";import"./index.35ce73ec.js";import"./isArray.3c258aa7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4537d0f4.js";import"./createSvgIcon.63cd09dc.js";import"./InfoOutlined.d5bf38f7.js";import"./slicedToArray.e72f11da.js";import"./useTheme.cca4eae4.js";import"./makeStyles.9e8f686a.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{options:{icon:"cart"}})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
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
