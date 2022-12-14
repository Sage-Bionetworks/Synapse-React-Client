import{r as f,j as o,F as m,a as S}from"./jsx-runtime.edcee20f.js";import{T as D}from"./SynapseTableConstants.07ecdebd.js";import{V as u,a9 as _}from"./EntityTypeUtils.f136fe8e.js";import{u as y}from"./useDownloadList.4811622f.js";import{I as V}from"./IconSvg.a36fd00f.js";import{a as g}from"./Tooltip.6287427b.js";import"./iframe.8d602a7e.js";import"./index.e284f29f.js";import"./Fade.e73bdacf.js";import"./styled.57026967.js";import"./useTheme.c864c010.js";import"./TransitionGroupContext.9f30f89b.js";import"./isArray.ba2a5774.js";import"./Button.beed9c8a.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./SvgIcon.cf85a686.js";import"./createWithBsPrefix.fb2e744c.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./Link.c844031a.js";import"./Typography.8ba12270.js";import"./Button.237100ef.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./divWithClassName.198d5031.js";import"./useMutation.e868fb3d.js";import"./useInfiniteQuery.62663485.js";function t({to:e,className:p=""}){var d;const{accessToken:n}=u(),i=_(),c="Click to view items in your download cart.",{data:r,isLoading:w,isError:s,error:a}=y();if(f.exports.useEffect(()=>{s&&a&&n&&i(a)},[s,a,i,n]),!n||w)return o(m,{});const l=(d=r==null?void 0:r.totalNumberOfFiles)!=null?d:0;if(l===0)return o(m,{});const h=o(g,{title:c,placement:"bottom",enterNextDelay:D,children:S("span",{children:[o("span",{className:"SRC-primary-text-color",children:o(V,{icon:"cart"})}),o("span",{className:"download-cart-size",children:l})]})});return o("a",{className:`Download-Link v2 ${p}`,href:e,rel:"noopener noreferrer",children:h})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
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
