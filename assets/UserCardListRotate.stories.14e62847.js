import{U as t}from"./UserCardListRotate.8fab1755.js";import{t as r}from"./SynapseConstants.aef18750.js";import{j as e}from"./jsx-runtime.d6be66a9.js";import"./sqlFunctions.09325119.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.8e32ecc7.js";import"./index.b3fc12c1.js";import"./index.3b7d1b21.js";import"./iframe.78dc3b5d.js";import"./Button.58f5aaec.js";import"./styled.f07e33c6.js";import"./Tooltip.c89a275a.js";import"./SvgIcon.b9658c5d.js";import"./useTheme.0cbb662e.js";import"./TransitionGroupContext.27368eb3.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./createWithBsPrefix.139b0869.js";import"./divWithClassName.f4023709.js";import"./index.35ce73ec.js";import"./Typography.079c4f38.js";import"./Fade.c734522e.js";import"./isArray.3ed41029.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.67904b39.js";import"./IconButton.3b892d3a.js";import"./ButtonBase.250c511d.js";import"./emotion-react.browser.esm.8203c469.js";import"./Link.7f48e2dc.js";import"./Button.bef5272a.js";import"./ColumnType.0fc7f115.js";import"./UserCardList.a9b81b89.js";import"./UserCard.3b30c3b3.js";import"./IconCopy.120eb6a8.js";import"./SkeletonTable.8490bedb.js";import"./times.b541d215.js";import"./toInteger.5e3c3f3b.js";import"./isSymbol.eb29c468.js";import"./Skeleton.c281df81.js";import"./ToastMessage.1551e33e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.1755aefe.js";import"./toString.62a6def8.js";import"./Overlay.16f87717.js";import"./contains.ac446ee4.js";import"./usePopperMarginModifiers.f5f095e7.js";import"./useWaitForDOMRef.8bdf7b9b.js";import"./without.8ff8fd5d.js";import"./_cacheHas.4141299d.js";import"./use-deep-compare-effect.esm.bde19c32.js";const et={parameters:{storySource:{source:`import React from 'react'
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
