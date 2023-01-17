import{U as t}from"./UserCardListRotate.2d95d869.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.732db4fa.js";import"./sqlFunctions.fb8b0140.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.776eed93.js";import"./index.6ade810e.js";import"./index.f08547e5.js";import"./iframe.309bdcd0.js";import"./Button.14842d9b.js";import"./styled.7d1b1387.js";import"./Tooltip.b3eb933e.js";import"./SvgIcon.883206f0.js";import"./useTheme.23d779b8.js";import"./TransitionGroupContext.25f1619e.js";import"./FullWidthAlert.b4689dd3.js";import"./hook.7d829a86.js";import"./createWithBsPrefix.e55f4707.js";import"./divWithClassName.0d41da1a.js";import"./index.35ce73ec.js";import"./Typography.52fcc329.js";import"./Fade.a9768a9d.js";import"./isArray.ab714070.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.f8a92c9e.js";import"./IconButton.4e309ec1.js";import"./ButtonBase.caa5bbee.js";import"./emotion-react.browser.esm.4ae44601.js";import"./Link.04b76f3f.js";import"./Button.2b5fc967.js";import"./ColumnType.0fc7f115.js";import"./UserCardList.615341b8.js";import"./UserCard.5dc8ad35.js";import"./IconCopy.8fbe8f6c.js";import"./SkeletonTable.cff03cd3.js";import"./times.37016f17.js";import"./toInteger.e9616708.js";import"./isSymbol.3aa759ff.js";import"./Skeleton.00a5a513.js";import"./ToastMessage.ca9da849.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.68f55a89.js";import"./toString.083d15f6.js";import"./Overlay.c9c798f2.js";import"./contains.d723cb84.js";import"./usePopperMarginModifiers.7728e467.js";import"./useWaitForDOMRef.08d8bdbd.js";import"./without.2d4a20d2.js";import"./_cacheHas.e143a942.js";import"./use-deep-compare-effect.esm.629c5c42.js";const et={parameters:{storySource:{source:`import React from 'react'
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
