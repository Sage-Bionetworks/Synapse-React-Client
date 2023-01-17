import{r as f,j as o,F as m,a as S}from"./jsx-runtime.d6be66a9.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{a4 as u,ak as _}from"./index.b3fc12c1.js";import{u as y}from"./useDownloadList.b75a79e5.js";import{I as V}from"./IconSvg.67904b39.js";import{a as g}from"./Tooltip.c89a275a.js";import"./iframe.78dc3b5d.js";import"./index.3b7d1b21.js";import"./SynapseConstants.aef18750.js";import"./Button.58f5aaec.js";import"./styled.f07e33c6.js";import"./useTheme.0cbb662e.js";import"./TransitionGroupContext.27368eb3.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./createWithBsPrefix.139b0869.js";import"./divWithClassName.f4023709.js";import"./index.35ce73ec.js";import"./Typography.079c4f38.js";import"./Fade.c734522e.js";import"./isArray.3ed41029.js";import"./getEndpoint.f1f195f5.js";import"./SvgIcon.b9658c5d.js";import"./IconButton.3b892d3a.js";import"./ButtonBase.250c511d.js";import"./emotion-react.browser.esm.8203c469.js";import"./Link.7f48e2dc.js";import"./Button.bef5272a.js";import"./useMutation.4d42a75f.js";import"./useInfiniteQuery.153ac882.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
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
