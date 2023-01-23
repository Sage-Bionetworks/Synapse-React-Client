import{U as t}from"./UserCardListRotate.511948c1.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.b9dbe3f2.js";import"./sqlFunctions.32cb4e2b.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.89fbadd0.js";import"./index.5da0c2fe.js";import"./index.1d295946.js";import"./iframe.daa7e99b.js";import"./Button.5e8fef04.js";import"./styled.b8523d56.js";import"./Tooltip.48a3285f.js";import"./SvgIcon.07fafc9f.js";import"./useTheme.0510b97a.js";import"./TransitionGroupContext.550f3593.js";import"./FullWidthAlert.4c795642.js";import"./hook.8a461b2d.js";import"./createWithBsPrefix.e49426e0.js";import"./divWithClassName.39a68f1e.js";import"./index.35ce73ec.js";import"./Typography.67fe2a50.js";import"./Fade.79c18b91.js";import"./isArray.cd664950.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.e161b9ac.js";import"./IconButton.92911f6e.js";import"./ButtonBase.a93e0872.js";import"./emotion-react.browser.esm.c079a2eb.js";import"./Link.da3e8d7d.js";import"./Button.7c5736c7.js";import"./ColumnType.0fc7f115.js";import"./UserCardList.a1e65843.js";import"./UserCard.4bb4c375.js";import"./IconCopy.e1e77b1a.js";import"./SkeletonTable.4e7a5f80.js";import"./times.0d4bfec0.js";import"./toInteger.ac9e6667.js";import"./isSymbol.0dd8f9e4.js";import"./Skeleton.e124e8e4.js";import"./ToastMessage.3861395a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.dbc9074b.js";import"./toString.e4b44ed1.js";import"./Overlay.b50e2181.js";import"./contains.c92a1cab.js";import"./usePopperMarginModifiers.df9835fb.js";import"./useWaitForDOMRef.a0e6e40c.js";import"./without.42fc4fba.js";import"./_cacheHas.59c4bb78.js";import"./use-deep-compare-effect.esm.29b168ec.js";const et={parameters:{storySource:{source:`import React from 'react'
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
