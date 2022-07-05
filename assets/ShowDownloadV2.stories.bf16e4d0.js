import{R as D}from"./index.es.82d55a6a.js";import{T as u}from"./SynapseTableConstants.07ecdebd.js";import{a as _,I as y}from"./useUserBundle.1ce41d85.js";import{u as V}from"./useGetDownloadListStatistics.ef2643bf.js";import{I as g}from"./IconSvg.d5022c82.js";import{j as o,F as s,a as c}from"./jsx-runtime.2e925369.js";import"./index.06f4a415.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./index.87d1c7b9.js";import"./Button.77571428.js";import"./index.f252d424.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./FormLabel.a635baa2.js";import"./createWithBsPrefix.f7715523.js";import"./assert.ee5a549a.js";import"./iframe.ca48114a.js";import"./index.8cde812d.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";const O=window.React.useEffect;function t({to:e,className:w=""}){var m;const{accessToken:r}=_(),d=y(),n="SHOW_DOWNLOAD_TOOLTIP",f="Click to view items in your download cart.",{data:a,isLoading:h,isError:l,error:i}=V();if(O(()=>{l&&i&&r&&d(i)},[l,i,d,r]),!r||h)return o(s,{});const p=(m=a==null?void 0:a.totalNumberOfFiles)!=null?m:0;if(p===0)return o(s,{});const S=c(s,{children:[c("span",{id:n,"data-for":n,"data-tip":f,children:[o("span",{className:"SRC-primary-text-color",children:o(g,{options:{icon:"cart"}})}),o("span",{className:"download-cart-size",children:p})]}),o(D,{delayShow:u,place:"bottom",type:"dark",effect:"solid",border:!0,id:n})]});return o("a",{className:`Download-Link v2 ${w}`,href:e,rel:"noopener noreferrer",children:S})}try{t.displayName="ShowDownloadV2",t.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"ShowDownloadV2",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"]={docgenInfo:t.__docgenInfo,name:"ShowDownloadV2",path:"src/lib/containers/download_list_v2/ShowDownloadV2.tsx#ShowDownloadV2"})}catch{}var no={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Download/ShowDownloadV2",component:t};const T=e=>o(t,{...e}),C=T.bind({});C.args={to:"/#/Other%20Components?id=downloadcartpage"};const ao=["Demo"];export{C as Demo,ao as __namedExportsOrder,no as default};
//# sourceMappingURL=ShowDownloadV2.stories.bf16e4d0.js.map
