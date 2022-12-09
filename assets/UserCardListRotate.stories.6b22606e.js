import{U as t}from"./UserCardListRotate.92887bf9.js";import{t as r}from"./SynapseConstants.4792b5b5.js";import{j as e}from"./jsx-runtime.43a8fcf9.js";import"./sqlFunctions.c711a305.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.6069a860.js";import"./index.05d3527e.js";import"./index.91cff701.js";import"./iframe.f725ca92.js";import"./Button.1bf4e27e.js";import"./styled.76b26431.js";import"./Tooltip.9e1c2716.js";import"./SvgIcon.6442358d.js";import"./useTheme.af9f301b.js";import"./TransitionGroupContext.b91ad5da.js";import"./Alert.52cd8abc.js";import"./hook.21b06627.js";import"./createWithBsPrefix.5369d369.js";import"./divWithClassName.ce1df20c.js";import"./index.35ce73ec.js";import"./Fade.b7951dc7.js";import"./isArray.ef4abd22.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.710ae2ef.js";import"./IconButton.f195eccf.js";import"./ButtonBase.48ba7e09.js";import"./emotion-react.browser.esm.4fa41df1.js";import"./Link.fae97ed4.js";import"./Typography.1c91c940.js";import"./Button.c355b500.js";import"./ColumnType.744125d2.js";import"./UserCardList.83c657fc.js";import"./UserCard.85d537d7.js";import"./IconCopy.eda85edd.js";import"./SkeletonTable.2f3518f6.js";import"./times.0141f5ac.js";import"./toInteger.6147b6bf.js";import"./isSymbol.9cf935a3.js";import"./Skeleton.2b718cf1.js";import"./ToastMessage.0277286d.js";import"./FullWidthAlert.f72a4ef7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5ab1be4f.js";import"./Overlay.e96f98b3.js";import"./contains.96fd987b.js";import"./usePopperMarginModifiers.498ed7f0.js";import"./useWaitForDOMRef.14fc8eae.js";import"./without.ba75708a.js";import"./_cacheHas.61ea5ffc.js";import"./use-deep-compare-effect.esm.73b4fb0f.js";const et={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserCardListRotate from './UserCardListRotate'
import { MEDIUM_USER_CARD } from '../utils/SynapseConstants'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Home Page/UserCardListRotate',
  component: UserCardListRotate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof UserCardListRotate>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserCardListRotate> = args => (
  <UserCardListRotate {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  sql: 'SELECT * FROM syn13897207 where isFeatured=true',
  count: 3,
  useQueryResultUserData: true,
  size: MEDIUM_USER_CARD,
  summaryLinkText: 'EXPLORE ALL PEOPLE',
  summaryLink: '/Explore/People',
}
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const it=["Demo"];export{s as Demo,it as __namedExportsOrder,et as default};
