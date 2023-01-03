import{r as f,j as o,F as m,a as S}from"./jsx-runtime.abb726e8.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{W as u,aa as _}from"./EntityTypeUtils.68b1ba2e.js";import{u as y}from"./useDownloadList.0667e167.js";import{I as V}from"./IconSvg.7db66457.js";import{a as g}from"./Tooltip.6e0804a9.js";import"./iframe.eb3e4e59.js";import"./index.2c5f845c.js";import"./Fade.a8b10681.js";import"./styled.f63790d0.js";import"./useTheme.8f8018ca.js";import"./TransitionGroupContext.bebd881a.js";import"./isArray.ab001f9e.js";import"./Button.adf7cc86.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./SvgIcon.e2be6ff9.js";import"./createWithBsPrefix.1bfef79f.js";import"./IconButton.ed9fd281.js";import"./ButtonBase.5b0e8114.js";import"./emotion-react.browser.esm.e1070f55.js";import"./Link.27f5a2e0.js";import"./Typography.1b6708c1.js";import"./Button.aed7d197.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.955b55b4.js";import"./hook.f27fbe2d.js";import"./divWithClassName.dfc40d29.js";import"./useMutation.7f638909.js";import"./useInfiniteQuery.08a27252.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"]={docgenInfo:t.__docgenInfo,name:"ShowDownloadV2",path:"src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"})}catch{}const to={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Download/ShowDownloadV2",component:t},C=e=>o(t,{...e}),T=C.bind({});T.args={to:"/#/Other%20Components?id=downloadcartpage"};const eo=["Demo"];export{T as Demo,eo as __namedExportsOrder,to as default};
