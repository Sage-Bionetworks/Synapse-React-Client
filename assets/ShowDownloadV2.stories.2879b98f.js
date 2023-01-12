import{r as f,j as o,F as m,a as S}from"./jsx-runtime.76b41102.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{a4 as u,ak as _}from"./index.0297a0cb.js";import{u as y}from"./useDownloadList.5afd9cdb.js";import{I as V}from"./IconSvg.175e5b3e.js";import{a as g}from"./Tooltip.40200d96.js";import"./iframe.4ac8fc26.js";import"./index.bc4e6645.js";import"./SynapseConstants.71946a35.js";import"./Button.83b95483.js";import"./styled.0442482c.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./createWithBsPrefix.ec0f4954.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./isArray.8642b77d.js";import"./getEndpoint.f1f195f5.js";import"./SvgIcon.7ad855dc.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";import"./useMutation.bf55f3f5.js";import"./useInfiniteQuery.6628dc0b.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
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
