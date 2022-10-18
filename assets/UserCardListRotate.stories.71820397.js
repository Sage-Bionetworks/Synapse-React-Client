import{U as t}from"./UserCardListRotate.a8ffe445.js";import{ax as r}from"./index.845be1a0.js";import{j as e}from"./jsx-runtime.a4497586.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.6980500a.js";import"./UserCard.ea6608ec.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.6d9a9cc0.js";import"./SkeletonTable.5f0641c1.js";import"./times.53464203.js";import"./toInteger.0f367a79.js";import"./isSymbol.7191624c.js";import"./isArray.c41320ad.js";import"./Button.7ac62e85.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.9af51d39.js";import"./withStyles.e58effce.js";import"./Tooltip.a6d04027.js";import"./createSvgIcon.e5aecfe8.js";import"./SvgIcon.22d8eb07.js";import"./utils.815e1282.js";import"./index.917fd15d.js";import"./iframe.ee324841.js";import"./makeStyles.589ac29c.js";import"./IconSvg.840b4acb.js";import"./InfoOutlined.5d54a47c.js";import"./ToastMessage.29ea9537.js";import"./FullWidthAlert.6e6e96b4.js";import"./Typography.15373abf.js";import"./Alert.ea5d26f8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d008468a.js";import"./Overlay.7abe92df.js";import"./useWaitForDOMRef.e71a20e5.js";import"./usePopperMarginModifiers.8523f7d7.js";import"./without.27df27c9.js";import"./_cacheHas.5a4b096a.js";import"./use-deep-compare-effect.esm.97258745.js";const K={parameters:{storySource:{source:`import React from 'react'
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
