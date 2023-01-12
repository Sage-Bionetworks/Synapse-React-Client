import{U as t}from"./UserCardListRotate.f6144a62.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.30b0b063.js";import"./sqlFunctions.1f9ba8fc.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.24d6853f.js";import"./index.004e53d6.js";import"./index.a3b83451.js";import"./iframe.7f20f630.js";import"./Button.4f0daaa4.js";import"./styled.4350a8f3.js";import"./Tooltip.f326ea8a.js";import"./SvgIcon.a1d78dff.js";import"./useTheme.bbb702a0.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./FullWidthAlert.12957b45.js";import"./hook.82358120.js";import"./createWithBsPrefix.67525ed1.js";import"./divWithClassName.fc6b9e1a.js";import"./index.35ce73ec.js";import"./Typography.e0f3806f.js";import"./Fade.13693e7f.js";import"./isArray.1ceec0fc.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9b38face.js";import"./IconButton.32d1d9ea.js";import"./ButtonBase.32a6d369.js";import"./emotion-react.browser.esm.f592d4ba.js";import"./Link.671fdc30.js";import"./Button.9f139960.js";import"./ColumnType.0fc7f115.js";import"./UserCardList.09054a1e.js";import"./UserCard.8f93d708.js";import"./IconCopy.b0b77e27.js";import"./SkeletonTable.d4ad4639.js";import"./times.9e428882.js";import"./toInteger.ac8d0258.js";import"./isSymbol.a68e106b.js";import"./Skeleton.12921ce3.js";import"./ToastMessage.0ad637d7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.11b542f1.js";import"./toString.0784e7f5.js";import"./Overlay.6a310082.js";import"./contains.4aff3092.js";import"./usePopperMarginModifiers.ff236d51.js";import"./useWaitForDOMRef.0fac0f63.js";import"./without.353d343d.js";import"./_cacheHas.9d395393.js";import"./use-deep-compare-effect.esm.482de782.js";const et={parameters:{storySource:{source:`import React from 'react'
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
