import{U as t}from"./UserCardListRotate.71ac8779.js";import{v as r}from"./SynapseConstants.b6aa8bf5.js";import{j as e}from"./jsx-runtime.02a28547.js";import"./sqlFunctions.ead23534.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d8464a8f.js";import"./index.4fdef5f4.js";import"./index.a309e2be.js";import"./iframe.0b294b31.js";import"./Button.47e26dba.js";import"./styled.2f449268.js";import"./utils.34aadcdd.js";import"./TransitionGroupContext.70688128.js";import"./Alert.3df3eb36.js";import"./createWithBsPrefix.c66fa874.js";import"./index.35ce73ec.js";import"./isArray.46d1af5d.js";import"./getEndpoint.bb7ded34.js";import"./Link.4b81c1ee.js";import"./Typography.67a640f4.js";import"./Button.1972b2d6.js";import"./ButtonBase.9cc6b40c.js";import"./ColumnType.744125d2.js";import"./UserCardList.352af1af.js";import"./UserCard.8e05b9f1.js";import"./IconCopy.4f34e504.js";import"./SkeletonTable.71120aff.js";import"./times.0912663f.js";import"./toInteger.d773cbc0.js";import"./isSymbol.f23d6818.js";import"./Skeleton.441b86fc.js";import"./IconSvg.19fd41bf.js";import"./Tooltip.edd9e9f0.js";import"./createSvgIcon.d569702c.js";import"./InfoOutlined.88356fd8.js";import"./ToastMessage.a8e621dc.js";import"./FullWidthAlert.4f5282fe.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.77032a6a.js";import"./Overlay.f4a71f57.js";import"./contains.81250605.js";import"./usePopperMarginModifiers.129c8d3b.js";import"./useWaitForDOMRef.030a4d07.js";import"./without.a4daf102.js";import"./_cacheHas.2b87484d.js";import"./use-deep-compare-effect.esm.7ded1864.js";const $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const tt=["Demo"];export{s as Demo,tt as __namedExportsOrder,$ as default};
