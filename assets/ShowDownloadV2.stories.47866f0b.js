import{r as f,j as o,F as m,a as S}from"./jsx-runtime.0721b30f.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{V as u,a9 as _}from"./index.96fee529.js";import{u as y}from"./useGetDownloadListStatistics.8c5e991c.js";import{I as V}from"./IconSvg.69d2b3a3.js";import{T as g}from"./Tooltip.95391ddc.js";import"./iframe.d07454b7.js";import"./index.84874f77.js";import"./SynapseConstants.290eab74.js";import"./Button.c6170972.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";import"./createSvgIcon.8972a51f.js";import"./InfoOutlined.1d86a385.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"]={docgenInfo:t.__docgenInfo,name:"ShowDownloadV2",path:"src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"})}catch{}const oo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Download/ShowDownloadV2",component:t},C=e=>o(t,{...e}),T=C.bind({});T.args={to:"/#/Other%20Components?id=downloadcartpage"};const to=["Demo"];export{T as Demo,to as __namedExportsOrder,oo as default};
