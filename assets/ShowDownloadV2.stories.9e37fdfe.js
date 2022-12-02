import{r as f,j as o,F as m,a as S}from"./jsx-runtime.e3bfef16.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{V as u,a9 as _}from"./index.62dd2683.js";import{u as y}from"./useGetDownloadListStatistics.ea831ed1.js";import{I as V}from"./IconSvg.fe1e65ad.js";import{T as g}from"./Tooltip.1d7a2ca6.js";import"./iframe.2f11fea3.js";import"./index.5b26081f.js";import"./SynapseConstants.290eab74.js";import"./Button.d5f5019a.js";import"./styled.2799bbab.js";import"./utils.09644bf2.js";import"./TransitionGroupContext.f0c2dee6.js";import"./useTheme.9f954659.js";import"./Alert.a811cd40.js";import"./hook.1b918640.js";import"./createWithBsPrefix.af2c57e3.js";import"./divWithClassName.0eda4494.js";import"./index.35ce73ec.js";import"./Fade.8c636cf5.js";import"./isArray.1a1d4e26.js";import"./getEndpoint.bb7ded34.js";import"./Link.7c4fde04.js";import"./Typography.7dc1d80a.js";import"./Button.9a993919.js";import"./ButtonBase.4ded6e01.js";import"./emotion-react.browser.esm.7b70ec33.js";import"./createSvgIcon.3210eda0.js";import"./InfoOutlined.2ed956d4.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
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
