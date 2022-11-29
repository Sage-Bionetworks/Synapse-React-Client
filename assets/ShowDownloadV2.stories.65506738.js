import{r as f,j as o,F as m,a as S}from"./jsx-runtime.c28691f9.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{V as u,a9 as _}from"./index.76b38c54.js";import{u as y}from"./useGetDownloadListStatistics.6916f930.js";import{I as V}from"./IconSvg.7c5a9ccb.js";import{T as g}from"./Tooltip.d4e3b915.js";import"./iframe.180ebcad.js";import"./index.e19c4baa.js";import"./SynapseConstants.290eab74.js";import"./Button.01687609.js";import"./styled.0b15883e.js";import"./utils.147770f5.js";import"./TransitionGroupContext.4d4491d8.js";import"./useTheme.c2c5870a.js";import"./Alert.39b51be4.js";import"./hook.668b90b8.js";import"./createWithBsPrefix.e1e1b086.js";import"./divWithClassName.5d82b3d5.js";import"./index.35ce73ec.js";import"./Fade.467f608c.js";import"./isArray.00855dd8.js";import"./getEndpoint.bb7ded34.js";import"./Link.7916e978.js";import"./Typography.979062bc.js";import"./Button.5474ded1.js";import"./ButtonBase.62e27216.js";import"./emotion-react.browser.esm.07119d08.js";import"./createSvgIcon.40781e98.js";import"./InfoOutlined.276d33db.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
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
