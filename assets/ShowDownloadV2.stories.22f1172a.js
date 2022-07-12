import{R as D}from"./index.es.82d55a6a.js";import{T as u}from"./SynapseTableConstants.07ecdebd.js";import{t as _,b5 as y}from"./index.1a442768.js";import{u as V}from"./useGetDownloadListStatistics.6af03155.js";import{I as g}from"./IconSvg.a94da8a0.js";import{j as o,F as s,a as c}from"./jsx-runtime.2e925369.js";import"./index.06f4a415.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./isObject.97b5908e.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.c5966bcb.js";import"./toString.41faaa42.js";import"./assert.0e10e861.js";import"./iframe.e1ed190f.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.f6f6da7c.js";import"./utils.38c8d0df.js";import"./useTheme.990cd45a.js";import"./makeStyles.9976e655.js";import"./createSvgIcon.88863916.js";import"./InfoOutlined.21bf844a.js";import"./Clear.eb427cfa.js";const O=window.React.useEffect;function t({to:e,className:w=""}){var m;const{accessToken:n}=_(),d=y(),r="SHOW_DOWNLOAD_TOOLTIP",f="Click to view items in your download cart.",{data:a,isLoading:h,isError:l,error:i}=V();if(O(()=>{l&&i&&n&&d(i)},[l,i,d,n]),!n||h)return o(s,{});const p=(m=a==null?void 0:a.totalNumberOfFiles)!=null?m:0;if(p===0)return o(s,{});const S=c(s,{children:[c("span",{id:r,"data-for":r,"data-tip":f,children:[o("span",{className:"SRC-primary-text-color",children:o(g,{options:{icon:"cart"}})}),o("span",{className:"download-cart-size",children:p})]}),o(D,{delayShow:u,place:"bottom",type:"dark",effect:"solid",border:!0,id:r})]});return o("a",{className:`Download-Link v2 ${w}`,href:e,rel:"noopener noreferrer",children:S})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"]={docgenInfo:t.__docgenInfo,name:"ShowDownloadV2",path:"src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"})}catch{}var X={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Download/ShowDownloadV2",component:t};const T=e=>o(t,{...e}),C=T.bind({});C.args={to:"/#/Other%20Components?id=downloadcartpage"};const Z=["Demo"];export{C as Demo,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=ShowDownloadV2.stories.22f1172a.js.map
