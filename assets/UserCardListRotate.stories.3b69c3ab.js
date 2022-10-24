import{U as t}from"./UserCardListRotate.cfc96e28.js";import{ax as r}from"./index.5eb45ec5.js";import{j as e}from"./jsx-runtime.66426239.js";import"./sqlFunctions.1d7d9843.js";import"./ColumnType.744125d2.js";import"./UserCardList.181a41e6.js";import"./UserCard.11db0e1e.js";import"./getEndpoint.bb7ded34.js";import"./IconCopy.e9990250.js";import"./SkeletonTable.0efda436.js";import"./times.0a791da1.js";import"./toInteger.ba340474.js";import"./isSymbol.e6b0fab2.js";import"./isArray.563d20f4.js";import"./Button.0925c41b.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Skeleton.b36923c9.js";import"./withStyles.c0f84b5f.js";import"./Tooltip.20b2ac09.js";import"./createSvgIcon.11e8f9d3.js";import"./SvgIcon.bec2abf5.js";import"./utils.dd2a9ff9.js";import"./index.06c514da.js";import"./iframe.7709cd8b.js";import"./makeStyles.c7a35cbe.js";import"./IconSvg.43ff89f7.js";import"./InfoOutlined.009cccae.js";import"./ToastMessage.0eedc8b3.js";import"./FullWidthAlert.28f85f7a.js";import"./Typography.23a20d7c.js";import"./Alert.6f0c6d33.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2b0d7b31.js";import"./Overlay.99b543ad.js";import"./useWaitForDOMRef.3996ecc7.js";import"./usePopperMarginModifiers.ba99acc1.js";import"./without.f02e359a.js";import"./_cacheHas.6245eac1.js";import"./use-deep-compare-effect.esm.1637ad2d.js";const K={parameters:{storySource:{source:`import React from 'react'
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
