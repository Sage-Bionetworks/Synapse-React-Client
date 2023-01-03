import{U as t}from"./UserCardListRotate.9a8bf9c2.js";import{t as r}from"./SynapseConstants.d6ba6a96.js";import{j as e}from"./jsx-runtime.abb726e8.js";import"./sqlFunctions.7d5708aa.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.71551b17.js";import"./EntityTypeUtils.68b1ba2e.js";import"./index.2c5f845c.js";import"./iframe.eb3e4e59.js";import"./Fade.a8b10681.js";import"./styled.f63790d0.js";import"./useTheme.8f8018ca.js";import"./Tooltip.6e0804a9.js";import"./SvgIcon.e2be6ff9.js";import"./TransitionGroupContext.bebd881a.js";import"./isArray.ab001f9e.js";import"./Button.adf7cc86.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.7db66457.js";import"./createWithBsPrefix.1bfef79f.js";import"./IconButton.ed9fd281.js";import"./ButtonBase.5b0e8114.js";import"./emotion-react.browser.esm.e1070f55.js";import"./Link.27f5a2e0.js";import"./Typography.1b6708c1.js";import"./Button.aed7d197.js";import"./Alert.955b55b4.js";import"./hook.f27fbe2d.js";import"./divWithClassName.dfc40d29.js";import"./ColumnType.744125d2.js";import"./UserCardList.f09842f4.js";import"./UserCard.d62c0381.js";import"./IconCopy.41b2aecf.js";import"./SkeletonTable.2b1bbbfa.js";import"./times.c2450c2f.js";import"./toInteger.3bb24d7b.js";import"./isSymbol.0b88d4fa.js";import"./Skeleton.a4e29131.js";import"./ToastMessage.34e9245f.js";import"./FullWidthAlert.7ca8861d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d812a5f6.js";import"./Overlay.bdf5e094.js";import"./contains.ec0f6536.js";import"./usePopperMarginModifiers.b882fc0b.js";import"./useWaitForDOMRef.a8cf6b9d.js";import"./without.33bdfa29.js";import"./_cacheHas.7f99e048.js";import"./use-deep-compare-effect.esm.12992f59.js";const et={parameters:{storySource:{source:`import React from 'react'
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
