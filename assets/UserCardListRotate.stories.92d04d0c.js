import{U as t}from"./UserCardListRotate.70b58e93.js";import{ax as r}from"./index.6f245744.js";import{j as e}from"./jsx-runtime.7534b5a0.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.6506239b.js";import"./UserCard.aa295333.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.66e91ea0.js";import"./SkeletonTable.7dcdf0c1.js";import"./times.837d97f6.js";import"./toInteger.39442f31.js";import"./isSymbol.c1d6cf65.js";import"./isArray.1150e90d.js";import"./Button.facab635.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.30b9665e.js";import"./withStyles.ecbbcd0d.js";import"./Tooltip.71890e59.js";import"./createSvgIcon.ae6f4177.js";import"./SvgIcon.9b76f9a1.js";import"./utils.b18b59db.js";import"./index.5a0550e3.js";import"./iframe.cb5f3f40.js";import"./makeStyles.c0018ba8.js";import"./IconSvg.2709626b.js";import"./InfoOutlined.9d5ad8e8.js";import"./ToastMessage.1747dfd4.js";import"./FullWidthAlert.95dc5339.js";import"./Typography.31b00c6c.js";import"./Alert.9c82c23c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4137f4c9.js";import"./Overlay.47a63549.js";import"./useWaitForDOMRef.fac5222c.js";import"./usePopperMarginModifiers.c83e318d.js";import"./without.a4f2b18e.js";import"./_cacheHas.a9d5a489.js";import"./use-deep-compare-effect.esm.2a6c3723.js";const K={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:60,line:15},endLoc:{col:1,line:17},startBody:{col:60,line:15},endBody:{col:1,line:17}}}}},title:"Home Page/UserCardListRotate",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sql:"SELECT * FROM syn13897207 where isFeatured=true",count:3,useQueryResultUserData:!0,size:r,summaryLinkText:"EXPLORE ALL PEOPLE",summaryLink:"/Explore/People"};const N=["Demo"];export{i as Demo,N as __namedExportsOrder,K as default};
