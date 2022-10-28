import{r as p,a as g,j as o}from"./jsx-runtime.1d4416c9.js";import{I as T}from"./IconSvg.a5337a6a.js";import{a as _}from"./CardContainerLogic.6b85104b.js";import"./iframe.6e2e208e.js";import"./SvgIcon.1ce682e0.js";import"./withStyles.d9b674b1.js";import"./Tooltip.514cbe94.js";import"./createSvgIcon.1518894e.js";import"./utils.12e9eddb.js";import"./index.b4915227.js";import"./makeStyles.0711e4e8.js";import"./InfoOutlined.bc9acc28.js";import"./index.733ef2d4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.52817769.js";import"./index.57d09176.js";import"./Alert.a029b8a7.js";import"./createWithBsPrefix.e9487138.js";import"./index.35ce73ec.js";import"./isArray.cf5064fd.js";import"./getEndpoint.bb7ded34.js";import"./sqlFunctions.cfb3693d.js";import"./RegularExpressions.3cd69849.js";import"./useGetInfoFromIds.023dc351.js";import"./use-deep-compare-effect.esm.550c47db.js";import"./uniq.2cacf64d.js";import"./_baseSlice.50189bc5.js";import"./toInteger.20441ff0.js";import"./isSymbol.48f5f8d1.js";import"./_cacheHas.45054515.js";import"./without.11794d25.js";import"./uniqueId.b31d8e69.js";import"./_Set.81322f5c.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.c9f8ea06.js";import"./TypeUtils.a2c41307.js";import"./FacetNav.18a94871.js";import"./queryUtils.ca99dead.js";import"./useInfiniteQuery.f21582a5.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.118b9836.js";import"./_baseClone.ef28406f.js";import"./_getTag.9cf40ed3.js";import"./NoSearchResults.17c0b8b2.js";import"./NoData.f802ed9a.js";import"./unCamelCase.07e38083.js";import"./useEntity.0c38a2f1.js";import"./useMutation.c45e7ceb.js";import"./pick.3a49f954.js";import"./isEqual.38765cac.js";import"./ElementWithTooltip.52728afe.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.0e10b3ef.js";import"./usePrevious.4f8ee04e.js";import"./contains.ed3c5fde.js";import"./usePopperMarginModifiers.ae1274b1.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0b72edd3.js";import"./RadioGroup.28342e68.js";import"./moment.a565bb48.js";import"./RangeSlider.25c35388.js";import"./factory.7178a034.js";import"./react-sizeme.ec5fe5ee.js";import"./Skeleton.5fb82d71.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2244e51f.js";import"./Typography.8752acbc.js";import"./Modal.0b4122af.js";import"./inheritsLoose.dffc5cd5.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.9692dd43.js";import"./SelectionCriteriaPill.3410af6c.js";import"./Close.897e58c4.js";import"./react-select.esm.67ba8576.js";import"./Select-54ac8379.esm.c7895ad9.js";import"./CustomSelectWidget.bf3784d7.js";import"./index.browser.e60e72d5.js";import"./WarningModal.a1ce61f8.js";import"./react-intersection-observer.esm.c059a8f3.js";import"./UserCard.8a53ad4c.js";import"./IconCopy.027a3c44.js";import"./SkeletonTable.944ff781.js";import"./times.c10c287f.js";import"./ToastMessage.97b225d1.js";import"./FullWidthAlert.fd7cf951.js";import"./Overlay.12b5a369.js";import"./DateFormatter.f8d5f7bf.js";import"./core.esm.2097e0b7.js";import"./isEmpty.74b3e09f.js";import"./union.e1eabe6c.js";import"./isString.c6b3a64b.js";import"./useGetDownloadListStatistics.77a66886.js";import"./QueryCount.39ca8105.js";import"./useGetAccessRequirement.83dcd0d3.js";import"./ManagedACTAccessRequirementStatus.226b91ad.js";import"./FileUpload.708f4707.js";import"./UserSearchBox.d789c0da.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.f7299049.js";import"./EntityLink.b7bb42bf.js";import"./SynapseVideo.1201d15f.js";import"./IconList.d299fd42.js";import"./UserCardList.41c52d50.js";const C=["title","bold","italic","strikethrough","code","latex","subscript","superscript","link","image"],f={title:{openSyntax:"###",closeSyntax:""},bold:{openSyntax:"**",closeSyntax:"**"},italic:{openSyntax:"_",closeSyntax:"_"},strikethrough:{openSyntax:"--",closeSyntax:"--"},code:{openSyntax:"```",closeSyntax:"```"},latex:{openSyntax:"$$\\(",closeSyntax:"\\)$$"},subscript:{openSyntax:"~",closeSyntax:"~"},superscript:{openSyntax:"^",closeSyntax:"^"},link:{openSyntax:"[",closeSyntax:"](url)"},image:{openSyntax:"![",closeSyntax:"](image-url)"}};var x=(r=>(r.WRITE="WRITE",r.PREVIEW="PREVIEW",r))(x||{});const a=({placeholder:r})=>{const[d,h]=p.exports.useState("WRITE"),[e,l]=p.exports.useState(""),[u,S]=p.exports.useState(0),i=p.exports.useRef(null);p.exports.useEffect(()=>{const t=i.current;t&&t.setSelectionRange(u,u)},[i,u]);const b=t=>{const n=i.current;if(n){const s=n.selectionStart,y=n.selectionEnd,k=e.substring(s,y),E=e.substring(0,s),w=e.substring(y,e.length),m=f[t].openSyntax,M=f[t].closeSyntax;switch(t){case"code":{const c=[];c.push(E,m,k,M,w),l(c.join(`\r
`)),i.current.focus(),S(s+m.length+2);break}case"title":case"bold":case"italic":case"strikethrough":case"latex":case"subscript":case"superscript":case"link":case"image":{const c=`${E}${m}${k}${M}${w}`;i.current.focus(),S(s+m.length),l(c)}}}};return g("div",{className:"bootstrap-4-backport MarkdownEditor",children:[g("div",{className:"MarkdownEditorControls",children:[o("div",{className:"Tabs",children:Object.keys(x).map(t=>o("button",{className:"Tab",role:"tab","aria-selected":t===d,onClick:n=>{n.stopPropagation(),h(x[t])},children:t},t))}),d==="WRITE"&&o("div",{className:"MarkdownEditorControlsToolbar",children:C.map(t=>o("button",{onClick:()=>b(t),children:o(T,{options:{icon:t}})},t))})]}),o("div",{children:d==="WRITE"?o("textarea",{onChange:t=>l(t.target.value),style:{width:"100%"},rows:6,value:e,ref:i,placeholder:r}):e?o(_,{markdown:e}):"Nothing to preview"})]})};try{a.displayName="MarkdownEditor",a.__docgenInfo={description:"",displayName:"MarkdownEditor",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/markdown/MarkdownEditor.tsx#MarkdownEditor"]={docgenInfo:a.__docgenInfo,name:"MarkdownEditor",path:"src/lib/containers/markdown/MarkdownEditor.tsx#MarkdownEditor"})}catch{}const vo={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MarkdownEditor } from './MarkdownEditor'

export default {
  title: 'Markdown/MarkdownEditor',
  component: MarkdownEditor,
  argTypes: {},
} as ComponentMeta<typeof MarkdownEditor>

const Template: ComponentStory<typeof MarkdownEditor> = args => (
  <MarkdownEditor {...args} />
)

export const MarkdownEditorDemo = Template.bind({})
MarkdownEditorDemo.args = {
  placeholder: 'Leave your comment...',
}
`,locationsMap:{"markdown-editor-demo":{startLoc:{col:56,line:12},endLoc:{col:1,line:14},startBody:{col:56,line:12},endBody:{col:1,line:14}}}}},title:"Markdown/MarkdownEditor",component:a,argTypes:{}},R=r=>o(a,{...r}),v=R.bind({});v.args={placeholder:"Leave your comment..."};const Io=["MarkdownEditorDemo"];export{v as MarkdownEditorDemo,Io as __namedExportsOrder,vo as default};
