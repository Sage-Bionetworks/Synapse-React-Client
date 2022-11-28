import{r as f,j as o,F as m,a as S}from"./jsx-runtime.f4a5fef7.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{V as u,a9 as _}from"./index.78005489.js";import{u as y}from"./useGetDownloadListStatistics.f5ed43fc.js";import{I as V}from"./IconSvg.d54f7f38.js";import{T as g}from"./Tooltip.8a367305.js";import"./iframe.1c2d6841.js";import"./index.ee4c3b55.js";import"./SynapseConstants.290eab74.js";import"./Button.6c384231.js";import"./styled.02bbe28b.js";import"./utils.c51ff475.js";import"./TransitionGroupContext.bc250134.js";import"./useTheme.cb95caa9.js";import"./Alert.4753fb70.js";import"./hook.82a0cc8c.js";import"./createWithBsPrefix.54f05b7e.js";import"./divWithClassName.967bfcd9.js";import"./index.35ce73ec.js";import"./Fade.f600cb07.js";import"./isArray.c85c7bf8.js";import"./getEndpoint.bb7ded34.js";import"./Link.880594dd.js";import"./Typography.839bb703.js";import"./Button.4567776a.js";import"./ButtonBase.380fb064.js";import"./emotion-react.browser.esm.e2223364.js";import"./createSvgIcon.5d1f0251.js";import"./InfoOutlined.b6a78282.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
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
