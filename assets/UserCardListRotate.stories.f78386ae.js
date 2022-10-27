import{U as t}from"./UserCardListRotate.95cf364f.js";import{ax as r}from"./index.8be8b52c.js";import{j as e}from"./jsx-runtime.bdebd148.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.821fae22.js";import"./UserCard.19c84b60.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.115b585f.js";import"./SkeletonTable.c9ae53bc.js";import"./times.e0d233ea.js";import"./toInteger.22de24ba.js";import"./isSymbol.a301e13d.js";import"./isArray.b696739b.js";import"./Button.2b7fb582.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.8bc2d5f2.js";import"./withStyles.d0c35d1c.js";import"./Tooltip.3d6e7019.js";import"./createSvgIcon.27bceae9.js";import"./SvgIcon.2b88c9a1.js";import"./utils.d8861539.js";import"./index.131112ec.js";import"./iframe.92685df1.js";import"./makeStyles.93952b3f.js";import"./IconSvg.a57df8e4.js";import"./InfoOutlined.ca5de4f0.js";import"./ToastMessage.9511113a.js";import"./FullWidthAlert.25897ee9.js";import"./Typography.d5646d3f.js";import"./Alert.2a491573.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fdacb119.js";import"./Overlay.73c56702.js";import"./useWaitForDOMRef.dab4e6d9.js";import"./usePopperMarginModifiers.0915379d.js";import"./without.204274b0.js";import"./_cacheHas.e0293e09.js";import"./use-deep-compare-effect.esm.2dfbd593.js";const K={parameters:{storySource:{source:`import React from 'react'
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
