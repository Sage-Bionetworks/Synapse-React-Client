import{U as t}from"./UserCardListRotate.fabb16f7.js";import{w as r}from"./SynapseConstants.290eab74.js";import{j as e}from"./jsx-runtime.e45f5946.js";import"./sqlFunctions.cedc0d99.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.68a47eb2.js";import"./index.84caca20.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./Button.85a360c3.js";import"./styled.11fa6590.js";import"./utils.e1966123.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.35ce73ec.js";import"./isArray.8bc8137e.js";import"./getEndpoint.bb7ded34.js";import"./Link.7e8c9dbf.js";import"./Typography.33698c6c.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./emotion-react.browser.esm.1d99b462.js";import"./ColumnType.744125d2.js";import"./UserCardList.45c04af5.js";import"./UserCard.8473dff8.js";import"./IconCopy.9bac9114.js";import"./SkeletonTable.3b39696e.js";import"./times.dc5c8712.js";import"./toInteger.836ec642.js";import"./isSymbol.564875b4.js";import"./Skeleton.d7dd8f63.js";import"./IconSvg.fd56a75b.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./InfoOutlined.c1b233d2.js";import"./ToastMessage.dffa6777.js";import"./FullWidthAlert.1145dd98.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.c6c12783.js";import"./Overlay.2b8a7b39.js";import"./contains.82fe9acc.js";import"./usePopperMarginModifiers.40113aa3.js";import"./useWaitForDOMRef.fd0babf1.js";import"./without.046078f0.js";import"./_cacheHas.a4903518.js";import"./use-deep-compare-effect.esm.6947367c.js";const et={parameters:{storySource:{source:`import React from 'react'
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
