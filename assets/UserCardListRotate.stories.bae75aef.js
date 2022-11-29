import{U as t}from"./UserCardListRotate.34f96555.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.e5135412.js";import"./sqlFunctions.57836cf5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.f6f25762.js";import"./index.71230ff4.js";import"./index.42a076b6.js";import"./iframe.4ad064c2.js";import"./Button.63ea176a.js";import"./styled.a3d17504.js";import"./utils.1cb744a4.js";import"./TransitionGroupContext.772c7333.js";import"./useTheme.2346f1e9.js";import"./Alert.4963c7c8.js";import"./hook.85ae367a.js";import"./createWithBsPrefix.315d8008.js";import"./divWithClassName.1423062f.js";import"./index.35ce73ec.js";import"./Fade.d1d2b883.js";import"./isArray.bee4a7aa.js";import"./getEndpoint.bb7ded34.js";import"./Link.1aa3c056.js";import"./Typography.1aa4ae65.js";import"./Button.e272e789.js";import"./ButtonBase.ace65aea.js";import"./emotion-react.browser.esm.078eca06.js";import"./ColumnType.744125d2.js";import"./UserCardList.d28c131b.js";import"./UserCard.f43fc2a4.js";import"./IconCopy.d207b265.js";import"./SkeletonTable.d5a10fc2.js";import"./times.92d567ce.js";import"./toInteger.5990edab.js";import"./isSymbol.0f809a04.js";import"./Skeleton.6f010adf.js";import"./IconSvg.c42d8cfc.js";import"./Tooltip.512cb681.js";import"./createSvgIcon.a94a426c.js";import"./InfoOutlined.1b7aba21.js";import"./ToastMessage.14ac3753.js";import"./FullWidthAlert.dbd163b4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.c448d212.js";import"./Overlay.0cf59319.js";import"./contains.6f7ec0ab.js";import"./usePopperMarginModifiers.f1f361c8.js";import"./useWaitForDOMRef.9e9d0981.js";import"./without.26bee3cb.js";import"./_cacheHas.9fb171dd.js";import"./use-deep-compare-effect.esm.8703b180.js";const it={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),m=i.bind({});m.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const mt=["Demo"];export{m as Demo,mt as __namedExportsOrder,it as default};
